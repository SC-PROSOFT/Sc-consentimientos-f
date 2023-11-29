<template>
  <q-card class="q-mx-auto format q-mb-lg" style="overflow: auto">
    <q-card-section>
      <q-form @submit="validarDatos">
        <div class="text-center">
          <q-toggle
            v-model="reg.opcion_lab007"
            color="primary"
            keep-color
            false-value="REVOCAR"
            true-value="AUTORIZAR"
            unchecked-icon="block"
            checked-icon="check_circle"
            label="¿Autorizar o revocar este consentimiento?"
          />
          <p :class="reg.opcion_lab007 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
            <q-chip
              :color="reg.opcion_lab007 == 'AUTORIZAR' ? 'green' : 'red'"
              class="text-white"
              v-if="reg.opcion_lab007"
            >
              {{ reg.opcion_lab007 }}
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
            El examen de densidad ósea, también llamada absorciometría de rayos X de energía dual, DEXA o DXA,
            utiliza una dosis muy pequeña de radiación ionizante para producir imágenes del interior del
            cuerpo, generalmente la parte inferior de la columna (lumbar) y las caderas, para medir la pérdida
            de hueso. Generalmente, se utiliza para diagnosticar osteoporosis, para evaluar el riesgo que
            tiene un individuo de desarrollar fracturas debidas a la osteoporosis. La DXA es simple, rápida, y
            no es invasiva. También es el método más comunmente utilizado y estándar para diagnosticar la
            osteoporosis
          </p>
        </div>
        <div class="border-format q-my-sm">
          <div class="text-center text-subtitle1 text-bold q-py-xs">BENEFICIOS</div>
          <p class="row text-justify">
            La densitometría ósea de DXA es un procedimiento simple, rápido y no invasivo. No se requiere
            anestesia. El examen de densidad ósea DXA es, actualmente, el mejor método estandarizado
            disponible para diagnosticar la osteoporosis y también se lo considera un exacto estimador del
            riesgo de fractura. La DXA se utiliza para tomar decisiones con respecto a si se necesita un
            tratamiento, y puede ser utilizada para monitorear los efectos del tratamiento. Los equipos DXA se
            encuentran ampliamente disponibles haciendo que la densitometría ósea sea conveniente tanto para
            los pacientes y como para los médicos. Luego del examen no queda radiación en su cuerpo. Los rayos
            X por lo general no tienen efectos secundarios en el rango de diagnóstico típico para este examen.
          </p>
        </div>
        <div class="border-format q-my-sm">
          <div class="text-center text-subtitle1 text-bold q-py-xs">RIESGOS</div>
          <p class="row text-justify">
            No se esperan complicaciones en el procedimiento. La cantidad de radiación utilizada es
            extremadamente pequeña, menos de un décimo de la dosis estándar de rayos X para tórax y menos que
            la exposición de un día a la radiación natural.
          </p>
        </div>
        <div class="border-format q-my-sm" v-if="reg.opcion_lab007 == 'AUTORIZAR'">
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
            procedimiento de Densitometría Ósea, los riesgos y beneficios, declaro que la información ha sido
            clara, que se me han respondido las inquietudes y que autorizo la toma del procedimiento teniendo
            en cuenta que esta autorización puede ser revocable en cualquier momento.
          </p>
        </div>
        <div class="border-format q-my-sm" v-if="reg.opcion_lab007 == 'REVOCAR'">
          <div class="text-center text-subtitle1 text-bold q-py-xs">
            REVOCACIÓN DEL CONSENTIMIENTO INFORMADO
          </div>
          <p>
            Yo <InputF_ v-model="getPaci.descrip" width="300" />, identificada (o) con el documento de
            identidad número <InputF_ v-model="getPaci.cod" />, después de haber sido informado (a) sobre el
            procedimiento de Densitometría Ósea sus riesgos y beneficios y adicionalmente, los riesgos de no
            realizármelo, declaro que la información ha sido clara, que se me han respondido las inquietudes y
            que autorizo de forma libre y consiente, revoco mi consentimiento para continuar con la toma del
            procedimiento en mención.
          </p>
        </div>
      </q-form>
    </q-card-section>
    <q-card-actions>
      <div class="col-12 row justify-around">
        <ContainerFirma
          :quien_firma="getAcomp.cod ? 'FIRMA ACOMPAÑANTE' : 'FIRMA PACIENTE'"
          :firmador="getPaci.descrip"
          :registro_profe="getPaci.cod"
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
          :disable="reg.opcion_lab007 ? false : true"
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
import { impresionLAB007, impresion, generarArchivo } from "@/impresiones";
import { ref, defineAsyncComponent, onMounted } from "vue";
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
  opcion_lab007: "",
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
  const datos_format = JSON.parse(JSON.stringify(reg.value));
  let datos = {
    llave_fact: `${getSesion.suc}${getSesion.clase}${getSesion.nro_comp}`,
    estado: reg.value.opcion_lab007 == "AUTORIZAR" ? "1" : "2",
    disentimiento: "N",
    llave_consen: `${getPaci.cod}00000000`,
    oper_consen: getSesion.oper,
    cod_consen: "LAB007",
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
  try {
    reg.codigo_cie1 = getSesion.diagnosticos[0] ? getSesion.diagnosticos[0].codigo : "";
    reg.descrip_cie1 = getSesion.diagnosticos[0] ? getSesion.diagnosticos[0].descripcion : "";
    reg.codigo_cie2 = getSesion.diagnosticos[1] ? getSesion.diagnosticos[1].codigo : "";
    reg.descrip_cie2 = getSesion.diagnosticos[1] ? getSesion.diagnosticos[1].descripcion : "";
    reg.codigo_cups1 = getSesion.articulos[0] ? getSesion.articulos[0].codigo : "";
    reg.descrip_cups1 = getSesion.articulos[0] ? getSesion.articulos[0].descripcion : "";
    reg.codigo_cups2 = getSesion.articulos[1] ? getSesion.articulos[1].codigo : "";
    reg.descrip_cups2 = getSesion.articulos[1] ? getSesion.articulos[1].descripcion : "";

    const datos_lab007 = {
      autorizo: reg.value.opcion_lab007 == "AUTORIZAR" ? true : false,
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
      content: impresionLAB007({
        datos: datos_lab007,
      }),
    });
    const docDefinitionFile = utilsFormat({
      datos: firmas,
      content: impresionLAB007({
        datos: datos_lab007,
      }),
    });

    await impresion({ docDefinition: docDefinitionPrint });
    const response_impresion = await generarArchivo({ docDefinition: docDefinitionFile });
    return response_impresion;
  } catch (error) {
    console.error("error -->", error);
  }
};

onMounted(() => {
  reg.value.fecha_act = dayjs(getEmpresa.fecha_act).format("YYYY-MM-DD");
  reg.value.edad = calcEdad(getPaci.nacim);
  getFirmaProf();
});

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

const callBackFirma = (data_firma) => {
  if (getAcomp.cod) firma_recibida_acomp.value = data_firma;
  else firma_recibida.value = data_firma;
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
