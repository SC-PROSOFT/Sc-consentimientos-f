<template>
  <div>
    <q-card class="q-mx-auto format q-mb-lg" style="overflow: auto">
      <q-card-section>
        <div class="text-center">
          <q-toggle
            v-model="reg_lab021.opcion_lab021"
            color="primary"
            keep-color
            false-value="REVOCAR"
            true-value="AUTORIZAR"
            unchecked-icon="block"
            checked-icon="check_circle"
            label="¿Autorizar o revocar este consentimiento?"
          />
          <p :class="reg_lab021.opcion_lab021 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
            <q-chip :color="reg_lab021.opcion_lab021 == 'AUTORIZAR' ? 'green' : 'red'" class="text-white" v-if="reg_lab021.opcion_lab021">
              {{ reg_lab021.opcion_lab021 }}
            </q-chip>
          </p>
        </div>

        <DatosFormat
          :datos="datos"
          @datos="(data) => (reg_lab021.servicio = data)"
          @ambito_ante="(data) => (reg_lab021.ambito_atenc = data)"
          @ident_genero="(data) => (reg_lab021.ident_genero = data)"
        />

        <div class="row q-mt-md" style="width: 100%">
          <div class="text-center" style="border: 1px solid #ccc; width: 100%">
            <p style="font-weight: bold; margin-top: 10px">REGISTRO</p>
          </div>
        </div>
        <div class="text-left row q-mt-lg">
          <div class="col-6 row">
            <Select_
              class="col-7"
              style="min-width: 100px; display: inline-block"
              v-model="reg_lab021.tipo_sedacion"
              :field="form.tipo_sedacion"
              :items="[
                { value: '1', label: 'INTRAVENOSA' },
                { value: '2', label: 'INHALATORIA' },
                { value: '3', label: 'ANESTESIA GENERAL' },
              ]"
            />
          </div>
        </div>
        <div class="sedacion-scroll-container">
          <div class="sedacion-fixed-area">
            <img src="@/assets/image/tabla_sedacion.png" alt="Imagen de fondo" class="background-image" draggable="false" />
            <VueSignaturePad
              ref="signaturePad"
              class="signature-pad"
              :options="{
                ...opciones_imagen,
                onBegin: () => {
                  signaturePad.resizeCanvas();
                },
              }"
            />
          </div>
          <div class="row q-mt-md">
            <div class="col-6 row">
              <Select_
                class="col-8"
                style="min-width: 100px; display: inline-block"
                v-model="reg_lab021.via_aerea"
                :field="form.via_aerea"
                :items="[
                  { value: '1', label: 'CÁNULA NASAL' },
                  { value: '2', label: 'MASCARILLA VENTURI' },
                  { value: '3', label: 'MASCARA LARÍNGEA' },
                ]"
              />
            </div>
            <div class="col-6 row">
              <Input_ class="q-mt-xs" v-model="reg_lab021.tubo_orotraqueal" :field="form.tubo_orotraqueal" />
            </div>
          </div>
        </div>
        <!-- <div class="row q-mb-lg" style="width: 100%">
          <div class="q-mt-md q-mb-lg" style="width: 100%; display: flex; justify-content: center; align-items: center">
            <q-card class="custom-card-size">
              <q-card-section class="row items-center" style="width: 100%; display: flex">
                <div class="signature-container">
                  <img src="@/assets/image/tabla_sedacion.png" alt="Imagen de fondo" class="background-image" />
                  <VueSignaturePad
                    ref="signaturePad"
                    class="signature-pad"
                    :options="{
                      ...opciones_imagen,
                      onBegin: () => {
                        signaturePad.resizeCanvas();
                      },
                    }"
                  />
                </div>
                <div class="q-mt-md col-6 row">
                  <Select_
                    class="col-8"
                    style="min-width: 100px; display: inline-block"
                    v-model="reg_lab021.via_aerea"
                    :field="form.via_aerea"
                    :items="[
                      { value: '1', label: 'CÁNULA NASAL' },
                      { value: '2', label: 'MASCARILLA VENTURI' },
                      { value: '3', label: 'MASCARA LARÍNGEA' },
                    ]"
                  />
                </div>
                <div class="q-mt-md col-6 row">
                  <Input_ class="q-mt-xs" v-model="reg_lab021.tubo_orotraqueal" :field="form.tubo_orotraqueal" />
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div> -->
        <div>
          <q-card-actions class="q-mt-xl" align="around">
            <q-btn class="q-mt-xs" push color="deep-orange" icon="delete_forever" @click="clear">Borrar trazos</q-btn>
            <q-btn class="q-mt-xs" push color="primary" icon="undo" @click="undo">Deshacer último trazo</q-btn>
          </q-card-actions>
        </div>
        <!-- <div class="row">
          <Input_
            class="col-xs-2 col-sm-2 col-md-2 col-lg-2 col-xl-2"
            v-model="tabla_notas_atencion[0].indice_i"
            :field="form.indice_i"
            style="margin: 0; padding: 0"
          />
          <Input_
            class="col-xs-2 col-sm-2 col-md-2 col-lg-2 col-xl-2"
            v-model="tabla_notas_atencion[0].fecha"
            :field="form.fecha"
            style="margin: 0; padding: 0"
          />
          <Input_
            class="col-xs-2 col-sm-2 col-md-2 col-lg-2 col-xl-2"
            v-model="tabla_notas_atencion[0].hora"
            :field="form.hora"
            style="margin: 0; padding: 0"
          />
          <Input_
            class="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6"
            v-model="tabla_notas_atencion[0].notas_atencion"
            :field="form.notas_atencion"
            style="margin: 0; padding: 0"
          />
        </div> -->
        <!-- <Input_
        class="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6"
        width_label="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4"
          width_input="col-xs-8 col-sm-8 col-md-8 col-lg-8 col-xl-8"
          v-model="getPaci.descrip"
          :field="form.descrip"
        /> -->

        <div class="border-format q-my-sm">
          <div class="text-center text-subtitle1 text-bold q-py-xs q-mb-md">Notas de atención</div>
          <q-card class="full-width q-mx-none">
            <div class="row q-pa-sm q-col">
              <StaticDataTable_
                :text_info="['[F3] Para grabar datos', '[F5] Salir sin grabar', '[F6] Borrar item']"
                class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"
                @deleteRow="datoTipoGrpTabla('f6', $event)"
                :item_index="reg_tabla_not_ant.indice_i"
                value_button="indice_i"
                :data="tabla_notas_atencion"
                min_height="240px"
                :headers="headers"
                show_label_inputs
              >
                <td>
                  <Input_ v-model="reg_tabla_not_ant.indice_i" :field="form_tabla_not_ant.indice_i" />
                </td>
                <td>
                  <Input_ v-model="reg_tabla_not_ant.fecha" :field="form_tabla_not_ant.fecha" />
                </td>
                <td>
                  <Input_ v-model="reg_tabla_not_ant.hora" :field="form_tabla_not_ant.hora" />
                </td>
                <td>
                  <Input_ v-model="reg_tabla_not_ant.notas_atencion" :field="form_tabla_not_ant.notas_atencion" />
                </td>
                <td>
                  <q-btn @click="agregarNotaAtenc" push color="primary" label="Añadir"></q-btn>
                </td>
              </StaticDataTable_>
            </div>
          </q-card>
        </div>
        <div class="border-format q-my-sm q-mt-xl">
          <div class="text-center text-subtitle1 text-bold q-py-xs q-mb-md">TEST DE RECUPERACIÓN POST-ANESTESICA ALDRETE</div>
          <TextArea_ v-model="reg_lab021.test_recupera_anest" :field="form.test_recupera_anest" />
        </div>

        <div class="row justify-center q-mt-lg" style="width: 100%">
          <div class="row justify-center bold" style="width: 33%">
            <p class="text-center text-bold q-py-xs q-mb-md">Elaborado por: Médico Especialista</p>
          </div>
          <div class="row justify-center bold" style="width: 32%">
            <p class="text-center text-bold q-py-xs q-mb-md">Revisado por: Asesor de Calidad</p>
          </div>
          <div class="row justify-center bold" style="width: 35%">
            <p class="text-center text-bold q-py-xs q-mb-md">Aprobado por: Representante Legal</p>
          </div>
        </div>

        <div class="col-12 row justify-around q-mt-lg">
          <ContainerFirma
            quien_firma="MÉDICO ANESTESIOLOGO"
            @reciFirma="callBackFirmaProf"
            :firma_="firma_prof"
            :firmador="getProf.descrip"
            :codigo_firma="getProf.cod"
            :descrip_prof="getProf.descrip_atiende"
            :registro_profe="getProf.registro_profe"
            class="col-4"
          />
        </div>
      </q-card-section>

      <div class="row justify-center q-my-lg">
        <q-btn
          :disable="reg_lab021.opcion_lab021 ? false : true"
          @click="validarDatos"
          icon-right="check_circle"
          class="q-mb-md"
          color="green"
          label="GRABAR"
          type="submit"
        />
      </div>
    </q-card>
  </div>
</template>
<script setup>
import { regPaci, regAcomp } from "@/fuentes";
import { useModuleFormatos, useApiContabilidad, useModuleCon851p, useModuleCon851 } from "@/store";
import { ref, reactive, defineAsyncComponent, onMounted } from "vue";
import { impresionLAB021, impresion, generarArchivo } from "@/impresiones";
import { utilsFormat, calcularEdad, evaluarParentesco, evaluarClaseServ } from "@/formatos/utils";
import { useRouter } from "vue-router";
import dayjs from "dayjs";
import backgroundImage from "@/assets/image/tabla_sedacion.png";
import { foco_ } from "@/setup";
const ContainerFirma = defineAsyncComponent(() => import("../../components/global/ContainerFirma.vue"));
const DatosFormat = defineAsyncComponent(() => import("@/components/global/DatosFormat.vue"));

const { getDll$, _getFirma$, guardarEsquema$, enviarCorreo$, getEncabezado } = useApiContabilidad();
const { getPaci, getAcomp, getProf, getEmpresa, getSesion, getTestigo } = useModuleFormatos();
const { CON851P } = useModuleCon851p();
const { CON851 } = useModuleCon851();
const router = useRouter();

const tabla_sedacion = ref("");
const firma_prof = ref(null);
const signaturePad = ref(null);
const opciones_imagen = ref({
  dotSize: (1 + 1.5) / 2,
  minWidth: 0.7,
  maxWidth: 0.7,
  throttle: 16,
  minDistance: 5,
  backgroundColor: "rgba(0,0,0,0)",
  penColor: "black",
  velocityFilterWeight: 0.7,
});
const datos = {
  tipo_id: getPaci.tipo_id,
  active_cups: true,
  active_encab_ampl: false,
};

const form_tabla_not_ant = ref({
  indice_i: {
    id: "indice_i",
    mask: "##",
    maxlength: "2",
    disable: true,
  },
  fecha: {
    id: "fecha",
    disable: true,
    maxlength: "10",
    required: true,
    campo_abierto: true,
  },
  hora: {
    id: "hora",
    disable: true,
    maxlength: "5",
    required: true,
    campo_abierto: true,
  },
  notas_atencion: {
    id: "notas_atencion",
    maxlength: "900",
    campo_abierto: true,
  },
});
const headers = [
  { name: "indice_i", label: "Item", align: "left", field: "indice_i", headerStyle: "width: 8%" },
  { name: "fecha", label: "Fecha", align: "left", field: "fecha", headerStyle: "width: 15%" },
  { name: "hora", label: "Hora", align: "left", field: "hora", headerStyle: "width: 10%" },
  { name: "notas_atencion", label: "Notas", align: "left", field: "notas_atencion", headerStyle: "width: 57%" },
  { name: "btn", label: "", align: "left", field: "btn", headerStyle: "width: 0%" },
];
const reg_tabla_not_ant = ref({
  indice_i: null,
  fecha: "",
  hora: "",
  notas_atencion: "",
});

const tabla_notas_atencion = reactive(
  JSON.parse(
    JSON.stringify(
      Array(13).fill({
        indice_i: null,
        fecha: "",
        hora: "",
        notas_atencion: "",
      })
    )
  )
);
const reg_paci = ref(regPaci());
const reg_acomp = ref(regAcomp());

const reg_lab021 = reactive({
  revoca_procedi: "",
  hora: dayjs().format("hh:mm"),

  tipo_sedacion: "",
  via_aerea: "",
  tubo_orotraqueal: "",
  ambito_atenc: "",
  ident_genero: "",

  // EXTRAS
  parentesco: "",
  opcion_lab021: "",
  fecha_act: "",
  llave: "",
  servicio: "",
  edad: "",
});

const form = ref({
  indice_i: {
    id: "indice_i",
    mask: "##",
    maxlength: "2",
    label: "Indice",
    disable: true,
  },
  fecha: {
    id: "fecha",
    label: "Fecha",
    tipo: "number",
    disable: true,
  },
  hora: {
    id: "hora",
    label: "Hora",
    tipo: "number",
    disable: true,
  },
  notas_atencion: {
    id: "notas_atencion",
    label: "Nota",
    maxlength: "900",
    campo_abierto: true,
  },
  tubo_orotraqueal: {
    id: "tubo_orotraqueal",
    maxlength: "3",
    label: "Tubo orotraqueal #",
    tipo: "number",
    required: true,
    campo_abierto: true,
  },

  tipo_sedacion: {
    id: "tipo_sedacion",
    required: true,
    label: "Tipo de sedación",
    campo_abierto: true,
  },
  via_aerea: {
    label: "Vía aérea",
    id: "via_aerea",
    required: true,
    campo_abierto: true,
  },
  test_recupera_anest: {
    id: "test_recupera_anest",
    maxlength: "900",
    label: "",
    rows: 5,
    campo_abierto: true,
  },
});
onMounted(() => {
  datosInit();
  ajustarTamanoCanvas();
  getFirmaProf();
});

const datosInit = () => {
  if (getSesion.novedad == "1") {
    reg_tabla_not_ant.value.indice_i = 1;
  }
  reg_tabla_not_ant.value.fecha = dayjs().format("DD-MM-YYYY");
  reg_tabla_not_ant.value.hora = dayjs().format("HH: mm");
  reg_lab021.fecha_act = dayjs(getEmpresa.FECHA_ACT).format("YYYY-MM-DD");
  reg_lab021.edad = calcularEdad(getAcomp.nacim);
  Object.assign(reg_paci.value, getPaci);
  Object.assign(reg_acomp.value, getAcomp);

  reg_lab021.parentesco = evaluarParentesco(getSesion.paren_acomp);
  reg_lab021.servicio = evaluarClaseServ(getSesion.clase);
};

const getFirmaProf = async () => {
  try {
    firma_prof.value = await _getFirma$({ codigo: Number(getProf.cod) });
  } catch (error) {
    console.error(error);
    CON851("?", "info", error);
  }
};

const validarDatos = async () => {
  grabarConsentimiento();
};

const grabarConsentimiento = async () => {
  const datos_format = JSON.parse(JSON.stringify(reg_lab021));
  const tabla_notas_aten = JSON.parse(JSON.stringify(tabla_notas_atencion));
  let datos = {
    estado: reg_lab021.opcion_lab021 == "AUTORIZAR" ? "1" : "2",
    llave_fact: `${getSesion.suc}${getSesion.clase}${getSesion.nro_comp}`,
    disentimiento: "N",
    llave_consen: `${getPaci.cod}00000000`,
    oper_consen: getSesion.oper,
    cod_consen: "LAB021",
    cod_med: getProf.cod,
    id_acomp: getAcomp.cod.padStart(15, "0"),
    id_testigo: getTestigo.cod.padStart(15, "0"),
    tipo_testigo: getSesion.tipo_testigo,
    paren_acomp: getSesion.paren_acomp,
    ...datos_format,
    tabla_notas_aten: tabla_notas_aten,
  };
  datos.tabla_notas_aten.forEach((item, index) => {
    const new_obj = {
      indice_i: item.indice_i,
      fecha: item.fecha,
      hora: item.hora,
      notas_atencion: item.notas_atencion,
    };
    datos[`tabla_notas_aten${(index + 1).toString().padStart(3, "0")}`] = Object.values(new_obj).join("|") + "|";
  });
  for (let i in datos) {
    if (typeof datos[i] == "object") delete datos[i];
  }
  await getDll$({ modulo: `save_consen.dll`, data: { ...datos } })
    .then(async (data) => {
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
  await save();
  try {
    await guardarEsquema$({
      base64: tabla_sedacion.value,
      codigo: `LAB021${llave}`,
    });

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
    const datos_lab21 = {
      autorizo: reg_lab021.opcion_lab021 == "AUTORIZAR" ? true : false,
      empresa: getEmpresa,
      paciente: getPaci,
      prof: getProf,
      acomp: getAcomp,
      testigo: getTestigo,
      cod_consen: "LAB021",
      firmas: {
        firma_prof: firma_prof.value ? true : false,
      },
      paren_acomp: getSesion.paren_acomp,
      fecha: reg_lab021.fecha_act,
      llave: reg_lab021.llave,
      tabla_notas_aten: tabla_notas_atencion,
      ...reg_lab021,
    };

    const firmas = {
      firma_prof: firma_prof.value,
      img_tabla_sedacion: tabla_sedacion.value,
    };

    const docDefinitionPrint = await utilsFormat({
      datos: firmas,
      content: impresionLAB021({
        datos: datos_lab21,
      }),
    });
    const docDefinitionFile = await utilsFormat({
      datos: firmas,
      content: impresionLAB021({
        datos: datos_lab21,
      }),
    });

    await impresion({ docDefinition: docDefinitionPrint });
    const response_impresion = await generarArchivo({
      docDefinition: docDefinitionFile,
      nomb_archivo: `${llave}-LAB-021`,
    });
    return response_impresion;
  } catch (error) {
    console.error("error -->", error);
  }
};

const callBackFirmaProf = (data_firma) => {
  data_firma && (firma_prof.value = data_firma);
};

const clear = () => {
  signaturePad.value.clearSignature();
};
const undo = () => {
  const signaturePadInstance = signaturePad.value.signaturePad;
  const data = signaturePadInstance.toData();
  if (data.length) {
    data.pop();
    signaturePadInstance.fromData(data);
  }
};
const ajustarTamanoCanvas = () => {
  const canvas = signaturePad.value.$el.querySelector("canvas");
  canvas.width = 894;
  canvas.height = 803;
  signaturePad.value.resizeCanvas();
};
const save = async () => {
  return new Promise((resolve, reject) => {
    const canvas = signaturePad.value.$el.querySelector("canvas");
    const imgWidth = 894;
    const imgHeight = 803;

    const tempCanvas = document.createElement("canvas");
    tempCanvas.width = imgWidth;
    tempCanvas.height = imgHeight;
    const tempCtx = tempCanvas.getContext("2d");

    const backgroundImg = new window.Image();
    backgroundImg.src = backgroundImage;

    backgroundImg.onload = () => {
      tempCtx.drawImage(backgroundImg, 0, 0, imgWidth, imgHeight);

      const signatureDataUrl = signaturePad.value.saveSignature().data;

      if (signatureDataUrl) {
        const signatureImg = new window.Image();
        signatureImg.src = signatureDataUrl;
        signatureImg.onload = () => {
          tempCtx.drawImage(signatureImg, 0, 0, imgWidth, imgHeight);
          tabla_sedacion.value = tempCanvas.toDataURL("image/png");
          resolve(tabla_sedacion.value);
        };
        signatureImg.onerror = (err) => {
          console.error("Error al cargar los trazos:", err);
          reject(err);
        };
      } else {
        tabla_sedacion.value = tempCanvas.toDataURL("image/png");
        resolve(tabla_sedacion.value);
      }
    };
    backgroundImg.onerror = (err) => {
      console.error("Error al cargar la imagen de fondo:", err);
      reject(err);
    };
  });
};

const agregarNotaAtenc = () => {
  if (reg_tabla_not_ant.value.notas_atencion.trim().length == 0) {
    return CON851("?", "info", "El campo esta vacio");
  }

  tabla_notas_atencion[reg_tabla_not_ant.value.indice_i - 1].indice_i = reg_tabla_not_ant.value.indice_i;
  tabla_notas_atencion[reg_tabla_not_ant.value.indice_i - 1].fecha = reg_tabla_not_ant.value.fecha;
  tabla_notas_atencion[reg_tabla_not_ant.value.indice_i - 1].hora = reg_tabla_not_ant.value.hora;
  tabla_notas_atencion[reg_tabla_not_ant.value.indice_i - 1].notas_atencion = reg_tabla_not_ant.value.notas_atencion;
  reg_tabla_not_ant.value.indice_i++;
  reg_tabla_not_ant.value.hora = dayjs().format("HH: mm");
  reg_tabla_not_ant.value.notas_atencion = "";
  foco_(form_tabla_not_ant, "notas_atencion");
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

.signature-container {
  position: relative;
  width: 100%;
  height: 500px;
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.custom-card-size {
  width: 800px;
  height: 520px;
}
.sedacion-scroll-container {
  width: 100%;
  overflow-x: auto;
}

.sedacion-scroll-outer {
  width: 100%;
  overflow-x: auto;
}

.sedacion-scroll-inner {
  display: flex;
  justify-content: center;
  min-width: 100%;
}

.sedacion-fixed-area {
  position: relative;
  width: 894px;
  height: 803px;
  min-width: 894px;
  min-height: 803px;
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 894px;
  height: 803px;
  z-index: 1;
  pointer-events: none;
  user-select: none;
}

.signature-pad {
  position: absolute;
  top: 0;
  left: 0;
  width: 894px;
  height: 803px;
  z-index: 2;
}
.sedacion-fixed-area {
  position: relative;
  width: 894px;
  height: 803px;
  min-width: 894px;
  min-height: 803px;
  margin: 0 auto;
}

.background-image,
.signature-pad {
  position: absolute;
  top: 0;
  left: 0;
  width: 894px;
  height: 803px;
  z-index: 1;
}
.signature-pad {
  z-index: 2;
}
</style>
