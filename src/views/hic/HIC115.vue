<template>
  <div>
    <q-card class="q-mx-auto format q-mb-lg" style="overflow: auto">
      <q-card-section>
        <div class="text-center">
          <q-toggle
            :disable="getSesion.novedad === '4'"
            v-model="HIC115.opcion_hic115"
            color="primary"
            keep-color
            false-value="REVOCAR"
            true-value="AUTORIZAR"
            unchecked-icon="block"
            checked-icon="check_circle"
            label="¿Autorizar o revocar este consentimiento?"
          />
          <p :class="HIC115.opcion_hic115 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
            <q-chip :color="HIC115.opcion_hic115 == 'AUTORIZAR' ? 'green' : 'red'" class="text-white" v-if="HIC115.opcion_hic115">
              {{ HIC115.opcion_hic115 }}
            </q-chip>
          </p>
        </div>

        <div class="row q-mt-md q-mb-md" style="width: 100%">
          <div class="text-center" style="border: 1px solid #ccc; background-color: #123d7d; width: 100%">
            <p style="font-weight: bold; margin-top: 10px; color: white">Datos de indentificación del paciente</p>
          </div>
          <div class="row" style="border: 1px solid #ccc; width: 50%">
            <p style="font-weight: bold; margin-top: 10px">Nombre del Paciente:</p>
            <p style="margin-top: 10px">{{ getPaci.descrip }}</p>
          </div>
          <div class="row" style="border: 1px solid #ccc; width: 50%">
            <p style="font-weight: bold; margin-top: 10px">Fecha de Nac.:</p>
            <p style="margin-top: 10px">
              {{ dayjs(getPaci.nacim).format("YYYY-MM-DD") }}
            </p>
          </div>
          <div class="row" style="border: 1px solid #ccc; width: 50%">
            <p style="font-weight: bold; margin-top: 10px">Documento:</p>
            <p style="margin-top: 10px">{{ getPaci.cod }}</p>
          </div>
          <div class="row" style="border: 1px solid #ccc; width: 50%">
            <p style="font-weight: bold; margin-top: 10px">Edad:</p>
            <p style="margin-top: 10px">{{ calcularEdad(getPaci.nacim) }}</p>
          </div>
          <div class="row" style="border: 1px solid #ccc; width: 50%">
            <p style="font-weight: bold; margin-top: 10px">Direccion:</p>
            <p style="margin-top: 10px">{{ getPaci.direccion }}</p>
          </div>
          <div class="row" style="border: 1px solid #ccc; width: 50%">
            <p style="font-weight: bold; margin-top: 10px">Sexo:</p>
            <p style="margin-top: 10px">{{ getPaci.sexo }}</p>
          </div>
          <div class="row" style="border: 1px solid #ccc; width: 50%">
            <p style="font-weight: bold; margin-top: 10px">EPS:</p>
            <p style="margin-top: 10px">{{ getPaci.descrip_eps }}</p>
          </div>
          <div class="row" style="border: 1px solid #ccc; width: 50%">
            <p style="font-weight: bold; margin-top: 10px">Ciudad:</p>
            <p style="margin-top: 10px">{{ getPaci.descrip_ciudad }}</p>
          </div>
          <div class="row" style="border: 1px solid #ccc; width: 50%">
            <p style="font-weight: bold; margin-top: 10px">Diagnostico:</p>
            <p>
              <Input_
                style="min-width: 100px; display: inline-block"
                @validate="datoCodigoEnfermedad"
                v-model="HIC115.cod_diagn"
                :field="form.cod_diagn"
              />
              <q-input dense disable type="text" maxlength="4" v-model="descrip_diagn" style="min-width: 300px; display: inline-block" />
            </p>
          </div>
          <div class="row" style="border: 1px solid #ccc; width: 50%">
            <p style="font-weight: bold; margin-top: 10px">Telefono:</p>
            <p style="margin-top: 10px">{{ getPaci.telefono }}</p>
          </div>
        </div>

        <div class="border-format q-my-sm">
          <div class="text-center text-subtitle1 text-bold q-py-xs q-mb-md">Servicio pos</div>
          <q-card class="full-width q-mx-none">
            <div class="row q-pa-sm q-col">
              <StaticDataTable_
                :text_info="['[F3] Para grabar datos', '[F5] Salir sin grabar', '[F6] Borrar item']"
                class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"
                :item_index="reg_tabla_servicio.indice_i"
                value_button="indice_i"
                :data="tabla_servicio"
                min_height="240px"
                :headers="headers"
                show_label_inputs
              >
                <td>
                  <Input_ v-model="reg_tabla_servicio.indice_i" :field="form_tabla_servicio.indice_i" />
                </td>
                <td>
                  <Input_ v-model="reg_tabla_servicio.fecha" :field="form_tabla_servicio.fecha" />
                </td>
                <td>
                  <Select_ v-model="reg_tabla_servicio.tipo_serv" :field="form_tabla_servicio.tipo_serv" :items="tipos_servicio" />
                </td>
                <td>
                  <Input_
                    style="min-width: 100px; display: inline-block"
                    @validate="datoCodigoProf"
                    v-model="reg_tabla_servicio.cod_prof"
                    :field="form_tabla_servicio.cod_prof"
                  />
                  <q-input
                    dense
                    disable
                    type="text"
                    maxlength="10"
                    v-model="reg_tabla_servicio.nomb_prof"
                    style="min-width: 220px; display: inline-block"
                  />
                </td>
                <td>
                  <q-btn @click="agregarServicio" push color="primary" label="Añadir"></q-btn>
                </td>
              </StaticDataTable_>
            </div>
          </q-card>
          <div class="row q-mt-md q-mb-md" style="width: 100%">
            <div class="text-center" style="border: 1px solid #ccc; background-color: #123d7d; width: 100%">
              <p style="font-weight: bold; margin-top: 10px; color: white">Total servicios</p>
            </div>
            <div class="text-center" style="border: 1px solid #ccc; width: 32%">
              <p style="font-weight: bold; margin-top: 10px">Equinoterapia</p>
            </div>
            <div class="text-center" style="border: 1px solid #ccc; width: 33%">
              <p style="font-weight: bold; margin-top: 10px">Musicoterapia</p>
            </div>
            <div class="text-center" style="border: 1px solid #ccc; width: 35%">
              <p style="font-weight: bold; margin-top: 10px">Caninoterapia</p>
            </div>

            <div class="text-center" style="border: 1px solid #ccc; width: 32%">
              <p style="font-weight: bold; margin-top: 10px">{{ totalEquinoTerap }}</p>
            </div>
            <div class="text-center" style="border: 1px solid #ccc; width: 33%">
              <p style="font-weight: bold; margin-top: 10px">{{ totalMusicoTerap }}</p>
            </div>
            <div class="text-center" style="border: 1px solid #ccc; width: 35%">
              <p style="font-weight: bold; margin-top: 10px">{{ totalCaninoTerap }}</p>
            </div>
          </div>
        </div>

        <div class="col-12 row justify-around q-mt-lg">
          <ContainerFirma
            quien_firma="FIRMA PACIENTE"
            :firmador="getPaci.descrip"
            :tipo_doc="getPaci.tipo_id"
            :registro_profe="getPaci.cod"
            @reciFirma="callBackFirma"
            :huella_="huella_paci"
            class="col-4"
            :disable="getSesion.novedad == '4'"
          />
          <ContainerFirma
            :firmador="getAcomp.descrip || 'NO HAY ACOMPAÑANTE'"
            :tipo_doc="getAcomp.tipo_id"
            quien_firma="FIRMA TUTOR O FAMILIAR"
            :registro_profe="getAcomp.cod"
            @reciFirma="callBackFirmaAcomp"
            class="col-4"
            :disable="getSesion.novedad == '4'"
          />
        </div>
      </q-card-section>

      <div class="row justify-center q-my-lg">
        <q-btn
          :disable="HIC115.opcion_hic115 ? false : true"
          @click="validarDatos"
          icon-right="check_circle"
          class="q-mb-md"
          color="green"
          label="GRABAR"
          type="submit"
        />
      </div>
      <CONSEN800 v-if="show_consen800" @esc="callbackCONSEN800" @enter="callbackCONSEN800" />
      <SER819 v-if="show_ser819" @esc="callbackSER819" @enter="callbackSER819" />
    </q-card>
  </div>
</template>
<script setup>
import { useModuleFormatos, useApiContabilidad, useModuleCon851p, useModuleCon851 } from "@/store";
import { ref, reactive, defineAsyncComponent, onMounted, computed } from "vue";
import { impresionHIC115, impresion, generarArchivo } from "@/impresiones";
import { utilsFormat, calcularEdad } from "@/formatos/utils";
import { useRouter } from "vue-router";
import { foco_ } from "@/setup";
import dayjs from "dayjs";

const CONSEN800 = defineAsyncComponent(() => import("@/components/consen/CONSEN800.vue"));
const SER819 = defineAsyncComponent(() => import("@/components/salud/SER819.vue"));
const ContainerFirma = defineAsyncComponent(() => import("../../components/global/ContainerFirma.vue"));
const { getDll$, _getFirma$, guardarFile$, _getHuella$, enviarCorreo$, getEncabezado, _getImagen$ } = useApiContabilidad();
const { getPaci, getAcomp, getProf, getEmpresa, getSesion, getTestigo, getHc } = useModuleFormatos();
const { CON851P } = useModuleCon851p();
const { CON851 } = useModuleCon851();
const router = useRouter();

const nit_usu = ref(parseInt(getEmpresa.nitusu) || 0);
const firma_recibida_acomp = ref("");
const firma_recibida = ref("");
// const firma_recibida_test = ref("");
const firma_prof = ref(null);
const firma_paci = ref(null);
const huella_paci = ref(null);
const res_consen = ref(null);
const descrip_diagn = ref("");
const show_consen800 = ref(false);
const show_ser819 = ref(false);
const form_tabla_servicio = ref({
  indice_i: {
    id: "indice_i",
    mask: "##",
    maxlength: "2",
    disable: true,
    required: true,
  },
  fecha: {
    id: "fecha",
    maxlength: "10",
    tipo: "date",
    required: true,
    campo_abierto: true,
  },

  tipo_serv: {
    id: "tipo_serv",
    maxlength: "1",
    required: true,
    campo_abierto: true,
  },
  cod_prof: {
    id: "cod_prof",
    label: "",
    maxlength: "10",
    f0: ["f8"],
    standout: "N",
    outlined: "N",
    required: true,
    campo_abierto: true,
  },
});
const headers = [
  { name: "indice_i", label: "Item", align: "left", field: "indice_i", headerStyle: "width: 6%" },
  { name: "fecha", label: "Fecha", align: "left", field: "fecha", headerStyle: "width: 15%" },
  { name: "descrip_tipo_serv", label: "Tipo de servicio", align: "left", field: "descrip_tipo_serv", headerStyle: "width: 30%" },
  { name: "nomb_prof", label: "Nombre profesional", align: "left", field: "nomb_prof", headerStyle: "width: 49%" },
  { name: "btn", label: "", align: "left", field: "btn", headerStyle: "width: 0%" },
];
const reg_tabla_servicio = ref({
  indice_i: null,
  fecha: "",
  tipo_serv: "",
  cod_acomp: "",
  nomb_acomp: "",
});
const tipos_servicio = ref([
  { value: 1, label: "Equinoterapia" },
  { value: 2, label: "Musicoterapia" },
  { value: 3, label: "Caninoterapia" },
]);
const tabla_servicio = reactive(
  JSON.parse(
    JSON.stringify(
      Array(60).fill({
        indice_i: null,
        fecha: "",
        tipo_serv: "",
        cod_acomp: "",
        nomb_acomp: "",
        cod_prof: "",
        nomb_prof: "",
      })
    )
  )
);
const HIC115 = reactive({
  opcion_hic115: "",
  fecha: "",
  cod_diagn: "",
  llave: "",
});
const form = ref({
  cod_diagn: {
    id: "cod_diagn",
    label: "",
    maxlength: "4",
    f0: ["f8"],
    standout: "N",
    outlined: "N",
    required: true,
    disable: getSesion.novedad === "4",
    campo_abierto: true,
  },
});

const totalEquinoTerap = computed(() => {
  return tabla_servicio.filter((item) => item.tipo_serv == 1).length;
});
const totalMusicoTerap = computed(() => {
  return tabla_servicio.filter((item) => item.tipo_serv == 2).length;
});
const totalCaninoTerap = computed(() => {
  return tabla_servicio.filter((item) => item.tipo_serv == 3).length;
});
onMounted(() => {
  setTimeout(() => {
    datosInit();
    getFirmaProf();
  }, 900);
});

const datosInit = async () => {
  if (getSesion.novedad == "4") {
    res_consen.value = JSON.parse(sessionStorage.getItem("reg_conse_edit"));
    Object.assign(HIC115, res_consen.value.reg_coninf.datos);
    Object.assign(tabla_servicio, res_consen.value.reg_coninf.datos.tabla_servicio);

    consultarEnfermedad();

    const maxIndice = Math.max(...tabla_servicio.map((item) => Number(item.indice_i) || 0));
    reg_tabla_servicio.value.indice_i = maxIndice + 1;
    // reg_tabla_servicio.value.fecha = dayjs().format("DD-MM-YYYY");

    HIC115.opcion_hic115 = "AUTORIZAR";
    setTimeout(() => {
      foco_(form_tabla_servicio, "tipo_serv");
    }, 900);
  }

  if (getSesion.novedad == "1") {
    reg_tabla_servicio.value.indice_i = 1;
  }
  // reg_tabla_servicio.value.fecha = dayjs().format("DD-MM-YYYY");
  reg_tabla_servicio.value.nomb_acomp = getAcomp.descrip;
  reg_tabla_servicio.value.cod_acomp = getAcomp.cod;
  HIC115.fecha = dayjs(getEmpresa.FECHA_ACT).format("YYYY-MM-DD");
  HIC115.edad = calcularEdad(getAcomp.nacim);
};

const getFirmaProf = async () => {
  try {
    firma_prof.value = await _getFirma$({ codigo: Number(getProf.cod) || 0 });
    huella_paci.value = await _getHuella$({ codigo: getPaci.cod });
  } catch (error) {
    console.error(error);
    CON851("?", "info", error);
  }
};

const validarDatos = async () => {
  grabarConsentimiento();
};

const grabarConsentimiento = async () => {
  const datos_format = JSON.parse(JSON.stringify(HIC115));

  let datos = {
    nit_entid: nit_usu.value,
    estado: HIC115.opcion_hic115 == "AUTORIZAR" ? "1" : "2",
    id_acomp: getAcomp.cod.padStart(15, "0"),
    paren_acomp: getPaci.paren_acomp,
    oper_consen: getSesion.oper,
    llave_consen: getSesion.novedad == "4" ? Object.values(res_consen.value.reg_coninf.llave).join("") : getHc.llave,
    cod_med: getProf.cod,
    cod_consen: "HIC115",
    disentimiento: "N",
    tabla_servicio: tabla_servicio,
    ...datos_format,
  };
  if (getSesion.novedad == "4") {
    datos.novedad_consen = getSesion.novedad;
  }
  datos.tabla_servicio.forEach((item, index) => {
    const new_obj = {
      indice_i: item.indice_i,
      fecha: item.fecha,
      tipo_serv: item.tipo_serv,
      cod_acomp: item.cod_acomp,
      nomb_acomp: item.nomb_acomp,
      cod_prof: item.cod_prof,
    };
    datos[`tabla_servicio${(index + 1).toString().padStart(3, "0")}`] = Object.values(new_obj).join("|") + "|";
  });
  for (let i in datos) {
    if (typeof datos[i] == "object") delete datos[i];
  }

  console.log("datos a grabar --> ", datos);

  await getDll$({ modulo: `save_consen.dll`, data: { ...datos } })
    .then((data) => {
      if (data?.llave_consen) {
        return grabarFirmaConsen(data?.llave_consen);
      } else return CON851("?", "error", "Error al guardar el consentimiento");
    })
    .catch((error) => {
      console.error(error);
      CON851("?", "error", "Error al guardar el consentimiento");
    });
};

const grabarFirmaConsen = async (llave) => {
  try {
    if (getSesion.novedad != "4") {
      await guardarFile$({ base64: firma_recibida_acomp.value, codigo: `A${llave}` });
      //   await guardarFile$({ base64: firma_recibida_test.value, codigo: `T${llave}` });
      await guardarFile$({ base64: firma_recibida.value, codigo: `P${llave}` });
    }

    if (getEmpresa.envio_email == "N") {
      await imprimirConsen(llave);
      return router.back();
    }
    return CON851P(
      "?",
      "info",
      "¿Deseas enviar el correo del consentimientos?",
      async () => {
        await imprimirConsen(llave);
        router.back();
      },
      async () => {
        const file = await imprimirConsen(llave);
        if (getPaci.email && !/.+@.+\..+/.test(getPaci.email.toLowerCase())) {
          return CON851("?", "info", "El correo no es valido", () => router.back());
        }
        const response = await enviarCorreo$({
          cuerpo: `SE ADJUNTA ${getEncabezado.descrip} PARA ${getPaci.descrip} IDENTIDICADO CON ${getPaci.cod}`,
          destino: getPaci.email.toLowerCase(),
          subject: getEncabezado.descrip,
          file,
        });
        CON851("?", response.tipo, response.message, () => router.back());
      }
    );
  } catch (error) {
    console.error(error);
    CON851("?", "info", error);
  }
};

const imprimirConsen = async (llave) => {
  try {
    const datos_hic115 = {
      autorizo: HIC115.opcion_hic115 == "AUTORIZAR" ? true : false,
      empresa: getEmpresa,
      paciente: getPaci,
      prof: getProf,
      acomp: getAcomp,
      //   testigo: getTestigo,
      cod_consen: "HIC115",
      firmas: {
        firma_paci: firma_recibida.value ? true : false,
        huella_paci: huella_paci.value ? true : false,
        firma_acomp: firma_recibida_acomp.value ? true : false,
        firma_prof: firma_prof.value ? true : false,
        // firma_test: firma_recibida_test.value ? true : false,
      },
      paren_acomp: getPaci.paren_acomp,
      fecha: HIC115.fecha,
      descrip_diagn: descrip_diagn.value,
      tabla_servicio: tabla_servicio,
      ...HIC115,
    };

    const firmas = {
      img_firma_consen: firma_recibida.value,
      img_firma_paci: firma_recibida.value,
      img_firma_acomp: firma_recibida_acomp.value,
      img_huella_paci: huella_paci.value,
      firma_prof: firma_prof.value,
      //   img_firma_testigo: firma_recibida_test.value,
    };

    const docDefinitionPrint = await utilsFormat({
      datos: firmas,
      content: impresionHIC115({
        datos: datos_hic115,
      }),
    });
    const docDefinitionFile = await utilsFormat({
      datos: firmas,
      content: impresionHIC115({
        datos: datos_hic115,
      }),
    });

    await impresion({ docDefinition: docDefinitionPrint });
    const response_impresion = await generarArchivo({
      docDefinition: docDefinitionFile,
      nomb_archivo: `${llave}-LAB-115`,
    });
    return response_impresion;
  } catch (error) {
    console.error("error -->", error);
  }
};

const callBackFirma = (data_firma) => {
  data_firma && (firma_recibida.value = data_firma);
};
const callBackFirmaAcomp = (data_firma) => {
  data_firma && (firma_recibida_acomp.value = data_firma);
};

const agregarServicio = () => {
  if (reg_tabla_servicio.value.indice_i > 60) {
    return CON851("?", "info", "Alcanzo el limite de items (60) en la tabla ");
  }
  if (!reg_tabla_servicio.value.tipo_serv) {
    return CON851("?", "info", "El campo tipo de servicio esta vacio", () => foco_(form_tabla_servicio, "tipo_serv"));
  }
  if (!reg_tabla_servicio.value.cod_prof) {
    return CON851("?", "info", "El campo profesional esta vacio", () => foco_(form_tabla_servicio, "cod_prof"));
  }
  tabla_servicio[reg_tabla_servicio.value.indice_i - 1].indice_i = reg_tabla_servicio.value.indice_i;
  tabla_servicio[reg_tabla_servicio.value.indice_i - 1].fecha = reg_tabla_servicio.value.fecha;
  tabla_servicio[reg_tabla_servicio.value.indice_i - 1].tipo_serv = reg_tabla_servicio.value.tipo_serv.toString();
  tabla_servicio[reg_tabla_servicio.value.indice_i - 1].descrip_tipo_serv = tipos_servicio.value.find(
    (el) => el.value == reg_tabla_servicio.value.tipo_serv
  ).label;
  tabla_servicio[reg_tabla_servicio.value.indice_i - 1].nomb_acomp = getAcomp.descrip;
  tabla_servicio[reg_tabla_servicio.value.indice_i - 1].cod_acomp = getAcomp.cod;
  tabla_servicio[reg_tabla_servicio.value.indice_i - 1].cod_prof = reg_tabla_servicio.value.cod_prof;
  tabla_servicio[reg_tabla_servicio.value.indice_i - 1].nomb_prof = reg_tabla_servicio.value.nomb_prof;
  reg_tabla_servicio.value.indice_i++;
  foco_(form_tabla_servicio, "tipo_serv");
};

const datoCodigoEnfermedad = async (event) => {
  switch (event) {
    case "f8":
      show_consen800.value = true;
      break;
    case "enter":
      consultarEnfermedad();
      break;
  }
};
const consultarEnfermedad = async () => {
  try {
    const response = await getDll$({
      modulo: `get_enf.dll`,
      data: { llave: "2" + HIC115.cod_diagn },
    });
    if (response.llave) {
      descrip_diagn.value = response.nombre;
      return;
    }
    return CON851("?", "info", "No existe diagnostico");
  } catch (error) {
    CON851("?", "info", error);
  }
};
const datoCodigoProf = async (event) => {
  switch (event) {
    case "f8":
      show_ser819.value = true;
      break;
    case "enter":
      consultarProfesional();
      break;
  }
};
const consultarProfesional = async () => {
  try {
    const response = await getDll$({
      modulo: `get_prof.dll`,
      data: { cod_prof: reg_tabla_servicio.value.cod_prof },
    });
    if (response.reg_prof.cod) {
      reg_tabla_servicio.value.nomb_prof = response.reg_prof.descrip;
      return;
    }
    return CON851("?", "info", "No existe profesional");
  } catch (error) {
    CON851("?", "info", error);
  }
};
const callbackSER819 = (data) => {
  if (data) {
    reg_tabla_servicio.value.cod_prof = data.identificacion;
    reg_tabla_servicio.value.nomb_prof = data.nombre;
  }
  show_ser819.value = false;
};
const callbackCONSEN800 = (data) => {
  if (data) {
    HIC115.cod_diagn = data.cod;
    descrip_diagn.value = data.descrip;
  }
  show_consen800.value = false;
};
</script>
<style scoped>
p {
  margin-top: 10px;
  margin-left: 3px;
  margin-right: 3px;
}
.custom-q-list .q-item {
  margin: 0;
}
.custom-header {
  background-color: var(--q-primary);
  color: white;
}
</style>
