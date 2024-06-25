<template>
  <q-card class="q-mx-auto format q-mb-lg" style="overflow: auto">
    <q-card-section>
      <div class="text-center">
        <q-toggle
          v-model="reg.opcion_hc006"
          color="primary"
          keep-color
          false-value="REVOCAR"
          true-value="AUTORIZAR"
          unchecked-icon="block"
          checked-icon="check_circle"
          label="¿Autorizar o revocar este consentimiento?"
        />
        <p :class="reg.opcion_hc006 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
          <q-chip
            :color="reg.opcion_hc006 == 'AUTORIZAR' ? 'green' : 'red'"
            class="text-white"
            v-if="reg.opcion_hc006"
          >
            {{ reg.opcion_hc006 }}
          </q-chip>
        </p>
      </div>
      <div class="row q-mb-md">
        <Input_
          :modelValue="dayjs(getEmpresa.fecha_act).format('YYYY-MM-DD') + ' ' + dayjs().format('HH:mm')"
          :field="form.fecha_act"
          style="padding-left: 0"
        />
      </div>

      <div class="text-bold text-center">FORMATO DE CONSTANCIA DE SERVICIOS RECIBIDOS</div>
      <div>
        <p>
          Yo <InputF_ v-model="getPaci.descrip" width="300" />, identificado con el documento N°:
          <InputF_ v-model="getPaci.cod" /> de <InputF_ v-model="getPaci.descrip_ciudad" />, manifiesto bajo
          la gravedad de juramento que recibí los servicios que consta en la Factura número
          <InputF_ v-model="getPaci.descrip" width="300" />
        </p>
        <div>
          <q-checkbox
            true-value="S"
            false-value="N"
            left-label
            class="col-12 q-px-md"
            v-model="reg.consulta_ext"
            label="Sospecha clinica"
          />
          <q-checkbox
            true-value="S"
            false-value="N"
            left-label
            class="col-12 q-px-md"
            v-model="reg.hospitaliza"
            label="Sospecha clinica"
          />
          <q-checkbox
            true-value="S"
            false-value="N"
            left-label
            class="col-12 q-px-md"
            v-model="reg.urgencias"
            label="Sospecha clinica"
          />
          <q-checkbox
            true-value="S"
            false-value="N"
            left-label
            class="col-12 q-px-md"
            v-model="reg.ayudas_diag"
            label="Sospecha clinica"
          />
        </div>
        <p>
          En {{ getEmpresa.nomusu }} . Lo anterior en cumplimiento a la Resolución 3047 de 2008, numeral 8,
          literal A del anexo técnico 5.
          <br />
          Dado en {{ getEmpresa.dirusu }}, a los
          {{ dayjs().day() }}
          días, del mes de
          {{ dayjs().month() }}
          del año
          {{ dayjs().year() }}
        </p>
      </div>
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
          :disable="reg.opcion_hic001 ? false : true"
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

const firma_recibida_acomp = ref("");
const firma_recibida = ref("");
const huella_paci = ref(null);
const firma_prof = ref(null);

const reg = ref({
  consulta_ext: "N",
  ayudas_diag: "N",
  hospitaliza: "N",
  urgencias: "N",

  //   extras
  opcion_hc006: "",
  hora_act: "",
  fecha_act: "",
});

const form = ref({
  fecha_act: {
    id: "fecha_act",
    label: "Fecha y hora",
    maxlength: "95",
    required: true,
    campo_abierto: false,
    disable: true,
  },
});

onMounted(() => {
  reg.value.fecha_act = dayjs(getEmpresa.fecha_act).format("YYYY-MM-DD");
  reg.value.hora_act = dayjs().format("HH:mm");
});
</script>
