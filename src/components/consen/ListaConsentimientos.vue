<template>
  <q-card class="my-card">
    <q-table
      title="Generar consentimiento"
      :rows-per-page-options="[10]"
      @row-dblclick="selectConsen"
      :rows="lista_maestros"
      :columns="columns"
      row-key="COD_MAE"
      bordered
      dense
      flat
    >
      <template v-slot:header="props">
        <q-tr :props="props">
          <q-th auto-width />
          <q-th v-for="col in props.cols" :key="col.name" :props="props">
            {{ col.label }}
          </q-th>
        </q-tr>
      </template>

      <template v-slot:body="props">
        <q-tr :props="props" @dblclick="selectConsen(props.key)" class="cursor">
          <q-td auto-width>
            <q-btn @click="selectConsen(props.key)" icon="note_add" class="botone" color="primary" size="sm">
              <q-tooltip
                class="bg-red text-white shadow-4"
                anchor="top middle"
                self="bottom middle"
                :offset="[0, 10]"
                >Realizar consentimiento {{ props.row["DESCRIP"] }}</q-tooltip
              >
            </q-btn>
          </q-td>
          <q-td v-for="col in props.cols" :key="col.name" :props="props">
            {{ col.value?.toUpperCase() }}
          </q-td>
        </q-tr>
      </template>

      <template v-slot:no-data="{ icon, message, filter }">
        <div class="full-width row flex-center text-accent q-gutter-sm">
          <q-icon size="2em" name="sentiment_dissatisfied" />
          <span> No existen registros </span>
          <q-icon size="2em" :name="filter ? 'filter_b_and_w' : icon" />
        </div>
      </template>
    </q-table>
  </q-card>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useApiContabilidad } from "@/store";

const router = useRouter();
const { getDll$ } = useApiContabilidad();
const lista_maestros = ref([]);
const columns = [
  { name: "cod_mae", label: "Codigo", align: "left", field: "COD_MAE" },
  { name: "descrip", label: "Nombre", align: "left", field: "DESCRIP" },
];

onMounted(() => {
  getMaestros();
});
const getMaestros = async () => {
  try {
    const response = await getDll$({
      ip: "34.234.185.158",
      modulo: `get_maeconsen.dll`,
      data: { modulo: "HIC" },
    });
    lista_maestros.value = response;
  } catch (error) {
    CON851("?", "info", error);
  }
};
const selectConsen = async (data) => {
  router.push({ name: data });
};
</script>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 1200px
  border-radius: 0.5rem
</style>
