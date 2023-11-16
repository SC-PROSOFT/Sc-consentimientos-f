<template>
  <q-card class="q-mx-auto format q-mb-lg" style="overflow: auto">
    <q-card-section>
      <q-form @submit="validarDatos">
        <div class="text-center">
          <q-toggle
            v-model="opcion_hc030"
            color="primary"
            keep-color
            false-value="REVOCAR"
            true-value="AUTORIZAR"
            unchecked-icon="block"
            checked-icon="check_circle"
            label="¿Autorizar o revocar este consentimiento?"
          />
          <p :class="opcion_hc030 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
            <q-chip
              :color="opcion_hc030 == 'AUTORIZAR' ? 'green' : 'red'"
              class="text-white"
              v-if="opcion_hc030"
            >
              {{ opcion_hc030 }}
            </q-chip>
          </p>
        </div>
        <div class="row">
          <div class="row" style="width: 100%">
            <div class="row" style="font-weight: bold; border: 1px solid #ccc; width: 20%">
              <q-space />
              <p>FECHA</p>
              <q-space />
            </div>
            <div class="row" style="font-weight: bold; border: 1px solid #ccc; width: 20%">
              <q-space />
              <p>HORA</p>
              <q-space />
            </div>
            <div class="row" style="font-weight: bold; border: 1px solid #ccc; width: 30%">
              <q-space />
              <p>SERVICIO</p>
              <q-space />
            </div>
            <div class="row" style="font-weight: bold; border: 1px solid #ccc; width: 30%">
              <q-space />
              <p>SEDE</p>
              <q-space />
            </div>
          </div>
          <div class="row" style="width: 100%">
            <div class="row" style="border: 1px solid #ccc; width: 6%">
              <q-space />
              <p>DD</p>
              <q-space />
            </div>
            <div class="row" style="border: 1px solid #ccc; width: 6%">
              <q-space />
              <p>MM</p>
              <q-space />
            </div>
            <div class="row" style="border: 1px solid #ccc; width: 8%">
              <q-space />
              <p>AAAA</p>
              <q-space />
            </div>
            <div class="row" style="border: 1px solid #ccc; width: 20%">
              <q-space />
              <p>HH: MM</p>
              <q-space />
            </div>
            <div class="row" style="border: 1px solid #ccc; width: 30%">
              <q-space />
              <p></p>
              <q-space />
            </div>
            <div class="row" style="border: 1px solid #ccc; width: 30%">
              <q-space />
              <p></p>
              <q-space />
            </div>
          </div>
          <div class="row" style="width: 100%">
            <div class="row" style="font-weight: bold; border: 1px solid #ccc; width: 20%">
              <q-space />
              <p>PPRIMER APELLIDO</p>
              <q-space />
            </div>
            <div class="row" style="font-weight: bold; border: 1px solid #ccc; width: 20%">
              <q-space />
              <p>SEGUNDO APELLIDO</p>
              <q-space />
            </div>
            <div class="row" style="font-weight: bold; border: 1px solid #ccc; width: 30%">
              <q-space />
              <p>PRIMER NOMBRE</p>
              <q-space />
            </div>
            <div class="row" style="font-weight: bold; border: 1px solid #ccc; width: 30%">
              <q-space />
              <p>SEGUNDO NOMBRE</p>
              <q-space />
            </div>
          </div>
          <div class="row" style="width: 100%">
            <div class="row" style="font-weight: bold; border: 1px solid #ccc; width: 20%">
              <q-space />
              <p>{{ LAB001.primer_apellido }}</p>
              <q-space />
            </div>
            <div class="row" style="font-weight: bold; border: 1px solid #ccc; width: 20%">
              <q-space />
              <p>{{ LAB001.segundo_apellido }}</p>
              <q-space />
            </div>
            <div class="row" style="font-weight: bold; border: 1px solid #ccc; width: 30%">
              <q-space />
              <p>{{ LAB001.primer_nombre }}</p>
              <q-space />
            </div>
            <div class="row" style="font-weight: bold; border: 1px solid #ccc; width: 30%">
              <q-space />
              <p>{{ LAB001.segundo_nombre }}</p>
              <q-space />
            </div>
          </div>
          <div class="row" style="width: 100%">
            <div class="row" style="font-weight: bold; border: 1px solid #ccc; width: 40%">
              <q-space />
              <p>DOCUMENTO DE IDENTIFICACIÓN</p>
              <q-space />
            </div>
            <div class="row" style="font-weight: bold; border: 1px solid #ccc; width: 40%">
              <q-space />
              <p>NÚMERO DE IDENTIFICACIÓN</p>
              <q-space />
            </div>
            <div class="row" style="font-weight: bold; border: 1px solid #ccc; width: 20%">
              <q-space />
              <p>EDAD</p>
              <q-space />
            </div>
          </div>
          <div class="row" style="width: 100%">
            <div class="row" style="font-weight: bold; border: 1px solid #ccc; width: 40%">
              <q-space />
              <q-checkbox left-label v-model="LAB001.tipo_id_cc" label="CC" />
              <q-checkbox left-label v-model="LAB001.tipo_id_ce" label="CE" />
              <q-checkbox left-label v-model="LAB001.tipo_id_pa" label="PA" />
              <q-checkbox left-label v-model="LAB001.tipo_id_pt" label="PT" />
              <q-checkbox left-label v-model="LAB001.tipo_id_rc" label="RC" />
              <q-checkbox left-label v-model="LAB001.tipo_id_ti" label="TI" />
              <q-space />
            </div>
            <div class="row" style="font-weight: bold; border: 1px solid #ccc; width: 40%">
              <q-space />
              <p>1193220992</p>
              <q-space />
            </div>
            <div class="row" style="font-weight: bold; border: 1px solid #ccc; width: 20%">
              <q-space />
              <p>21</p>
              <q-space />
            </div>
          </div>
          <div class="row" style="font-weight: bold; border: 1px solid #ccc; width: 100%">
            <p style="margin-left: 20px; margin-top: 6px; margin-bottom: 6px">ENTIDAD RESPONSABLE PBS:</p>
          </div>
        </div>
        <div class="q-mt-lg row">
          <div class="row" style="width: 100%">
            <div class="row" style="font-weight: bold; border: 1px solid #ccc; width: 8%">
              <q-space />
              <p>N°</p>
              <q-space />
            </div>
            <div class="row" style="font-weight: bold; border: 1px solid #ccc; width: 30%">
              <q-space />
              <p>CÓDIGO CUPS</p>
              <q-space />
            </div>
            <div class="row" style="font-weight: bold; border: 1px solid #ccc; width: 62%">
              <q-space />
              <p>EXAMEN A REALIZAR</p>
              <q-space />
            </div>
          </div>
          <div class="row" style="width: 100%">
            <div class="row" style="font-weight: bold; border: 1px solid #ccc; width: 8%">
              <q-space />
              <p>1</p>
              <q-space />
            </div>
            <div class="row" style="font-weight: bold; border: 1px solid #ccc; width: 30%">
              <q-space />
              <p>11111111</p>
              <q-space />
            </div>
            <div class="row" style="font-weight: bold; border: 1px solid #ccc; width: 62%">
              <q-space />
              <p>ALARGAMIENTO DE MIEMBRO</p>
              <q-space />
            </div>
          </div>
          <div class="row" style="width: 100%; border-bottom: 1px solid #888">
            <!-- <div class="row" style="width: 100%"> -->
            <div class="row" style="font-weight: bold; border: 1px solid #ccc; width: 8%">
              <q-space />
              <p>2</p>
              <q-space />
            </div>
            <div class="row" style="font-weight: bold; border: 1px solid #ccc; width: 30%">
              <q-space />
              <p>11111111</p>
              <q-space />
            </div>
            <div class="row" style="font-weight: bold; border: 1px solid #ccc; width: 62%">
              <q-space />
              <p>ALARGAMIENTO DE NALGAS</p>
              <q-space />
            </div>
          </div>
        </div>
        <div class="q-mt-lg row">
          <div class="row" style="width: 100%">
            <div class="row" style="font-weight: bold; border: 1px solid #ccc; width: 8%">
              <q-space />
              <p>N°</p>
              <q-space />
            </div>
            <div class="row" style="font-weight: bold; border: 1px solid #ccc; width: 30%">
              <q-space />
              <p>CÓDIGO CIE-10</p>
              <q-space />
            </div>
            <div class="row" style="font-weight: bold; border: 1px solid #ccc; width: 62%">
              <q-space />
              <p>DIAGNÓSTICO MÉDICO</p>
              <q-space />
            </div>
          </div>
          <div class="row" style="width: 100%">
            <div class="row" style="font-weight: bold; border: 1px solid #ccc; width: 8%">
              <q-space />
              <p>1</p>
              <q-space />
            </div>
            <div class="row" style="font-weight: bold; border: 1px solid #ccc; width: 30%">
              <q-space />
              <p>2222222</p>
              <q-space />
            </div>
            <div class="row" style="font-weight: bold; border: 1px solid #ccc; width: 62%">
              <q-space />
              <p>POSITIVO</p>
              <q-space />
            </div>
          </div>
          <div class="row" style="width: 100%; border-bottom: 1px solid #888;">
            <div class="row" style="font-weight: bold; border: 1px solid #ccc; width: 8%">
              <q-space />
              <p>2</p>
              <q-space />
            </div>
            <div class="row" style="font-weight: bold; border: 1px solid #ccc; width: 30%">
              <q-space />
              <p>2222222</p>
              <q-space />
            </div>
            <div class="row" style="font-weight: bold; border: 1px solid #ccc; width: 62%">
              <q-space />
              <p>NEGATIVO</p>
              <q-space />
            </div>
          </div>
        </div>
      </q-form>
    </q-card-section>
  </q-card>
</template>
<script setup>
import { useModuleFormatos, useApiContabilidad, useModuleCon851, useModuleCon851p } from "@/store";
import { ref, defineAsyncComponent, onMounted, watch } from "vue";
import { utilsFormat, separarNombre } from "@/formatos/utils";
import { impresionHC030, impresion, generarArchivo } from "@/impresiones";
import { useRouter } from "vue-router";
import dayjs from "dayjs";

const router = useRouter();
const ContainerFirma = defineAsyncComponent(() => import("@/components/global/containerFirma.vue"));

const { getPaci, getAcomp, getHc, getProf, getEmpresa, getSesion } = useModuleFormatos();
const { getDll$, _getFirma$, _getHuella$, guardarFile$, enviarCorreo$, getEncabezado } = useApiContabilidad();
const { CON851 } = useModuleCon851();
const { CON851P } = useModuleCon851p();

const firma_recibida_acomp = ref("");
const firma_recibida = ref("");

const opcion_lab001 = ref(null);
const llave = ref(null);
const fecha_act = ref(null);
const firma_prof = ref(null);
const huella_paci = ref(null);

const LAB001 = ref({
  // Extras
  tipo_id_cc: false,
  tipo_id_ce: false,
  tipo_id_pa: false,
  tipo_id_pt: false,
  tipo_id_rc: false,
  tipo_id_ti: false,
  primer_apellido: "",
  segundo_apellido: "",
  primer_nombre: "",
  segundo_nombre: "",
});

onMounted(() => {
  fecha_act.value = dayjs(getEmpresa.FECHA_ACT).format("YYYY-MM-DD");
  llave.value = getHc.llave.slice(15);
  console.log(getPaci);
  const nombre_paci = separarNombre(getPaci.descrip);
  LAB001.value.primer_apellido = nombre_paci.uno;
  LAB001.value.segundo_apellido = nombre_paci.dos;
  LAB001.value.primer_nombre = nombre_paci.tres;
  LAB001.value.segundo_nombre = nombre_paci.cuatro;
});
</script>
