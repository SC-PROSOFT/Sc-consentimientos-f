<template>
  <q-card class="q-mx-auto format">
    <q-form @submit="validarDatos">
      <q-card-section>
        <div class="text-center">
          <q-toggle
            v-model="HIC009.opcion_hc009"
            color="primary"
            keep-color
            false-value="REVOCAR"
            true-value="AUTORIZAR"
            unchecked-icon="block"
            checked-icon="check_circle"
            label="¿Autorizar o revocar este consentimiento?"
          />
          <p :class="HIC009.opcion_hc009 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
            <q-chip :color="HIC009.opcion_hc009 == 'AUTORIZAR' ? 'green' : 'red'" class="text-white" v-if="HIC009.opcion_hc009">
              {{ HIC009.opcion_hc009 }}
            </q-chip>
          </p>
        </div>

        <div class="row">
          <p>Fecha: {{ HIC009.fecha_act }}</p>
          <!-- <q-input disable type="text" dense class="col-1" v-model="HIC009.fecha_act" /> -->
          <p>Hora: {{ HIC009.hora_act }}</p>
          <!-- <q-input disable type="text" dense class="col-1" v-model="HIC009.hora_act" /> -->
        </div>
        <div class="row">
          <p>Yo, {{ getPaci.descrip }}</p>
          <p>, mayor de edad identificado con el documento N° {{ getPaci.cod }}</p>
          <p>de {{ getPaci.descrip_ciudad }}</p>
          <p>actuando en nombre propio en pleno uso de mis facultades, libre y consciente, o como responsable del menor</p>
          <p>declaro que:</p>
        </div>
        <div class="row justify-start">
          <ol>
            <li>
              <p>
                Otorgo mi consentimiento para el ingreso al servicio de HOSPITALIZACION de acuerdo a los diagnósticos y plan de tratamiento, por orden
                del médico: {{ getProf.descrip }}
              </p>
            </li>
            <li>
              <p>
                Acepto los servicios adicionales que requiera dentro de la estancia hospitalaria como canalización, estudios de laboratorios,
                radiográficos, así como la administración de medicamentos.
              </p>
            </li>
            <li>
              <p>
                Certifico que me han explicado las NORMAS DE LA INSTITUCIÓN PARA PACIENTES HOSPITALIZADOS, los horarios de visita y las restricciones.
              </p>
            </li>
            <li>
              <p>
                Acepto el ingreso al servicio de hospitalización y entiendo que hay riesgos como las caídas, por lo cual se deben mantener arriba las
                barandas de las camas.
              </p>
            </li>
          </ol>
        </div>
        <!-- <div class="text-center" v-show="HIC009.opcion_hc009 == 'AUTORIZAR'">
          <div class="row justify-center">
            <p style="font-weight: bold">AUTORIZACIÓN</p>
          </div>
          <div class="q-mb-lg row">
            <p>Certifico y autorizo mi ingreso siendo consciente de las pautas establecidas anteriormente las cuales acepto</p>
          </div>
        </div> -->
        <div class="q-mt-lg" style="border: 1px solid #ccc" v-show="HIC009.opcion_hc009 == 'REVOCAR'">
          <div class="row justify-center">
            <p style="font-weight: bold">REVOCACIÓN O DISENTIMIENTO</p>
          </div>
          <div class="row">
            <p>Yo,</p>
            <q-input v-model="getPaci.descrip" type="text" class="col-3" disable dense />
            <p>, después de ser informado de la necesidad de hospitalización,</p>
            <p>
              manifiesto de forma libre y consciente mi negación/ revocación para su realización, haciéndome responsable de las consecuencias que se
              puedan derivar de ésta decisión.
            </p>
          </div>
        </div>
      </q-card-section>
    </q-form>
    <q-separator />
    <q-card-actions align="around" class="row">
      <div class="col-12 row justify-around">
        <ContainerFirma
          quien_firma="FIRMA PACIENTE"
          :firmador="getPaci.descrip"
          :registro_profe="getPaci.cod"
          :tipo_doc="getPaci.tipo_id"
          @reciFirma="callBackFirma"
          :huella_="getAcomp.cod ? null : huella_paci"
          class="col-4"
        />
        <ContainerFirma
          :firmador="getAcomp.cod || 'NO HAY ACOMPAÑANTE'"
          :disable="!getAcomp.cod ? true : false"
          quien_firma="FIRMA TUTOR O FAMILIAR"
          :huella_="huella_acomp"
          @reciFirma="callBackFirmaAcomp"
          class="col-4"
        />
        <ContainerFirma
          @reciFirma="callBackFirmaProf"
          :firma_="firma_prof"
          :codigo_firma="getProf.cod"
          :firmador="getProf.descrip"
          :descrip_prof="getProf.descrip_atiende"
          :registro_profe="getProf.registro_profe"
          quien_firma="FIRMA PROFESIONAL"
          class="col-4"
        />
      </div>
    </q-card-actions>
    <div class="row justify-center q-my-lg">
      <q-btn
        :disable="HIC009.opcion_hc009 ? false : true"
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
import { useModuleFormatos, useApiContabilidad, useModuleCon851p, useModuleCon851 } from "@/store";
import { ref, reactive, defineAsyncComponent, onMounted, watch } from "vue";
import { impresionHIC009, impresion, generarArchivo } from "@/impresiones";
import { utilsFormat } from "@/formatos/utils";
import { useRouter } from "vue-router";
import { foco_ } from "@/setup";
import dayjs from "dayjs";

const ContainerFirma = defineAsyncComponent(() => import("@/components/global/ContainerFirma.vue"));

const { getDll$, _getFirma$, _getHuella$, guardarFile$, enviarCorreo$, getEncabezado } = useApiContabilidad();
const { getPaci, getAcomp, getHc, getProf, getEmpresa, getSesion } = useModuleFormatos();
const { CON851P } = useModuleCon851p();
const { CON851 } = useModuleCon851();
const router = useRouter();

const reg_firmador = ref(getAcomp.cod ? getAcomp : getPaci);
const acudiente = ref(getAcomp.cod ? getPaci.descrip : "");
const firma_recibida_acomp = ref("");
const firma_recibida = ref("");
const huella_paci = ref(null);
const huella_acomp = ref(null);
const firma_prof = ref(null);
const HIC009 = reactive({
  //Extras
  opcion_hc009: "",
  fecha_act: "",
  hora_act: "",
  llave: "",
});

const form = ref({
  codigo: {
    id: "codigo",
    label: "",
    maxlength: "4",
    f0: ["f8"],
    standout: "N",
    outlined: "N",
    required: true,
    campo_abierto: true,
  },

  revocar_motivos: {
    id: "revocar_motivos",
    maxlength: "285",
    label: "",
    required: true,
    standout: false,
    outlined: false,
    campo_abierto: true,
  },
});

onMounted(() => {
  console.log("getEmpresa ", getEmpresa);
  datosInit();
  getFirmaProf();
});

watch(
  () => HIC009.opcion_hc009,
  (val) => {
    if (val == "AUTORIZAR") {
      HIC009.revocar_motivos = "";
    }
  }
);

const datosInit = () => {
  HIC009.fecha_act = dayjs(getEmpresa.fecha_act).format("YYYY-MM-DD");
  HIC009.hora_act = dayjs().format("HH:mm");
  HIC009.llave = getHc.llave.slice(15);
};

const getFirmaProf = async () => {
  try {
    huella_paci.value = await _getHuella$({ codigo: getPaci.cod });
    huella_acomp.value = await _getHuella$({ codigo: getAcomp.cod });
    firma_prof.value = await _getFirma$({ codigo: Number(getProf.cod) });
  } catch (error) {
    console.error(error);
    CON851("?", "info", error);
  }
};

const validarDatos = async () => {
  const requiere = "Complete el siguiente campo";

  if (!firma_recibida.value) {
    return CON851("?", "info", "No se ha realizado la firma del paciente");
  }

  if (getAcomp.cod && !huella_acomp.value && !firma_recibida_acomp.value) {
    return CON851("?", "info", "No se ha realizado la firma o huella del acompañate");
  }

  grabarConsentimiento();
};

const grabarConsentimiento = async () => {
  const datos_format = JSON.parse(JSON.stringify(HIC009));
  let datos = {
    estado: HIC009.opcion_hc009 == "AUTORIZAR" ? "1" : "2",
    id_acomp: getAcomp.cod.padStart(15, "0"),
    paren_acomp: getSesion.paren_acomp,
    oper_consen: getSesion.oper,
    llave_consen: getHc.llave,
    cod_med: getProf.cod,
    cod_consen: "HIC009",
    disentimiento: "N",
    ...datos_format,
  };

  await getDll$({ modulo: `save_consen.dll`, data: { ...datos } })
    .then((data) => {
      if (data?.llave_consen) {
        const fecha = data?.llave_consen.slice(23, 32);
        const hora = data?.llave_consen.slice(31, 35);
        console.log("data en llave_consen ", data);

        HIC009.fecha_act = dayjs(fecha).format("YYYY-MM-DD");
        HIC009.hora_act = hora.slice(0, 2) + ":" + hora.slice(2);
        return grabarFirmaConsen(data?.llave_consen);
      } else CON851("?", "error", "Error al guardar el consentimiento");
    })
    .catch((error) => {
      CON851("?", "error", "Error al guardar el consentimiento");
    });
};

const grabarFirmaConsen = async (llave) => {
  try {
    await guardarFile$({ base64: firma_recibida.value, codigo: `P${llave}` });
    await guardarFile$({ base64: firma_recibida_acomp.value, codigo: `A${llave}` });

    return CON851P(
      "?",
      "info",
      "¿Deseas enviar el correo del consentimientos?",
      async () => {
        await imprimirConsen(llave);
        router.back();
      },
      async () => {
        const file = await imprimirConsen(llave);
        const response = await enviarCorreo$({
          cuerpo: `SE ADJUNTA ${getEncabezado.descrip} PARA ${getPaci.descrip} IDENTIDICADO CON ${getPaci.cod}`,
          destino: getPaci.email,
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

const imprimirConsen = async (llave) => {
  const datos_hic009 = {
    autorizo: HIC009.opcion_hc009 == "AUTORIZAR" ? true : false,
    empresa: getEmpresa,
    paciente: getPaci,
    prof: getProf,
    acomp: getAcomp,
    firmador: reg_firmador.value,
    paren_acomp: getSesion.paren_acomp,
    acudiente: acudiente.value,
    firmas: {
      firma_paci: firma_recibida.value ? true : false,
      huella_paci: huella_paci.value ? true : false,
      huella_acomp: huella_acomp.value ? true : false,
      firma_acomp: firma_recibida_acomp.value ? true : false,
      firma_prof: firma_prof.value ? true : false,
    },
    ...HIC009,
  };

  const firmas = {
    img_firma_acomp: firma_recibida_acomp.value,
    img_firma_consen: firma_recibida.value,
    img_firma_paci: firma_recibida.value,
    img_huella_paci: huella_paci.value,
    img_huella_acomp: huella_acomp.value,
    firma_prof: firma_prof.value,
  };

  const docDefinitionPrint = await utilsFormat({
    datos: firmas,
    content: impresionHIC009({
      datos: datos_hic009,
    }),
  });

  const docDefinitionFile = await utilsFormat({
    datos: firmas,
    content: impresionHIC009({
      datos: datos_hic009,
    }),
  });

  await impresion({ docDefinition: docDefinitionPrint });
  const response_impresion = await generarArchivo({ docDefinition: docDefinitionFile, nomb_archivo: `${llave}-HIC-009` });
  return response_impresion;
};

const callBackFirmaAcomp = (data_firma) => {
  data_firma && (firma_recibida_acomp.value = data_firma);
};

const callBackFirma = (data_firma) => {
  data_firma && (firma_recibida.value = data_firma);
};
const callBackFirmaProf = (data_firma) => {
  data_firma && (firma_prof.value = data_firma);
};
const requerido = (val) => {
  return !!val || "Este campo es requerido";
};
</script>

<style>
p {
  margin-top: 10px;
  margin-left: 5px;
  margin-right: 8px;
}
</style>
