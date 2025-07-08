<template>
  <q-card class="q-mx-auto format">
    <q-form @submit="validarDatos">
      <q-card-section>
        <div class="text-center">
          <q-toggle
            v-model="LAB034.opcion_lab034"
            color="primary"
            keep-color
            false-value="REVOCAR"
            true-value="AUTORIZAR"
            unchecked-icon="block"
            checked-icon="check_circle"
            label="¿Autorizar o revocar este consentimiento?"
          />
          <p :class="LAB034.opcion_lab034 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
            <q-chip :color="LAB034.opcion_lab034 == 'AUTORIZAR' ? 'green' : 'red'" class="text-white" v-if="LAB034.opcion_lab034">
              {{ LAB034.opcion_lab034 }}
            </q-chip>
          </p>
        </div>
        <div class="row justify-between items-center">
          <p>
            <span class="text-bold">Fecha:&nbsp;</span>
            <span>{{ LAB034.fecha }}</span>
          </p>
          <p><span class="text-bold">Entidad:</span> {{ getPaci.descrip_eps }}&nbsp;</p>
          <p><span class="text-bold">Nombre del paciente:</span> {{ getPaci.descrip }}&nbsp;</p>
          <p><span class="text-bold">Tipo y numero documento de identificación:</span> {{ getPaci.tipo_id + " " + getPaci.cod }} &nbsp;</p>
        </div>
        <div class="row justify-start">
          <p align="justify">
            Yo, {{ reg_firmador.descrip.trim() }}con cedula ciudadanía {{ reg_firmador.tipo_id }} No. {{ reg_firmador.cod }} de
            {{ reg_firmador.descrip_ciudad }} en calidad de familiar y/o acompañante responsable del paciente anteriormente mencionado, reconozco que
            se me explico y entendí el compromiso que adquiero, en el momento del egreso “salida” de mi familiar a realizar el pago correspondiente a
            los días de hospitalización “copago” , de acuerdo al tipo de régimen y nivel que pertenece el paciente, siendo un porcentaje equivalente
            al valor total de la estancia hospitalaria, según (Acuerdo 260 de 2004 CNSSS – Ley 1955 de 2019, artículo 49).
          </p>
        </div>
        <div class="row">
          <p class="text-bold q-mt-md">Copago:</p>
          <q-radio color="primary" v-model="LAB034.copago" val="S" label="SI" />
          <q-radio color="primary" v-model="LAB034.copago" val="N" label="NO" />
        </div>
        <p class="text-center text-bold q-mt-md">PAGOS DE COPAGOS</p>
        <p class="text-bold q-mt-md">REGIMEN CONTRIBUTIVO</p>

        <div class="row q-mb-md" style="width: 100%">
          <div
            class="text-center q-pa-xs"
            style="border: 1px solid #ccc; background-color: #0a82b6; width: 15%; display: flex; justify-content: center; align-items: center"
          >
            <p class="text-bold" style="margin: 0; color: white">Copagos tope evento</p>
          </div>
          <div class="text-center q-pa-xs" style="border: 1px solid #ccc; width: 85%">
            <div class="row">
              <div class="text-center q-pa-xs" style="border: 1px solid #ccc; background-color: #0a82b6; width: 35%">
                <p class="text-bold" style="margin-top: 10px; color: white">Rango de ingresos en SMLMV</p>
              </div>
              <div class="text-center q-pa-xs" style="border: 1px solid #ccc; background-color: #0a82b6; width: 35%">
                <p class="text-bold" style="margin-top: 10px; color: white">Porcentaje del valor del servicio</p>
              </div>
              <div class="text-center q-pa-xs" style="border: 1px solid #ccc; background-color: #0a82b6; width: 30%">
                <p class="text-bold" style="margin-top: 10px; color: white">Tope por evento 2025</p>
              </div>
            </div>
            <div class="row">
              <div class="text-center q-pa-xs" style="border: 1px solid #ccc; width: 35%">
                <p class="text-bold" style="margin-top: 10px">A (Menor a 2 SMLMV)</p>
              </div>
              <div class="text-center q-pa-xs" style="border: 1px solid #ccc; width: 35%">
                <p class="text-bold" style="margin-top: 10px">11,50%</p>
              </div>
              <div class="text-center q-pa-xs" style="border: 1px solid #ccc; width: 30%">
                <p class="text-bold" style="margin-top: 10px">$ 356.548</p>
              </div>
            </div>
            <div class="row">
              <div class="text-center q-pa-xs" style="border: 1px solid #ccc; width: 35%">
                <p class="text-bold" style="margin-top: 10px">B (Entre 2 y 5 SMLMV)</p>
              </div>
              <div class="text-center q-pa-xs" style="border: 1px solid #ccc; width: 35%">
                <p class="text-bold" style="margin-top: 10px">17,30%</p>
              </div>
              <div class="text-center q-pa-xs" style="border: 1px solid #ccc; width: 30%">
                <p class="text-bold" style="margin-top: 10px">$ 1'428.678</p>
              </div>
            </div>
            <div class="row">
              <div class="text-center q-pa-xs" style="border: 1px solid #ccc; width: 35%">
                <p class="text-bold" style="margin-top: 10px">C (Mayor a 5 SMLMV)</p>
              </div>
              <div class="text-center q-pa-xs" style="border: 1px solid #ccc; width: 35%">
                <p class="text-bold" style="margin-top: 10px">23,00%</p>
              </div>
              <div class="text-center q-pa-xs" style="border: 1px solid #ccc; width: 30%">
                <p class="text-bold" style="margin-top: 10px">$ 2'857.356</p>
              </div>
            </div>
          </div>
        </div>
        <div class="row" style="width: 100%">
          <div
            class="text-center q-pa-xs"
            style="border: 1px solid #ccc; background-color: #0a82b6; width: 15%; display: flex; justify-content: center; align-items: center"
          >
            <p class="text-bold" style="margin: 0; color: white">Copagos tope año</p>
          </div>
          <div class="text-center q-pa-xs" style="border: 1px solid #ccc; width: 85%">
            <div class="row">
              <div class="text-center q-pa-xs" style="border: 1px solid #ccc; background-color: #0a82b6; width: 60%">
                <p class="text-bold" style="margin-top: 10px; color: white">Rango de ingresos en SMLMV</p>
              </div>

              <div class="text-center q-pa-xs" style="border: 1px solid #ccc; background-color: #0a82b6; width: 40%">
                <p class="text-bold" style="margin-top: 10px; color: white">Tope por año 2025</p>
              </div>
            </div>
            <div class="row">
              <div class="text-center q-pa-xs" style="border: 1px solid #ccc; width: 60%">
                <p class="text-bold" style="margin-top: 10px">A (Menor a 2 SMLMV)</p>
              </div>
              <div class="text-center q-pa-xs" style="border: 1px solid #ccc; width: 40%">
                <p class="text-bold" style="margin-top: 10px">$ 714.339</p>
              </div>
            </div>
            <div class="row">
              <div class="text-center q-pa-xs" style="border: 1px solid #ccc; width: 60%">
                <p class="text-bold" style="margin-top: 10px">B (Entre 2 y 5 SMLMV)</p>
              </div>
              <div class="text-center q-pa-xs" style="border: 1px solid #ccc; width: 40%">
                <p class="text-bold" style="margin-top: 10px">$ 2'857.356</p>
              </div>
            </div>
            <div class="row">
              <div class="text-center q-pa-xs" style="border: 1px solid #ccc; width: 60%">
                <p class="text-bold" style="margin-top: 10px">C (Mayor a 5 SMLMV)</p>
              </div>
              <div class="text-center q-pa-xs" style="border: 1px solid #ccc; width: 40%">
                <p class="text-bold" style="margin-top: 10px">$ 5'714.711</p>
              </div>
            </div>
          </div>
        </div>
        <p class="text-bold q-mt-md">SUBSIDIADO NIVEL 2</p>
        <div class="row" style="width: 100%">
          <div
            class="text-center q-pa-xs"
            style="border: 1px solid #ccc; background-color: #123d7d; width: 15%; display: flex; justify-content: center; align-items: center"
          >
            <p class="text-bold" style="margin: 0; color: white">Copagos tope evento</p>
          </div>
          <div class="text-center q-pa-xs" style="border: 1px solid #ccc; width: 85%">
            <div class="row">
              <div class="text-center q-pa-xs" style="border: 1px solid #ccc; background-color: #123d7d; width: 10%">
                <p class="text-bold" style="margin-top: 10px; color: white">Nivel</p>
              </div>
              <div class="text-center q-pa-xs" style="border: 1px solid #ccc; background-color: #123d7d; width: 30%">
                <p class="text-bold" style="margin-top: 10px; color: white">Porcentaje del valor del servicio</p>
              </div>
              <div class="text-center q-pa-xs" style="border: 1px solid #ccc; background-color: #123d7d; width: 30%">
                <p class="text-bold" style="margin-top: 10px; color: white">Tope por evento 2025</p>
              </div>

              <div class="text-center q-pa-xs" style="border: 1px solid #ccc; background-color: #123d7d; width: 30%">
                <p class="text-bold" style="margin-top: 10px; color: white">Tope por año 2025</p>
              </div>
            </div>
            <div class="row">
              <div class="text-center q-pa-xs" style="border: 1px solid #ccc; width: 10%">
                <p class="text-bold" style="margin-top: 10px">1</p>
              </div>
              <div class="text-center q-pa-xs" style="border: 1px solid #ccc; width: 30%">
                <p class="text-bold" style="margin-top: 10px">0,0%</p>
              </div>
              <div class="text-center q-pa-xs" style="border: 1px solid #ccc; width: 30%">
                <p class="text-bold" style="margin-top: 10px">0,0</p>
              </div>
              <div class="text-center q-pa-xs" style="border: 1px solid #ccc; width: 30%">
                <p class="text-bold" style="margin-top: 10px">0,0</p>
              </div>
            </div>
            <div class="row">
              <div class="text-center q-pa-xs" style="border: 1px solid #ccc; width: 10%">
                <p class="text-bold" style="margin-top: 10px">2</p>
              </div>
              <div class="text-center q-pa-xs" style="border: 1px solid #ccc; width: 30%">
                <p class="text-bold" style="margin-top: 10px">10%</p>
              </div>
              <div class="text-center q-pa-xs" style="border: 1px solid #ccc; width: 30%">
                <p class="text-bold" style="margin-top: 10px">$ 621.164</p>
              </div>
              <div class="text-center q-pa-xs" style="border: 1px solid #ccc; width: 30%">
                <p class="text-bold" style="margin-top: 10px">$ 1'242.329</p>
              </div>
            </div>
          </div>
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
        :disable="LAB034.opcion_lab034 ? false : true"
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
import { impresionLAB034, impresion, generarArchivo } from "@/impresiones";
import { utilsFormat } from "@/formatos/utils";
import { useRouter } from "vue-router";
import { foco_ } from "@/setup";
import dayjs from "dayjs";

const ContainerFirma = defineAsyncComponent(() => import("@/components/global/ContainerFirma.vue"));

const { getDll$, _getFirma$, _getHuella$, guardarFile$, enviarCorreo$, getEncabezado } = useApiContabilidad();
const { getPaci, getAcomp, getProf, getEmpresa, getHc, getSesion, getTestigo } = useModuleFormatos();
const { CON851P } = useModuleCon851p();
const { CON851 } = useModuleCon851();
const router = useRouter();

const reg_firmador = ref(getAcomp.cod.trim() != "" ? getAcomp : getPaci);
const nit_usu = ref(parseInt(getEmpresa.nitusu) || 0);
const firma_recibida_acomp = ref("");
const firma_recibida_test = ref("");
const firma_recibida = ref("");
const huella_paci = ref(null);
const huella_testigo = ref(null);
const huella_acomp = ref(null);
const firma_prof = ref(null);
const LAB034 = reactive({
  opcion_lab034: "",
  fecha: "",
  copago: "",
});

onMounted(() => {
  datosInit();
  getFirmaProf();
});

const datosInit = () => {
  LAB034.fecha = dayjs(getEmpresa.fecha_act).format("YYYY-MM-DD");
};

const getFirmaProf = async () => {
  try {
    huella_paci.value = await _getHuella$({ codigo: getPaci.cod });
    huella_testigo.value = await _getHuella$({ codigo: getTestigo.cod });
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
  const datos_format = JSON.parse(JSON.stringify(LAB034));
  let llave_paci;
  if (/[A-Za-z]/.test(getPaci.cod)) {
    llave_paci = getPaci.cod.padStart(15, " ");
  } else {
    llave_paci = getPaci.cod + "00000000";
  }
  let datos = {
    nit_entid: nit_usu.value,
    estado: LAB034.opcion_lab034 == "AUTORIZAR" ? "1" : "2",
    llave_fact: getSesion.modulo == "HIC" ? "" : `${getSesion.suc}${getSesion.clase}${getSesion.nro_comp}`,
    disentimiento: "N",
    llave_consen: getSesion.modulo == "HIC" ? getHc.llave : `${llave_paci}`,
    oper_consen: getSesion.oper,
    cod_consen: getSesion.modulo == "HIC" ? "HIC113" : "LAB034",
    cod_med: getProf.cod,
    id_acomp: getAcomp.cod.padStart(15, "0"),
    id_testigo: getTestigo.cod.padStart(15, "0"),
    paren_acomp: getSesion.paren_acomp,
    ...datos_format,
  };

  await getDll$({ modulo: `save_consen.dll`, data: { ...datos } })
    .then((data) => {
      if (data?.llave_consen) {
        const fecha = data?.llave_consen.slice(23, 32);
        LAB034.fecha = dayjs(fecha).format("YYYY-MM-DD");
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
    await guardarFile$({ base64: firma_recibida_test.value, codigo: `T${llave}` });
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
  const datos_lab034 = {
    autorizo: LAB034.opcion_lab034 == "AUTORIZAR" ? true : false,
    empresa: getEmpresa,
    testigo: getTestigo,
    paciente: getPaci,
    prof: getProf,
    acomp: getAcomp,
    firmas: {
      firma_paci: firma_recibida.value ? true : false,
      huella_paci: huella_paci.value ? true : false,
      huella_testigo: huella_testigo.value ? true : false,
      firma_acomp: firma_recibida_acomp.value ? true : false,
      firma_prof: firma_prof.value ? true : false,
      firma_test: firma_recibida_test.value ? true : false,
    },
    paren_acomp: getSesion.paren_acomp,
    ...LAB034,
  };

  const firmas = {
    img_firma_testigo: firma_recibida_test.value,
    img_firma_acomp: firma_recibida_acomp.value,
    img_firma_consen: firma_recibida.value,
    img_firma_paci: firma_recibida.value,
    img_huella_paci: huella_paci.value,
    firma_prof: firma_prof.value,
    img_huella_acomp: huella_acomp.value,
    img_huella_testigo: huella_testigo.value,
  };

  const docDefinitionPrint = await utilsFormat({
    datos: firmas,
    content: impresionLAB034({
      datos: datos_lab034,
    }),
  });

  const docDefinitionFile = await utilsFormat({
    datos: firmas,
    content: impresionLAB034({
      datos: datos_lab034,
    }),
  });

  let nomb_consen = getSesion.modulo == "HIC" ? "HIC-113" : "LAB-034";
  await impresion({ docDefinition: docDefinitionPrint });
  const response_impresion = await generarArchivo({ docDefinition: docDefinitionFile, nomb_archivo: `${llave}-${nomb_consen}` });
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
