<template>
  <q-card bordered flat class="q-pa-xs">
    <ToolBar_ name="containerFirma" :titulo="quien_firma" :close_state="false" color="blue-grey-13" />
    <q-card-section class="row">
      <q-img
        :class="huella_ ? 'col-8' : 'col-12'"
        style="height: 100px"
        spinner-color="white"
        :src="firma || firma_"
        class="shadow-1"
        fit="contain"
      />
      <q-img v-if="huella_ ? true : false" style="height: 100px" spinner-color="white" class="shadow-1 col-4" :src="huella_" fit="contain" />
    </q-card-section>
    <q-card-actions align="around">
      <q-btn @click="() => (show_firma = true)" class="material-icons" :disable="reg.disable" icon="draw" size="sm" square flat>Firmar </q-btn>
      <q-btn
        v-if="reg.quien_firma.toLowerCase().includes('funcionario')"
        @click="() => (show_consen892 = true)"
        class="material-icons"
        icon="manage_search"
        :disable="disable"
        size="sm"
        square
        flat
      >
        <span class="text-bold">Filtrar</span>
      </q-btn>
    </q-card-actions>
    <div class="text-center">
      <div>{{ reg.firmador }}</div>
      <div>{{ reg.descrip_prof }}</div>
      <div>{{ reg.registro_profe ? `${reg.tipo_doc ? reg.tipo_doc : "Reg ."} ${reg.registro_profe}` : "" }}</div>
    </div>
    <FIRMA v-if="show_firma" @CallBackFirma="CallBackFirma" />
    <CONSEN892 v-if="show_consen892" @esc="CallBackConsen892" @enter="CallBackConsen892" />
  </q-card>
</template>

<script setup>
import { useModuleFormatos, useModuleCon851, useApiContabilidad } from "@/store";
import { ref, defineAsyncComponent, onMounted, computed } from "vue";

const ToolBar_ = defineAsyncComponent(() => import("@/components/global/ToolBarTable.vue"));
const CONSEN892 = defineAsyncComponent(() => import("@/components/consen/CONSEN982.vue"));
const FIRMA = defineAsyncComponent(() => import("./firma.vue"));

const { getDll$, _getHuella$, getImgBs64, _getFirma$, _getImagen$ } = useApiContabilidad();
const { getEmpresa, getPaci, getProf, getTestigo, getSesion, getAcomp } = useModuleFormatos();
const { CON851 } = useModuleCon851();

const emit = defineEmits(["reciFirma", "datosFunc"]);
const show_consen892 = ref(false);

const props = defineProps({
  disable: {
    type: Boolean,
    default: false,
  },
  firmador: {
    type: String,
    default: "Sin asignar",
  },
  firma_: {
    type: String,
    default: "",
  },
  codigo_firma: {
    type: String,
    default: "",
  },
  huella_: {
    type: String,
    default: "",
  },
  descrip_prof: {
    type: String,
    default: "",
  },
  tipo_doc: {
    type: String,
    default: "",
  },
  registro_profe: {
    type: String,
    default: "",
  },
  quien_firma: {
    type: String,
    default: "Sin asignar",
  },
});

const reg = ref({ ...props });
const show_firma = ref(false);
let firma = ref(null);

onMounted(() => {
  getFirmaPaci();
});

const getFirmaPaci = async () => {
  /* Yopal solicita la firma que ya tienen registrada en las actualizaciones del paciente. */
  let existeFirma = null;
  const check_paci = props.quien_firma.toLowerCase().includes("paciente") || false;
  const check_test = props.quien_firma.toLowerCase().includes("testigo") || false;
  const check_prof = props.quien_firma.toLowerCase().includes("profesional") || false;
  const check_acomp = props.quien_firma.toLowerCase().includes("acompañante") || false;
  try {
    if (getEmpresa.unid_prog == "P" && props.codigo_firma) {
      firma.value = await _getFirma$({ codigo: props.codigo_firma });
      existeFirma = firma.value ? firma.value : getImgBs64;
      CallBackFirma(existeFirma);
    }

    if ([900273700, 79635522, 900772776].includes(Number(getEmpresa.nitusu))) {
      if (check_paci) {
        // D:\PSC\PROG\FIRMAS
        firma.value = await _getImagen$({
          codigo: getPaci.cod,
          tipo_test: "1",
        });
      }
      if (check_test) {
        // D:\PSC\PROG\FIRMAS
        firma.value = await _getImagen$({
          codigo: getTestigo.cod,
          tipo_test: getSesion.tipo_testigo,
        });
      }
      if (check_acomp) {
        // D:\PSC\PROG\FIRMAS
        firma.value = await _getImagen$({
          codigo: getAcomp.cod,
          tipo_test: "1",
        });
      }
      existeFirma = firma.value ? firma.value : getImgBs64;
      return CallBackFirma(existeFirma);
    }
    if (Number(getEmpresa.nitusu) == 844003225) {
      if (check_paci) {
        firma.value = await _getImagen$({
          codigo: `P${getPaci.cod}`,
        });

        /* TODO: Lo mejor seria agrega una validacion por cada vista, para no guardar una imagen vacia en el servidor del cliente, queda pendiente */
        existeFirma = firma.value ? firma.value : getImgBs64;
      }
      if (check_prof) {
        firma.value = await _getFirma$({
          codigo: Number(getProf.cod),
        });

        existeFirma = firma.value ? firma.value : getImgBs64;
      }

      if (props.firma_) {
        firma.value = props.firma_;
        return;
      }
      /* Yopal solicita que no es necesario que el paciente firme o tenga firma, entonces ponemos una IMG por defecto */
      CallBackFirma(existeFirma);
    }
  } catch (error) {
    console.error("Verificar si la firma del paciente esta registrada en maestro (YOPAL), ", error);
    CON851("?", "info", "Error consultando firma de paciente");
  }
};

function CallBackFirma(dataF) {
  if (dataF) {
    firma.value = dataF;
    emit("reciFirma", dataF);
  }
  show_firma.value = false;
}

const CallBackConsen892 = (item) => {
  show_consen892.value = false;
  if (item) {
    return leerOper({ cod: item.cod, opc: item.opc });
  }
};

const leerOper = async ({ cod = "", opc = "" }) => {
  try {
    const rest = await getDll$({
      modulo: `get_rest.dll`,
      data: {
        cod,
        opc,
      },
    });

    if ("llave" in rest) {
      reg.value.firmador = rest.id;
      reg.value.descrip_prof = rest.descrip_id;
      return emit("datosFunc", rest);
    } else CON851("?", "info", "No existe operador");
  } catch (error) {
    CON851("?", "info", error);
  }
};
</script>

<style>
.material-icons.md-48 {
  font-size: 20px;
}
</style>
