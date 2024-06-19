<template>
  <q-card class="q-mx-auto format q-mb-lg" style="overflow: auto">
    <q-card-section>
      <div class="text-center">
        <q-toggle
          v-model="opcion_hc044"
          color="primary"
          keep-color
          false-value="REVOCAR"
          true-value="AUTORIZAR"
          unchecked-icon="block"
          checked-icon="check_circle"
          label="¿Autorizar o revocar este consentimiento?"
        />
        <p :class="opcion_hc044 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
          <q-chip
            :color="opcion_hc044 == 'AUTORIZAR' ? 'green' : 'red'"
            class="text-white"
            v-if="opcion_hc044"
          >
            {{ opcion_hc044 }}
          </q-chip>
        </p>
      </div>
      <q-form>
        <p>
          <span class="text-bold">CIUDAD:</span> {{ getEmpresa.ciudad_usuar }}&nbsp;
          <span class="text-bold">FECHA ACTUAL:</span>
          {{ dayjs(getEmpresa.fecha_act).format("YYYY-MM-DD") }}
          <span class="text-bold">ENTIDAD:</span> {{ getEmpresa.nomusu }} &nbsp;
        </p>
        <p>
          En forma libre y voluntaria yo <span class="text-bold"> {{ getAcomp.descrip }} </span> identificado
          Con documento número <span class="text-bold"> {{ getAcomp.cod }} </span> manifiesto mi deseo de
          ingresar como acompañante durante el trabajo de parto, parto y post parto de la usuaria:
          <span class="text-bold"> {{ getPaci.descrip }} </span>
        </p>
        <p style="text-align: justify">
          He recibido información clara, en lenguaje sencillo sobre la importancia del acompañamiento durante
          el trabajo de parto y parto, así como sus beneficios en la salud materna y perinatal.
        </p>
        <p>Me comprometo a:</p>
        <ul>
          <li>
            Dar apoyo continuo a mi familiar para que se sienta más tranquila y segura durante su trabajo de
            parto
          </li>
          <li>Respetar al personal de la salud y demás pacientes</li>
          <li>Brindar ayuda efectiva a la mujer:</li>
          <li>
            Como promover la respiración consciente, el movimiento como caminar (siempre que no esté
            contraindicado) y hidratación.
          </li>
          <li>
            Permanecer en la unidad al lado de mi familiar, no deambular por el servicio ni por otros
            servicios de la institución.
          </li>
          <li>Respetar la privacidad de otras usuarias.</li>
          <li>
            Permitir la realización de los procedimientos que requiera mi familiar durante su atención en el
            servicio,
          </li>
          <li>
            Está atento a suministrar información al personal médico, sobre datos personales y el seguimiento
            de la atención prenatal.
          </li>
          <li>
            No manipular los dispositivos médicos (Líquidos endovenosos, bombas de infusión, monitores,
            oxigeno, etc.)
          </li>
          <li>En la sala de partos permanecer en la cabecera de mi familiar para brindar apoyo requerido.</li>
          <li>
            Retirarme del servicio ante la orden médica en caso de situaciones inesperadas para facilitar la
            actuación del personal de salud.
          </li>
          <li>No realizar videos de las actuaciones del personal de salud ni de otros pacientes.</li>
        </ul>
        <p>
          La empresa {{ getEmpresa.nomusu }}, respeta el derecho de las mujeres en trabajo de parto, a estar
          acompañadas por su compañero o una persona significativa para ella durante el trabajo de parto,
          parto y puerperio.
        </p>
        <span class="text-bold text-subtitle1"
          >Requisitos para el acompañamiento durante el trabajo de parto y parto, en la ESE Salud Yopal.</span
        >
        <ul>
          <li>
            Idealmente que haya asistido o participado del curso de preparación para la maternidad y
            paternidad.
          </li>
          <li>Leer y firmar el consentimiento de acompañamiento.</li>
          <li>usar de manera permanente tapabocas</li>
          <li>No ingresar objetos de valor como joyas bolsos etc.</li>
          <li>
            Brindar ayuda efectiva a la mujer: promover la respiración constante. Brindar hidratación
            constante
          </li>
          <li>Evitar el uso del celular en lo posible</li>
          <li>Colaborar con el manejo médico y decisiones tomados por el médico tratante.</li>
          <li>
            Disponer con la pañalera con los elementos requeridos y estar atento de la entrega de alguno,
            cuando se requiera.
          </li>
          <li>Acatar las indicaciones del personal enfermería de sala de partos.</li>
          <li>Es voluntario entrar al parto.</li>
          <li>Respetar la privacidad de las demás usuarias de la sala de trabajo de parto.</li>
        </ul>
      </q-form>
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
          :disable="opcion_hc044 ? false : true"
          @click="validarDatos"
          icon-right="check_circle"
          class="q-mr-lg"
          color="green"
          label="GRABAR"
          type="submit"
        />
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup>
import { useModuleFormatos, useApiContabilidad, useModuleCon851, useModuleCon851p } from "@/store";
import { impresionHC044, impresion, generarArchivo } from "@/impresiones";
import { ref, defineAsyncComponent, onMounted } from "vue";
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
const fecha_act = ref(null);

const reg = ref({});
const opcion_hc044 = ref(null);

onMounted(() => {
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
  const datos_format = JSON.parse(JSON.stringify(reg.value));
  let datos = {
    estado: opcion_hc044.value == "AUTORIZAR" ? "1" : "2",
    disentimiento: "N",
    llave_consen: getHc.llave,
    oper_consen: getSesion.oper,
    cod_consen: "HIC044",
    cod_med: getProf.cod,
    id_acomp: getAcomp.cod.padStart(15, "0"),
    paren_acomp: getSesion.paren_acomp,
    ...datos_format,
  };

  getDll$({ modulo: `save_consen.dll`, data: { ...datos } })
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
      CON851("?", "error", error);
    });
};

const grabarFirmaConsen = async (llave) => {
  try {
    console.log("⚡  getAcomp.cod-->", getAcomp.cod);
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
    const datos_hic044 = {
      autorizo: opcion_hc044.value == "AUTORIZAR" ? true : false,
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

    const docDefinitionPrint = await utilsFormat({
      datos: { ...firmas, cod_consen: "HIC044" },
      content: impresionHC044({
        datos: datos_hic044,
      }),
    });
    const docDefinitionFile = await utilsFormat({
      datos: { ...firmas, cod_consen: "HIC044" },
      content: impresionHC044({
        datos: datos_hic044,
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
