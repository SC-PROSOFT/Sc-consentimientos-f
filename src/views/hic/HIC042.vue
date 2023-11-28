<template>
  <q-form @submit="grabarConsentimiento">
    <q-card class="q-mx-auto format q-mb-lg" style="overflow: auto">
      <q-card-section>
        <div class="row">
          <p>Historia clínica numero: <InputF_ v-model="reg.llave" disable /></p>
        </div>
        <div class="row">
          <p>
            Ciudad: <InputF_ disable type="text" v-model="getEmpresa.ciudad_usuar" /> Fecha:
            <InputF_ disable v-model="reg.fecha_act" />
          </p>
        </div>
      </q-card-section>
      <q-card-section>
        <div class="row">
          <p class="text-justify">
            Yo, <InputF_ disable v-model="getPaci.descrip" width="300" /> identificacion
            <InputF_ disable v-model="getPaci.tipo_id" /> N° <InputF_ disable v-model="getPaci.cod" /> de
            <InputF_ disable v-model="reg.edad_paci" /> años de edad, nombre del padre de famiia y/o cuidador
            <InputF_ disable v-model="getAcomp.descrip" /> identificacion
            <InputF_ disable v-model="getAcomp.cod" />
          </p>
        </div>
      </q-card-section>
      <q-card-section>
        <p class="text-justify">
          <span style="font-weight: bold">DECLARAN:</span> El personal del área de la salud
          <InputF_ v-model="reg.area_Salud" /> nos ha explicado y hemos entendido la siguiente información
          sobre la aplicación de la vacuna contra el Virus del Papiloma Humano.
        </p>
        <p class="text-justify">
          <span style="font-weight: bold">EN QUÉ LE BENEFICIARÁ:</span> Las vacunas tetravalente y bivalente
          son eficaces en la prevención de las lesiones cervicales precancerosas relacionadas con el VPH 16 y
          el VPH18 en mujeres. No ofrecen protección contra la evolución de la infección hacia la enfermedad a
          partir del VPH contraído antes de la vacunación.
        </p>
        <div class="row">
          <p class="text-justify">
            <span style="font-weight: bold">EN QUÉ CONSISTE Y PARA QUE SIRVE:</span> El procedimiento de
            vacunación consiste en la administración de un biológico para la prevención de cáncer cervical,
            vulvar y vaginal, lesiones precancerosas o displasias, verrugas genitales o infección persistente
            causada por el Virus de Papiloma Humano, serotipos 6, 11, 16 y 18.
          </p>
        </div>
        <div class="row">
          <p class="text-justify">
            <span style="font-weight: bold">CÓMO SE REALIZA:</span> Se administra la vacuna vía Intramuscular,
            en el tercio medio del músculo deltoides (brazo).
          </p>
        </div>
        <div class="row">
          <p class="text-justify">
            <span style="font-weight: bold">PRECACUCIÓN:</span> La vacunación en adolescentes puede
            desencadenar síncope, algunas veces asociado con desmayo, por lo que se recomienda que después de
            la aplicación de la vacuna, la niña permanezca sentada por lo menos 15 minutos y sea observada.
          </p>
        </div>
      </q-card-section>
      <q-card-section>
        <div class="row">
          <span style="font-weight: bold; margin-bottom: 8px">EVENTOS ADVERSOS:</span>
        </div>
        <div class="row">
          <p class="q-ml-xl text-justify">
            <span style="font-weight: bold">En el sitio de la inyección (1 a 5 días postvacunación):</span>
            Dolor, hinchazón, eritema, hematoma y prurito.
          </p>
        </div>
        <div class="row">
          <p class="q-ml-xl text-justify">
            <span style="font-weight: bold">Sistémico (1 a 15 días postvacunación):</span> Pirexia (fiebre),
            diarrea, vómitos, mialgia (dolor muscular), tos, infección de vías respiratorias superiores,
            odontalgia (dolor dental), malestar general, artralgia (dolor en articulaciones e insomnio).
          </p>
        </div>
      </q-card-section>
      <q-card-section>
        <div class="row">
          <p class="text-justify" style="font-weight: bold">
            NOTA: LA ORGANIZACIÓN MUNDIAL DE LA SALUD -OMS- Y LA ORGANIZACIÓN PANAMERICANA DE LA SALUD
            -OPS-RECOMIENDAN EL USO DE LA VACUNA CONTRA EL VPH, DESPUÉS DE HABER REALIZADO UN AMPLIO ESTUDIO
            DEL PERFIL DE SEGURIDAD DE ÉSTA VACUNA, POR PARTE DEL COMITÉ CONSULTIVO MUNDIAL DE SEGURIDAD DE
            VACUNAS DE LA OMS.
          </p>
        </div>
      </q-card-section>
      <q-card-section>
        <div class="row">
          <p class="text-justify" style="font-weight: bold">NO OBLIGATORIEDAD DE LA VACUNA:</p>
        </div>
        <div class="row">
          <p class="text-justify">
            <span style="font-weight: bold">DECLARO</span> que he sido informado con anticipación y de forma
            satisfactoria he comprendido las explicaciones que se me han facilitado, y el personal del área de
            la salud que me ha atendido me ha permitido realizar todas las observaciones y me ha aclarado
            todas las dudas que le he planteado y con la información recibida, acepto la aplicación de la
            vacuna contra el VPH, en tales condiciones.
          </p>
        </div>
        <div>
          <q-toggle
            v-model="reg.opcion_hc042"
            color="primary"
            keep-color
            false-value="REVOCAR"
            true-value="AUTORIZAR"
            unchecked-icon="block"
            checked-icon="check_circle"
            label="que se me aplique la vacuna."
          />
          <p :class="reg.opcion_hc042 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
            <q-chip
              :color="reg.opcion_hc042 == 'AUTORIZAR' ? 'green' : 'red'"
              class="text-white"
              v-if="reg.opcion_hc042"
            >
              {{ reg.opcion_hc042 }}
            </q-chip>
          </p>
        </div>
      </q-card-section>
      <q-card-actions>
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
        <div class="col-12 row justify-center q-my-md">
          <q-btn
            :disable="reg.opcion_hc042 ? false : true"
            @click="grabarConsentimiento"
            icon-right="check_circle"
            class="q-mr-lg"
            color="green"
            label="GRABAR"
            type="submit"
          />
        </div>
      </q-card-actions>
    </q-card>
  </q-form>
</template>
<script setup>
import { useModuleFormatos, useApiContabilidad, useModuleCon851, useModuleCon851p } from "@/store";
import { ref, defineAsyncComponent, onMounted, watch } from "vue";
import { calcEdad, utilsFormat } from "@/formatos/utils";
import { impresionHC042, impresion, generarArchivo } from "@/impresiones";
import { useRouter } from "vue-router";
import dayjs from "dayjs";

const router = useRouter();
const ContainerFirma = defineAsyncComponent(() => import("@/components/global/containerFirma.vue"));
const CONSEN800 = defineAsyncComponent(() => import("@/components/consen/CONSEN800.vue"));

const { getPaci, getAcomp, getHc, getProf, getEmpresa, getSesion } = useModuleFormatos();
const { getDll$, _getFirma$, _getHuella$, guardarFile$, enviarCorreo$, getEncabezado } = useApiContabilidad();
const { CON851 } = useModuleCon851();
const { CON851P } = useModuleCon851p();

const firma_recibida_acomp = ref("");
const firma_recibida = ref("");
const descrip_diagnostico = ref(null);

const show_consen800 = ref(null);

const fecha_citologia = ref(null);
const opcion_hc030 = ref(null);
const huella_paci = ref(null);
const firma_prof = ref(null);
const fecha_act = ref(null);
const llave = ref(null);

const reg = ref({
  opcion_hc042: "",
  area_Salud: "",
  edad_paci: "",
  fecha_act: "",
  llave: "",
});

onMounted(() => {
  reg.value.fecha_act = dayjs(getEmpresa.FECHA_ACT).format("YYYY-MM-DD");
  reg.value.llave = getHc.llave.slice(15);
  reg.value.edad_paci = calcEdad(getPaci.nacim);

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

const grabarConsentimiento = async () => {
  const datos_format = JSON.parse(JSON.stringify(reg.value));
  datos_format.fecha_ult_cito = dayjs(datos_format.fecha_ult_cito).format("YYYYMMDD");
  let datos = {
    estado: reg.value.opcion_hc042 == "AUTORIZAR" ? "1" : "2",
    disentimiento: "N",
    llave_consen: getHc.llave,
    oper_consen: getSesion.oper,
    cod_consen: "HIC042",
    cod_med: getProf.cod,
    id_acomp: getAcomp.cod.padStart(15, "0"),
    paren_acomp: getSesion.paren_acomp,
    ...datos_format,
  };

  if (!getAcomp.cod && !firma_recibida.value) {
    return CON851("?", "info", "No se ha realizado la firma del paciente");
  }
  if (getAcomp.cod && !firma_recibida_acomp.value) {
    return CON851("?", "info", "No se ha realizado la firma del acompañate");
  }

  await getDll$({ modulo: `save_consen.dll`, data: { ...datos } })
    .then((data) => {
      if (data?.llave_consen) {
        const fecha = data?.llave_consen.slice(24, 32);
        fecha_act.value = dayjs(fecha).format("YYYY-MM-DD");
        return grabarFirmaConsen(data?.llave_consen);
      }
      CON851("?", "error", "Error al guardar el consentimiento");
    })
    .catch((error) => {
      console.error(error);
      CON851("?", "error", "Error al guardar el consentimiento");
    });
};

const grabarFirmaConsen = async (llave) => {
  try {
    await guardarFile$({ base64: firma_recibida.value, codigo: `P${llave}` });
    await guardarFile$({ base64: firma_recibida_acomp.value, codigo: `A${llave}` });

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
    const datos_hic042 = {
      autorizo: reg.value.opcion_hc042 == "AUTORIZAR" ? true : false,
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
      fecha: reg.value.fecha_act,
      llave: reg.value.llave,
      ...reg.value,
    };

    const firmas = {
      img_firma_consen: firma_recibida.value,
      img_firma_paci: firma_recibida.value,
      img_huella_paci: huella_paci.value,
      img_firma_acomp: firma_recibida_acomp.value,
      firma_prof: firma_prof.value,
    };

    const docDefinitionPrint = utilsFormat({
      datos: firmas,
      content: impresionHC042({
        datos: datos_hic042,
      }),
    });
    const docDefinitionFile = utilsFormat({
      datos: firmas,
      content: impresionHC042({
        datos: datos_hic042,
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
