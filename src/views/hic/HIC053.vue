<template>
  <q-card class="q-mx-auto format">
    <div>
      <q-card-section>
        <div class="text-center">
          <q-toggle
            v-model="opcion_hc053"
            color="primary"
            keep-color
            false-value="REVOCAR"
            true-value="AUTORIZAR"
            unchecked-icon="block"
            checked-icon="check_circle"
            label="¿Autorizar o revocar este consentimiento?"
          />
          <p :class="opcion_hc053 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
            <q-chip :color="opcion_hc053 == 'AUTORIZAR' ? 'green' : 'red'" class="text-white" v-if="opcion_hc053">
              {{ opcion_hc053 }}
            </q-chip>
          </p>
        </div>

        <div class="row justify-between items-center">
          <p><span class="text-bold">Nombre del paciente:</span> {{ getPaci.descrip }}&nbsp;</p>
          <p><span class="text-bold">Tipo y numero documento de identificación:</span> {{ getPaci.tipo_id + " " + getPaci.cod }} &nbsp;</p>
          <p><span class="text-bold">EPS:</span> {{ getPaci.descrip_eps }}&nbsp;</p>
          <p>
            <span class="text-bold">Fecha:</span>
            {{ dayjs(getEmpresa.fecha_act).format("YYYY-MM-DD") }}
          </p>
        </div>

        <div>
          <p style="text-align: justify">
            Yo <span class="text-bold">{{ getPaci.descrip }}</span> con cedula de ciudadanía N° <span class="text-bold">{{ getPaci.cod }}</span> de
            <span class="text-bold">{{ getPaci.descrip_ciudad }}</span> en calidad de familiar y/o acompañante responsable del paciente anteriormente
            mencionado, al firmar la presente acta reconozco que se me explico y entendí la siguiente información:
          </p>

          <p style="text-align: justify">
            <span class="text-bold" style="text-decoration: underline"
              >No se recibe ropa de color negro, ni de "marca", debe ser ropa sencilla, cómoda y discreta para uso diario en actividades y descanso.
            </span>
          </p>

          <div class="row q-mt-md q-mb-md" style="width: 100%">
            <div class="text-center" style="border: 1px solid #ccc; width: 85%">
              <p style="text-align: justify; padding: 10px">
                La IPS de salud mental monte Sinaí S.A.S le ofrece el servicio de lavandería de las prendas de vestir para el paciente por un valor de
                <span class="text-bold"> $ 2.500 (DOS MIL QUINIENTOS PESOS)</span> DIARIOS. Acepta el servicio de manera voluntaria?
              </p>
            </div>
            <div class="text-left" style="border: 1px solid #ccc; width: 15%">
              <q-radio color="primary" v-model="HIC053.acept_serv_volunt" val="S" label="SI" />
              <q-radio color="primary" v-model="HIC053.acept_serv_volunt" val="N" label="NO" />
            </div>
          </div>
          <div class="row q-mt-md q-mb-md" style="width: 100%">
            <div class="text-center" style="border: 1px solid #ccc; width: 85%">
              <p style="text-align: justify; padding: 10px">
                En caso de no aceptar adquiero el compromiso de llevar la ropa sucia y traer la ropa limpia del paciente que constara de cinco (5)
                mudas cada semana?
              </p>
            </div>
            <div class="text-left" style="border: 1px solid #ccc; width: 15%">
              <q-radio color="primary" v-model="HIC053.compr_ropa_sucia" val="S" label="SI" />
              <q-radio color="primary" v-model="HIC053.compr_ropa_sucia" val="N" label="NO" />
            </div>
          </div>
          <span class="text-bold">LA ROPA que se sugiere para el paciente consta de:</span>
          <ul>
            <li>2 camisetas sencillas, manga corta.</li>
            <li>1 camiseta o camisa de manga larga.</li>
            <li>3 pantalonetas o pantalón largo tipo sudadera.</li>
            <li>3 Interiores.</li>
            <li>2 brasier (Mujeres).</li>
            <li>1 pijama.</li>
          </ul>

          <p style="text-align: justify; padding: 10px">
            Además de lo anterior el familiar o responsable del paciente se compromete a traer los útiles de aseo personal requeridos durante el
            tiempo de hospitalización del mismo.
          </p>
          <span class="text-bold">LOS ÚTILES DE ASEO PERSONAL SON "CONSUMIBLES" PARA 7 DIAS DE HOSPITALIZACIÓN, consta de:</span>
          <ul>
            <li>1 cepillo de dientes.</li>
            <li>1 crema dental mediana.</li>
            <li>1 barra de jabón de tocador.</li>
            <li>2 rollos de Papel higiénico.</li>
            <li>1 toalla de baño.</li>
            <li>2 sobres de Shampoo, empaque individual.</li>
            <li>1 paquete Toallas higiénicas (mujeres).</li>
            <li>1 prestobarba.</li>
            <li>2 sobres de desodorante en crema, empaque individual.</li>
            <li>30 pañales desechables adulto (si el paciente lo requiere).</li>
            <li>1 paquete de 100 pañitos húmedos (si el paciente requiere pañal).</li>
          </ul>
          <p style="text-align: justify">
            <span class="text-bold"
              >EN CASO DE NO TRAER LOS UTILES DE ASEO PARA EL PACIENTE ME COMPROMETO A CANCELAR LA SUMA DE $ 35.000 (Treinta y cinco mil pesos Mcte.),
              YA QUE LA IPS SE LOS SUMINISTRARÁ.
            </span>
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
          @reciFirma="callBackFirmaAcomp"
          class="col-4"
        />
      </div>
    </q-card-actions>

    <div class="col-12 row justify-center q-my-md">
      <q-btn
        :disable="opcion_hc053 ? false : true"
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
import { impresionHIC053, impresion, generarArchivo } from "@/impresiones";
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

const HIC053 = reactive({
  fecha_act: "",
  acept_serv_volunt: "N",
  compr_ropa_sucia: "N",
});

const opcion_hc053 = ref(null);

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
  const datos_format = JSON.parse(JSON.stringify(HIC053));
  let datos = {
    nit_entid: nit_usu.value,
    estado: opcion_hc053.value == "AUTORIZAR" ? "1" : "2",
    id_acomp: getAcomp.cod.padStart(15, "0"),
    paren_acomp: getSesion.paren_acomp,
    oper_consen: getSesion.oper,
    llave_consen: getHc.llave,
    cod_med: getProf.cod,
    cod_consen: "HIC053",
    disentimiento: "N",
    ...datos_format,
  };

  getDll$({ modulo: `save_consen.dll`, data: { ...datos } })
    .then((data) => {
      if (data?.llave_consen) {
        const fecha = data?.llave_consen.slice(23, 31);
        HIC053.fecha = dayjs(fecha).format("YYYY-MM-DD");
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
    const datos_hic052 = {
      autorizo: opcion_hc053.value == "AUTORIZAR" ? true : false,
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
      ...HIC053,
    };

    const firmas = {
      img_firma_consen: firma_recibida.value,
      img_firma_paci: firma_recibida.value,
      img_huella_paci: huella_paci.value,
      img_firma_acomp: firma_recibida_acomp.value,
      firma_prof: firma_prof.value,
    };

    const docDefinitionPrint = await utilsFormat({
      datos: { ...firmas, cod_consen: "HIC053" },
      content: impresionHIC053({
        datos: datos_hic052,
      }),
    });
    const docDefinitionFile = await utilsFormat({
      datos: { ...firmas, cod_consen: "HIC053" },
      content: impresionHIC053({
        datos: datos_hic052,
      }),
    });

    await impresion({ docDefinition: docDefinitionPrint });
    const response_impresion = await generarArchivo({ docDefinition: docDefinitionFile, nomb_archivo: `${llave}-HIC-053` });
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
