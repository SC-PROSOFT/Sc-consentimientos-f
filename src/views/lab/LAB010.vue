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
            <q-chip
              :color="reg.opcion_lab010 == 'AUTORIZAR' ? 'green' : 'red'"
              class="text-white"
              v-if="reg.opcion_lab010"
            >
              {{ reg.opcion_lab010 }}
            </q-chip>
          </p>
        </div>
        <DatosFormat :datos="datos" @datos="(data) => (reg.servicio = data)" />
        <div class="row q-mt-md q-mb-md" style="width: 100%">
          <div class="text-center" style="border: 1px solid #ccc; width: 80%">
            <p style="font-weight: bold; margin-top: 10px">
              PROCEDIMIENTO QUE REQUIERE MEDIO DE CONTRASTE (IODADO)
            </p>
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 20%">
            <q-checkbox
              class="q-pt-sm"
              style="margin-top: -5px"
              left-label
              v-model="reg.iodado"
              :label="reg.iodado == false ? 'NO' : 'SI'"
            />
          </div>
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
            e implicaciones del acto asistencial.
          </p>
        </div>
        <div class="border-format q-my-sm">
          <div class="text-center text-subtitle1 text-bold q-py-xs">INFORMACIÓN DEL PROCEDIMIENTO</div>
          <p class="row text-justify">
            La Tomografía Axial Computarizada TAC es un examen no invasivo que utiliza un equipo de rayos X
            especial para tomar imágenes de las estructuras internas del cuerpo. Los rayos X utilizados en las
            exploraciones por TAC usualmente no tienen efectos secundarios y no dejan radiación en el cuerpo
            de un paciente. Es posible que tenga que tomar el material de contraste alrededor de una hora
            antes de que se realice la tomografía computarizada; se necesita este tiempo para que el líquido
            recubra el estómago y los intestinos. También se puede administrar el medio de contraste vía
            intravenosa.
          </p>
        </div>
        <div class="border-format q-my-sm">
          <div class="text-center text-subtitle1 q-py-xs"><ins class="text-bold">BENEFICIOS</ins></div>
          <p class="row text-justify">
            Las tomografías permiten diagnosticar trastornos musculares y óseos. Precisar la ubicación de un
            tumor, una infección o un coágulo sanguíneo. Guiar procedimientos, como cirugías, biopsias y
            radioterapia Detectar y controlar enfermedades y afecciones. Controlar la efectividad de
            determinados tratamientos y detectar lesiones internas.
          </p>
          <p class="row text-justify">
            Las tomografías computarizadas -TC- con mejores que los rayos X convencionales para exámenes de
            muestra de tejido óseo, blando y vasos sanguíneos. El tomógrafo toma imágenes o “cortes” que
            muestran sólo unas capas del tejido del cuerpo a la vez. Al tomar imágenes de esta manera los
            profesionales de la salud pueden ver y encontrar mejor cualquier problema en su organismo. Se
            podrá utilizar un medio de contraste con el fin de visualizar mejor las imágenes en ciertas partes
            del cuerpo.
          </p>
        </div>
        <div class="border-format q-my-sm">
          <div class="text-center text-subtitle1 text-bold q-py-xs">RIESGOS</div>
          <p class="row text-justify">
            Los riesgos son los derivados de la utilización de radiación ionizante y del empleo de contrastes
            iodados. La dosis de una TC depende de las características físicas del paciente y de la extensión
            de la parte del cuerpo a estudiar, no se ha demostrado que las bajas dosis de radiación usadas
            causen daño a largo plazo. En relación al uso de medio de contraste yodado, las reacciones
            adversas que pueden aparecer son entre moderadas a graves, siendo estas últimas muy poco comunes.
            Las reacciones incluyen: náusea y vómito, dolor de cabeza, picazón, calores súbitos, irritación de
            la piel o urticaria, sibilancia , ritmos cardíacos anormales, presión sanguínea alta o baja, falta
            de aliento o dificultad para respirar, inflamación de la vía aérea, convulsiones y paro
            cardiorrespiratorio.
          </p>
        </div>
        <div class="border-format q-my-sm">
          <div class="text-center text-subtitle1 text-bold q-py-xs">
            RECOMENDACIONES DE SEGURIDAD (TOMOGRAFÍA AXIAL COMPUTARIZADA)
          </div>
          <p class="row text-justify">
            Recuerde que el uso de la Tomografía Axial computarizada TAC esta contraindicada en mujeres
            gestantes y en personas que han presentado reacciones alérgicas a medios de contraste yodados.
            Recuerde informarnos si tiene posibilidades de estar en proceso de gestación.
          </p>
          <p class="row text-justify">
            Algunas condiciones incrementan el riesgo de una reacción alérgica o adversa a los materiales de
            contraste yodados. Informe si Ud. tiene historial de asma, drepanocitosis, policitemia y mieloma,
            si usa medicamentos como metoprolol, carvedilol, propanolol.
          </p>
          <p class="row text-justify">
            Recuerde no usar ningún tipo de joyas incluyendo anillos, piercings, aretes, collares o relojes.
            Se le pedirá que se quite la ropa que tiene ganchos, botones, cierres u otros objetos metálicos
            para no interferir con el procedimiento.
          </p>
          <p class="row text-justify">infórmenos si sufre de claustrofobia o si pesa mas de 120 Kg.</p>
        </div>
        <div class="row q-mt-md q-mb-md" style="width: 100%">
          <div class="text-center" style="border: 1px solid #ccc; width: 70%">
            <p style="font-weight: bold; margin-top: 10px">
              ENCUESTA DE SEGURIDAD (PROCEDIMIENTO CON CONTRASTE)
            </p>
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 30%">
            <q-checkbox
              class="q-pt-sm"
              style="margin-top: -5px"
              left-label
              v-model="reg.contraste"
              :label="reg.contraste == false ? 'NO' : 'SI'"
            />
          </div>
          <div class="text-justify" style="border: 1px solid #ccc; width: 40%">
            <p class="q-ml-sm q-mt-sm q-mr-sm">
              ¿Le han practicado exámenes con inyección de medio de contraste yodado?, ¿Otros TAC? Especifique
            </p>
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 18%">
            <q-checkbox
              class="q-pt-md"
              style="margin-top: -5px"
              left-label
              v-model="reg_checks.P_1"
              :label="reg_checks.P_1 == false ? 'NO' : 'SI'"
            />
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 42%">
            <div class="q-mt-lg">
              <Input_ v-show="reg_checks.P_1" v-model="reg.P_1" :field="form.especifique" />
            </div>
          </div>
          <div class="text-justify" style="border: 1px solid #ccc; width: 40%">
            <p class="q-ml-sm q-mt-sm q-mr-sm">
              ¿Presentó alguna reacción adversa al medio de contraste (Yodado)? Especifique
            </p>
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 18%">
            <q-checkbox
              class="q-pt-md"
              style="margin-top: -5px"
              left-label
              v-model="reg_checks.P_2"
              :label="reg_checks.P_2 == false ? 'NO' : 'SI'"
            />
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 42%">
            <div class="q-mt-lg">
              <Input_ v-show="reg_checks.P_2" v-model="reg.P_2" :field="form.especifique" />
            </div>
          </div>
          <div class="text-justify" style="border: 1px solid #ccc; width: 40%">
            <p class="q-ml-sm q-mt-sm q-mr-sm">¿Presenta enfermedades del corazón? Especifique</p>
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 18%">
            <q-checkbox
              class="q-pt-sm"
              style="margin-top: -5px"
              left-label
              v-model="reg_checks.P_3"
              :label="reg_checks.P_3 == false ? 'NO' : 'SI'"
            />
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 42%">
            <div class="q-mt-lg">
              <Input_ v-show="reg_checks.P_3" v-model="reg.P_3" :field="form.especifique" />
            </div>
          </div>
          <div class="text-justify" style="border: 1px solid #ccc; width: 40%">
            <p class="q-ml-sm q-mt-sm q-mr-sm">¿Presenta enfermedades de los riñones? Especifique</p>
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 18%">
            <q-checkbox
              class="q-pt-sm"
              style="margin-top: -5px"
              left-label
              v-model="reg_checks.P_4"
              :label="reg_checks.P_4 == false ? 'NO' : 'SI'"
            />
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 42%">
            <div class="q-mt-lg">
              <Input_ v-show="reg_checks.P_4" v-model="reg.P_4" :field="form.especifique" />
            </div>
          </div>
          <div class="text-justify" style="border: 1px solid #ccc; width: 40%">
            <p class="q-ml-sm q-mt-sm q-mr-sm">¿Presenta enfermedades del hígado? Especifique</p>
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 18%">
            <q-checkbox
              class="q-pt-sm"
              style="margin-top: -5px"
              left-label
              v-model="reg_checks.P_5"
              :label="reg_checks.P_5 == false ? 'NO' : 'SI'"
            />
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 42%">
            <div class="q-mt-lg">
              <Input_ v-show="reg_checks.P_5" v-model="reg.P_5" :field="form.especifique" />
            </div>
          </div>
          <div class="text-justify" style="border: 1px solid #ccc; width: 40%">
            <p class="q-ml-sm q-mt-sm q-mr-sm">¿Padece de asma? Especifique</p>
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 18%">
            <q-checkbox
              class="q-pt-sm"
              style="margin-top: -5px"
              left-label
              v-model="reg_checks.P_6"
              :label="reg_checks.P_6 == false ? 'NO' : 'SI'"
            />
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 42%">
            <div class="q-mt-lg">
              <Input_ v-show="reg_checks.P_6" v-model="reg.P_6" :field="form.especifique" />
            </div>
          </div>
          <div class="text-justify" style="border: 1px solid #ccc; width: 40%">
            <p class="q-ml-sm q-mt-sm q-mr-sm">
              ¿Presenta algún tipo de alergia? (a medicamentos, alimentos, otras sustancias) Especifique
            </p>
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 18%">
            <q-checkbox
              class="q-pt-md"
              style="margin-top: -5px"
              left-label
              v-model="reg_checks.P_7"
              :label="reg_checks.P_7 == false ? 'NO' : 'SI'"
            />
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 42%">
            <div class="q-mt-lg">
              <Input_ v-show="reg_checks.P_7" v-model="reg.P_7" :field="form.especifique" />
            </div>
          </div>
          <div class="text-justify" style="border: 1px solid #ccc; width: 40%">
            <p class="q-ml-sm q-mt-sm q-mr-sm">¿Padece de diabetes? Especifique</p>
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 18%">
            <q-checkbox
              class="q-pt-sm"
              style="margin-top: -5px"
              left-label
              v-model="reg_checks.P_8"
              :label="reg_checks.P_8 == false ? 'NO' : 'SI'"
            />
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 42%">
            <div class="q-mt-lg">
              <Input_ v-show="reg_checks.P_8" v-model="reg.P_8" :field="form.especifique" />
            </div>
          </div>
          <div class="text-justify" style="border: 1px solid #ccc; width: 40%">
            <p class="q-ml-sm q-mt-sm q-mr-sm">¿Padece de otro tipo de enfermedad? Especifique</p>
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 18%">
            <q-checkbox
              class="q-pt-sm"
              style="margin-top: -5px"
              left-label
              v-model="reg_checks.P_9"
              :label="reg_checks.P_9 == false ? 'NO' : 'SI'"
            />
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 42%">
            <div class="q-mt-lg">
              <Input_ v-show="reg_checks.P_9" v-model="reg.P_9" :field="form.especifique" />
            </div>
          </div>
          <div class="text-justify" style="border: 1px solid #ccc; width: 40%">
            <p class="q-ml-sm q-mt-sm q-mr-sm">¿Consume medicamentos? Especifique</p>
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 18%">
            <q-checkbox
              class="q-pt-sm"
              style="margin-top: -5px"
              left-label
              v-model="reg_checks.P_10"
              :label="reg_checks.P_10 == false ? 'NO' : 'SI'"
            />
          </div>
          <div class="text-center" style="border: 1px solid #ccc; width: 42%">
            <div class="q-mt-lg">
              <Input_ v-show="reg_checks.P_10" v-model="reg.P_10" :field="form.especifique" />
            </div>
          </div>
          <div class="text-justify" style="border: 1px solid #ccc; width: 100%">
            <p class="q-ml-sm q-mt-sm q-mr-sm">
              Recuerde que si su examen requiere la administración de medio de contraste endovenoso, el
              auxiliar de enfermería procederá a canalizarle una vena periférica (venoclisis) para administrar
              el medio de contraste. El procedimiento de venoclisis es seguro, sin embargo, Ud. puede
              presentar: ardor, malestar, sangrado escaso, hematoma y flebitis. Si el medio de contraste es
              vía oral, Ud. deberá tomar el material en agua de acuerdo a las recomendaciones del personal de
              salud. Recuerde que una adecuada preparación permitirá que las imágenes tomadas sean de calidad
              para la valoración médica.
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
          <div class="text-center text-subtitle1 text-bold q-py-xs">
            DECLARACIÓN DEL CONSENTIMIENTO INFORMADO
          </div>
          <p class="row text-justify">
            Si ha comprendido la información contenida en el presente documento y acepta voluntariamente la
            realización del procedimiento en mención, proceda a firmar dejando su autorización por escrito
          </p>
          <p>
            Yo <InputF_ v-model="getPaci.descrip" width="300" />, identificada (o) con el documento de
            identidad número <InputF_ v-model="getPaci.cod" />, ddespués de haber sido informado (a) sobre el
            procedimiento de Tomografía Axial Computarizada, los riesgos y beneficios, declaro que la
            información ha sido clara, que se me han respondido las inquietudes y que autorizo la toma del
            procedimiento teniendo en cuenta que esta autorización puede ser revocable en cualquier momento.
          </p>
        </div>
        <div class="border-format q-my-sm" v-if="reg.opcion_lab010 == 'REVOCAR'">
          <div class="text-center text-subtitle1 text-bold q-py-xs">
            REVOCACIÓN DEL CONSENTIMIENTO INFORMADO
          </div>
          <p>
            Yo <InputF_ v-model="getPaci.descrip" width="300" />, identificada (o) con el documento de
            identidad número <InputF_ v-model="getPaci.cod" />, después de haber sido informado (a) sobre el
            procedimiento de Tomografía Axial Computarizada sus riesgos y beneficios y adicionalmente, los
            riesgos de no realizármelo, declaro que la información ha sido clara, que se me han respondido las
            inquietudes y que autorizo de forma libre y consiente, revoco mi consentimiento para continuar con
            la toma del procedimiento en mención.
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
import { impresionLAB010, impresion, impresionDwld, generarArchivo } from "@/impresiones";
import { ref, defineAsyncComponent, onMounted, watch } from "vue";
import { utilsFormat, calcEdad } from "@/formatos/utils";
import { useRouter } from "vue-router";
import dayjs from "dayjs";

const ContainerFirma = defineAsyncComponent(() => import("@/components/global/containerFirma.vue"));
const DatosFormat = defineAsyncComponent(() => import("@/components/global/DatosFormat.vue"));
const router = useRouter();

const { getDll$, _getFirma$, _getHuella$, guardarFile$, enviarCorreo$, getEncabezado } = useApiContabilidad();
const { getPaci, getAcomp, getHc, getProf, getEmpresa, getSesion, getArtic, getDiag } = useModuleFormatos();
const { CON851P } = useModuleCon851p();
const { CON851 } = useModuleCon851();

const firma_recibida_test = ref("");
const firma_recibida = ref("");
const huella_paci = ref(null);
const firma_prof = ref(null);

const datos = {
  tipo_id: getPaci.tipo_id,
  active_cups: true,
};

const reg = ref({
  opcion_lab010: "",
  fecha_act: "",
  iodado: false,
  contraste: false,
  //otros_exam
  P_1: "",
  // reacc_adversa
  P_2: "",
  // enferm_corzn
  P_3: "",
  // enferm_rinons
  P_4: "",
  // enferm_hgdo
  P_5: "",
  // asma
  P_6: "",
  // alergia
  P_7: "",
  // diabetes
  P_8: "",
  // otra_enferm
  P_9: "",
  // medicamentos
  P_10: "",

  codigo_cie1: getDiag[0] ? getDiag[0].codigo : "",
  descrip_cie1: getDiag[0] ? getDiag[0].descripcion : "",
  codigo_cie2: getDiag[1] ? getDiag[1].codigo : "",
  descrip_cie2: getDiag[1] ? getDiag[1].descripcion : "",
  codigo_cups1: getArtic[0] ? getArtic[0].codigo : "",
  descrip_cups1: getArtic[0] ? getArtic[0].descripcion : "",
  codigo_cups2: getArtic[1] ? getArtic[1].codigo : "",
  descrip_cups2: getArtic[1] ? getArtic[1].descripcion : "",
  llave_consen: `${getPaci.cod}00000000`,
  servicio: "",
});

// Este reg maneja los checkbox, al activarlos se activa el input que se guarda en cobol
const reg_checks = ref({
  //otros_exam
  P_1: false,
  // reacc_adversa
  P_2: false,
  // enferm_corzn
  P_3: false,
  // enferm_rinons
  P_4: false,
  // enferm_hgdo
  P_5: false,
  // asma
  P_6: false,
  // alergia
  P_7: false,
  // diabetes
  P_8: false,
  // otra_enferm
  P_9: false,
  // medicamentos
  P_10: false,
});

const form = ref({
  especifique: {
    id: "especifique",
    label: "",
    maxlength: "100",
    required: true,
    campo_abierto: true,
  },
});

const grabarConsentimiento = async () => {
  const datos_format = JSON.parse(JSON.stringify(reg.value));
  let datos = {
    estado: reg.value.opcion_lab010 == "AUTORIZAR" ? "1" : "2",
    disentimiento: "N",
    llave_consen: `${getPaci.cod}00000000`,
    oper_consen: getSesion.oper,
    cod_consen: "LAB010",
    cod_med: getProf.cod,
    id_acomp: getAcomp.cod.padStart(15, "0"),
    id_testigo: getAcomp.cod.padStart(15, "0"),
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
    await guardarFile$({ base64: firma_recibida.value, codigo: `P${llave}` });
    await guardarFile$({ base64: firma_recibida_test.value, codigo: `A${llave}` });

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
    const datos_lab010 = {
      autorizo: reg.value.opcion_lab010 == "AUTORIZAR" ? true : false,
      empresa: getEmpresa,
      paciente: getPaci,
      prof: getProf,
      acomp: getAcomp,
      paren_acomp: getSesion.paren_acomp,
      firmas: {
        firma_paci: firma_recibida.value ? true : false,
        huella_paci: huella_paci.value ? true : false,
        firma_acomp: firma_recibida_test.value ? true : false,
        firma_prof: firma_prof.value ? true : false,
      },
      fecha: reg.value.fecha_act,
      llave: reg.value.llave_consen,
      ...reg.value,
    };

    const firmas = {
      img_firma_consen: firma_recibida.value,
      img_firma_paci: firma_recibida.value,
      img_huella_paci: huella_paci.value,
      img_firma_acomp: firma_recibida_test.value,
      firma_prof: firma_prof.value,
    };

    const docDefinitionPrint = utilsFormat({
      datos: firmas,
      content: impresionLAB010({
        datos: datos_lab010,
      }),
    });
    // const docDefinitionPrintDwnld = utilsFormat({
    //   datos: firmas,
    //   content: impresionLAB010({
    //     datos: datos_lab010,
    //   }),
    // });
    const docDefinitionFile = utilsFormat({
      datos: firmas,
      content: impresionLAB010({
        datos: datos_lab010,
      }),
    });

    await impresion({ docDefinition: docDefinitionPrint });
    // await impresionDwld({ docDefinition: docDefinitionPrintDwnld });
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

const validarDatos = async () => {
  if (!firma_recibida.value && !getAcomp.cod) {
    return CON851("?", "info", "No se ha realizado la firma del paciente");
  }
  if (getAcomp.cod && !firma_recibida_test.value) {
    return CON851("?", "info", "No se ha realizado la firma del testigo");
  }
  grabarConsentimiento();
};

onMounted(() => {
  reg.value.fecha_act = dayjs(getEmpresa.fecha_act).format("YYYY-MM-DD");
  getFirmaProf();

});


const callBackFirma = (data_firma) => {
  data_firma && (firma_recibida.value = data_firma.slice(22));
};

const callBackFirmaAcomp = (data_firma) => {
  data_firma && (firma_recibida_test.value = data_firma.slice(22));
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
