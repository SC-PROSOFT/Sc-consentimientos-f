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
          <q-chip :color="reg.opcion_hc006 == 'AUTORIZAR' ? 'green' : 'red'" class="text-white" v-if="reg.opcion_hc006">
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

      <div class="border-format">
        <div class="text-bold text-center">
          CONSENTIMIENTO INFORMADO DEL PADRE, MADRE, O TUTOR, AUTORIZANDO A SU HIJA MENOR PARA VACUNARSE CONTRA EL VIRUS DEL PAPILOMA HUMANO (VPH)
        </div>
        <div class="text-center text-caption q-mt-sm">
          El Ministerio de Salud de Colombia, desde el año 2012, incluyo en el Plan Ampliado de Inmunización – PAI, la vacuna contra el Virus del
          Papiloma Humano – VPH. La cual se ofrece en forma gratuita a las niñas entre 9 a 17 años de edad en los establecimientos de salud del
          territorio nacional.
        </div>
      </div>

      <div class="border-format q-mt-xs">
        <div class="text-bold">BENEFICIOS</div>
        <ul>
          <li>
            Esta vacuna previene la infección por el Virus del Papiloma Humano (VPH) responsable del cáncer de cuello uterino, verrugas genitales y
            otros tipos de cáncer frecuentes en regiones genitales.
          </li>
          <li>
            Para gozar de la protección de la vacuna, es necesario que la niña reciba las 2 dosis de vacuna: La 1ra dosis al primer contacto con la
            niña y la 2da dosis 6 meses después de la primera dosis.
          </li>
        </ul>
      </div>

      <div class="border-format q-mt-xs">
        <div class="text-bold">LA VACUNA ES</div>
        <ul>
          <li>Muy segura</li>
          <li>Previene el cáncer de cuello del útero, pero no cura el cáncer</li>
        </ul>
      </div>

      <q-card flat style="background-color: rgb(198, 194, 194)" class="q-mt-xs">
        <div class="q-pa-sm text-center">
          <span class="text-bold">IMPORTANTE:</span> Toda niña vacunada, igualmente a futuro, debe realizarse control ginecológico regular y la
          realización periódica del Papanicolaou.
        </div>
      </q-card>

      <div class="border-format q-mt-xs">
        <div class="text-bold text-center">POSIBLES REACCIONES DESPUÉS DE LA VACUNACIÓN</div>
        <p>
          <span class="text-bold">La reacción más frecuente es en el sitio de inyección puede ser:</span>
          dolor, enrojecimiento e hinchazón en el lugar de vacunación. Desaparece (sin tratamiento médico) dentro de las 48 horas Otras reacciones
          poco frecuentes son: dolor de cabeza, fatiga, fiebre, náuseas, que desaparecen en las siguientes 48 horas. Si persisten, buscar atención en
          los establecimientos de salud.
        </p>

        <div class="text-bold">Reacciones menos frecuentes no asociadas a la vacuna pero reportadas:</div>
        <ul>
          <li>
            Desmayo: Esta reacción puede producirse por temor o miedo y no por la vacuna propiamente. Para evitar esta reacción se recomienda
            administrar la vacuna a la niña sentada y permanecer así en observación 15 minutos después de la administración de la vacuna.
          </li>
          <li>Reacciones alérgicas como ronchas o picazón que pasan rápidamente. Si persisten, buscar atención en el establecimiento de salud.</li>
        </ul>
      </div>
      <div class="border-format q-mt-xs">
        <div class="text-bold text-center">DECLARACIÓN</div>
        <p>
          Yo {{ getAcomp.descrip }} identificado con N°: {{ getAcomp.cod }} familiar, tutor o representante legal de la niña {{ getPaci.descrip }} ,
          identificada con el No. {{ getPaci.cod }}
          dejo constancia de haber sido informado sobre los beneficios, seguridad y posibles reacciones a la administración de la vacuna contra el
          Virus del Papiloma Humano. Por lo tanto autorizo al Personal de la entidad a vacunar a mi menor hija por voluntad propia y me comprometo a
          completar las 2 dosis que son necesarias para su protección contra el cáncer de cuello uterino.
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
import { useModuleFormatos } from "@/store";
import { ref, defineAsyncComponent, onMounted } from "vue";
import dayjs from "dayjs";

const ContainerFirma = defineAsyncComponent(() => import("@/components/global/containerFirma.vue"));
const { getPaci, getAcomp, getProf, getEmpresa } = useModuleFormatos();

const firma_recibida_acomp = ref("");
const firma_recibida = ref("");
const huella_paci = ref(null);
const firma_prof = ref(null);

const reg = ref({
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

const callBackFirma = (data_firma) => {
  data_firma && (firma_recibida.value = data_firma);
};

const callBackFirmaAcomp = (data_firma) => {
  data_firma && (firma_recibida_acomp.value = data_firma);
};

const validarDatos = () => {};
</script>
