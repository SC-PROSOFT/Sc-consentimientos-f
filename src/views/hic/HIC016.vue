<template>
  <q-card class="q-mx-auto format q-mb-lg" style="overflow: auto">
    <q-card-section>
      <div class="text-center">
        <q-toggle
          v-model="reg.opcion_hc016"
          color="primary"
          keep-color
          false-value="REVOCAR"
          true-value="AUTORIZAR"
          unchecked-icon="block"
          checked-icon="check_circle"
          label="¿Autorizar o revocar este consentimiento?"
        />
        <p :class="reg.opcion_hc016 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
          <q-chip
            :color="reg.opcion_hc016 == 'AUTORIZAR' ? 'green' : 'red'"
            class="text-white"
            v-if="reg.opcion_hc016"
          >
            {{ reg.opcion_hc016 }}
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
      <div class="text-bold text-center">CONSENTIMIENTO INFORMADO PARA DILATACION BAJO CICLOPEJIA</div>
      <div class="text-bold text-center text-caption">(En cumplimiento de la ley 23 de 1981)</div>
      <div class="text-bold text-center q-mt-md">DESCRIPCION DEL PROCEDIMIENTO</div>
      <div class="q-mt-xs">
        <p>
          Este procedimiento consiste en la aplicación de medicamentos (Que pueden producir ardor en el
          momento de aplicación) los cuales dilatan y paralizan la pupila del paciente, causando visión
          borrosa y molestia a la luz, su efecto es transitorio de horas, aunque en algunos casos su efecto
          puede durar varios días después de su aplicación. Por estas razones es requisito acudir acompañado
          de una persona responsable que colabore con su movilización después del procedimiento. El objetivo
          de procedimiento es conocer de forma más exacta el defecto visual que debe ser corregido con
          anteojos o lentes de contacto, y poder evaluar las estructuras internas del ojo.
        </p>
        <p>
          Los medicamentos utilizados para este procedimiento pueden ocasionar además de los ya mencionados,
          rubor y calor en el rostro, somnolencia y en algunas ocasiones dolor de cabeza momentáneo.
        </p>
        <p>
          Estos medicamentos NO deben ser aplicados en los pacientes que tengan las siguientes condiciones
        </p>
        <ul>
          <li>Síndrome compulsivo</li>
          <li>Epilepsia</li>
          <li>Enfermedades de corazón</li>
          <li>Enfermedades de pulmón (Asma, Bronquitis, etc.)</li>
          <li>Gripa aguda</li>
          <li>Alternaciones neurológicas severas</li>
        </ul>
        <p class="text-bold">¿Que son las gotas cicloplejias?</p>
        <p>Hay dos tipo de gotas:</p>
        <ul>
          <li>
            Unas que fundamentalmente dilatan la pupila (midriasis) y que se usan para ver el fondo del ojo.
          </li>
          <li>
            Otras que además de lo anterior relajan los músculos que enfocan el cristalino y que se usan para
            graduar la refracción de las personas.
          </li>
        </ul>
        <p class="text-bold">¿Para qué se utilizan?</p>
        <ul>
          <li>Para ver la necesidad y potencia de los lentes de gafas fundamentalmente en niños.</li>
          <li>Para ver el fondo del ojo.</li>
        </ul>
        <p class="text-bold">Posologia</p>
        <p>
          Dependiendo del tipo de gota y de las características de cada niño/adulto el número de gotas que se
          aplica, dadas sus condiciones como en las personas de ojos claros el efecto es más rápido y se hace
          uso de menor dosis (1 gota) mientras que en los ojos más oscuros el efecto es retardado, por tanto,
          se precisa de más dosificación (2 gotas) en ocasiones.
        </p>
        <p class="text-bold">¿Cuanto dura el efecto?</p>
        <p>
          Depende del tipo de gota y de factores individuales entre 4 a 12 horas o 1 a 3 días. La mayoría de
          los niños les dura 24 - 48 horas. Algunas gotas como la atropina pueden durar entre una a dos
          semanas.
        </p>
        <p class="text-bold">Efectos segundarios</p>
        <p>
          Sensación de ardor, es momentáneo. Añadimos una gota de anestesia antes de las gotas de cicloplejia
          para minimizar esta sensación de ardor.
        </p>
        <p>
          Fotofobia (molestias con la luz). Desaparece gradualmente con la recuperación de la pupila.
          Aconsejamos evitar grandes exposiciones a la luz solar. La fotofobia mejora llevando gafas de sol o
          una gorra en la calle. Si es posible se debe evitar actividades al exterior durante los días que
          dure la cicloplejia para evitar las molestias.
        </p>
        <p>
          Visión borrosa o dificultad en el enfoque especialmente de cerca. Desaparece gradualmente con la
          recuperación de la pupila. Se debe avisar al colegio sobre la dificultad de lectura durante las
          primeras 24 horas. Si son miopes pueden probar a quitarse las gafas para ver si puede así
          facilitarse la lectura durante este tiempo. Los adultos deben evitar conducir con la pupila
          dilatada.
        </p>
        <p>
          Es frecuente que los niños se pongan rojos y somnolientos con las gotas sobre todo los más pequeños.
        </p>
        <p>
          Es infrecuente que tengamos reales reacciones alérgicas (ojos inflamados y rojos). Ocasionalmente se
          puede presentar con atropina fiebre, sequedad de boca, enrojecimiento facial y taquicardia. Ante
          cualquier problema avise al especialista.
        </p>
      </div>
      <div class="text-bold text-center">AUTORIZACIÓN (CONSENTIMIENTO)</div>
      <div>
        <p>
          Yo, <InputF_ v-model="getPaci.descrip" width="300" />, identificado con documento N°:
          <InputF_ v-model="reg_firmador.cod" /> de
          <InputF_ v-model="reg_firmador.descrip_ciudad" width="300" /> y en nombre propio he entendido las
          condiciones y objetivos del procedimiento que se me va a practicar en ATENCION MEDICA DEL COLOMBIA
          SAS., los cuidados que debo tener antes y después de él. He sido advertido sobre los riesgos
          previsibles que pueden presentarse por la administración del medicamento. Estoy satisfecho (a) con
          la información recibida del profesional tratante quien lo ha hecho en un lenguaje claro y sencillo,
          y me ha dado la oportunidad de preguntar y resolver las dudas a satisfacción, además comprendo y
          acepto el alcance y los riesgos justificados de posible o imposible previsión que conlleva el
          procedimiento que aquí autorizo. En tales condiciones consiento que se me realice el procedimiento
          descrito.
        </p>
        <p>Certifico con mi firma todo lo leído y entendido por mi integridad.</p>
      </div>

      <div class="text-bold text-center">
        DECLARACION DEL REPRESENTANTE LEGAL, FAMILIAR, TUTOR O ACUDIENTE DEL PACIENTE:
      </div>
      <div>
        <p>
          Se que el paciente por sus condiciones de ____________________ es considerado por ahora incapaz de
          tomar por si mismo la desición de aceptar o rechaza el procesimiento antes indicado, por lo cual, YO
          identificado con documento de identidad N° en calidad de (colocar parentesco o tipo de
          representatividad legal) doy mi consentimiento para que el(los) Profesional(es) y el personal
          auxiliar que el precise, efectúen el procedimiento antes descrito, y los procedimientos
          complementarios que sean necesarios durante la realización de este, a juicio del (los)
          profesional(es) que lo lleve(n) a cabo.
        </p>
      </div>
      <div class="text-bold text-center">DECLARACION DEL PROFESIONAL TRATANTE.</div>
      <div>
        <p>
          Medico(s) responsable(s): <InputF_ v-model="getProf.descrip" width="300" /> he informado al Paciente del propósito y naturaleza del procedimiento
          descrito arriba, de sus alternativas, posibles riesgos y de los resultados que se esperan. Considero
          que el (la) paciente, comprende completamente lo explicado.
        </p>
        <p>
          Considero que el (la) paciente y/o familiares o tutor legal, comprende(n) completamente lo
          explicado.
        </p>
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

const reg_firmador = ref(getAcomp.cod ? getAcomp : getPaci);
const acudiente_de = ref(getAcomp.cod ? getPaci.descrip : "");
const firma_recibida_acomp = ref("");
const firma_recibida = ref("");
const huella_paci = ref(null);
const firma_prof = ref(null);

const reg = ref({
  //   extras
  opcion_hc016: "",
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
