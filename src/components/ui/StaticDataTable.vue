<template>
  <div class="q-my-xs row">
    <table class="col-12" v-if="show_label_inputs">
      <tr>
        <th v-for="item in headers" :style="` ${item.headerStyle}`">
          {{ item.label }}
        </th>
      </tr>
      <slot></slot>
    </table>
    <q-table
      :style="`height: ${min_height}; width: ${min_width}`"
      :rows-per-page-options="rows_per_page_options"
      v-model:pagination="pagina"
      class="scroll-table col-12"
      ref="scroll_table"
      :columns="headers"
      separator="cell"
      :filter="filter"
      virtual-scroll
      row-key="name"
      :title="title"
      color="white"
      :rows="data"
      bordered
      dense
      flat
    >
      <template v-slot:no-data="{ icon, message, filter }">
        <div class="full-width row flex-center text-white q-gutter-sm">
          <q-icon size="2em" name="sentiment_dissatisfied" />
          <span> No existen registros </span>
          <q-icon size="2em" :name="filter ? 'filter_b_and_w' : icon" />
        </div>
      </template>

      <template v-slot:header="props">
        <q-tr :props="props">
          <q-th v-for="col in props.cols" :key="col.name" :props="props">
            {{ col.label }}
          </q-th>
          <q-th auto-width v-if="call_delete || call_edit"> Opción</q-th>
          <q-th auto-width v-if="toggle_edit"> Estado</q-th>
        </q-tr>
      </template>
      <template v-slot:body="props">
        <q-tr
          :class="props.pageIndex == item_index - 1 && 'bg-grey-4 text-primary'"
          @dblclick="validarAccion(props.row)"
          :props="props"
          class="cursor"
        >
          <q-td v-for="col in props.cols" :key="col.name" :props="props" class="q-my-none q-py-none">
            <q-badge
              v-if="value_badge?.value && col.name == value_badge.value"
              :color="value_badge.items_opcion[col.value]"
              :label="col.value"
              dense
            />
            <div
              :class="[
                col.negative_color && props?.pageIndex != item_index && col.value?.toString().includes('-') && 'text-red',
                props.pageIndex == item_index - 1 ?? 'desplace botone',
              ]"
              v-else
            >
              {{ col.value }}
            </div>
          </q-td>
          <q-td auto-width v-if="call_delete || call_edit">
            <q-btn
              style="margin-top: 1px; margin-bottom: 1px"
              v-if="call_delete && props.row[value_button]"
              @click="opcEliminar(props.row)"
              class="q-mx-xs botone"
              color="negative"
              size="6px"
              dense
            >
              <q-icon name="delete" />
            </q-btn>
            <q-btn
              style="margin-top: 1px; margin-bottom: 1px"
              v-if="call_edit && props.row[value_button]"
              @click="opcEditar(props.row)"
              class="q-mx-xs botone"
              color="primary"
              size="6px"
              dense
            >
              <q-icon name="edit" />
            </q-btn>
          </q-td>
          <q-td class="text-center" v-if="toggle_edit">
            <q-toggle
              style="margin-top: 1.2px; margin-bottom: 1.2px"
              v-model="props.row[toggle_edit]"
              @click="opcEstado(props.row)"
              unchecked-icon="clear"
              checked-icon="check"
              false-value="N"
              color="primary"
              true-value="S"
              dense
            />
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>

<script setup>
import { watch, ref } from "vue";
const props = defineProps({
  filter: [String, Number],
  show_label_inputs: Boolean,
  rows_per_page_options: {
    type: Array,
    default: () => [0],
  },
  value_badge: {
    value: String,
    items_opcion: Object,
  },
  call_delete: Boolean,
  value_button: String,
  toggle_edit: String,
  call_edit: Boolean,
  min_height: String,
  item_index: Number,
  min_width: String,
  text_info: Array,
  headers: Array,
  title: String,
  data: Array,
});
const pagina = ref(null);
const emit = defineEmits(["deleteRow", "editRow", "estadoRow", "selectRow"]);
const scroll_table = ref(null);

watch(
  () => props.item_index,
  (index) => {
    scrollToItemIndex(index);
  }
);

const validarAccion = (item) => emit("selectRow", item);
const opcEliminar = (item) => emit("deleteRow", item);
const opcEstado = (item) => emit("estadoRow", item);
const opcEditar = (item) => emit("editRow", item);

const scrollToItemIndex = (index) => {
  if (scroll_table.value) {
    const rows = scroll_table.value.$el.querySelectorAll("tr");
    if (rows.length > index) {
      const target_row = rows[index - 10];
      if (target_row) target_row.scrollIntoView({ behavior: "smooth" });
    }
  }
};
</script>
<style lang="sass">
.q-my-xs table
  width: 100%
  border-collapse: collapse

.q-my-xs tr:nth-child(odd)
  background-color: #f2f2f2

.q-table--dense .q-table thead tr, .q-table--dense .q-table tbody tr, .q-table--dense .q-table tbody td
  height: 10px

.scroll-table
  height: 410px
  .q-table__top,
  .q-table__bottom,
  thead tr:first-child th
    background-color: #123D7D
    font-size: 11px
    color: white
  thead tr th
    position: sticky
    z-index: 1
  thead tr:last-child th
    top: 48px
  thead tr:first-child th
    top: 0
  tbody
    scroll-margin-top: 48px
.desplace
    transition: transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)

.desplace.botone
    transform: translateX(3px)

tr:nth-child(even)
   // background-color: #f7f7f7
tr > th
    border-bottom: 1px solid #123d7d
    background-color: #123d7d
    text-overflow: ellipsis
    white-space: nowrap
    overflow: hidden
    font-size: 11px
    color: white
    flex: 1
tr:hover
    background-color: #e7e7e7

tr, td
    height: 1px
    margin-top: 0px

.q-table tbody td
      font-size: 11px

.q-table--dense .q-table th, .q-table--dense .q-table td
        padding-top: 0px
        padding-bottom: 0px

.q-table--dense .q-table tbody tr, .q-table--dense .q-table tbody td
  height: 15px
.q-table--dense .q-table__bottom
  height: 15px
  min-height: 25px
  align-content: center
</style>
