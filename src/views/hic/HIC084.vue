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
        <p class="text-center q-mb-lg">
          <span class="text-bold">ESTRATEGIA PARA LA REDUCCIÓN DE LA TRANSMISIÓN PERINATAL DEL VIH</span>
        </p>

        <p class="text-center q-mb-lg">
          <span class="text-bold">REGISTRO INICIAL DE LA GESTANTE</span>
        </p>

        <div class="row justify-between items-center">
          <p>
            <span class="text-bold">Fecha:</span>
            {{ dayjs(getEmpresa.fecha_act).format("YYYY-MM-DD") }}
          </p>
          <p>
            <span class="text-bold">Departamento:</span>
            Meta
          </p>
          <div class="row">
            <p class="text-bold">Codigo:</p>
            <Input_ v-model="HIC084.codigo" :field="form.codigo" />
          </div>
          <p>
            <span class="text-bold">Nombre de la gestante:</span>
            {{ getPaci.descrip }}
          </p>
          <p>
            <span class="text-bold">Tipo de documento de identidad:</span>
            {{ getPaci.tipo_id }}
          </p>
          <p>
            <span class="text-bold">Número de documento de identidad:</span>
            {{ getPaci.cod }}
          </p>
          <p>
            <span class="text-bold">Edad:</span>
            {{ calcularEdad(getPaci.nacim) }}
          </p>
          <p>
            <span class="text-bold">Sistema de seguridad social:</span>
            {{ getPaci.descrip_tipo_afil }}
          </p>
          <p>
            <span class="text-bold">Dirección:</span>
            {{ getPaci.direccion }}
          </p>
          <p>
            <span class="text-bold">Barrio/Vereda:</span>
            {{ getPaci.descrip_barrio }}
          </p>
          <p>
            <span class="text-bold">Ocupación:</span>
            {{ getPaci.descrip_ocup }}
          </p>
          <p>
            <span class="text-bold">Telefono:</span>
            {{ getPaci.telefono }}
          </p>
          <p>
            <span class="text-bold">Acudiente o responsable de la gestante:</span>
            {{ getAcomp.descrip }}
          </p>
          <div class="row q-mt-lg">
            <p>
              <span class="text-bold">Edad gestacional a la captación (semanas):</span>
            </p>
            <Input_ v-model="HIC084.edad_gest" :field="form.edad_gest" :inputStyle="{ width: '160px' }" />
          </div>
          <div class="row">
            <p>
              <span class="text-bold">FPP Fecha:</span>
            </p>
            <Input_ v-model="HIC084.ffp_fecha" :field="form.ffp_fecha" :inputStyle="{ width: '160px' }" />
          </div>
          <div class="row q-mt-md">
            <p>
              <span class="text-bold">Recibio asesoria PRE TEST:</span>
              <q-radio color="primary" v-model="HIC084.recib_ases_pre_test" val="S" label="SI" />
              <q-radio color="primary" v-model="HIC084.recib_ases_pre_test" val="N" label="NO" />
              <span class="text-bold">&nbsp; Fecha de la asesoria:</span>
            </p>
            <Input_ v-model="HIC084.fecha_ases_pre_test" :field="form.fecha_ases_pre_test" :inputStyle="{ width: '160px' }" />
          </div>
          <div class="row">
            <p>
              <span class="text-bold">Recibio asesoria POST TEST:</span>
              <q-radio color="primary" v-model="HIC084.recib_ases_post_test" val="S" label="SI" />
              <q-radio color="primary" v-model="HIC084.recib_ases_post_test" val="N" label="NO" />
              <span class="text-bold">&nbsp; Fecha de la asesoria:</span>
            </p>
            <Input_ v-model="HIC084.fecha_ases_post_test" :field="form.fecha_ases_post_test" :inputStyle="{ width: '160px' }" />
          </div>
          <div class="row">
            <p>
              <span class="text-bold">Acepto las pruebas diagnosticas:</span>
              <q-radio color="primary" v-model="HIC084.acept_prueb_diagn" val="S" label="SI" />
              <q-radio color="primary" v-model="HIC084.acept_prueb_diagn" val="N" label="NO" />
            </p>
          </div>
          <div class="row">
            <p>
              <span class="text-bold">Desplazada:</span>
              <q-radio color="primary" v-model="HIC084.desplazad" val="S" label="SI" />
              <q-radio color="primary" v-model="HIC084.desplazad" val="N" label="NO" />
            </p>
          </div>
        </div>
        <div class="row q-mt-lg q-mb-md">
          <div class="text-center" style="border: 1px solid #ccc; width: 40%">
            <p style="font-weight: bold; margin-top: 10px; margin-left: 10px">PRUEBA REALIZADA</p>
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 30%">
            <p style="font-weight: bold; margin-top: 10px; margin-left: 10px">FECHA</p>
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 30%">
            <p style="font-weight: bold; margin-top: 10px; margin-left: 10px">RESULTADO</p>
          </div>
          <div class="text-left" style="border: 1px solid #ccc; width: 30%">
            <p style="font-weight: bold; margin-top: 10px; margin-left: 10px">EISA 1</p>
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 10%">
            <q-checkbox class="q-pa-xs" color="primary" keep-color left-label v-model="HIC084.eisa_1" true-value="S" false-value="N" />
          </div>
          <div style="border: 1px solid #ccc; width: 30%">
            <Input_ class="q-mt-lg q-mb-xs" v-model="HIC084.fecha_eisa_1" :field="form.fecha_eisa_1" />
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 30%">
            <Select_
              class="q-mt-lg q-mb-xs"
              v-model="HIC084.result_eisa_1"
              :field="form.result_eisa_1"
              :items="[
                { value: 'RE', label: 'Reactivo' },
                { value: 'NR', label: 'No reactivo' },
              ]"
            />
          </div>
          <div class="text-left" style="border: 1px solid #ccc; width: 30%">
            <p style="font-weight: bold; margin-top: 10px; margin-left: 10px">ELISA 2</p>
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 10%">
            <q-checkbox class="q-pa-xs" color="primary" keep-color left-label v-model="HIC084.elisa_2" true-value="S" false-value="N" />
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 30%">
            <Input_ class="q-mt-lg q-mb-xs" v-model="HIC084.fecha_elisa_2" :field="form.fecha_elisa_2" />
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 30%">
            <Select_
              class="q-mt-lg q-mb-xs"
              v-model="HIC084.result_elisa_2"
              :field="form.result_elisa_2"
              :items="[
                { value: 'RE', label: 'Reactivo' },
                { value: 'NR', label: 'No reactivo' },
              ]"
            />
          </div>
          <div class="text-left" style="border: 1px solid #ccc; width: 30%">
            <p style="font-weight: bold; margin-top: 10px; margin-left: 10px">WESTERN BLOT</p>
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 10%">
            <q-checkbox class="q-pa-xs" color="primary" keep-color left-label v-model="HIC084.western_blot" true-value="S" false-value="N" />
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 30%">
            <Input_ class="q-mt-lg q-mb-xs" v-model="HIC084.fecha_western_blot" :field="form.fecha_western_blot" />
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 30%">
            <Select_
              class="q-mt-lg q-mb-xs"
              v-model="HIC084.result_western_blot"
              :field="form.result_western_blot"
              :items="[
                { value: 'PO', label: 'Positivo' },
                { value: 'NE', label: 'Negativo' },
                { value: 'IN', label: 'Indeterminado' },
              ]"
            />
          </div>
        </div>
        <p class="text-center q-mt-lg">
          <span class="text-bold">ATENCIÓN EN CONTROL DE TRABAJO DE PARTO SIN CONTROL PRENATAL</span>
        </p>
        <div class="row q-mt-lg q-mb-md">
          <div class="text-center" style="border: 1px solid #ccc; width: 40%">
            <p style="font-weight: bold; margin-top: 10px; margin-left: 10px">PRUEBA REALIZADA</p>
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 30%">
            <p style="font-weight: bold; margin-top: 10px; margin-left: 10px">FECHA</p>
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 30%">
            <p style="font-weight: bold; margin-top: 10px; margin-left: 10px">RESULTADO</p>
          </div>
          <div class="text-left" style="border: 1px solid #ccc; width: 30%">
            <p style="font-weight: bold; margin-top: 10px; margin-left: 10px">PRUEBA RAPIDA</p>
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 10%">
            <q-checkbox class="q-pa-xs" color="primary" keep-color left-label v-model="HIC084.prb_rapiada" true-value="S" false-value="N" />
          </div>
          <div style="border: 1px solid #ccc; width: 30%">
            <Input_ class="q-mt-lg q-mb-xs" v-model="HIC084.fecha_prb_rapiada" :field="form.fecha_prb_rapiada" />
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 30%">
            <Select_
              class="q-mt-lg q-mb-xs"
              v-model="HIC084.result_prb_rapiada"
              :field="form.result_prb_rapiada"
              :items="[
                { value: 'PO', label: 'Positivo' },
                { value: 'NE', label: 'Negativo' },
              ]"
            />
          </div>
        </div>
      </q-card-section>
    </div>
    <q-separator />
    <q-card-actions align="around" class="row">
      <div class="col-12 row justify-around">
        <ContainerFirma
          :quien_firma="getAcomp.cod ? 'FIRMA ACOMPAÑANTE' : 'FIRMA PACIENTE'"
          :firmador="getAcomp.cod ? getAcomp.descrip : getPaci.descrip"
          :registro_profe="getAcomp.cod ? getAcomp.cod : getPaci.cod"
          :tipo_doc="getAcomp.cod ? getAcomp.tipo_id : getPaci.tipo_id"
          @reciFirma="callBackFirma"
          class="col-4"
        />
        <ContainerFirma
          quien_firma="FIRMA TESTIGO"
          :firmador="getTestigo.descrip"
          :registro_profe="getTestigo.cod"
          @reciFirma="callBackFirmaTest"
          :codigo_firma="getTestigo.cod"
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
import { utilsFormat, calcularEdad } from "@/formatos/utils";
import { useRouter } from "vue-router";
import dayjs from "dayjs";

const ContainerFirma = defineAsyncComponent(() => import("@/components/global/containerFirma.vue"));
const router = useRouter();

const { getDll$, _getFirma$, _getHuella$, guardarFile$, enviarCorreo$, getEncabezado } = useApiContabilidad();
const { getPaci, getAcomp, getHc, getProf, getEmpresa, getSesion, getTestigo } = useModuleFormatos();
const { CON851P } = useModuleCon851p();
const { CON851 } = useModuleCon851();

const firma_recibida_test = ref("");
const firma_recibida_acomp = ref("");
const firma_recibida = ref("");
const huella_paci = ref(null);
const firma_prof = ref(null);
const nit_usu = ref(parseInt(getEmpresa.nitusu) || 0);

const HIC084 = reactive({
  fecha: "",
  codigo: "",
  ffp_fecha: "",
  recib_ases_pre_test: "",
  fecha_ases_pre_test: "",
  recib_ases_post_test: "",
  fecha_ases_post_test: "",
  acept_prueb_diagn: "",
  desplazad: "",
  edad_gest: "",
  eisa_1: "N",
  fecha_eisa_1: "",
  elisa_2: "N",
  fecha_elisa_2: "",
  western_blot: "N",
  fecha_western_blot: "",
  result_eisa_1: "",
  result_elisa_2: "",
  result_western_blot: "",
  prb_rapiada: "N",
  fecha_prb_rapiada: "",
  result_prb_rapiada: "",
});

const form = ref({
  codigo: {
    id: "codigo",
    maxlength: "20",
    label: "",
    campo_abierto: true,
  },
  edad_gest: {
    id: "edad_gest",
    maxlength: "2",
    label: "",
    tipo: "number",
    campo_abierto: true,
  },
  ffp_fecha: {
    id: "ffp_fecha",
    maxlength: "10",
    label: "",
    tipo: "date",
    campo_abierto: true,
  },
  fecha_ases_pre_test: {
    id: "fecha_ases_pre_test",
    maxlength: "10",
    label: "",
    tipo: "date",
    campo_abierto: true,
  },
  fecha_ases_post_test: {
    id: "fecha_ases_post_test",
    maxlength: "10",
    label: "",
    tipo: "date",
    campo_abierto: true,
  },
  fecha_eisa_1: {
    id: "fecha_eisa_1",
    maxlength: "10",
    label: "",
    tipo: "date",
    campo_abierto: true,
  },
  fecha_elisa_2: {
    id: "fecha_elisa_2",
    maxlength: "10",
    label: "",
    tipo: "date",
    campo_abierto: true,
  },
  fecha_western_blot: {
    id: "fecha_western_blot",
    maxlength: "10",
    label: "",
    tipo: "date",
    campo_abierto: true,
  },
  fecha_prb_rapiada: {
    id: "fecha_prb_rapiada",
    maxlength: "10",
    label: "",
    tipo: "date",
    campo_abierto: true,
  },

  result_eisa_1: {
    id: "result_eisa_1",
    required: true,
    campo_abierto: true,
  },
  result_elisa_2: {
    id: "result_elisa_2",
    required: true,
    campo_abierto: true,
  },
  result_western_blot: {
    id: "result_western_blot",
    required: true,
    campo_abierto: true,
  },
  result_prb_rapiada: {
    id: "result_prb_rapiada",
    required: true,
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
  console.log("HIC084---> ", HIC084);
  grabarConsentimiento();
};

const grabarConsentimiento = async () => {
  const datos_format = JSON.parse(JSON.stringify(HIC084));
  let datos = {
    nit_entid: nit_usu.value,
    estado: opcion_hic084.value == "AUTORIZAR" ? "1" : "2",
    id_acomp: getAcomp.cod.padStart(15, "0"),
    paren_acomp: getSesion.paren_acomp,
    id_testigo: getTestigo.cod.padStart(15, "0"),
    tipo_testigo: getSesion.tipo_testigo,
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
  try {
    const datos_hic085 = {
      autorizo: opcion_hic084.value == "AUTORIZAR" ? true : false,
      empresa: getEmpresa,
      testigo: getTestigo,
      paciente: getPaci,
      prof: getProf,
      acomp: getAcomp,
      paren_acomp: getSesion.paren_acomp,
      firmas: {
        firma_paci: firma_recibida.value ? true : false,
        huella_paci: huella_paci.value ? true : false,
        firma_acomp: firma_recibida_acomp.value ? true : false,
        firma_prof: firma_prof.value ? true : false,
        firma_test: firma_recibida_test.value ? true : false,
      },
      ...HIC084,
    };

    const firmas = {
      img_firma_testigo: firma_recibida_test.value,
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
    const response_impresion = await generarArchivo({ docDefinition: docDefinitionFile, nomb_archivo: `${llave}-HIC-084` });
    return response_impresion;
  } catch (error) {
    console.error("error -->", error);
  }
};

const callBackFirma = (data_firma) => {
  if (getAcomp.cod) {
    data_firma && (firma_recibida_acomp.value = data_firma);
  } else {
    data_firma && (firma_recibida.value = data_firma);
  }
};

const callBackFirmaTest = (data_firma) => {
  data_firma && (firma_recibida_test.value = data_firma);
};
</script>
