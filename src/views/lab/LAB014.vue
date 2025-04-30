<template>
  <!-- <q-form @submit="validarDatos"> -->
  <div>
    <q-card class="q-mx-auto format q-mb-lg" style="overflow: auto">
      <q-card-section>
        <div class="text-center">
          <q-toggle
            v-model="reg_lab014.opcion_lab014"
            color="primary"
            keep-color
            false-value="REVOCAR"
            true-value="AUTORIZAR"
            unchecked-icon="block"
            checked-icon="check_circle"
            label="¿Autorizar o revocar este consentimiento?"
          />
          <p :class="reg_lab014.opcion_lab014 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
            <q-chip :color="reg_lab014.opcion_lab014 == 'AUTORIZAR' ? 'green' : 'red'" class="text-white" v-if="reg_lab014.opcion_lab014">
              {{ reg_lab014.opcion_lab014 }}
            </q-chip>
          </p>
        </div>

        <DatosFormat
          :datos="datos"
          @datos="(data) => (reg_lab014.servicio = data)"
          @ambito_ante="(data) => (reg_lab014.ambito_atenc = data)"
          @ident_genero="(data) => (reg_lab014.ident_genero = data)"
        />
        <div class="border-format q-my-sm">
          <div class="text-center text-subtitle1 text-bold q-py-xs q-mb-md">ANTECEDENTES GINECOLÓGICOS</div>

          <div class="row">
            <div class="row">
              <p class="text-left text-bold">Fecha ultima menstruación:</p>
              <Input_ v-model="reg_lab014.fecha_ult_mestr" :field="form.fecha_ult_mestr" style="margin-top: 3px" />
            </div>
            <div class="row">
              <p class="text-left text-bold">Fecha menarquia (1° menstruación):</p>
              <Input_ v-model="reg_lab014.fecha_menarq" :field="form.fecha_menarq" style="margin-top: 3px" />
            </div>

            <div class="row">
              <div class="row">
                <p class="text-left text-bold">Histerectomia:</p>
                <q-radio color="primary" v-model="reg_lab014.histerect" val="S" label="SI" />
                <q-radio color="primary" v-model="reg_lab014.histerect" val="N" label="NO" />
              </div>
              <div class="row">
                <p class="text-left text-bold" style="padding-left: 8px">Fecha histerectomia:</p>
                <Input_ v-model="reg_lab014.fecha_histerect" :field="form.fecha_histerect" style="margin-top: 3px" />
              </div>
              <div class="row">
                <p class="text-left text-bold">Gestaciones:</p>
                <Input_ v-model="reg_lab014.cant_gestaci" :field="form.cant_gestaci" style="margin-top: 3px" :inputStyle="{ width: '40px' }" />
              </div>
              <div class="row">
                <p class="text-left text-bold">Partos:</p>
                <Input_ v-model="reg_lab014.cant_partos" :field="form.cant_partos" style="margin-top: 3px" :inputStyle="{ width: '40px' }" />
              </div>
              <div class="row">
                <p class="text-left text-bold">Cesáreas:</p>
                <Input_ v-model="reg_lab014.cant_cesareas" :field="form.cant_cesareas" style="margin-top: 3px" :inputStyle="{ width: '40px' }" />
              </div>

              <p class="text-left text-bold">Abortos:</p>
              <Input_ v-model="reg_lab014.cant_abortos" :field="form.cant_abortos" style="margin-top: 3px" :inputStyle="{ width: '40px' }" />
              <p class="text-left text-bold">Vivos:</p>
              <Input_ v-model="reg_lab014.cant_vivos" :field="form.cant_vivos" style="margin-top: 3px" :inputStyle="{ width: '40px' }" />
              <p class="text-left text-bold">Muertos:</p>
              <Input_ v-model="reg_lab014.cant_muertos" :field="form.cant_muertos" style="margin-top: 3px" :inputStyle="{ width: '40px' }" />
            </div>
          </div>
        </div>
        <div class="row q-mt-md q-mb-md" style="width: 100%">
          <div class="text-center" style="border: 1px solid #ccc; width: 100%">
            <p style="font-weight: bold; margin-top: 10px">ANTECEDENTES DE CÁNCER</p>
          </div>
          <div class="text-justify" style="border: 1px solid #ccc; width: 40%">
            <p class="q-ml-sm q-mt-sm q-mr-sm">¿Sufre o ha sufrido de cáncer de mama o útero? Especifique</p>
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 20%">
            <q-radio color="primary" v-model="reg_lab014.pre_1_ant_canc" val="S" label="SI" />
            <q-radio color="primary" v-model="reg_lab014.pre_1_ant_canc" val="N" label="NO" />
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 40%">
            <div class="q-mt-lg">
              <Input_ v-show="reg_lab014.pre_1_ant_canc != 'N'" v-model="reg_lab014.espec_pre_1_ant_canc" :field="form.espec_pre_1_ant_canc" />
            </div>
          </div>

          <div class="text-justify" style="border: 1px solid #ccc; width: 40%">
            <p class="q-ml-sm q-mt-sm q-mr-sm">¿Sufre o ha sufrido de algún otro tipo de cáncer? Especifique</p>
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 20%">
            <q-radio color="primary" v-model="reg_lab014.pre_2_ant_canc" val="S" label="SI" />
            <q-radio color="primary" v-model="reg_lab014.pre_2_ant_canc" val="N" label="NO" />
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 40%">
            <div class="q-mt-lg">
              <Input_ v-show="reg_lab014.pre_2_ant_canc != 'N'" v-model="reg_lab014.espec_pre_2_ant_canc" :field="form.espec_pre_2_ant_canc" />
            </div>
          </div>

          <div class="text-justify" style="border: 1px solid #ccc; width: 40%">
            <p class="q-ml-sm q-mt-sm q-mr-sm">¿Algún miembro de su familia materna ha sufrido cáncer mama o útero? Especifique</p>
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 20%">
            <q-radio color="primary" v-model="reg_lab014.pre_3_ant_canc" val="S" label="SI" />
            <q-radio color="primary" v-model="reg_lab014.pre_3_ant_canc" val="N" label="NO" />
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 40%">
            <div class="q-mt-lg">
              <Input_ v-show="reg_lab014.pre_3_ant_canc != 'N'" v-model="reg_lab014.espec_pre_3_ant_canc" :field="form.espec_pre_3_ant_canc" />
            </div>
          </div>

          <div class="text-justify" style="border: 1px solid #ccc; width: 40%">
            <p class="q-ml-sm q-mt-sm q-mr-sm">¿Algún miembro de su familia ha sufrido algún otro tipo cáncer? Especifique</p>
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 20%">
            <q-radio color="primary" v-model="reg_lab014.pre_4_ant_canc" val="S" label="SI" />
            <q-radio color="primary" v-model="reg_lab014.pre_4_ant_canc" val="N" label="NO" />
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 40%">
            <div class="q-mt-lg">
              <Input_ v-show="reg_lab014.pre_4_ant_canc != 'N'" v-model="reg_lab014.espec_pre_4_ant_canc" :field="form.espec_pre_4_ant_canc" />
            </div>
          </div>

          <div class="text-justify" style="border: 1px solid #ccc; width: 40%">
            <p class="q-ml-sm q-mt-sm q-mr-sm">¿Sufre de alguna enfermedad? Especifique</p>
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 20%">
            <q-radio color="primary" v-model="reg_lab014.pre_5_ant_canc" val="S" label="SI" />
            <q-radio color="primary" v-model="reg_lab014.pre_5_ant_canc" val="N" label="NO" />
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 40%">
            <div class="q-mt-lg">
              <Input_ v-show="reg_lab014.pre_5_ant_canc != 'N'" v-model="reg_lab014.espec_pre_5_ant_canc" :field="form.espec_pre_5_ant_canc" />
            </div>
          </div>

          <div class="text-justify" style="border: 1px solid #ccc; width: 40%">
            <p class="q-ml-sm q-mt-sm q-mr-sm">¿Actualmente toma algún medicamento? Especifique</p>
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 20%">
            <q-radio color="primary" v-model="reg_lab014.pre_6_ant_canc" val="S" label="SI" />
            <q-radio color="primary" v-model="reg_lab014.pre_6_ant_canc" val="N" label="NO" />
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 40%">
            <div class="q-mt-lg">
              <Input_ v-show="reg_lab014.pre_6_ant_canc != 'N'" v-model="reg_lab014.espec_pre_6_ant_canc" :field="form.espec_pre_6_ant_canc" />
            </div>
          </div>
        </div>
        <!--  -->
        <div class="row q-mt-md q-mb-md" style="width: 100%">
          <div class="text-center" style="border: 1px solid #ccc; width: 100%">
            <p style="font-weight: bold; margin-top: 10px">AUTO EXAMEN DE MAMA</p>
          </div>
          <div class="text-justify" style="border: 1px solid #ccc; width: 40%">
            <p class="q-ml-sm q-mt-sm q-mr-sm">¿Le han realizado alguna cirugía en los senos? Especifique</p>
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 20%">
            <q-radio color="primary" v-model="reg_lab014.pre_1_aut_exam" val="S" label="SI" />
            <q-radio color="primary" v-model="reg_lab014.pre_1_aut_exam" val="N" label="NO" />
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 40%">
            <div class="q-mt-lg">
              <Input_ v-show="reg_lab014.pre_1_aut_exam != 'N'" v-model="reg_lab014.espec_pre_1_aut_exam" :field="form.espec_pre_1_aut_exam" />
            </div>
          </div>

          <div class="text-justify" style="border: 1px solid #ccc; width: 40%">
            <p class="q-ml-sm q-mt-sm q-mr-sm">¿Se ha palpado masas en los senos? Especifique</p>
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 20%">
            <q-radio color="primary" v-model="reg_lab014.pre_2_aut_exam" val="S" label="SI" />
            <q-radio color="primary" v-model="reg_lab014.pre_2_aut_exam" val="N" label="NO" />
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 40%">
            <div class="q-mt-lg">
              <Input_ v-show="reg_lab014.pre_2_aut_exam != 'N'" v-model="reg_lab014.espec_pre_2_aut_exam" :field="form.espec_pre_2_aut_exam" />
            </div>
          </div>

          <div class="text-justify" style="border: 1px solid #ccc; width: 40%">
            <p class="q-ml-sm q-mt-sm q-mr-sm">¿Ha tenido salida de secreción por el pezón? Especifique</p>
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 20%">
            <q-radio color="primary" v-model="reg_lab014.pre_3_aut_exam" val="S" label="SI" />
            <q-radio color="primary" v-model="reg_lab014.pre_3_aut_exam" val="N" label="NO" />
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 40%">
            <div class="q-mt-lg">
              <Input_ v-show="reg_lab014.pre_3_aut_exam != 'N'" v-model="reg_lab014.espec_pre_3_aut_exam" :field="form.espec_pre_3_aut_exam" />
            </div>
          </div>

          <div class="text-justify" style="border: 1px solid #ccc; width: 40%">
            <p class="q-ml-sm q-mt-sm q-mr-sm">¿Ha notado cambios en la piel de los senos? Especifique</p>
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 20%">
            <q-radio color="primary" v-model="reg_lab014.pre_4_aut_exam" val="S" label="SI" />
            <q-radio color="primary" v-model="reg_lab014.pre_4_aut_exam" val="N" label="NO" />
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 40%">
            <div class="q-mt-lg">
              <Input_ v-show="reg_lab014.pre_4_aut_exam != 'N'" v-model="reg_lab014.espec_pre_4_aut_exam" :field="form.espec_pre_4_aut_exam" />
            </div>
          </div>

          <div class="text-justify" style="border: 1px solid #ccc; width: 40%">
            <p class="q-ml-sm q-mt-sm q-mr-sm">¿Ha identificado algo más con respecto a sus senos? Especifique</p>
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 20%">
            <q-radio color="primary" v-model="reg_lab014.pre_5_aut_exam" val="S" label="SI" />
            <q-radio color="primary" v-model="reg_lab014.pre_5_aut_exam" val="N" label="NO" />
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 40%">
            <div class="q-mt-lg">
              <Input_ v-show="reg_lab014.pre_5_aut_exam != 'N'" v-model="reg_lab014.espec_pre_5_aut_exam" :field="form.espec_pre_5_aut_exam" />
            </div>
          </div>
        </div>

        <div class="row q-mt-md" style="width: 100%">
          <div class="text-center" style="border: 1px solid #ccc; width: 100%">
            <p style="font-weight: bold; margin-top: 10px">REGISTRO DE INSPECCIÓN</p>
          </div>
        </div>

        <div class="row q-mb-md" style="width: 100%">
          <div class="q-mt-md q-mb-lg" style="width: 100%; display: flex; justify-content: center; align-items: center">
            <q-card class="custom-card-size">
              <q-card-section class="row items-center q-pb-none">
                <div class="signature-container">
                  <img src="@/assets/image/mamografia.png" alt="Imagen de fondo" class="background-image" />
                  <VueSignaturePad
                    ref="signaturePad"
                    class="signature-pad"
                    :options="{
                      ...opciones_imagen,
                      onBegin: () => {
                        signaturePad.resizeCanvas();
                      },
                    }"
                  />
                </div>
              </q-card-section>
              <q-separator />
              <q-card-actions align="around">
                <q-btn class="q-mt-xs" push color="deep-orange" icon="delete_forever" @click="clear">Borrar trazos</q-btn>
                <q-btn class="q-mt-xs" push color="primary" icon="undo" @click="undo">Deshacer último trazo</q-btn>
              </q-card-actions>
            </q-card>
          </div>
        </div>

        <div class="row q-mt-xl q-mb-md" style="width: 100%">
          <div class="text-center" style="border: 1px solid #ccc; width: 100%">
            <p style="font-weight: bold; margin-top: 10px">OBSERVACIÓN</p>
            <TextArea_ v-model="reg_lab014.obser_regis_inspec" :field="form.obser_regis_inspec" />
          </div>
        </div>

        <div class="row justify-center q-mt-lg" style="width: 100%">
          <div class="row justify-center bold" style="width: 33%">
            <p class="text-center text-bold q-py-xs q-mb-md">Elaborado por: Médico Especialista</p>
          </div>
          <div class="row justify-center bold" style="width: 32%">
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
          <ContainerFirma
            quien_firma="FIRMA TESTIGO"
            @reciFirma="callBackFirmaTest"
            :firmador="getTestigo.descrip"
            :codigo_firma="getTestigo.cod"
            :descrip_prof="getTestigo.descrip_atiende"
            :registro_profe="getTestigo.registro_profe"
            class="col-4"
          />
          <ContainerFirma
            quien_firma="TECNÓLOGO DE RADIOLOGÍA"
            @reciFirma="callBackFirmaProf"
            :firma_="firma_prof_tec_radi"
            :firmador="getProf.descrip"
            :codigo_firma="getProf.cod"
            :descrip_prof="getProf.descrip_atiende"
            :registro_profe="getProf.registro_profe"
            class="col-4"
          />
        </div>
      </q-card-section>

      <div class="row justify-center q-my-lg">
        <q-btn
          :disable="reg_lab014.opcion_lab014 ? false : true"
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
import { ref, reactive, defineAsyncComponent, onMounted, computed } from "vue";
import { impresionLAB014, impresion, generarArchivo } from "@/impresiones";
import { utilsFormat, calcularEdad, evaluarParentesco, evaluarClaseServ } from "@/formatos/utils";
import { useRouter } from "vue-router";
import dayjs from "dayjs";
import backgroundImage from "@/assets/image/mamografia.png";

const ContainerFirma = defineAsyncComponent(() => import("../../components/global/ContainerFirma.vue"));
const DatosFormat = defineAsyncComponent(() => import("@/components/global/DatosFormat.vue"));

const { getDll$, _getFirma$, guardarFile$, guardarEsquema$, _getHuella$, enviarCorreo$, getEncabezado } = useApiContabilidad();
const { getPaci, getAcomp, getProf, getEmpresa, getSesion, getTestigo } = useModuleFormatos();
const { CON851P } = useModuleCon851p();
const { CON851 } = useModuleCon851();
const router = useRouter();

const firma_recibida_acomp = ref("");
const esquema_mamografia = ref("");
const firma_recibida = ref("");
const firma_prof = ref(null);
const firma_recibida_test = ref(null);
const huella_paci = ref(null);
const firma_prof_tec_radi = ref(null);
const signaturePad = ref(null);
const opciones_imagen = ref({
  dotSize: (1 + 1.5) / 2,
  minWidth: 1.5,
  maxWidth: 3,
  throttle: 16,
  minDistance: 5,
  backgroundColor: "rgba(0,0,0,0)",
  penColor: "black",
  velocityFilterWeight: 0.7,
});
const datos = {
  tipo_id: getPaci.tipo_id,
  active_cups: true,
  active_encab_ampl: true,
};

const reg_paci = ref(regPaci());
const reg_acomp = ref(regAcomp());

const reg_lab014 = reactive({
  revoca_procedi: "",
  fecha: dayjs().format("DD-MM-YYYY"),
  hora: dayjs().format("hh:mm A"),

  fecha_ult_mestr: "",
  fecha_menarq: "",
  histerect: "N",
  fecha_histerect: "",
  cant_gestaci: "",
  cant_partos: "",
  cant_cesareas: "",
  cant_abortos: "",
  cant_vivos: "",
  cant_muertos: "",
  pre_1_ant_canc: "N",
  espec_pre_1_ant_canc: "",
  pre_2_ant_canc: "N",
  espec_pre_2_ant_canc: "",
  pre_3_ant_canc: "N",
  espec_pre_3_ant_canc: "",
  pre_4_ant_canc: "N",
  espec_pre_4_ant_canc: "",
  pre_5_ant_canc: "N",
  espec_pre_5_ant_canc: "",
  pre_6_ant_canc: "N",
  espec_pre_6_ant_canc: "",
  pre_1_aut_exam: "N",
  espec_pre_1_aut_exam: "",
  pre_2_aut_exam: "N",
  espec_pre_2_aut_exam: "",
  pre_3_aut_exam: "N",
  espec_pre_3_aut_exam: "",
  pre_4_aut_exam: "N",
  espec_pre_4_aut_exam: "",
  pre_5_aut_exam: "N",
  espec_pre_5_aut_exam: "",
  cod_img_regis_inspec: "",
  obser_regis_inspec: "",
  ambito_atenc: "",
  ident_genero: "",

  // EXTRAS
  parentesco: "",
  opcion_lab014: "",
  fecha_act: "",
  llave: "",
  servicio: "",
  edad: "",
});

const form = ref({
  fecha_ult_mestr: {
    id: "fecha_ult_mestr",
    maxlength: "10",
    label: "",
    tipo: "date",
    campo_abierto: true,
  },
  fecha_menarq: {
    id: "fecha_menarq",
    maxlength: "10",
    label: "",
    tipo: "date",
    campo_abierto: true,
  },
  fecha_histerect: {
    id: "fecha_histerect",
    maxlength: "10",
    label: "",
    tipo: "date",
    disable: computed(() => reg_lab014.histerect !== "S"),
    campo_abierto: true,
  },
  cant_gestaci: {
    id: "cant_gestaci",
    maxlength: "2",
    label: "",
    tipo: "number",
    campo_abierto: true,
  },
  cant_partos: {
    id: "cant_partos",
    maxlength: "2",
    label: "",
    tipo: "number",
    campo_abierto: true,
  },
  cant_cesareas: {
    id: "cant_cesareas",
    maxlength: "2",
    label: "",
    tipo: "number",
    campo_abierto: true,
  },
  cant_abortos: {
    id: "cant_abortos",
    maxlength: "2",
    label: "",
    tipo: "number",
    campo_abierto: true,
  },
  cant_vivos: {
    id: "cant_vivos",
    maxlength: "2",
    label: "",
    tipo: "number",
    campo_abierto: true,
  },
  cant_muertos: {
    id: "cant_muertos",
    maxlength: "2",
    label: "",
    tipo: "number",
    campo_abierto: true,
  },
  espec_pre_1_ant_canc: {
    id: "espec_pre_1_ant_canc",
    maxlength: "150",
    label: "",
    required: true,
    campo_abierto: true,
  },
  espec_pre_2_ant_canc: {
    id: "espec_pre_2_ant_canc",
    maxlength: "150",
    label: "",
    required: true,
    campo_abierto: true,
  },
  espec_pre_3_ant_canc: {
    id: "espec_pre_3_ant_canc",
    maxlength: "150",
    label: "",
    required: true,
    campo_abierto: true,
  },
  espec_pre_4_ant_canc: {
    id: "espec_pre_4_ant_canc",
    maxlength: "150",
    label: "",
    required: true,
    campo_abierto: true,
  },
  espec_pre_5_ant_canc: {
    id: "espec_pre_5_ant_canc",
    maxlength: "150",
    label: "",
    required: true,
    campo_abierto: true,
  },
  espec_pre_6_ant_canc: {
    id: "espec_pre_6_ant_canc",
    maxlength: "150",
    label: "",
    required: true,
    campo_abierto: true,
  },

  espec_pre_1_aut_exam: {
    id: "espec_pre_1_aut_exam",
    maxlength: "150",
    label: "",
    required: true,
    campo_abierto: true,
  },
  espec_pre_2_aut_exam: {
    id: "espec_pre_2_aut_exam",
    maxlength: "150",
    label: "",
    required: true,
    campo_abierto: true,
  },
  espec_pre_3_aut_exam: {
    id: "espec_pre_3_aut_exam",
    maxlength: "150",
    label: "",
    required: true,
    campo_abierto: true,
  },
  espec_pre_4_aut_exam: {
    id: "espec_pre_4_aut_exam",
    maxlength: "150",
    label: "",
    required: true,
    campo_abierto: true,
  },
  espec_pre_5_aut_exam: {
    id: "espec_pre_5_aut_exam",
    maxlength: "150",
    label: "",
    required: true,
    campo_abierto: true,
  },
  obser_regis_inspec: {
    id: "obser_regis_inspec",
    maxlength: "400",
    label: "",
    rows: 6,
    required: true,
    campo_abierto: true,
  },
});
onMounted(() => {
  datosInit();
  getFirmaProf();
});

const datosInit = () => {
  reg_lab014.fecha_act = dayjs(getEmpresa.FECHA_ACT).format("YYYY-MM-DD");
  reg_lab014.edad = calcularEdad(getAcomp.nacim);
  Object.assign(reg_paci.value, getPaci);
  Object.assign(reg_acomp.value, getAcomp);

  reg_lab014.parentesco = evaluarParentesco(getSesion.paren_acomp);
  reg_lab014.servicio = evaluarClaseServ(getSesion.clase);
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
  // const requiere = "Complete el siguiente campo";

  //   if (!firma_recibida.value) {
  //     return CON851("?", "info", "No se ha realizado la firma del paciente");
  //   }
  //   if (getAcomp.cod && !firma_recibida_acomp.value) {
  //     return CON851("?", "info", "No se ha realizado la firma del acompañate");
  //   }
  if (reg_lab014.opcion_lab014 == "AUTORIZAR") {
    // if (!reg_lab014.peso_kg) return CON851("?", "info", `${requiere},  Peso (Kg)`, () => foco_(form, "peso_kg"));
    // if (!reg_lab014.talla_cm) return CON851("?", "info", `${requiere},  Talla (Cm)`, () => foco_(form, "talla_cm"));
    // if (!reg_lab014.creatinina) return CON851("?", "info", `${requiere},  Creatinina (mg/dl)`, () => foco_(form, "creatinina"));
    // if (!reg_lab014.signo_ta_sistol) return CON851("?", "info", `${requiere}, Signo TA`, () => foco_(form, "signo_ta_sistol"));
    // if (!reg_lab014.signo_ta_diastol) return CON851("?", "info", `${requiere}, Signo TA mm Hg`, () => foco_(form, "signo_ta_diastol"));
    // if (!reg_lab014.signo_frec_card) return CON851("?", "info", `${requiere}, Signo FC`, () => foco_(form, "signo_frec_card"));
    // if (!reg_lab014.signo_frec_resp) return CON851("?", "info", `${requiere}, Signo FR`, () => foco_(form, "signo_frec_resp"));
    // if (!reg_lab014.signo_sa_o2_porc) return CON851("?", "info", `${requiere}, Signo SaO2`, () => foco_(form, "signo_sa_o2_porc"));
    // if (!reg_lab014.signo_fi_o2_porc) return CON851("?", "info", `${requiere}, Signo FiO2`, () => foco_(form, "signo_fi_o2_porc"));
    // if (!reg_lab014.signo_glasgow) return CON851("?", "info", `${requiere}, Signo Glasgow`, () => foco_(form, "signo_glasgow"));
  }

  grabarConsentimiento();
};

const grabarConsentimiento = async () => {
  const datos_format = JSON.parse(JSON.stringify(reg_lab014));

  let datos = {
    estado: reg_lab014.opcion_lab014 == "AUTORIZAR" ? "1" : "2",
    llave_fact: `${getSesion.suc}${getSesion.clase}${getSesion.nro_comp}`,
    disentimiento: "N",
    llave_consen: `${getPaci.cod}00000000`,
    oper_consen: getSesion.oper,
    cod_consen: "LAB014",
    cod_med: getProf.cod,
    id_acomp: getAcomp.cod.padStart(15, "0"),
    id_testigo: getTestigo.cod.padStart(15, "0"),
    paren_acomp: getSesion.paren_acomp,
    ...datos_format,
  };

  await getDll$({ modulo: `save_consen.dll`, data: { ...datos } })
    .then(async (data) => {
      if (data?.llave_consen) {
        await save();
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
    await guardarEsquema$({
      base64: esquema_mamografia.value,
      codigo: `${llave}`,
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
    const datos_lab14 = {
      autorizo: reg_lab014.opcion_lab014 == "AUTORIZAR" ? true : false,
      empresa: getEmpresa,
      paciente: getPaci,
      prof: getProf,
      acomp: getAcomp,
      testigo: getTestigo,
      cod_consen: "LAB014",
      firmas: {
        firma_paci: firma_recibida.value ? true : false,
        huella_paci: huella_paci.value ? true : false,
        firma_acomp: firma_recibida_acomp.value ? true : false,
        firma_prof: firma_prof.value ? true : false,
        firma_test: firma_recibida_test.value ? true : false,
      },
      paren_acomp: getSesion.paren_acomp,
      fecha: reg_lab014.fecha_act,
      llave: reg_lab014.llave,
      ...reg_lab014,
    };

    const firmas = {
      img_firma_consen: firma_recibida.value,
      img_firma_paci: firma_recibida.value,
      img_firma_acomp: firma_recibida_acomp.value,
      img_huella_paci: huella_paci.value,
      firma_prof: firma_prof.value,
      img_firma_testigo: firma_recibida_test.value,
      img_esquema_mamografia: esquema_mamografia.value,
    };

    const docDefinitionPrint = await utilsFormat({
      datos: firmas,
      content: impresionLAB014({
        datos: datos_lab14,
      }),
    });
    const docDefinitionFile = await utilsFormat({
      datos: firmas,
      content: impresionLAB014({
        datos: datos_lab14,
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

const clear = () => {
  signaturePad.value.clearSignature();
};
const undo = () => {
  const signaturePadInstance = signaturePad.value.signaturePad;
  const data = signaturePadInstance.toData();
  if (data.length) {
    data.pop();
    signaturePadInstance.fromData(data);
  }
};
const save = async () => {
  const canvas = signaturePad.value.$el.querySelector("canvas");
  const ctx = canvas.getContext("2d");

  const img = new Image();
  img.src = backgroundImage;

  img.onload = () => {
    // Dibuja la imagen de fondo en el canvas
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    // Ahora dibuja la trazos
    const signatureDataUrl = signaturePad.value.saveSignature().data;

    const signatureImg = new Image();
    signatureImg.src = signatureDataUrl;
    // console.log(signatureDataUrl);

    signatureImg.onload = () => {
      // Dibuja la trazos encima de la imagen de fondo
      ctx.drawImage(signatureImg, 0, 0, canvas.width, canvas.height);

      // Generar el DataURL final con la imagen de fondo y la trazos
      esquema_mamografia.value = canvas.toDataURL("image/png");
    };
  };
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
.signature-container {
  position: relative;
  width: 100%;
  height: 300px;
  /* border: 1px solid #ccc; */
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.signature-pad {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
}

.custom-card-size {
  width: 570px;
  height: 320px;
}
</style>
