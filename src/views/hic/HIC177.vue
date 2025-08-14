<template>
  <q-card class="q-mx-auto format">
    <q-form @submit="validarDatos">
      <q-card-section>
        <div class="text-center">
          <q-toggle
            v-model="HIC177.opcion_hic177"
            color="primary"
            keep-color
            false-value="REVOCAR"
            true-value="AUTORIZAR"
            unchecked-icon="block"
            checked-icon="check_circle"
            label="¿Autorizar o revocar este consentimiento?"
          />
          <p :class="HIC177.opcion_hic177 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
            <q-chip :color="HIC177.opcion_hic177 == 'AUTORIZAR' ? 'green' : 'red'" class="text-white" v-if="HIC177.opcion_hic177">
              {{ HIC177.opcion_hic177 }}
            </q-chip>
          </p>
        </div>
        <p>
          <span class="text-bold">Fecha:&nbsp;</span>
          <span>{{ HIC177.fecha }}</span>
        </p>
        <div class="row justify-between items-center">
          <div class="row">
            <p class="text-bold">Remitente:</p>
            <Input_ class="q-ma-xs" v-model="HIC177.remitente" :field="form.remitente" :inputStyle="{ width: '385px' }" />
          </div>
          <p><span class="text-bold">Nombre del paciente:</span> {{ getPaci.descrip }}&nbsp;</p>
          <p><span class="text-bold">Tipo y numero documento de identificación:</span> {{ getPaci.tipo_id + " " + getPaci.cod }} &nbsp;</p>
          <p><span class="text-bold">Edad:</span> {{ calcularEdad(getPaci.nacim) }} &nbsp;</p>
          <p><span class="text-bold">Sexo:</span> {{ getPaci.sexo }} &nbsp;</p>
          <p><span class="text-bold">Fecha de nacimiento:</span> {{ dayjs(getPaci.nacim).format("YYYY-MM-DD") }} &nbsp;</p>
          <p><span class="text-bold">Dirección residencial:</span> {{ getPaci.direccion }} &nbsp;</p>
          <p><span class="text-bold">Ocupación:</span> {{ getPaci.descrip_ocup }} &nbsp;</p>
          <p><span class="text-bold">Regimen contributivo:</span> {{ getPaci.descrip_tipo_afil }} &nbsp;</p>
        </div>

        <div class="q-mt-lg">
          <div class="col-12">
            <p class="text-bold">Resultado de la prueba:</p>
          </div>
          <ol type="a">
            <li>
              <q-radio class="q-ml-xs" color="primary" keep-color label="ABS" v-model="HIC177.result_prb" val="A" />
            </li>
            <li>
              <q-radio class="q-ml-xs" color="primary" keep-color label="PC" v-model="HIC177.result_prb" val="B" />
            </li>
            <li>
              <q-radio class="q-ml-xs" color="primary" keep-color label="Otro" v-model="HIC177.result_prb" val="C" />
            </li>
          </ol>
          <div v-if="HIC177.result_prb == 'C'" class="row">
            <p>Cual:</p>
            <Input_ class="q-ma-xs" v-model="HIC177.otr_result" :field="form.otr_result" :inputStyle="{ width: '385px' }" />
          </div>
        </div>
        <div class="q-mt-lg">
          <div class="col-12">
            <p class="text-bold">Motivo de prueba:</p>
          </div>
          <ol type="a">
            <li>
              <q-radio class="q-ml-xs" color="primary" keep-color label="Conducta sexual de riesgo" v-model="HIC177.motivo_prb" val="A" />
            </li>
            <li>
              <q-radio class="q-ml-xs" color="primary" keep-color label="DX perinatal" v-model="HIC177.motivo_prb" val="B" />
            </li>
            <li>
              <q-radio class="q-ml-xs" color="primary" keep-color label="Sospecha clinica" v-model="HIC177.motivo_prb" val="C" />
            </li>
            <li>
              <q-radio class="q-ml-xs" color="primary" keep-color label="Contacto VIH" v-model="HIC177.motivo_prb" val="D" />
            </li>
            <li>
              <q-radio class="q-ml-xs" color="primary" keep-color label="Transfusiones antes de 1993" v-model="HIC177.motivo_prb" val="E" />
            </li>
            <li>
              <q-radio class="q-ml-xs" color="primary" keep-color label="Uso de agujas" v-model="HIC177.motivo_prb" val="F" />
            </li>
            <li>
              <q-radio class="q-ml-xs" color="primary" keep-color label="Tiempo de gestación" v-model="HIC177.motivo_prb" val="G" />
            </li>
          </ol>
        </div>
        <div>
          <p class="text-bold" style="text-align: center; text-decoration: underline">CONSENTIMIENTO INFORMADO</p>
        </div>
        <div class="row justify-start">
          <p align="justify">Certifico que me han dado la información sobre:</p>
        </div>
        <ol>
          <li>Propósito y beneficio de la prueba</li>
          <li>Interpretación de la prueba</li>
          <li>Limitaciones de la prueba</li>
          <li>Posibles resultados de la prueba</li>
        </ol>
        <div class="row justify-start">
          <p align="justify">
            que entiendo su contenido y que he discutido con la persona que me brindo la asesoría el procedimiento mediante el cual recibiré mis
            resultados y que estoy de acuerdo con el.
          </p>
          <p align="justify">
            entiendo que la toma de la muestra es voluntaria y que puedo retirar mi consentimiento en cualquier momento antes de que sea tomado el
            examen.
          </p>
        </div>
      </q-card-section>
    </q-form>
    <q-separator />
    <q-card-actions align="around" class="row">
      <div class="col-12 row justify-around q-mt-lg">
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
          disable
          quien_firma="FIRMA PROFESIONAL"
          :firma_="firma_prof"
          :firmador="getProf.descrip"
          :descrip_prof="getProf.descrip_atiende"
          :registro_profe="getProf.cod"
          :codigo_firma="getProf.cod"
          class="col-4"
        />
      </div>
    </q-card-actions>
    <div class="row justify-center q-my-lg">
      <q-btn
        :disable="HIC177.opcion_hic177 ? false : true"
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
import { ref, reactive, defineAsyncComponent, onMounted } from "vue";
import { impresionHIC177, impresion, generarArchivo } from "@/impresiones";
import { utilsFormat, calcularEdad } from "@/formatos/utils";
import { useRouter } from "vue-router";
import dayjs from "dayjs";

const ContainerFirma = defineAsyncComponent(() => import("@/components/global/ContainerFirma.vue"));

const { getDll$, _getFirma$, _getHuella$, guardarFile$, enviarCorreo$, getEncabezado } = useApiContabilidad();
const { getPaci, getAcomp, getProf, getEmpresa, getHc, getSesion } = useModuleFormatos();
const { CON851P } = useModuleCon851p();
const { CON851 } = useModuleCon851();
const router = useRouter();

const nit_usu = ref(parseInt(getEmpresa.nitusu) || 0);
const firma_recibida_acomp = ref("");
const firma_recibida = ref("");
const huella_paci = ref(null);
const huella_acomp = ref(null);
const firma_prof = ref(null);
const HIC177 = reactive({
  opcion_hic177: "",
  remitente: "",
  result_prb: "",
  otr_result: "",
  motivo_prb: "",
  fecha: "",
});
const form = ref({
  remitente: {
    id: "remitente",
    maxlength: "250",
    label: "",
    campo_abierto: true,
  },
  otr_result: {
    id: "otr_result",
    maxlength: "250",
    label: "",
    campo_abierto: true,
  },
});
onMounted(() => {
  datosInit();
  getFirmaProf();
});

const datosInit = () => {
  HIC177.fecha = dayjs(getEmpresa.fecha_act).format("YYYY-MM-DD");
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
  grabarConsentimiento();
};

const grabarConsentimiento = async () => {
  const datos_format = JSON.parse(JSON.stringify(HIC177));

  let datos = {
    nit_entid: nit_usu.value,
    estado: HIC177.opcion_hic177 == "AUTORIZAR" ? "1" : "2",
    disentimiento: "N",
    llave_consen: getHc.llave,
    oper_consen: getSesion.oper,
    cod_consen: "HIC177",
    cod_med: getProf.cod,
    id_acomp: getAcomp.cod.padStart(15, "0"),
    paren_acomp: getSesion.paren_acomp,
    ...datos_format,
  };

  await getDll$({ modulo: `save_consen.dll`, data: { ...datos } })
    .then((data) => {
      if (data?.llave_consen) {
        const fecha = data?.llave_consen.slice(23, 32);
        HIC177.fecha = dayjs(fecha).format("YYYY-MM-DD");
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
    await guardarFile$({ base64: firma_recibida_acomp.value, codigo: `A${llave}` });
    await guardarFile$({ base64: firma_recibida.value, codigo: `P${llave}` });

    if (getEmpresa.envio_email == "N") {
      await imprimirConsen(llave);
      return router.back();
    }
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

const imprimirConsen = async (llave) => {
  const datos_hic177 = {
    autorizo: HIC177.opcion_hic177 == "AUTORIZAR" ? true : false,
    empresa: getEmpresa,
    paciente: getPaci,
    prof: getProf,
    acomp: getAcomp,
    firmas: {
      firma_paci: firma_recibida.value ? true : false,
      huella_paci: huella_paci.value ? true : false,
      firma_acomp: firma_recibida_acomp.value ? true : false,
      firma_prof: firma_prof.value ? true : false,
    },
    paren_acomp: getSesion.paren_acomp,
    ...HIC177,
  };

  const firmas = {
    img_firma_acomp: firma_recibida_acomp.value,
    img_firma_consen: firma_recibida.value,
    img_firma_paci: firma_recibida.value,
    img_huella_paci: huella_paci.value,
    firma_prof: firma_prof.value,
    img_huella_acomp: huella_acomp.value,
  };

  const docDefinitionPrint = await utilsFormat({
    datos: firmas,
    content: impresionHIC177({
      datos: datos_hic177,
    }),
  });

  const docDefinitionFile = await utilsFormat({
    datos: firmas,
    content: impresionHIC177({
      datos: datos_hic177,
    }),
  });

  await impresion({ docDefinition: docDefinitionPrint });
  const response_impresion = await generarArchivo({ docDefinition: docDefinitionFile, nomb_archivo: `${llave}-HIC-177` });
  return response_impresion;
};

const callBackFirma = (data_firma) => {
  data_firma && (firma_recibida.value = data_firma);
};

const callBackFirmaAcomp = (data_firma) => {
  data_firma && (firma_recibida_acomp.value = data_firma);
};
</script>

<style>
p {
  margin-top: 10px;
  margin-left: 5px;
  margin-right: 8px;
}
</style>
