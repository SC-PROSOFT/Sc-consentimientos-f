<template>
  <q-card class="q-mx-auto format">
    <div>
      <q-card-section>
        <div class="text-center">
          <q-toggle
            v-model="opcion_hic072"
            color="primary"
            keep-color
            false-value="REVOCAR"
            true-value="AUTORIZAR"
            unchecked-icon="block"
            checked-icon="check_circle"
            label="¿Autorizar o revocar este consentimiento?"
          />
          <p :class="opcion_hic072 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
            <q-chip :color="opcion_hic072 == 'AUTORIZAR' ? 'green' : 'red'" class="text-white" v-if="opcion_hic072">
              {{ opcion_hic072 }}
            </q-chip>
          </p>
        </div>
        <div class="row justify-between items-center">
          <div class="row">
            <p style="font-weight: bold">Fecha:</p>
            <p>&nbsp;{{ HIC072.fecha }}</p>
          </div>
          <div class="row">
            <p style="font-weight: bold">Hora:</p>
            <p>&nbsp;{{ HIC072.hora }}</p>
          </div>
        </div>
        <div class="row">
          <p>Yo</p>
          <Input_ class="q-mb-md" v-model="HIC072.nomb_prof" :field="form.nomb_prof" :inputStyle="{ width: '500px' }" />
          <p style="text-align: justify">
            Certifico que <span style="font-weight: bold"> TENGO UNA ORDEN MEDICA </span> para el procedimiento a realizar, identificado a
            continuación.
          </p>
        </div>
        <div class="row q-mt-md q-mb-md">
          <div class="text-left q-pa-xs" style="border: 1px solid #ccc; width: 100%">
            <q-checkbox
              color="primary"
              keep-color
              left-label
              label="Administración de medicamentos:"
              v-model="HIC072.admin_medic"
              true-value="S"
              false-value="N"
            />
            <div class="row">
              <p>Nombre de medicamento:</p>
              <Input_ class="col-12" v-model="HIC072.nomb_medicament" :field="form.nomb_medicament" />
            </div>
            <div class="row">
              <p class="q-mt-md" style="font-weight: bold">Vía: &nbsp;</p>
              <q-checkbox color="primary" keep-color left-label label="IV:" v-model="HIC072.iv" true-value="S" false-value="N" />
              <q-checkbox color="primary" keep-color left-label label="IM:" v-model="HIC072.im" true-value="S" false-value="N" />
              <q-checkbox color="primary" keep-color left-label label="SC:" v-model="HIC072.sc" true-value="S" false-value="N" />
              <q-checkbox color="primary" keep-color left-label label="ID:" v-model="HIC072.id" true-value="S" false-value="N" />
              <q-checkbox color="primary" keep-color left-label label="SB:" v-model="HIC072.sb" true-value="S" false-value="N" />
              <q-checkbox color="primary" keep-color left-label label="VO:" v-model="HIC072.vo" true-value="S" false-value="N" />
            </div>
          </div>
          <div class="text-left row q-pa-xs" style="border: 1px solid #ccc; width: 25%">
            <q-checkbox color="primary" keep-color left-label label="Curación:" v-model="HIC072.curacion" true-value="S" false-value="N" />
          </div>
          <div class="text-left row q-pa-xs" style="border: 1px solid #ccc; width: 25%">
            <q-checkbox
              color="primary"
              keep-color
              left-label
              label="Retiro de puntos:"
              v-model="HIC072.retiro_puntos"
              true-value="S"
              false-value="N"
            />
          </div>
          <div class="text-left row q-pa-xs" style="border: 1px solid #ccc; width: 25%">
            <q-checkbox color="primary" keep-color left-label label="Lavado de oido:" v-model="HIC072.lavado_oido" true-value="S" false-value="N" />
          </div>
          <div class="text-left row q-pa-xs" style="border: 1px solid #ccc; width: 25%">
            <q-checkbox color="primary" keep-color left-label label="Lavado ocular:" v-model="HIC072.lavado_ocular" true-value="S" false-value="N" />
          </div>
          <div class="text-left row q-pa-xs" style="border: 1px solid #ccc; width: 25%">
            <q-checkbox
              color="primary"
              keep-color
              left-label
              label="Toma de electrocardiograma:"
              v-model="HIC072.toma_electro"
              true-value="S"
              false-value="N"
            />
          </div>
          <div class="text-left row q-pa-xs" style="border: 1px solid #ccc; width: 25%">
            <q-checkbox
              color="primary"
              keep-color
              left-label
              label="Cateterismo vesical:"
              v-model="HIC072.cateterismo_vesical"
              true-value="S"
              false-value="N"
            />
          </div>
          <div class="text-left row q-pa-xs" style="border: 1px solid #ccc; width: 50%">
            <q-checkbox
              color="primary"
              keep-color
              left-label
              label="Otros no relacionados:"
              v-model="HIC072.otr_no_relac"
              true-value="S"
              false-value="N"
            />
            <div class="row">
              <p>¿Cuál?</p>
              <Input_ class="q-mb-md" v-model="HIC072.descrip_otr_no_relac" :field="form.descrip_otr_no_relac" :inputStyle="{ width: '400px' }" />
            </div>
          </div>
        </div>
        <div class="row q-mt-md q-mb-md">
          <div class="text-left q-pa-xs" style="border: 1px solid #ccc; width: 100%">
            <p style="font-weight: bold; text-align: center">POSIBLES COMPLICACIONES</p>
            <p style="text-align: justify">
              Entiendo que este procedimiento hace parte del tratamiento instaurado por el profesional tratante y que el personal designado para su
              realización posee la idoneidad y el entrenamiento suficiente para hacerlo; no obstante, entiendo que pueden presentarse complicaciones
              en algunos casos.
            </p>
          </div>
          <div class="text-left q-pa-xs" style="border: 1px solid #ccc; width: 100%">
            <p style="text-align: justify">
              <span style="font-weight: bold">ADMINISTRACIÓN DE MEDICAMENTOS: </span>
              Reacciones alérgicas, intolerancia, interacción con otros medicamentos que el paciente haya recibido y en caso de administración por
              medio de inyectología se puede presentar dolor, inflamación, flebitis, infiltraciones o hematomas.
            </p>
          </div>
          <div class="text-left q-pa-xs" style="border: 1px solid #ccc; width: 25%">
            <p style="text-align: left">
              <span style="font-weight: bold">CURACIONES: </span>
              Dolor, inflamación.
            </p>
          </div>
          <div class="text-left q-pa-xs" style="border: 1px solid #ccc; width: 25%">
            <p style="text-align: left">
              <span style="font-weight: bold">RETIRO DE PUNTOS: </span>
              Rubor, equimosis, molestia, dolor.
            </p>
          </div>
          <div class="text-left q-pa-xs" style="border: 1px solid #ccc; width: 25%">
            <p style="text-align: left">
              <span style="font-weight: bold">LAVADO DE OIDO: </span>
              Molestia, inflamación, mareo.
            </p>
          </div>
          <div class="text-left q-pa-xs" style="border: 1px solid #ccc; width: 25%">
            <p style="text-align: left">
              <span style="font-weight: bold">LAVADO OCULAR: </span>
              Molestia, inflamación.
            </p>
          </div>
          <div class="text-left q-pa-xs" style="border: 1px solid #ccc; width: 25%">
            <p style="text-align: left">
              <span style="font-weight: bold">TOMA ELECTROCARDIOGRAMA: </span>
              La toma de EKG no implica ningún riesgo ni complicación.
            </p>
          </div>
          <div class="text-left q-pa-xs" style="border: 1px solid #ccc; width: 25%">
            <p style="text-align: left">
              <span style="font-weight: bold">CATETERISMO VESICAL: </span>
              Falsa vía uretral Infección urinaria Retención urinaria Hematuria.
            </p>
          </div>
          <div class="text-left q-pa-xs" style="border: 1px solid #ccc; width: 50%">
            <p style="text-align: left">
              <span style="font-weight: bold">EN CASO DE OTRO PROCEDIMIENTO REGISTRAR EN ESTE ESPACIO LAS POSIBLES COMPLICACIONES: </span>
            </p>
            <Input_ class="q-mb-md" v-model="HIC072.descrip_otr_procedim" :field="form.descrip_otr_procedim" :inputStyle="{ width: '400px' }" />
          </div>
        </div>
        <div class="row q-mt-md q-mb-md">
          <div class="text-left q-pa-xs" style="border: 1px solid #ccc; width: 100%">
            <p style="text-align: justify">
              <span style="font-weight: bold">CONSENTIMIENTO / DISENTIMIENTO: </span>
              De forma libre e informada,
              <q-radio color="primary" disabled v-model="autoriza" val="S" label="AUTORIZO" />
              <q-radio color="primary" disabled v-model="autoriza" val="N" label="NO AUTORIZO" />
              al personal asistencial de la entidad, para que, en ejercicio legal de su profesión y de acuerdo con los procedimientos establecidos, se
              practique el procedimiento relacionado anteriormente.
            </p>
          </div>
          <div class="text-left q-pa-xs row" style="border: 1px solid #ccc; width: 100%">
            <div>
              <p style="font-weight: bold">
                Nombre del paciente: <span>{{ getPaci.descrip }}, </span>
              </p>
            </div>
            <div>
              <p style="font-weight: bold">
                &nbsp;No. de Identificación: <span>{{ getPaci.cod }}, </span>
              </p>
            </div>
            <div>
              <p style="font-weight: bold">
                &nbsp;EPS: <span>{{ getPaci.descrip_eps }} </span>
              </p>
            </div>
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
        :disable="opcion_hic072 ? false : true"
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
import { impresionHIC072, impresion, generarArchivo } from "@/impresiones";
import { ref, defineAsyncComponent, onMounted, reactive, computed } from "vue";
import { utilsFormat } from "@/formatos/utils";
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

const HIC072 = reactive({
  fecha: "",
  hora: "",
  nomb_prof: "",
  admin_medic: "N",
  nomb_medicament: "",
  iv: "N",
  im: "N",
  sc: "N",
  id: "N",
  sb: "N",
  vo: "N",
  curacion: "N",
  retiro_puntos: "N",
  lavado_oido: "N",
  lavado_ocular: "N",
  toma_electro: "N",
  cateterismo_vesical: "N",
  otr_no_relac: "N",
  descrip_otr_no_relac: "",
  descrip_otr_procedim: "",
});
const form = ref({
  nomb_prof: {
    id: "nomb_prof",
    maxlength: "100",
    label: "",
    campo_abierto: true,
  },
  descrip_otr_no_relac: {
    id: "descrip_otr_no_relac",
    maxlength: "150",
    label: "",
    campo_abierto: true,
  },
  descrip_otr_procedim: {
    id: "descrip_otr_procedim",
    maxlength: "150",
    label: "",
    campo_abierto: true,
  },
  nomb_medicament: {
    id: "nomb_medicament",
    maxlength: "150",
    label: "",
    campo_abierto: true,
  },
});

const opcion_hic072 = ref(null);
const autoriza = computed(() => {
  switch (opcion_hic072.value) {
    case "AUTORIZAR":
      return "S";
    case "REVOCAR":
      return "N";
    default:
      return "";
  }
});
onMounted(() => {
  HIC072.fecha = dayjs(getEmpresa.fecha_act).format("YYYY-MM-DD");
  HIC072.hora = dayjs().format("HH:mm");
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
  grabarConsentimiento();
};

const grabarConsentimiento = async () => {
  const datos_format = JSON.parse(JSON.stringify(HIC072));
  let datos = {
    nit_entid: nit_usu.value,
    estado: opcion_hic072.value == "AUTORIZAR" ? "1" : "2",
    id_acomp: getAcomp.cod.padStart(15, "0"),
    paren_acomp: getSesion.paren_acomp,
    id_testigo: getTestigo.cod.padStart(15, "0"),
    tipo_testigo: getSesion.tipo_testigo,
    oper_consen: getSesion.oper,
    llave_consen: getHc.llave,
    cod_med: getProf.cod,
    cod_consen: "HIC072",
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
    const datos_hic072 = {
      autorizo: opcion_hic072.value == "AUTORIZAR" ? true : false,
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
      ...HIC072,
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
      datos: { ...firmas, cod_consen: "HIC072" },
      content: impresionHIC072({
        datos: datos_hic072,
      }),
    });
    const docDefinitionFile = await utilsFormat({
      datos: { ...firmas, cod_consen: "HIC072" },
      content: impresionHIC072({
        datos: datos_hic072,
      }),
    });

    await impresion({ docDefinition: docDefinitionPrint });
    const response_impresion = await generarArchivo({ docDefinition: docDefinitionFile, nomb_archivo: `${llave}-HIC-072` });
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
