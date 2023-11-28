<template>
  <q-card class="q-mx-auto q-ma-xl justify-center" style="width: 65%">
    <q-card-section>
      <q-form @submit="validarDatos">
        <div class="text-center">
          <q-toggle
            v-model="opcion_hc033"
            color="primary"
            keep-color
            false-value="REVOCAR"
            true-value="AUTORIZAR"
            unchecked-icon="block"
            checked-icon="check_circle"
            label="¿Autorizar o revocar este consentimiento?"
          />
          <p :class="opcion_hc033 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
            <q-chip
              :color="opcion_hc033 == 'AUTORIZAR' ? 'green' : 'red'"
              class="text-white"
              v-if="opcion_hc033"
            >
              {{ opcion_hc033 }}
            </q-chip>
          </p>
        </div>
        <h6 class="text-center" style="margin: 0; font-size: 16px">
          ASESORIA PRE TEST VIH (VIRUS DE INMUNODEFICIENCIA HUMANA)
        </h6>
        <div class="q-mt-md" style="max-width: 580px">
          <q-list bordered>
            <q-item tag="label" style="margin-top: -10px" v-ripple>
              <q-item-section>
                <q-item-label>1. ¿Sabe que es el VIH/SIDA?</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-checkbox color="primary" keep-color v-model="HIC033.vih" />
              </q-item-section>
            </q-item>
            <q-item tag="label" style="margin-top: -22px" v-ripple>
              <q-item-section>
                <q-item-label
                  >2. ¿Ha tenido relaciones con personas portadoras de
                  VIH/SIDA?</q-item-label
                >
              </q-item-section>
              <q-item-section side>
                <q-checkbox
                  color="primary"
                  keep-color
                  v-model="HIC033.relaciones"
                />
              </q-item-section>
            </q-item>
            <q-item tag="label" style="margin-top: -22px" v-ripple>
              <q-item-section>
                <q-item-label
                  >3. ¿Se inyecta sustancias psicoactivas?</q-item-label
                >
              </q-item-section>
              <q-item-section side>
                <q-checkbox
                  color="primary"
                  keep-color
                  v-model="HIC033.inyec_sust_psico"
                />
              </q-item-section>
            </q-item>
            <q-item tag="label" style="margin-top: -22px" v-ripple>
              <q-item-section>
                <q-item-label
                  >4. ¿Usa algún método de protección cuando tiene relaciones
                  sexuales?</q-item-label
                >
              </q-item-section>
              <q-item-section side>
                <q-checkbox
                  color="primary"
                  keep-color
                  v-model="HIC033.proteccion_rel_sex"
                />
              </q-item-section>
            </q-item>
            <q-item tag="label" style="margin-top: -22px" v-ripple>
              <q-item-section>
                <q-item-label
                  >5. ¿Ha tenido los siguientes sintomas?</q-item-label
                >
              </q-item-section>
            </q-item>
            <q-item
              class="q-ml-xl"
              style="margin-top: -22px"
              tag="label"
              v-ripple
            >
              <q-item-section>
                <q-item-label>Pérdida de peso</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-checkbox
                  color="primary"
                  keep-color
                  v-model="HIC033.perdida_peso"
                />
              </q-item-section>
            </q-item>
            <q-item
              class="q-ml-xl"
              style="margin-top: -22px"
              tag="label"
              v-ripple
            >
              <q-item-section>
                <q-item-label>Fiebre frecuente</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-checkbox
                  color="primary"
                  keep-color
                  v-model="HIC033.fiebre_frec"
                />
              </q-item-section>
            </q-item>
            <q-item
              class="q-ml-xl"
              style="margin-top: -22px"
              tag="label"
              v-ripple
            >
              <q-item-section>
                <q-item-label>Diarrea permanente</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-checkbox
                  color="primary"
                  keep-color
                  v-model="HIC033.diarrea_perm"
                />
              </q-item-section>
            </q-item>
            <q-item
              class="q-ml-xl"
              style="margin-top: -22px"
              tag="label"
              v-ripple
            >
              <q-item-section>
                <q-item-label>Infección por hongos y herpes</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-checkbox
                  color="primary"
                  keep-color
                  v-model="HIC033.infeccion_hon_her"
                />
              </q-item-section>
            </q-item>
            <q-item tag="label" style="margin-top: -22px" v-ripple>
              <q-item-section>
                <q-item-label
                  >6. ¿Ha sido transfundido en los últimos años?</q-item-label
                >
              </q-item-section>
              <q-item-section side>
                <q-checkbox
                  color="primary"
                  keep-color
                  v-model="HIC033.tranfundido"
                />
              </q-item-section>
            </q-item>
          </q-list>
        </div>
        <div class="q-mt-md row">
          <p>Observaciones:</p>
          <Input_
            class="col-xs-10 col-sm-10 col-md-10 col-lg-10 col-xl-10"
            v-model="HIC033.observaciones"
            :field="form.observaciones"
          />
        </div>
        <div class="row">
          <p>Nombre de quien hizo la asesoría:</p>
          <q-input
            v-model="getProf.descrip"
            disable
            type="text"
            label="Nombre doctor"
            dense
            class="col-4"
          />
        </div>
        <div class="q-mt-lg q-mb-lg row">
          <h6
            class="text-center"
            style="margin: 0; font-size: 16px; font-weight: bold"
          >
            CONSENTIMIENTO INFORMADO PARA REALIZAR LA PRUEBA PRESUNTIVA O
            DIAGNOSTICA DE VIH (VIRUS DE INMUNODEFICIENCIA HUMANA)
          </h6>
        </div>
        <div v-show="HIC033.anios_paciente <= 12">
          <div class="q-mt-md q-mb-xs row">
            <span style="font-weight: bold"
              >Este espacio debe ser diligenciado para niños (as) menores de 12
              años</span
            >
          </div>
          <div class="row" style="border: 1px solid #ccc; padding: 5px">
            <p>Yo</p>
            <q-input
              v-model="getAcomp.descrip"
              disable
              type="text"
              label="Nombre paciente"
              dense
              class="col-4"
            />
            <p>mayor de edad, identificado (a) con C.C. No.</p>
            <q-input
              v-model="getAcomp.cod"
              disable
              label="Cédula"
              type="text"
              dense
              class="col-2"
            />
            <p>expedida en</p>
            <q-input
              v-model="getAcomp.descrip_ciudad"
              disable
              label="Ciudad expedición"
              type="text"
              dense
              class="col-2"
            />
            <p>en condición de representante legal o acudiente del niño(a)</p>
            <q-input
              v-model="getPaci.descrip"
              disable
              label="Nombre paciente"
              type="text"
              dense
              class="col-4"
            />
            <p>de</p>
            <q-input
              v-model="HIC033.anios_paciente"
              disable
              label="Años paci"
              type="text"
              dense
              class="col-1"
            />
            <p>Años de edad</p>
          </div>
        </div>
        <div v-show="HIC033.anios_paciente > 12">
          <div class="q-mt-lg q-mb-md row">
            <span style="font-weight: bold"
              >Este espacio es diligenciado mayores de 12 años</span
            >
          </div>
          <div class="row" style="border: 1px solid #ccc; padding: 5px">
            <p>Yo</p>
            <q-input
              v-model="getPaci.descrip"
              disable
              type="text"
              label="Nombre paciente"
              dense
              class="col-4"
            />
            <p>, identificado (a) con CC. No.</p>
            <q-input
              v-model="getPaci.cod"
              disable
              label="Cédula"
              type="text"
              dense
              class="col-2"
            />
            <p>expedida en</p>
            <q-input
              v-model="getPaci.descrip_ciudad"
              disable
              label="Ciudad expedición"
              type="text"
              dense
              class="col-1"
            />
            <p>
              Certifico que: He leído (o que se me ha leído) el documento sobre
              consentimiento
            </p>
            <p style="margin-top: -2px">
              informado que contiene información sobre el propósito y beneficio
              de la prueba, su interpretación, sus limitaciones, y su riesgo, y
              que entiendo su contenido, incluyendo las limitaciones, beneficios
              y riegos de la prueba.
            </p>
            <p>
              He recibido consejería PRE-PRUEBA (actividad realizada por un
              profesional de la salud para prepararme y confrontarme en relación
              a mis conocimientos, prácticos, y conductas, antes de realizarme
              las pruebas diagnósticas).
            </p>
            <p>
              También certifico que dicha persona me brindo la asesoría y que
              según su compromiso, de ella también recibiré una asesoría
              Post-prueba (procedimiento mediante el cual me entregaran mis
              resultados) y que estoy de acuerdo con el proceso.
            </p>
            <p>
              Entiendo que la toma de muestra es voluntaria y que no puedo
              retirar mi consentimiento en cualquier momento antes de que me sea
              tomada el examen.
            </p>
            <p>
              Fui informada de las medidas que se tomara para proteger la
              confidencialidad de mis resultados.
            </p>
          </div>
        </div>
        <div class="row" v-show="opcion_hc033 == 'AUTORIZAR'">
          <p style="font-weight: bold; font-size: 20">
            De lo anterior Autorizo a mi asesor para la realización de la
            prueba, procesamiento y reporte de la misma.
          </p>
        </div>
        <div class="q-mt-md q-mb-md row" v-show="opcion_hc033 == 'REVOCAR'">
          <div class="row">
            <p>
              Expreso mi voluntad de
              <span style="font-weight: bold; text-decoration: underline"
                >revocar</span
              >
              el consentimiento presentado y declaro por tanto que, tras la
              información recibida, no consiento someterme al procedimiento de
              <span style="font-weight: bold"
                >VIH (VIRUS DE INMUNODEFICIENCIA HUMANA)</span
              >
              por los siguientes motivos:
            </p>
            <Input_
              class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"
              v-model="HIC033.revocar_motivos"
              :field="form.revocar"
            />
          </div>
        </div>
      </q-form>
    </q-card-section>
    <q-card-actions>
      <div class="col-12 row justify-around">
        <ContainerFirma
          quien_firma="FIRMA PACIENTE"
          :firmador="getPaci.descrip"
          @reciFirma="callBackFirma"
          class="col-4"
        />
        <ContainerFirma
          :firmador="getAcomp.descrip || 'NO HAY ACOMPAÑANTE'"
          :disable="!getAcomp.descrip ? true : false"
          quien_firma="FIRMA TUTOR O FAMILIAR"
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
          :disable="opcion_hc033 ? false : true"
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
  </q-card>
  <div style="height: 1px"></div>
</template>
<script setup>
import {
  useModuleFormatos,
  useApiContabilidad,
  useModuleCon851,
  useModuleCon851p,
} from "@/store";
import { ref, defineAsyncComponent, onMounted, watch } from "vue";
import { utilsFormat } from "@/formatos/utils";
import { impresionHC033, impresion, generarArchivo } from "@/impresiones";
import { useRouter } from "vue-router";
import dayjs from "dayjs";

const router = useRouter();
const ContainerFirma = defineAsyncComponent(() =>
  import("@/components/global/containerFirma.vue")
);

const { getPaci, getAcomp, getHc, getProf, getEmpresa, getSesion } =
  useModuleFormatos();
const {
  getDll$,
  _getFirma$,
  guardarFile$,
  _getHuella$,
  enviarCorreo$,
  getEncabezado,
} = useApiContabilidad();
const { CON851 } = useModuleCon851();
const { CON851P } = useModuleCon851p();

const firma_recibida_acomp = ref("");
const firma_recibida = ref("");

const opcion_hc033 = ref(null);
const llave = ref(null);
const fecha_act = ref(null);
const firma_prof = ref(null);
const huella_paci = ref(null);

const HIC033 = ref({
  vih: false,
  relaciones: false,
  inyec_sust_psico: false,
  proteccion_rel_sex: false,
  perdida_peso: false,
  fiebre_frec: false,
  diarrea_perm: false,
  infeccion_hon_her: false,
  tranfundido: false,
  observaciones: "",
  nombre_asesoria: "",
  revocar_motivos: "",

  //Extras
  nombre_representante: "",
  cedula_representante: "",
  expedida_representante: "",
  nombre_paciente: "",
  anios_paciente: "",
  nombre_paciente: "",
  tipo_id: "",
  cedula: "",
  expedida: "",
  expreso: "",
  nombre_revoca: "",
  identificacion_revoca: "",
  fecha_revoca: "",
});

const form = ref({
  observaciones: {
    id: "observaciones",
    label: "",
    maxlength: "190",
    required: true,
    campo_abierto: true,
  },
  revocar: {
    id: "revocar",
    label: "",
    maxlength: "285",
    required: true,
    campo_abierto: true,
  },
});

watch(opcion_hc033, (val) => {
  if (val == "AUTORIZAR") {
    HIC033.value.revocar_motivos = "";
  } else {
    HIC033.value.diagnostico = "";
  }
});
onMounted(() => {
  const anioNacim = parseInt(getPaci.nacim.slice(0, 4));
  const anioActu = dayjs().year();
  HIC033.value.anios_paciente = anioActu - anioNacim;
  fecha_act.value = dayjs(getEmpresa.FECHA_ACT).format("YYYY-MM-DD");
  llave.value = getHc.llave.slice(15);
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

const callBackFirma = (data_firma) => {
  data_firma && (firma_recibida.value = data_firma);
};

const callBackFirmaAcomp = (data_firma) => {
  data_firma && (firma_recibida_acomp.value = data_firma);
};

const validarDatos = async () => {
  if (opcion_hc033.value == "REVOCAR" && HIC033.value.revocar_motivos == "") {
    return CON851("?", "info", "Debe ingresar motivos de revocación", () =>
      foco_(form, "revocar")
    );
  }
  HIC033.value.nombre_asesoria = getProf.descrip
    ? getProf.descrip
    : "Sin nombre";
  //Cambia valores booleanos a S o N
  for (const key of Object.keys(HIC033.value)) {
    if (typeof HIC033.value[key] === "boolean") {
      HIC033.value[key] = HIC033.value[key] ? "S" : "N";
    }
  }

  grabarConsentimiento();
};

const grabarConsentimiento = async () => {
  const datos_format = JSON.parse(JSON.stringify(HIC033.value));
  let datos = {
    estado: opcion_hc033.value == "AUTORIZAR" ? "1" : "2",
    disentimiento: "N",
    llave_consen: getHc.llave,
    oper_consen: getSesion.oper,
    cod_consen: "HIC033",
    cod_med: getProf.cod,
    id_acomp: getAcomp.cod.padStart(15, "0"),
    paren_acomp: getSesion.paren_acomp,
    ...datos_format,
  };
  if (!firma_recibida.value) {
    return CON851("?", "info", "No se ha realizado la firma del paciente");
  }
  if (getAcomp.cod && !firma_recibida_acomp.value) {
    return CON851("?", "info", "No se ha realizado la firma del acompañante");
  }
  await getDll$({ modulo: `save_consen.dll`, data: { ...datos } })
    .then((data) => {
      if (data?.llave_consen) {
        const fecha = data?.llave_consen.slice(24, 32);
        fecha_act.value = dayjs(fecha).format("YYYY-MM-DD");
        return grabarFirmaConsen(data?.llave_consen);
      }
      CON851("?", "error", "Error al guardar el consentimiento");
    })
    .catch((error) => {
      console.error(error);
      CON851("?", "error", "Error al guardar el consentimiento");
    });
};

const grabarFirmaConsen = async (llave) => {
  try {
    await guardarFile$({ base64: firma_recibida.value, codigo: `P${llave}` });
    await guardarFile$({
      base64: firma_recibida_acomp.value,
      codigo: `A${llave}`,
    });

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
          return CON851("?", "info", "El correo no es valido", () =>
            router.back()
          );
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
    const datos_hic033 = {
      autorizo: opcion_hc033.value == "AUTORIZAR" ? true : false,
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
      fecha: fecha_act.value,
      llave: llave.value,
      ...HIC033.value,
    };
    const firmas = {
      img_firma_consen: firma_recibida.value,
      img_firma_paci: firma_recibida.value,
      img_firma_acomp: firma_recibida_acomp.value,
      img_huella_paci: huella_paci.value,
      firma_prof: firma_prof.value,
    };
    const docDefinitionPrint = utilsFormat({
      datos: firmas,
      content: impresionHC033({
        datos: datos_hic033,
      }),
    });
    const docDefinitionFile = utilsFormat({
      datos: firmas,
      content: impresionHC033({
        datos: datos_hic033,
      }),
    });

    await impresion({ docDefinition: docDefinitionPrint });
    const response_impresion = await generarArchivo({
      docDefinition: docDefinitionFile,
    });
    return response_impresion;
  } catch (error) {
    console.error("error -->", error);
  }
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
