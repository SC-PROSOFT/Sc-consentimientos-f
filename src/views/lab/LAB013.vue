<template>
  <!-- <q-form @submit="validarDatos"> -->
  <div>
    <q-card class="q-mx-auto format q-mb-lg" style="overflow: auto">
      <q-card-section>
        <div class="text-center">
          <q-toggle
            v-model="reg_lab013.opcion_lab013"
            color="primary"
            keep-color
            false-value="REVOCAR"
            true-value="AUTORIZAR"
            unchecked-icon="block"
            checked-icon="check_circle"
            label="¿Autorizar o revocar este consentimiento?"
          />
          <p :class="reg_lab013.opcion_lab013 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
            <q-chip :color="reg_lab013.opcion_lab013 == 'AUTORIZAR' ? 'green' : 'red'" class="text-white" v-if="reg_lab013.opcion_lab013">
              {{ reg_lab013.opcion_lab013 }}
            </q-chip>
          </p>
        </div>

        <DatosFormat
          :datos="datos"
          @datos="(data) => (reg_lab013.servicio = data)"
          @ambito_ante="(data) => (reg_lab013.ambito_atenc = data)"
          @ident_genero="(data) => (reg_lab013.ident_genero = data)"
        />

        <div class="row q-mt-md q-mb-md" style="width: 100%">
          <div class="text-center" style="border: 1px solid #ccc; width: 100%">
            <p style="font-weight: bold; margin-top: 10px">PREPARACIÓN (PREVIO A LA SEDACIÓN)</p>
          </div>
          <div class="text-left" style="border: 1px solid #ccc; width: 80%">
            <p style="font-weight: bold; margin-top: 10px">¿Paciente valorado por el médico anestesiólogo para este procedimiento?</p>
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 20%">
            <q-radio color="primary" v-model="reg_lab013.pregunta_1" val="S" label="SI" />
            <q-radio color="primary" v-model="reg_lab013.pregunta_1" val="N" label="NO" />
          </div>
          <div class="text-left" style="border: 1px solid #ccc; width: 80%">
            <p style="font-weight: bold; margin-top: 10px">
              ¿Complejidad del procedimiento adecuado para realizar fuera de salas de cirugía (ASAI - ASAII)?
            </p>
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 20%">
            <q-radio color="primary" v-model="reg_lab013.pregunta_2" val="S" label="SI" />
            <q-radio color="primary" v-model="reg_lab013.pregunta_2" val="N" label="NO" />
          </div>
          <div class="text-left" style="border: 1px solid #ccc; width: 80%">
            <p style="font-weight: bold; margin-top: 10px">¿Nivel de sedación planeado y comentado al paciente o familiar?</p>
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 20%">
            <q-radio color="primary" v-model="reg_lab013.pregunta_3" val="S" label="SI" />
            <q-radio color="primary" v-model="reg_lab013.pregunta_3" val="N" label="NO" />
          </div>
          <div class="text-left" style="border: 1px solid #ccc; width: 80%">
            <p style="font-weight: bold; margin-top: 10px">¿Paciente que cumple ayuno recomendado?</p>
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 20%">
            <q-radio color="primary" v-model="reg_lab013.pregunta_4" val="S" label="SI" />
            <q-radio color="primary" v-model="reg_lab013.pregunta_4" val="N" label="NO" />
          </div>
          <div class="text-left" style="border: 1px solid #ccc; width: 80%">
            <p style="font-weight: bold; margin-top: 10px">¿Tiene el paciente antecedente de alergias?</p>
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 20%">
            <q-radio color="primary" v-model="reg_lab013.pregunta_5" val="S" label="SI" />
            <q-radio color="primary" v-model="reg_lab013.pregunta_5" val="N" label="NO" />
          </div>
          <div v-show="reg_lab013.pregunta_5 == 'S'" class="text-center" style="border: 1px solid #ccc; width: 100%">
            <div class="row q-mt-md">
              <p class="text-left">Cual?:</p>
              <Input_ v-model="reg_lab013.espec_pregunta_5" :field="form.espec_pregunta_5" class="col-xs-11" />
            </div>
          </div>
          <div class="text-left" style="border: 1px solid #ccc; width: 80%">
            <p style="font-weight: bold; margin-top: 10px">¿Se sospecha vía aérea difícil?/¿Se sospecha riesgo alto de broncoaspiración?</p>
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 20%">
            <q-radio color="primary" v-model="reg_lab013.pregunta_6" val="S" label="SI" />
            <q-radio color="primary" v-model="reg_lab013.pregunta_6" val="N" label="NO" />
          </div>
          <div class="text-left" style="border: 1px solid #ccc; width: 80%">
            <p style="font-weight: bold; margin-top: 10px">¿Acompañamiento de familiar del paciente y aréa de observación confirmada?</p>
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 20%">
            <q-radio color="primary" v-model="reg_lab013.pregunta_7" val="S" label="SI" />
            <q-radio color="primary" v-model="reg_lab013.pregunta_7" val="N" label="NO" />
          </div>
          <div class="text-left" style="border: 1px solid #ccc; width: 80%">
            <p style="font-weight: bold; margin-top: 10px">¿Equipo de vía aérea completo y disponible?</p>
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 20%">
            <q-radio color="primary" v-model="reg_lab013.pregunta_8" val="S" label="SI" />
            <q-radio color="primary" v-model="reg_lab013.pregunta_8" val="N" label="NO" />
          </div>
          <div class="text-left" style="border: 1px solid #ccc; width: 80%">
            <p style="font-weight: bold; margin-top: 10px">¿Desfibrilador descargando manualmente de forma adecuada?</p>
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 20%">
            <q-radio color="primary" v-model="reg_lab013.pregunta_9" val="S" label="SI" />
            <q-radio color="primary" v-model="reg_lab013.pregunta_9" val="N" label="NO" />
          </div>
          <div class="text-left" style="border: 1px solid #ccc; width: 80%">
            <p style="font-weight: bold; margin-top: 10px">¿Medicamentos de reanimación disponibles?</p>
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 20%">
            <q-radio color="primary" v-model="reg_lab013.pregunta_10" val="S" label="SI" />
            <q-radio color="primary" v-model="reg_lab013.pregunta_10" val="N" label="NO" />
          </div>
          <div class="text-left" style="border: 1px solid #ccc; width: 80%">
            <p style="font-weight: bold; margin-top: 10px">¿Identidad del paciente, procedimiento y consentimiento confirmado?</p>
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 20%">
            <q-radio color="primary" v-model="reg_lab013.pregunta_11" val="S" label="SI" />
            <q-radio color="primary" v-model="reg_lab013.pregunta_11" val="N" label="NO" />
          </div>
          <div class="text-left" style="border: 1px solid #ccc; width: 80%">
            <p style="font-weight: bold; margin-top: 10px">¿Monitoría del paciente colocada?</p>
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 20%">
            <q-radio color="primary" v-model="reg_lab013.pregunta_12" val="S" label="SI" />
            <q-radio color="primary" v-model="reg_lab013.pregunta_12" val="N" label="NO" />
          </div>
        </div>
        <!-- ----------------------------------------------------------- -->
        <div class="row q-mt-md q-mb-md" style="width: 100%">
          <div class="text-center" style="border: 1px solid #ccc; width: 100%">
            <p style="font-weight: bold; margin-top: 10px">RECUPERACIÓN EGRESO</p>
          </div>

          <div class="text-left" style="border: 1px solid #ccc; width: 80%">
            <p style="font-weight: bold; margin-top: 10px">¿Se evalúa náusea / vómito? ¿Paciente presenta algún otro síntoma?</p>
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 20%">
            <q-radio color="primary" v-model="reg_lab013.pregunta_13" val="S" label="SI" />
            <q-radio color="primary" v-model="reg_lab013.pregunta_13" val="N" label="NO" />
          </div>

          <div class="text-left" style="border: 1px solid #ccc; width: 80%">
            <p style="font-weight: bold; margin-top: 10px">¿Se brinda acompañamiento en recuperación?</p>
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 20%">
            <q-radio color="primary" v-model="reg_lab013.pregunta_14" val="S" label="SI" />
            <q-radio color="primary" v-model="reg_lab013.pregunta_14" val="N" label="NO" />
          </div>

          <div class="text-left" style="border: 1px solid #ccc; width: 80%">
            <p style="font-weight: bold; margin-top: 10px">¿Se lograron criterios de egreso?</p>
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 20%">
            <q-radio color="primary" v-model="reg_lab013.pregunta_15" val="S" label="SI" />
            <q-radio color="primary" v-model="reg_lab013.pregunta_15" val="N" label="NO" />
          </div>
          <div class="text-left" style="border: 1px solid #ccc; width: 80%">
            <p style="font-weight: bold; margin-top: 10px">
              ¿Se presento algún indicio de atención insegura durante el procedimiento o en el área de recuperación?¿Se reporto?
            </p>
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 20%">
            <q-radio color="primary" v-model="reg_lab013.pregunta_16" val="S" label="SI" />
            <q-radio color="primary" v-model="reg_lab013.pregunta_16" val="N" label="NO" />
          </div>
          <div class="text-left" style="border: 1px solid #ccc; width: 80%">
            <p style="font-weight: bold; margin-top: 10px">¿Se proporsionó hoja de recomendaciones de alta?</p>
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 20%">
            <q-radio color="primary" v-model="reg_lab013.pregunta_17" val="S" label="SI" />
            <q-radio color="primary" v-model="reg_lab013.pregunta_17" val="N" label="NO" />
          </div>
        </div>
        <!-- ----------------------------------------------------------- -->
        <div class="border-format q-my-sm">
          <div class="text-center text-subtitle1 text-bold q-py-xs q-mb-md">Observaciones</div>
          <TextArea_ v-model="reg_lab013.observac" :field="form.observac" />
        </div>

        <div class="row justify-center q-mt-lg" style="width: 100%">
          <div class="row justify-center bold" style="width: 30%">
            <p class="text-center text-bold q-py-xs q-mb-md">Elaborado por: Enfermera</p>
          </div>
          <div class="row justify-center bold" style="width: 35%">
            <p class="text-center text-bold q-py-xs q-mb-md">Revisado por: Asesor de Calidad</p>
          </div>
          <div class="row justify-center bold" style="width: 35%">
            <p class="text-center text-bold q-py-xs q-mb-md">Aprobado por: Representante Legal</p>
          </div>
        </div>

        <div class="col-12 row justify-around q-mt-lg">
          <ContainerFirma
            :quien_firma="getAcomp.cod ? 'FIRMA ACOMPAÑANTE' : 'FIRMA PACIENTE'"
            :firmador="getAcomp.cod ? getAcomp.descrip : getPaci.descrip"
            :registro_profe="getAcomp.cod ? getAcomp.cod : getPaci.cod"
            @reciFirma="callBackFirma"
            :huella_="huella_paci"
            :tipo_doc="getAcomp.cod ? getAcomp.tipo_id : getPaci.tipo_id"
            class="col-4"
          />
          <!-- :firma_="firma_prof_enfer" -->
          <ContainerFirma
            quien_firma="FIRMA TESTIGO"
            @reciFirma="callBackFirmaTest"
            :firmador="getTestigo.descrip"
            :descrip_prof="getTestigo.descrip_atiende"
            :registro_profe="getTestigo.registro_profe"
            :codigo_firma="getTestigo.cod"
            class="col-4"
          />
          <ContainerFirma
            quien_firma="AUXILIAR DE ENFERMERÍA"
            @reciFirma="callBackFirmaProf"
            :codigo_firma="getProf.cod"
            :firmador="getProf.descrip"
            :descrip_prof="getProf.descrip_atiende"
            :registro_profe="getProf.registro_profe"
            class="col-4"
          />
        </div>
      </q-card-section>

      <div class="row justify-center q-my-lg">
        <q-btn
          :disable="reg_lab013.opcion_lab013 ? false : true"
          @click="validarDatos"
          icon-right="check_circle"
          class="q-mb-md"
          color="green"
          label="GRABAR"
          type="submit"
        />
      </div>
    </q-card>
  </div>

  <div style="height: 5px"></div>
</template>
<script setup>
import { regPaci, regAcomp } from "@/fuentes";
import { useModuleFormatos, useApiContabilidad, useModuleCon851p, useModuleCon851 } from "@/store";
import { ref, reactive, defineAsyncComponent, onMounted, watch } from "vue";
import { impresionLAB013, impresion, generarArchivo } from "@/impresiones";
import { utilsFormat, calcularEdad, evaluarParentesco, evaluarDiscapacidad, evaluarClaseServ, evaluarTipoId } from "@/formatos/utils";
import { useRouter } from "vue-router";
import { foco_ } from "@/setup";
import dayjs from "dayjs";

const ContainerFirma = defineAsyncComponent(() => import("../../components/global/ContainerFirma.vue"));
const DatosFormat = defineAsyncComponent(() => import("@/components/global/DatosFormat.vue"));
const { getDll$, _getFirma$, guardarFile$, _getHuella$, enviarCorreo$, getEncabezado } = useApiContabilidad();
const { getPaci, getAcomp, getHc, getProf, getEmpresa, getSesion, getTestigo } = useModuleFormatos();
const { CON851P } = useModuleCon851p();
const { CON851 } = useModuleCon851();
const router = useRouter();

const reg_firmador = ref(getAcomp.cod ? getAcomp : getPaci);
const acudiente = ref(getAcomp.cod ? getPaci.descrip : "");
const firma_recibida_acomp = ref("");
const firma_recibida = ref("");
const firma_recibida_test = ref("");
const firma_prof = ref(null);
const huella_paci = ref(null);
const firma_prof_enfer = ref(null);

const datos = {
  tipo_id: getPaci.tipo_id,
  active_cups: true,
};

const reg_paci = ref(regPaci());
const reg_acomp = ref(regAcomp());

const reg_lab013 = reactive({
  revoca_procedi: "",
  fecha: dayjs().format("DD-MM-YYYY"),
  hora: dayjs().format("hh:mm A"),

  pregunta_1: "",
  pregunta_2: "",
  pregunta_3: "",
  pregunta_4: "",
  pregunta_5: "",
  espec_pregunta_5: "",
  pregunta_6: "",
  pregunta_7: "",
  pregunta_8: "",
  pregunta_9: "",
  pregunta_10: "",
  pregunta_11: "",
  pregunta_12: "",
  pregunta_13: "",
  pregunta_14: "",
  pregunta_15: "",
  pregunta_16: "",
  pregunta_17: "",
  observac: "",

  // EXTRAS
  parentesco: "",
  opcion_lab013: "",
  fecha_act: "",
  llave: "",
  servicio: "",
  ambito_atenc: "",
  edad: "",
  ident_genero: "",
  discapacidad: "",

  nomb_entid_resp: "",
  descrip_tipo_id: "",
});

const form = ref({
  espec_pregunta_5: {
    id: "espec_pregunta_5",
    maxlength: "150",
    label: "",
    campo_abierto: true,
  },

  observac: {
    id: "observac",
    maxlength: "400",
    label: "",
    rows: 5,
    campo_abierto: true,
  },
});

onMounted(() => {
  console.log("getSesion --> ", getSesion);

  datosInit();
  getFirmaProf();
});

const datosInit = () => {
  reg_lab013.fecha_act = dayjs(getEmpresa.FECHA_ACT).format("YYYY-MM-DD");
  reg_lab013.edad = calcularEdad(getAcomp.nacim);
  Object.assign(reg_paci.value, getPaci);
  Object.assign(reg_acomp.value, getAcomp);

  reg_lab013.parentesco = evaluarParentesco(getSesion.paren_acomp);
  reg_lab013.discapacidad = evaluarDiscapacidad(reg_paci.value.discap);
  reg_lab013.servicio = evaluarClaseServ(getSesion.clase);
  reg_lab013.descrip_tipo_id = evaluarTipoId(reg_paci.value.tipo_id);
};

const getFirmaProf = async () => {
  try {
    firma_prof.value = await _getFirma$({ codigo: Number(getProf.cod) || 0 });
    huella_paci.value = await _getHuella$({ codigo: getPaci.cod });
  } catch (error) {
    console.error(error);
    CON851("?", "info", error);
  }
};

const validarDatos = async () => {
  console.log("reg_lab013.value --->> ", reg_lab013);
  const requiere = "Complete el siguiente campo";

  //   if (!firma_recibida.value) {
  //     return CON851("?", "info", "No se ha realizado la firma del paciente");
  //   }
  //   if (getAcomp.cod && !firma_recibida_acomp.value) {
  //     return CON851("?", "info", "No se ha realizado la firma del acompañate");
  //   }
  if (reg_lab013.opcion_lab013 == "AUTORIZAR") {
    // if (!reg_lab013.peso_kg) return CON851("?", "info", `${requiere},  Peso (Kg)`, () => foco_(form, "peso_kg"));
    // if (!reg_lab013.talla_cm) return CON851("?", "info", `${requiere},  Talla (Cm)`, () => foco_(form, "talla_cm"));
    // if (!reg_lab013.creatinina) return CON851("?", "info", `${requiere},  Creatinina (mg/dl)`, () => foco_(form, "creatinina"));
    // if (!reg_lab013.signo_ta_sistol) return CON851("?", "info", `${requiere}, Signo TA`, () => foco_(form, "signo_ta_sistol"));
    // if (!reg_lab013.signo_ta_diastol) return CON851("?", "info", `${requiere}, Signo TA mm Hg`, () => foco_(form, "signo_ta_diastol"));
    // if (!reg_lab013.signo_frec_card) return CON851("?", "info", `${requiere}, Signo FC`, () => foco_(form, "signo_frec_card"));
    // if (!reg_lab013.signo_frec_resp) return CON851("?", "info", `${requiere}, Signo FR`, () => foco_(form, "signo_frec_resp"));
    // if (!reg_lab013.signo_sa_o2_porc) return CON851("?", "info", `${requiere}, Signo SaO2`, () => foco_(form, "signo_sa_o2_porc"));
    // if (!reg_lab013.signo_fi_o2_porc) return CON851("?", "info", `${requiere}, Signo FiO2`, () => foco_(form, "signo_fi_o2_porc"));
    // if (!reg_lab013.signo_glasgow) return CON851("?", "info", `${requiere}, Signo Glasgow`, () => foco_(form, "signo_glasgow"));
  }

  grabarConsentimiento();
};

const grabarConsentimiento = async () => {
  const datos_format = JSON.parse(JSON.stringify(reg_lab013));

  let datos = {
    estado: reg_lab013.opcion_lab013 == "AUTORIZAR" ? "1" : "2",
    llave_fact: `${getSesion.suc}${getSesion.clase}${getSesion.nro_comp}`,
    disentimiento: "N",
    llave_consen: `${getPaci.cod}00000000`,
    oper_consen: getSesion.oper,
    cod_consen: "LAB013",
    cod_med: getProf.cod,
    id_acomp: getAcomp.cod.padStart(15, "0"),
    id_testigo: getTestigo.cod.padStart(15, "0"),
    paren_acomp: getSesion.paren_acomp,
    ...datos_format,
  };
  console.log("datos ", datos);

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
    await guardarFile$({ base64: firma_recibida_acomp.value, codigo: `A${llave}` });
    await guardarFile$({ base64: firma_recibida_test.value, codigo: `T${llave}` });
    await guardarFile$({ base64: firma_recibida.value, codigo: `P${llave}` });
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
  E;
};

const imprimirConsen = async () => {
  try {
    const datos_lab013 = {
      autorizo: reg_lab013.opcion_lab013 == "AUTORIZAR" ? true : false,
      empresa: getEmpresa,
      paciente: getPaci,
      prof: getProf,
      acomp: getAcomp,
      testigo: getTestigo,
      cod_consen: "LAB013",
      firmas: {
        firma_paci: firma_recibida.value ? true : false,
        huella_paci: huella_paci.value ? true : false,
        firma_acomp: firma_recibida_acomp.value ? true : false,
        firma_prof: firma_prof.value ? true : false,
        firma_test: firma_recibida_test.value ? true : false,
      },
      paren_acomp: getSesion.paren_acomp,
      fecha: reg_lab013.fecha_act,
      llave: reg_lab013.llave,
      ...reg_lab013,
    };

    const firmas = {
      img_firma_consen: firma_recibida.value,
      img_firma_paci: firma_recibida.value,
      img_firma_acomp: firma_recibida_acomp.value,
      img_huella_paci: huella_paci.value,
      firma_prof: firma_prof.value,
      img_firma_testigo: firma_recibida_test.value,
    };

    const docDefinitionPrint = await utilsFormat({
      datos: firmas,
      content: impresionLAB013({
        datos: datos_lab013,
      }),
    });
    const docDefinitionFile = await utilsFormat({
      datos: firmas,
      content: impresionLAB013({
        datos: datos_lab013,
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
  data_firma && (firma_recibida_acomp.value = data_firma);
};

const callBackFirma = (data_firma) => {
  data_firma && (firma_recibida.value = data_firma);
};
const callBackFirmaProf = (data_firma) => {
  data_firma && (firma_prof.value = data_firma);
};
const callBackFirmaTest = (data_firma) => {
  data_firma && (firma_recibida_test.value = data_firma);
};
</script>
<style scoped>
p {
  margin-top: 10px;
  margin-left: 3px;
  margin-right: 3px;
}
.custom-q-list .q-item {
  margin: 0;
}
.custom-header {
  background-color: var(--q-primary);
  color: white;
}
</style>
