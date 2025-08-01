<template>
  <q-card class="q-mx-auto format">
    <div>
      <q-card-section>
        <div class="text-center">
          <q-toggle
            v-model="opcion_hic059"
            color="primary"
            keep-color
            false-value="REVOCAR"
            true-value="AUTORIZAR"
            unchecked-icon="block"
            checked-icon="check_circle"
            label="¿Autorizar o revocar este consentimiento?"
          />
          <p :class="opcion_hic059 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
            <q-chip :color="opcion_hic059 == 'AUTORIZAR' ? 'green' : 'red'" class="text-white" v-if="opcion_hic059">
              {{ opcion_hic059 }}
            </q-chip>
          </p>
        </div>

        <div class="row">
          <p style="text-align: justify">
            Yo <span class="text-bold">{{ getPaci.descrip }}</span> , identificado(a) con tipo de documento:
            <span class="text-bold">{{ getPaci.tipo_id }}</span
            >&nbsp; N°: <span class="text-bold">{{ getPaci.cod }}</span> , expedida en:
          </p>
          <div class="row q-mt-xs">
            <p>
              <span class="text-bold">{{ getPaci.descrip_ciudad }}</span
              >, residente del municipio:
            </p>
            <Input_ v-model="HIC059.municipio" :field="form.municipio" :inputStyle="{ width: '482px' }" />
          </div>

          <div class="row q-mt-lg">
            <p>en el MICROTERRITORIO:</p>
            <Input_ v-model="HIC059.microterritorio" :field="form.microterritorio" :inputStyle="{ width: '581px' }" />
          </div>
          <div class="row q-mt-lg">
            <p>en representación de la familia:</p>
            <Input_ v-model="HIC059.familia" :field="form.familia" :inputStyle="{ width: '536px' }" />
          </div>
          <div class="row">
            <div class="text-left">
              <p style="font-weight: bold; margin-top: 10px">¿Autoriza?</p>
            </div>
            <div class="text-center">
              <q-radio disabled color="primary" v-model="autoriza" val="S" label="SI" />
              <q-radio disabled color="primary" v-model="autoriza" val="N" label="NO" />
            </div>
          </div>
          <p>
            al equipo básico de salud del Plan de Intervenciones Colectivas PIC de la E.S.E. PRIMER NIVEL GRANADA SALUD, en específico al auxiliar de
            enfermería, enfermera, psicólogo, médico.
          </p>
        </div>
        <div class="row q-mt-lg q-mb-lg">
          <p>Otro:</p>
          <Input_ class="col-xs-11" v-model="HIC059.otro_prof" :field="form.otro_prof" />
        </div>
        <div>
          <p style="text-align: justify">
            Para que ingrese a mi hogar con el objetivo de desarrollar la Estrategia de Atención Primaria en Salud comprometiéndome a suministrar la
            información requerida mediante el diligenciamiento de fichas caracterización, y en las etapas de plan de cuidado y su respectivo
            cumplimiento.
          </p>
          <p style="text-align: justify">Me comprometo a cumplir con mis obligaciones tales como:</p>
          <ul>
            <li>Estar presente en el domicilio la fecha indicada para la visita.</li>
            <li>Tener un trato cordial y respetuoso con el personal de salud.</li>
            <li>
              Suministrar información veraz para ser consignada en las fichas de caracterización ambiental, familiar e individual en el entorno hogar.
            </li>
            <li>Revisar, concertar las actividades y las recomendaciones del plan integral de cuidado primario (PICP).</li>
            <li>Cumplir con las citas asignadas por la IPS de referencia.</li>
            <li>
              Participar activamente en los seguimientos y las actividades de intervenciones colectivas para cumplir con las tareas asignadas dentro
              PICP.
            </li>
            <li>Preguntar cuando no entienda algo relacionado con mi salud y la de mi núcleo familiar.</li>
            <li>Informar cambio de domicilio o número de teléfono al programa.</li>
            <li>Acatar las indicaciones para la realización de los procedimientos de enfermería y psicología en casa.</li>
          </ul>
        </div>
        <div class="row">
          <p style="text-align: justify">Dado en:</p>
          <Input_ v-model="HIC059.lugar_atenc" :field="form.lugar_atenc" :inputStyle="{ width: '250px' }" />
          <p style="text-align: justify">el dia:</p>
          <Input_ v-model="HIC059.dia_atenc" :field="form.dia_atenc" :inputStyle="{ width: '40px' }" />
          <p style="text-align: justify">del mes de:</p>
          <Input_ v-model="HIC059.mes_atenc" :field="form.mes_atenc" :inputStyle="{ width: '150px' }" />
          <p style="text-align: justify">del año 2025.</p>
        </div>
        <div class="row q-mt-lg">
          <div class="text-left">
            <p style="margin-top: 10px">¿Autoriza registro fotográfico?</p>
          </div>
          <div class="text-center">
            <q-radio color="primary" v-model="HIC059.autoriza_foto" val="S" label="SI" />
            <q-radio color="primary" v-model="HIC059.autoriza_foto" val="N" label="NO" />
          </div>
        </div>
        <div class="row q-mt-xs">
          <p style="text-align: justify">Teléfono:</p>
          <Input_ v-model="HIC059.telefono" :field="form.telefono" :inputStyle="{ width: '150px' }" />
        </div>
        <div class="row q-mt-lg">
          <p style="text-align: justify">Dirección:</p>
          <Input_ v-model="HIC059.direcc" :field="form.direcc" :inputStyle="{ width: '750px' }" />
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
          :tipo_doc="getPaci.tipo_id"
          @reciFirma="callBackFirma"
          :huella_="huella_paci"
          class="col-4"
        />
        <ContainerFirma
          :firmador="getAcomp.descrip || 'NO HAY ACOMPAÑANTE'"
          :disable="!getAcomp.descrip ? true : false"
          quien_firma="FIRMA TUTOR O FAMILIAR"
          :registro_profe="getAcomp.cod"
          :tipo_doc="getAcomp.tipo_id"
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

    <div class="col-12 row justify-center q-my-md">
      <q-btn
        :disable="opcion_hic059 ? false : true"
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
import { impresionHIC059, impresion, generarArchivo } from "@/impresiones";
import { ref, defineAsyncComponent, onMounted, reactive, computed } from "vue";
import { utilsFormat } from "@/formatos/utils";
import { useRouter } from "vue-router";
import dayjs from "dayjs";
import "dayjs/locale/es";
dayjs.locale("es");

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

const HIC059 = reactive({
  fecha_act: "",
  municipio: "",
  microterritorio: "",
  familia: "",
  lugar_atenc: "",
  dia_atenc: "",
  mes_atenc: "",
  autoriza_foto: "S",
  telefono: "",
  direcc: "",
});
const form = ref({
  municipio: {
    id: "municipio",
    maxlength: "150",
    label: "",
    campo_abierto: true,
  },
  microterritorio: {
    id: "microterritorio",
    maxlength: "150",
    label: "",
    campo_abierto: true,
  },
  familia: {
    id: "familia",
    maxlength: "250",
    label: "",
    campo_abierto: true,
  },
  lugar_atenc: {
    id: "lugar_atenc",
    maxlength: "250",
    label: "",
    campo_abierto: true,
  },
  otro_prof: {
    id: "otro_prof",
    maxlength: "150",
    label: "",
    campo_abierto: true,
  },
  dia_atenc: {
    id: "dia_atenc",
    maxlength: "2",
    label: "",
    tipo: "number",
    campo_abierto: true,
  },
  mes_atenc: {
    id: "mes_atenc",
    maxlength: "15",
    label: "",
    campo_abierto: true,
  },
  telefono: {
    id: "telefono",
    maxlength: "10",
    label: "",
    tipo: "number",
    campo_abierto: true,
  },
  direcc: {
    id: "direcc",
    maxlength: "100",
    label: "",
    campo_abierto: true,
  },
});
const opcion_hic059 = ref(null);

const autoriza = computed(() => {
  switch (opcion_hic059.value) {
    case "AUTORIZAR":
      return "S";
    case "REVOCAR":
      return "N";
    default:
      return "";
  }
});
onMounted(() => {
  HIC059.dia_atenc = dayjs().date();
  HIC059.mes_atenc = dayjs().format("MMMM");
  HIC059.telefono = getPaci.telefono;
  HIC059.direcc = getPaci.direccion;
  HIC059.municipio = getPaci.descrip_ciudad;

  HIC059.fecha_act = dayjs(getEmpresa.fecha_act).format("YYYY-MM-DD");
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
  const datos_format = JSON.parse(JSON.stringify(HIC059));
  let datos = {
    nit_entid: nit_usu.value,
    estado: opcion_hic059.value == "AUTORIZAR" ? "1" : "2",
    id_acomp: getAcomp.cod.padStart(15, "0"),
    paren_acomp: getSesion.paren_acomp,
    id_testigo: getTestigo.cod.padStart(15, "0"),
    tipo_testigo: getSesion.tipo_testigo,
    oper_consen: getSesion.oper,
    llave_consen: getHc.llave,
    cod_med: getProf.cod,
    cod_consen: "HIC059",
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
    const datos_hic059 = {
      autorizo: opcion_hic059.value == "AUTORIZAR" ? true : false,
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
      ...HIC059,
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
      datos: { ...firmas, cod_consen: "HIC059" },
      content: impresionHIC059({
        datos: datos_hic059,
      }),
    });
    const docDefinitionFile = await utilsFormat({
      datos: { ...firmas, cod_consen: "HIC059" },
      content: impresionHIC059({
        datos: datos_hic059,
      }),
    });

    await impresion({ docDefinition: docDefinitionPrint });
    const response_impresion = await generarArchivo({ docDefinition: docDefinitionFile, nomb_archivo: `${llave}-HIC-059` });
    return response_impresion;
  } catch (error) {
    console.error(error);
  }
};

const callBackFirma = (data_firma) => {
  data_firma && (firma_recibida.value = data_firma);
};

const callBackFirmaAcomp = (data_firma) => {
  data_firma && (firma_recibida_acomp.value = data_firma);
};
</script>
