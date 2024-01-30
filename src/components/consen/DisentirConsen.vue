<template>
  <q-dialog v-model="consen.estado" persistent no-shake>
    <q-card class="my-card">
      <ToolBarTable_ :titulo="`DISENTIR ${reg_consen.reg_coninf.datos_encab.descrip}`" @cerrar="cerrar" />
      <div class="row q-pa-sm">
        <Toggle_
          class="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 q-my-md"
          width_label="col-xs-9 col-sm-9 col-md-9 col-lg-9 col-xl-9"
          width_input="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3"
          v-model="reg_consen.firma_paciente"
          :field="form_config.firma_paciente"
        />
        <ContainerFirma_
          :disable="!firmador.descrip ? true : false"
          quien_firma="FIRMA PACIENTE O ACOMPAÑANTE"
          :firmador="firmador.descrip"
          :registro_profe="firmador.cod"
          @reciFirma="callBackFirma"
          class="col-12"
        />
        <TextArea_
          class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"
          v-model="reg_consen.obser_disenti"
          :field="form_config.obser_disenti"
        />
      </div>
      <q-card-actions align="center" class="text-primary text-center">
        <q-btn
          id="boton2"
          color="green"
          label="Guardar"
          class="botone q-mx-sm"
          icon-right="check_circle"
          @click="validarConfiguracion"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
import ToolBarTable_ from "@/components/global/ToolBarTable.vue";
import { useModuleCon851, useModuleCon851p, useApiContabilidad, useModuleFormatos } from "@/store";
import { ref, onMounted, defineAsyncComponent, computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import { foco_ } from "@/setup";

const ContainerFirma_ = defineAsyncComponent(() => import("@/components/global/containerFirma.vue"));

const { getSesion, getPaci, getAcomp } = useModuleFormatos();
const { getDll$, guardarFile$ } = useApiContabilidad();
const { CON851P } = useModuleCon851p();
const { CON851 } = useModuleCon851();

const router = useRouter();
const route = useRoute();

const props = defineProps({ consen: Object });
const emit = defineEmits(["cerrar", "guardar"]);

const firma_disentimiento = ref(null);
const llave_conse = ref(null);
const reg_consen = ref({
  firma_paciente: null,
  obser_disenti: null,
});
const form_config = ref({
  obser_disenti: {
    id: "obser_disenti",
    label: "Observación",
    placeholder: "Escribe una observación",
    maxlength: "60",
    f0: ["f3"],
    required: true,
    campo_abierto: true,
  },
  firma_paciente: {
    id: "firma_paciente",
    label: "¿Firma el paciente?",
    f0: ["f3"],
    required: true,
    campo_abierto: true,
  },
});

const firmador = computed(() => {
  if (reg_consen.value.firma_paciente == "S") return getPaci;
  return getAcomp;
});

onMounted(() => {
  console.log(props.consen);
  Object.assign(reg_consen.value, props.consen);
  llave_conse.value = `${reg_consen.value.reg_coninf.llave.id}${reg_consen.value.reg_coninf.llave.folio}${reg_consen.value.reg_coninf.llave.fecha}${reg_consen.value.reg_coninf.llave.hora}${reg_consen.value.reg_coninf.llave.oper_elab}`;
  validarAcomp();
});

const validarAcomp = () => {
  if (!getSesion.id_acompa) {
    reg_consen.value.firma_paciente = "S";
    form_config.value.firma_paciente.disable = true;
  }
};

const validarConfiguracion = () => {
  const camposo_bligatorios = [
    { nombre: "quien firma", campo: "firma_paciente" },
    { nombre: "observación", campo: "obser_disenti" },
  ];

  for (const campo_info of camposo_bligatorios) {
    const valorCampo = reg_consen.value[campo_info.campo];
    if (!valorCampo) {
      return CON851("02", "info", campo_info.nombre, () => foco_(form_config, campo_info.campo));
    }
  }
  guardarDisentimiento();
};

const cerrar = () => emit("cerrar");

const callBackFirma = (data_firma) => {
  data_firma && (firma_disentimiento.value = data_firma);
};

const guardarDisentimiento = async () => {
  const datos_format = JSON.parse(JSON.stringify(reg_consen.value.reg_coninf));

  let datos = {
    estado: "3",
    ...datos_format,
    disentimiento: "S",
    ...datos_format.datos,
    oper_disent: getSesion.oper,
    cod_consen: datos_format.cod,
    llave_consen: llave_conse.value,
    paren_acomp: datos_format.paren_acomp,
    cod_med: reg_consen.value.reg_prof.cod,
    oper_consen: datos_format.llave.oper_elab,
    obser_disenti: reg_consen.value.obser_disenti,
    acompa_disenti: reg_consen.value.firma_paciente == "S" ? "N" : "S",
    id_acomp: getAcomp.cod ? getAcomp.cod.padStart(15, "0") : "0".padStart(15, "0"),
  };

  getDll$({ modulo: `save_consen.dll`, data: { ...datos } })
    .then((data) => {
      if (data?.llave_consen) {
        console.log("llave", data?.llave_consen);
        return guardarFirmaDisentimiento(data.llave_consen);
      }
      CON851("?", "error", "Error al guardar el consentimiento");
    })
    .catch((error) => {
      console.error(error);
      CON851("?", "error", "Error al guardar el consentimiento");
    });
};

const guardarFirmaDisentimiento = async () => {
  try {
    if (!firma_disentimiento.value) {
      return CON851("?", "info", "No se ha realizado la firma del disentimiento");
    }

    if (reg_consen.value.firma_paciente == "S")
      await guardarFile$({ base64: firma_disentimiento.value, codigo: `DP${llave_conse.value}` });
    else await guardarFile$({ base64: firma_disentimiento.value, codigo: `DA${llave_conse.value}` });

    CON851P("?", "success", "Disentimiento registrado, desea ir a reimprimir ?", null, async () => {
      await router.push({ name: "menu", query: { ...route.query, novedad: 2 } });
      setTimeout(() => location.reload(), 300);
    });
  } catch (error) {
    console.error(error);
    CON851("?", "info", error);
  }
};
</script>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 800px
  border-radius: 0.5rem
</style>
