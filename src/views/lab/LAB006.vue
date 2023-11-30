<template>
  <q-card class="q-mx-auto format q-mb-lg" style="overflow: auto">
    <q-card-section>
      <q-form @submit="validarDatos">
        <div class="text-center">
          <q-toggle
            v-model="reg.opcion_lab006"
            color="primary"
            keep-color
            false-value="REVOCAR"
            true-value="AUTORIZAR"
            unchecked-icon="block"
            checked-icon="check_circle"
            label="¿Autorizar o revocar este consentimiento?"
          />
          <p :class="reg.opcion_lab006 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
            <q-chip
              :color="reg.opcion_lab006 == 'AUTORIZAR' ? 'green' : 'red'"
              class="text-white"
              v-if="reg.opcion_lab006"
            >
              {{ reg.opcion_lab006 }}
            </q-chip>
          </p>
        </div>
        <DatosFormat :datos="datos" @datos="(data) => (reg.servicio = data)" />
        <div class="border-format q-my-sm">
          <div class="text-center text-subtitle1 text-bold q-py-xs">NORMATIVIDAD VIGENTE</div>
          <p class="row text-justify">
            La Ley 23 de 1981 al referirse a las relaciones médico – paciente, en los artículos 14, 15 y 18,
            advierte la necesidad del consentimiento para realizar los diferentes tratamientos medico
            quirúrgicos que se requieran. Para la resolución 3100 de 2019 el Consentimiento informado es la
            aceptación libre, voluntaria y consciente de un paciente o usuario, manifestada en el pleno uso de
            sus facultades, para que tenga a lugar un acto asistencial. Para que el consentimiento se
            considere informado, el paciente o usuario deberá entender la naturaleza de la decisión a
            consentir tras recibir información que le haga consciente de los beneficios, riesgos, alternativas
            e implicaciones del acto asistencial
          </p>
        </div>
        <div class="border-format q-my-sm">
          <div class="text-center text-subtitle1 text-bold q-py-xs">INFORMACIÓN DEL PROCEDIMIENTO</div>
          <p class="row text-justify">
            Procedimiento para examinar la vagina, el útero, las trompas de Falopio, los ovarios y la vejiga.
            Se introduce un instrumento en la vagina que produce ondas de sonido que rebotan en los órganos
            del interior de la pelvis. Estas ondas de sonido producen ecos que se envían a una computadora que
            crea una imagen llamada ecografía. También se llama ecografía endovaginal y ETV.
          </p>
        </div>
        <div class="border-format q-my-sm">
          <div class="text-center text-subtitle1 text-bold q-py-xs">BENEFICIOS</div>
          <p class="row text-justify">
            La ecografía transvaginal actua como complemento al examen físico, permite la evaluación de útero,
            trompas, ovarios o masas pélvicas. Dada su disponibilidad, comodidad, costo e información que
            arroja, es de uso rutinario en la consulta ginecológica. Es el examen indicado para el diagnóstico
            y seguimiento de quistes en los ovarios, miomas uterinos, valoración del espesor endometrial y
            detección temprana de cancer de útero y ovarios. En caso de sangrado genital (hemorragia uterina
            anormal), permite determinar causas y orientar el manejo. Permite la evaluación de los órganos
            reproductivos en cuanto a su estructura y funcionamiento. Asimismo su uso es frecuente para seguir
            tratamientos y evaluar el embarazo en etapas tempranas
          </p>
        </div>
        <div class="border-format q-my-sm">
          <div class="text-center text-subtitle1 text-bold q-py-xs">RIESGOS</div>
          <p class="row text-justify">
            No hay efectos dañinos conocidos de la ecografía trasvaginal en humanos. A diferencia de los rayos
            X tradicionales, no se presenta exposición a la radiación con este examen.
          </p>
        </div>
        <div class="border-format q-my-sm" v-if="reg.opcion_lab006 == 'AUTORIZAR'">
          <div class="text-center text-subtitle1 text-bold q-py-xs">
            DECLARACION DEL CONSENTIMIENTO INFORMADO
          </div>
          <p class="row text-justify">
            Si ha comprendido la información contenida en el presente documento y acepta voluntariamente la
            realización del procedimiento en mención, proceda a firmar dejando su autorización por escrito
          </p>
          <p>
            Yo <InputF_ v-model="getPaci.descrip" width="300" />, identificada (o) con el documento de
            identidad número <InputF_ v-model="getPaci.cod" />, después de haber sido informado (a) sobre el
            procedimiento de Ecografía Transvaginal, los riesgos y beneficios, declaro que la información ha
            sido clara, que se me han respondido las inquietudes y que autorizo la toma del procedimiento
            teniendo en cuenta que esta autorización puede ser revocable en cualquier momento
          </p>
        </div>
        <div class="border-format q-my-sm" v-if="reg.opcion_lab006 == 'REVOCAR'">
          <div class="text-center text-subtitle1 text-bold q-py-xs">
            REVOCACIÓN DEL CONSENTIMIENTO INFORMADO
          </div>
          <p>
            Yo <InputF_ v-model="getPaci.descrip" width="300" />, identificada (o) con el documento de
            identidad número <InputF_ v-model="getPaci.cod" />, después de haber sido informado (a) sobre el
            procedimiento de Ecografía Tranvaginal sus riesgos y beneficios y adicionalmente, los riesgos de
            no realizármelo, declaro que la información ha sido clara, que se me han respondido las
            inquietudes y que autorizo de forma libre y consiente, revoco mi consentimiento para continuar con
            la toma del procedimiento en mención.
          </p>
        </div>
      </q-form>
    </q-card-section>
    <q-card-actions>
      <div class="col-12 row justify-around">
        <ContainerFirma
          :quien_firma="getAcomp.cod ? 'FIRMA ACOMPAÑANTE' : 'FIRMA PACIENTE'"
          :firmador="getAcomp.cod ? getAcomp.descrip : getPaci.descrip"
          :registro_profe="getAcomp.cod ? getAcomp.cod : getPaci.cod"
          @reciFirma="callBackFirma"
          :huella_="huella_paci"
          class="col-4"
        />
        <ContainerFirma
          :firma_="firma_recibida_test"
          :firmador="getTestigo.descrip"
          :descrip_prof="getTestigo.descrip_atiende"
          :registro_profe="getTestigo.registro_profe"
          quien_firma="FIRMA TESTIGO"
          class="col-4"
          disable
        />
        <ContainerFirma
          disable
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
          :disable="reg.opcion_lab006 ? false : true"
          @click="validarDatos"
          icon-right="check_circle"
          class="q-mr-lg"
          color="green"
          label="GRABAR"
          type="submit"
        />
      </div>
    </q-card-actions>
  </q-card>
</template>

<script setup>
import { useModuleFormatos, useApiContabilidad, useModuleCon851, useModuleCon851p } from "@/store";
import { impresionLAB006, impresion, generarArchivo } from "@/impresiones";
import { ref, defineAsyncComponent, onMounted, watch } from "vue";
import { utilsFormat, calcEdad } from "@/formatos/utils";
import { useRouter } from "vue-router";
import dayjs from "dayjs";

const ContainerFirma = defineAsyncComponent(() => import("@/components/global/containerFirma.vue"));
const DatosFormat = defineAsyncComponent(() => import("@/components/global/DatosFormat.vue"));
const router = useRouter();

const { getDll$, _getFirma$, _getHuella$, guardarFile$, enviarCorreo$, getEncabezado, guardarArchivo$ } =
  useApiContabilidad();
  const { getPaci, getAcomp, getTestigo, getProf, getEmpresa, getSesion } = useModuleFormatos();
const { CON851P } = useModuleCon851p();
const { CON851 } = useModuleCon851();

const firma_recibida_acomp = ref("");
const firma_recibida_test = ref("");
const firma_recibida = ref("");
const huella_paci = ref(null);
const firma_prof = ref(null);

const datos = {
  tipo_id: getPaci.tipo_id,
  active_cups: true,
  servicio: "",
};

const reg = ref({
  opcion_lab006: "",
  fecha_act: "",
  edad: "",
  codigo_cie1: "",
  descrip_cie1: "",
  codigo_cie2: "",
  descrip_cie2: "",
  codigo_cups1: "",
  descrip_cups1: "",
  codigo_cups2: "",
  descrip_cups2: "",
  servicio: "",
  llave_consen: `${getPaci.cod}00000000`,
});

onMounted(() => {
  reg.value.fecha_act = dayjs(getEmpresa.fecha_act).format("YYYY-MM-DD");
  reg.value.edad = calcEdad(getPaci.nacim);
  getFirmaProf();
});

const grabarConsentimiento = async () => {
  const datos_format = JSON.parse(JSON.stringify(reg.value));
  let datos = {
    llave_fact: `${getSesion.suc}${getSesion.clase}${getSesion.nro_comp}`,
    estado: reg.value.opcion_lab006 == "AUTORIZAR" ? "1" : "2",
    disentimiento: "N",
    llave_consen: `${getPaci.cod}00000000`,
    oper_consen: getSesion.oper,
    cod_consen: "LAB006",
    cod_med: getProf.cod,
    id_acomp: getAcomp.cod.padStart(15, "0"),
    id_testigo: getAcomp.cod.padStart(15, "0"),
    paren_acomp: getSesion.paren_acomp,
    ...datos_format,
  };

  getDll$({ modulo: `save_consen.dll`, data: { ...datos } })
    .then((data) => {
      return grabarFirmaConsen(data.llave_consen);
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
        const file = await imprimirConsen();
        const response_guardar = await guardarArchivo$({
          nombre: `${getSesion.suc}${getSesion.nro_comp}-${getSesion.oper}${dayjs().format(
            "YYYYMMDDHHmm"
          )}.pdf`,
          ruta: "D:\\CONSENTIMIENTOS",
          file,
        });
        CON851("?", response_guardar.tipo, response_guardar.message, () => router.back());
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

        const response_guardar = await guardarArchivo$({
          nombre: `${getSesion.suc}${getSesion.nro_comp}-${getSesion.oper}${dayjs().format(
            "YYYYMMDDHHmm"
          )}.pdf`,
          ruta: "D:\\CONSENTIMIENTOS",
          file,
        });
        CON851("?", response_guardar.tipo, response_guardar.message, () => router.back());
      }
    );
  } catch (error) {
    console.error(error);
    CON851("?", "info", error);
  }
};

const imprimirConsen = async () => {
  reg.codigo_cie1 = getSesion.diagnosticos[0] ? getSesion.diagnosticos[0].codigo : "";
  reg.descrip_cie1 = getSesion.diagnosticos[0] ? getSesion.diagnosticos[0].descripcion : "";
  reg.codigo_cie2 = getSesion.diagnosticos[1] ? getSesion.diagnosticos[1].codigo : "";
  reg.descrip_cie2 = getSesion.diagnosticos[1] ? getSesion.diagnosticos[1].descripcion : "";
  reg.codigo_cups1 = getSesion.articulos[0] ? getSesion.articulos[0].codigo : "";
  reg.descrip_cups1 = getSesion.articulos[0] ? getSesion.articulos[0].descripcion : "";
  reg.codigo_cups2 = getSesion.articulos[1] ? getSesion.articulos[1].codigo : "";
  reg.descrip_cups2 = getSesion.articulos[1] ? getSesion.articulos[1].descripcion : "";

  try {
    const datos_lab006 = {
      autorizo: reg.value.opcion_lab006 == "AUTORIZAR" ? true : false,
      empresa: getEmpresa,
      testigo: getTestigo,
      paciente: getPaci,
      prof: getProf,
      acomp: getAcomp,
      paren_acomp: getSesion.paren_acomp,
      firmas: {
        firma_acomp: firma_recibida_acomp.value ? true : false,
        firma_test: firma_recibida_test.value ? true : false,
        firma_paci: firma_recibida.value ? true : false,
        huella_paci: huella_paci.value ? true : false,
        firma_prof: firma_prof.value ? true : false,
      },
      fecha: reg.value.fecha_act,
      llave: reg.value.llave_consen,
      ...reg.value,
    };

    const firmas = {
      img_firma_testigo: firma_recibida_test.value,
      img_firma_acomp: firma_recibida_acomp.value,
      img_firma_consen: firma_recibida.value,
      img_firma_paci: firma_recibida.value,
      img_huella_paci: huella_paci.value,
      firma_prof: firma_prof.value,
    };

    const docDefinitionPrint = utilsFormat({
      datos: firmas,
      content: impresionLAB006({
        datos: datos_lab006,
      }),
    });
    const docDefinitionFile = utilsFormat({
      datos: firmas,
      content: impresionLAB006({
        datos: datos_lab006,
      }),
    });

    await impresion({ docDefinition: docDefinitionPrint });
    const response_impresion = await generarArchivo({ docDefinition: docDefinitionFile });
    return response_impresion;
  } catch (error) {
    console.error("error -->", error);
  }
};

const getFirmaProf = async () => {
  try {
    firma_recibida_test.value = await _getFirma$({ codigo: Number(getTestigo.cod) });
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
</script>

<style>
table,
th,
td {
  border: 1px solid black;
  border-collapse: collapse;
}
</style>
