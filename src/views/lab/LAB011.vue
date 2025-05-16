<template>
  <div>
    <q-card class="q-mx-auto format q-mb-lg" style="overflow: auto">
      <q-card-section>
        <div class="text-center">
          <q-toggle
            :disable="getSesion.novedad === '4'"
            v-model="reg_lab011.opcion_hc035"
            color="primary"
            keep-color
            false-value="REVOCAR"
            true-value="AUTORIZAR"
            unchecked-icon="block"
            checked-icon="check_circle"
            label="¿Autorizar o revocar este consentimiento?"
          />
          <p :class="reg_lab011.opcion_hc035 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
            <q-chip :color="reg_lab011.opcion_hc035 == 'AUTORIZAR' ? 'green' : 'red'" class="text-white" v-if="reg_lab011.opcion_hc035">
              {{ reg_lab011.opcion_hc035 }}
            </q-chip>
          </p>
        </div>

        <DatosFormat
          :datos="datos"
          @datos="(data) => (reg_lab011.servicio = data)"
          @ambito_ante="(data) => (reg_lab011.ambito_atenc = data)"
          @ident_genero="(data) => (reg_lab011.ident_genero = data)"
        />
        <div class="border-format q-my-sm">
          <div class="text-center text-subtitle1 text-bold q-py-xs">Encuesta de seguridad</div>
          <div class="text-left text-subtitle1 text-bold q-py-xs q-mb-md">Medio de contraste previo</div>

          <div class="row">
            <p class="text-left">Último examen realizado:</p>
            <Input_ v-model="reg_lab011.ult_examen" :field="form.ult_examen" class="col-xs-9" />
          </div>

          <div class="row q-mt-md">
            <p class="text-left">Fecha último examen:</p>
            <Input_ v-model="reg_lab011.fecha_ult_exam" :field="form.fecha_ult_exam" />
          </div>

          <div class="row q-mt-md">
            <p class="text-left">Medio de contraste?:</p>
            <q-radio :disable="getSesion.novedad === '4'" color="primary" v-model="reg_lab011.medio_contras" val="S" label="SI" />
            <q-radio :disable="getSesion.novedad === '4'" color="primary" v-model="reg_lab011.medio_contras" val="N" label="NO" />
          </div>
          <div class="row q-mt-md">
            <p class="text-left">Nombre:</p>
            <Input_ v-model="reg_lab011.nomb_med_contr" :field="form.nomb_med_contr" class="col-xs-8" />
          </div>

          <div class="row q-mt-md">
            <p class="text-left">Dosis:</p>
            <Input_ v-model="reg_lab011.dosis_med_contr" :field="form.dosis_med_contr" class="col-xs-5" />
          </div>

          <p class="text-left text-bold">Complicaciones:</p>
          <div class="row">
            <div class="row">
              <q-checkbox
                :disable="getSesion.novedad === '4'"
                color="primary"
                keep-color
                left-label
                v-model="reg_lab011.rash_curaneo"
                true-value="S"
                false-value="N"
              />
              <p class="text-left">Rash curaneo</p>
            </div>
            <div class="row">
              <q-checkbox
                :disable="getSesion.novedad === '4'"
                color="primary"
                keep-color
                left-label
                v-model="reg_lab011.dificult_res"
                true-value="S"
                false-value="N"
              />
              <p class="text-left">Dificultad respiratoria</p>
            </div>
            <div class="row">
              <q-checkbox
                :disable="getSesion.novedad === '4'"
                color="primary"
                keep-color
                left-label
                v-model="reg_lab011.crisis_asma"
                true-value="S"
                false-value="N"
              />
              <p class="text-left">Crisis asmatica</p>
            </div>
            <div class="row">
              <q-checkbox
                :disable="getSesion.novedad === '4'"
                color="primary"
                keep-color
                left-label
                v-model="reg_lab011.emesis"
                true-value="S"
                false-value="N"
              />
              <p class="text-left">Emesis</p>
            </div>
            <div class="row">
              <q-checkbox
                :disable="getSesion.novedad === '4'"
                color="primary"
                keep-color
                left-label
                v-model="reg_lab011.shock_anafilac"
                true-value="S"
                false-value="N"
              />
              <p class="text-left">Shock anafilactico</p>
            </div>
          </div>
          <div class="row">
            <p class="text-left">Otro:</p>
            <Input_ v-model="reg_lab011.otro_complic" :field="form.otro_complic" class="col-xs-11" />
          </div>

          <div class="row">
            <p class="text-left text-bold">Posibilidad de embarazo?</p>
            <q-radio :disable="getSesion.novedad === '4'" color="primary" v-model="reg_lab011.posib_embarazo" val="N" label="No aplica" />
            <q-radio
              :disable="getSesion.novedad === '4'"
              color="primary"
              v-model="reg_lab011.posib_embarazo"
              val="S"
              label="Mujer en estado fértil"
            />
          </div>
          <div class="row">
            <p class="text-left">Fecha de ultima menstruación:</p>
            <Input_ v-model="reg_lab011.fecha_ult_mestr" :field="form.fecha_ult_mestr" />
          </div>
        </div>

        <div class="border-format q-my-sm">
          <div class="text-center text-subtitle1 text-bold q-py-xs q-mb-md">Antecedentes</div>
          <div class="text-letf text-subtitle1 text-bold q-py-xs q-mb-md">Patológicos</div>

          <div class="row">
            <div class="row">
              <q-checkbox
                :disable="getSesion.novedad === '4'"
                color="primary"
                keep-color
                left-label
                v-model="reg_lab011.asma_tratam"
                true-value="S"
                false-value="N"
              />
              <p class="text-left">Asma actual en tratamiento</p>
            </div>
            <div class="row">
              <q-checkbox
                :disable="getSesion.novedad === '4'"
                color="primary"
                keep-color
                left-label
                v-model="reg_lab011.insuf_renal"
                true-value="S"
                false-value="N"
              />
              <p class="text-left">Insuficiencia renal</p>
            </div>
            <div class="row">
              <q-checkbox
                :disable="getSesion.novedad === '4'"
                color="primary"
                keep-color
                left-label
                v-model="reg_lab011.diabet_mellitus"
                true-value="S"
                false-value="N"
              />
              <p class="text-left">Diabetes mellitus</p>
            </div>
            <div class="row">
              <q-checkbox
                :disable="getSesion.novedad === '4'"
                color="primary"
                keep-color
                left-label
                v-model="reg_lab011.hipert_arterial"
                true-value="S"
                false-value="N"
              />
              <p class="text-left">Hipertensión arterial</p>
            </div>
            <div class="row">
              <q-checkbox
                :disable="getSesion.novedad === '4'"
                color="primary"
                keep-color
                left-label
                v-model="reg_lab011.enfer_corazon"
                true-value="S"
                false-value="N"
              />
              <p class="text-left">Enfermedades del corazón</p>
            </div>
            <div class="row">
              <q-checkbox
                :disable="getSesion.novedad === '4'"
                color="primary"
                keep-color
                left-label
                v-model="reg_lab011.enfer_higado"
                true-value="S"
                false-value="N"
              />
              <p class="text-left">Enfermedades del higado</p>
            </div>
          </div>

          <div class="row">
            <p class="text-left">Otros:</p>
            <Input_ v-model="reg_lab011.otros_antec" :field="form.otros_antec" class="col-xs-11" />
          </div>

          <p class="text-left text-bold">Alérgicos:</p>
          <div class="row">
            <div class="row">
              <q-checkbox
                :disable="getSesion.novedad === '4'"
                color="primary"
                keep-color
                left-label
                v-model="reg_lab011.alerg_medicamet"
                true-value="S"
                false-value="N"
              />
              <p class="text-left">Medicamentos</p>
            </div>
            <div class="row">
              <q-checkbox
                :disable="getSesion.novedad === '4'"
                color="primary"
                keep-color
                left-label
                v-model="reg_lab011.alerg_aliment"
                true-value="S"
                false-value="N"
              />
              <p class="text-left">Alimentos</p>
            </div>
          </div>
          <div class="row">
            <p class="text-left">Otros:</p>
            <Input_ v-model="reg_lab011.otros_alerg" :field="form.otros_alerg" class="col-xs-11" />
          </div>
          <p class="text-left text-bold">Reacción alergica:</p>
          <div class="row">
            <q-checkbox
              :disable="getSesion.novedad === '4'"
              color="primary"
              keep-color
              left-label
              v-model="reg_lab011.alerg_rash_curan"
              true-value="S"
              false-value="N"
            />
            <p class="text-left">Rash curaneo</p>

            <q-checkbox
              :disable="getSesion.novedad === '4'"
              color="primary"
              keep-color
              left-label
              v-model="reg_lab011.alerg_dific_res"
              true-value="S"
              false-value="N"
            />
            <p class="text-left">Dificultad respiratoria</p>

            <q-checkbox
              :disable="getSesion.novedad === '4'"
              color="primary"
              keep-color
              left-label
              v-model="reg_lab011.alerg_shock_anafi"
              true-value="S"
              false-value="N"
            />
            <p class="text-left">Shock anafilactico</p>
          </div>
          <div class="row">
            <p class="text-left">Otros:</p>
            <Input_ v-model="reg_lab011.otros_reacc_alerg" :field="form.otros_reacc_alerg" class="col-xs-11" />
          </div>
          <div class="row">
            <p class="text-left text-bold">Quirúrgicos:</p>
            <TextArea_ v-model="reg_lab011.antec_quirur" :field="form.antec_quirur" class="col-12" />
          </div>
          <div class="row">
            <p class="text-left text-bold">Familiares:</p>
            <TextArea_ v-model="reg_lab011.antec_familiar" :field="form.antec_familiar" class="col-12" />
          </div>

          <div class="row">
            <p class="text-left text-bold">Farmacológicos:</p>
            <TextArea_ v-model="reg_lab011.antec_farmaco" :field="form.antec_farmaco" class="col-12 q-mb-md" />
          </div>
        </div>

        <div class="border-format q-my-sm">
          <div class="text-center text-subtitle1 text-bold q-py-xs q-mb-md">Datos clínicos relevantes</div>

          <div class="row">
            <div class="row">
              <p class="text-left text-bold">Peso (Kg):</p>
              <Input_ v-model="reg_lab011.peso_kg" :field="form.peso_kg" :inputStyle="{ width: '60px' }" />
            </div>
            <p class="text-left text-bold">Talla (Cm):</p>
            <Input_ v-model="reg_lab011.talla_cm" :field="form.talla_cm" :inputStyle="{ width: '60px' }" />

            <p class="text-left text-bold">Creatinina (mg/dl):</p>
            <Input_ v-model="reg_lab011.creatinina" :field="form.creatinina" :inputStyle="{ width: '60px' }" />
          </div>
          <div class="row q-mt-md">
            <p class="text-left text-bold">Otro:</p>
            <Input_ v-model="reg_lab011.otro_dtos_clinic" :field="form.otro_dtos_clinic" class="col-xs-11" />
          </div>
        </div>
        <div class="border-format q-my-sm">
          <div class="text-center text-subtitle1 text-bold q-py-xs q-mb-md">Signos vitales</div>
          <div class="row">
            <div class="row">
              <p class="text-left">TA</p>
              <Input_ v-model="reg_lab011.signo_ta_sistol" :field="form.signo_ta_sistol" :inputStyle="{ width: '60px' }" />
              <p class="text-left">/</p>
              <Input_ v-model="reg_lab011.signo_ta_diastol" :field="form.signo_ta_diastol" :inputStyle="{ width: '60px' }" />
              <p class="text-left" style="padding-right: 15px">mm Hg</p>
            </div>
            <div class="row">
              <p class="text-left q-ml-md">FC</p>
              <Input_ v-model="reg_lab011.signo_frec_card" :field="form.signo_frec_card" :inputStyle="{ width: '60px' }" />
              <p class="text-left" style="padding-right: 15px">Ipm</p>
            </div>
            <div class="row">
              <p class="text-left q-ml-md">FR</p>
              <Input_ v-model="reg_lab011.signo_frec_resp" :field="form.signo_frec_resp" :inputStyle="{ width: '60px' }" />
              <p class="text-left" style="padding-right: 15px">rpm</p>
            </div>
            <div class="row">
              <p class="text-left q-ml-md">SaO2</p>
              <Input_ v-model="reg_lab011.signo_sa_o2_porc" :field="form.signo_sa_o2_porc" :inputStyle="{ width: '60px' }" />
              <p class="text-left" style="padding-right: 15px">%</p>
            </div>
            <div class="row">
              <p class="text-left q-ml-md">FiO2</p>
              <Input_ v-model="reg_lab011.signo_fi_o2_porc" :field="form.signo_fi_o2_porc" :inputStyle="{ width: '60px' }" />
              <p class="text-left">%</p>
            </div>
            <div class="row">
              <p class="text-left">Glasgow</p>
              <Input_ v-model="reg_lab011.signo_glasgow" :field="form.signo_glasgow" :inputStyle="{ width: '60px' }" />
              <p class="text-left">/15</p>
            </div>
          </div>
        </div>
        <div class="border-format q-my-sm">
          <div class="text-center text-subtitle1 text-bold q-py-xs q-mb-md">Complicaciones o reacciones adversas</div>
          <TextArea_ v-model="reg_lab011.compl_reac_adver" :field="form.compl_reac_adver" />
        </div>

        <div class="border-format q-my-sm">
          <div class="text-center text-subtitle1 text-bold q-py-xs q-mb-md">Notas de atención</div>
          <q-card class="full-width q-mx-none">
            <div class="row q-pa-sm q-col">
              <StaticDataTable_
                :text_info="['[F3] Para grabar datos', '[F5] Salir sin grabar', '[F6] Borrar item']"
                class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"
                @deleteRow="datoTipoGrpTabla('f6', $event)"
                :item_index="reg_tabla_not_ant.indice_i"
                value_button="indice_i"
                :data="tabla_notas_atencion"
                min_height="240px"
                :headers="headers"
                show_label_inputs
              >
                <td>
                  <Input_ v-model="reg_tabla_not_ant.indice_i" :field="form_tabla_not_ant.indice_i" />
                </td>
                <td>
                  <Input_ v-model="reg_tabla_not_ant.fecha" :field="form_tabla_not_ant.fecha" />
                </td>
                <td>
                  <Input_ v-model="reg_tabla_not_ant.hora" :field="form_tabla_not_ant.hora" />
                </td>
                <td>
                  <Input_ v-model="reg_tabla_not_ant.notas_atencion" :field="form_tabla_not_ant.notas_atencion" />
                </td>
                <td>
                  <q-btn @click="agregarNotaAtenc" push color="primary" label="Añadir"></q-btn>
                </td>
              </StaticDataTable_>
            </div>
          </q-card>
        </div>

        <div class="row justify-center q-mt-lg" style="width: 100%">
          <div class="row justify-center bold" style="width: 30%">
            <p class="text-center text-bold q-py-xs q-mb-md">Elaborado por: Médico Especialista</p>
          </div>
          <div class="row justify-center bold" style="width: 35%">
            <p class="text-center text-bold q-py-xs q-mb-md">Revisado por: Asesor de Calidad</p>
          </div>
          <div class="row justify-center bold" style="width: 35%">
            <p class="text-center text-bold q-py-xs q-mb-md">Aprobado por: Representante Legal</p>
          </div>
        </div>

        <div class="col-12 row justify-around q-mt-lg">
          <!-- <div v-show="getSesion.novedad != '4'" class="col-12 row justify-around q-mt-lg"> -->
          <ContainerFirma
            :quien_firma="getAcomp.cod ? 'FIRMA ACOMPAÑANTE' : 'FIRMA PACIENTE'"
            :firmador="getAcomp.cod ? getAcomp.descrip : getPaci.descrip"
            :registro_profe="getAcomp.cod ? getAcomp.cod : getPaci.cod"
            @reciFirma="callBackFirma"
            :huella_="huella_paci"
            :firma_="firma_paci"
            :tipo_doc="getAcomp.cod ? getAcomp.tipo_id : getPaci.tipo_id"
            :disable="getSesion.novedad == '4'"
            class="col-4"
          />

          <ContainerFirma
            quien_firma="FIRMA TESTIGO"
            @reciFirma="callBackFirmaTest"
            :firmador="getTestigo.descrip"
            :firma_="firma_testigo"
            :codigo_firma="getTestigo.cod"
            :descrip_prof="getTestigo.descrip_atiende"
            :registro_profe="getTestigo.cod"
            :disable="getSesion.novedad == '4'"
            class="col-4"
          />
          <ContainerFirma
            quien_firma="TECNÓLOGO DE RADIOLOGÍA"
            @reciFirma="callBackFirmaProf"
            :firma_="firma_prof_tec_radi"
            :codigo_firma="getProf.cod"
            :firmador="getProf.descrip"
            :descrip_prof="getProf.descrip_atiende"
            :registro_profe="getProf.registro_profe"
            :disable="getSesion.novedad == '4'"
            class="col-4"
          />
        </div>
      </q-card-section>

      <div class="row justify-center q-my-lg">
        <q-btn
          :disable="reg_lab011.opcion_hc035 ? false : true"
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
import { ref, reactive, defineAsyncComponent, onMounted } from "vue";
import { impresionLAB011, impresion, generarArchivo } from "@/impresiones";
import { utilsFormat, calcularEdad, evaluarParentesco, evaluarDiscapacidad, evaluarClaseServ } from "@/formatos/utils";
import { useRouter } from "vue-router";
import { foco_ } from "@/setup";
import dayjs from "dayjs";

const ContainerFirma = defineAsyncComponent(() => import("../../components/global/ContainerFirma.vue"));
const DatosFormat = defineAsyncComponent(() => import("@/components/global/DatosFormat.vue"));
const { getDll$, _getFirma$, guardarFile$, _getHuella$, enviarCorreo$, getEncabezado, _getImagen$ } = useApiContabilidad();
const { getPaci, getAcomp, getProf, getEmpresa, getSesion, getTestigo } = useModuleFormatos();
const { CON851P } = useModuleCon851p();
const { CON851 } = useModuleCon851();
const router = useRouter();

const firma_recibida_acomp = ref("");
const firma_recibida = ref("");
const firma_recibida_test = ref("");
const firma_prof = ref(null);
const firma_paci = ref(null);
const firma_testigo = ref(null);
const huella_paci = ref(null);
const firma_prof_tec_radi = ref(null);
const res_consen = ref(null);

const form_tabla_not_ant = ref({
  indice_i: {
    id: "indice_i",
    mask: "##",
    maxlength: "2",
    disable: true,
    required: true,
  },
  fecha: {
    id: "fecha",
    disable: true,
    maxlength: "10",
    required: true,
    campo_abierto: true,
  },
  hora: {
    id: "hora",
    disable: true,
    maxlength: "5",
    required: true,
    campo_abierto: true,
  },
  notas_atencion: {
    id: "notas_atencion",
    maxlength: "900",
    campo_abierto: true,
    f0: ["f3", "f5", "f6", "f9", "arrowup", "arrowdown"],
  },
});
const headers = [
  { name: "indice_i", label: "Item", align: "left", field: "indice_i", headerStyle: "width: 8%" },
  { name: "fecha", label: "Fecha", align: "left", field: "fecha", headerStyle: "width: 15%" },
  { name: "hora", label: "Hora", align: "left", field: "hora", headerStyle: "width: 10%" },
  { name: "notas_atencion", label: "Notas", align: "left", field: "notas_atencion", headerStyle: "width: 57%" },
  { name: "btn", label: "", align: "left", field: "btn", headerStyle: "width: 0%" },
];
const reg_tabla_not_ant = ref({
  indice_i: null,
  fecha: "",
  hora: "",
  notas_atencion: "",
});

const tabla_notas_atencion = reactive(
  JSON.parse(
    JSON.stringify(
      Array(13).fill({
        indice_i: null,
        fecha: "",
        hora: "",
        notas_atencion: "",
      })
    )
  )
);
const datos = {
  tipo_id: getPaci.tipo_id,
  active_cups: true,
  active_encab_ampl: true,
};

const reg_paci = ref(regPaci());
const reg_acomp = ref(regAcomp());

const reg_lab011 = reactive({
  revoca_procedi: "",
  hora: dayjs().format("HH: mm"),

  ult_examen: "",
  fecha_ult_exam: "",
  medio_contras: "",
  nomb_med_contr: "",
  dosis_med_contr: "",
  // datos complicaciones
  rash_curaneo: "N",
  dificult_res: "N",
  crisis_asma: "N",
  emesis: "N",
  shock_anafilac: "N",
  otro_complic: "",

  posib_embarazo: "",
  fecha_ult_mestr: "",
  // datos patologicos
  asma_tratam: "N",
  insuf_renal: "N",
  diabet_mellitus: "N",
  hipert_arterial: "N",
  enfer_corazon: "N",
  enfer_higado: "N",
  otros_antec: "",
  // datos alergicos
  alerg_medicamet: "N",
  alerg_aliment: "N",
  otros_alerg: "",
  // datos reaccion alergica
  alerg_rash_curan: "N",
  alerg_dific_res: "N",
  alerg_shock_anafi: "N",
  otros_reacc_alerg: "",
  // datos antecedentes
  antec_quirur: "",
  antec_familiar: "",
  antec_farmaco: "",
  // datos clinicos relevantes
  peso_kg: "",
  talla_cm: "",
  creatinina: "",
  otro_dtos_clinic: "",
  // datos signos vitales
  signo_ta_sistol: "",
  signo_ta_diastol: "",
  signo_frec_card: "",
  signo_frec_resp: "",
  signo_sa_o2_porc: "",
  signo_fi_o2_porc: "",
  signo_glasgow: "",

  compl_reac_adver: "",

  // EXTRAS
  parentesco: "",
  opcion_hc035: "",
  fecha_act: "",
  llave: "",
  servicio: "",
  ambito_atenc: "",
  ident_genero: "",
  edad: "",
  discapacidad: "",
});

const form = ref({
  ult_examen: {
    id: "ult_examen",
    maxlength: "285",
    label: "",
    disable: getSesion.novedad === "4",
    campo_abierto: true,
  },
  fecha_ult_exam: {
    id: "fecha_ult_exam",
    maxlength: "10",
    label: "",
    tipo: "date",
    disable: getSesion.novedad === "4",
    campo_abierto: true,
  },
  nomb_med_contr: {
    id: "nomb_med_contr",
    maxlength: "200",
    label: "",
    required: true,
    disable: getSesion.novedad === "4",
    campo_abierto: true,
  },
  dosis_med_contr: {
    id: "dosis_med_contr",
    maxlength: "150",
    label: "",
    required: true,
    disable: getSesion.novedad === "4",
    campo_abierto: true,
  },

  antec_farmaco: {
    id: "antec_farmaco",
    maxlength: "250",
    label: "",
    rows: 3,
    disable: getSesion.novedad === "4",
    campo_abierto: true,
  },
  antec_familiar: {
    id: "antec_familiar",
    maxlength: "250",
    label: "",
    rows: 3,
    disable: getSesion.novedad === "4",
    campo_abierto: true,
  },
  antec_quirur: {
    id: "antec_quirur",
    maxlength: "250",
    label: "",
    rows: 3,
    disable: getSesion.novedad === "4",
    campo_abierto: true,
  },
  compl_reac_adver: {
    id: "compl_reac_adver",
    maxlength: "200",
    label: "",
    rows: 3,
    disable: getSesion.novedad === "4",
    campo_abierto: true,
  },

  fecha_ult_mestr: {
    id: "fecha_ult_mestr",
    maxlength: "10",
    label: "",
    tipo: "date",
    disable: getSesion.novedad === "4",
    campo_abierto: true,
  },

  otro_complic: {
    id: "otro_complic",
    maxlength: "200",
    label: "",
    disable: getSesion.novedad === "4",
    campo_abierto: true,
  },
  otros_antec: {
    id: "otros_antec",
    maxlength: "200",
    label: "",
    disable: getSesion.novedad === "4",
    campo_abierto: true,
  },
  otros_alerg: {
    id: "otros_alerg",
    maxlength: "200",
    label: "",
    disable: getSesion.novedad === "4",
    campo_abierto: true,
  },
  otros_reacc_alerg: {
    id: "otros_reacc_alerg",
    maxlength: "150",
    label: "",
    disable: getSesion.novedad === "4",
    campo_abierto: true,
  },
  peso_kg: {
    id: "peso_kg",
    maxlength: "4",
    label: "",
    tipo: "number",
    disable: getSesion.novedad === "4",
    campo_abierto: true,
  },
  talla_cm: {
    id: "talla_cm",
    maxlength: "4",
    label: "",
    tipo: "number",
    disable: getSesion.novedad === "4",
    campo_abierto: true,
  },
  creatinina: {
    id: "creatinina",
    maxlength: "5",
    label: "",
    tipo: "number",
    disable: getSesion.novedad === "4",
    campo_abierto: true,
  },
  otro_dtos_clinic: {
    id: "otro_dtos_clinic",
    maxlength: "150",
    label: "",
    disable: getSesion.novedad === "4",
    campo_abierto: true,
  },
  signo_ta_sistol: {
    id: "signo_ta_sistol",
    maxlength: "4",
    label: "",
    tipo: "number",
    disable: getSesion.novedad === "4",
    campo_abierto: true,
  },
  signo_ta_diastol: {
    id: "signo_ta_diastol",
    maxlength: "4",
    label: "",
    tipo: "number",
    disable: getSesion.novedad === "4",
    campo_abierto: true,
  },
  signo_frec_card: {
    id: "signo_frec_card",
    maxlength: "4",
    label: "",
    tipo: "number",
    disable: getSesion.novedad === "4",
    campo_abierto: true,
  },
  signo_frec_resp: {
    id: "signo_frec_resp",
    maxlength: "4",
    label: "",
    tipo: "number",
    disable: getSesion.novedad === "4",
    campo_abierto: true,
  },
  signo_sa_o2_porc: {
    id: "signo_sa_o2_porc",
    maxlength: "4",
    label: "",
    tipo: "number",
    disable: getSesion.novedad === "4",
    campo_abierto: true,
  },
  signo_fi_o2_porc: {
    id: "signo_fi_o2_porc",
    maxlength: "4",
    label: "",
    tipo: "number",
    disable: getSesion.novedad === "4",
    campo_abierto: true,
  },
  signo_glasgow: {
    id: "signo_glasgow",
    maxlength: "4",
    label: "",
    tipo: "number",
    disable: getSesion.novedad === "4",
    campo_abierto: true,
  },
});

onMounted(() => {
  setTimeout(() => {
    datosInit();
    getFirmaProf();
  }, 500);
});

const datosInit = async () => {
  if (getSesion.novedad == "4") {
    res_consen.value = JSON.parse(sessionStorage.getItem("reg_conse_edit"));
    res_consen.value.reg_coninf.datos.peso_kg = Number(res_consen.value.reg_coninf.datos.peso_kg);
    res_consen.value.reg_coninf.datos.talla_cm = Number(res_consen.value.reg_coninf.datos.talla_cm);
    res_consen.value.reg_coninf.datos.creatinina = Number(res_consen.value.reg_coninf.datos.creatinina);
    res_consen.value.reg_coninf.datos.signo_ta_sistol = Number(res_consen.value.reg_coninf.datos.signo_ta_sistol);
    res_consen.value.reg_coninf.datos.signo_ta_diastol = Number(res_consen.value.reg_coninf.datos.signo_ta_diastol);
    res_consen.value.reg_coninf.datos.signo_frec_card = Number(res_consen.value.reg_coninf.datos.signo_frec_card);
    res_consen.value.reg_coninf.datos.signo_frec_resp = Number(res_consen.value.reg_coninf.datos.signo_frec_resp);
    res_consen.value.reg_coninf.datos.signo_sa_o2_porc = Number(res_consen.value.reg_coninf.datos.signo_sa_o2_porc);
    res_consen.value.reg_coninf.datos.signo_fi_o2_porc = Number(res_consen.value.reg_coninf.datos.signo_fi_o2_porc);
    res_consen.value.reg_coninf.datos.signo_glasgow = Number(res_consen.value.reg_coninf.datos.signo_glasgow);

    Object.assign(reg_lab011, res_consen.value.reg_coninf.datos);
    Object.assign(tabla_notas_atencion, res_consen.value.reg_coninf.datos.tabla_notas_aten);
    const maxIndice = Math.max(...tabla_notas_atencion.map((item) => Number(item.indice_i) || 0));
    reg_tabla_not_ant.value.indice_i = maxIndice + 1;
    const codigo = `${res_consen.value.reg_coninf.llave.id}${res_consen.value.reg_coninf.llave.folio}${res_consen.value.reg_coninf.llave.fecha}${res_consen.value.reg_coninf.llave.hora}${res_consen.value.reg_coninf.llave.oper_elab}`;
    firma_paci.value = await _getImagen$({ codigo: `P${codigo}` });
    firma_recibida.value = firma_paci.value;
    reg_lab011.opcion_hc035 = "AUTORIZAR";
    foco_(form_tabla_not_ant, "notas_atencion");
  }

  if (getSesion.novedad == "1") {
    reg_tabla_not_ant.value.indice_i = 1;
  }
  reg_tabla_not_ant.value.fecha = dayjs().format("DD-MM-YYYY");
  reg_tabla_not_ant.value.hora = dayjs().format("HH: mm");
  reg_lab011.fecha_act = dayjs(getEmpresa.FECHA_ACT).format("YYYY-MM-DD");
  reg_lab011.edad = calcularEdad(getAcomp.nacim);
  Object.assign(reg_paci.value, getPaci);
  Object.assign(reg_acomp.value, getAcomp);

  reg_lab011.parentesco = evaluarParentesco(getSesion.paren_acomp);
  reg_lab011.discapacidad = evaluarDiscapacidad(reg_paci.value.discap);
  reg_lab011.servicio = evaluarClaseServ(getSesion.clase);
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
  const requiere = "Complete el siguiente campo";

  //   if (!firma_recibida.value) {
  //     return CON851("?", "info", "No se ha realizado la firma del paciente");
  //   }
  //   if (getAcomp.cod && !firma_recibida_acomp.value) {
  //     return CON851("?", "info", "No se ha realizado la firma del acompañate");
  //   }
  if (reg_lab011.opcion_hc035 == "AUTORIZAR") {
    // if (!reg_lab011.peso_kg) return CON851("?", "info", `${requiere},  Peso (Kg)`, () => foco_(form, "peso_kg"));
    // if (!reg_lab011.talla_cm) return CON851("?", "info", `${requiere},  Talla (Cm)`, () => foco_(form, "talla_cm"));
    // if (!reg_lab011.creatinina) return CON851("?", "info", `${requiere},  Creatinina (mg/dl)`, () => foco_(form, "creatinina"));
    // if (!reg_lab011.signo_ta_sistol) return CON851("?", "info", `${requiere}, Signo TA`, () => foco_(form, "signo_ta_sistol"));
    // if (!reg_lab011.signo_ta_diastol) return CON851("?", "info", `${requiere}, Signo TA mm Hg`, () => foco_(form, "signo_ta_diastol"));
    // if (!reg_lab011.signo_frec_card) return CON851("?", "info", `${requiere}, Signo FC`, () => foco_(form, "signo_frec_card"));
    // if (!reg_lab011.signo_frec_resp) return CON851("?", "info", `${requiere}, Signo FR`, () => foco_(form, "signo_frec_resp"));
    // if (!reg_lab011.signo_sa_o2_porc) return CON851("?", "info", `${requiere}, Signo SaO2`, () => foco_(form, "signo_sa_o2_porc"));
    // if (!reg_lab011.signo_fi_o2_porc) return CON851("?", "info", `${requiere}, Signo FiO2`, () => foco_(form, "signo_fi_o2_porc"));
    // if (!reg_lab011.signo_glasgow) return CON851("?", "info", `${requiere}, Signo Glasgow`, () => foco_(form, "signo_glasgow"));
  }

  grabarConsentimiento();
};

const grabarConsentimiento = async () => {
  const datos_format = JSON.parse(JSON.stringify(reg_lab011));
  const tabla_notas_aten = JSON.parse(JSON.stringify(tabla_notas_atencion));

  let datos = {
    estado: reg_lab011.opcion_hc035 == "AUTORIZAR" ? "1" : "2",
    llave_fact: `${getSesion.suc}${getSesion.clase}${getSesion.nro_comp}`,
    disentimiento: "N",
    llave_consen: getSesion.novedad == "4" ? Object.values(res_consen.value.reg_coninf.llave).join("") : `${getPaci.cod}00000000`,
    oper_consen: getSesion.oper,
    cod_consen: "LAB011",
    cod_med: getProf.cod,
    id_acomp: getAcomp.cod.padStart(15, "0"),
    id_testigo: getTestigo.cod.padStart(15, "0"),
    tipo_testigo: getSesion.tipo_testigo,
    paren_acomp: getSesion.paren_acomp,
    ...datos_format,
    tabla_notas_aten: tabla_notas_aten,
  };
  console.log("datos ", datos);
  if (getSesion.novedad == "4") {
    datos.novedad_consen = getSesion.novedad;
  }
  datos.tabla_notas_aten.forEach((item, index) => {
    const new_obj = {
      indice_i: item.indice_i,
      fecha: item.fecha,
      hora: item.hora,
      notas_atencion: item.notas_atencion,
    };
    datos[`tabla_notas_aten${(index + 1).toString().padStart(3, "0")}`] = Object.values(new_obj).join("|") + "|";
  });
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
    if (getSesion.novedad != "4") {
      await guardarFile$({ base64: firma_recibida_acomp.value, codigo: `A${llave}` });
      await guardarFile$({ base64: firma_recibida_test.value, codigo: `T${llave}` });
      await guardarFile$({ base64: firma_recibida.value, codigo: `P${llave}` });
    }

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
    const datos_lab011 = {
      autorizo: reg_lab011.opcion_hc035 == "AUTORIZAR" ? true : false,
      empresa: getEmpresa,
      paciente: getPaci,
      prof: getProf,
      acomp: getAcomp,
      testigo: getTestigo,
      cod_consen: "LAB011",
      firmas: {
        firma_paci: firma_recibida.value ? true : false,
        huella_paci: huella_paci.value ? true : false,
        firma_acomp: firma_recibida_acomp.value ? true : false,
        firma_prof: firma_prof.value ? true : false,
        firma_test: firma_recibida_test.value ? true : false,
      },
      paren_acomp: getSesion.paren_acomp,
      fecha: reg_lab011.fecha_act,
      llave: reg_lab011.llave,
      tabla_notas_aten: tabla_notas_atencion,
      ...reg_lab011,
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
      content: impresionLAB011({
        datos: datos_lab011,
      }),
    });
    const docDefinitionFile = await utilsFormat({
      datos: firmas,
      content: impresionLAB011({
        datos: datos_lab011,
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

const callBackFirma = (data_firma) => {
  if (getAcomp.cod) firma_recibida_acomp.value = data_firma;
  else firma_recibida.value = data_firma;
};
const callBackFirmaProf = (data_firma) => {
  data_firma && (firma_prof.value = data_firma);
};
const callBackFirmaTest = (data_firma) => {
  data_firma && (firma_recibida_test.value = data_firma);
};

const agregarNotaAtenc = () => {
  if (reg_tabla_not_ant.value.notas_atencion.trim().length == 0) {
    return CON851("?", "info", "El campo esta vacio");
  }

  tabla_notas_atencion[reg_tabla_not_ant.value.indice_i - 1].indice_i = reg_tabla_not_ant.value.indice_i;
  tabla_notas_atencion[reg_tabla_not_ant.value.indice_i - 1].fecha = reg_tabla_not_ant.value.fecha;
  tabla_notas_atencion[reg_tabla_not_ant.value.indice_i - 1].hora = reg_tabla_not_ant.value.hora;
  tabla_notas_atencion[reg_tabla_not_ant.value.indice_i - 1].notas_atencion = reg_tabla_not_ant.value.notas_atencion;
  reg_tabla_not_ant.value.indice_i++;
  reg_tabla_not_ant.value.hora = dayjs().format("HH: mm");
  reg_tabla_not_ant.value.notas_atencion = "";
  foco_(form_tabla_not_ant, "notas_atencion");
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
