<template>
  <q-card class="q-ma-xl">
    <q-card-section>
      <div class="row">
        <p>Historia clínica numero:</p>
        <q-input type="text" dense class="col-1" />
      </div>
      <div class="row">
        <p>Ciudad:</p>
        <q-input type="text" dense class="col-1" />
        <p>fecha:</p>
        <q-input type="text" dense class="col-1" />
      </div>

      <div class="row">
        <p>Yo,</p>
        <q-input type="text" dense />
        <p>, identificado (a) con cedula numero</p>
        <q-input type="text" dense class="col-1" />
        <p>expedida en</p>
        <q-input type="text" dense class="col-1" />
        <p>actuando en nombre propio.</p>

        <p>
          Comprendo que durante el procedimiento pueden aparecer circunstancias imprevisibles o inesperadas,
          que pueden requerir una extensión de otro procedimiento; acepto que las ciencias de la salud no son
          una ciencia exacta, que se garantizan resultados en la atención, y que, aunque son procedimientos
          seguros pueden presentarse complicaciones como:
        </p>
        <ul>
          <li>SANGRADO</li>
          <li>COLOR</li>
          <li>PELLIZCOS</li>
        </ul>
        <q-input
          placeholder="Ingrese complicaciones"
          maxlength="200"
          type="textarea"
          class="col-12"
          autogrow
          dense
        />
        <p class="q-pt-md">
          Me han explicado también que de negarme a realizarme los exámenes diagnósticos, procedimientos y/o
          tratamientos ordenados, estoy asumiendo la responsabilidad por sus consecuencias, con lo que exonero
          de ellas el quipo asistencial tratante y la institución, sin embargo ello no significa que pierda
          mis derechos para una atención posterior. Se me ha informado que en la ESE salud Yopal, cuenta con
          personal idóneo, competente y capacitado para la determinación de conductas terapéuticas que
          contribuyan a mejorar mi calidad de vida y salud. Doy constancia de que se me ha explicado en
          lenguaje sencillo claro, y entendible para mí, los aspectos relacionados con mi condición actual,
          los riesgos y beneficios de los procedimientos; se me ha permitido hacer todas las preguntas
          necesarias, y han sido resueltas satisfactoriamente.
        </p>
        <p>
          Por lo tanto, en forma consciente y voluntaria, sin haber sido objeto de coacción, persuasión, ni
          manipulación:
        </p>
        <div class="row">
          <q-checkbox color="teal" />
          <p>
            <ins class="text-bold">Autorizo</ins> al personal asistencial de la ESE Salud Yopal, para la
            realización de los procedimientos de salud: TOMA DE CITOLOGIA CERVICOVAGINAL, cuyo objetivo es:
          </p>
          <p>DETECCION TEMPRANA DE CANCER DE CERVIX, ante el diagnostico</p>
          <q-input type="text" dense class="col-1" />
        </div>
        <div class="row">
          <q-checkbox color="teal" />
          <p>
            Expreso mi voluntad de <ins class="text-bold">revocar</ins> revocar el consentimiento presentado y
            declaro por tanto que, tras la información recibida, no consiento someterme al procedimiento de:
          </p>
          <q-input type="text" dense class="col-1" />
          <p>por los siguientes motivos:</p>
          <q-input type="text" dense class="col-8" />
        </div>

        <table class="col-12 q-pt-lg">
          <tr>
            <th style="border: 1px solid">
              <div class="row">
                <span class="custum">FECHA DE ULTIMA CITOLOGIA CEVIOVAGINAL:</span>
                <q-input class="py-0 my-0" label="Fecha" type="date" dense />
              </div>
            </th>
            <th style="border: 1px solid">
              <div class="row">
                <span class="custum">ANTECEDENTES GINECOLOGICOS: G: P: C: V: A:</span>
                <q-input label="Tipo antecedente" dense class="q-py-none q-my-none col-3" />
              </div>
            </th>
          </tr>
          <tr>
            <td>
              <p>
                <strong
                  >TELEFONO 1:
                  <q-input
                    label="Tel. #1"
                    dense
                    class="q-py-none q-my-non"
                    style="min-width: 300px; display: inline-block"
                  />
                </strong>
              </p>
              <p>
                <strong
                  >TELEFONO 2:
                  <q-input
                    label="Tel. #2"
                    dense
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
    </q-card-section>
    <q-separator />

    <q-card-actions align="around" class="row">
      <ContainerFirma
        @reciFirma="callBackFirma"
        firmador="Joan Sebastian Quintero Nieto"
        quien_firma="FIRMA TUTOR O FAMILIAR"
        class="col-3"
      />
      <ContainerFirma
        @reciFirma="callBackFirma"
        firmador="Fernanda Quintero"
        quien_firma="FIRMA PACIENTE"
        class="col-3"
      />
    </q-card-actions>
  </q-card>
</template>
<script setup>
import { ref, reactive, defineAsyncComponent } from "vue";

const ContainerFirma = defineAsyncComponent(() => import("../../components/global/containerFirma.vue"));
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
