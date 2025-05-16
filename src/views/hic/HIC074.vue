<template>
  <q-card class="q-mx-auto format">
    <div>
      <q-card-section>
        <div class="text-center">
          <q-toggle
            v-model="opcion_hic074"
            color="primary"
            keep-color
            false-value="REVOCAR"
            true-value="AUTORIZAR"
            unchecked-icon="block"
            checked-icon="check_circle"
            label="¿Autorizar o revocar este consentimiento?"
          />
          <p :class="opcion_hic074 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
            <q-chip :color="opcion_hic074 == 'AUTORIZAR' ? 'green' : 'red'" class="text-white" v-if="opcion_hic074">
              {{ opcion_hic074 }}
            </q-chip>
          </p>
        </div>
        <div class="row q-mt-md q-mb-md">
          <div class="text-center" style="border: 1px solid #ccc; width: 100%">
            <p style="font-weight: bold; margin-top: 10px; margin-left: 10px">DATOS DE IDENTIFICACIÓN</p>
          </div>
          <div class="text-left row" style="border: 1px solid #ccc; width: 100%">
            <p style="font-weight: bold; margin-top: 10px; margin-left: 10px">Nombres y apellidos:</p>
            <p style="margin-top: 10px; margin-left: 10px">{{ getPaci.descrip }}</p>
          </div>
          <div class="text-left row" style="border: 1px solid #ccc; width: 60%">
            <p style="font-weight: bold; margin-top: 10px; margin-left: 10px">Documento de Identificación:</p>
            <p style="margin-top: 10px; margin-left: 10px">{{ getPaci.cod }}</p>
          </div>
          <div class="text-left row" style="border: 1px solid #ccc; width: 40%">
            <p style="font-weight: bold; margin-top: 10px; margin-left: 10px">De:</p>
            <p style="margin-top: 10px; margin-left: 10px">{{ getPaci.descrip_ciudad }}</p>
          </div>
          <div class="text-left row" style="border: 1px solid #ccc; width: 20%">
            <p style="font-weight: bold; margin-top: 10px; margin-left: 10px">Fecha:</p>
            <p style="margin-top: 10px; margin-left: 10px">{{ HIC074.fecha_act }}</p>
          </div>
          <div class="text-left row" style="border: 1px solid #ccc; width: 80%">
            <p style="font-weight: bold; margin-top: 10px; margin-left: 10px">Lugar:</p>
            <p style="margin-top: 10px; margin-left: 10px">{{ getEmpresa.nomusu }}</p>
          </div>
        </div>
        <div>
          <p style="text-align: justify; font-style: italic">
            Una vez conocido, explicado y entendido el Procedimiento o el tratamiento, quien sea requiere y acepte el mismo, firmara en constancia
            este documento, haciendo claridad que el objetivo es el mejoramiento de su calidad de vida pero que, si en algún momento del manejo
            establecido el usuario desea no continuar o no aceptar algún o todos los tratamientos propuestos, está en la libertad de solicitarlo.
          </p>
          <div class="text-center" style="width: 100%">
            <p style="font-weight: bold; margin-top: 10px">DECLARACIÓN DEL USUARIO</p>
          </div>
        </div>
        <div class="row">
          <div class="text-justify" style="width: 100%">
            <p class="q-ml-xs q-mr-xs">
              Me han explicado y he entendido satisfactoriamente la naturaleza y propósitos de este procedimiento, también me han aclarado las dudas y
              me han dicho las ventajas y desventajas. Comprendo perfectamente que el procedimiento va a consistir en la toma de muestra para
              citología cervicouterina realizada con un especulo desechable, en donde se toma una muestra con un citocepillo de la zona
              endocervical(centro del cuello uterino) y con una espátula se toma una muestra exocervical (de alrededor del cuello del útero) esto se
              fija en una placa para ser llevado a lectura, el resultado debe recogerse de 10 a 15 días después de la toma y en caso de alguna
              alteración el profesional que toma la muestra se comunicara vía telefónica para determinar el paso a seguir, es posible que la citología
              genere incomodidad pélvica pero es un proceso rápido y no doloroso, si conozco algún estado que debo notificar antes de la toma lo
              especifico aquí: (uso de especulo pequeño, tratamientos previos como crioterapias, histerectomía, u otros eventos) tales como:
            </p>
            <div class="q-mt-lg q-mb-xs">
              <Input_ class="q-mt-lg q-mb-xs" v-model="HIC074.otros_eventos" :field="form.otros_eventos" />
            </div>
            <p class="q-ml-xs q-mr-xs">
              Entiendo que en caso de no aceptar el procedimiento aquí propuesto acepto la total responsabilidad de los inconvenientes o consecuencias
              que tenga la no realización de este procedimiento.
            </p>
            <p class="q-ml-xs q-mr-xs">
              Doy mi consentimiento para que me realicen la toma de muestra para citología cervicouterina en constancia firmo.
            </p>
          </div>
        </div>

        <div class="text-center" style="width: 100%">
          <p style="font-weight: bold; margin-top: 10px">PROFESIONAL QUE REALIZA EL PROCEDIMIENTO</p>
        </div>

        <div class="text-justify" style="width: 100%">
          <p style="margin-top: 10px">
            Profesional responsable {{ getProf.descrip }} he informado del propósito y naturaleza del tratamiento, descrito arriba, las ventajas y los
            resultados que se esperan.
          </p>
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
        :disable="opcion_hic074 ? false : true"
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
import { impresionHIC074, impresion, generarArchivo } from "@/impresiones";
import { ref, defineAsyncComponent, onMounted, reactive } from "vue";
import { utilsFormat } from "@/formatos/utils";
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

const HIC074 = reactive({
  fecha_act: "",
  otros_eventos: "",
});
const form = ref({
  otros_eventos: {
    id: "otros_eventos",
    maxlength: "250",
    label: "",
    campo_abierto: true,
  },
});
const opcion_hic074 = ref(null);

onMounted(() => {
  HIC074.fecha_act = dayjs(getEmpresa.fecha_act).format("YYYY-MM-DD");
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
  const datos_format = JSON.parse(JSON.stringify(HIC074));
  let datos = {
    nit_entid: nit_usu.value,
    estado: opcion_hic074.value == "AUTORIZAR" ? "1" : "2",
    id_acomp: getAcomp.cod.padStart(15, "0"),
    paren_acomp: getSesion.paren_acomp,
    id_testigo: getTestigo.cod.padStart(15, "0"),
    tipo_testigo: getSesion.tipo_testigo,
    oper_consen: getSesion.oper,
    llave_consen: getHc.llave,
    cod_med: getProf.cod,
    cod_consen: "HIC074",
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
    const datos_hic074 = {
      autorizo: opcion_hic074.value == "AUTORIZAR" ? true : false,
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
      ...HIC074,
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
      datos: { ...firmas, cod_consen: "HIC074" },
      content: impresionHIC074({
        datos: datos_hic074,
      }),
    });
    const docDefinitionFile = await utilsFormat({
      datos: { ...firmas, cod_consen: "HIC074" },
      content: impresionHIC074({
        datos: datos_hic074,
      }),
    });

    await impresion({ docDefinition: docDefinitionPrint });
    const response_impresion = await generarArchivo({ docDefinition: docDefinitionFile, nomb_archivo: `${llave}-HIC-074` });
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
