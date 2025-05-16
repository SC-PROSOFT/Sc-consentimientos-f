<template>
  <q-card class="q-mx-auto format">
    <div>
      <q-card-section>
        <div class="text-center">
          <q-toggle
            v-model="opcion_hic069"
            color="primary"
            keep-color
            false-value="REVOCAR"
            true-value="AUTORIZAR"
            unchecked-icon="block"
            checked-icon="check_circle"
            label="¿Autorizar o revocar este consentimiento?"
          />
          <p :class="opcion_hic069 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
            <q-chip :color="opcion_hic069 == 'AUTORIZAR' ? 'green' : 'red'" class="text-white" v-if="opcion_hic069">
              {{ opcion_hic069 }}
            </q-chip>
          </p>
        </div>
        <div class="row justify-between items-center">
          <div class="row">
            <p style="font-weight: bold">Fecha:</p>
            <p>&nbsp;{{ HIC069.fecha }}</p>
          </div>
          <div class="row">
            <p style="font-weight: bold">Hora:</p>
            <p>&nbsp;{{ HIC069.hora }}</p>
          </div>
          <div class="row">
            <p style="font-weight: bold">Nombres y apellidos del paciente:</p>
            <p>&nbsp;{{ getPaci.descrip }}</p>
          </div>
        </div>
        <div class="row justify-between items-center">
          <div class="row">
            <p style="font-weight: bold">Edad:</p>
            <p>&nbsp;{{ calcularEdad(getPaci.nacim) }}</p>
          </div>
          <div class="row">
            <p style="font-weight: bold">Sexo:</p>
            <p>&nbsp;{{ getPaci.sexo }}</p>
          </div>
          <div class="row">
            <p style="font-weight: bold">Fecha de nacimiento:</p>
            <p>&nbsp; {{ dayjs(getPaci.nacim).format("YYYY-MM-DD") }}</p>
          </div>
          <div class="row">
            <p style="font-weight: bold">Dirección:</p>
            <p>&nbsp;{{ getPaci.direccion }}</p>
          </div>
        </div>
        <div class="row justify-between items-center">
          <div class="row">
            <p style="font-weight: bold">Telefono:</p>
            <p>&nbsp; {{ getPaci.telefono }}</p>
          </div>
          <div class="row">
            <p style="font-weight: bold">EPS:</p>
            <p>&nbsp;{{ getPaci.descrip_eps }}</p>
          </div>
        </div>
        <div>
          <p style="text-align: justify">
            Yo <span class="text-bold">{{ getPaci.descrip }}</span> identificada con C.C. <span class="text-bold">{{ getPaci.cod }}</span
            >, mayor de edad, actuando en calidad de representante legal y/o tutor.
          </p>
        </div>
        <div class="text-center" style="width: 100%">
          <p style="font-weight: bold; margin-top: 10px; text-decoration: underline">DECLARO LIBRE Y VOLUNTARIAMENTE</p>
        </div>
        <div>
          <p style="text-align: justify">
            En concordancia con el Artículo 1502 del Código Civil; que he comprendido satisfactoriamente la información que me han dado con respecto a
            mi estado de salud y la necesidad de atención domiciliaria, por lo tanto, por lo tanto,
            <q-radio color="primary" disabled v-model="autoriza" val="S" label="AUTORIZO" />
            <q-radio color="primary" disabled v-model="autoriza" val="N" label="NO AUTORIZO" />
            al personal de la IPS ESE PRIMER NIVEL GRANADA SALUD, para que ingrese a mi domicilio, y, acepto que me realicen los procedimientos de
            enfermería y/o medicina general según se requieran, además de lo anterior me comprometo a:
          </p>
          <ul>
            <li>Seguir las recomendaciones dadas por el personal de salud durante la visita domiciliaria.</li>
            <li>Tener un trato cordial y respetuoso con el personal de salud.</li>
            <li>Preguntar cuando no comprenda algo relacionado con mi salud.</li>
            <li>Acatar las indicaciones para la realización de los procedimientos de enfermería en casa.</li>
          </ul>
          <p style="text-align: justify">
            <span class="text-bold"> AUTORIZO </span> al personal asistencial de la entidad, para que, en ejercicio legal de su profesión y de acuerdo
            con los procedimientos establecidos, se realice la atención domiciliaria.
          </p>
          <div class="text-center">
            <span class="text-bold">Procedimientos</span>
          </div>
        </div>
        <div class="row justify-between items-center">
          <div>
            <div>
              <q-checkbox color="primary" keep-color label="Curación" v-model="HIC069.curacion" true-value="S" false-value="N" />
            </div>
            <div>
              <q-checkbox color="primary" keep-color label="Cambio de sonda" v-model="HIC069.cambio_sonda" true-value="S" false-value="N" />
            </div>
          </div>

          <div>
            <div>
              <q-checkbox color="primary" keep-color label="Glucometría" v-model="HIC069.glucometria" true-value="S" false-value="N" />
            </div>
            <div>
              <q-checkbox color="primary" keep-color label="Retiro de sutura" v-model="HIC069.retiro_sutura" true-value="S" false-value="N" />
            </div>
          </div>

          <div>
            <div>
              <q-checkbox color="primary" keep-color label="Lavado nasal" v-model="HIC069.lavado_nasal" true-value="S" false-value="N" />
            </div>
            <div>
              <q-checkbox color="primary" keep-color label="Lavado ocular" v-model="HIC069.lavado_ocular" true-value="S" false-value="N" />
            </div>
          </div>
          <div>
            <q-checkbox color="primary" keep-color label="Lavado de oído" v-model="HIC069.lavado_oido" true-value="S" false-value="N" />
          </div>
        </div>
        <div class="row">
          <p>Administración de medicamento:</p>
          <Input_ v-model="HIC069.admin_medicam" :field="form.admin_medicam" :inputStyle="{ width: '600px' }" />
        </div>
        <div class="q-my-sm">
          <p class="text-bold">DESCRIPCIÓN DEL PROCEDIMIENTO (técnica-materiales utilizados- Observaciones):</p>
          <TextArea_ v-model="HIC069.descrip_procedim" :field="form.descrip_procedim" />
        </div>
      </q-card-section>
    </div>
    <q-separator />
    <q-card-actions align="around" class="row">
      <div class="col-12 row justify-around">
        <ContainerFirma
          :quien_firma="getAcomp.cod ? 'FIRMA ACOMPAÑANTE' : 'FIRMA PACIENTE'"
          :firmador="getAcomp.cod ? getAcomp.descrip : getPaci.descrip"
          :registro_profe="getAcomp.cod ? getAcomp.cod : getPaci.cod"
          :tipo_doc="getAcomp.cod ? getAcomp.tipo_id : getPaci.tipo_id"
          @reciFirma="callBackFirma"
          class="col-4"
        />
        <ContainerFirma
          quien_firma="FIRMA TESTIGO"
          :firmador="getTestigo.descrip"
          :registro_profe="getTestigo.cod"
          @reciFirma="callBackFirmaTest"
          :codigo_firma="getTestigo.cod"
          class="col-4"
        />
        <ContainerFirma
          disable
          quien_firma="FIRMA PROFESIONAL"
          :firma_="firma_prof"
          :firmador="getProf.descrip"
          :descrip_prof="getProf.descrip_atiende"
          :registro_profe="getProf.cod"
          :codigo_firma="getProf.cod"
          class="col-4"
        />
      </div>
    </q-card-actions>

    <div class="col-12 row justify-center q-my-md">
      <q-btn
        :disable="opcion_hic069 ? false : true"
        @click="validarDatos"
        icon-right="check_circle"
        class="q-mr-lg"
        color="green"
        label="GRABAR"
        type="submit"
      />
    </div>
  </q-card>
</template>

<script setup>
import { useModuleFormatos, useApiContabilidad, useModuleCon851, useModuleCon851p } from "@/store";
import { impresionHIC069, impresion, generarArchivo } from "@/impresiones";
import { ref, defineAsyncComponent, onMounted, reactive, computed } from "vue";
import { calcularEdad, utilsFormat } from "@/formatos/utils";
import { useRouter } from "vue-router";
import dayjs from "dayjs";

const ContainerFirma = defineAsyncComponent(() => import("@/components/global/containerFirma.vue"));
const router = useRouter();

const { getDll$, _getFirma$, _getHuella$, guardarFile$, enviarCorreo$, getEncabezado } = useApiContabilidad();
const { getPaci, getAcomp, getHc, getProf, getEmpresa, getSesion, getTestigo } = useModuleFormatos();
const { CON851P } = useModuleCon851p();
const { CON851 } = useModuleCon851();

const firma_recibida_test = ref("");
const firma_recibida_acomp = ref("");
const firma_recibida = ref("");
const huella_paci = ref(null);
const firma_prof = ref(null);
const nit_usu = ref(parseInt(getEmpresa.nitusu) || 0);

const HIC069 = reactive({
  fecha: "",
  hora: "",
  curacion: "N",
  cambio_sonda: "N",
  glucometria: "N",
  retiro_sutura: "N",
  lavado_nasal: "N",
  lavado_ocular: "N",
  lavado_oido: "N",
  admin_medicam: "",
  descrip_procedim: "",
});
const form = ref({
  admin_medicam: {
    id: "admin_medicam",
    maxlength: "250",
    label: "",
    campo_abierto: true,
  },
  descrip_procedim: {
    id: "descrip_procedim",
    maxlength: "500",
    label: "",
    rows: 5,
    campo_abierto: true,
  },
});

const opcion_hic069 = ref(null);
const autoriza = computed(() => {
  switch (opcion_hic069.value) {
    case "AUTORIZAR":
      return "S";
    case "REVOCAR":
      return "N";
    default:
      return "";
  }
});
onMounted(() => {
  HIC069.fecha = dayjs(getEmpresa.fecha_act).format("YYYY-MM-DD");
  HIC069.hora = dayjs().format("HH:mm");
  getFirmaProf();
});

const getFirmaProf = async () => {
  try {
    firma_prof.value = await _getFirma$({ codigo: Number(getProf.cod) });
    huella_paci.value = await _getHuella$({ codigo: getPaci.cod });
  } catch (error) {
    console.error(error);
    CON851("?", "info", error);
  }
};

const validarDatos = () => {
  grabarConsentimiento();
};

const grabarConsentimiento = async () => {
  const datos_format = JSON.parse(JSON.stringify(HIC069));
  let datos = {
    nit_entid: nit_usu.value,
    estado: opcion_hic069.value == "AUTORIZAR" ? "1" : "2",
    id_acomp: getAcomp.cod.padStart(15, "0"),
    paren_acomp: getSesion.paren_acomp,
    id_testigo: getTestigo.cod.padStart(15, "0"),
    tipo_testigo: getSesion.tipo_testigo,
    oper_consen: getSesion.oper,
    llave_consen: getHc.llave,
    cod_med: getProf.cod,
    cod_consen: "HIC069",
    disentimiento: "N",
    ...datos_format,
  };

  getDll$({ modulo: `save_consen.dll`, data: { ...datos } })
    .then((data) => {
      if (data?.llave_consen) {
        const fecha = data?.llave_consen.slice(23, 31);
        return grabarFirmaConsen(data?.llave_consen);
      }
      CON851("?", "error", "Error al guardar el consentimiento");
    })
    .catch((error) => {
      console.error(error);
      CON851("?", "error", error);
    });
};

const grabarFirmaConsen = async (llave) => {
  try {
    await guardarFile$({ base64: firma_recibida.value, codigo: `P${llave}` });
    getAcomp.cod.trim() && (await guardarFile$({ base64: firma_recibida_acomp.value, codigo: `A${llave}` }));

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
    const datos_hic069 = {
      autorizo: opcion_hic069.value == "AUTORIZAR" ? true : false,
      empresa: getEmpresa,
      testigo: getTestigo,
      paciente: getPaci,
      prof: getProf,
      acomp: getAcomp,
      paren_acomp: getSesion.paren_acomp,
      firmas: {
        firma_paci: firma_recibida.value ? true : false,
        huella_paci: huella_paci.value ? true : false,
        firma_acomp: firma_recibida_acomp.value ? true : false,
        firma_prof: firma_prof.value ? true : false,
        firma_test: firma_recibida_test.value ? true : false,
      },
      ...HIC069,
    };

    const firmas = {
      img_firma_testigo: firma_recibida_test.value,
      img_firma_consen: firma_recibida.value,
      img_firma_paci: firma_recibida.value,
      img_huella_paci: huella_paci.value,
      img_firma_acomp: firma_recibida_acomp.value,
      firma_prof: firma_prof.value,
    };

    const docDefinitionPrint = await utilsFormat({
      datos: { ...firmas, cod_consen: "HIC069" },
      content: impresionHIC069({
        datos: datos_hic069,
      }),
    });
    const docDefinitionFile = await utilsFormat({
      datos: { ...firmas, cod_consen: "HIC069" },
      content: impresionHIC069({
        datos: datos_hic069,
      }),
    });

    await impresion({ docDefinition: docDefinitionPrint });
    const response_impresion = await generarArchivo({ docDefinition: docDefinitionFile, nomb_archivo: `${llave}-HIC-069` });
    return response_impresion;
  } catch (error) {
    console.error("error -->", error);
  }
};

const callBackFirma = (data_firma) => {
  if (getAcomp.cod) {
    data_firma && (firma_recibida_acomp.value = data_firma);
  } else {
    data_firma && (firma_recibida.value = data_firma);
  }
};

const callBackFirmaTest = (data_firma) => {
  data_firma && (firma_recibida_test.value = data_firma);
};
</script>
