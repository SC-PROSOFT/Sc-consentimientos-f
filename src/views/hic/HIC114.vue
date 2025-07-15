<template>
    <div>
      <q-card class="q-mx-auto format q-mb-lg" style="overflow: auto">
        <q-card-section>
          <div class="text-center">
            <q-toggle
              :disable="getSesion.novedad === '4'"
              v-model="HIC113.opcion_hic113"
              color="primary"
              keep-color
              false-value="REVOCAR"
              true-value="AUTORIZAR"
              unchecked-icon="block"
              checked-icon="check_circle"
              label="¿Autorizar o revocar este consentimiento?"
            />
            <p :class="HIC113.opcion_hic113 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
              <q-chip :color="HIC113.opcion_hic113 == 'AUTORIZAR' ? 'green' : 'red'" class="text-white" v-if="HIC113.opcion_hic113">
                {{ HIC113.opcion_hic113 }}
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
                  v-model="HIC113.cod_diagn"
                  :field="form.codigo"
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
                    <Input_ v-model="reg_tabla_servicio.nomb_acomp" :field="form_tabla_servicio.nomb_acomp" />
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
              <div class="text-center" style="border: 1px solid #ccc; width: 16%">
                <p style="font-weight: bold; margin-top: 10px">Terapia ocupacional</p>
              </div>
              <div class="text-center" style="border: 1px solid #ccc; width: 13%">
                <p style="font-weight: bold; margin-top: 10px">Terapia fisica</p>
              </div>
              <div class="text-center" style="border: 1px solid #ccc; width: 19%">
                <p style="font-weight: bold; margin-top: 10px">Terapia fonoaudiologia</p>
              </div>
              <div class="text-center" style="border: 1px solid #ccc; width: 22%">
                <p style="font-weight: bold; margin-top: 10px">Terapia modalidades hidricas</p>
              </div>
              <div class="text-center" style="border: 1px solid #ccc; width: 12%">
                <p style="font-weight: bold; margin-top: 10px">Psicologia</p>
              </div>
              <div class="text-center" style="border: 1px solid #ccc; width: 18%">
                <p style="font-weight: bold; margin-top: 10px">Rehabilitacion cognitivo</p>
              </div>
              <div class="text-center" style="border: 1px solid #ccc; width: 16%">
                <p style="font-weight: bold; margin-top: 10px">{{ totalTerapOcupa }}</p>
              </div>
              <div class="text-center" style="border: 1px solid #ccc; width: 13%">
                <p style="font-weight: bold; margin-top: 10px">{{ totalTerapFisica }}</p>
              </div>
              <div class="text-center" style="border: 1px solid #ccc; width: 19%">
                <p style="font-weight: bold; margin-top: 10px">{{ totalTerapFonoaudio }}</p>
              </div>
              <div class="text-center" style="border: 1px solid #ccc; width: 22%">
                <p style="font-weight: bold; margin-top: 10px">{{ totalTerapModalidHidric }}</p>
              </div>
              <div class="text-center" style="border: 1px solid #ccc; width: 12%">
                <p style="font-weight: bold; margin-top: 10px">{{ totalPsicologica }}</p>
              </div>
              <div class="text-center" style="border: 1px solid #ccc; width: 18%">
                <p style="font-weight: bold; margin-top: 10px">{{ totalRehabilitaCognitivo }}</p>
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
            :disable="HIC113.opcion_hic113 ? false : true"
            @click="validarDatos"
            icon-right="check_circle"
            class="q-mb-md"
            color="green"
            label="GRABAR"
            type="submit"
          />
        </div>
        <CONSEN800 v-if="show_consen800" @esc="callbackCONSEN800" @enter="callbackCONSEN800" />
      </q-card>
    </div>
  </template>
  <script setup>
  import { useModuleFormatos, useApiContabilidad, useModuleCon851p, useModuleCon851 } from "@/store";
  import { ref, reactive, defineAsyncComponent, onMounted, computed } from "vue";
  import { impresionHIC113, impresion, generarArchivo } from "@/impresiones";
  import { utilsFormat, calcularEdad } from "@/formatos/utils";
  import { useRouter } from "vue-router";
  import { foco_ } from "@/setup";
  import dayjs from "dayjs";
  
  const CONSEN800 = defineAsyncComponent(() => import("@/components/consen/CONSEN800.vue"));
  const ContainerFirma = defineAsyncComponent(() => import("../../components/global/ContainerFirma.vue"));
  const { getDll$, _getFirma$, guardarFile$, _getHuella$, enviarCorreo$, getEncabezado, _getImagen$ } = useApiContabilidad();
  const { getPaci, getAcomp, getProf, getEmpresa, getSesion, getTestigo } = useModuleFormatos();
  const { CON851P } = useModuleCon851p();
  const { CON851 } = useModuleCon851();
  const router = useRouter();
  
  const firma_recibida_acomp = ref("");
  const firma_recibida = ref("");
  const firma_recibida_test = ref("");
  const firma_prof = ref(null);
  const firma_paci = ref(null);
  const huella_paci = ref(null);
  const res_consen = ref(null);
  const descrip_diagn = ref("");
  const show_consen800 = ref(false);
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
      disable: true,
      maxlength: "10",
      required: true,
      campo_abierto: true,
    },
  
    tipo_serv: {
      id: "tipo_serv",
      maxlength: "1",
      required: true,
      campo_abierto: true,
    },
    nomb_acomp: {
      id: "nomb_acomp",
      disable: true,
      maxlength: "100",
      required: true,
      campo_abierto: true,
    },
  });
  const headers = [
    { name: "indice_i", label: "Item", align: "left", field: "indice_i", headerStyle: "width: 8%" },
    { name: "fecha", label: "Fecha", align: "left", field: "fecha", headerStyle: "width: 15%" },
    { name: "descrip_tipo_serv", label: "Tipo de servicio", align: "left", field: "descrip_tipo_serv", headerStyle: "width: 27%" },
    { name: "nomb_acomp", label: "Nombre acompañante", align: "left", field: "nomb_acomp", headerStyle: "width: 40%" },
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
    { value: 1, label: "Terapia ocupacional" },
    { value: 2, label: "Terapia fisica" },
    { value: 3, label: "Terapia fonoaudiologia" },
    { value: 4, label: "Terapia modalidades hidricas" },
    { value: 5, label: "Psicologia" },
    { value: 6, label: "Rehabilitacion cognitivo" },
  ]);
  const tabla_servicio = reactive(
    JSON.parse(
      JSON.stringify(
        Array(25).fill({
          indice_i: null,
          fecha: "",
          tipo_serv: "",
          cod_acomp: "",
          nomb_acomp: "",
        })
      )
    )
  );
  const HIC113 = reactive({
    opcion_hic113: "",
    fecha: "",
    cod_diagn: "",
    llave: "",
  });
  const form = ref({
    codigo: {
      id: "codigo",
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
  
  const totalTerapOcupa = computed(() => {
    return tabla_servicio.filter((item) => item.tipo_serv == 1).length;
  });
  const totalTerapFisica = computed(() => {
    return tabla_servicio.filter((item) => item.tipo_serv == 2).length;
  });
  const totalTerapFonoaudio = computed(() => {
    return tabla_servicio.filter((item) => item.tipo_serv == 3).length;
  });
  const totalTerapModalidHidric = computed(() => {
    return tabla_servicio.filter((item) => item.tipo_serv == 4).length;
  });
  const totalPsicologica = computed(() => {
    return tabla_servicio.filter((item) => item.tipo_serv == 5).length;
  });
  const totalRehabilitaCognitivo = computed(() => {
    return tabla_servicio.filter((item) => item.tipo_serv == 6).length;
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
      Object.assign(HIC113, res_consen.value.reg_coninf.datos);
      Object.assign(tabla_servicio, res_consen.value.reg_coninf.datos.tabla_servicio);
  
      consultarEnfermedad();
  
      const maxIndice = Math.max(...tabla_servicio.map((item) => Number(item.indice_i) || 0));
      reg_tabla_servicio.value.indice_i = maxIndice + 1;
      reg_tabla_servicio.value.fecha = dayjs().format("DD-MM-YYYY");
  
      HIC113.opcion_hic113 = "AUTORIZAR";
      foco_(form_tabla_servicio, "tipo_serv");
    }
  
    if (getSesion.novedad == "1") {
      reg_tabla_servicio.value.indice_i = 1;
    }
    reg_tabla_servicio.value.fecha = dayjs().format("DD-MM-YYYY");
    reg_tabla_servicio.value.nomb_acomp = getAcomp.descrip;
    reg_tabla_servicio.value.cod_acomp = getAcomp.cod;
    HIC113.fecha = dayjs(getEmpresa.FECHA_ACT).format("YYYY-MM-DD");
    HIC113.edad = calcularEdad(getAcomp.nacim);
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
    const datos_format = JSON.parse(JSON.stringify(HIC113));
    //   const tabla_servicio = JSON.parse(JSON.stringify(tabla_servicio));
  
    let datos = {
      estado: HIC113.opcion_hic113 == "AUTORIZAR" ? "1" : "2",
      llave_fact: `${getSesion.suc}${getSesion.clase}${getSesion.nro_comp}`,
      disentimiento: "N",
      llave_consen: getSesion.novedad == "4" ? Object.values(res_consen.value.reg_coninf.llave).join("") : `${getPaci.cod}00000000`,
      oper_consen: getSesion.oper,
      cod_consen: "HIC113",
      cod_med: getProf.cod,
      id_acomp: getAcomp.cod.padStart(15, "0"),
      id_testigo: getTestigo.cod.padStart(15, "0"),
      tipo_testigo: getSesion.tipo_testigo,
      paren_acomp: getSesion.paren_acomp,
      ...datos_format,
      tabla_servicio: tabla_servicio,
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
        await guardarFile$({ base64: firma_recibida_test.value, codigo: `T${llave}` });
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
      const datos_hic113 = {
        autorizo: HIC113.opcion_hic113 == "AUTORIZAR" ? true : false,
        empresa: getEmpresa,
        paciente: getPaci,
        prof: getProf,
        acomp: getAcomp,
        testigo: getTestigo,
        cod_consen: "HIC113",
        firmas: {
          firma_paci: firma_recibida.value ? true : false,
          huella_paci: huella_paci.value ? true : false,
          firma_acomp: firma_recibida_acomp.value ? true : false,
          firma_prof: firma_prof.value ? true : false,
          firma_test: firma_recibida_test.value ? true : false,
        },
        paren_acomp: getSesion.paren_acomp,
        fecha: HIC113.fecha,
        descrip_diagn: descrip_diagn.value,
        tabla_servicio: tabla_servicio,
        ...HIC113,
      };
  
      const firmas = {
        img_firma_consen: firma_recibida.value,
        img_firma_paci: firma_recibida.value,
        img_firma_acomp: firma_recibida_acomp.value,
        img_huella_paci: huella_paci.value,
        firma_prof: firma_prof.value,
        img_firma_testigo: firma_recibida_test.value,
      };
  
      const docDefinitionPrint = await utilsFormat({
        datos: firmas,
        content: impresionHIC113({
          datos: datos_hic113,
        }),
      });
      const docDefinitionFile = await utilsFormat({
        datos: firmas,
        content: impresionHIC113({
          datos: datos_hic113,
        }),
      });
  
      await impresion({ docDefinition: docDefinitionPrint });
      const response_impresion = await generarArchivo({
        docDefinition: docDefinitionFile,
        nomb_archivo: `${llave}-HIC-113`,
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
    if (!reg_tabla_servicio.value.tipo_serv) {
      return CON851("?", "info", "El campo esta vacio", () => foco_(form_tabla_servicio, "tipo_serv"));
    }
    if (reg_tabla_servicio.value.indice_i > 25) {
      return CON851("?", "info", "Alcanzo el limite de items (25) en la tabla ");
    }
    tabla_servicio[reg_tabla_servicio.value.indice_i - 1].indice_i = reg_tabla_servicio.value.indice_i;
    tabla_servicio[reg_tabla_servicio.value.indice_i - 1].fecha = reg_tabla_servicio.value.fecha;
    tabla_servicio[reg_tabla_servicio.value.indice_i - 1].tipo_serv = reg_tabla_servicio.value.tipo_serv.toString();
    tabla_servicio[reg_tabla_servicio.value.indice_i - 1].descrip_tipo_serv = tipos_servicio.value.find(
      (el) => el.value == reg_tabla_servicio.value.tipo_serv
    ).label;
    tabla_servicio[reg_tabla_servicio.value.indice_i - 1].nomb_acomp = getAcomp.descrip;
    tabla_servicio[reg_tabla_servicio.value.indice_i - 1].cod_acomp = getAcomp.cod;
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
        data: { llave: "2" + HIC113.cod_diagn },
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
  const callbackCONSEN800 = (data) => {
    if (data) {
      HIC113.cod_diagn = data.cod;
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
  