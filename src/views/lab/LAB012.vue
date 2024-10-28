<template>
  <!-- <q-form @submit="validarDatos"> -->
  <div>
    <q-card class="q-mx-auto format q-mb-lg" style="overflow: auto">
      <q-card-section>
        <div class="text-center">
          <q-toggle
            v-model="reg_lab012.opcion_lab012"
            color="primary"
            keep-color
            false-value="REVOCAR"
            true-value="AUTORIZAR"
            unchecked-icon="block"
            checked-icon="check_circle"
            label="¿Autorizar o revocar este consentimiento?"
          />
          <p :class="reg_lab012.opcion_lab012 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
            <q-chip :color="reg_lab012.opcion_lab012 == 'AUTORIZAR' ? 'green' : 'red'" class="text-white" v-if="reg_lab012.opcion_lab012">
              {{ reg_lab012.opcion_lab012 }}
            </q-chip>
          </p>
        </div>

        <DatosFormat
          :datos="datos"
          @datos="(data) => (reg_lab012.servicio = data)"
          @ambito_ante="(data) => (reg_lab012.ambito_atenc = data)"
          @ident_genero="(data) => (reg_lab012.ident_genero = data)"
        />

        <div class="border-format q-my-sm">
          <div class="text-center text-subtitle1 text-bold q-py-xs q-mb-md q-mt-md">Antecedentes</div>

          <div class="q-my-sm">
            <div class="text-subtitle1 text-bold q-py-xs q-ml-md q-mb-md">Patológicos</div>
            <TextArea_ v-model="reg_lab012.antec_patolog" :field="form.antec_patolog" />
          </div>

          <div class="q-my-sm">
            <div class="text-subtitle1 text-bold q-py-xs q-ml-md q-mb-md">Alérgicos</div>
            <TextArea_ v-model="reg_lab012.antec_alergicos" :field="form.antec_alergicos" />
          </div>

          <div class="q-my-sm">
            <div class="text-subtitle1 text-bold q-py-xs q-ml-md q-mb-md">Quirúrgicos</div>
            <TextArea_ v-model="reg_lab012.antec_quirur" :field="form.antec_quirur" />
          </div>

          <div class="q-my-sm">
            <div class="text-subtitle1 text-bold q-py-xs q-ml-md q-mb-md">Farmacológicos</div>
            <TextArea_ v-model="reg_lab012.antec_farmaco" :field="form.antec_farmaco" />
          </div>
          <div class="q-my-sm">
            <div class="text-subtitle1 text-bold q-py-xs q-ml-md q-mb-md">Familiares</div>
            <TextArea_ v-model="reg_lab012.antec_familiar" :field="form.antec_familiar" />
          </div>
        </div>

        <div class="border-format q-my-sm">
          <div class="text-center text-subtitle1 text-bold q-py-xs q-mb-md">Examen físico</div>
          <div class="row">
            <div class="row">
              <p class="text-left">TA:</p>
              <Input_ v-model="reg_lab012.signo_ta_sistol" :field="form.signo_ta_sistol" :inputStyle="{ width: '60px' }" />
              <p class="text-left">/</p>
              <Input_ v-model="reg_lab012.signo_ta_diastol" :field="form.signo_ta_diastol" :inputStyle="{ width: '60px' }" />
              <p class="text-left" style="padding-right: 15px">mm Hg</p>
            </div>
            <div class="row">
              <p class="text-left q-ml-md">FC:</p>
              <Input_ v-model="reg_lab012.signo_frec_card" :field="form.signo_frec_card" :inputStyle="{ width: '60px' }" />
              <p class="text-left" style="padding-right: 15px">Ipm</p>
            </div>

            <div class="row">
              <p class="text-left q-ml-md">FR:</p>
              <Input_ v-model="reg_lab012.signo_frec_resp" :field="form.signo_frec_resp" :inputStyle="{ width: '60px' }" />
              <p class="text-left" style="padding-right: 15px">rpm</p>
            </div>
            <div class="row">
              <p class="text-left q-ml-md">SaO2:</p>
              <Input_ v-model="reg_lab012.signo_sa_o2_porc" :field="form.signo_sa_o2_porc" :inputStyle="{ width: '60px' }" />
              <p class="text-left" style="padding-right: 15px">%</p>
            </div>
            <div class="row">
              <p class="text-left q-ml-md">FiO2:</p>
              <Input_ v-model="reg_lab012.signo_fi_o2_porc" :field="form.signo_fi_o2_porc" :inputStyle="{ width: '60px' }" />
              <p class="text-left q-ml-md" style="padding-right: 15px">%</p>
            </div>

            <div class="row">
              <p class="text-left q-ml-md">Peso (Kg):</p>
              <Input_ v-model="reg_lab012.peso_kg" :field="form.peso_kg" :inputStyle="{ width: '60px' }" />
            </div>
            <div class="row">
              <p class="text-left text-bold">Talla (Cm):</p>
              <Input_ v-model="reg_lab012.talla_cm" :field="form.talla_cm" :inputStyle="{ width: '60px' }" />
            </div>

            <div class="row">
              <p class="text-left text-bold">Casificación ASA:</p>
              <div class="row">
                <q-radio color="primary" v-model="reg_lab012.clasif_asa" val="1" label="1" />
                <q-radio color="primary" v-model="reg_lab012.clasif_asa" val="2" label="2" />
                <q-radio color="primary" v-model="reg_lab012.clasif_asa" val="3" label="3" />
                <q-radio color="primary" v-model="reg_lab012.clasif_asa" val="4" label="4" />
                <q-radio color="primary" v-model="reg_lab012.clasif_asa" val="5" label="5" />
              </div>
            </div>
          </div>
          <div class="q-my-sm">
            <div class="text-subtitle1 text-bold q-py-xs q-ml-md q-mb-md">Observación de examen físico</div>
            <TextArea_ v-model="reg_lab012.observ_exam_fisic" :field="form.observ_exam_fisic" />
          </div>
        </div>

        <div class="border-format q-my-sm">
          <div class="text-center text-subtitle1 text-bold q-py-xs q-mb-md">Plan de manejo</div>
          <TextArea_ v-model="reg_lab012.plan_manejo" :field="form.plan_manejo" />
        </div>
        <div class="border-format q-my-sm">
          <div class="text-center text-subtitle1 text-bold q-py-xs q-mb-md">Educación</div>
          <TextArea_ v-model="reg_lab012.educacion" :field="form.educacion" />
        </div>

        <div class="row justify-center q-mt-lg" style="width: 100%">
          <div class="row justify-center bold" style="width: 35%">
            <p class="text-center text-bold q-py-xs q-mb-md">Elaborado por: Médico Especialista</p>
          </div>
          <div class="row justify-center bold" style="width: 30%">
            <p class="text-center text-bold q-py-xs q-mb-md">Revisado por: Asesor de Calidad</p>
          </div>
          <div class="row justify-center bold" style="width: 35%">
            <p class="text-center text-bold q-py-xs q-mb-md">Aprovado por: Representante Legal</p>
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
            quien_firma="MÉDICO ANESTESIOLOGO"
            @reciFirma="callBackFirmaProf"
            :firma_="firma_prof_tec_radi"
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
          :disable="reg_lab012.opcion_lab012 ? false : true"
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
import { regHc, regEmpresa, regTest, regSession, regPaci, regProf, regAcomp } from "@/fuentes";
import { useModuleFormatos, useApiContabilidad, useModuleCon851p, useModuleCon851 } from "@/store";
import { ref, reactive, defineAsyncComponent, onMounted, watch } from "vue";
import { impresionLAB012, impresion, generarArchivo } from "@/impresiones";
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
const firma_prof = ref(null);
const firma_recibida_test = ref("");
const huella_paci = ref(null);
const firma_prof_enfer = ref(null);
const firma_prof_tec_radi = ref(null);

const datos = {
  tipo_id: getPaci.tipo_id,
  active_cups: true,
  active_encab_ampl: true,
};

const reg_paci = ref(regPaci());
const reg_acomp = ref(regAcomp());

const otroEvento = ref("");
const reg_lab012 = reactive({
  revoca_procedi: "",
  fecha: dayjs().format("DD-MM-YYYY"),
  hora: dayjs().format("hh:mm A"),

  // ANTECEDENTES
  antec_patolog: "",
  antec_alergicos: "",
  antec_quirur: "",
  antec_farmaco: "",
  antec_familiar: "",

  // EXAMEN FISICO
  signo_ta_sistol: "",
  signo_ta_diastol: "",
  signo_frec_card: "",
  signo_frec_resp: "",
  signo_sa_o2_porc: "",
  signo_fi_o2_porc: "",
  peso_kg: "",
  talla_cm: "",
  clasif_asa: "",
  observ_exam_fisic: "",

  plan_manejo: "",
  educacion: "",

  // EXTRAS
  parentesco: "",
  opcion_lab012: "",
  fecha_act: "",
  llave: "",
  servicio: "",
  ident_genero: "",
  ambito_atenc: "",
  edad: "",
  discapacidad: "",

  ambito_antenc: "",
  nomb_entid_resp: "",
  descrip_tipo_id: "",
});

const form = ref({
  antec_patolog: {
    id: "antec_patolog",
    maxlength: "500",
    label: "",
    rows: 4,
    campo_abierto: true,
  },
  antec_alergicos: {
    id: "antec_alergicos",
    maxlength: "500",
    label: "",
    rows: 4,
    campo_abierto: true,
  },
  antec_quirur: {
    id: "antec_quirur",
    maxlength: "500",
    label: "",
    rows: 4,
    campo_abierto: true,
  },
  antec_farmaco: {
    id: "antec_farmaco",
    maxlength: "500",
    label: "",
    rows: 4,
    campo_abierto: true,
  },
  antec_familiar: {
    id: "antec_familiar",
    maxlength: "500",
    label: "",
    rows: 4,
    campo_abierto: true,
  },
  signo_ta_diastol: {
    id: "signo_ta_diastol",
    maxlength: "4",
    label: "",
    tipo: "number",
    campo_abierto: true,
  },
  signo_ta_sistol: {
    id: "signo_ta_sistol",
    maxlength: "4",
    label: "",
    tipo: "number",
    campo_abierto: true,
  },
  signo_frec_card: {
    id: "signo_frec_card",
    maxlength: "4",
    label: "",
    tipo: "number",
    campo_abierto: true,
  },
  signo_frec_resp: {
    id: "signo_frec_resp",
    maxlength: "4",
    label: "",
    tipo: "number",
    campo_abierto: true,
  },
  signo_sa_o2_porc: {
    id: "signo_sa_o2_porc",
    maxlength: "4",
    label: "",
    tipo: "number",
    campo_abierto: true,
  },
  signo_fi_o2_porc: {
    id: "signo_fi_o2_porc",
    maxlength: "4",
    label: "",
    tipo: "number",
    campo_abierto: true,
  },
  peso_kg: {
    id: "peso_kg",
    maxlength: "4",
    label: "",
    tipo: "number",
    campo_abierto: true,
  },
  talla_cm: {
    id: "talla_cm",
    maxlength: "4",
    label: "",
    tipo: "number",
    campo_abierto: true,
  },
  observ_exam_fisic: {
    id: "observ_exam_fisic",
    maxlength: "700",
    label: "",
    rows: 5,
    campo_abierto: true,
  },
  plan_manejo: {
    id: "plan_manejo",
    maxlength: "700",
    label: "",
    rows: 5,
    campo_abierto: true,
  },
  educacion: {
    id: "educacion",
    maxlength: "700",
    label: "",
    rows: 5,
    campo_abierto: true,
  },
});

onMounted(() => {
  datosInit();
  getFirmaProf();
});

const datosInit = () => {
  console.log("evaluarClaseServ ---> ", evaluarClaseServ(getSesion.clase));

  reg_lab012.fecha_act = dayjs(getEmpresa.FECHA_ACT).format("YYYY-MM-DD");
  reg_lab012.edad = calcularEdad(getAcomp.nacim);
  Object.assign(reg_paci.value, getPaci);
  Object.assign(reg_acomp.value, getAcomp);

  reg_lab012.parentesco = evaluarParentesco(getSesion.paren_acomp);
  reg_lab012.discapacidad = evaluarDiscapacidad(reg_paci.value.discap);
  reg_lab012.servicio = evaluarClaseServ(getSesion.clase);
  reg_lab012.descrip_tipo_id = evaluarTipoId(reg_paci.value.tipo_id);
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
  console.log("reg_lab012.value --->> ", reg_lab012);
  const requiere = "Complete el siguiente campo";

  //   if (!firma_recibida.value) {
  //     return CON851("?", "info", "No se ha realizado la firma del paciente");
  //   }
  //   if (getAcomp.cod && !firma_recibida_acomp.value) {
  //     return CON851("?", "info", "No se ha realizado la firma del acompañate");
  //   }
  if (reg_lab012.opcion_lab012 == "AUTORIZAR") {
    // if (!reg_lab012.peso_kg) return CON851("?", "info", `${requiere},  Peso (Kg)`, () => foco_(form, "peso_kg"));
    // if (!reg_lab012.talla_cm) return CON851("?", "info", `${requiere},  Talla (Cm)`, () => foco_(form, "talla_cm"));
    // if (!reg_lab012.signo_ta_sistol) return CON851("?", "info", `${requiere}, Signo TA`, () => foco_(form, "signo_ta_sistol"));
    // if (!reg_lab012.signo_ta_diastol) return CON851("?", "info", `${requiere}, Signo TA mm Hg`, () => foco_(form, "signo_ta_diastol"));
    // if (!reg_lab012.signo_frec_card) return CON851("?", "info", `${requiere}, Signo FC`, () => foco_(form, "signo_frec_card"));
    // if (!reg_lab012.signo_frec_resp) return CON851("?", "info", `${requiere}, Signo FR`, () => foco_(form, "signo_frec_resp"));
    // if (!reg_lab012.signo_sa_o2_porc) return CON851("?", "info", `${requiere}, Signo SaO2`, () => foco_(form, "signo_sa_o2_porc"));
    // if (!reg_lab012.signo_fi_o2_porc) return CON851("?", "info", `${requiere}, Signo FiO2`, () => foco_(form, "signo_fi_o2_porc"));
    // if (!reg_lab012.signo_glasgow) return CON851("?", "info", `${requiere}, Signo Glasgow`, () => foco_(form, "signo_glasgow"));
  }
  console.log(" servicio ", reg_lab012.servicio);
  console.log(" ident_genero  ----> ", reg_lab012.ident_genero);
  console.log(" ambito_atenc  ----> ", reg_lab012.ambito_atenc);

  grabarConsentimiento();
};

const grabarConsentimiento = async () => {
  const datos_format = JSON.parse(JSON.stringify(reg_lab012));

  let datos = {
    estado: reg_lab012.opcion_lab012 == "AUTORIZAR" ? "1" : "2",
    llave_fact: `${getSesion.suc}${getSesion.clase}${getSesion.nro_comp}`,
    disentimiento: "N",
    llave_consen: `${getPaci.cod}00000000`,
    oper_consen: getSesion.oper,
    cod_consen: "LAB012",
    cod_med: getProf.cod,
    id_acomp: getAcomp.cod.padStart(15, "0"),
    id_testigo: getTestigo.cod.padStart(15, "0"),
    paren_acomp: getSesion.paren_acomp,
    ...datos_format,
  };
  console.log("datos ", datos);

  for (let i in datos) {
    if (typeof datos[i] == "object") delete datos[i];
  }

  console.log("datos a grabar --> ", datos);

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
    const datos_lab012 = {
      autorizo: reg_lab012.opcion_lab012 == "AUTORIZAR" ? true : false,
      empresa: getEmpresa,
      testigo: getTestigo,
      paciente: getPaci,
      prof: getProf,
      acomp: getAcomp,
      cod_consen: "LAB012",
      firmas: {
        firma_paci: firma_recibida.value ? true : false,
        huella_paci: huella_paci.value ? true : false,
        firma_acomp: firma_recibida_acomp.value ? true : false,
        firma_prof: firma_prof.value ? true : false,
        firma_test: firma_recibida_test.value ? true : false,
      },
      paren_acomp: getSesion.paren_acomp,
      fecha: reg_lab012.fecha_act,
      llave: reg_lab012.llave,
      ...reg_lab012,
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
      content: impresionLAB012({
        datos: datos_lab012,
      }),
    });
    const docDefinitionFile = await utilsFormat({
      datos: firmas,
      content: impresionLAB012({
        datos: datos_lab012,
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
