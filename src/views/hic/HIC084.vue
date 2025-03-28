<template>
  <q-card class="q-mx-auto format">
    <div>
      <q-card-section>
        <div class="text-center">
          <q-toggle
            v-model="opcion_hic084"
            color="primary"
            keep-color
            false-value="REVOCAR"
            true-value="AUTORIZAR"
            unchecked-icon="block"
            checked-icon="check_circle"
            label="¿Autorizar o revocar este consentimiento?"
          />
          <p :class="opcion_hic084 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
            <q-chip :color="opcion_hic084 == 'AUTORIZAR' ? 'green' : 'red'" class="text-white" v-if="opcion_hic084">
              {{ opcion_hic084 }}
            </q-chip>
          </p>
        </div>
        <p style="text-align: justify">
          El consentimiento informado es una “manifestación libre y voluntaria, que da una persona por escrito luego de la asesoría pre prueba, con el
          fin de realizarle el examen diagnóstico de laboratorio para detectar la infección por VIH, el cual deberá consignarse en la historia
          clínica”.
        </p>
        <p style="text-align: justify">
          Yo, <span class="text-bold">{{ getPaci.descrip }} </span> identificado con <span class="text-bold">{{ getPaci.tipo_id }} </span> No.
          <span class="text-bold">{{ getPaci.cod }} </span> certifico que han explicado en qué consiste este consentimiento informado y que entiendo
          su contenido, incluyendo propósitos, limitaciones, beneficios y riesgos de realizarme una prueba diagnóstica para VIH. En virtud de ello
          manifiesto que:
        </p>
        <div class="row q-mt-md q-mb-md">
          <div style="border: 1px solid #ccc; width: 50%">
            <p class="text-center" style="font-weight: bold; margin-top: 10px; margin-left: 10px">ASESORIA PRE -TEST</p>
          </div>
          <div style="border: 1px solid #ccc; width: 50%">
            <p class="text-center" style="font-weight: bold; margin-top: 10px; margin-left: 10px">ASESORIA POS- TEST</p>
          </div>
          <div class="text-left row" style="border: 1px solid #ccc; width: 50%">
            <div class="row q-mt-md q-mb-md">
              <p style="font-weight: bold; margin-top: 10px; margin-left: 10px">Fecha</p>
              <Input_ v-model="HIC084.fecha_pre_test" :field="form.fecha_pre_test" />
            </div>
            <div class="row q-mt-md q-mb-md">
              <p style="font-weight: bold; margin-top: 10px; margin-left: 10px">Hora</p>
              <Input_ v-model="HIC084.hora_pre_test" :field="form.hora_pre_test" />
            </div>
          </div>
          <div class="text-left row" style="border: 1px solid #ccc; width: 50%">
            <div class="row q-mt-md q-mb-md">
              <p style="font-weight: bold; margin-top: 10px; margin-left: 10px">Fecha</p>
              <Input_ v-model="HIC084.fecha_pos_test" :field="form.fecha_pos_test" />
            </div>
            <div class="row q-mt-md q-mb-md">
              <p style="font-weight: bold; margin-top: 10px; margin-left: 10px">Hora</p>
              <Input_ v-model="HIC084.hora_pos_test" :field="form.hora_pos_test" />
            </div>
          </div>
        </div>
      </q-card-section>
    </div>
    <q-separator />
    <q-card-actions align="around" class="row">
      <div class="col-12 row justify-around">
        <ContainerFirma
          quien_firma="FIRMA PACIENTE"
          :firmador="getPaci.descrip"
          :registro_profe="getPaci.cod"
          @reciFirma="callBackFirma"
          :huella_="huella_paci"
          class="col-4"
        />
        <ContainerFirma
          :firmador="getAcomp.descrip || 'NO HAY ACOMPAÑANTE'"
          :disable="!getAcomp.descrip ? true : false"
          quien_firma="FIRMA TUTOR O FAMILIAR"
          :registro_profe="getAcomp.cod"
          @reciFirma="callBackFirmaAcomp"
          class="col-4"
        />
        <ContainerFirma
          @reciFirma="callBackFirma"
          :firma_="firma_prof"
          :firmador="getProf.descrip"
          :descrip_prof="getProf.descrip_atiende"
          :registro_profe="getProf.registro_profe"
          quien_firma="FIRMA PROFESIONAL"
          class="col-4"
        />
      </div>
    </q-card-actions>

    <div class="col-12 row justify-center q-my-md">
      <q-btn
        :disable="opcion_hic084 ? false : true"
        @click="validarDatos"
        icon-right="check_circle"
        class="q-mr-lg"
        color="green"
        label="GRABAR"
        type="submit"
      />
    </div>
  </q-card>
</template>

<script setup>
import { useModuleFormatos, useApiContabilidad, useModuleCon851, useModuleCon851p } from "@/store";
import { impresionHIC085, impresion, generarArchivo } from "@/impresiones";
import { ref, defineAsyncComponent, onMounted, reactive } from "vue";
import { utilsFormat } from "@/formatos/utils";
import { useRouter } from "vue-router";
import dayjs from "dayjs";

const ContainerFirma = defineAsyncComponent(() => import("@/components/global/containerFirma.vue"));
const router = useRouter();

const { getDll$, _getFirma$, _getHuella$, guardarFile$, enviarCorreo$, getEncabezado } = useApiContabilidad();
const { getPaci, getAcomp, getHc, getProf, getEmpresa, getSesion } = useModuleFormatos();
const { CON851P } = useModuleCon851p();
const { CON851 } = useModuleCon851();

const firma_recibida_acomp = ref("");
const firma_recibida = ref("");
const huella_paci = ref(null);
const firma_prof = ref(null);
const nit_usu = ref(parseInt(getEmpresa.nitusu) || 0);

const array_tipo_afilia = ref([
  { COD: "1", DESCRIP: "COTIZANTE     " },
  { COD: "2", DESCRIP: "BENEFICIARIO  " },
  { COD: "3", DESCRIP: "COT. PENSIONAD" },
  { COD: "4", DESCRIP: "UPC ADICIONAL " },
  { COD: "5", DESCRIP: "CABEZA FAMILIA" },
  { COD: "6", DESCRIP: "GRUPO FAMILIAR" },
  { COD: "0", DESCRIP: "SIN DETERMINAR" },
]);
const HIC084 = reactive({
  fecha: "",
  codigo: "",
  departamento: "",
  municipio: "",
  otr_tipo_afilia: "",

  fecha_pos_test: "",
  fecha_pre_test: "",
  hora_pos_test: "",
  hora_pre_test: "",
});

const form = ref({
  fecha_pos_test: {
    id: "fecha_pos_test",
    maxlength: "10",
    label: "",
    tipo: "date",
    campo_abierto: true,
  },
  fecha_pre_test: {
    id: "fecha_pre_test",
    maxlength: "10",
    label: "",
    tipo: "date",
    campo_abierto: true,
  },
  hora_pos_test: {
    id: "hora_pos_test",
    maxlength: "10",
    label: "",
    tipo: "time",
    campo_abierto: true,
  },
  hora_pre_test: {
    id: "hora_pre_test",
    maxlength: "10",
    label: "",
    tipo: "time",
    campo_abierto: true,
  },
});
const opcion_hic084 = ref(null);

onMounted(() => {
  HIC084.fecha = dayjs(getEmpresa.fecha_act).format("YYYY-MM-DD");
  getFirmaProf();
});

const getFirmaProf = async () => {
  try {
    firma_prof.value = await _getFirma$({ codigo: Number(getProf.cod) });
    huella_paci.value = await _getHuella$({ codigo: getPaci.cod });
  } catch (error) {
    console.error(error);
    CON851("?", "info", error);
  }
};

const validarDatos = () => {
  if (!firma_recibida.value && !getAcomp.cod) {
    return CON851("?", "info", "No se ha realizado la firma del paciente");
  }
  if (getAcomp.cod && !firma_recibida_acomp.value) {
    return CON851("?", "info", "No se ha realizado la firma del acompañante");
  }

  grabarConsentimiento();
};

const grabarConsentimiento = async () => {
  const datos_format = JSON.parse(JSON.stringify(HIC084));
  let datos = {
    nit_entid: nit_usu.value,
    estado: opcion_hic084.value == "AUTORIZAR" ? "1" : "2",
    id_acomp: getAcomp.cod.padStart(15, "0"),
    paren_acomp: getSesion.paren_acomp,
    oper_consen: getSesion.oper,
    llave_consen: getHc.llave,
    cod_med: getProf.cod,
    cod_consen: "HIC084",
    disentimiento: "N",
    ...datos_format,
  };

  getDll$({ modulo: `save_consen.dll`, data: { ...datos } })
    .then((data) => {
      if (data?.llave_consen) {
        const fecha = data?.llave_consen.slice(23, 31);
        return grabarFirmaConsen(data?.llave_consen);
      }
      CON851("?", "error", "Error al guardar el consentimiento");
    })
    .catch((error) => {
      console.error(error);
      CON851("?", "error", error);
    });
};

const grabarFirmaConsen = async (llave) => {
  try {
    await guardarFile$({ base64: firma_recibida.value, codigo: `P${llave}` });
    getAcomp.cod.trim() && (await guardarFile$({ base64: firma_recibida_acomp.value, codigo: `A${llave}` }));

    if (getEmpresa.envio_email == "N") {
      await imprimirConsen();
      return router.back();
    }
    return CON851P(
      "?",
      "info",
      "¿Deseas enviar el correo del consentimientos?",
      async () => {
        await imprimirConsen();
        router.back();
      },
      async () => {
        const file = await imprimirConsen();
        if (getPaci.email && !/.+@.+\..+/.test(getPaci.email.toLowerCase())) {
          return CON851("?", "info", "El correo no es valido", () => router.back());
        }

        const response = await enviarCorreo$({
          cuerpo: `SE ADJUNTA ${getEncabezado.descrip} PARA ${getPaci.descrip} IDENTIDICADO CON ${getPaci.cod}`,
          destino: getPaci.email.toLowerCase(),
          subject: getEncabezado.descrip,
          file,
        });
        CON851("?", response.tipo, response.message, () => router.back());
      }
    );
  } catch (error) {
    console.error(error);
    CON851("?", "info", error);
  }
};

const imprimirConsen = async () => {
  try {
    const datos_hic085 = {
      autorizo: opcion_hic084.value == "AUTORIZAR" ? true : false,
      empresa: getEmpresa,
      paciente: getPaci,
      prof: getProf,
      acomp: getAcomp,
      paren_acomp: getSesion.paren_acomp,
      firmas: {
        firma_paci: firma_recibida.value ? true : false,
        huella_paci: huella_paci.value ? true : false,
        firma_acomp: firma_recibida_acomp.value ? true : false,
        firma_prof: firma_prof.value ? true : false,
      },
      ...HIC084,
    };

    const firmas = {
      img_firma_consen: firma_recibida.value,
      img_firma_paci: firma_recibida.value,
      img_huella_paci: huella_paci.value,
      img_firma_acomp: firma_recibida_acomp.value,
      firma_prof: firma_prof.value,
    };

    const docDefinitionPrint = await utilsFormat({
      datos: { ...firmas, cod_consen: "HIC084" },
      content: impresionHIC085({
        datos: datos_hic085,
      }),
    });
    const docDefinitionFile = await utilsFormat({
      datos: { ...firmas, cod_consen: "HIC084" },
      content: impresionHIC085({
        datos: datos_hic085,
      }),
    });

    await impresion({ docDefinition: docDefinitionPrint });
    const response_impresion = await generarArchivo({ docDefinition: docDefinitionFile });
    return response_impresion;
  } catch (error) {
    console.error("error -->", error);
  }
};

const callBackFirma = (data_firma) => {
  data_firma && (firma_recibida.value = data_firma);
};

const callBackFirmaAcomp = (data_firma) => {
  data_firma && (firma_recibida_acomp.value = data_firma);
};
</script>
