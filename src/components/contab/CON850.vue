<template>
  <div class="row justify-center q-pt-sm">
    <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3">
      <q-card class="q-mx-sm text-center">
        <div class="q-pa-sm">
          <div class="text-bold text-primary">
            <q-icon :name="estructura.icon" :color="estructura.color" size="1.8em" />
            {{ estructura.label }}
          </div>
        </div>
      </q-card>
    </div>
  </div>
  <q-dialog v-model="props.modal_novedad" persistent no-shake>
    <q-card class="my-card">
      <div class="text-center text-bold q-mt-md text-h6 text-primary">NOVEDAD</div>
      <q-separator class="q-mx-md q-mt-xs"></q-separator>
      <q-list color="primary" class="q-pa-md text-primary">
        <q-item
          :class="[
            item_activo == index_tabla ? 'desplace text-primary bg-blue-grey-1' : 'text-black text-subtitle2',
          ]"
          v-for="(item_tabla, index_tabla) in tipo_novedades"
          style="min-height: 2px; border-radius: 0.2rem"
          @click="selectClickRow(item_tabla)"
          class="botone row"
          manual-focus
          clickable
          active
          exact
        >
          <q-item-section class="q-my-xs">
            <q-item-label class="text-bold">
              {{ `${item_tabla.label}` }}
            </q-item-label>
          </q-item-section>
          <q-item-section avatar>
            <q-icon size="xs" :color="item_tabla.color" :name="item_tabla.icon" />
          </q-item-section>
        </q-item>
      </q-list>
    </q-card>
  </q-dialog>
</template>
<script setup>
import { ref, computed, watch, onMounted, onBeforeUnmount } from "vue";
const props = defineProps({
  modal_novedad: Boolean,
  tipo_novedad: [String, Number],
});

const item_activo = ref(0);
const tipo_novedades = ref([
  {
    label: " 7. N U E V O",
    icon: "add_box",
    color: "green",
    value: 7,
  },
  {
    label: "8. C A M B I O",
    icon: "edit_square",
    color: "primary",
    value: 8,
  },
  {
    label: "9. R E T I R O",
    icon: "delete_forever",
    color: "red",
    value: 9,
  },
  {
    label: "F. F I N",
    icon: "undo",
    color: "grey",
    value: "f",
  },
]);

const emit = defineEmits(["validar"]);

watch(props, (new_value) => {
  new_value.modal_novedad ? iniciarEventos() : cancelarEventos();
});
const estructura = computed(() => tipo_novedades.value[item_activo.value]);
onMounted(() => {
  props.tipo_novedad && validarTipoInicial();
  props.modal_novedad && iniciarEventos();
});
onBeforeUnmount(() => cancelarEventos());

const iniciarEventos = () => {
  document.addEventListener("keydown", checkKey);
};
const cancelarEventos = () => {
  document.removeEventListener("keydown", checkKey);
};
const validarTipoInicial = () => {
  item_activo.value = tipo_novedades.value.findIndex((x) => x.value == props.tipo_novedad);
  const find = tipo_novedades.value.find((e) => e.value == props.tipo_novedad);
  emit("validar", find);
};

const checkKey = ({ which, key }) => {
  if (["7", "8", "9", "f"].includes(key)) {
    item_activo.value = tipo_novedades.value.findIndex((x) => x.value == key);
    const find = tipo_novedades.value.find((e) => e.value == key);
    emit("validar", find);
  }
  switch (which) {
    case 38:
      if (item_activo.value == 0) return;
      return item_activo.value--;
    case 40:
      if (item_activo.value >= tipo_novedades.value.length - 1) return;
      return item_activo.value++;
    case 13:
      if ([null].includes(item_activo.value)) return;
      return emit("validar", tipo_novedades.value[item_activo.value]);
    case 27:
      const find = tipo_novedades.value.find((e) => e.value == "f");
      return emit("validar", find);
  }
};
const selectClickRow = (item_tabla) => {
  item_activo.value = tipo_novedades.value.findIndex((x) => x.value == item_tabla.value);
  emit("validar", item_tabla);
};
</script>

<style lang="sass" scoped>
.desplace
  transition: transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)

.desplace.botone
  transform: translateX(3px)

.my-card
  width: 100%
  max-width: 250px
</style>
