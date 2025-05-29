<template>
  <q-card class="q-mx-auto format">
    <div>
      <q-card-section>
        <div class="text-center">
          <q-toggle
            v-model="opcion_hc054"
            color="primary"
            keep-color
            false-value="REVOCAR"
            true-value="AUTORIZAR"
            unchecked-icon="block"
            checked-icon="check_circle"
            label="¿Autorizar o revocar este consentimiento?"
          />
          <p :class="opcion_hc054 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
            <q-chip :color="opcion_hc054 == 'AUTORIZAR' ? 'green' : 'red'" class="text-white" v-if="opcion_hc054">
              {{ opcion_hc054 }}
            </q-chip>
          </p>
        </div>

        <div class="row justify-between items-center">
          <p><span class="text-bold">Nombre del paciente:</span> {{ getPaci.descrip }}&nbsp;</p>
          <p>
            <span class="text-bold">Identificación:</span>
            {{ getPaci.cod }}
          </p>
          <p>
            <span class="text-bold">Fecha:</span>
            {{ dayjs(getEmpresa.fecha_act).format("YYYY-MM-DD") }}
          </p>
          <p>
            <span class="text-bold">EPS:</span>
            {{ getPaci.descrip_eps }}
          </p>
        </div>

        <div>
          <p style="text-align: left">
            <span class="text-bold">Objetivo:</span>
          </p>
          <p style="text-align: justify">
            Dar a conocer a los visitantes de los pacientes hospitalizados los horarios y normas para recepción de visitas y llamadas para los
            usuarios hospitalizados.
          </p>
          <p style="text-align: left">
            <span class="text-bold">Condiciones Generales:</span>
          </p>
          <ul>
            <li>
              Los pacientes se podrán comunicar por celular (1) vez a la semana en horario diurno siempre y cuando se tenga autorizada por condición
              clínica esta actividad. Se hará 1 llamada al número autorizado, teniendo en cuenta la unidad donde se encuentre el paciente y el
              cronograma interno.
            </li>
            <li>No se permitirán las video llamadas, ni las fotografías dentro de la institución.</li>
            <li>Las llamadas que el paciente realiza serán para el acudiente Responsable o familiar registrado y autorizado.</li>
            <li>
              Solo tendrá autorizado una sola llamada de 3 minutos a un solo familiar, si el paciente ya realizo la llamada al primer familiar y fue
              optima no podrá llamar a ningún otro número.
            </li>
            <li>
              Si el paciente se torna hostil, o ansioso, o con llanto fácil, o con cambios de ánimos considerables en el momento de la llamada o
              visita, enfermería suspenderá la actividad.
            </li>
            <li>
              Las visitas serán los días <span class="text-bold">martes y jueves</span> de 2:00 pm a 4:00 pm y
              <span class="text-bold"> sábados </span> de 9:00 am a 11:00 am.
            </li>
            <li>
              Las visitas son de máximo dos (2) familiares por paciente y en caso de ser menor de 12 AÑOS o por autorización médica recibirá visitas
              fuera del horario establecido.
            </li>
            <li>
              Los pacientes que tengan visitas permitidas, pero por su estado clínico no sea posible, no se les autorizara visita hasta que mejore su
              estado.
            </li>
            <li>NO traer recipientes en vidrio.</li>
            <li>NO ingresar cigarrillos, bebidas alcohólicas ni sustancias psicoactivas.</li>
            <li>NO ingresar bebidas oscuras (chocolate, tinto, gaseosas negras).</li>
            <li>NO ingresar fósforos o mecheras.</li>
            <li>NO ingresar ningún objeto corto punzante, (tijeras, navajas, cortaúñas, bisturí, agujas, etc.).</li>
            <li>
              NO se le dejara al paciente medios electrónicos como: celular, Tablet, portátiles, iPod, etc. Los familiares y/o acompañantes no podrán
              suministrar estos elementos a los pacientes durante el tiempo de visita.
            </li>
            <li>NO ingresar animales o algún tipo de mascota.</li>
            <li>NO entregar directamente al paciente ningún elemento, se debe entregar primero a enfermería.</li>
            <li>Los pacientes NO podrán manejar dinero dentro de la institución.</li>
            <li>
              Si tiene alguna Queja, Petición, Reclamo o Felicitación puede llenar el formato que se encuentra en el buzón de sugerencias, hacerlo de
              forma verbal, al correo electrónico, por la página web, o telefónicamente según su preferencia.
            </li>
            <li>Si le ingresan alimentos debe ser en recipientes de icopor o plástico.</li>
            <li>
              Se da conocer al paciente y familiares el manual de derechos y deberes de la IPS Monte Sinaí explicándole cada uno de los items
              establecidos.
            </li>
          </ul>
          <p style="text-align: justify">Se firma en constacia de haber entendido y aceptado la información contenida en la presente guía.</p>
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
      </div>
    </q-card-actions>

    <div class="col-12 row justify-center q-my-md">
      <q-btn
        :disable="opcion_hc054 ? false : true"
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
import { impresionHIC055, impresion, generarArchivo } from "@/impresiones";
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

const HIC055 = reactive({
  fecha_act: "",
});

const opcion_hc054 = ref(null);

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
  const requiere = "Complete el siguiente campo";
  if (!firma_recibida.value && !getAcomp.cod) {
    return CON851("?", "info", "No se ha realizado la firma del paciente");
  }
  if (getAcomp.cod && !firma_recibida_acomp.value) {
    return CON851("?", "info", "No se ha realizado la firma del acompañante");
  }

  grabarConsentimiento();
};

const grabarConsentimiento = async () => {
  const datos_format = JSON.parse(JSON.stringify(HIC055));
  let datos = {
    nit_entid: nit_usu.value,
    estado: opcion_hc054.value == "AUTORIZAR" ? "1" : "2",
    id_acomp: getAcomp.cod.padStart(15, "0"),
    paren_acomp: getSesion.paren_acomp,
    oper_consen: getSesion.oper,
    llave_consen: getHc.llave,
    cod_med: getProf.cod,
    cod_consen: "HIC055",
    disentimiento: "N",
    ...datos_format,
  };

  getDll$({ modulo: `save_consen.dll`, data: { ...datos } })
    .then((data) => {
      if (data?.llave_consen) {
        const fecha = data?.llave_consen.slice(23, 31);
        HIC055.fecha = dayjs(fecha).format("YYYY-MM-DD");
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
    const datos_hic055 = {
      autorizo: opcion_hc054.value == "AUTORIZAR" ? true : false,
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
      ...HIC055,
    };

    const firmas = {
      img_firma_consen: firma_recibida.value,
      img_firma_paci: firma_recibida.value,
      img_huella_paci: huella_paci.value,
      img_firma_acomp: firma_recibida_acomp.value,
      firma_prof: firma_prof.value,
    };

    const docDefinitionPrint = await utilsFormat({
      datos: { ...firmas, cod_consen: "HIC055" },
      content: impresionHIC055({
        datos: datos_hic055,
      }),
    });
    const docDefinitionFile = await utilsFormat({
      datos: { ...firmas, cod_consen: "HIC055" },
      content: impresionHIC055({
        datos: datos_hic055,
      }),
    });

    await impresion({ docDefinition: docDefinitionPrint });
    const response_impresion = await generarArchivo({ docDefinition: docDefinitionFile, nomb_archivo: `${llave}-HIC-055` });
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
