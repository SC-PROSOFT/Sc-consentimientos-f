<template>
  <q-card class="q-mx-auto format">
    <div>
      <q-card-section>
        <div class="text-center">
          <q-toggle
            v-model="opcion_hic068"
            color="primary"
            keep-color
            false-value="REVOCAR"
            true-value="AUTORIZAR"
            unchecked-icon="block"
            checked-icon="check_circle"
            label="¿Autorizar o revocar este consentimiento?"
          />
          <p :class="opcion_hic068 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
            <q-chip :color="opcion_hic068 == 'AUTORIZAR' ? 'green' : 'red'" class="text-white" v-if="opcion_hic068">
              {{ opcion_hic068 }}
            </q-chip>
          </p>
        </div>
        <div class="row q-mt-md q-mb-md" style="width: 100%">
          <div class="text-left" style="border: 1px solid #ccc; width: 20%">
            <p style="font-weight: bold; margin-top: 10px; margin-left: 10px">Fecha: {{ HIC068.fecha_act }}</p>
          </div>
          <div class="text-left" style="border: 1px solid #ccc; width: 80%">
            <p style="font-weight: bold; margin-top: 10px; margin-left: 10px">Sede de la atenciónc: {{ getEmpresa.nomusu }}</p>
          </div>
          <div class="text-left" style="border: 1px solid #ccc; width: 100%">
            <p style="font-weight: bold; margin-top: 10px; margin-left: 10px">Nombres y apellidos: {{ getPaci.descrip }}</p>
          </div>

          <div class="text-left" style="border: 1px solid #ccc; width: 60%">
            <p style="font-weight: bold; margin-top: 10px; margin-left: 10px">Documento de Identificación: {{ getPaci.cod }}</p>
          </div>
          <div class="text-left" style="border: 1px solid #ccc; width: 40%">
            <p style="font-weight: bold; margin-top: 10px; margin-left: 10px">De: {{ getPaci.descrip_ciudad }}</p>
          </div>
          <div class="text-left" style="border: 1px solid #ccc; width: 100%">
            <p style="font-weight: bold; margin-top: 10px; margin-left: 10px">EPS: {{ getPaci.descrip_eps }}</p>
          </div>
        </div>
        <div class="text-center" style="width: 100%">
          <p style="font-weight: bold; margin-top: 10px; text-decoration: underline">DECLARO LIBRE Y VOLUNTARIAMENTE</p>
        </div>
        <div>
          <p style="text-align: justify">
            Que me han explicado y he entendido satisfactoriamente la naturaleza y propósitos del procedimiento, asi como los riesgos y que me han
            aclarado las dudas al respecto.
          </p>
        </div>
        <div class="row">
          <div class="text-justify" style="border: 1px solid #ccc; width: 100%">
            <p class="q-ml-xs q-mr-xs">
              Comprendo perfectamente que el procedimiento va a consistir en la exploración VAGINAL, que es un examen físico en el cual el médico
              introduce uno o dos dedos en la vagina de la paciente o se introduce un especulo para evaluar el estado del cuello uterino y las paredes
              vaginales. Puede ser necesario para identificar las causas de dolor pélvico, sangrado anormal u otras molestias.
            </p>
          </div>
          <div class="text-left" style="border: 1px solid #ccc; width: 100%">
            <span class="text-bold q-ml-xs">Riesgos y Complicaciones</span>
            <ul>
              <li>Molestia o dolor leve durante el examen.</li>
              <li>Sangrado leve, especialmente si se introduce especulo.</li>
            </ul>
          </div>
        </div>

        <div class="row q-mt-lg">
          <div class="text-justify" style="border: 1px solid #ccc; width: 100%">
            <p class="q-ml-xs q-mr-xs">
              Comprendo perfectamente que el procedimiento va a consistir en la exploración RECTAL, que es un examen físico en el cual el médico
              introduce un dedo, usando guantes y lubricante en el recto del paciente para evaluar la próstata (en el caso de hombres) y otras
              estructuras en caso de dolor rectal, sangrado, alteraciones en los intestinos o para la evaluación de condiciones como hemorroides.
            </p>
          </div>
          <div class="text-left" style="border: 1px solid #ccc; width: 100%">
            <span class="text-bold q-ml-xs">Riesgos y Complicaciones</span>
            <ul>
              <li>Molestia o dolor leve durante el examen.</li>
              <li>Sangrado leve, especialmente si existe una condición preexistente como hemorroides o ulceras.</li>
            </ul>
          </div>
        </div>

        <div class="row q-mt-lg">
          <div class="text-left" style="border: 1px solid #ccc; width: 100%">
            <p class="q-ml-xs q-mr-xs">
              <span class="text-bold q-ml-xs"> Yo, </span> {{ getPaci.descrip }}
              <q-radio color="primary" v-model="HIC068.autoriza" val="S" label="AUTORIZO" />
              <q-radio color="primary" v-model="HIC068.autoriza" val="N" label="NO AUTORIZO" />
              al personal asistencial de la entidad, para que, en ejercicio legal de su profesión y de acuerdo con los procedimientos establecidos, se
              realice la exploración:
              <q-checkbox color="primary" keep-color label="VAGINAL" v-model="HIC068.vaginal" true-value="S" false-value="N" />
              <q-checkbox color="primary" keep-color label="RECTAL" v-model="HIC068.rectal" true-value="S" false-value="N" />
            </p>
          </div>
        </div>
        <div class="row q-mt-lg">
          <div class="text-left" style="border: 1px solid #ccc; width: 100%">
            <span class="text-bold q-ml-xs"> PROFESIONAL QUE REALIZA EL PROCEDIMIENTO </span>
          </div>
          <div class="text-left" style="border: 1px solid #ccc; width: 100%">
            <p class="q-ml-xs q-mr-xs">
              Yo, {{ getProf.descrip }} , en desarrollo de mis actividades como {{ getProf.descrip_atiende }} Certifico que he informado al paciente/
              acudiente del propósito y naturaleza del procedimiento.
            </p>
          </div>
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
          class="col-4"
        />
        <ContainerFirma
          :firmador="getAcomp.descrip || 'NO HAY ACOMPAÑANTE'"
          :disable="!getAcomp.descrip ? true : false"
          quien_firma="FIRMA TUTOR O FAMILIAR"
          :registro_profe="getAcomp.cod"
          @reciFirma="callBackFirmaAcomp"
          class="col-4"
        />
        <ContainerFirma
          @reciFirma="callBackFirma"
          :firma_="firma_prof"
          :firmador="getProf.descrip"
          :descrip_prof="getProf.descrip_atiende"
          :registro_profe="getProf.registro_profe"
          quien_firma="FIRMA PROFESIONAL"
          class="col-4"
        />
      </div>
    </q-card-actions>

    <div class="col-12 row justify-center q-my-md">
      <q-btn
        :disable="opcion_hic068 ? false : true"
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
import { impresionHIC068, impresion, generarArchivo } from "@/impresiones";
import { ref, defineAsyncComponent, onMounted, reactive } from "vue";
import { calcularEdad, utilsFormat } from "@/formatos/utils";
import { useRouter } from "vue-router";
import { foco_ } from "@/setup";
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

const HIC068 = reactive({
  fecha_act: "",
  autoriza: "S",
  vaginal: "N",
  rectal: "N",
});

const opcion_hic068 = ref(null);

onMounted(() => {
  HIC068.fecha_act = dayjs(getEmpresa.fecha_act).format("YYYY-MM-DD");
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
  const datos_format = JSON.parse(JSON.stringify(HIC068));
  let datos = {
    nit_entid: nit_usu.value,
    estado: opcion_hic068.value == "AUTORIZAR" ? "1" : "2",
    id_acomp: getAcomp.cod.padStart(15, "0"),
    paren_acomp: getSesion.paren_acomp,
    oper_consen: getSesion.oper,
    llave_consen: getHc.llave,
    cod_med: getProf.cod,
    cod_consen: "HIC068",
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
    const datos_hic068 = {
      autorizo: opcion_hic068.value == "AUTORIZAR" ? true : false,
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
      ...HIC068,
    };

    const firmas = {
      img_firma_consen: firma_recibida.value,
      img_firma_paci: firma_recibida.value,
      img_huella_paci: huella_paci.value,
      img_firma_acomp: firma_recibida_acomp.value,
      firma_prof: firma_prof.value,
    };

    const docDefinitionPrint = await utilsFormat({
      datos: { ...firmas, cod_consen: "HIC068" },
      content: impresionHIC068({
        datos: datos_hic068,
      }),
    });
    const docDefinitionFile = await utilsFormat({
      datos: { ...firmas, cod_consen: "HIC068" },
      content: impresionHIC068({
        datos: datos_hic068,
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
