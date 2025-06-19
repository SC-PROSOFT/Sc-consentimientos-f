<template>
  <q-card class="q-mx-auto format">
    <div>
      <q-card-section>
        <div class="text-center">
          <q-toggle
            v-model="opcion_hc101"
            color="primary"
            keep-color
            false-value="REVOCAR"
            true-value="AUTORIZAR"
            unchecked-icon="block"
            checked-icon="check_circle"
            label="¿Autorizar o revocar este consentimiento?"
          />
          <p :class="opcion_hc101 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
            <q-chip :color="opcion_hc101 == 'AUTORIZAR' ? 'green' : 'red'" class="text-white" v-if="opcion_hc101">
              {{ opcion_hc101 }}
            </q-chip>
          </p>
        </div>

        <div class="row justify-between items-center">
          <p><span class="text-bold">Nombre del paciente:</span> {{ getPaci.descrip }}&nbsp;</p>
          <p><span class="text-bold">Tipo y número de documento de identificación:</span> {{ getPaci.tipo_id + " " + getPaci.cod }} &nbsp;</p>
          <p>
            <span class="text-bold">Fecha:</span>
            {{ dayjs(getEmpresa.fecha).format("YYYY-MM-DD") }}
          </p>
        </div>

        <div>
          <p style="text-align: justify">
            <span class="text-bold">Conteste a las siguientes cuestiones, haciendo referencia al último año.</span>
          </p>

          <div class="row q-mb-md" style="width: 100%">
            <div class="text-center" style="border: 1px solid #ccc; width: 100%">
              <div class="text-left q-pa-xs">
                <span class="text-bold"> 1. ¿Con que frecuencia toma alguna “bebida” que contenga alcohol?</span>
              </div>
              <div class="row justify-between items-center q-pa-md">
                <q-radio color="primary" v-model="HIC101.preg_1" val="a" left-label label="Nunca" />
                <q-radio color="primary" v-model="HIC101.preg_1" val="b" left-label label="una o menos veces al mes" />
                <q-radio color="primary" v-model="HIC101.preg_1" val="c" left-label label="2 - 4 veces al mes" />
                <q-radio color="primary" v-model="HIC101.preg_1" val="d" left-label label="2 - 3 veces por semana" />
                <q-radio color="primary" v-model="HIC101.preg_1" val="e" left-label label="4 ó más veces por semana" />
              </div>

              <div class="text-left q-pa-xs">
                <span class="text-bold">2. ¿Cuántas “bebidas alcohólicas” toma durante un día típico en el que ha bebido?</span>
              </div>
              <div class="row justify-between items-center q-pa-md">
                <q-radio color="primary" v-model="HIC101.preg_2" val="a" left-label label="1 ó 2" />
                <q-radio color="primary" v-model="HIC101.preg_2" val="b" left-label label="3 ó 4" />
                <q-radio color="primary" v-model="HIC101.preg_2" val="c" left-label label="5 ó 6" />
                <q-radio color="primary" v-model="HIC101.preg_2" val="d" left-label label="7 a 9" />
                <q-radio color="primary" v-model="HIC101.preg_2" val="e" left-label label="10 ó más" />
              </div>

              <div class="text-left q-pa-xs">
                <span class="text-bold">3. ¿Con que frecuencia toma seis “bebidas” o más en un sola ocasión?</span>
              </div>
              <div class="row justify-between items-center q-pa-md">
                <q-radio color="primary" v-model="HIC101.preg_3" val="a" left-label label="Nunca" />
                <q-radio color="primary" v-model="HIC101.preg_3" val="b" left-label label="Menos de una vez al mes" />
                <q-radio color="primary" v-model="HIC101.preg_3" val="c" left-label label="Mensualmente" />
                <q-radio color="primary" v-model="HIC101.preg_3" val="d" left-label label="Semanalmente" />
                <q-radio color="primary" v-model="HIC101.preg_3" val="e" left-label label="A diario o casi a diario" />
              </div>

              <div class="text-left q-pa-xs">
                <span class="text-bold"
                  >4. ¿Con que frecuencia en el último año ha sentido incapacidad de parar de beber una vez que había comenzado?</span
                >
              </div>
              <div class="row justify-between items-center q-pa-md">
                <q-radio color="primary" v-model="HIC101.preg_4" val="a" left-label label="Nunca" />
                <q-radio color="primary" v-model="HIC101.preg_4" val="b" left-label label="Menos de una vez al mes" />
                <q-radio color="primary" v-model="HIC101.preg_4" val="c" left-label label="Mensualmente" />
                <q-radio color="primary" v-model="HIC101.preg_4" val="d" left-label label="Semanalmente" />
                <q-radio color="primary" v-model="HIC101.preg_4" val="e" left-label label="A diario o casi a diario" />
              </div>

              <div class="text-left q-pa-xs">
                <span class="text-bold"
                  >5. ¿Con que frecuencia durante el último año no pudo hacer lo que normalmente se esperaba de usted debido a la bebida?</span
                >
              </div>
              <div class="row justify-between items-center q-pa-md">
                <q-radio color="primary" v-model="HIC101.preg_5" val="a" left-label label="Nunca" />
                <q-radio color="primary" v-model="HIC101.preg_5" val="b" left-label label="Menos de una vez al mes" />
                <q-radio color="primary" v-model="HIC101.preg_5" val="c" left-label label="Mensualmente" />
                <q-radio color="primary" v-model="HIC101.preg_5" val="d" left-label label="Semanalmente" />
                <q-radio color="primary" v-model="HIC101.preg_5" val="e" left-label label="A diario o casi a diario" />
              </div>

              <div class="text-left q-pa-xs">
                <span class="text-bold"
                  >6. Durante el último año, ¿con que frecuencia necesitó tomar alguna “bebida alcohólica” por la mañana para poder ponerse en
                  funcionamiento después de una noche de haber bebido mucho?</span
                >
              </div>
              <div class="row justify-between items-center q-pa-md">
                <q-radio color="primary" v-model="HIC101.preg_6" val="a" left-label label="Nunca" />
                <q-radio color="primary" v-model="HIC101.preg_6" val="b" left-label label="Menos de una vez al mes" />
                <q-radio color="primary" v-model="HIC101.preg_6" val="c" left-label label="Mensualmente" />
                <q-radio color="primary" v-model="HIC101.preg_6" val="d" left-label label="Semanalmente" />
                <q-radio color="primary" v-model="HIC101.preg_6" val="e" left-label label="A diario o casi a diario" />
              </div>

              <div class="text-left q-pa-xs">
                <span class="text-bold"
                  >7. Durante el último año ¿con que frecuencia se sintió culpable o con remordimientos después de haber bebido?</span
                >
              </div>
              <div class="row justify-between items-center q-pa-md">
                <q-radio color="primary" v-model="HIC101.preg_7" val="a" left-label label="Nunca" />
                <q-radio color="primary" v-model="HIC101.preg_7" val="b" left-label label="Menos de una vez al mes" />
                <q-radio color="primary" v-model="HIC101.preg_7" val="c" left-label label="Mensualmente" />
                <q-radio color="primary" v-model="HIC101.preg_7" val="d" left-label label="Semanalmente" />
                <q-radio color="primary" v-model="HIC101.preg_7" val="e" left-label label="A diario o casi a diario" />
              </div>

              <div class="text-left q-pa-xs">
                <span class="text-bold"
                  >8. Durante el último año, ¿en cuántas ocasiones no fue capaz de recordar lo que le había pasado la noche anterior por haber estado
                  bebiendo?</span
                >
              </div>
              <div class="row justify-between items-center q-pa-md">
                <q-radio color="primary" v-model="HIC101.preg_8" val="a" left-label label="Nunca" />
                <q-radio color="primary" v-model="HIC101.preg_8" val="b" left-label label="Menos de una vez al mes" />
                <q-radio color="primary" v-model="HIC101.preg_8" val="c" left-label label="Mensualmente" />
                <q-radio color="primary" v-model="HIC101.preg_8" val="d" left-label label="Semanalmente" />
                <q-radio color="primary" v-model="HIC101.preg_8" val="e" left-label label="A diario o casi a diario" />
              </div>

              <div class="text-left q-pa-xs">
                <span class="text-bold"> 9. ¿Usted u otra persona ha sufrido algún daño como consecuencia de que usted hubiera bebido? </span>
              </div>
              <div class="row justify-between items-center q-pa-md">
                <q-radio color="primary" v-model="HIC101.preg_9" val="a" left-label label="No" />
                <q-radio color="primary" v-model="HIC101.preg_9" val="b" left-label label="Sí, pero no en el último año" />
                <q-radio color="primary" v-model="HIC101.preg_9" val="c" left-label label="Sí, el último año" />
              </div>

              <div class="text-left q-pa-xs">
                <span class="text-bold">
                  10. ¿Algún pariente, amigo, médico o profesional sanitario le ha expresado su preocupación por su bebida o le ha sugerido dejar de
                  beber?</span
                >
              </div>
              <div class="row justify-between items-center q-pa-md">
                <q-radio color="primary" v-model="HIC101.preg_10" val="a" left-label label="No" />
                <q-radio color="primary" v-model="HIC101.preg_10" val="b" left-label label="Sí, pero no en el último año" />
                <q-radio color="primary" v-model="HIC101.preg_10" val="c" left-label label="Sí, el último año" />
              </div>
            </div>
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
          :tipo_doc="getPaci.tipo_id"
          @reciFirma="callBackFirma"
          :huella_="huella_paci"
          class="col-4"
        />
        <ContainerFirma
          :firmador="getAcomp.descrip || 'NO HAY ACOMPAÑANTE'"
          :disable="!getAcomp.descrip ? true : false"
          quien_firma="FIRMA ACOMPAÑANTE"
          :registro_profe="getAcomp.cod"
          :codigo_firma="getAcomp.cod"
          :tipo_doc="getAcomp.tipo_id"
          @reciFirma="callBackFirmaAcomp"
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
        :disable="opcion_hc101 ? false : true"
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
import { impresionHIC101, impresion, generarArchivo } from "@/impresiones";
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

const HIC101 = reactive({
  fecha: "",
  preg_1: "",
  preg_2: "",
  preg_3: "",
  preg_4: "",
  preg_5: "",
  preg_6: "",
  preg_7: "",
  preg_8: "",
  preg_9: "",
  preg_10: "",
});

const opcion_hc101 = ref(null);

onMounted(() => {
  console.log("getSesion >>> ", getSesion);

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
  const datos_format = JSON.parse(JSON.stringify(HIC101));
  let datos = {
    nit_entid: nit_usu.value,
    estado: opcion_hc101.value == "AUTORIZAR" ? "1" : "2",
    id_acomp: getAcomp.cod.padStart(15, "0"),
    paren_acomp: getSesion.paren_acomp,
    oper_consen: getSesion.oper,
    llave_consen: getHc.llave,
    cod_med: getProf.cod,
    cod_consen: "HIC101",
    disentimiento: "N",
    ...datos_format,
  };

  getDll$({ modulo: `save_consen.dll`, data: { ...datos } })
    .then((data) => {
      if (data?.llave_consen) {
        const fecha = data?.llave_consen.slice(23, 31);
        HIC101.fecha = dayjs(fecha).format("YYYY-MM-DD");
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
    const datos_hic101 = {
      autorizo: opcion_hc101.value == "AUTORIZAR" ? true : false,
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
      ...HIC101,
    };

    const firmas = {
      img_firma_consen: firma_recibida.value,
      img_firma_paci: firma_recibida.value,
      img_huella_paci: huella_paci.value,
      img_firma_acomp: firma_recibida_acomp.value,
      firma_prof: firma_prof.value,
    };

    const docDefinitionPrint = await utilsFormat({
      datos: { ...firmas, cod_consen: "HIC101" },
      content: impresionHIC101({
        datos: datos_hic101,
      }),
    });
    const docDefinitionFile = await utilsFormat({
      datos: { ...firmas, cod_consen: "HIC101" },
      content: impresionHIC101({
        datos: datos_hic101,
      }),
    });

    await impresion({ docDefinition: docDefinitionPrint });
    const response_impresion = await generarArchivo({ docDefinition: docDefinitionFile, nomb_archivo: `${llave}-HIC-101` });
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
const callBackFirmaProf = (data_firma) => {
  data_firma && (firma_prof.value = data_firma);
};
</script>
