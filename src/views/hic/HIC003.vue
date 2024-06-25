<template>
  <q-card class="q-mx-auto format q-mb-lg" style="overflow: auto">
    <q-card-section>
      <div class="text-center">
        <q-toggle
          v-model="reg.opcion_hc003"
          color="primary"
          keep-color
          false-value="REVOCAR"
          true-value="AUTORIZAR"
          unchecked-icon="block"
          checked-icon="check_circle"
          label="¿Autorizar o revocar este consentimiento?"
        />
        <p :class="reg.opcion_hc003 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
          <q-chip
            :color="reg.opcion_hc003 == 'AUTORIZAR' ? 'green' : 'red'"
            class="text-white"
            v-if="reg.opcion_hc003"
          >
            {{ reg.opcion_hc003 }}
          </q-chip>
        </p>
      </div>
      <div>
        <p>
          <InputF_ v-model="reg.fecha_act" disable width="100" />
          <InputF_ v-model="reg.hora_act" disable width="100" />
        </p>
      </div>

      <p>
        Yo, {{ reg_firmador.descrip }}, mayor de edad identificado con documento N°: {{ reg_firmador.cod }} de
        {{ reg_firmador.descrip_ciudad }} actuando en nombre propio en pleno uso de mis facultades, libre y
        consciente, o como responsable del menor {{ acudiente_de.descrip }} identificado con N°:
        {{ acudiente_de.cod }} declaro que:
      </p>

      <p>
        torgo mi consentimiento para que sea practicado el procedimiento: (marque con una x el/los
        procedimiento(s) que le van a realizar mencionados en el cuadro 1.) del cual se me brinda información
        y se me han explicado tanto la necesidad de hacerlo como los riesgos del mismo
      </p>
      <q-checkbox
        left-label
        class="col-12"
        true-value="S"
        false-value="N"
        v-model="reg.anestesia_local"
        label="El procedimiento anteriormente descrito requiere anestesia local:"
      />
      <q-checkbox
        left-label
        class="col-12"
        true-value="S"
        false-value="N"
        v-model="reg.aplicacion_anest"
        label="Autorizo la aplicación de anestesia local, en el momento que se requiera:"
      />

      <div class="row">
        <div class="col-5 border-format">Procedimientos</div>
        <div class="col-2 border-format">Selección</div>
        <div class="col-5 border-format">Riesgos</div>
      </div>
      <div class="row">
        <div class="col-5 border-format">Canalización o Inyectología</div>
        <div class="col-2 border-format">
          <q-checkbox left-label class="col-12" v-model="reg.canal_inyec" true-value="S" false-value="N" />
        </div>
        <div class="col-5 border-format">
          <p>Dolor, infiltración por extravasación en la piel, hematomas, flebitis, Infección.</p>
        </div>
      </div>
      <div class="row">
        <div class="col-5 border-format">Curaciones</div>
        <div class="col-2 border-format">
          <q-checkbox left-label class="col-12" v-model="reg.curaciones" true-value="S" false-value="N" />
        </div>
        <div class="col-5 border-format">
          <p>
            Dolor, Hemorragia, Pérdida de tejido, Infección, Apertura de herida, Hipersensibilidad del área,
            cicatrices
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-5 border-format">Suturas</div>
        <div class="col-2 border-format">
          <q-checkbox left-label class="col-12" v-model="reg.suturas" true-value="S" false-value="N" />
        </div>
        <div class="col-5 border-format">
          <p>Dolor, inflamación, infección</p>
        </div>
      </div>
      <div class="row">
        <div class="col-5 border-format">Inserción y retiro de sondas vesical, orogástrica, nasogástrica</div>
        <div class="col-2 border-format">
          <q-checkbox
            left-label
            class="col-12"
            v-model="reg.sondas_vesi_oro_naso"
            true-value="S"
            false-value="N"
          />
        </div>
        <div class="col-5 border-format">
          <p>Desgarro y/o ruptura de órgano implicado, hemorragia, edema o inflamación, dolor</p>
        </div>
      </div>
      <div class="row">
        <div class="col-5 border-format">Administración de medicamentos</div>
        <div class="col-2 border-format">
          <q-checkbox left-label class="col-12" v-model="reg.admin_medica" true-value="S" false-value="N" />
        </div>
        <div class="col-5 border-format">
          <p>Reacciones adversas</p>
        </div>
      </div>
      <div class="row">
        <div class="col-5 border-format">Intubación orotraqueal</div>
        <div class="col-2 border-format">
          <q-checkbox left-label class="col-12" v-model="reg.intubacion_oro" true-value="S" false-value="N" />
        </div>
        <div class="col-5 border-format">
          <p>Hemorragia, aerofagia, broncoaspiración, muerte</p>
        </div>
      </div>
      <div class="row">
        <div class="col-5 border-format">Extracción de cuerpo extraño</div>
        <div class="col-2 border-format">
          <q-checkbox
            left-label
            class="col-12"
            v-model="reg.extraccion_cuerpo"
            true-value="S"
            false-value="N"
          />
        </div>
        <div class="col-5 border-format">
          <p>Lesiones del tejido en el lugar de ubicación del cuerpo extraño, sangrado</p>
        </div>
      </div>
      <div class="row">
        <div class="col-5 border-format">Lavado otico</div>
        <div class="col-2 border-format">
          <q-checkbox left-label class="col-12" v-model="reg.lavado_otico" true-value="S" false-value="N" />
        </div>
        <div class="col-5 border-format">
          <p>
            Retención de líquido e humedad en el canal auditivo ocasiones estimulación de crecimiento
            bacteriano, perforación membrana timpánica, tinitus m vértigo.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-5 border-format">
          Toma de muestras de laboratorio (química sanguínea, frotis vaginal, muestra de esputo, muestra
          uroanalisis y coprológico)
        </div>
        <div class="col-2 border-format">
          <q-checkbox left-label class="col-12" v-model="reg.toma_muestras" true-value="S" false-value="N" />
        </div>
        <div class="col-5 border-format">
          <p>Dolor, ardor, hematomas, infección.</p>
        </div>
      </div>

      <div class="q-mt-lg">
        <p>
          Certifico que se me ha explicado el procedimiento y entiendo sus posibles riesgos y complicaciones
          También me han explicado los cuidados que debo tener posteriormente al egreso
        </p>
      </div>

      <div v-if="reg.opcion_hc003 == 'REVOCAR'">
        <div class="text-bold text-center">
          DILIGENCIAR ESTE ESPACIO EN CASO DE REVOCACIÓN O DISENTIMIENTO
        </div>
        <div>
          <p>
            Yo {{ reg_firmador.descrip }}, después de ser informado de la naturaleza y riesgos del
            procedimiento propuesto, manifiesto de forma libre y consciente mi negación/ revocación para su
            realización, haciéndome responsable de las consecuencias que se puedan derivar de ésta decisión.
          </p>
        </div>
      </div>
    </q-card-section>
    <q-separator />
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
          quien_firma="FIRMA TUTOR O FAMILIAR"
          :registro_profe="getAcomp.cod"
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
          :disable="reg.opcion_hc003 ? false : true"
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
// import { impresionHC030, impresion, generarArchivo } from "@/impresiones";
import { ref, defineAsyncComponent, onMounted, watch } from "vue";
import { utilsFormat, calcEdad } from "@/formatos/utils";
import { useRouter } from "vue-router";
import { foco_ } from "@/setup";
import dayjs from "dayjs";

const ContainerFirma = defineAsyncComponent(() => import("@/components/global/containerFirma.vue"));
const DatosFormat = defineAsyncComponent(() => import("@/components/global/DatosFormat.vue"));
const router = useRouter();

const { getDll$, _getFirma$, _getHuella$, guardarFile$, enviarCorreo$, getEncabezado } = useApiContabilidad();
const { getPaci, getAcomp, getHc, getProf, getEmpresa, getSesion } = useModuleFormatos();
const { CON851P } = useModuleCon851p();
const { CON851 } = useModuleCon851();

const acudiente_de = ref(getAcomp.cod ? { descrip: getPaci.descrip, cod: getPaci.cod } : "");
const reg_firmador = ref(getAcomp.cod ? getAcomp : getPaci);
const firma_recibida_acomp = ref("");
const firma_recibida = ref("");
const huella_paci = ref(null);
const firma_prof = ref(null);

const reg = ref({
  anestesia_local: "N",
  aplicacion_anest: "N",
  canal_inyec: "N",
  curaciones: "N",
  suturas: "N",
  sondas_vesi_oro_naso: "N",
  admin_medica: "N",
  intubacion_oro: "N",
  extraccion_cuerpo: "N",
  lavado_otico: "N",
  toma_muestras: "N",

  //   extras
  opcion_hc003: "",
  hora_act: "",
  fecha_act: "",
});

onMounted(() => {
  reg.value.fecha_act = dayjs(getEmpresa.fecha_act).format("YYYY-MM-DD");
  reg.value.hora_act = dayjs().format("HH:mm");
});

const callBackFirma = (data_firma) => {
  data_firma && (firma_recibida.value = data_firma);
};

const callBackFirmaAcomp = (data_firma) => {
  data_firma && (firma_recibida_acomp.value = data_firma);
};

const validarDatos = () => {};
</script>
