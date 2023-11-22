<template>
  <q-card class="q-mx-auto format q-mb-lg" style="overflow: auto">
    <q-card-section>
      <q-form @submit="validarDatos">
        <div class="text-center">
          <q-toggle
            v-model="reg.opcion_lab010"
            color="primary"
            keep-color
            false-value="REVOCAR"
            true-value="AUTORIZAR"
            unchecked-icon="block"
            checked-icon="check_circle"
            label="¿Autorizar o revocar este consentimiento?"
          />
          <p :class="reg.opcion_lab010 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
            <q-chip
              :color="reg.opcion_lab010 == 'AUTORIZAR' ? 'green' : 'red'"
              class="text-white"
              v-if="reg.opcion_lab010"
            >
              {{ reg.opcion_lab010 }}
            </q-chip>
          </p>
        </div>
        <DatosFormat :datos="datos" @datos="(data) => (datos.servicio = data)" />
        <div class="row q-mt-md q-mb-md" style="width: 100%">
          <div class="text-center" style="border: 1px solid #ccc; width: 80%">
            <p style="font-weight: bold; margin-top: 10px">
              PROCEDIMIENTO QUE REQUIERE MEDIO DE CONTRASTE (IODADO)
            </p>
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 20%">
            <q-chip
              class="text-white"
              :color="reg.iodado == false ? 'red' : 'gray'"
              style="min-width: 40px; transition: background-color 0.3s"
              >NO</q-chip
            >
            <q-toggle
              size="md"
              keep-color
              color="primary"
              v-model="reg.iodado"
              unchecked-icon="block"
              checked-icon="check_circle"
            />
            <q-chip
              class="text-white"
              :color="reg.iodado == true ? 'green' : 'gray'"
              style="min-width: 40px; transition: background-color 0.3s"
              >SI</q-chip
            >
          </div>
        </div>
        <div class="border-format q-my-sm">
          <div class="text-center text-subtitle1 text-bold q-py-xs">NORMATIVIDAD VIGENTE</div>
          <p class="row text-justify">
            La Ley 23 de 1981 al referirse a las relaciones médico – paciente, en los artículos 14, 15 y 18,
            advierte la necesidad del consentimiento para realizar los diferentes tratamientos medico
            quirúrgicos que se requieran. Para la resolución 3100 de 2019 el Consentimiento informado es la
            aceptación libre, voluntaria y consciente de un paciente o usuario, manifestada en el pleno uso de
            sus facultades, para que tenga a lugar un acto asistencial. Para que el consentimiento se
            considere informado, el paciente o usuario deberá entender la naturaleza de la decisión a
            consentir tras recibir información que le haga consciente de los beneficios, riesgos, alternativas
            e implicaciones del acto asistencial.
          </p>
        </div>
        <div class="border-format q-my-sm">
          <div class="text-center text-subtitle1 text-bold q-py-xs">INFORMACIÓN DEL PROCEDIMIENTO</div>
          <p class="row text-justify">
            La Tomografía Axial Computarizada TAC es un examen no invasivo que utiliza un equipo de rayos X
            especial para tomar imágenes de las estructuras internas del cuerpo. Los rayos X utilizados en las
            exploraciones por TAC usualmente no tienen efectos secundarios y no dejan radiación en el cuerpo
            de un paciente. Es posible que tenga que tomar el material de contraste alrededor de una hora
            antes de que se realice la tomografía computarizada; se necesita este tiempo para que el líquido
            recubra el estómago y los intestinos. También se puede administrar el medio de contraste vía
            intravenosa.
          </p>
        </div>
        <div class="border-format q-my-sm">
          <div class="text-center text-subtitle1 q-py-xs"><ins class="text-bold">BENEFICIOS</ins></div>
          <p class="row text-justify">
            Las tomografías permiten diagnosticar trastornos musculares y óseos. Precisar la ubicación de un
            tumor, una infección o un coágulo sanguíneo. Guiar procedimientos, como cirugías, biopsias y
            radioterapia Detectar y controlar enfermedades y afecciones. Controlar la efectividad de
            determinados tratamientos y detectar lesiones internas.
          </p>
          <p class="row text-justify">
            Las tomografías computarizadas -TC- con mejores que los rayos X convencionales para exámenes de
            muestra de tejido óseo, blando y vasos sanguíneos. El tomógrafo toma imágenes o “cortes” que
            muestran sólo unas capas del tejido del cuerpo a la vez. Al tomar imágenes de esta manera los
            profesionales de la salud pueden ver y encontrar mejor cualquier problema en su organismo. Se
            podrá utilizar un medio de contraste con el fin de visualizar mejor las imágenes en ciertas partes
            del cuerpo.
          </p>
        </div>
        <div class="border-format q-my-sm">
          <div class="text-center text-subtitle1 text-bold q-py-xs">RIESGOS</div>
          <p class="row text-justify">
            Los riesgos son los derivados de la utilización de radiación ionizante y del empleo de contrastes
            iodados. La dosis de una TC depende de las características físicas del paciente y de la extensión
            de la parte del cuerpo a estudiar, no se ha demostrado que las bajas dosis de radiación usadas
            causen daño a largo plazo. En relación al uso de medio de contraste yodado, las reacciones
            adversas que pueden aparecer son entre moderadas a graves, siendo estas últimas muy poco comunes.
            Las reacciones incluyen: náusea y vómito, dolor de cabeza, picazón, calores súbitos, irritación de
            la piel o urticaria, sibilancia , ritmos cardíacos anormales, presión sanguínea alta o baja, falta
            de aliento o dificultad para respirar, inflamación de la vía aérea, convulsiones y paro
            cardiorrespiratorio.
          </p>
        </div>
        <div class="border-format q-my-sm">
          <div class="text-center text-subtitle1 text-bold q-py-xs">
            RECOMENDACIONES DE SEGURIDAD (TOMOGRAFÍA AXIAL COMPUTARIZADA)
          </div>
          <p class="row text-justify">
            Recuerde que el uso de la Tomografía Axial computarizada TAC esta contraindicada en mujeres
            gestantes y en personas que han presentado reacciones alérgicas a medios de contraste yodados.
            Recuerde informarnos si tiene posibilidades de estar en proceso de gestación.
          </p>
          <p class="row text-justify">
            Algunas condiciones incrementan el riesgo de una reacción alérgica o adversa a los materiales de
            contraste yodados. Informe si Ud. tiene historial de asma, drepanocitosis, policitemia y mieloma,
            si usa medicamentos como metoprolol, carvedilol, propanolol.
          </p>
          <p class="row text-justify">
            Recuerde no usar ningún tipo de joyas incluyendo anillos, piercings, aretes, collares o relojes.
            Se le pedirá que se quite la ropa que tiene ganchos, botones, cierres u otros objetos metálicos
            para no interferir con el procedimiento.
          </p>
          <p class="row text-justify">infórmenos si sufre de claustrofobia o si pesa mas de 120 Kg.</p>
        </div>
        <div class="row q-mt-md q-mb-md" style="width: 100%">
          <div class="text-center" style="border: 1px solid #ccc; width: 70%">
            <p style="font-weight: bold; margin-top: 10px">
              ENCUESTA DE SEGURIDAD (PROCEDIMIENTO CON CONTRASTE)
            </p>
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 30%">
            <q-chip
              class="text-white"
              :color="reg.contraste == false ? 'red' : 'gray'"
              style="min-width: 90px; transition: background-color 0.3s"
              >NO APLICA</q-chip
            >
            <q-toggle
              size="md"
              keep-color
              color="primary"
              v-model="reg.contraste"
              unchecked-icon="block"
              checked-icon="check_circle"
            />
            <q-chip
              class="text-white text-center"
              :color="reg.contraste == true ? 'green' : 'gray'"
              style="min-width: 75px; transition: background-color 0.3s"
              >APLICA</q-chip
            >
          </div>
          <div class="text-justify" style="border: 1px solid #ccc; width: 40%">
            <p class="q-ml-sm q-mt-sm q-mr-sm">
              ¿Le han practicado exámenes con inyección de medio de contraste yodado?, ¿Otros TAC? Especifique
            </p>
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 18%">
            <q-chip
              class="text-white q-mt-sm"
              :color="reg.otros_exam == false ? 'red' : 'gray'"
              style="min-width: 40px; transition: background-color 0.3s"
              >NO</q-chip
            >
            <q-toggle
              size="md"
              keep-color
              class="q-mt-sm"
              color="primary"
              v-model="reg.otros_exam"
              unchecked-icon="block"
              checked-icon="check_circle"
            />
            <q-chip
              class="text-white q-mt-sm"
              :color="reg.otros_exam == true ? 'green' : 'gray'"
              style="min-width: 40px; transition: background-color 0.3s"
              >SI</q-chip
            >
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 42%">
            <div class="q-mt-lg">
                <Input_ v-model="reg.otros_exam" :field="form.especifique"/>
            </div>
          </div>
        </div>
      </q-form>
    </q-card-section>
    <q-card-actions>
      <div class="col-12 row justify-around">
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
          @reciFirma="callBackFirmaAcomp"
          :registro_profe="getAcomp.cod"
          quien_firma="TESTIGO"
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
          :disable="reg.opcion_lab002 ? false : true"
          @click="validarDatos"
          icon-right="check_circle"
          class="q-mr-lg"
          color="green"
          label="GRABAR"
          type="submit"
        />
      </div>
    </q-card-actions>
  </q-card>
</template>

<script setup>
import { useModuleFormatos, useApiContabilidad, useModuleCon851, useModuleCon851p } from "@/store";
import { impresionHC030, impresion, generarArchivo } from "@/impresiones";
import { ref, defineAsyncComponent, onMounted, watch } from "vue";
import { utilsFormat, calcEdad } from "@/formatos/utils";
import { useRouter } from "vue-router";
import dayjs from "dayjs";

const ContainerFirma = defineAsyncComponent(() => import("@/components/global/containerFirma.vue"));
const DatosFormat = defineAsyncComponent(() => import("@/components/global/DatosFormat.vue"));
const router = useRouter();

const { getDll$, _getFirma$, _getHuella$, guardarFile$, enviarCorreo$, getEncabezado } = useApiContabilidad();
const { getPaci, getAcomp, getHc, getProf, getEmpresa, getSesion } = useModuleFormatos();
const { CON851P } = useModuleCon851p();
const { CON851 } = useModuleCon851();

const firma_recibida_acomp = ref("");
const firma_recibida = ref("");
const huella_paci = ref(null);
const firma_prof = ref(null);

const datos = {
  tipo_id: getPaci.tipo_id,
  active_cups: true,
  servicio: "",
};

const reg = ref({
  opcion_lab010: "",
  fecha_act: "",
  iodado: null,
  contraste: null,
  otros_exam: null,
  text_otros_exam: "",
  reacc_adversa: null,
  text_reacc_adversa: "",
  enferm_corzn: null,
  text_enferm_corzn: "",
  enferm_rinons: null,
  text_enferm_rinons: "",
  enferm_hgdo: null,
  text_enferm_hgdo: "",
  asma: null,
  text_asma: "",
  alergia: null,
  text_alergia: "",
  diabetes: null,
  text_diabetes: "",
  otra_enferm: null,
  text_otra_enferm: "",
  medicamentos: null,
  text_medicamentos: "",
});

const form = ref({
  especifique: {
    id: "especifique",
    label: "",
    maxlength: "100",
    required: true,
    campo_abierto: true,
  },
});

onMounted(() => {
  reg.value.fecha_act = dayjs(getEmpresa.fecha_act).format("YYYY-MM-DD");
});

const validarDatos = () => {};

const callBackFirma = (data_firma) => {
  data_firma && (firma_recibida.value = data_firma.slice(22));
};

const callBackFirmaAcomp = (data_firma) => {
  data_firma && (firma_recibida_acomp.value = data_firma.slice(22));
};
</script>

<style>
table,
th,
td {
  border: 1px solid black;
  border-collapse: collapse;
}
</style>
