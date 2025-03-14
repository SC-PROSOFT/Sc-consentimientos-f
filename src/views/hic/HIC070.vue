<template>
  <q-card class="q-mx-auto format">
    <div>
      <q-card-section>
        <div class="text-center">
          <q-toggle
            v-model="opcion_hic070"
            color="primary"
            keep-color
            false-value="REVOCAR"
            true-value="AUTORIZAR"
            unchecked-icon="block"
            checked-icon="check_circle"
            label="¿Autorizar o revocar este consentimiento?"
          />
          <p :class="opcion_hic070 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
            <q-chip :color="opcion_hic070 == 'AUTORIZAR' ? 'green' : 'red'" class="text-white" v-if="opcion_hic070">
              {{ opcion_hic070 }}
            </q-chip>
          </p>
        </div>
        <div class="row justify-between items-center">
          <p>Fecha: {{ HIC070.fecha_act }}</p>
          <p>Hora: {{ HIC070.hora_act }}</p>
          <p>Nombres y apellidos del paciente: {{ getPaci.descrip }}</p>
        </div>
        <div class="row justify-between items-center">
          <p>Edad: {{ calcularEdad(getPaci.nacim) }}</p>
          <p>Sexo: {{ getPaci.sexo }}</p>
          <p>Fecha de nacimiento: {{ dayjs(getPaci.nacim).format("YYYY-MM-DD") }}</p>
          <p>Dirección: {{ getPaci.direccion }}</p>
        </div>
        <div class="row justify-between items-center">
          <p>Telefono: {{ getPaci.telefono }}</p>
          <p>EPS: {{ getPaci.descrip_eps }}</p>
        </div>
        <div>
          <p style="text-align: justify">
            Y que el señor (a):<span class="text-bold">{{ getAcomp.descrip }}</span> identificado con C.C.
            <span class="text-bold">{{ getAcomp.cod }}</span
            >, mayor de edad, actuando en calidad de representante legal y/o tutor.
          </p>
        </div>
        <div class="text-center" style="width: 100%">
          <p style="font-weight: bold; margin-top: 10px; text-decoration: underline">DECLARO LIBRE Y VOLUNTARIAMENTE</p>
        </div>
        <div>
          <p style="text-align: justify">
            En concordancia con el Artículo 1502 del Código Civil; que he comprendido satisfactoriamente la información que me han dado con respecto a
            mi estado de salud y la necesidad de atención domiciliaria, por lo tanto,
            <q-radio color="primary" v-model="HIC070.autoriza" val="S" label="AUTORIZO" />
            <q-radio color="primary" v-model="HIC070.autoriza" val="N" label="NO AUTORIZO" />
            al personal de la IPS ESE PRIMER NIVEL GRANADA SALUD, para que ingresen a mi domicilio, y, me realicen los procedimientos de enfermería
            tales como:
          </p>
        </div>
        <div class="row justify-between items-center">
          <div>
            <div>
              <q-checkbox color="primary" keep-color label="Curación" v-model="HIC070.curacion" true-value="S" false-value="N" />
            </div>
            <div>
              <q-checkbox color="primary" keep-color label="Cambio de sonda" v-model="HIC070.cambio_sonda" true-value="S" false-value="N" />
            </div>
          </div>

          <div>
            <div>
              <q-checkbox color="primary" keep-color label="Glucometría" v-model="HIC070.glucometria" true-value="S" false-value="N" />
            </div>
            <div>
              <q-checkbox color="primary" keep-color label="Retiro de sutura" v-model="HIC070.retiro_sutura" true-value="S" false-value="N" />
            </div>
          </div>

          <div>
            <div>
              <q-checkbox color="primary" keep-color label="Lavado nasal" v-model="HIC070.lavado_nasal" true-value="S" false-value="N" />
            </div>
            <div>
              <q-checkbox color="primary" keep-color label="Lavado ocular" v-model="HIC070.lavado_ocular" true-value="S" false-value="N" />
            </div>
          </div>
          <div>
            <q-checkbox color="primary" keep-color label="Lavado de oído" v-model="HIC070.lavado_oido" true-value="S" false-value="N" />
          </div>
        </div>
        <div class="q-my-sm q-mt-lg">
          <p class="text-bold">DESCRIPCIÓN DEL PROCEDIMIENTO (técnica-materiales utilizados):</p>
          <TextArea_ v-model="HIC070.descrip_procedim" :field="form.descrip_procedim" />
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
        :disable="opcion_hic070 ? false : true"
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
import { impresionHIC070, impresion, generarArchivo } from "@/impresiones";
import { ref, defineAsyncComponent, onMounted, reactive } from "vue";
import { calcularEdad, utilsFormat } from "@/formatos/utils";
import { useRouter } from "vue-router";
import { foco_ } from "@/setup";
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

const HIC070 = reactive({
  fecha_act: "",
  hora_act: "",
  autoriza: "S",
  curacion: "N",
  cambio_sonda: "N",
  glucometria: "N",
  retiro_sutura: "N",
  lavado_nasal: "N",
  lavado_ocular: "N",
  lavado_oido: "N",
  descrip_procedim: "",
});
const form = ref({
  descrip_procedim: {
    id: "descrip_procedim",
    maxlength: "500",
    label: "",
    rows: 5,
    campo_abierto: true,
  },
});

const opcion_hic070 = ref(null);

onMounted(() => {
  HIC070.fecha_act = dayjs(getEmpresa.fecha_act).format("YYYY-MM-DD");
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
  const datos_format = JSON.parse(JSON.stringify(HIC070));
  let datos = {
    nit_entid: nit_usu.value,
    estado: opcion_hic070.value == "AUTORIZAR" ? "1" : "2",
    id_acomp: getAcomp.cod.padStart(15, "0"),
    paren_acomp: getSesion.paren_acomp,
    oper_consen: getSesion.oper,
    llave_consen: getHc.llave,
    cod_med: getProf.cod,
    cod_consen: "HIC070",
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
    const datos_hic070 = {
      autorizo: opcion_hic070.value == "AUTORIZAR" ? true : false,
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
      ...HIC070,
    };

    const firmas = {
      img_firma_consen: firma_recibida.value,
      img_firma_paci: firma_recibida.value,
      img_huella_paci: huella_paci.value,
      img_firma_acomp: firma_recibida_acomp.value,
      firma_prof: firma_prof.value,
    };

    const docDefinitionPrint = await utilsFormat({
      datos: { ...firmas, cod_consen: "HIC070" },
      content: impresionHIC070({
        datos: datos_hic070,
      }),
    });
    const docDefinitionFile = await utilsFormat({
      datos: { ...firmas, cod_consen: "HIC070" },
      content: impresionHIC070({
        datos: datos_hic070,
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
