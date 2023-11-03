<template>
  <q-card class="q-mx-auto format">
    <q-card-section>
      <q-form ref="my_form" @submit="onSubmit">
        <div class="row">
          <p>Historia clínica numero:</p>
          <q-input type="text" dense class="col-1" />
        </div>
        <div class="row">
          <p>Ciudad:</p>
          <q-input type="text" dense class="col-3" v-model="reg_paci.descrip_ciudad" readonly />
          <p>fecha:</p>
          <q-input type="text" dense class="col-1" v-model="datos.fecha_act" readonly />
        </div>

        <div class="row">
          <p>Yo,</p>
          <q-input v-model="reg_paci.descrip" type="text" dense class="col-4" readonly />
          <p>, identificado (a) con cedula numero</p>
          <q-input type="text" dense class="col-2" v-model="reg_paci.cod" readonly />
          <p>expedida en</p>
          <q-input type="text" dense class="col-2" v-model="reg_paci.descrip_ciudad" readonly />
          <p>actuando en nombre propio.</p>

          <p>
            Comprendo que durante el procedimiento pueden aparecer circunstancias imprevisibles o inesperadas,
            que pueden requerir una extensión de otro procedimiento; acepto que las ciencias de la salud no
            son una ciencia exacta, que se garantizan resultados en la atención, y que, aunque son
            procedimientos seguros pueden presentarse complicaciones como:
          </p>
          <ul>
            <li>SANGRADO</li>
            <li>COLOR</li>
            <li>PELLIZCOS</li>
          </ul>
          <q-input
            placeholder="Ingrese complicaciones"
            v-model="HIC030.complicaciones"
            maxlength="200"
            type="textarea"
            class="col-12"
            autogrow
            dense
          />
          <p class="q-pt-md">
            Me han explicado también que de negarme a realizarme los exámenes diagnósticos, procedimientos y/o
            tratamientos ordenados, estoy asumiendo la responsabilidad por sus consecuencias, con lo que
            exonero de ellas el quipo asistencial tratante y la institución, sin embargo ello no significa que
            pierda mis derechos para una atención posterior. Se me ha informado que en la ESE salud Yopal,
            cuenta con personal idóneo, competente y capacitado para la determinación de conductas
            terapéuticas que contribuyan a mejorar mi calidad de vida y salud. Doy constancia de que se me ha
            explicado en lenguaje sencillo claro, y entendible para mí, los aspectos relacionados con mi
            condición actual, los riesgos y beneficios de los procedimientos; se me ha permitido hacer todas
            las preguntas necesarias, y han sido resueltas satisfactoriamente.
          </p>
          <p>
            Por lo tanto, en forma consciente y voluntaria, sin haber sido objeto de coacción, persuasión, ni
            manipulación:
          </p>
          <div class="row" v-show="HIC030.autorizo">
            <p>
              <ins class="text-bold">Autorizo</ins> al personal asistencial de la ESE Salud Yopal, para la
              realización de los procedimientos de salud: TOMA DE CITOLOGIA CERVICOVAGINAL, cuyo objetivo es:
            </p>
            <p>DETECCION TEMPRANA DE CANCER DE CERVIX, ante el diagnostico</p>
            <q-input
              dense
              ref="diag"
              type="text"
              class="col-2"
              :rules="[requerido]"
              v-model="HIC030.diagnostico"
            />
          </div>
          <div class="row" v-show="HIC030.revocar">
            <p>
              Expreso mi voluntad de <ins class="text-bold">revocar</ins> revocar el consentimiento presentado
              y declaro por tanto que, tras la información recibida, no consiento someterme al procedimiento
              de:
            </p>
            <q-input type="text" dense class="col-2" label="falta procedimiento" />
            <p>por los siguientes motivos:</p>
            <q-input
              type="text"
              dense
              class="col-7"
              v-model="HIC030.revocar_motivos"
              label="Ingrese motivos"
            />
          </div>

          <table class="col-12 q-pt-lg">
            <tr>
              <th style="border: 1px solid #ccc">
                <div class="row justify-center">
                  <span class="custum">FECHA DE ULTIMA CITOLOGIA CEVIOVAGINAL:</span>
                  <q-input
                    class="py-0 my-0"
                    label="Fecha"
                    type="date"
                    dense
                    v-model="HIC030.fecha_ult_cito"
                  />
                </div>
              </th>
              <th style="border: 1px solid #ccc">
                <div class="row justify-center">
                  <span class="custum">ANTECEDENTES GINECOLOGICOS: G: P: C: V: A:</span>
                  <q-input label="Tipo antecedente" dense class="q-py-none q-my-none col-4" />
                </div>
              </th>
            </tr>
            <tr>
              <td>
                <p>
                  <strong
                    >TELEFONO 1:
                    <q-input
                      dense
                      type="number"
                      maxlength="10"
                      label="Tel. #1"
                      v-model="HIC030.telefono1"
                      class="q-py-none q-my-non"
                      style="min-width: 300px; display: inline-block"
                    />
                  </strong>
                </p>
                <p>
                  <strong
                    >TELEFONO 2:
                    <q-input
                      dense
                      type="number"
                      maxlength="10"
                      label="Tel. #2"
                      v-model="HIC030.telefono2"
                      class="q-py-none q-my-non"
                      style="min-width: 300px; display: inline-block"
                    />
                  </strong>
                </p>
              </td>
              <td></td>
            </tr>
          </table>
        </div>
      </q-form>
    </q-card-section>
    <q-separator />

    <q-card-actions>
      <div class="col-12 row justify-center q-mb-md">
        <q-btn
          class="q-mr-lg"
          color="green"
          icon-right="check_circle"
          label="Autorizo"
          type="submit"
          @click="() => !HIC030.revocar && btnAutorizo()"
        />
        <q-btn
          color="amber"
          icon-right="block"
          label="Revocar"
          @click="() => !HIC030.autorizo && btnRevocar()"
        />
      </div>
      <div class="col-12 row justify-around">
        <ContainerFirma
          @reciFirma="callBackFirma"
          firmador="Joan Sebastian Quintero Nieto"
          quien_firma="FIRMA TUTOR O FAMILIAR"
          class="col-4"
        />
        <ContainerFirma
          @reciFirma="callBackFirma"
          firmador="Fernanda Quintero"
          quien_firma="FIRMA PACIENTE"
          class="col-4"
        />
      </div>
    </q-card-actions>
  </q-card>
</template>
<script setup>
import { ref, defineAsyncComponent, onMounted } from "vue";
import { useModuleFormatos } from "../../store";

const ContainerFirma = defineAsyncComponent(() => import("../../components/global/ContainerFirma.vue"));
const { reg_paci, reg_acomp, reg_prof, datos } = useModuleFormatos();

const firma_recibida = ref("");
const my_form = ref(null);
const diag = ref(null);

const HIC030 = ref({
  telefono1: "",
  telefono2: "",
  revocar: false,
  autorizo: false,
  diagnostico: "",
  antec_gineco: "",
  antec_gineco: "",
  fecha_ult_cito: "",
  complicaciones: "",
  revocar_motivos: "",
});

function callBackFirma(dataF) {
  firma_recibida.value = dataF;
}

function btnRevocar() {
  HIC030.value.revocar = !HIC030.value.revocar;
}

function btnAutorizo() {
  !HIC030.value.autorizo && setTimeout(() => diag.value.focus(), 100);

  HIC030.value.autorizo = !HIC030.value.autorizo;
}

function onSubmit() {
  console.log("--> onSubmit");
}

function requerido(val) {
  return !!val || "Este campo es requerido";
}

onMounted(() => {
  console.log("datos -->", datos);
});
</script>

<style>
p {
  margin-top: 10px;
  margin-left: 5px;
  margin-right: 8px;
}
span.custum {
  margin-top: 10px;
  margin-left: 5px;
  margin-right: 8px;
}
</style>
