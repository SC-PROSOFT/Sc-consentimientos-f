<template>
  <q-card class="q-mx-auto format">
    <div>
      <q-card-section>
        <div class="text-center">
          <q-toggle
            v-model="opcion_hic075"
            color="primary"
            keep-color
            false-value="REVOCAR"
            true-value="AUTORIZAR"
            unchecked-icon="block"
            checked-icon="check_circle"
            label="¿Autorizar o revocar este consentimiento?"
          />
          <p :class="opcion_hic075 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
            <q-chip :color="opcion_hic075 == 'AUTORIZAR' ? 'green' : 'red'" class="text-white" v-if="opcion_hic075">
              {{ opcion_hic075 }}
            </q-chip>
          </p>
        </div>
        <div class="row q-mt-md q-mb-md">
          <div class="text-left row" style="width: 80%">
            <p style="margin-top: 1px; margin-left: 1px">N° Historia:</p>
            <p style="font-weight: bold; margin-top: 1px; margin-left: 1px">{{ getHc.llave }}</p>
          </div>
          <div class="text-left row" style="width: 20%">
            <p style="margin-top: 1px; margin-left: 1px">Fecha:</p>
            <p style="font-weight: bold; margin-top: 1px; margin-left: 1px">{{ HIC075.fecha_act }}</p>
          </div>
          <div class="text-left row" style="width: 50%">
            <p style="margin-top: 1px; margin-left: 1px">La señora (Nombre y apellidos):</p>
            <p style="font-weight: bold; margin-top: 1px; margin-left: 1px">{{ getPaci.descrip }}</p>
          </div>
          <div class="text-left row" style="width: 30%">
            <p style="margin-top: 1px; margin-left: 1px">Tipo documento de identidad:</p>
            <p style="font-weight: bold; margin-top: 1px; margin-left: 1px">{{ getPaci.tipo_id }}</p>
          </div>
          <div class="text-left" style="width: 20%">
            <p style="font-weight: bold; margin-top: 1px; margin-left: 1px">N°: {{ getPaci.cod }}</p>
          </div>
          <div class="text-left row" style="width: 30%">
            <p style="margin-top: 1px; margin-left: 1px">Con domicilio en:</p>
            <p style="font-weight: bold; margin-top: 1px; margin-left: 1px">{{ getPaci.direccion }}</p>
          </div>
        </div>
        <div class="text-left" style="width: 100%">
          <p style="font-weight: bold; margin-top: 1px">En caso de Incapacidad de consentir</p>
        </div>
        <div class="row q-mb-md">
          <div class="text-left row" style="width: 50%">
            <p style="margin-top: 1px; margin-left: 1px">El señor (a):</p>
            <p style="font-weight: bold; margin-top: 1px; margin-left: 1px">{{ getAcomp.descrip }}</p>
          </div>
          <div class="text-left row" style="width: 30%">
            <p style="margin-top: 1px; margin-left: 1px">Tipo documento de identidad:</p>
            <p style="font-weight: bold; margin-top: 1px; margin-left: 1px">{{ getAcomp.tipo_id }}</p>
          </div>
          <div class="text-left" style="width: 20%">
            <p style="font-weight: bold; margin-top: 1px; margin-left: 1px">N°: {{ getAcomp.cod }}</p>
          </div>
          <div class="text-left row" style="width: 30%">
            <p style="margin-top: 1px; margin-left: 1px">Con domicilio en:</p>
            <p style="font-weight: bold; margin-top: 1px; margin-left: 1px">{{ getAcomp.direccion }}</p>
          </div>
        </div>

        <div class="text-center" style="width: 100%">
          <p style="font-weight: bold; margin-top: 10px">DECLARO</p>
        </div>

        <div class="row">
          <div class="text-justify" style="width: 100%">
            <p class="q-ml-xs q-mr-xs">Que (NOMBRE Y APELLIDOS DEL PROFESIONAL QUE PROPORCIONA LA INFORMACIÓN) {{ getProf.descrip.trim() }}.</p>
          </div>
        </div>
        <ol>
          <li>
            <div>
              <p>
                Me ha informado de los métodos anticonceptivos disponibles, de sus ventajas e inconvenientes, tras lo cual y para mi situación, mi
                elección es la colocación de un Dispositivo Intrauterino (DIU), del modelo T Cu 380 A.
              </p>
              <p>
                <span class="text-bold"> El DIU es un dispositivo </span> de polietileno y cobre,
                <span class="text-bold"> que se coloca dentro del útero </span> con fines anticonceptivos.
              </p>
              <p>
                La colocación del DIU y del modelo será indicado en consulta ambulatoria por PERSONAL CALIFICADO, que me indicará los controles
                posteriores a los que me debo someter, así como la duración del mismo.
              </p>
            </div>
          </li>
          <li>
            <div>
              <span class="text-bold">Complicaciones y/o riesgos y fracasos: </span>
              <ol type="A">
                <li>
                  <span>En el momento de la inserción:</span>
                  <ul>
                    <li>Dolor</li>
                    <li>Perforación uterina (1 a 7 por cada 1.000).</li>
                    <li>
                      <p style="text-align: justify">
                        Infección en un período menor de un mes, pasado este período de tiempo la infección se debe a otras causas y no a la
                        colocación del DIU.
                      </p>
                    </li>
                    <li>Sangrado genital.</li>
                  </ul>
                </li>
                <li>
                  <div>
                    <span>En la evolución:</span>
                    <ul>
                      <li>
                        <p style="text-align: justify">
                          Gestación (1-3%), si ésta se produce, existe un mayor riesgo de aborto y de embarazo ectópico. La tasa real de fracaso como
                          método anticonceptivo es mayor en el 1º año, entre 1-3%.
                        </p>
                      </li>
                      <li>
                        <p style="text-align: justify">
                          Descenso y expulsión, puede ser asintomático o cursar con dolor o sangrado genital. Esto suele producirse en el primer mes
                          de uso.
                        </p>
                      </li>
                      <li>
                        <p style="text-align: justify">
                          Alteraciones menstruales: aumento de la cantidad y/o duración del sangrado menstrual, manchado intermenstrual.
                        </p>
                      </li>
                      <li>Dolor.</li>
                      <li>Migración a cavidad abdominal con la posibilidad de complicaciones subsiguientes.</li>
                    </ul>
                  </div>
                </li>
                <li>
                  <span> En su extracción: </span>
                  <ul>
                    <li>
                      <p style="text-align: justify">
                        Pérdida de referencia de los hilos y la rotura con retención de un fragmento. En caso de producirse alguna de estas
                        complicaciones seré enviada al médico ginecólogo quien me indicará la necesidad de someterme a las pruebas o tratamientos
                        complementarios necesarios, que pueden ser: extracción en algunos casos de mala tolerancia. gestación o infección, tratamiento
                        antibiótico, laparoscopía o microlaparotomía en caso de perforación o embarazo ectópico, histeroscopía en caso de pérdida de
                        referencia de hilos o retención de fragmentos, etc.
                      </p>
                    </li>
                  </ul>
                </li>
              </ol>
            </div>
          </li>
          <li>
            <p style="text-align: justify">
              <span class="text-bold"> He comprendido </span> las explicaciones que se me han dado en un lenguaje claro y sencillo, y el profesional
              que me ha atendido me ha permitido realizar todas las observaciones y <span class="text-bold"> me ha aclarado </span> todas las dudas
              que le he planteado. También comprendo que, en cualquier momento y sin necesidad de dar ninguna explicación,
              <span class="text-bold"> puedo revocar </span> el consentimiento que ahora presto.
            </p>
            <p style="text-align: justify">
              Por ello, manifiesto que estoy <span class="text-bold" style="text-decoration: underline"> satisfecha </span> con la información
              recibida y que <span class="text-bold" style="text-decoration: underline"> comprendo </span> el alcance y los riesgos del procedimiento.
            </p>

            <p>Y en tales condiciones</p>
          </li>
        </ol>

        <div class="text-center" style="width: 100%">
          <p style="font-weight: bold; margin-top: 10px">CONSIENTO</p>
        </div>

        <p style="text-align: justify">
          Que se me realice la colocación de un Dispositivo Intrauterino (DIU) modelo T Cu 380 A en {{ getEmpresa.nomusu }}, fecha
          {{ HIC075.fecha_act }}.
        </p>

        <div v-if="opcion_hic075 == 'REVOCAR'">
          <div style="width: 100%">
            <div class="text-center">
              <p style="font-weight: bold; margin-top: 10px">REVOCACIÓN</p>
            </div>
            <div class="text-justify">
              <p>
                Yo, <span class="text-bold">{{ getPaci.descrip }} </span> Tipo documento de identidad
                <span class="text-bold">{{ getPaci.tipo_id }} </span> N° <span class="text-bold">{{ getPaci.cod }} </span> expedida en
                <span class="text-bold">{{ getPaci.descrip_ciudad }} </span> con domicilio en <span class="text-bold">{{ getPaci.direccion }} </span>
                <span class="text-bold">REVOCO </span> el consentimiento prestado en fecha <span class="text-bold">{{ HIC075.fecha_act }} </span> y no
                deseo proseguir el procedimiento propuesto, que doy con esta fecha por finalizado. en
                <span class="text-bold">{{ getEmpresa.nomusu }} </span> fecha
                <span class="text-bold">{{ HIC075.fecha_act }}. </span>
              </p>
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
        :disable="opcion_hic075 ? false : true"
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
import { impresionHIC075, impresion, generarArchivo } from "@/impresiones";
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

const HIC075 = reactive({
  fecha_act: "",
  autoriza: "S",
  vaginal: "N",
  rectal: "N",
});

const opcion_hic075 = ref(null);

onMounted(() => {
  HIC075.fecha_act = dayjs(getEmpresa.fecha_act).format("YYYY-MM-DD");
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
  const datos_format = JSON.parse(JSON.stringify(HIC075));
  let datos = {
    nit_entid: nit_usu.value,
    estado: opcion_hic075.value == "AUTORIZAR" ? "1" : "2",
    id_acomp: getAcomp.cod.padStart(15, "0"),
    paren_acomp: getSesion.paren_acomp,
    oper_consen: getSesion.oper,
    llave_consen: getHc.llave,
    cod_med: getProf.cod,
    cod_consen: "HIC075",
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
    const datos_hic075 = {
      autorizo: opcion_hic075.value == "AUTORIZAR" ? true : false,
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
      ...HIC075,
    };

    const firmas = {
      img_firma_consen: firma_recibida.value,
      img_firma_paci: firma_recibida.value,
      img_huella_paci: huella_paci.value,
      img_firma_acomp: firma_recibida_acomp.value,
      firma_prof: firma_prof.value,
    };

    const docDefinitionPrint = await utilsFormat({
      datos: { ...firmas, cod_consen: "HIC075" },
      content: impresionHIC075({
        datos: datos_hic075,
      }),
    });
    const docDefinitionFile = await utilsFormat({
      datos: { ...firmas, cod_consen: "HIC075" },
      content: impresionHIC075({
        datos: datos_hic075,
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
