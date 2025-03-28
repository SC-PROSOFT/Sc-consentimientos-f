<template>
  <q-card class="q-mx-auto format">
    <div>
      <q-card-section>
        <div class="text-center">
          <q-toggle
            v-model="opcion_hic083"
            color="primary"
            keep-color
            false-value="REVOCAR"
            true-value="AUTORIZAR"
            unchecked-icon="block"
            checked-icon="check_circle"
            label="¿Autorizar o revocar este consentimiento?"
          />
          <p :class="opcion_hic083 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
            <q-chip :color="opcion_hic083 == 'AUTORIZAR' ? 'green' : 'red'" class="text-white" v-if="opcion_hic083">
              {{ opcion_hic083 }}
            </q-chip>
          </p>
        </div>
        <div class="row q-mt-md q-mb-md">
          <div style="border: 1px solid #ccc; width: 30%">
            <p class="text-left" style="font-weight: bold; margin-top: 10px; margin-left: 10px">Nombre del paciente</p>
          </div>
          <div style="border: 1px solid #ccc; width: 70%">
            <p class="text-left" style="margin-top: 10px; margin-left: 10px">{{ getPaci.descrip }}</p>
          </div>
          <div style="border: 1px solid #ccc; width: 30%">
            <p class="text-left" style="font-weight: bold; margin-top: 10px; margin-left: 10px">Tipo y número de documento</p>
          </div>
          <div class="row" style="border: 1px solid #ccc; width: 70%">
            <p class="text-left" style="margin-top: 10px; margin-left: 10px">&nbsp;{{ getPaci.tipo_id }}</p>
            <p class="text-left" style="margin-top: 10px; margin-left: 10px">&nbsp;{{ getPaci.cod }}</p>
          </div>
          <div style="border: 1px solid #ccc; width: 30%">
            <p class="text-left" style="font-weight: bold; margin-top: 10px; margin-left: 10px">Dirección</p>
          </div>
          <div style="border: 1px solid #ccc; width: 70%">
            <p class="text-left" style="margin-top: 10px; margin-left: 10px">&nbsp;{{ getPaci.direccion }}</p>
          </div>
          <div style="border: 1px solid #ccc; width: 30%">
            <p class="text-left" style="font-weight: bold; margin-top: 10px; margin-left: 10px">Teléfono</p>
          </div>
          <div style="border: 1px solid #ccc; width: 70%">
            <p class="text-left" style="margin-top: 10px; margin-left: 10px">&nbsp;{{ getPaci.telefono }}</p>
          </div>
          <div style="border: 1px solid #ccc; width: 30%">
            <p class="text-left" style="font-weight: bold; margin-top: 10px; margin-left: 10px">Fecha</p>
          </div>
          <div style="border: 1px solid #ccc; width: 70%">
            <p class="text-left" style="margin-top: 10px; margin-left: 10px">&nbsp;{{ HIC083.fecha }}</p>
          </div>
          <div style="border: 1px solid #ccc; width: 30%">
            <p class="text-left" style="font-weight: bold; margin-top: 10px; margin-left: 10px">Edad inicio relaciones sexuales</p>
          </div>
          <div style="border: 1px solid #ccc; width: 70%">
            <Input_ class="q-mt-lg q-mb-xs" v-model="HIC083.edad_ini_relac_sex" :field="form.edad_ini_relac_sex" />
          </div>
          <div style="border: 1px solid #ccc; width: 30%">
            <p class="text-left" style="font-weight: bold; margin-top: 10px; margin-left: 10px">¿Primera vez que se realiza citología?</p>
          </div>
          <div style="border: 1px solid #ccc; width: 70%">
            <div class="q-mt-md">
              <q-radio color="primary" v-model="HIC083.primera_citolog" val="S" label="SI" />
              <q-radio color="primary" v-model="HIC083.primera_citolog" val="N" label="NO" />
            </div>
          </div>
          <div style="border: 1px solid #ccc; width: 30%">
            <p class="text-left" style="font-weight: bold; margin-top: 10px; margin-left: 10px">No. de citología</p>
          </div>
          <div style="border: 1px solid #ccc; width: 70%">
            <Input_ class="q-mt-lg q-mb-xs" v-model="HIC083.nro_citolog" :field="form.nro_citolog" />
          </div>
        </div>
        <p style="text-align: justify">
          El cáncer cervico-uterino es una enfermedad neoplásica, maligna que se origina en el cérvix o cuello uterino. La citología es un examen en
          el que se detectan cambios en las células cervicales, consiste en la recolección de una muestra de células del cérvix, que se extienden
          sobre una lámina y se analizan en el laboratorio. Durante el examen se puede sentir un poco de molestia, similar a los cólicos menstruales y
          puede haber sangrado leve después del examen, pero es normal teniendo en cuenta que es un procedimiento invasivo que puede lesionar
          levemente el cuello del útero, pero es poco frecuente que esto suceda.
        </p>
        <p style="text-align: justify">
          Este documento es la manifestación voluntaria, libre y racional realizada por el paciente, de aceptación a la toma de citología cervico
          uterina, luego de haber sido informada de la misma manera clara y amplia con el fin de despejar todas sus dudas. Aquí se ratifica su
          aceptación y autorización para realizar el procedimiento en forma libre, voluntaria y consciente, después de que le fue informado y
          explicado, por parte del profesional de la salud, las indicaciones, contraindicaciones y posibles eventos adversos que puede ocasionar la
          toma de la citología.
        </p>
        <p style="text-align: justify; font-weight: bold">DECLARACIÓN DEL PACIENTE</p>
        <p style="text-align: justify">
          Me han explicado y he comprendido satisfactoriamente la naturaleza y propósito de la toma de la citología cervico uterina, comprendo
          perfectamente, que es un examen para detectar patologías malignas, y pre malignas del cuello uterino y que a pesar de la adecuada toma y
          preparación del personal se pueden llegar a presentar efectos indeseables temporales como sangrado vaginal y dolor que están directamente
          relacionados con las condiciones clínico patológicas del paciente.
        </p>

        <p style="text-align: justify">
          Doy mi consentimiento para que se me realice la toma de
          <span class="text-bold">CITOLOGIA CERVICO UTERINA. </span>
        </p>
        <p style="text-align: justify; font-weight: bold">QUIEN BRINDA LA INFORMACIÓN</p>
        <p style="text-align: justify">
          Funcionario responsable

          <span class="text-bold">{{ getProf.descrip }}</span
          >, He informado al paciente del propósito y naturaleza del procedimiento descrito arriba.
        </p>
        <div v-if="getAcomp.cod.trim() != ''">
          <p style="text-align: justify; font-weight: bold">ESPACIO PARA PACIENTES CON DISCAPACIDAD</p>
          <p style="text-align: justify">
            Sé que el paciente <span class="text-bold">{{ getPaci.descrip }},</span> ha sido considerado por ahora incapaz de tomar por sí mismo la
            decisión de aceptar o rechazar el procedimiento descrito arriba. La funcionaria me ha explicado los riesgos y complicaciones. He
            comprendido todo lo anterior perfectamente y por ello: YO, <span class="text-bold">{{ getAcomp.descrip }}</span
            >, con documento de identidad <span class="text-bold">{{ getAcomp.tipo_id }}</span> No. <span class="text-bold">{{ getAcomp.cod }}</span
            >, doy mi consentimiento para que la profesional, <span class="text-bold">{{ getProf.descrip }}</span> realice este procedimiento. Puedo
            revocar este consentimiento cuando en bien del paciente se presuma oportuno.
          </p>
        </div>
      </q-card-section>
    </div>
    <q-separator />
    <q-card-actions align="around" class="row">
      <div class="col-12 row justify-around">
        <ContainerFirma
          quien_firma="FIRMA PACIENTE"
          :firmador="getPaci.descrip"
          :registro_profe="getPaci.cod"
          @reciFirma="callBackFirma"
          :huella_="huella_paci"
          class="col-3"
        />
        <ContainerFirma
          :firmador="getAcomp.descrip || 'NO HAY ACOMPAÑANTE'"
          :disable="!getAcomp.descrip ? true : false"
          quien_firma="FIRMA TUTOR O FAMILIAR"
          :registro_profe="getAcomp.cod"
          @reciFirma="callBackFirmaAcomp"
          class="col-3"
        />
        <ContainerFirma
          :firmador="getAcomp.descrip || 'NO HAY ACOMPAÑANTE'"
          :disable="!getAcomp.descrip ? true : false"
          quien_firma="FIRMA TUTOR O FAMILIAR"
          :registro_profe="getAcomp.cod"
          @reciFirma="callBackFirmaAcomp"
          class="col-3"
        />
        <ContainerFirma
          @reciFirma="callBackFirma"
          :firma_="firma_prof"
          :firmador="getProf.descrip"
          :descrip_prof="getProf.descrip_atiende"
          :registro_profe="getProf.registro_profe"
          quien_firma="FIRMA PROFESIONAL"
          class="col-3"
        />
      </div>
    </q-card-actions>

    <div class="col-12 row justify-center q-my-md">
      <q-btn
        :disable="opcion_hic083 ? false : true"
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
import { impresionHIC083, impresion, generarArchivo } from "@/impresiones";
import { ref, defineAsyncComponent, onMounted, reactive } from "vue";
import { utilsFormat } from "@/formatos/utils";
import { useRouter } from "vue-router";
import dayjs from "dayjs";

const ContainerFirma = defineAsyncComponent(() => import("@/components/global/containerFirma.vue"));
const router = useRouter();

const { getDll$, _getFirma$, _getHuella$, guardarFile$, enviarCorreo$, getEncabezado } = useApiContabilidad();
const { getPaci, getAcomp, getHc, getProf, getEmpresa, getSesion } = useModuleFormatos();
const { CON851P } = useModuleCon851p();
const { CON851 } = useModuleCon851();

const firma_recibida_acomp = ref("");
const firma_recibida = ref("");
const huella_paci = ref(null);
const firma_prof = ref(null);
const nit_usu = ref(parseInt(getEmpresa.nitusu) || 0);

const HIC083 = reactive({
  fecha: "",
  edad_ini_relac_sex: "",
  primera_citolog: "",
  nro_citolog: "",
});

const form = ref({
  edad_ini_relac_sex: {
    id: "edad_ini_relac_sex",
    maxlength: "2",
    label: "",
    tipo: "number",
    campo_abierto: true,
  },
  nro_citolog: {
    id: "nro_citolog",
    maxlength: "50",
    label: "",
    campo_abierto: true,
  },
});
const opcion_hic083 = ref(null);

onMounted(() => {
  HIC083.fecha = dayjs(getEmpresa.fecha_act).format("YYYY-MM-DD");
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
  if (!firma_recibida.value && !getAcomp.cod) {
    return CON851("?", "info", "No se ha realizado la firma del paciente");
  }
  if (getAcomp.cod && !firma_recibida_acomp.value) {
    return CON851("?", "info", "No se ha realizado la firma del acompañante");
  }

  grabarConsentimiento();
};

const grabarConsentimiento = async () => {
  const datos_format = JSON.parse(JSON.stringify(HIC083));
  let datos = {
    nit_entid: nit_usu.value,
    estado: opcion_hic083.value == "AUTORIZAR" ? "1" : "2",
    id_acomp: getAcomp.cod.padStart(15, "0"),
    paren_acomp: getSesion.paren_acomp,
    oper_consen: getSesion.oper,
    llave_consen: getHc.llave,
    cod_med: getProf.cod,
    cod_consen: "HIC083",
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
      await imprimirConsen();
      return router.back();
    }
    return CON851P(
      "?",
      "info",
      "¿Deseas enviar el correo del consentimientos?",
      async () => {
        await imprimirConsen();
        router.back();
      },
      async () => {
        const file = await imprimirConsen();
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

const imprimirConsen = async () => {
  try {
    const datos_hic083 = {
      autorizo: opcion_hic083.value == "AUTORIZAR" ? true : false,
      empresa: getEmpresa,
      paciente: getPaci,
      prof: getProf,
      acomp: getAcomp,
      paren_acomp: getSesion.paren_acomp,
      firmas: {
        firma_paci: firma_recibida.value ? true : false,
        huella_paci: huella_paci.value ? true : false,
        firma_acomp: firma_recibida_acomp.value ? true : false,
        firma_prof: firma_prof.value ? true : false,
      },
      ...HIC083,
    };

    const firmas = {
      img_firma_consen: firma_recibida.value,
      img_firma_paci: firma_recibida.value,
      img_huella_paci: huella_paci.value,
      img_firma_acomp: firma_recibida_acomp.value,
      firma_prof: firma_prof.value,
    };

    const docDefinitionPrint = await utilsFormat({
      datos: { ...firmas, cod_consen: "HIC083" },
      content: impresionHIC083({
        datos: datos_hic083,
      }),
    });
    const docDefinitionFile = await utilsFormat({
      datos: { ...firmas, cod_consen: "HIC083" },
      content: impresionHIC083({
        datos: datos_hic083,
      }),
    });

    await impresion({ docDefinition: docDefinitionPrint });
    const response_impresion = await generarArchivo({ docDefinition: docDefinitionFile });
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
</script>
