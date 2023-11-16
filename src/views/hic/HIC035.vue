<template>
  <q-form @submit="validarDatos">
    <q-card class="q-mx-auto format q-mb-lg" style="overflow: auto">
      <q-card-section>
        <div class="text-center">
          <q-toggle
            v-model="reg.opcion_hc035"
            color="primary"
            keep-color
            false-value="REVOCAR"
            true-value="AUTORIZAR"
            unchecked-icon="block"
            checked-icon="check_circle"
            label="¿Autorizar o revocar este consentimiento?"
          />
          <p
            :class="reg.opcion_hc035 == 'AUTORIZAR' ? 'text-green' : 'text-red'"
          >
            <q-chip
              :color="reg.opcion_hc035 == 'AUTORIZAR' ? 'green' : 'red'"
              class="text-white"
              v-if="reg.opcion_hc035"
            >
              {{ reg.opcion_hc035 }}
            </q-chip>
          </p>
        </div>

        <div class="row">
          <p>Historia clínica numero:</p>
          <q-input
            type="text"
            disable
            dense
            v-model="reg.llave"
            class="col-2"
          />
          <p>Ciudad:</p>
          <q-input
            v-model="reg_firmador.descrip_ciudad"
            class="col-2 q-mr-md"
            type="text"
            disable
            dense
          />
          <p>Fecha:</p>
          <q-input v-model="reg.fecha_act" disable dense class="col-2" />
        </div>
      </q-card-section>
      <q-card-section>
        <div class="row">
          <p class="text-justify">Yo</p>
          <q-input
            v-model="reg_firmador.descrip"
            disable
            type="text"
            dense
            class="col-4"
          />
          <p class="text-justify">de</p>
          <q-input v-model="reg.edad" disable type="text" dense class="col-1" />
          <p class="text-justify">años de edad, de genero</p>
          <q-input
            v-model="reg_firmador.sexo"
            disable
            type="text"
            dense
            class="col-1"
          />
          <p class="text-justify">identificado(a) con</p>
          <p class="text-justify">documento de identidad N°</p>
          <q-input
            v-model="reg_firmador.cod"
            disable
            type="text"
            dense
            class="col-2"
          />
          <p class="text-justify">expedida en</p>
          <q-input
            v-model="reg_firmador.descrip_ciudad"
            disable
            type="text"
            dense
            class="col-2"
          />
          <p class="text-justify">con residencia en</p>
          <q-input
            v-model="reg_firmador.descrip_ciudad"
            disable
            type="text"
            dense
            class="col-2"
          />
          <p class="text-justify">teléfono número</p>
          <q-input
            v-model="reg_firmador.telefono"
            disable
            type="text"
            dense
            class="col-2"
          />
          <p class="text-justify">
            Actuando en nombre propio o como acudiente de
          </p>
          <q-input
            v-model="acudiente"
            disable
            type="text"
            dense
            class="col-3"
          />
          <p>
            en mi calidad de paciente y en pleno uso de mis facultades mentales
            y de
          </p>
          <div class="row" style="margin-top: -15px">
            <p class="text-justify">
              mis derechos de salud y habiendo solicitado por mi voluntad los
              servicios de salud a la empresa social del estado ESE salud Yopal,
              por medio del presente documento doy mi consentimiento informado
              para que se me brinden los cuidados correspondientes y se siga la
              conducta terapéutica según el criterio del profesional de salud
              tratante.
            </p>
          </div>
        </div>
        <div class="row">
          <p class="text-justify">
            Dejo constancia que he sido informado(a) y he recibido información y
            asesoría sobre el evento:
          </p>
          <Input_
            style="min-width: 100%; display: inline-block; margin-top: 0px"
            v-model="reg.evento"
            :field="form.evento"
          />
          <p align="justify">
            respecto del modo de contagio, estrategias y métodos de prevención,
            importancia de diagnostico y tratamiento de la pareja de ser
            necesario a quien le informaré mi estado actual para que reciba la
            asesoría, tratamiento y seguimientos que se requieran para evitar
            reinfecciones y/o transmisión de la enfermedad a otras personas con
            quien se tenga contacto. Fui informado(a) de las acciones que se
            seguirán: tratamiento y controles que debo realizar posterior al
            tratamiento médico, al cual debo ser adherente, y recibir
            oportunamente y de manera adecuada; Por lo anterior me comprometo a
            seguir las indicaciones dadas por el profesional de la salud
            respecto al evento presentado, de no seguir las indicaciones los
            principales riesgos que se pueden presentar: resistencia a
            medicamentos, náuseas, mareos, vomito, gastritis, reinfecciones.
          </p>
        </div>
        <div class="row">
          <p class="text-justify">
            Me garantizan la confidencialidad de mis resultados y la información
            que he proporcionado. De lo anterior
            <Select_
              style="min-width: 100px; display: inline-block"
              v-model="reg.iniciar_trata"
              :field="form.iniciar_trata"
              :items="[
                { value: 'S', label: 'SI' },
                { value: 'N', label: 'NO' },
              ]"
            />

            (SI, NO) acepto iniciar tratamiento y realizar los controles y
            seguimientos que se requieran de acuerdo a la patología en curso.
            Por lo tanto, en forma consciente y voluntaria, luego de haber
            escuchado la información y explicaciones, sin haber sido objeto de
            coacción, persuasión, ni manipulación manifiesto lo siguiente:
          </p>
        </div>
        <div class="row">
          <p>
            Me considero SATISFECHO con la información recibida y COMPRENDO la
            indicación, los beneficios, además de los riesgos y posibles
            complicaciones que podrían desprenderse de dicho acto.
          </p>
        </div>

        <div v-if="reg.opcion_hc035 == 'REVOCAR'">
          <div class="text-subtitle1 text-bold row justify-center">
            REVOCATORIA DE CONSENTIMIENTO
          </div>
          <p>
            Yo
            <InputF_ disable v-model="getPaci.descrip" width="300" /> paciente
            de la ESE SALUD YOPAL, con C.C
            <InputF_ disable v-model="getPaci.cod" /> Expreso mi voluntad de
            revocar el consentimiento prestado en fecha
            <InputF_ disable v-model="reg.fecha_act" /> y declaro por tanto que,
            tras la información recibida, no consiento en someterme al
            procedimiento de:
          </p>
          <Input_
            style="min-width: 100%; display: inline-block; margin-top: 0px"
            v-model="reg.revoca_procedi"
            :field="form.revoca_procedi"
          />
          <p>por los siguientes motivos.</p>
          <Input_
            style="min-width: 100%; display: inline-block; margin-top: 0px"
            v-model="reg.revoca_motivos"
            :field="form.revoca_motivos"
          />
        </div>
      </q-card-section>
      <q-card-sections>
        <q-card-actions align="around" class="row">
          <div class="col-12 row justify-around">
            <ContainerFirma
              quien_firma="FIRMA PACIENTE"
              :firmador="getPaci.descrip"
              @reciFirma="callBackFirma"
              class="col-4"
            />
            <ContainerFirma
              :firmador="getAcomp.cod || 'NO HAY ACOMPAÑANTE'"
              :disable="!getAcomp.cod ? true : false"
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
        </q-card-actions>
      </q-card-sections>
      <div class="row justify-center q-my-lg">
        <q-btn
          :disable="reg.opcion_hc035 ? false : true"
          @click="validarDatos"
          icon-right="check_circle"
          class="q-mb-md"
          color="green"
          label="GRABAR"
          type="submit"
        />
      </div>
    </q-card>
  </q-form>

  <div style="height: 5px"></div>
</template>
<script setup>
import {
  useModuleFormatos,
  useApiContabilidad,
  useModuleCon851p,
  useModuleCon851,
} from "@/store";
import { ref, reactive, defineAsyncComponent, onMounted, watch } from "vue";
import { impresionHC035, impresion, generarArchivo } from "@/impresiones";
import { utilsFormat, calcEdad } from "@/formatos/utils";
import { useRouter } from "vue-router";
import { foco_ } from "@/setup";
import dayjs from "dayjs";

const ContainerFirma = defineAsyncComponent(() =>
  import("../../components/global/ContainerFirma.vue")
);

const {
  getDll$,
  _getFirma$,
  guardarFile$,
  _getHuella$,
  enviarCorreo$,
  getEncabezado,
} = useApiContabilidad();
const { getPaci, getAcomp, getHc, getProf, getEmpresa, getSesion } =
  useModuleFormatos();
const { CON851P } = useModuleCon851p();
const { CON851 } = useModuleCon851();
const router = useRouter();

const reg_firmador = ref(getAcomp.cod ? getAcomp : getPaci);
const acudiente = ref(getAcomp.cod ? getPaci.descrip : "");
const firma_recibida_acomp = ref("");
const firma_recibida = ref("");
const firma_prof = ref(null);
const huella_paci = ref(null);

const reg = reactive({
  revoca_procedi: "",
  revoca_motivos: "",
  iniciar_trata: "S",
  evento: "",

  // EXTRAS
  opcion_hc035: "",
  fecha_act: "",
  llave: "",
  edad: "",
});

const form = ref({
  iniciar_trata: {
    id: "iniciar_trata",
    maxlength: "1",
    label: "",
    required: true,
    campo_abierto: true,
  },
  evento: {
    id: "evento",
    maxlength: "190",
    label: "",
    required: true,
    campo_abierto: true,
  },
  revoca_motivos: {
    id: "revoca_motivos",
    maxlength: "285",
    label: "",
    required: true,
    campo_abierto: true,
  },
  revoca_procedi: {
    id: "revoca_procedi",
    maxlength: "285",
    label: "",
    required: true,
    campo_abierto: true,
  },
});

onMounted(() => {
  datosInit();
  getFirmaProf();
});

watch(
  () => reg.opcion_hc035,
  (val) => {
    if (val == "AUTORIZAR") {
      reg.revoca_motivos = "";
      reg.revoca_procedi = "";
    } else {
      //falta
    }
  }
);

const datosInit = () => {
  reg.fecha_act = dayjs(getEmpresa.FECHA_ACT).format("YYYY-MM-DD");
  reg.llave = getHc.llave.slice(15);
  reg.edad = calcEdad(getAcomp.nacim || getPaci.nacim);
};

const getFirmaProf = async () => {
  try {
    firma_prof.value = await _getFirma$({ codigo: Number(getProf.cod) });
    huella_paci.value = await _getHuella$({ codigo: getPaci.cod });
  } catch (error) {
    console.error(error);
    CON851("?", "info", error);
  }
};

const validarDatos = async () => {
  const requiere = "Complete el siguiente campo";

  if (reg.opcion_hc035 == "REVOCAR") {
    if (!reg.revoca_procedi)
      return CON851("?", "info", `${requiere},  `, () =>
        foco_(form, "revoca_procedi")
      );
    if (!reg.revoca_motivos)
      return CON851("?", "info", `${requiere},  `, () =>
        foco_(form, "revoca_motivos")
      );
  }

  if (!reg.evento)
    return CON851("?", "info", `${requiere}, evento `, () =>
      foco_(form, "evento")
    );
  if (!reg.iniciar_trata)
    return CON851("?", "info", `${requiere}`, () =>
      foco_(form, "iniciar_trata")
    );

  if (!firma_recibida.value) {
    return CON851("?", "info", "No se ha realizado la firma del paciente");
  }
  if (getAcomp.cod && !firma_recibida_acomp.value) {
    return CON851("?", "info", "No se ha realizado la firma del acompañate");
  }

  grabarConsentimiento();
};

const grabarConsentimiento = async () => {
  const datos_format = JSON.parse(JSON.stringify(reg));
  let datos = {
    estado: reg.opcion_hc035 == "AUTORIZAR" ? "1" : "2",
    id_acomp: getAcomp.cod.padStart(15, "0"),
    paren_acomp: getSesion.paren_acomp,
    oper_consen: getSesion.oper,
    llave_consen: getHc.llave,
    cod_med: getProf.cod,
    cod_consen: "HIC035",
    disentimiento: "N",
    ...datos_format,
  };

  await getDll$({ modulo: `save_consen.dll`, data: { ...datos } })
    .then((data) => {
      if (data?.llave_consen) {
        return grabarFirmaConsen(data?.llave_consen);
      } else return CON851("?", "error", "Error al guardar el consentimiento");
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
    const datos_hic035 = {
      autorizo: reg.opcion_hc035 == "AUTORIZAR" ? true : false,
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
      fecha: reg.fecha_act,
      llave: reg.llave,
      ...reg,
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
      content: impresionHC035({
        datos: datos_hic035,
      }),
    });
    const docDefinitionFile = utilsFormat({
      datos: firmas,
      content: impresionHC035({
        datos: datos_hic035,
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

const callBackFirmaAcomp = (data_firma) => {
  data_firma && (firma_recibida_acomp.value = data_firma.slice(22));
};

const callBackFirma = (data_firma) => {
  data_firma && (firma_recibida.value = data_firma.slice(22));
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
