<template>
  <q-card class="q-mx-auto format">
    <q-card-section>
      <q-form ref="form_hic" @submit="">
        <div class="border-format">
          <div class="row">
            <p>Historia clínica numero:</p>
            <q-input disable type="text" dense class="col-1" v-model="llave" />
          </div>

          <div class="row">
            <p>
              Fecha:
              <InputF_ v-model="HIC038.fecha_act" />
            </p>
          </div>

          <div class="row">
            <p>
              Yo,
              <InputF_ v-model="getPaci.descrip" width="300" />
              identificado con documento numero <InputF_ v-model="getPaci.cod" /> expedida en
              <InputF_ v-model="getPaci.descrip_ciudad" /> teléfono numero
              <InputF_ v-model="getPaci.telefono" />. Actuando en nombre propio o como acudiente de
              <InputF_ v-model="getPaci.descrip" width="300" /> en mi calidad de paciente, de representante
              legal, familiar o allegado y en pleno uso de mis facultades mentales y de mis derechos de salud
              y habiendo solicitado por mi voluntad los servicios de salud a la empresa social del estado ESE
              salud Yopal, por medio del presente documento doy mi consentimiento informado para que se me
              brinden los cuidados correspondientes y se siga la conducta terapéutica según el criterio del
              médico tratante, se me ha informado que es necesario y conveniente por mi situación actual de
              salud, realizar remisión a una institución Prestadora de Servicios de Salud de mayor complejidad
              para la atención por el o los servicios de <InputF_ v-model="HIC038.servicios" width="300" /> en
              pro de mejorar mi condición clínica de salud y dar continuidad al plan terapéutico requerido.
            </p>
          </div>
        </div>

        <div class="border-format">
          <p>Por lo anterior me ha brindado la siguiente información:</p>
          <ol>
            <li>
              <p>
                Se me ha informado que los trámites administrativos para la remisión estarán a cargo de mi EPS
                <InputF_ v-model="getEmpresa.NOMUSU" width="300" />, ellos serán los encargados de presentar
                mi caso antes las diferentes instituciones de salud, para disponibilidad de la cama de acuerdo
                con la Red que tengan contratada.
              </p>
            </li>
            <li>
              <p>
                El Periodo de tiempo para la aceptación de la remisión por parte de las IPS depende de varios
                factores como disponibilidad de la especialidad requerida, disponibilidad de cama,
                disponibilidad de convenio entre IPS y la EPS, entre otros, por lo tanto, no se puede
                determinar fecha ni hora exacta del proceso de remisión.
              </p>
            </li>
            <li>
              <p>
                El personal de la oficina de Referencia y Contra-referencia de la ESE Salud Yopal, realizara
                los trámites administrativos de informar a la EPS la necesidad de remisión y otorgo la
                autorización para que sean entregados todos los documentos de mi historia clínica requeridos
                para dichos tramites.
              </p>
            </li>
            <li>
              <p>
                En la Oficina de Referencia y Contra-referencia me entregaran información sobre los avances
                del proceso de remisión en los siguientes horarios:
                <InputF_ v-model="HIC038.horarios" width="300" />.
              </p>
            </li>
            <li>
              <p>
                En consenso familiar hemos delegado al Señor/Señora
                <InputF_ width="300" />identificado(a) con cedula de ciudadanía N°
                <InputF_ width="300" />
                expedida en la ciudad de
                <InputF_ width="300" /> para que sea la única persona que reciba la información sobre los
                avances de la remisión en la oficina de Referencia y Contra-referencia y transmita esta
                información al resto de mis familiares.
              </p>
            </li>
            <li>
              <p>
                Se me informa que debo definir la persona que me acompañará durante el traslado y durante mi
                estadía en la institución de referencia, esa persona debe estar disponible para ser trasladado
                en el momento requerido.
              </p>
            </li>
            <li>
              <p>
                En caso de que el personal médico tratante de la ESE Salud Yopal suspenda la remisión por
                mejoría de mi estado de salud, se nos informara inmediatamente.
              </p>
            </li>
            <li>
              <p>
                Una vez entregado a la institución de salud remisoria para continuidad del tratamiento, mi
                cuidado y responsabilidad estará a cargo de la institución receptora.
              </p>
            </li>
            <li>
              <p>
                Me han informado que los riesgos durante el traslado en la ambulancia de la ESE Salud Yopal
                son: accidente vial, caída de la camilla, retrasos en la llegada al sitio de referencia por
                causas externas como factores climáticos, orden público, arreglos en la vía, entre otros.
              </p>
            </li>
          </ol>
        </div>
      </q-form>
      <div class="border-format row">
        <div class="col-12 row justify-center q-mb-md">
          <q-btn class="q-mr-lg" color="green-10" icon-right="check_circle" label="Autorizo" type="submit" />
          <q-btn color="red-10" icon-right="block" label="Revocar" />
        </div>
        <div class="col-12 row justify-around" align="">
          <ContainerFirma
            :disable="getAcomp?.cod ? true : false"
            quien_firma="FIRMA PACIENTE"
            :firmador="getPaci.descrip"
            @reciFirma="callBackFirma"
            class="col-4"
          />
          <ContainerFirma
            :firmador="getAcomp.descrip || 'NO HAY ACOMPAÑANTE'"
            :disable="getAcomp?.cod ? false : true"
            quien_firma="FIRMA TUTOR O FAMILIAR"
            @reciFirma="callBackFirma"
            class="col-4"
          />
          <ContainerFirma
            :descrip_prof="getProf.descrip_atiende"
            :registro_profe="getProf.registro_profe"
            quien_firma="FIRMA PROFESIONAL"
            :firmador="getProf.descrip"
            @reciFirma="callBackFirma"
            :firma_="firma_prof"
            :disable="true"
            class="col-4"
          />
        </div>
      </div>
    </q-card-section>
    <q-card-actions> </q-card-actions>
  </q-card>
</template>

<script setup>
import { useModuleFormatos, useApiContabilidad, useModuleCon851 } from "@/store";
import { ref, defineAsyncComponent, onMounted } from "vue";
import dayjs from "dayjs";

const ContainerFirma = defineAsyncComponent(() => import("@/components/global/containerFirma.vue"));

const { getPaci, getAcomp, getHc, getProf, getEmpresa } = useModuleFormatos();
const { getDll$, _getFirma$ } = useApiContabilidad();
const { CON851 } = useModuleCon851();

const firma_recibida = ref(null);
const firma_prof = ref(null);
const fecha_act = ref(null);
const form_hic = ref(null);
const llave = ref(null);
const prub = ref("");

const HIC038 = ref({
  fecha_act: dayjs().format("YYYY-MM-DD"),
  observaciones: "",
  explicacion: "",
  servicios: "",
  horarios: "",
});

onMounted(() => {
  fecha_act.value = dayjs(getEmpresa.FECHA_ACT).format("YYYY-MM-DD");
  llave.value = getHc.llave.slice(15);

  getFirmaProf();
});

const getFirmaProf = async () => {
  try {
    firma_prof.value = await _getFirma$({ codigo: Number(getProf.cod) });
    console.log("⚡  firma_prof.value-- >", firma_prof.value);
  } catch (error) {
    console.error(error);
    CON851("?", "info", error);
  }
};

const callBackFirma = (dataF) => {
  firma_recibida.value = dataF;
};
</script>

<style>
p {
  margin-top: 10px;
  margin-left: 5px;
  margin-right: 8px;
}
</style>
