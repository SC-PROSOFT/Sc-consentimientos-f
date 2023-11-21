<template>
  <q-card class="q-mx-auto format q-mb-lg" style="overflow: auto">
    <q-card-section>
      <q-form @submit="validarDatos">
        <div class="text-center">
          <q-toggle
            v-model="reg.opcion_lab003"
            color="primary"
            keep-color
            false-value="REVOCAR"
            true-value="AUTORIZAR"
            unchecked-icon="block"
            checked-icon="check_circle"
            label="¿Autorizar o revocar este consentimiento?"
          />
          <p :class="reg.opcion_lab003 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
            <q-chip
              :color="reg.opcion_lab003 == 'AUTORIZAR' ? 'green' : 'red'"
              class="text-white"
              v-if="reg.opcion_lab003"
            >
              {{ reg.opcion_lab003 }}
            </q-chip>
          </p>
        </div>
        <DatosFormat :datos="datos" @datos="(data) => (datos.servicio = data)" />
        <div class="row justify-center border-format q-my-sm">
          <q-checkbox
            left-label
            v-model="reg.reso_mag.proces"
            label="PROCEDIMIENTO QUE REQUIERE MEDIO DE CONTRASTE (GADOLINIO)"
          />
        </div>
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
            e implicaciones del acto asistencia
          </p>
        </div>
        <div class="border-format q-my-sm">
          <div class="text-center text-subtitle1 text-bold q-py-xs">INFORMACIÓN DEL PROCEDIMIENTO</div>
          <p class="row text-justify">
            La resonancia magnética nuclear (RMN) es una prueba diagnóstica con la que se obtienen imágenes
            del interior del cuerpo. Se basa en el procesamiento de ondas de radio que pasan por el paciente,
            el cual es sometido a un potente campo magnético. A diferencia del TAC o de las radiografías
            simples, la RMN no usa radiaciones ionizantes (rayos X). Permite obtener imágenes muy detalladas
            del cuerpo en dos y tres dimensiones y desde cualquier perspectiva (transversal, sagital y
            coronal). Puede realizarse con medio de contraste o si medio de contraste
          </p>
        </div>
        <div class="border-format q-my-sm">
          <div class="text-center text-subtitle1 text-bold q-py-xs">BENEFICIOS</div>
          <p class="row text-justify">
            ecografía o el TAC. También se utiliza cuando están contraindicadas otras pruebas de imágenes como
            por ejemplo en el caso de alergia al contraste iodado que se usa en el TAC. La RMN realizada
            después de inyectar un medio de contraste con gadolinio en una vena facilita al médico la
            valoración de inflamaciones, tumores y vasos sanguíneos.
          </p>
        </div>
        <div class="border-format q-my-sm">
          <div class="text-center text-subtitle1 text-bold q-py-xs">RIESGOS</div>
          <p class="row text-justify">
            La RMN es una prueba muy segura. El campo magnético que se aplica no tiene ningún efecto
            perjudicial sobre el organismo. El campo magnético utilizado en la RMN puede provocar que un
            dispositivo implantado se desplace, se sobrecaliente o funcione de forma inadecuada. Estos
            dispositivos también pueden distorsionar las imágenes de la RMN. A veces se puede sentir algo frío
            con la introducción del contraste; afortunadamente las reacciones alérgicas al contraste usado
            para la RMN son muy raras. Puede resultar algo molesto el permanecer mucho tiempo quieto en la
            mesa y puede llegar a sentir algo de claustrofobia. Los medios de contraste con gadolinio pueden
            provocar dolor de cabeza, náuseas, dolor y sensación de frío en el lugar de la inyección,
            distorsión del gusto y mareos. Con estos contrastes, es mucho menos probable que se produzcan
            reacciones graves que con los medios de contraste yodados utilizados en TAC.
          </p>
        </div>
        <div class="row justify-center border-format q-mt-sm text-bold">
          <div>ENCUESTA DE SEGURIDAD (RESONANCIA MAGNÉTICA NUCLEAR)</div>
        </div>
        <div class="row border-format">
          <div>Por favor señale si cuenta con alguno de los dispositivos descritos a continuación:</div>
        </div>
        <div class="row">
          <div class="col-3">
            <div class="row items-center">
              <q-checkbox
                left-label
                class="col-12 border-format"
                v-model="reg.reso_mag.marcapasos"
                label="Marcapasos"
              />
              <q-checkbox
                left-label
                class="col-12 border-format"
                v-model="reg.reso_mag.electrodos"
                label="Electrodos"
              />
              <q-checkbox
                left-label
                class="col-12 border-format"
                v-model="reg.reso_mag.audifonos"
                label="Audifonos"
              />
              <q-checkbox
                left-label
                class="col-12 border-format"
                v-model="reg.reso_mag.stents"
                label="Stents"
              />
            </div>
          </div>
          <div class="col-3">
            <div class="row items-center">
              <q-checkbox
                left-label
                class="col-12 border-format"
                v-model="reg.reso_mag.neuroestimuladores"
                label="Neuroestimuladores"
              />
              <q-checkbox
                left-label
                class="col-12 border-format"
                v-model="reg.reso_mag.valvula_derivacion"
                label="Válvula de derivación"
              />
              <q-checkbox
                left-label
                class="col-12 border-format"
                v-model="reg.reso_mag.esquirlas_metalicas"
                label="Esquirlas metálicas"
              />
              <q-checkbox
                left-label
                class="col-12 border-format"
                v-model="reg.reso_mag.protesis_auriculares"
                label="Prótesis auriculares"
              />
            </div>
          </div>
          <div class="col-3">
            <div class="row items-center">
              <q-checkbox
                left-label
                class="col-12 border-format"
                v-model="reg.reso_mag.protesis_dental"
                label="Prótesis dentales"
              />
              <q-checkbox
                left-label
                class="col-12 border-format"
                v-model="reg.reso_mag.suturas_metalicas"
                label="Suturas metálicas"
              />
              <q-checkbox
                left-label
                class="col-12 border-format"
                v-model="reg.reso_mag.bomba_insulina"
                label="Bomba de insulina"
              />
              <q-checkbox
                left-label
                class="col-12 border-format"
                v-model="reg.reso_mag.implantes_auditivos"
                label="Implantes auditivos"
              />
            </div>
          </div>
          <div class="col-3">
            <div class="row items-center">
              <q-checkbox
                left-label
                class="col-12 border-format"
                v-model="reg.reso_mag.disp_intrauterino"
                label="Dispositivo Intrauterino"
              />
              <q-checkbox
                left-label
                class="col-12 border-format"
                v-model="reg.reso_mag.barras_harrington"
                label="Barras de Harrington"
              />
              <q-checkbox
                left-label
                class="col-12 border-format"
                v-model="reg.reso_mag.clips_quirurgicos"
                label="Clips o ganchos quirúrgicos"
              />
              <q-checkbox
                left-label
                class="col-12 border-format"
                v-model="reg.reso_mag.protesis_cadera"
                label="Prótesis de Cadera o Rodilla"
              />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-6 border-format" align="center">
            <q-checkbox
              left-label
              class="col-12"
              v-model="reg.reso_mag.desfibrilador"
              label="Desfibrilador implantable"
            />
          </div>
          <div class="col-6 border-format" align="center">
            <q-checkbox
              left-label
              class="col-12"
              v-model="reg.reso_mag.fractura_tratadas"
              label="Fracturas tratadas con clavos o alambres"
            />
          </div>
        </div>
        <div class="border-format">
          Si usted tiene alguno de estos dispositivos implantados, deberá informar a su médico tratante, quien
          determinará si es seguro realizar esta prueba de imagen.
        </div>
        <div class="border-format">
          Recuerde que el uso de la resonancia esta totalmente contraindicado si Ud. tiene: Desfibrilador
          interno (implantado), Implante coclear (del oído), Clips que se utilizan en los aneurismas
          cerebrales
        </div>
        <div class="border-format">
          Recuerde no usar ningún tipo de joyas incluyendo anillos, piercings, aretes, collares o relojes. Se
          le pedirá que se quite la ropa que tiene ganchos, botones, cierres u otros objetos metálicos para no
          interferir con el procedimiento
        </div>
        <div class="border-format">
          Finalmente, no olvide informarnos si se encuentra en proceso de gestación o tiene posibilidades de
          estarlo, si sufre de claustrofobia o si pesa mas de 130 Kg
        </div>
        <div class="row justify-center q-my-sm">
          <div class="col-8 border-format" align="center">
            ENCUESTA DE SEGURIDAD (PROCEDIMIENTO CON CONTRASTE)
          </div>
          <div class="col-2 border-format" align="center">APLICA</div>
          <div class="col-2 border-format" align="center">NO APLICA</div>
        </div>
        <div class="row">
          <div class="col-5 border-format">
            ¿Le han practicado exámenes con inyección de contraste de Gadolinio? ¿Otras resonancias?
            Especifique
          </div>
          <div class="col-1 border-format">
            <q-checkbox left-label class="col-12" v-model="reg.proces" />
          </div>
          <TextArea_ class="col-6 border-format" v-model="reg.especifique_1" :field="form.especifique_1" />
        </div>
        <div class="row">
          <div class="col-5 border-format">
            ¿Presentó alguna reacción adversa al medio de contraste (Gadolinio)? Especifique
          </div>
          <div class="col-1 border-format">
            <q-checkbox left-label class="col-12" v-model="reg.proces" />
          </div>
          <TextArea_ class="col-6 border-format" v-model="reg.especifique_1" :field="form.especifique_1" />
        </div>
        <div class="row">
          <div class="col-5 border-format">¿Presenta enfermedades del corazón? Especifique</div>
          <div class="col-1 border-format">
            <q-checkbox left-label class="col-12" v-model="reg.proces" />
          </div>
          <TextArea_ class="col-6 border-format" v-model="reg.especifique_1" :field="form.especifique_1" />
        </div>
        <div class="row">
          <div class="col-5 border-format">¿Presenta enfermedades de los riñones? Especifique</div>
          <div class="col-1 border-format">
            <q-checkbox left-label class="col-12" v-model="reg.proces" />
          </div>
          <TextArea_ class="col-6 border-format" v-model="reg.especifique_1" :field="form.especifique_1" />
        </div>
        <div class="row">
          <div class="col-5 border-format">¿Presenta enfermedades del hígado? Especifique</div>
          <div class="col-1 border-format">
            <q-checkbox left-label class="col-12" v-model="reg.proces" />
          </div>
          <TextArea_ class="col-6 border-format" v-model="reg.especifique_1" :field="form.especifique_1" />
        </div>
        <div class="row">
          <div class="col-5 border-format">¿Padece de asma? Especifique</div>
          <div class="col-1 border-format">
            <q-checkbox left-label class="col-12" v-model="reg.proces" />
          </div>
          <TextArea_ class="col-6 border-format" v-model="reg.especifique_1" :field="form.especifique_1" />
        </div>
        <div class="row">
          <div class="col-5 border-format">
            ¿Presenta algún tipo de alergia? (a medicamentos, alimentos, otras sustancias) Especifique
          </div>
          <div class="col-1 border-format">
            <q-checkbox left-label class="col-12" v-model="reg.proces" />
          </div>
          <TextArea_ class="col-6 border-format" v-model="reg.especifique_1" :field="form.especifique_1" />
        </div>
        <div class="row">
          <div class="col-5 border-format">¿Padece de diabetes? Especifique</div>
          <div class="col-1 border-format">
            <q-checkbox left-label class="col-12" v-model="reg.proces" />
          </div>
          <TextArea_ class="col-6 border-format" v-model="reg.especifique_1" :field="form.especifique_1" />
        </div>
        <div class="row">
          <div class="col-5 border-format">¿Padece de otro tipo de enfermedad? Especifique</div>
          <div class="col-1 border-format">
            <q-checkbox left-label class="col-12" v-model="reg.proces" />
          </div>
          <TextArea_ class="col-6 border-format" v-model="reg.especifique_1" :field="form.especifique_1" />
        </div>
        <div class="row">
          <div class="col-5 border-format">¿Consume medicamentos? Especifique</div>
          <div class="col-1 border-format">
            <q-checkbox left-label class="col-12" v-model="reg.proces" />
          </div>
          <TextArea_ class="col-6 border-format" v-model="reg.especifique_1" :field="form.especifique_1" />
        </div>
        <div class="border-format">
          Recuerde que si su examen requiere la administración de medio de contraste endovenoso, el auxiliar
          de enfermería procederá a canalizarle una vena periférica (venoclisis) para administrar el medio de
          contraste. El procedimiento de venoclisis es seguro, sin embargo, Ud. puede presentar: ardor,
          malestar, sangrado escaso, hematoma y flebitis
        </div>
        <div class="border-format q-my-sm" v-if="reg.opcion_lab003 == 'AUTORIZAR'">
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
            procedimiento de Resonancia Magnética Nuclear, los riesgos y beneficios, declaro que la
            información ha sido clara, que se me han respondido las inquietudes y que autorizo la toma del
            procedimiento teniendo en cuenta que esta autorización puede ser revocable en cualquier momento.
          </p>
        </div>
        <div class="border-format q-my-sm" v-if="reg.opcion_lab003 == 'REVOCAR'">
          <div class="text-center text-subtitle1 text-bold q-py-xs">
            REVOCACIÓN DEL CONSENTIMIENTO INFORMADO
          </div>
          <p>
            Yo <InputF_ v-model="getPaci.descrip" width="300" />, identificada (o) con el documento de
            identidad número <InputF_ v-model="getPaci.cod" />, después de haber sido informado (a) sobre el
            procedimiento de Resonancia Magnética Nuclear sus riesgos y beneficios y adicionalmente, los
            riesgos de no realizármelo, declaro que la información ha sido clara, que se me han respondido las
            inquietudes y que autorizo de forma libre y consiente, revoco mi consentimiento para continuar con
            la toma del procedimiento en mención
          </p>
        </div>
      </q-form>
    </q-card-section>
    <q-card-actions>
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
          @reciFirma="callBackFirmaAcomp"
          :registro_profe="getAcomp.cod"
          quien_firma="TESTIGO"
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
          :disable="reg.opcion_lab003 ? false : true"
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
import { impresionHC030, impresion, generarArchivo } from "@/impresiones";
import { ref, defineAsyncComponent, onMounted, watch } from "vue";
import { utilsFormat, calcEdad } from "@/formatos/utils";
import { useRouter } from "vue-router";
import dayjs from "dayjs";

const ContainerFirma = defineAsyncComponent(() => import("@/components/global/containerFirma.vue"));
const DatosFormat = defineAsyncComponent(() => import("@/components/global/DatosFormat.vue"));
const router = useRouter();

const { getDll$, _getFirma$, _getHuella$, guardarFile$, enviarCorreo$, getEncabezado } = useApiContabilidad();
const { getPaci, getAcomp, getHc, getProf, getEmpresa, getSesion } = useModuleFormatos();
const { CON851P } = useModuleCon851p();
const { CON851 } = useModuleCon851();

const firma_recibida_acomp = ref("");
const firma_recibida = ref("");
const huella_paci = ref(null);
const firma_prof = ref(null);

const datos = {
  tipo_id: getPaci.tipo_id,
  active_cups: true,
  servicio: "",
};

const form = ref({
  especifique_1: {
    id: "especifique_1",
    label: "",
    placeholder: "",
    counter: false,
    maxlength: "60",
    required: true,
    campo_abierto: true,
  },
});

const reg = ref({
  reso_mag: {
    protesis_auriculares: false,
    implantes_auditivos: false,
    esquirlas_metalicas: false,
    neuroestimuladores: false,
    valvula_derivacion: false,
    suturas_metalicas: false,
    disp_intrauterino: false,
    barras_harrington: false,
    clips_quirurgicos: false,
    fractura_tratadas: false,
    protesis_dental: false,
    protesis_cadera: false,
    bomba_insulina: false,
    desfibrilador: false,
    marcapasos: false,
    electrodos: false,
    audifonos: false,
    proces: false,
    stents: false,
  },

  proce_cont: {
    p_1: "",
    p_2: "",
    p_3: "",
    p_4: "",
    p_5: "",
    p_6: "",
    p_7: "",
    p_8: "",
    p_9: "",
    p_10: "",
  },

  //extras
  opcion_lab003: "",
  fecha_act: "",
  edad: "",
});

onMounted(() => {
  reg.value.fecha_act = dayjs(getEmpresa.fecha_act).format("YYYY-MM-DD");
  reg.value.edad = calcEdad(getPaci.nacim);
});

const validarDatos = () => {};

const callBackFirma = (data_firma) => {
  data_firma && (firma_recibida.value = data_firma.slice(22));
};

const callBackFirmaAcomp = (data_firma) => {
  data_firma && (firma_recibida_acomp.value = data_firma.slice(22));
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
