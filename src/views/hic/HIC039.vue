<template>
<q-card class="q-mx-auto format q-mb-lg" style="overflow: auto">
    <q-form @submit="validarDatos">
      <div class="text-center">
        <q-toggle
          v-model="reg.opcion_hc039"
          color="primary"
          keep-color
          false-value="REVOCAR"
          true-value="AUTORIZAR"
          unchecked-icon="block"
          checked-icon="check_circle"
          label="¿Autorizar o revocar este consentimiento?"
        />
        <p :class="reg.opcion_hc039 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
          <q-chip
            :color="reg.opcion_hc039 == 'AUTORIZAR' ? 'green' : 'red'"
            class="text-white"
            v-if="reg.opcion_hc039"
          >
            {{ reg.opcion_hc039 }}
          </q-chip>
        </p>
      </div>
      <q-card-section>
        <div class="row">
          <p align="justify">
            Yo,
            <InputF_ v-model="reg_firmador.descrip" width="300" disable />
            identificado(a) con
            <InputF_ v-model="reg.tipo_id" disable />
            N°
            <InputF_ v-model="reg_firmador.cod" disable />
            obrando en la calidad abajo indicada, hago la siguiente declaración: Por medio del presente
            documento, en forma libre, en pleno uso de mis facultades mentales y sin limitaciones o
            impedimentos de carácter médico o legal, habiendo recibido información por parte del médico
            tratante sobre las condiciones médicas, he decido solicitar MI ALTA VOLUNTARIA del servicio de
          </p>
          <Input_ v-model="reg.servicio" :field="form.servicio" class="col-12" />
          <p>
            DE LA ESE SALUD YOPAL, motivo por el cual eximo de toda responsabilidad al Hospital y asumo las
            consecuencias que se deriven de esta decisión.
          </p>
        </div>
        <div class="row">
          <p align="justify">CALIDAD EN LA QUE SE OTORGA ESTE CONSENTIMIENTO: Como paciente:</p>
          <Select_
            style="min-width: 100px; display: inline-block"
            v-model="reg.select_paci"
            :field="form.select_paci"
            :items="arrSN"
          />
          <p>Como responsable del paciente: (Padre o Madre si es</p>
        </div>
        <div class="row" style="margin-top: -15px">
          <p>
            menor; representante legal, familiar o representante u otras personas que figuren como tales en la
            H. C.)
          </p>
          <Select_
            style="min-width: 100px; display: inline-block"
            v-model="reg.select_acomp"
            :field="form.select_acomp"
            :items="arrSN"
          />
        </div>
        <div class="row">
          <p>Fecha de notificación:</p>
          <q-input v-model="reg.fecha_act" disable dense type="date" class="col-2" />
        </div>
        <div class="row">
          <p>
            Certifico que he explicado los riesgos de alta voluntaria y he contestado todas las preguntas.
            Considero que el (la) paciente, pariente/representante comprenden completamente lo que he
            explicado.
          </p>
        </div>
        <div class="row">
          <p>OTRAS CONSIDERACIONES</p>
          <Input_ v-model="reg.otras_considera" :field="form.otras_considera" class="col-12" />
        </div>
      </q-card-section>
      <q-card-actions>
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
        <div class="col-12 row justify-center q-my-md">
          <q-btn
            :disable="reg.opcion_hc039 ? false : true"
            @click="validarDatos"
            icon-right="check_circle"
            class="q-mr-lg"
            color="green"
            label="GRABAR"
            type="submit"
          />
        </div>
      </q-card-actions>
      <div style="height: 5px"></div>
    </q-form>
  </q-card>
</template>
<script setup>
import { useModuleFormatos, useApiContabilidad, useModuleCon851p, useModuleCon851 } from "@/store";
import { ref, reactive, defineAsyncComponent, onMounted, watch } from "vue";
import { impresionHC039, impresion, generarArchivo } from "@/impresiones";
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
const firma_recibida_acomp = ref("");
const firma_recibida = ref("");
const huella_paci = ref(null);
const firma_prof = ref(null);
const arrSN = [
  { value: "S", label: "SI" },
  { value: "N", label: "NO" },
];

const form = ref({
  servicio: {
    id: "servicio",
    label: "",
    maxlength: "285",
    standout: "N",
    outlined: "N",
    required: true,
    campo_abierto: true,
  },
  select_paci: {
    id: "select_paci",
    maxlength: "1",
    label: "",
    required: true,
    disable: true,
    campo_abierto: true,
  },
  select_acomp: {
    id: "select_acomp",
    maxlength: "1",
    label: "",
    disable: true,
    required: true,
    campo_abierto: true,
  },
  otras_considera: {
    id: "otras_considera",
    maxlength: "380",
    label: "",
    required: true,
    campo_abierto: true,
  },
});

const reg = reactive({
  otras_considera: "",
  servicio: "",

  // extras
  opcion_hc039: "",
  fecha_act: "",
  llave: "",
  select_paci: "",
  select_acomp: "",
});

onMounted(() => {
  datosInit();
  getFirmaProf();
});

const datosInit = () => {
  reg.fecha_act = dayjs(getEmpresa.FECHA_ACT).format("YYYY-MM-DD");
  reg.llave = getHc.llave.slice(15);

  reg.select_acomp = getAcomp.cod.length ? "S" : "";
  reg.select_paci = getAcomp.cod.length ? "N" : "S";
};

const validarDatos = async () => {
  const requiere = "Complete el siguiente campo";
  const firma_rq = "No se ha realizado la firma del";

  if (!reg.servicio) return CON851("?", "info", `${requiere}, servicio `, () => foco_(form, "servicio"));
  if (!reg.otras_considera)
    return CON851("?", "info", `${requiere}, consideraciones `, () => foco_(form, "otras_considera"));

  if (!firma_recibida.value) return CON851("?", "info", `${firma_rq} paciente`);
  if (getAcomp.cod && !firma_recibida_acomp.value) return CON851("?", "info", `${firma_rq} acompañate`);

  grabarConsentimiento();
};

const grabarConsentimiento = async () => {
  const datos_format = JSON.parse(JSON.stringify(reg));
  let datos = {
    estado: reg.opcion_hc039 == "AUTORIZAR" ? "1" : "2",
    disentimiento: "N",
    llave_consen: getHc.llave,
    oper_consen: getSesion.oper,
    cod_consen: "HIC039",
    cod_med: getProf.cod,
    id_acomp: getAcomp.cod.padStart(15, "0"),
    paren_acomp: getSesion.paren_acomp,
    ...datos_format,
  };

  await getDll$({ modulo: `save_consen.dll`, data: { ...datos } })
    .then((data) => {
      if (data?.llave_consen) {
        const fecha = data?.llave_consen.slice(24, 32);
        reg.fecha_act = dayjs(fecha).format("YYYY-MM-DD");
        return grabarFirmaConsen(data?.llave_consen);
      } else CON851("?", "error", "Error al guardar el consentimiento");
    })
    .catch((error) => {
      console.error(error);
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
        await imprimirConsen();
        router.back();
      },
      async () => {
        const file = await imprimirConsen();
        if (!getPaci.email) {
          return CON851("?", "info", "El paciente no cuenta con un correo registrado", () => router.back());
        }

        if (!/.+@.+\..+/.test(getPaci.email.toLowerCase())) {
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
    const datos_hic039 = {
      autorizo: reg.opcion_hc039 == "AUTORIZAR" ? true : false,
      paren_acomp: getSesion.paren_acomp,
      empresa: getEmpresa,
      paciente: getPaci,
      acomp: getAcomp,
      prof: getProf,
      firmas: {
        firma_paci: firma_recibida.value ? true : false,
        huella_paci: huella_paci.value ? true : false,
        firma_acomp: firma_recibida_acomp.value ? true : false,
        firma_prof: firma_prof.value ? true : false,
      },
      fecha: reg.fecha_act,
      llave: reg.llave,
      ...reg,
    };

    const firmas = {
      img_firma_consen: firma_recibida.value,
      img_firma_paci: firma_recibida.value,
      img_huella_paci: huella_paci.value,
      img_firma_acomp: firma_recibida_acomp.value,
      firma_prof: firma_prof.value,
    };

    const docDefinitionPrint = utilsFormat({
      datos: firmas,
      content: impresionHC039({
        datos: datos_hic039,
      }),
    });
    const docDefinitionFile = utilsFormat({
      datos: firmas,
      content: impresionHC039({
        datos: datos_hic039,
      }),
    });

    await impresion({ docDefinition: docDefinitionPrint });
    const response_impresion = await generarArchivo({ docDefinition: docDefinitionFile });
    return response_impresion;
  } catch (error) {
    console.error("error -->", error);
  }
};

const getFirmaProf = async () => {
  try {
    firma_prof.value = await _getFirma$({ codigo: Number(getProf.cod) });
    huella_paci.value = await _getHuella$({ codigo: Number(getPaci.cod) });
  } catch (error) {
    console.error(error);
    CON851("?", "info", error);
  }
};

const callBackFirma = (data_firma) => {
  data_firma && (firma_recibida.value = data_firma.slice(22));
};

const callBackFirmaAcomp = (data_firma) => {
  data_firma && (firma_recibida_acomp.value = data_firma.slice(22));
};
</script>
<style>
p {
  margin-top: 10px;
  margin-left: 5px;
  margin-right: 5px;
}
.custom-q-list .q-item {
  margin: 0;
}
</style>
