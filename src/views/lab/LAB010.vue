<template>
  <q-card class="q-mx-auto format q-mb-lg" style="overflow: auto">
    <q-card-section>
      <q-form @submit="validarDatos">
        <div class="text-center">
          <q-toggle
            v-model="reg.opcion_lab010"
            color="primary"
            keep-color
            false-value="REVOCAR"
            true-value="AUTORIZAR"
            unchecked-icon="block"
            checked-icon="check_circle"
            label="¿Autorizar o revocar este consentimiento?"
          />
          <p :class="reg.opcion_lab010 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
            <q-chip :color="reg.opcion_lab010 == 'AUTORIZAR' ? 'green' : 'red'" class="text-white" v-if="reg.opcion_lab010">
              {{ reg.opcion_lab010 }}
            </q-chip>
          </p>
        </div>
        <DatosFormat :datos="datos" @datos="(data) => (reg.servicio = data)" />
        <div class="row q-mt-md q-mb-md" style="width: 100%">
          <div class="text-center" style="border: 1px solid #ccc; width: 80%">
            <p style="font-weight: bold; margin-top: 10px">PROCEDIMIENTO QUE REQUIERE MEDIO DE CONTRASTE (IODADO)</p>
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 20%">
            <q-radio color="primary" left-label v-model="reg.iodado" val="S" label="SI" />
            <q-radio color="primary" left-label v-model="reg.iodado" val="N" label="NO" />
            <!-- <q-checkbox
              class="q-pt-sm"
              style="margin-top: -5px"
              left-label
              v-model="reg.iodado"
              :label="reg.iodado == false ? 'NO' : 'SI'"
              true-value="S"
              false-value="N"
            /> -->
          </div>
        </div>
        <div class="border-format q-my-sm">
          <div class="text-center text-subtitle1 text-bold q-py-xs">NORMATIVIDAD VIGENTE</div>
          <p class="row text-justify">
            La Ley 23 de 1981 al referirse a las relaciones médico – paciente, en los artículos 14, 15 y 18, advierte la necesidad del consentimiento
            para realizar los diferentes tratamientos medico quirúrgicos que se requieran. Para la resolución 3100 de 2019 el Consentimiento informado
            es la aceptación libre, voluntaria y consciente de un paciente o usuario, manifestada en el pleno uso de sus facultades, para que tenga a
            lugar un acto asistencial. Para que el consentimiento se considere informado, el paciente o usuario deberá entender la naturaleza de la
            decisión a consentir tras recibir información que le haga consciente de los beneficios, riesgos, alternativas e implicaciones del acto
            asistencial.
          </p>
        </div>
        <div class="border-format q-my-sm">
          <div class="text-center text-subtitle1 text-bold q-py-xs">INFORMACIÓN DEL PROCEDIMIENTO</div>
          <p class="row text-justify">
            La Tomografía Axial Computarizada TAC es un examen no invasivo que utiliza un equipo de rayos X especial para tomar imágenes de las
            estructuras internas del cuerpo. Los rayos X utilizados en las exploraciones por TAC usualmente no tienen efectos secundarios y no dejan
            radiación en el cuerpo de un paciente. Es posible que tenga que tomar el material de contraste alrededor de una hora antes de que se
            realice la tomografía computarizada; se necesita este tiempo para que el líquido recubra el estómago y los intestinos. También se puede
            administrar el medio de contraste vía intravenosa.
          </p>
        </div>
        <div class="border-format q-my-sm">
          <div class="text-center text-subtitle1 q-py-xs"><ins class="text-bold">BENEFICIOS</ins></div>
          <p class="row text-justify">
            Las tomografías permiten diagnosticar trastornos musculares y óseos. Precisar la ubicación de un tumor, una infección o un coágulo
            sanguíneo. Guiar procedimientos, como cirugías, biopsias y radioterapia Detectar y controlar enfermedades y afecciones. Controlar la
            efectividad de determinados tratamientos y detectar lesiones internas.
          </p>
          <p class="row text-justify">
            Las tomografías computarizadas -TC- con mejores que los rayos X convencionales para exámenes de muestra de tejido óseo, blando y vasos
            sanguíneos. El tomógrafo toma imágenes o “cortes” que muestran sólo unas capas del tejido del cuerpo a la vez. Al tomar imágenes de esta
            manera los profesionales de la salud pueden ver y encontrar mejor cualquier problema en su organismo. Se podrá utilizar un medio de
            contraste con el fin de visualizar mejor las imágenes en ciertas partes del cuerpo.
          </p>
        </div>
        <div class="border-format q-my-sm">
          <div class="text-center text-subtitle1 text-bold q-py-xs">RIESGOS</div>
          <p class="row text-justify">
            Los riesgos son los derivados de la utilización de radiación ionizante y del empleo de contrastes iodados. La dosis de una TC depende de
            las características físicas del paciente y de la extensión de la parte del cuerpo a estudiar, no se ha demostrado que las bajas dosis de
            radiación usadas causen daño a largo plazo. En relación al uso de medio de contraste yodado, las reacciones adversas que pueden aparecer
            son entre moderadas a graves, siendo estas últimas muy poco comunes. Las reacciones incluyen: náusea y vómito, dolor de cabeza, picazón,
            calores súbitos, irritación de la piel o urticaria, sibilancia , ritmos cardíacos anormales, presión sanguínea alta o baja, falta de
            aliento o dificultad para respirar, inflamación de la vía aérea, convulsiones y paro cardiorrespiratorio.
          </p>
        </div>
        <div class="border-format q-my-sm">
          <div class="text-center text-subtitle1 text-bold q-py-xs">RECOMENDACIONES DE SEGURIDAD (TOMOGRAFÍA AXIAL COMPUTARIZADA)</div>
          <p class="row text-justify">
            Recuerde que el uso de la Tomografía Axial computarizada TAC esta contraindicada en mujeres gestantes y en personas que han presentado
            reacciones alérgicas a medios de contraste yodados. Recuerde informarnos si tiene posibilidades de estar en proceso de gestación.
          </p>
          <p class="row text-justify">
            Algunas condiciones incrementan el riesgo de una reacción alérgica o adversa a los materiales de contraste yodados. Informe si Ud. tiene
            historial de asma, drepanocitosis, policitemia y mieloma, si usa medicamentos como metoprolol, carvedilol, propanolol.
          </p>
          <p class="row text-justify">
            Recuerde no usar ningún tipo de joyas incluyendo anillos, piercings, aretes, collares o relojes. Se le pedirá que se quite la ropa que
            tiene ganchos, botones, cierres u otros objetos metálicos para no interferir con el procedimiento.
          </p>
          <p class="row text-justify">infórmenos si sufre de claustrofobia o si pesa mas de 120 Kg.</p>
        </div>
        <div class="row q-mt-md q-mb-md" style="width: 100%">
          <div class="text-center" style="border: 1px solid #ccc; width: 70%">
            <p style="font-weight: bold; margin-top: 10px">ENCUESTA DE SEGURIDAD (PROCEDIMIENTO CON CONTRASTE)</p>
          </div>

          <div class="text-center" style="border: 1px solid #ccc; width: 30%">
            <q-radio color="primary" left-label v-model="reg.contraste" val="S" label="SI" />
            <q-radio color="primary" left-label v-model="reg.contraste" val="N" label="NO" />
            <!-- <q-checkbox
              class="q-pt-sm"
              style="margin-top: -5px"
              left-label
              v-model="reg.contraste"
              :label="reg.contraste == false ? 'NO' : 'SI'"
              true-value="S"
              false-value="N"
            /> -->
          </div>
          <div v-if="reg.contraste == 'S'" class="row q-mt-md q-mb-md" style="width: 100%">
            <div class="text-justify" style="border: 1px solid #ccc; width: 40%">
              <p class="q-ml-sm q-mt-sm q-mr-sm">¿Le han practicado exámenes con inyección de medio de contraste yodado?, ¿Otros TAC? Especifique</p>
            </div>
            <div class="text-center" style="border: 1px solid #ccc; width: 18%">
              <q-radio color="primary" left-label v-model="reg.proce_cont.check.p_1" val="S" label="SI" />
              <q-radio color="primary" left-label v-model="reg.proce_cont.check.p_1" val="N" label="NO" />
              <!-- <q-checkbox
                class="q-pt-md"
                style="margin-top: -5px"
                left-label
                v-model="reg.proce_cont.check.p_1"
                :label="reg.proce_cont.check.p_1 == 'N' ? 'NO' : 'SI'"
                true-value="S"
                false-value="N"
              /> -->
            </div>
            <div class="text-center" style="border: 1px solid #ccc; width: 42%">
              <div class="q-mt-lg">
                <Input_ v-show="reg.proce_cont.check.p_1 != 'N'" v-model="reg.proce_cont.especifique_1" :field="form.especifique_1" />
              </div>
            </div>
            <div class="text-justify" style="border: 1px solid #ccc; width: 40%">
              <p class="q-ml-sm q-mt-sm q-mr-sm">¿Presentó alguna reacción adversa al medio de contraste (Yodado)? Especifique</p>
            </div>
            <div class="text-center" style="border: 1px solid #ccc; width: 18%">
              <q-radio color="primary" left-label v-model="reg.proce_cont.check.p_2" val="S" label="SI" />
              <q-radio color="primary" left-label v-model="reg.proce_cont.check.p_2" val="N" label="NO" />
              <!-- <q-checkbox
                class="q-pt-md"
                style="margin-top: -5px"
                left-label
                v-model="reg.proce_cont.check.p_2"
                :label="reg.proce_cont.check.p_2 == 'N' ? 'NO' : 'SI'"
                true-value="S"
                false-value="N"
              /> -->
            </div>
            <div class="text-center" style="border: 1px solid #ccc; width: 42%">
              <div class="q-mt-lg">
                <Input_ v-show="reg.proce_cont.check.p_2 != 'N'" v-model="reg.proce_cont.especifique_2" :field="form.especifique_2" />
              </div>
            </div>
            <div class="text-justify" style="border: 1px solid #ccc; width: 40%">
              <p class="q-ml-sm q-mt-sm q-mr-sm">¿Presenta enfermedades del corazón? Especifique</p>
            </div>
            <div class="text-center" style="border: 1px solid #ccc; width: 18%">
              <q-radio color="primary" left-label v-model="reg.proce_cont.check.p_3" val="S" label="SI" />
              <q-radio color="primary" left-label v-model="reg.proce_cont.check.p_3" val="N" label="NO" />
              <!-- <q-checkbox
                class="q-pt-sm"
                style="margin-top: -5px"
                left-label
                v-model="reg.proce_cont.check.p_3"
                :label="reg.proce_cont.check.p_3 == 'N' ? 'NO' : 'SI'"
                true-value="S"
                false-value="N"
              /> -->
            </div>
            <div class="text-center" style="border: 1px solid #ccc; width: 42%">
              <div class="q-mt-lg">
                <Input_ v-show="reg.proce_cont.check.p_3 != 'N'" v-model="reg.proce_cont.especifique_3" :field="form.especifique_3" />
              </div>
            </div>
            <div class="text-justify" style="border: 1px solid #ccc; width: 40%">
              <p class="q-ml-sm q-mt-sm q-mr-sm">¿Presenta enfermedades de los riñones? Especifique</p>
            </div>
            <div class="text-center" style="border: 1px solid #ccc; width: 18%">
              <q-radio color="primary" left-label v-model="reg.proce_cont.check.p_4" val="S" label="SI" />
              <q-radio color="primary" left-label v-model="reg.proce_cont.check.p_4" val="N" label="NO" />
              <!-- <q-checkbox
                class="q-pt-sm"
                style="margin-top: -5px"
                left-label
                v-model="reg.proce_cont.check.p_4"
                :label="reg.proce_cont.check.p_4 == 'N' ? 'NO' : 'SI'"
                true-value="S"
                false-value="N"
              /> -->
            </div>
            <div class="text-center" style="border: 1px solid #ccc; width: 42%">
              <div class="q-mt-lg">
                <Input_ v-show="reg.proce_cont.check.p_4 != 'N'" v-model="reg.proce_cont.especifique_4" :field="form.especifique_4" />
              </div>
            </div>
            <div class="text-justify" style="border: 1px solid #ccc; width: 40%">
              <p class="q-ml-sm q-mt-sm q-mr-sm">¿Presenta enfermedades del hígado? Especifique</p>
            </div>
            <div class="text-center" style="border: 1px solid #ccc; width: 18%">
              <q-radio color="primary" left-label v-model="reg.proce_cont.check.p_5" val="S" label="SI" />
              <q-radio color="primary" left-label v-model="reg.proce_cont.check.p_5" val="N" label="NO" />
              <!-- <q-checkbox
                class="q-pt-sm"
                style="margin-top: -5px"
                left-label
                v-model="reg.proce_cont.check.p_5"
                :label="reg.proce_cont.check.p_5 == 'N' ? 'NO' : 'SI'"
                true-value="S"
                false-value="N"
              /> -->
            </div>
            <div class="text-center" style="border: 1px solid #ccc; width: 42%">
              <div class="q-mt-lg">
                <Input_ v-show="reg.proce_cont.check.p_5 != 'N'" v-model="reg.proce_cont.especifique_5" :field="form.especifique_5" />
              </div>
            </div>
            <div class="text-justify" style="border: 1px solid #ccc; width: 40%">
              <p class="q-ml-sm q-mt-sm q-mr-sm">¿Padece de asma? Especifique</p>
            </div>
            <div class="text-center" style="border: 1px solid #ccc; width: 18%">
              <q-radio color="primary" left-label v-model="reg.proce_cont.check.p_6" val="S" label="SI" />
              <q-radio color="primary" left-label v-model="reg.proce_cont.check.p_6" val="N" label="NO" />
              <!-- <q-checkbox
                class="q-pt-sm"
                style="margin-top: -5px"
                left-label
                v-model="reg.proce_cont.check.p_6"
                :label="reg.proce_cont.check.p_6 == 'N' ? 'NO' : 'SI'"
                true-value="S"
                false-value="N"
              /> -->
            </div>
            <div class="text-center" style="border: 1px solid #ccc; width: 42%">
              <div class="q-mt-lg">
                <Input_ v-show="reg.proce_cont.check.p_6 != 'N'" v-model="reg.proce_cont.especifique_6" :field="form.especifique_6" />
              </div>
            </div>
            <div class="text-justify" style="border: 1px solid #ccc; width: 40%">
              <p class="q-ml-sm q-mt-sm q-mr-sm">¿Presenta algún tipo de alergia? (a medicamentos, alimentos, otras sustancias) Especifique</p>
            </div>
            <div class="text-center" style="border: 1px solid #ccc; width: 18%">
              <q-radio color="primary" left-label v-model="reg.proce_cont.check.p_7" val="S" label="SI" />
              <q-radio color="primary" left-label v-model="reg.proce_cont.check.p_7" val="N" label="NO" />
              <!-- <q-checkbox
                class="q-pt-md"
                style="margin-top: -5px"
                left-label
                v-model="reg.proce_cont.check.p_7"
                :label="reg.proce_cont.check.p_7 == 'N' ? 'NO' : 'SI'"
                true-value="S"
                false-value="N"
              /> -->
            </div>
            <div class="text-center" style="border: 1px solid #ccc; width: 42%">
              <div class="q-mt-lg">
                <Input_ v-show="reg.proce_cont.check.p_7 != 'N'" v-model="reg.proce_cont.especifique_7" :field="form.especifique_7" />
              </div>
            </div>
            <div class="text-justify" style="border: 1px solid #ccc; width: 40%">
              <p class="q-ml-sm q-mt-sm q-mr-sm">¿Padece de diabetes? Especifique</p>
            </div>
            <div class="text-center" style="border: 1px solid #ccc; width: 18%">
              <q-radio color="primary" left-label v-model="reg.proce_cont.check.p_8" val="S" label="SI" />
              <q-radio color="primary" left-label v-model="reg.proce_cont.check.p_8" val="N" label="NO" />
              <!-- <q-checkbox
                class="q-pt-sm"
                style="margin-top: -5px"
                left-label
                v-model="reg.proce_cont.check.p_8"
                :label="reg.proce_cont.check.p_8 == 'N' ? 'NO' : 'SI'"
                true-value="S"
                false-value="N"
              /> -->
            </div>
            <div class="text-center" style="border: 1px solid #ccc; width: 42%">
              <div class="q-mt-lg">
                <Input_ v-show="reg.proce_cont.check.p_8 != 'N'" v-model="reg.proce_cont.especifique_8" :field="form.especifique_8" />
              </div>
            </div>
            <div class="text-justify" style="border: 1px solid #ccc; width: 40%">
              <p class="q-ml-sm q-mt-sm q-mr-sm">¿Padece de otro tipo de enfermedad? Especifique</p>
            </div>
            <div class="text-center" style="border: 1px solid #ccc; width: 18%">
              <q-radio color="primary" left-label v-model="reg.proce_cont.check.p_9" val="S" label="SI" />
              <q-radio color="primary" left-label v-model="reg.proce_cont.check.p_9" val="N" label="NO" />
              <!-- <q-checkbox
                class="q-pt-sm"
                style="margin-top: -5px"
                left-label
                v-model="reg.proce_cont.check.p_9"
                :label="reg.proce_cont.check.p_9 == 'N' ? 'NO' : 'SI'"
                true-value="S"
                false-value="N"
              /> -->
            </div>
            <div class="text-center" style="border: 1px solid #ccc; width: 42%">
              <div class="q-mt-lg">
                <Input_ v-show="reg.proce_cont.check.p_9 != 'N'" v-model="reg.proce_cont.especifique_9" :field="form.especifique_9" />
              </div>
            </div>
            <div class="text-justify" style="border: 1px solid #ccc; width: 40%">
              <p class="q-ml-sm q-mt-sm q-mr-sm">¿Consume medicamentos? Especifique</p>
            </div>
            <div class="text-center" style="border: 1px solid #ccc; width: 18%">
              <q-radio color="primary" left-label v-model="reg.proce_cont.check.p_10" val="S" label="SI" />
              <q-radio color="primary" left-label v-model="reg.proce_cont.check.p_10" val="N" label="NO" />
              <!-- <q-checkbox
                class="q-pt-sm"
                style="margin-top: -5px"
                left-label
                v-model="reg.proce_cont.check.p_10"
                :label="reg.proce_cont.check.p_10 == 'N' ? 'NO' : 'SI'"
                true-value="S"
                false-value="N"
              /> -->
            </div>
            <div class="text-center" style="border: 1px solid #ccc; width: 42%">
              <div class="q-mt-lg">
                <Input_ v-show="reg.proce_cont.check.p_10 != 'N'" v-model="reg.proce_cont.especifique_10" :field="form.especifique_10" />
              </div>
            </div>
          </div>

          <div class="text-justify" style="border: 1px solid #ccc; width: 100%">
            <p class="q-ml-sm q-mt-sm q-mr-sm">
              Recuerde que si su examen requiere la administración de medio de contraste endovenoso, el auxiliar de enfermería procederá a canalizarle
              una vena periférica (venoclisis) para administrar el medio de contraste. El procedimiento de venoclisis es seguro, sin embargo, Ud.
              puede presentar: ardor, malestar, sangrado escaso, hematoma y flebitis. Si el medio de contraste es vía oral, Ud. deberá tomar el
              material en agua de acuerdo a las recomendaciones del personal de salud. Recuerde que una adecuada preparación permitirá que las
              imágenes tomadas sean de calidad para la valoración médica.
            </p>
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 100%">
            <p class="q-ml-sm q-mt-sm q-mr-sm" style="font-weight: bold">NOMBRE COMPLETO</p>
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 100%">
            <p class="q-ml-sm q-mt-sm q-mr-sm">{{ getPaci.descrip }}</p>
          </div>
        </div>
        <div class="border-format q-my-sm" v-if="reg.opcion_lab010 == 'AUTORIZAR'">
          <div class="text-center text-subtitle1 text-bold q-py-xs">DECLARACIÓN DEL CONSENTIMIENTO INFORMADO</div>
          <p class="row text-justify">
            Si ha comprendido la información contenida en el presente documento y acepta voluntariamente la realización del procedimiento en mención,
            proceda a firmar dejando su autorización por escrito
          </p>
          <p>
            Yo <InputF_ v-model="getPaci.descrip" width="300" />, identificada (o) con el documento de identidad número
            <InputF_ v-model="getPaci.cod" />, ddespués de haber sido informado (a) sobre el procedimiento de Tomografía Axial Computarizada, los
            riesgos y beneficios, declaro que la información ha sido clara, que se me han respondido las inquietudes y que autorizo la toma del
            procedimiento teniendo en cuenta que esta autorización puede ser revocable en cualquier momento.
          </p>
        </div>
        <div class="border-format q-my-sm" v-if="reg.opcion_lab010 == 'REVOCAR'">
          <div class="text-center text-subtitle1 text-bold q-py-xs">REVOCACIÓN DEL CONSENTIMIENTO INFORMADO</div>
          <p>
            Yo <InputF_ v-model="getPaci.descrip" width="300" />, identificada (o) con el documento de identidad número
            <InputF_ v-model="getPaci.cod" />, después de haber sido informado (a) sobre el procedimiento de Tomografía Axial Computarizada sus
            riesgos y beneficios y adicionalmente, los riesgos de no realizármelo, declaro que la información ha sido clara, que se me han respondido
            las inquietudes y que autorizo de forma libre y consiente, revoco mi consentimiento para continuar con la toma del procedimiento en
            mención.
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

      <div class="col-12 row justify-center q-my-md">
        <q-btn
          :disable="reg.opcion_lab010 ? false : true"
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
import { impresionLAB010, impresion, generarArchivo } from "@/impresiones";
import { ref, defineAsyncComponent, onMounted } from "vue";
import { utilsFormat, calcEdad } from "@/formatos/utils";
import { useRouter } from "vue-router";
import dayjs from "dayjs";
import { foco_ } from "@/setup";
const router = useRouter();
const ContainerFirma = defineAsyncComponent(() => import("@/components/global/containerFirma.vue"));
const DatosFormat = defineAsyncComponent(() => import("@/components/global/DatosFormat.vue"));

const { getDll$, _getFirma$, _getHuella$, guardarFile$, enviarCorreo$, getEncabezado, guardarArchivo$ } = useApiContabilidad();
const { getPaci, getAcomp, getTestigo, getProf, getEmpresa, getSesion } = useModuleFormatos();
const { CON851P } = useModuleCon851p();
const { CON851 } = useModuleCon851();

const firma_recibida_acomp = ref("");
const firma_recibida_test = ref("");
const firma_recibida = ref("");
const huella_paci = ref(null);
const firma_prof = ref(null);
let datos_format = {};

const datos = {
  tipo_id: getPaci.tipo_id,
  active_cups: true,
};

const reg = ref({
  contraste: "",
  iodado: "",

  codigo_cie1: "",
  descrip_cie1: "",
  codigo_cie2: "",
  descrip_cie2: "",
  codigo_cups1: "",
  descrip_cups1: "",
  codigo_cups2: "",
  descrip_cups2: "",
  servicio: "",

  proce_cont: {
    check: {},
  },

  //extras
  llave_consen: `${getPaci.cod}00000000`,
  opcion_lab010: "",
  fecha_act: "",
  hora: dayjs().format("HH: mm"),
});

const form = ref({});

for (let i = 1; i < 11; i++) {
  reg.value.proce_cont[`especifique_${i}`] = "";
  reg.value.proce_cont.check[`p_${i}`] = "N";

  form.value[`especifique_${i}`] = {
    id: `especifique_${i}`,
    label: "",
    placeholder: "",
    counter: false,
    maxlength: "40",
    required: true,
    // disable: true,
    campo_abierto: true,
  };
}

onMounted(() => {
  reg.value.fecha_act = dayjs(getEmpresa.fecha_act).format("YYYY-MM-DD");
  reg.value.edad = calcEdad(getPaci.nacim);
  getFirmaProf();
});

const grabarConsentimiento = async () => {
  datos_format = JSON.parse(JSON.stringify(reg.value));
  console.log("datos_format ", datos_format);

  let cont = 1;
  for (const prop in datos_format.proce_cont.check) {
    if (datos_format.proce_cont.check[prop] == "N") {
      datos_format.proce_cont[`especifique_${cont}`] = "";
    }
    cont++;
  }

  let datos = {
    llave_fact: `${getSesion.suc}${getSesion.clase}${getSesion.nro_comp}`,
    estado: reg.value.opcion_lab010 == "AUTORIZAR" ? "1" : "2",
    disentimiento: "N",
    llave_consen: `${getPaci.cod}00000000`,
    oper_consen: getSesion.oper,
    cod_consen: "LAB010",
    cod_med: getProf.cod,
    id_acomp: getAcomp.cod.padStart(15, "0"),
    id_testigo: getTestigo.cod.padStart(15, "0"),
    paren_acomp: getSesion.paren_acomp,
    ...datos_format,
  };

  getDll$({ modulo: `save_consen.dll`, data: datos })
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
    await guardarFile$({ base64: firma_recibida_acomp.value, codigo: `A${llave}` });
    await guardarFile$({ base64: firma_recibida_test.value, codigo: `T${llave}` });
    await guardarFile$({ base64: firma_recibida.value, codigo: `P${llave}` });

    if (getEmpresa.envio_email == "N") {
      await imprimirConsen();
    }
    return CON851P(
      "?",
      "info",
      "¿Deseas enviar el correo del consentimientos?",
      async () => {
        const file = await imprimirConsen();
        const response_guardar = await guardarArchivo$({
          nombre: `${getSesion.suc}${getSesion.nro_comp}-${getSesion.oper}${dayjs().format("YYYYMMDDHHmm")}.pdf`,
          ruta: "D:\\CONSENTIMIENTOS",
          file,
        });
        router.back();
      },
      async () => {
        const file = await imprimirConsen();
        if (getPaci.email && !/.+@.+\..+/.test(getPaci.email.toLowerCase())) {
        }

        const response = await enviarCorreo$({
          cuerpo: `SE ADJUNTA ${getEncabezado.descrip} PARA ${getPaci.descrip} IDENTIDICADO CON ${getPaci.cod}`,
          // destino: getPaci.email.toLowerCase(),
          destino: "davidsantiagolozada@gmail.com",
          subject: getEncabezado.descrip,
          file,
        });
        const response_guardar = await guardarArchivo$({
          nombre: `${getSesion.suc}${getSesion.nro_comp}-${getSesion.oper}${dayjs().format("YYYYMMDDHHmm")}.pdf`,
          ruta: "D:\\CONSENTIMIENTOS",
          file,
        });
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

    const datos_lab010 = {
      autorizo: reg.value.opcion_lab010 == "AUTORIZAR" ? true : false,
      empresa: getEmpresa,
      testigo: getTestigo,
      paciente: getPaci,
      prof: getProf,
      acomp: getAcomp,
      paren_acomp: getSesion.paren_acomp,
      cod_consen: "LAB010",
      firmas: {
        firma_acomp: firma_recibida_acomp.value ? true : false,
        firma_test: firma_recibida_test.value ? true : false,
        firma_paci: firma_recibida.value ? true : false,
        huella_paci: huella_paci.value ? true : false,
        firma_prof: firma_prof.value ? true : false,
      },
      fecha: reg.value.fecha_act,
      llave: reg.value.llave_consen,
      P_1: datos_format.proce_cont.especifique_1,
      P_2: datos_format.proce_cont.especifique_2,
      P_3: datos_format.proce_cont.especifique_3,
      P_4: datos_format.proce_cont.especifique_4,
      P_5: datos_format.proce_cont.especifique_5,
      P_6: datos_format.proce_cont.especifique_6,
      P_7: datos_format.proce_cont.especifique_7,
      P_8: datos_format.proce_cont.especifique_8,
      P_9: datos_format.proce_cont.especifique_9,
      P_10: datos_format.proce_cont.especifique_10,
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

    const docDefinitionPrint = await utilsFormat({
      datos: firmas,
      content: impresionLAB010({
        datos: datos_lab010,
      }),
    });

    const docDefinitionFile = await utilsFormat({
      datos: firmas,
      content: impresionLAB010({
        datos: datos_lab010,
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
  if (!firma_recibida_test.value) {
    return CON851("?", "info", "No se ha realizado la firma del testigo");
  }
  if (!reg.value.iodado) {
    return CON851("?", "info", "No se ha respondido ¿PROCEDIMIENTO QUE REQUIERE MEDIO DE CONTRASTE (GADOLINIO)?");
  }
  grabarConsentimiento();
};

onMounted(() => {
  reg.value.fecha_act = dayjs(getEmpresa.fecha_act).format("YYYY-MM-DD");
  getFirmaProf();
});

const callBackFirma = (data_firma) => {
  if (getAcomp.cod) firma_recibida_acomp.value = data_firma;
  else firma_recibida.value = data_firma;
};

const callBackFirmaTest = (data_firma) => {
  data_firma && (firma_recibida_test.value = data_firma);
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
