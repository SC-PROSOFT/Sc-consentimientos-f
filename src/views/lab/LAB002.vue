<template>
  <q-card class="q-mx-auto format q-mb-lg" style="overflow: auto">
    <q-card-section>
      <q-form @submit="validarDatos">
        <DatosFormat :datos="datos" />
        <div class="text-center text-subtitle1 text-bold q-py-xs">NORMATIVIDAD VIGENTE</div>
        <p class="row text-justify">
          DD MM AAAA EDAD CC CE PA PT RC TI N° 1 2 N° 1 2 La administración de sedación es un proceso complejo
          y dinámico, que requiere un monitoreo continuo, pues el grado de sedación al que se somete el
          paciente puede cambiar rápidamente. Los medicamentos empleados para sedación se relacionan con
          eventos adversos, como la hipotensión, la bradicardia, depresión respiratoria, hipoxia, aspiración,
          laringoespasmo, que fácilmente pueden poner en riesgo la vida. La administración de sedación fuera
          de la sala de cirugía incrementa el riesgo de evento adverso, por esto, en UTM el personal
          involucrado en esta práctica tiene las competencias necesarias para garantizar la seguridad del
          procedimiento, la sedación se encuentra dirigida por el médico anestesiólogo, quien además acompaña
          al paciente durante el procedimiento y la recuperación. La Ley 23 de 1981 al referirse a las
          relaciones médico – paciente, en los artículos 14, 15 y 18, advierte la necesidad del consentimiento
          para realizar los diferentes tratamientos medico quirúrgicos que se requieran. Para la resolución
          3100 de 2019 el Consentimiento informado es la aceptación libre, voluntaria y consciente de un
          paciente o usuario, manifestada en el pleno uso de sus facultades, para que tenga a lugar un acto
          asistencial. Para que el consentimiento se considere informado, el paciente o usuario deberá
          entender la naturaleza de la decisión a consentir tras recibir información que le haga consciente de
          los beneficios, riesgos, alternativas e implicaciones del acto asistencial
        </p>
        <div class="text-center text-subtitle1 text-bold q-py-xs">INFORMACIÓN DEL PROCEDIMIENTO</div>
        <p class="row text-justify">
          La sedación es una práctica médica que se puede considerar como una estrategia para mejorar la
          calidad del cuidado proporcionado al paciente, llegando incluso a considerarse como un indicador de
          calidad; se emplea en procedimientos invasivos y no invasivos, de carácter diagnóstico o
          intervencionista. La sedación consiste en la administración de agentes sedantes o disociativos
          (medicamentos) para disminuir el dolor, la ansiedad y la incomodidad que pueden producir los
          procedimientos médicos. La sedación fuera del quirófano hace referencia a la administración de
          sedación en un entorno diferente a las salas de cirugía, una práctica que puede ser usual en
          procedimientos de radiología, intervenciones diagnósticas, procedimientos pediátricos o en pacientes
          psiquiátricos, entre otros.
        </p>
        <div class="text-center text-subtitle1 text-bold q-py-xs">BENEFICIOS</div>
        <p class="row text-justify">
          Con mucha frecuencia la necesidad de obtener imágenes de alta calidad sólo depende de la inmovilidad
          del paciente, como es en el caso de la resonancia magnética o la tomografía axial computarizada;
          estos procedimiento no implicann dolor, pero en situaciones donde el enfermo se encuentra ansioso,
          sufre de claustrofobia o no puede permanecer quieto, las técnicas de sedación o anestesia en
          ocasiones son indispensables para proporcionarle comodidad y seguridad al paciente.
        </p>
        <div class="text-center text-subtitle1 text-bold q-py-xs">RIESGOS</div>
        <p class="row text-justify">
          DD MM AAAA EDAD CC CE PA PT RC TI N° 1 2 N° 1 2 La administración de sedación es un proceso complejo
          y dinámico, que requiere un monitoreo continuo, pues el grado de sedación al que se somete el
          paciente puede cambiar rápidamente. Los medicamentos empleados para sedación se relacionan con
          eventos adversos, como la hipotensión, la bradicardia, depresión respiratoria, hipoxia, aspiración,
          laringoespasmo, que fácilmente pueden poner en riesgo la vida. La administración de sedación fuera
          de la sala de cirugía incrementa el riesgo de evento adverso, por esto, en UTM el personal
          involucrado en esta práctica tiene las competencias necesarias para garantizar la seguridad del
          procedimiento, la sedación se encuentra dirigida por el médico anestesiólogo, quien además acompaña
          al paciente durante el procedimiento y la recuperación.
        </p>
      </q-form>
    </q-card-section>
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

const datos = {
  tipo_id: getPaci.tipo_id,
  active_cups: true,
};

const reg = ref({
  fecha_act: "",
  edad: "",
});

onMounted(() => {
  reg.value.fecha_act = dayjs(getEmpresa.fecha_act).format("YYYY-MM-DD");
  reg.value.edad = calcEdad(getPaci.nacim);
});

function validarDatos() {}
</script>

<style>
table,
th,
td {
  border: 1px solid black;
  border-collapse: collapse;
}
</style>
