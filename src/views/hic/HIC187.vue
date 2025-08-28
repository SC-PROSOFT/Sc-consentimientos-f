<template>
  <q-card class="q-mx-auto format">
    <div>
      <q-card-section>
        <div class="text-center">
          <q-toggle
            v-model="opcion_hic187"
            color="primary"
            keep-color
            false-value="REVOCAR"
            true-value="AUTORIZAR"
            unchecked-icon="block"
            checked-icon="check_circle"
            label="¿Autorizar o revocar este consentimiento?"
          />
          <p :class="opcion_hic187 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
            <q-chip :color="opcion_hic187 == 'AUTORIZAR' ? 'green' : 'red'" class="text-white" v-if="opcion_hic187">
              {{ opcion_hic187 }}
            </q-chip>
          </p>
        </div>
        <div class="text-center text-subtitle1 text-bold">Consentimiento informado para cirugía</div>
        <div class="text-center">(En cumplimiento de la ley 23 de 1981)</div>
        <span class="text-bold">Villavicencio, {{ HIC187.fecha }}. </span>

        <div>
          <p class="text-center" style="margin-top: 10px; font-weight: bold; margin-left: 10px; text-decoration: underline">Consentimiento</p>
          <div class="row">
            <p class="text-justify">
              <!-- Autoriza paciente -->
              <span v-if="!getAcomp.cod" class="text-justify">
                Yo, <span class="text-bold">{{ getPaci.descrip }}</span> identifcado(a) con
                <span class="text-bold">{{ getPaci.tipo_id }} </span>&nbsp;
                <span class="text-bold">{{ getPaci.cod.trim() }}.</span>
              </span>

              <!-- Autoriza acompañante -->
              <span v-if="getAcomp.cod" class="text-justify q-pa-xs">
                Yo, <span class="text-bold">{{ getAcomp.descrip.trim() }}</span
                >, identifcado(a) con <span class="text-bold">{{ getAcomp.tipo_id }} </span>&nbsp;<span class="text-bold">{{ getAcomp.cod }}</span
                >, en calidad de familiar y/o acompañante responsable del paciente&nbsp;<span class="text-bold">{{ getPaci.descrip.trim() }},</span
                >&nbsp; identifcado(a) con&nbsp;<span class="text-bold">{{ getPaci.tipo_id }} </span>&nbsp;<span class="text-bold"
                  >{{ getPaci.cod.trim() }}.</span
                >
              </span>
            </p>
            <!-- Texto autoriza -->
            <div>
              <p class="text-justify">&nbsp;En forma voluntaria conciente en que el(la) doctor(a):</p>
              <Input_ v-model="HIC187.med_cirujano" :field="form.med_cirujano" :inputStyle="{ width: '700px' }" />
            </div>
            <div>
              <p class="text-justify q-mt-xs">&nbsp;como cirujano(a) y el ayudante que el(ella) designe, me realicen:</p>
              <Input_ v-model="HIC187.procedimiento" :field="form.procedimiento" :inputStyle="{ width: '700px' }" />
            </div>
            <div>
              <p class="text-justify q-mt-xs">&nbsp;Como tratamiento para:</p>
              <Input_ v-model="HIC187.tratamiento" :field="form.tratamiento" :inputStyle="{ width: '700px' }" />
            </div>
            <div>
              <p class="text-justify q-mt-xs">&nbsp;Entiendo que esta cirugía consiste básicamente en:</p>
              <Input_ v-model="HIC187.cirugia" :field="form.cirugia" :inputStyle="{ width: '700px' }" />
            </div>
          </div>
        </div>

        <div class="row q-mt-md q-mb-md">
          <p class="text-justify q-pa-xs">
            Esta cirugia no garantiza totalmente los resultados esperados. Se me ha explicado y entiendo que la garantía no puede ser total pues la
            práctica de la medicina y cirugía no son una ciencia exacta. debiendo mi médico colocar todo su conocimiento y su experiencia en buscar
            siempre lo mejores resultados con el objetivo o de de mejorar el problema por el cual consulté.
          </p>
          <p class="text-justify q-pa-xs">
            También he entendido que existen otros tros tipos de tratamiento como los cuales no acepto y voluntariamente he elegido este método
            quirúrgico.
          </p>

          <p class="text-justify q-pa-xs">
            Entiendo que como en toda intervención quirúrgica y por causas independientes dei actuar de mi médico se pueden presentar complicaciones
            comunes y potencialmente serias que podrían requerir tratamientos complementarios, tanto médicos como quirúrgicos, siendo las
            complicaciones más frecuentes: náuseas, vómito, dolor, inflamación, moretones, ceroma (acumulación de líquido en la cicatriz), riz),
            granulomas gra (reacción a cuerpo extraño o sutura), queloide (crecimiento excesivo de la cicatriz), hematomas(acumulación de sangre),
            apraxias (cambios en la sensibilidad de la piel), cistitis, retención urinaria, sangrado o hemorragias con la posible necesidad de
            transfusión (intra o pos operatoria), infecciones con posible evolución febril (orina-heridas, de pared abdominal, ominal, pél
            pélvicas...), reacciones alérgicas, irritación frénica, anemia, heridas involuntarias en vasos sanguíneos, vejiga, intestino u otros
            órganos, eventración (hernias en la cicatriz. Existen otros riesgos como:
          </p>
          <p class="text-justify q-pa-xs">
            También se me informa la posibilidad de complicaciones severas como pelvi peritonitis, choque hemorrágico o trombosis que, aunque son poco
            frecuentes, representan como en toda intervención quirúrgica un riesgo excepcional de perder la vida derivado del acto quirúrgico o de la
            situación vital de cada paciente.
          </p>
          <p class="text-justify q-pa-xs">
            En mi caso particular, el (la) doctor (a) me ha explicado que presento los siguientes riesgos adicionales:
          </p>
          <TextArea_ v-model="HIC187.riesgo_adicionals" :field="form.riesgo_adicionals" class="col-12" />
          <p class="text-justify q-pa-xs">
            Entiendo que para esta cirugía se necesita anestesia, la cual se evaluará y realizará por el servicio de anestesia.
          </p>
          <p class="text-justify q-pa-xs">
            Entiendo que, si es necesario extraer algún tejido, se someterá a estudio anatomopatológico posterior, siendo mi deber reclamar el
            resultado e informarlo al médico.
          </p>
          <p class="text-justify q-pa-xs">
            He entendido las condiciones y objetivo de la cirugía que se me va a practicar, los cuidados que debo tener antes y después de ella, estoy
            satisfecha con la información recibida del médico tratante quien lo ha hecho en un lenguaje claro y sencillo, y me ha dado la oportunidad
            de preguntar y resolver las dudas a satisfacción, además comprendo y acepto el alcance y los riesgos justificados de posible previsión que
            conlleva el procedimiento quirúrgico que aquí autorizo. En tales condiciones consiente que se me realice cirugía.
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
          @reciFirma="callBackFirma"
          class="col-4"
        />
        <ContainerFirma
          :firmador="getTestigo.descrip"
          :registro_profe="getTestigo.cod"
          @reciFirma="callBackFirmaTest"
          quien_firma="FIRMA TESTIGO"
          :codigo_firma="getTestigo.cod"
          class="col-4"
        />
        <ContainerFirma
          disable
          :firma_="firma_prof"
          :firmador="getProf.descrip"
          :descrip_prof="getProf.descrip_atiende"
          :registro_profe="getProf.cod"
          quien_firma="FIRMA PROFESIONAL"
          :codigo_firma="getProf.cod"
          class="col-4"
        />
      </div>
    </q-card-actions>

    <div class="col-12 row justify-center q-my-md">
      <q-btn
        :disable="opcion_hic187 ? false : true"
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
import { impresionHIC187, impresion, generarArchivo } from "@/impresiones";
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

const firma_recibida_acomp = ref("");
const firma_recibida = ref("");
const firma_recibida_test = ref("");
const huella_paci = ref(null);
const firma_prof = ref(null);
const nit_usu = ref(parseInt(getEmpresa.nitusu) || 0);

const HIC187 = reactive({
  fecha: "",
  med_cirujano: "",
  procedimiento: "",
  tratamiento: "",
  riesgo_adicionals: "",
  cirugia: "",
});

const opcion_hic187 = ref(null);

const form = ref({
  med_cirujano: {
    id: "med_cirujano",
    maxlength: "150",
    label: "",
    placeholder: "",
    campo_abierto: true,
  },
  procedimiento: {
    id: "procedimiento",
    maxlength: "300",
    label: "",
    placeholder: "",
    campo_abierto: true,
  },
  tratamiento: {
    id: "tratamiento",
    maxlength: "300",
    label: "",
    placeholder: "",
    campo_abierto: true,
  },
  riesgo_adicionals: {
    id: "riesgo_adicionals",
    maxlength: "500",
    label: "",
    rows: 3,
    campo_abierto: true,
  },
  cirugia: {
    id: "cirugia",
    maxlength: "300",
    label: "",
    placeholder: "",
    campo_abierto: true,
  },
});
onMounted(() => {
  HIC187.fecha = dayjs(getEmpresa.fecha_act).format("YYYY-MM-DD");
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
  const datos_format = JSON.parse(JSON.stringify(HIC187));
  let llave_paci;
  if (/[A-Za-z]/.test(getPaci.cod)) {
    llave_paci = getPaci.cod.padStart(15, " ");
  } else {
    llave_paci = getPaci.cod + "00000000";
  }
  const cod_hic = "HIC187";
  const cod_lab = "LAB093";
  let datos = {
    nit_entid: nit_usu.value,
    estado: opcion_hic187.value == "AUTORIZAR" ? "1" : "2",
    llave_fact: getSesion.modulo == "HIC" ? "" : `${getSesion.suc}${getSesion.clase}${getSesion.nro_comp}`,
    id_acomp: getAcomp.cod.padStart(15, "0"),
    paren_acomp: getSesion.paren_acomp,
    id_testigo: getTestigo.cod.padStart(15, "0"),
    oper_consen: getSesion.oper,
    llave_consen: getSesion.modulo == "HIC" ? getHc.llave : `${llave_paci}`,
    cod_med: getProf.cod,
    cod_consen: getSesion.modulo == "HIC" ? cod_hic : cod_lab,
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
    getAcomp.cod.trim() && (await guardarFile$({ base64: firma_recibida_acomp.value, codigo: `A${llave}` }));
    await guardarFile$({ base64: firma_recibida_test.value, codigo: `T${llave}` });
    await guardarFile$({ base64: firma_recibida.value, codigo: `P${llave}` });

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
    const datos_hic187 = {
      autorizo: opcion_hic187.value == "AUTORIZAR" ? true : false,
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
      ...HIC187,
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
      datos: { ...firmas },
      content: impresionHIC187({
        datos: datos_hic187,
      }),
    });
    const docDefinitionFile = await utilsFormat({
      datos: { ...firmas },
      content: impresionHIC187({
        datos: datos_hic187,
      }),
    });

    let nomb_consen = getSesion.modulo == "HIC" ? "HIC-187" : "LAB-093";
    await impresion({ docDefinition: docDefinitionPrint });
    const response_impresion = await generarArchivo({ docDefinition: docDefinitionFile, nomb_archivo: `${llave}${nomb_consen}` });
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
