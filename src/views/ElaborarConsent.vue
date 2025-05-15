<template>
  <div class="row q-mt-lg my-card justify-center">
    <Input_ class="q-mt-xs col-xs-2" v-model="reg_elab_cons.id_paciente" :field="form_elab_cons.id_paciente" />
    <TextCard_ class="q-mt-xs col-xs-4" v-model="reg_paci.descrip" :field="form_elab_cons.nom_paci" />
    <div class="q-mt-lg">
      <q-btn id="boton2" color="green" label="Buscar" icon-right="search" @click="buscarPaciente" />
    </div>
  </div>

  <div v-if="lista_consen.length" class="row q-mt-lg my-card justify-center">
    <div class="col-xs-11">
      <q-table title="Comprobantes" :rows-per-page-options="[10]" :columns="columns_consen" :rows="lista_consen" row-key="llave" bordered dense flat>
        <template v-slot:header="props">
          <q-tr :props="props">
            <q-th auto-width class="bg-primary text-white"> Elegir </q-th>
            <q-th v-for="col in props.cols" :key="col.name" :props="props" class="bg-primary text-white">
              {{ col.label }}
            </q-th>
            <q-th auto-width class="bg-primary text-white"> Ver articulos </q-th>
          </q-tr>
        </template>

        <template v-slot:body="props">
          <q-tr :props="props" @dblclick="selecComprobante(props)" class="cursor">
            <q-td auto-width>
              <q-btn @click="selecComprobante(props)" icon="receipt_long" class="q-ma-xs botone" color="primary" size="sm"> </q-btn>
            </q-td>
            <q-td v-for="col in props.cols" :key="col.name" :props="props">
              <div>{{ col.value }}</div>
            </q-td>
            <q-td auto-width>
              <q-btn @click="mostrarArticulos(props.row)" icon="visibility" class="q-ma-xs botone" color="primary" size="sm" />
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
    </div>
  </div>
  <q-dialog v-model="show_artic_comp" persistent no-shake>
    <q-card
      class="my-card"
      :style="{
        width: '620px',
        maxWidth: '90vw',
      }"
    >
      <ToolBarTable_ :titulo="'Artículos del comprobante ' + llave_comp" @cerrar="show_artic_comp = false" />
      <q-card-section>
        <q-table :rows-per-page-options="[5]" :rows="lista_artic" :columns="columns_artic" row-key="codigo" bordered dense flat>
          <template v-slot:header="props">
            <q-tr :props="props">
              <q-td v-for="col in props.cols" :key="col.name" :props="props" class="bg-primary text-white">
                {{ col.label }}
              </q-td>
            </q-tr>
          </template>
          <template v-slot:body="props">
            <q-tr :props="props">
              <q-td v-for="col in props.cols" :key="col.name" :props="props">
                <div>{{ col.value }}</div>
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
      </q-card-section>
    </q-card>
  </q-dialog>

  <q-dialog v-model="show_autoriza_consen" persistent>
    <q-card
      class="my-card"
      bordered
      :style="{
        'border-left': `4px solid #123D7D`,
        'border-radius': '15px',
        width: '490px',
        maxWidth: '90vw',
      }"
    >
      <div class="row">
        <div class="col-xs-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 q-my-auto">
          <LottieAnimation
            :animation-data="info"
            style="height: 110px"
            :loopDelayMin="2.5"
            :auto-play="true"
            :loopDelayMax="5"
            class="q-mt-20"
            :loop="true"
            :speed="1"
            ref="anim"
          />
        </div>
        <div class="col-xs-12 col-sm-9 col-md-9 col-lg-9 col-xl-9">
          <q-card-section class="q-pb-sm">
            <div :class="`text-info text-center`" class="text-h5 text-bold">¡Atención!</div>
            <q-separator color="info" class="q-pb-xs" />
          </q-card-section>
          <q-card-section class="q-pt-none text-center text-h7" v-html="mensaje_1"> </q-card-section>
          <q-card-actions align="center" class="text-primary text-center">
            <q-btn outline id="boton1" color="red-14" label="Cancelar" class="botone q-mx-sm" @click="cancelarAutoriza" :color="'#123D7D'" />
            <q-btn outline id="boton2" color="primary" label="Paciente" class="botone q-mx-sm" @click="autorizaPaci" />
            <q-btn outline id="boton3" color="orange" label="Acompañante" class="botone q-mx-sm" @click="autorizaAcomp" :color="'#123D7D'" />
          </q-card-actions>
        </div>
      </div>
    </q-card>
  </q-dialog>
  <q-dialog v-model="show_valida_acomp" persistent no-shake>
    <q-card
      class="my-card"
      :style="{
        width: '800px',
        maxWidth: '90vw',
      }"
    >
      <ToolBarTable_ titulo="Datos del acompañante" @cerrar="cerrarVentAcomp" />
      <div class="row q-pa-sm">
        <Select_ class="col-xs-4" v-model="paren_acomp.select" :field="paren_acomp.paren_acomp_form" :items="paren_acomp.items" />
        <Input_ class="col-xs-3" v-model="reg_elab_cons.id_acomp" :field="form_elab_cons.id_acomp" />
        <Select_ class="col-xs-5" v-model="tipo_id_acomp.select" :field="tipo_id_acomp.tipo_id_form" :items="tipo_id_acomp.items" />
        <Input_ class="col-xs-4" v-model="reg_acomp.er_apel" :field="form_acomp.er_apel" />
        <Input_ class="col-xs-4" v-model="reg_acomp.do_apel" :field="form_acomp.do_apel" />
        <Input_ class="col-xs-4" v-model="reg_acomp.er_nom" :field="form_acomp.er_nom" />
        <Input_ class="col-xs-4" v-model="reg_acomp.do_nom" :field="form_acomp.do_nom" />
        <Input_ class="col-xs-5" v-model="reg_acomp.email" :field="form_acomp.email" />
        <Input_ class="col-xs-3" v-model="reg_acomp.telefono" :field="form_acomp.telefono" />
        <Input_ class="col-xs-12" v-model="reg_acomp.direccion" :field="form_acomp.direccion" />
      </div>
      <q-card-actions align="center" class="text-primary text-center">
        <q-btn color="orange" label="Cambiar datos" class="botone q-mx-sm" icon-right="manage_accounts" @click="guardarCambiosDtosAcomp" />
        <q-btn color="green" label="Continuar" class="botone q-mx-sm" icon-right="output" @click="continuar" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { useModuleCon851, useApiContabilidad, useModuleFormatos, useModuleCon851p } from "@/store";
import ToolBarTable_ from "@/components/global/ToolBarTable.vue";
import { ref, onBeforeMount, defineAsyncComponent } from "vue";
import { useRouter } from "vue-router";
import { validarCodPaci, replaceEsp, enterReplace } from "@/formatos/utils";
import { regPaci, regAcomp } from "@/fuentes";
import { LottieAnimation } from "lottie-web-vue";
import info from "@/assets/json/info.json";
const { CON851P } = useModuleCon851p();
const router = useRouter();
const { getDll$ } = useApiContabilidad();
const { CON851 } = useModuleCon851();
const { datosh } = useModuleFormatos();

const show_ser810 = ref(false);
const show_autoriza_consen = ref(false);
const show_valida_acomp = ref(false);
const show_artic_comp = ref(false);

const firma_acomp = ref(false);
const reg_usunet = ref(null);
const reg_paci = ref(regPaci());
const reg_acomp = ref(regAcomp());
const reg_acomp_copia = ref(regAcomp());
const comp_selec = ref("");
const mensaje_1 = ref("¿Quién autoriza el consentimiento?");
const llave_comp = ref("");

const lista_consen = ref([]);
const lista_artic = ref([]);
const tabla_articulos = ref(JSON.parse(JSON.stringify(Array(2).fill({ codigo: "", descripcion: "" }))));
const tabla_diagnosticos = ref(JSON.parse(JSON.stringify(Array(2).fill({ codigo: "", descripcion: "" }))));

const tipo_id_acomp = ref({
  select: "",
  items: [
    { value: "CC", label: "CEDULA CIUDADANIA" },
    { value: "CE", label: "CEDULA EXTRANJERIA" },
    { value: "PA", label: "NUMERO PASAPORTE" },
    { value: "RC", label: "REGISTRO CIVIL" },
    { value: "TI", label: "TARJETA IDENTIDAD" },
    { value: "ASI", label: "ADULTO SIN IDENTIDAD" },
    { value: "MSI", label: "MENOR SIN IDENTIDAD" },
    { value: "NUI", label: "NUM UNICO IDENTIDAD NUID" },
    { value: "CD", label: "CARNET DIPLOMA" },
    { value: "SC", label: "SALVO CONDUCTO" },
    { value: "PE", label: "PERMISO ESPECIAL PERM" },
    { value: "CN", label: "CERTIFICADO NACIDO VIVO" },
    { value: "PT", label: "PERMISO PROTECCION TEMPORAL" },
    { value: "DE", label: "DOC IDENTIDAD EXTRANJERA" },
  ],
  tipo_id_form: {
    label: "Tipo Identificacion:",
    required: true,
    id: "tipo_id_form",
    disable: false,
    campo_abierto: true,
  },
});
const paren_acomp = ref({
  select: "",
  items: [
    { value: "1", label: "MADRE" },
    { value: "2", label: "PADRE" },
    { value: "3", label: "HIJO(A)" },
    { value: "4", label: "ESPOSO(A)" },
    { value: "5", label: "HERMANO(A)" },
    { value: "6", label: "TIO(A)" },
    { value: "7", label: "SOBRINO(A)" },
    { value: "8", label: "PRIMO(A)" },
    { value: "9", label: "MADRASTRA" },
    { value: "A", label: "PADRASTRO" },
    { value: "B", label: "AMIGO(A)" },
    { value: "C", label: "ABUELO(A)" },
    { value: "D", label: "TRABAJADOR SOCIAL" },
  ],
  paren_acomp_form: {
    label: "Parentesco:",
    required: true,
    id: "paren_acomp_form",
    disable: false,
    campo_abierto: true,
  },
});
const reg_elab_cons = ref({
  id_paciente: null,
  nom_paci: null,
  id_acomp: "",
});

const form_acomp = ref({
  tipo_id: {
    id: "tipo_id",
    label: "Tipo Identificacion:",
    required: true,
    campo_abierto: true,
  },
  er_apel: {
    id: "er_apel",
    label: "Primer Apellido:",
    maxlength: "15",
    required: true,
    campo_abierto: true,
  },
  do_apel: {
    id: "do_apel",
    label: "Segundo Apellido:",
    maxlength: "15",
    required: true,
    campo_abierto: true,
  },
  er_nom: {
    id: "er_nom",
    label: "Primer Nombre:",
    maxlength: "12",
    required: true,
    campo_abierto: true,
  },
  do_nom: {
    id: "do_nom",
    label: "Segundo Nombre:",
    maxlength: "12",
    required: true,
    campo_abierto: true,
  },
  email: {
    id: "email",
    label: "Correo electronico:",
    maxlength: "80",
    required: true,
    campo_abierto: true,
  },
  telefono: {
    id: "telefono",
    label: "Telefono:",
    maxlength: "10",
    tipo: "number",
    required: true,
    campo_abierto: true,
  },
  direccion: {
    id: "direccion",
    label: "Direccion:",
    maxlength: "30",
    required: true,
    campo_abierto: true,
  },
});
const form_elab_cons = ref({
  id_paciente: {
    id: "id_paciente",
    label: "Id. del paciente:",
    maxlength: "15",
    campo_abierto: true,
  },
  nom_paci: {
    id: "nom_paci",
    label: "Nombre paciente:",
    required: true,
    campo_abierto: true,
  },
  id_acomp: {
    id: "id_acomp",
    label: "Id. del acompañante:",
    maxlength: "15",
    required: true,
    campo_abierto: true,
  },
});
const columns_artic = [
  { name: "codigo", label: "Código", align: "left", field: "codigo" },
  { name: "descripcion", label: "Descripción", align: "left", field: "descripcion" },
  { name: "cantidad", label: "Cantidad", align: "left", field: "cantidad" },
  { name: "valor", label: "Valor", align: "left", field: "valor" },
];
const columns_consen = [
  {
    name: "llave",
    label: "Llave",
    align: "left",
    field: (row) => row.llave,
  },
  {
    name: "fecha",
    label: "Fecha",
    align: "left",
    field: (row) => row.fecha,
  },
  {
    name: "sucursal",
    label: "Sucursal",
    align: "left",
    field: (row) => row.suc,
  },
  {
    name: "clase",
    label: "Clase",
    align: "left",
    field: (row) => row.cl,
  },
  {
    name: "numero",
    label: "Numero",
    align: "left",
    field: (row) => row.nro_fact,
  },
  {
    name: "cuenta",
    label: "Cuenta",
    align: "left",
    field: (row) => row.cuenta,
  },
];
onBeforeMount(() => {
  reg_usunet.value = JSON.parse(sessionStorage.getItem("usunet"));
  reg_paci.value = regPaci();
  reg_acomp.value = regAcomp();
});

async function buscarPaciente() {
  let cod_paci = validarCodPaci(reg_elab_cons.value.id_paciente);
  await getDll$({ modulo: `get_paci.dll`, data: { cod_paci } })
    .then((data) => {
      data.reg_paci.descrip = `${data.reg_paci?.er_apel?.trim()} ${data.reg_paci?.do_apel?.trim()} ${data.reg_paci?.er_nom?.trim()} ${data.reg_paci.do_nom.trim()}`;
      reg_paci.value = data.reg_paci;
      Object.assign(reg_acomp.value, data.reg_acomp);
      Object.assign(reg_acomp_copia.value, data.reg_acomp);
      tipo_id_acomp.value.select = reg_acomp.value.tipo_id.trim();
      buscarComprobantes();
    })
    .catch((error) => {
      console.error(error);
      CON851("?", "error", "Error consultando datos paciente");
    });
}
async function buscarComprobantes() {
  let cod_paci = validarCodPaci(reg_elab_cons.value.id_paciente);
  await getDll$({
    directorio_dll: "MAIN-ELECT/APP/SALUD/SER825_V3.DLL",
    data: { datosh: datosh, id_paci: cod_paci, clase_fact: 9 },
  })
    .then((data) => {
      lista_consen.value = data.FACTURAS;
    })
    .catch((error) => {
      console.error(error);
      CON851("?", "error", "No se encontraron comprobantes con el documento " + cod_paci);
    });
}
const compararObjetos = (obj1, obj2) => {
  const diferencias = [];
  for (const propiedad in obj1) {
    if (obj1[propiedad] !== obj2[propiedad]) {
      diferencias.push({
        propiedad,
        valor1: obj1[propiedad],
        valor2: obj2[propiedad],
      });
    }
  }
  return diferencias;
};
const validarDtosAcomp = () => {
  // VALIDAR CAMPOS VACIOS
  if (paren_acomp.value.select == "") {
    CON851("?", "info", "El parentesco es obligatorio", null);
    return false;
  }
  if (reg_acomp.value.tipo_id_acomp == "") {
    CON851("?", "info", "El tipo id es obligatorio", null);
    return false;
  }
  if (reg_acomp.value.er_apel.trim() == "") {
    CON851("?", "info", "El primer apellido es obligatorio", null);
    return false;
  }
  if (reg_acomp.value.er_nom.trim() == "") {
    CON851("?", "info", "El primer nombre es obligatorio", null);
    return false;
  }
  if (reg_acomp.value.telefono == 0) {
    CON851("?", "info", "El teléfono es obligatorio", null);
    return false;
  }
  return true;
};

const guardarPaci = async (reg_) => {
  let reg_paci_electron = {};
  // GET_PACI
  let cod_paci = validarCodPaci(reg_elab_cons.value.id_paciente);
  await getDll$({
    directorio_dll: "MAIN-ELECT/APP/SALUD/GET_PACI.DLL",
    data: { datosh: datosh, cod_paci: cod_paci },
  })
    .then((data) => {
      Object.assign(reg_paci_electron, data);
    })
    .catch((error) => {
      console.error(error);
      CON851("?", "error", "Error consultando datos paciente");
    });

  // SAVE_PACI
  reg_paci_electron.novedad = "8";
  reg_paci_electron.datos_acomp.id_acomp = reg_.cod;
  reg_paci_electron.datos_acomp.tipo_id_acomp = reg_.tipo_id;
  reg_paci_electron.acompa._1er_apela = reg_.er_apel;
  reg_paci_electron.acompa._2do_apela = reg_.do_apel;
  reg_paci_electron.acompa2._1er_nomac = reg_.er_nom;
  reg_paci_electron.acompa2._2do_nomac = reg_.do_nom;
  reg_paci_electron.correo_acomp = reg_.email;
  reg_paci_electron.num_acom.tel_acom = reg_.telefono;
  reg_paci_electron.direcc_acomp = reg_.direccion;

  let reg_paci_ = JSON.parse(JSON.stringify(reg_paci_electron));

  reg_paci_.notas.observ_nota_pac2 = replaceEsp(reg_paci_.notas.observ_nota_pac2);
  reg_paci_.notas.observ_nota_pac2 = enterReplace(reg_paci_.notas.observ_nota_pac2);

  reg_paci_ = {
    ...reg_paci_,
    ...reg_paci_.notas,
    ...reg_paci_.dato_act,
  };

  for (let i in reg_paci_) {
    if (typeof reg_paci_[i] == "object") {
      if ("anio" in reg_paci_[i] || "hr" in reg_paci_[i]) {
        reg_paci_[i] = Object.values(reg_paci_[i]).join("");
      } else {
        reg_paci_ = {
          ...reg_paci_,
          ...reg_paci_[i],
        };
      }
    }
  }

  for (let i in reg_paci_) {
    if (typeof reg_paci_[i] == "object") delete reg_paci_[i];
  }

  await getDll$({
    directorio_dll: "MAIN-ELECT/APP/SALUD/SAVE_PACI.DLL",
    data: { datosh: datosh, ...reg_paci_ },
  })
    .then((data) => {
      CON851("?", "success", "Se guardo correctamente el acompañante");
    })
    .catch((error) => {
      console.error(error);
      CON851("?", "error", "Error consultando datos paciente");
    });
};
const guardarCambiosDtosAcomp = async () => {
  if (!validarDtosAcomp()) return;
  reg_acomp.value.tipo_id = tipo_id_acomp.value.items.find((item) => item.value == tipo_id_acomp.value.select).value;
  CON851P(
    "?",
    "warning",
    "¿Estas seguro(a) de guardar los cambios realizados en el registro del acompañante?",
    null,

    async () => {
      await guardarPaci(reg_acomp.value);
    }
  );
};
const continuar = () => {
  if (!validarDtosAcomp()) return;
  // VALIDAR CAMBIOS
  const resultado = compararObjetos(reg_acomp_copia.value, reg_acomp.value);
  if (resultado.length > 0) {
    CON851P(
      "?",
      "warning",
      "Has cambiado datos del acompañante. ¿Deseas guardar estos cambios?",
      () => {
        continuarFormatConsen();
      },
      async () => {
        await guardarPaci(reg_acomp.value);
        continuarFormatConsen();
      }
    );
  } else {
    continuarFormatConsen();
  }
};
const continuarFormatConsen = () => {
  show_valida_acomp.value = false;
  setTimeout(() => {
    autorizaPaci();
  }, 300);
};
const selecComprobante = (data) => {
  CON851P("?", "info", `¿Deseas realizar el consentimientos sobre el comprobante ${data.key}?`, null, () => {
    comp_selec.value = data.row;
    buscarFacturaDeComp();
  });
};
const buscarFacturaDeComp = async () => {
  await getDll$({
    directorio_dll: "MAIN-ELECT/APP/SALUD/GET_FACT.DLL",
    data: { datosh: datosh, suc: comp_selec.value.suc, cl: comp_selec.value.cl, nro: comp_selec.value.nro_fact },
  })
    .then((data) => {
      if ("llave  " in data) {
        tabla_articulos.value.forEach((e, i) => {
          e.codigo = `${arti[i].grupo}${arti[i].cod_art}`;
          e.descripcion = arti[i].descrip;
        });
        tabla_diagnosticos.value.forEach((e, i) => {
          e.codigo = data.tabla_diag_estad[i].cod;
          e.descripcion = data.tabla_diag_estad[i].descrip;
        });
      }
      tabla_articulos.value = JSON.stringify(tabla_articulos.value);
      tabla_diagnosticos.value = JSON.stringify(tabla_diagnosticos.value);
      show_autoriza_consen.value = true;
    })
    .catch((error) => {
      console.error(error);
      CON851("?", "error", "Error consultando datos de la factura");
    });
};
const mostrarArticulos = (row) => {
  lista_artic.value = row.tabla_articulos || [];
  llave_comp.value = row.llave;
  show_artic_comp.value = true;
};

const cancelarAutoriza = () => {
  show_autoriza_consen.value = false;
};
const autorizaPaci = () => {
  show_autoriza_consen.value = false;

  router.push({
    name: "menu",
    query: {
      modulo: "LAB",
      novedad: "1",
      oper: reg_usunet.value.OPER,
      llave_hc: reg_paci.value.cod,
      cod_prof: reg_usunet.value.IDUSU,
      id_acompa: firma_acomp.value ? reg_elab_cons.value.id_acomp : "",
      paren_acomp: firma_acomp.value ? paren_acomp.value.select : "",
      articulos: btoa(tabla_articulos.value),
      diagnosticos: btoa(tabla_diagnosticos.value),
      tipo_testigo: "2",
      id_testigo: reg_usunet.value.IDUSU,
      nro_comp: comp_selec.value.nro_fact,
      clase: comp_selec.value.cl,
      suc: comp_selec.value.suc,
      nit: reg_usunet.value.NITUSUNET,
      contab: datosh.split("|")[1],
    },
  });
};
const autorizaAcomp = () => {
  show_autoriza_consen.value = false;
  show_valida_acomp.value = true;
  firma_acomp.value = true;
  if (reg_elab_cons.value.id_acomp.trim() == "") {
    reg_elab_cons.value.id_acomp = reg_acomp.value.cod;
  }
};
const cerrarVentAcomp = () => {
  show_valida_acomp.value = false;
};

const callbackSER810 = (data) => {
  if (data) {
    ODO003.diagnostico = data.cod;
    descrip_diagnostico.value = data.descrip;
  }
  show_ser810.value = false;
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
}

.login-card {
  display: flex;
  flex-direction: row;
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 800px;
  text-align: left;
  align-items: center;
}

.form-container {
  flex: 1;
}

.login-title {
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
  color: #333;
}

.info-container {
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
  color: #555;
}

.info-container p {
  margin: 0.2rem 0;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #555;
}

input {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
}

.login-button {
  width: 100%;
  padding: 0.8rem;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;
}

.login-button:hover {
  background-color: #0056b3;
}

.error-message {
  color: red;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.image-container {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo {
  max-width: 100%;
  max-height: 200px;
  object-fit: contain;
}
</style>
