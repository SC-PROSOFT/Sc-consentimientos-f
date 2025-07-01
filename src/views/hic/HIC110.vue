<template>
  <q-card class="q-mx-auto format">
    <div>
      <q-card-section>
        <div class="text-center">
          <q-toggle
            v-model="opcion_hc110"
            color="primary"
            keep-color
            false-value="REVOCAR"
            true-value="AUTORIZAR"
            unchecked-icon="block"
            checked-icon="check_circle"
            label="¿Autorizar o revocar este consentimiento?"
          />
          <p :class="opcion_hc110 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
            <q-chip :color="opcion_hc110 == 'AUTORIZAR' ? 'green' : 'red'" class="text-white" v-if="opcion_hc110">
              {{ opcion_hc110 }}
            </q-chip>
          </p>
        </div>
      </q-card-section>

      <q-card-section>
        <div class="row" style="width: 100%">
          <div class="text-center q-pa-xs bg-grey-5" style="border: 1px solid #ccc; width: 5%">
            <p class="text-bold" style="margin-top: 10px">No.</p>
          </div>
          <div class="text-center q-pa-xs bg-grey-5" style="border: 1px solid #ccc; width: 15%">
            <p class="text-bold" style="margin-top: 10px">Puntaje acumulado</p>
          </div>
          <div class="text-center q-pa-xs bg-grey-5" style="border: 1px solid #ccc; width: 65%">
            <p class="text-bold" style="margin-top: 10px">Orientación en el tiempo</p>
          </div>
          <div class="text-center q-pa-xs bg-grey-5" style="border: 1px solid #ccc; width: 15%">
            <p class="text-bold" style="margin-top: 10px">Puntuación</p>
          </div>
          <!--  -->
          <div class="text-center q-pa-xs" style="border: 1px solid #ccc; width: 5%">
            <p class="text-bold" style="margin-top: 10px">1</p>
          </div>
          <div class="text-center q-pa-xs" style="border: 1px solid #ccc; width: 15%">
            <p class="text-bold" style="margin-top: 10px">PUNTUACIÓN (máx. 5)</p>
            <p class="text-bold" style="margin-top: 10px">{{ acumulado_1 }}/5</p>
          </div>
          <div class="text-center q-pa-xs" style="border: 1px solid #ccc; width: 80%">
            <p>
              <span class="text-bold">CONSIGNA:</span>
              “diga en qué estamos”
            </p>
            <div class="row">
              <div class="text-left q-pa-xs" style="border: 1px solid #ccc; width: 81.5%">
                <p>En qué año:</p>
              </div>
              <div class="text-center q-pa-xs" style="border: 1px solid #ccc; width: 18.5%">
                <q-checkbox v-model="HIC110.respuestas_1[0]" true-value="1" false-value="0" left-label label="1" color="teal" />
              </div>
              <div class="text-left q-pa-xs" style="border: 1px solid #ccc; width: 81.5%">
                <p>En qué mes:</p>
              </div>
              <div class="text-center q-pa-xs" style="border: 1px solid #ccc; width: 18.5%">
                <q-checkbox v-model="HIC110.respuestas_1[1]" true-value="1" false-value="0" left-label label="1" color="teal" />
              </div>
              <div class="text-left q-pa-xs" style="border: 1px solid #ccc; width: 81.5%">
                <p>En qué Día estamos (fecha):</p>
              </div>
              <div class="text-center q-pa-xs" style="border: 1px solid #ccc; width: 18.5%">
                <q-checkbox v-model="HIC110.respuestas_1[2]" true-value="1" false-value="0" left-label label="1" color="teal" />
              </div>
              <div class="text-left q-pa-xs" style="border: 1px solid #ccc; width: 81.5%">
                <p>En qué día de la semana:</p>
              </div>
              <div class="text-center q-pa-xs" style="border: 1px solid #ccc; width: 18.5%">
                <q-checkbox v-model="HIC110.respuestas_1[3]" true-value="1" false-value="0" left-label label="1" color="teal" />
              </div>
              <div class="text-left q-pa-xs" style="border: 1px solid #ccc; width: 81.5%">
                <p>Hora aproximadamente:</p>
              </div>
              <div class="text-center q-pa-xs" style="border: 1px solid #ccc; width: 18.5%">
                <q-checkbox v-model="HIC110.respuestas_1[4]" true-value="1" false-value="0" left-label label="1" color="teal" />
              </div>
            </div>
          </div>
        </div>
        <!--  -->
        <div class="row" style="width: 100%">
          <div class="text-center q-pa-xs bg-grey-5" style="border: 1px solid #ccc; width: 5%">
            <p class="text-bold" style="margin-top: 10px">No.</p>
          </div>
          <div class="text-center q-pa-xs bg-grey-5" style="border: 1px solid #ccc; width: 15%">
            <p class="text-bold" style="margin-top: 10px">Puntaje acumulado</p>
          </div>
          <div class="text-center q-pa-xs bg-grey-5" style="border: 1px solid #ccc; width: 65%">
            <p class="text-bold" style="margin-top: 10px">Orientación en el espacio</p>
          </div>
          <div class="text-center q-pa-xs bg-grey-5" style="border: 1px solid #ccc; width: 15%">
            <p class="text-bold" style="margin-top: 10px">Puntuación</p>
          </div>
          <!--  -->
          <div class="text-center q-pa-xs" style="border: 1px solid #ccc; width: 5%">
            <p class="text-bold" style="margin-top: 10px">2</p>
          </div>
          <div class="text-center q-pa-xs" style="border: 1px solid #ccc; width: 15%">
            <p class="text-bold" style="margin-top: 10px">PUNTUACIÓN (máx. 5)</p>
            <p class="text-bold" style="margin-top: 10px">{{ acumulado_2 }}/5</p>
          </div>
          <div class="text-center q-pa-xs" style="border: 1px solid #ccc; width: 80%">
            <p>
              <span class="text-bold">CONSIGNA:</span>
              “diga en qué estamos”
            </p>
            <div class="row">
              <div class="text-left q-pa-xs" style="border: 1px solid #ccc; width: 81.5%">
                <p>¿En qué lugar estamos ahora?</p>
              </div>
              <div class="text-center q-pa-xs" style="border: 1px solid #ccc; width: 18.5%">
                <q-checkbox v-model="HIC110.respuestas_2[0]" true-value="1" false-value="0" left-label label="1" color="teal" />
              </div>
              <div class="text-left q-pa-xs" style="border: 1px solid #ccc; width: 81.5%">
                <p>¿En qué piso o departamento estamos ahora?</p>
              </div>
              <div class="text-center q-pa-xs" style="border: 1px solid #ccc; width: 18.5%">
                <q-checkbox v-model="HIC110.respuestas_2[1]" true-value="1" false-value="0" left-label label="1" color="teal" />
              </div>
              <div class="text-left q-pa-xs" style="border: 1px solid #ccc; width: 81.5%">
                <p>¿Qué barrio o parroquia es este?</p>
              </div>
              <div class="text-center q-pa-xs" style="border: 1px solid #ccc; width: 18.5%">
                <q-checkbox v-model="HIC110.respuestas_2[2]" true-value="1" false-value="0" left-label label="1" color="teal" />
              </div>
              <div class="text-left q-pa-xs" style="border: 1px solid #ccc; width: 81.5%">
                <p>¿En qué ciudad estamos?</p>
              </div>
              <div class="text-center q-pa-xs" style="border: 1px solid #ccc; width: 18.5%">
                <q-checkbox v-model="HIC110.respuestas_2[3]" true-value="1" false-value="0" left-label label="1" color="teal" />
              </div>
              <div class="text-left q-pa-xs" style="border: 1px solid #ccc; width: 81.5%">
                <p>¿En qué país estamos?</p>
              </div>
              <div class="text-center q-pa-xs" style="border: 1px solid #ccc; width: 18.5%">
                <q-checkbox v-model="HIC110.respuestas_2[4]" true-value="1" false-value="0" left-label label="1" color="teal" />
              </div>
            </div>
          </div>
        </div>
        <!--  -->
        <div class="row" style="width: 100%">
          <div class="text-center q-pa-xs bg-grey-5" style="border: 1px solid #ccc; width: 5%">
            <p class="text-bold" style="margin-top: 10px">No.</p>
          </div>
          <div class="text-center q-pa-xs bg-grey-5" style="border: 1px solid #ccc; width: 15%">
            <p class="text-bold" style="margin-top: 10px">Puntaje acumulado</p>
          </div>
          <div class="text-center q-pa-xs bg-grey-5" style="border: 1px solid #ccc; width: 65%">
            <p class="text-bold" style="margin-top: 10px">Memoria</p>
          </div>
          <div class="text-center q-pa-xs bg-grey-5" style="border: 1px solid #ccc; width: 15%">
            <p class="text-bold" style="margin-top: 10px">Puntuación</p>
          </div>
          <!--  -->
          <div class="text-center q-pa-xs" style="border: 1px solid #ccc; width: 5%">
            <p class="text-bold" style="margin-top: 10px">3</p>
          </div>
          <div class="text-center q-pa-xs" style="border: 1px solid #ccc; width: 15%">
            <p class="text-bold" style="margin-top: 10px">PUNTUACIÓN (máx. 3)</p>
            <p class="text-bold" style="margin-top: 10px">{{ acumulado_3 }}/3</p>
          </div>
          <div class="text-center q-pa-xs" style="border: 1px solid #ccc; width: 80%">
            <p>
              <span class="text-bold">CONSIGNA:</span>
              “Diga las siguientes palabras”
            </p>
            <div class="row">
              <div class="text-left q-pa-xs" style="border: 1px solid #ccc; width: 81.5%">
                <p>CASA</p>
              </div>
              <div class="text-center q-pa-xs" style="border: 1px solid #ccc; width: 18.5%">
                <q-checkbox v-model="HIC110.respuestas_3[0]" true-value="1" false-value="0" left-label label="1" color="teal" />
              </div>
              <div class="text-left q-pa-xs" style="border: 1px solid #ccc; width: 81.5%">
                <p>MESA</p>
              </div>
              <div class="text-center q-pa-xs" style="border: 1px solid #ccc; width: 18.5%">
                <q-checkbox v-model="HIC110.respuestas_3[1]" true-value="1" false-value="0" left-label label="1" color="teal" />
              </div>
              <div class="text-left q-pa-xs" style="border: 1px solid #ccc; width: 81.5%">
                <p>ÁRBOL</p>
              </div>
              <div class="text-center q-pa-xs" style="border: 1px solid #ccc; width: 18.5%">
                <q-checkbox v-model="HIC110.respuestas_3[2]" true-value="1" false-value="0" left-label label="1" color="teal" />
              </div>
              <div class="text-left q-pa-xs" style="border: 1px solid #ccc; width: 100%">
                <p class="text-justify">
                  Un segundo por cada una. Luego pída a la persona que las repita. Asignándole un punto por cada respuesta correcta. Si en un primer
                  intento no logra repetir las palabras, repitalas hasta que la persona las registre.
                </p>
              </div>
              <div class="text-left q-pa-xs" style="border: 1px solid #ccc; width: 81.5%">
                <p>Anote el numero de Ensayos Requeridos</p>
              </div>
              <div class="text-center q-pa-xs" style="border: 1px solid #ccc; width: 18.5%">
                <Input_ v-model="HIC110.preg_3_nro_ensay" :field="form.preg_3_nro_ensay" :inputStyle="{ width: '140px' }" />
              </div>
            </div>
          </div>
        </div>
        <!--  -->
        <div class="row" style="width: 100%">
          <div class="text-center q-pa-xs bg-grey-5" style="border: 1px solid #ccc; width: 5%">
            <p class="text-bold" style="margin-top: 10px">No.</p>
          </div>
          <div class="text-center q-pa-xs bg-grey-5" style="border: 1px solid #ccc; width: 15%">
            <p class="text-bold" style="margin-top: 10px">Puntaje acumulado</p>
          </div>
          <div class="text-center q-pa-xs bg-grey-5" style="border: 1px solid #ccc; width: 65%">
            <p class="text-bold" style="margin-top: 10px">Atención y cálculo</p>
          </div>
          <div class="text-center q-pa-xs bg-grey-5" style="border: 1px solid #ccc; width: 15%">
            <p class="text-bold" style="margin-top: 10px">Puntuación</p>
          </div>
          <!--  -->
          <div class="text-center q-pa-xs" style="border: 1px solid #ccc; width: 5%">
            <p class="text-bold" style="margin-top: 10px">4</p>
          </div>
          <div class="text-center q-pa-xs" style="border: 1px solid #ccc; width: 15%">
            <p class="text-bold" style="margin-top: 10px">PUNTUACIÓN (máx. 5)</p>
            <p class="text-bold" style="margin-top: 10px">{{ acumulado_4 }}/5</p>
          </div>
          <div class="text-center q-pa-xs" style="border: 1px solid #ccc; width: 80%">
            <p>
              <span class="text-bold">CONSIGNA:</span>
              “ reste de 100 - 7 ” en forma sucesiva durante 5 veces. Registre un punto por cada respuesta correcta ( En caso de que la persona no
              sepa restar utilizar la siguiente alternativa: Decir los meses del año al revés: Diciembre, noviembre,oCTUBRE, SEPTIEMBRE, AGOSTO.
            </p>
            <div class="row">
              <div class="text-left q-pa-xs" style="border: 1px solid #ccc; width: 81.5%">
                <p>93</p>
              </div>
              <div class="text-center q-pa-xs" style="border: 1px solid #ccc; width: 18.5%">
                <q-checkbox v-model="HIC110.respuestas_4[0]" true-value="1" false-value="0" left-label label="1" color="teal" />
              </div>
              <div class="text-left q-pa-xs" style="border: 1px solid #ccc; width: 81.5%">
                <p>86</p>
              </div>
              <div class="text-center q-pa-xs" style="border: 1px solid #ccc; width: 18.5%">
                <q-checkbox v-model="HIC110.respuestas_4[1]" true-value="1" false-value="0" left-label label="1" color="teal" />
              </div>
              <div class="text-left q-pa-xs" style="border: 1px solid #ccc; width: 81.5%">
                <p>79</p>
              </div>
              <div class="text-center q-pa-xs" style="border: 1px solid #ccc; width: 18.5%">
                <q-checkbox v-model="HIC110.respuestas_4[2]" true-value="1" false-value="0" left-label label="1" color="teal" />
              </div>
              <div class="text-left q-pa-xs" style="border: 1px solid #ccc; width: 81.5%">
                <p>72</p>
              </div>
              <div class="text-center q-pa-xs" style="border: 1px solid #ccc; width: 18.5%">
                <q-checkbox v-model="HIC110.respuestas_4[3]" true-value="1" false-value="0" left-label label="1" color="teal" />
              </div>
              <div class="text-left q-pa-xs" style="border: 1px solid #ccc; width: 81.5%">
                <p>65</p>
              </div>
              <div class="text-center q-pa-xs" style="border: 1px solid #ccc; width: 18.5%">
                <q-checkbox v-model="HIC110.respuestas_4[4]" true-value="1" false-value="0" left-label label="1" color="teal" />
              </div>
            </div>
          </div>
        </div>
        <!--  -->
        <div class="row" style="width: 100%">
          <div class="text-center q-pa-xs bg-grey-5" style="border: 1px solid #ccc; width: 5%">
            <p class="text-bold" style="margin-top: 10px">No.</p>
          </div>
          <div class="text-center q-pa-xs bg-grey-5" style="border: 1px solid #ccc; width: 15%">
            <p class="text-bold" style="margin-top: 10px">Puntaje acumulado</p>
          </div>
          <div class="text-center q-pa-xs bg-grey-5" style="border: 1px solid #ccc; width: 65%">
            <p class="text-bold" style="margin-top: 10px">Evocación</p>
          </div>
          <div class="text-center q-pa-xs bg-grey-5" style="border: 1px solid #ccc; width: 15%">
            <p class="text-bold" style="margin-top: 10px">Puntuación</p>
          </div>
          <!--  -->
          <div class="text-center q-pa-xs" style="border: 1px solid #ccc; width: 5%">
            <p class="text-bold" style="margin-top: 10px">5</p>
          </div>
          <div class="text-center q-pa-xs" style="border: 1px solid #ccc; width: 15%">
            <p class="text-bold" style="margin-top: 10px">PUNTUACIÓN (máx. 3)</p>
            <p class="text-bold" style="margin-top: 10px">{{ acumulado_5 }}/3</p>
          </div>
          <div class="text-center q-pa-xs" style="border: 1px solid #ccc; width: 80%">
            <p>
              <span class="text-bold">CONSIGNA:</span>
              “Dígame los 3 objetos que le mencioné al principio”.
            </p>
            <div class="row">
              <div class="text-left q-pa-xs" style="border: 1px solid #ccc; width: 81.5%">
                <p>CASA</p>
              </div>
              <div class="text-center q-pa-xs" style="border: 1px solid #ccc; width: 18.5%">
                <q-checkbox v-model="HIC110.respuestas_5[0]" true-value="1" false-value="0" left-label label="1" color="teal" />
              </div>
              <div class="text-left q-pa-xs" style="border: 1px solid #ccc; width: 81.5%">
                <p>MESA</p>
              </div>
              <div class="text-center q-pa-xs" style="border: 1px solid #ccc; width: 18.5%">
                <q-checkbox v-model="HIC110.respuestas_5[1]" true-value="1" false-value="0" left-label label="1" color="teal" />
              </div>
              <div class="text-left q-pa-xs" style="border: 1px solid #ccc; width: 81.5%">
                <p>ÁRBOL</p>
              </div>
              <div class="text-center q-pa-xs" style="border: 1px solid #ccc; width: 18.5%">
                <q-checkbox v-model="HIC110.respuestas_5[2]" true-value="1" false-value="0" left-label label="1" color="teal" />
              </div>
            </div>
          </div>
        </div>
        <!--  -->
        <div class="row" style="width: 100%">
          <div class="text-center q-pa-xs bg-grey-5" style="border: 1px solid #ccc; width: 5%">
            <p class="text-bold" style="margin-top: 10px">No.</p>
          </div>
          <div class="text-center q-pa-xs bg-grey-5" style="border: 1px solid #ccc; width: 15%">
            <p class="text-bold" style="margin-top: 10px">Puntaje acumulado</p>
          </div>
          <div class="text-center q-pa-xs bg-grey-5" style="border: 1px solid #ccc; width: 65%">
            <p class="text-bold" style="margin-top: 10px">Lenguaje</p>
          </div>
          <div class="text-center q-pa-xs bg-grey-5" style="border: 1px solid #ccc; width: 15%">
            <p class="text-bold" style="margin-top: 10px">Puntuación</p>
          </div>
          <!--  -->
          <div class="text-center q-pa-xs" style="border: 1px solid #ccc; width: 5%">
            <p class="text-bold" style="margin-top: 10px">6</p>
          </div>
          <div class="text-center q-pa-xs" style="border: 1px solid #ccc; width: 15%">
            <p class="text-bold" style="margin-top: 10px">PUNTUACIÓN (máx. 2)</p>
            <p class="text-bold" style="margin-top: 10px">{{ acumulado_6 }}/2</p>
          </div>
          <div class="text-center q-pa-xs" style="border: 1px solid #ccc; width: 80%">
            <div class="row">
              <div class="text-left q-pa-xs" style="border: 1px solid #ccc; width: 81.5%">
                <p>Mostrarle un lápiz y preguntar ¿qué es esto?</p>
              </div>
              <div class="text-center q-pa-xs" style="border: 1px solid #ccc; width: 18.5%">
                <q-checkbox v-model="HIC110.respuestas_6[0]" true-value="1" false-value="0" left-label label="1" color="teal" />
              </div>
              <div class="text-left q-pa-xs" style="border: 1px solid #ccc; width: 81.5%">
                <p>Mostrarle un reloj y preguntar ¿qué es esto?</p>
              </div>
              <div class="text-center q-pa-xs" style="border: 1px solid #ccc; width: 18.5%">
                <q-checkbox v-model="HIC110.respuestas_6[1]" true-value="1" false-value="0" left-label label="1" color="teal" />
              </div>
            </div>
          </div>
        </div>
        <!--  -->
        <div class="row" style="width: 100%">
          <div class="text-center q-pa-xs bg-grey-5" style="border: 1px solid #ccc; width: 5%">
            <p class="text-bold" style="margin-top: 10px">No.</p>
          </div>
          <div class="text-center q-pa-xs bg-grey-5" style="border: 1px solid #ccc; width: 15%">
            <p class="text-bold" style="margin-top: 10px">Puntaje acumulado</p>
          </div>
          <div class="text-center q-pa-xs bg-grey-5" style="border: 1px solid #ccc; width: 65%">
            <p class="text-bold" style="margin-top: 10px">Lenguaje</p>
          </div>
          <div class="text-center q-pa-xs bg-grey-5" style="border: 1px solid #ccc; width: 15%">
            <p class="text-bold" style="margin-top: 10px">Puntuación</p>
          </div>
          <!--  -->
          <div class="text-center q-pa-xs" style="border: 1px solid #ccc; width: 5%">
            <p class="text-bold" style="margin-top: 10px">7</p>
          </div>
          <div class="text-center q-pa-xs" style="border: 1px solid #ccc; width: 15%">
            <p class="text-bold" style="margin-top: 10px">PUNTUACIÓN (máx. 1)</p>
            <p class="text-bold" style="margin-top: 10px">{{ acumulado_7 }}/1</p>
          </div>
          <div class="text-center q-pa-xs" style="border: 1px solid #ccc; width: 80%">
            <p>
              <span class="text-bold">CONSIGNA:</span>
              “repita la siguiente frase":
            </p>
            <div class="row">
              <div class="text-left q-pa-xs" style="border: 1px solid #ccc; width: 81.5%">
                <p>En el trigal había cinco perros.</p>
              </div>
              <div class="text-center q-pa-xs" style="border: 1px solid #ccc; width: 18.5%">
                <q-checkbox v-model="HIC110.respuestas_7[0]" true-value="1" false-value="0" left-label label="1" color="teal" />
              </div>
            </div>
          </div>
        </div>
        <!--  -->
        <div class="row" style="width: 100%">
          <div class="text-center q-pa-xs bg-grey-5" style="border: 1px solid #ccc; width: 5%">
            <p class="text-bold" style="margin-top: 10px">No.</p>
          </div>
          <div class="text-center q-pa-xs bg-grey-5" style="border: 1px solid #ccc; width: 15%">
            <p class="text-bold" style="margin-top: 10px">Puntaje acumulado</p>
          </div>
          <div class="text-center q-pa-xs bg-grey-5" style="border: 1px solid #ccc; width: 65%">
            <p class="text-bold" style="margin-top: 10px">Comprensión obedecer una orden en tres etapas</p>
          </div>
          <div class="text-center q-pa-xs bg-grey-5" style="border: 1px solid #ccc; width: 15%">
            <p class="text-bold" style="margin-top: 10px">Puntuación</p>
          </div>
          <!--  -->
          <div class="text-center q-pa-xs" style="border: 1px solid #ccc; width: 5%">
            <p class="text-bold" style="margin-top: 10px">8</p>
          </div>
          <div class="text-center q-pa-xs" style="border: 1px solid #ccc; width: 15%">
            <p class="text-bold" style="margin-top: 10px">PUNTUACIÓN (máx. 1)</p>
            <p class="text-bold" style="margin-top: 10px">{{ acumulado_8 }}/3</p>
          </div>
          <div class="text-center q-pa-xs" style="border: 1px solid #ccc; width: 80%">
            <p>
              <span class="text-bold">CONSIGNA:</span>
              “A continuacion le voy a dar una orden, escuchela toda y realícela:
            </p>
            <p>“Tome esta hoja de papel con su mano derecha, dóblela por la mitad y póngala en el piso"</p>
            <div class="row">
              <div class="text-left q-pa-xs" style="border: 1px solid #ccc; width: 81.5%">
                <p>Tome este papel con la mano derecha</p>
              </div>
              <div class="text-center q-pa-xs" style="border: 1px solid #ccc; width: 18.5%">
                <q-checkbox v-model="HIC110.respuestas_8[0]" true-value="1" false-value="0" left-label label="1" color="teal" />
              </div>
              <div class="text-left q-pa-xs" style="border: 1px solid #ccc; width: 81.5%">
                <p>Dóblelo por la mitad</p>
              </div>
              <div class="text-center q-pa-xs" style="border: 1px solid #ccc; width: 18.5%">
                <q-checkbox v-model="HIC110.respuestas_8[1]" true-value="1" false-value="0" left-label label="1" color="teal" />
              </div>
              <div class="text-left q-pa-xs" style="border: 1px solid #ccc; width: 81.5%">
                <p>Déjelo en suelo</p>
              </div>
              <div class="text-center q-pa-xs" style="border: 1px solid #ccc; width: 18.5%">
                <q-checkbox v-model="HIC110.respuestas_8[2]" true-value="1" false-value="0" left-label label="1" color="teal" />
              </div>
            </div>
          </div>
        </div>
        <!--  -->
        <div class="row" style="width: 100%">
          <div class="text-center q-pa-xs bg-grey-5" style="border: 1px solid #ccc; width: 5%">
            <p class="text-bold" style="margin-top: 10px">No.</p>
          </div>
          <div class="text-center q-pa-xs bg-grey-5" style="border: 1px solid #ccc; width: 15%">
            <p class="text-bold" style="margin-top: 10px">Puntaje acumulado</p>
          </div>
          <div class="text-center q-pa-xs bg-grey-5" style="border: 1px solid #ccc; width: 65%">
            <p class="text-bold" style="margin-top: 10px">
              Para las siguiente dos ordenes utilice una tarjeta u hoja de papel que contenga la frase "cierre los ojos". Pídale a la que:
            </p>
          </div>
          <div class="text-center q-pa-xs bg-grey-5" style="border: 1px solid #ccc; width: 15%">
            <p class="text-bold" style="margin-top: 10px">Puntuación</p>
          </div>
          <!--  -->
          <div class="text-center q-pa-xs" style="border: 1px solid #ccc; width: 5%">
            <p class="text-bold" style="margin-top: 10px">9</p>
          </div>
          <div class="text-center q-pa-xs" style="border: 1px solid #ccc; width: 15%">
            <p class="text-bold" style="margin-top: 10px">PUNTUACIÓN (máx. 1)</p>
            <p class="text-bold" style="margin-top: 10px">{{ acumulado_9 }}/1</p>
          </div>
          <div class="text-center q-pa-xs" style="border: 1px solid #ccc; width: 80%">
            <div class="row">
              <div class="text-left q-pa-xs" style="border: 1px solid #ccc; width: 81.5%">
                <p>lea y que haga lo que dice la frase que contiene la tarjeta</p>
              </div>
              <div class="text-center q-pa-xs" style="border: 1px solid #ccc; width: 18.5%">
                <q-checkbox v-model="HIC110.respuestas_9[0]" true-value="1" false-value="0" left-label label="1" color="teal" />
              </div>
            </div>
          </div>
        </div>
        <!--  -->
        <div class="row" style="width: 100%">
          <div class="text-center q-pa-xs bg-grey-5" style="border: 1px solid #ccc; width: 5%">
            <p class="text-bold" style="margin-top: 10px">No.</p>
          </div>
          <div class="text-center q-pa-xs bg-grey-5" style="border: 1px solid #ccc; width: 15%">
            <p class="text-bold" style="margin-top: 10px">Puntaje acumulado</p>
          </div>
          <div class="text-center q-pa-xs bg-grey-5" style="border: 1px solid #ccc; width: 65%">
            <p class="text-bold" style="margin-top: 10px"></p>
          </div>
          <div class="text-center q-pa-xs bg-grey-5" style="border: 1px solid #ccc; width: 15%">
            <p class="text-bold" style="margin-top: 10px">Puntuación</p>
          </div>
          <!--  -->
          <div class="text-center q-pa-xs" style="border: 1px solid #ccc; width: 5%">
            <p class="text-bold" style="margin-top: 10px">10</p>
          </div>
          <div class="text-center q-pa-xs" style="border: 1px solid #ccc; width: 15%">
            <p class="text-bold" style="margin-top: 10px">PUNTUACIÓN (máx. 1)</p>
            <p class="text-bold" style="margin-top: 10px">{{ acumulado_10 }}/1</p>
          </div>
          <div class="text-center q-pa-xs" style="border: 1px solid #ccc; width: 80%">
            <div class="row">
              <div class="text-left q-pa-xs" style="border: 1px solid #ccc; width: 81.5%">
                <p>
                  <span class="text-bold">CONSIGNA:</span>
                  Quiero que por favor escriba la frase que contiene la tarjeta
                </p>
              </div>
              <div class="text-center q-pa-xs" style="border: 1px solid #ccc; width: 18.5%">
                <q-checkbox v-model="HIC110.respuestas_10[0]" true-value="1" false-value="0" left-label label="1" color="teal" />
              </div>
            </div>
          </div>
        </div>
        <!--  -->
        <div class="row" style="width: 100%">
          <div class="text-center q-pa-xs bg-grey-5" style="border: 1px solid #ccc; width: 5%">
            <p class="text-bold" style="margin-top: 10px">No.</p>
          </div>
          <div class="text-center q-pa-xs bg-grey-5" style="border: 1px solid #ccc; width: 15%">
            <p class="text-bold" style="margin-top: 10px">Puntaje acumulado</p>
          </div>
          <div class="text-center q-pa-xs bg-grey-5" style="border: 1px solid #ccc; width: 65%">
            <p class="text-bold" style="margin-top: 10px"></p>
          </div>
          <div class="text-center q-pa-xs bg-grey-5" style="border: 1px solid #ccc; width: 15%">
            <p class="text-bold" style="margin-top: 10px">Puntuación</p>
          </div>
          <!--  -->
          <div class="text-center q-pa-xs" style="border: 1px solid #ccc; width: 5%">
            <p class="text-bold" style="margin-top: 10px">11</p>
          </div>
          <div class="text-center q-pa-xs" style="border: 1px solid #ccc; width: 15%">
            <p class="text-bold" style="margin-top: 10px">PUNTUACIÓN (máx. 1)</p>
            <p class="text-bold" style="margin-top: 10px">{{ acumulado_11 }}/1</p>
          </div>
          <div class="text-center q-pa-xs" style="border: 1px solid #ccc; width: 80%">
            <div class="row">
              <div class="text-left q-pa-xs" style="border: 1px solid #ccc; width: 81.5%">
                <p>
                  <span class="text-bold">CONSIGNA:</span>
                  "Copie el siguiente diseño ( dos pentágonos cruzados en un ángulo) (dibujo)"
                </p>
              </div>
              <div class="text-center q-pa-xs" style="border: 1px solid #ccc; width: 18.5%">
                <q-checkbox v-model="HIC110.respuestas_11[0]" true-value="1" false-value="0" left-label label="1" color="teal" />
              </div>
            </div>
            <img src="@/assets/image/pentagonos.png" alt="Diseño de pentágonos cruzados" style="max-width: 35%; height: auto" />
          </div>
        </div>
        <!--  -->
        <div class="row q-mt-lg" style="width: 100%">
          <div class="text-center q-pa-xs" style="border: 1px solid #ccc; width: 25%">
            <p class="text-bold" style="margin-top: 10px">PUNTUACIÓN TOTAL: (máx. 30 puntos)</p>
          </div>
          <div class="text-center q-pa-xs" style="border: 1px solid #ccc; width: 10%">
            <p class="text-bold" style="margin-top: 10px">{{ total_acumulado }}/30</p>
          </div>
          <div class="text-center q-pa-xs" style="border: 1px solid #ccc; width: 50%">
            <p class="text-bold" style="margin-top: 10px">SUMATORIA PUNTAJE FINAL</p>
          </div>
          <div class="text-center q-pa-xs" style="border: 1px solid #ccc; width: 15%">
            <p class="text-bold" style="margin-top: 10px">{{ total_acumulado }}</p>
          </div>
        </div>
        <!--  -->
        <div class="row q-mt-lg" style="width: 100%">
          <div class="text-center q-pa-xs" style="border: 1px solid #ccc; width: 100%">
            <p class="text-bold" style="margin-top: 10px">PUNTUACIONES DE REFERENCIA:</p>
          </div>
          <div class="text-center q-pa-xs" style="border: 1px solid #ccc; width: 50%">
            <p style="margin-top: 10px">27- 30</p>
          </div>
          <div class="text-center q-pa-xs" style="border: 1px solid #ccc; width: 50%">
            <p style="margin-top: 10px">Normal</p>
          </div>
          <div class="text-center q-pa-xs" style="border: 1px solid #ccc; width: 50%">
            <p style="margin-top: 10px">24 - 26</p>
          </div>
          <div class="text-center q-pa-xs" style="border: 1px solid #ccc; width: 50%">
            <p style="margin-top: 10px">Sospecha Patológica</p>
          </div>
          <div class="text-center q-pa-xs" style="border: 1px solid #ccc; width: 50%">
            <p style="margin-top: 10px">12 a 23</p>
          </div>
          <div class="text-center q-pa-xs" style="border: 1px solid #ccc; width: 50%">
            <p style="margin-top: 10px">Deterioro</p>
          </div>
          <div class="text-center q-pa-xs" style="border: 1px solid #ccc; width: 50%">
            <p style="margin-top: 10px">9 a 11</p>
          </div>
          <div class="text-center q-pa-xs" style="border: 1px solid #ccc; width: 50%">
            <p style="margin-top: 10px">Demencia</p>
          </div>
        </div>
      </q-card-section>

      <q-card-section> </q-card-section>
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
          disable
          quien_firma="FIRMA PROFESIONAL"
          :firma_="firma_prof"
          :firmador="getProf.descrip"
          :descrip_prof="getProf.descrip_atiende"
          :registro_profe="getProf.cod"
          :codigo_firma="getProf.cod"
          class="col-4"
        />
      </div>
    </q-card-actions>

    <div class="col-12 row justify-center q-my-md">
      <q-btn
        :disable="opcion_hc110 ? false : true"
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
import { impresionHIC110, impresion, generarArchivo } from "@/impresiones";
import { ref, defineAsyncComponent, onMounted, reactive, computed } from "vue";
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
const nit_usu = ref(parseInt(getEmpresa.nitusu) || 0);
const HIC110 = reactive({
  fecha: "",
  respuestas_1: ["0", "0", "0", "0", "0"],
  respuestas_2: ["0", "0", "0", "0", "0"],
  respuestas_3: ["0", "0", "0"],
  respuestas_4: ["0", "0", "0", "0", "0"],
  respuestas_5: ["0", "0", "0"],
  respuestas_6: ["0", "0"],
  respuestas_7: ["0"],
  respuestas_8: ["0", "0", "0"],
  respuestas_9: ["0"],
  respuestas_10: ["0"],
  respuestas_11: ["0"],
  preg_3_nro_ensay: 0,
});

const opcion_hc110 = ref(null);
const acumulado_1 = computed(() => HIC110.respuestas_1.reduce((acumulado, respuesta) => acumulado + parseInt(respuesta, 10), 0));
const acumulado_2 = computed(() => HIC110.respuestas_2.reduce((acumulado, respuesta) => acumulado + parseInt(respuesta, 10), 0));
const acumulado_3 = computed(() => HIC110.respuestas_3.reduce((acumulado, respuesta) => acumulado + parseInt(respuesta, 10), 0));
const acumulado_4 = computed(() => HIC110.respuestas_4.reduce((acumulado, respuesta) => acumulado + parseInt(respuesta, 10), 0));
const acumulado_5 = computed(() => HIC110.respuestas_5.reduce((acumulado, respuesta) => acumulado + parseInt(respuesta, 10), 0));
const acumulado_6 = computed(() => HIC110.respuestas_6.reduce((acumulado, respuesta) => acumulado + parseInt(respuesta, 10), 0));
const acumulado_7 = computed(() => HIC110.respuestas_7.reduce((acumulado, respuesta) => acumulado + parseInt(respuesta, 10), 0));
const acumulado_8 = computed(() => HIC110.respuestas_8.reduce((acumulado, respuesta) => acumulado + parseInt(respuesta, 10), 0));
const acumulado_9 = computed(() => HIC110.respuestas_9.reduce((acumulado, respuesta) => acumulado + parseInt(respuesta, 10), 0));
const acumulado_10 = computed(() => HIC110.respuestas_10.reduce((acumulado, respuesta) => acumulado + parseInt(respuesta, 10), 0));
const acumulado_11 = computed(() => HIC110.respuestas_11.reduce((acumulado, respuesta) => acumulado + parseInt(respuesta, 10), 0));
const total_acumulado = computed(
  () =>
    acumulado_1.value +
    acumulado_2.value +
    acumulado_3.value +
    acumulado_4.value +
    acumulado_5.value +
    acumulado_6.value +
    acumulado_7.value +
    acumulado_8.value +
    acumulado_9.value +
    acumulado_10.value +
    acumulado_11.value
);
const form = ref({
  preg_3_nro_ensay: {
    id: "preg_3_nro_ensay",
    maxlength: "2",
    label: "",
    tipo: "number",
    placeholder: "Nro de ensayos",
    campo_abierto: true,
  },
});
onMounted(() => {
  HIC110.fecha = dayjs(getEmpresa.fecha_act).format("YYYY-MM-DD");
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
  let datos = {
    nit_entid: nit_usu.value,
    estado: opcion_hc110.value == "AUTORIZAR" ? "1" : "2",
    id_acomp: getAcomp.cod.padStart(15, "0"),
    paren_acomp: getSesion.paren_acomp,
    oper_consen: getSesion.oper,
    llave_consen: getHc.llave,
    cod_med: getProf.cod,
    cod_consen: "HIC110",
    disentimiento: "N",
    preg1_1: HIC110.respuestas_1[0],
    preg1_2: HIC110.respuestas_1[1],
    preg1_3: HIC110.respuestas_1[2],
    preg1_4: HIC110.respuestas_1[3],
    preg1_5: HIC110.respuestas_1[4],

    preg2_1: HIC110.respuestas_2[0],
    preg2_2: HIC110.respuestas_2[1],
    preg2_3: HIC110.respuestas_2[2],
    preg2_4: HIC110.respuestas_2[3],
    preg2_5: HIC110.respuestas_2[4],

    preg3_1: HIC110.respuestas_3[0],
    preg3_2: HIC110.respuestas_3[1],
    preg3_3: HIC110.respuestas_3[2],

    preg4_1: HIC110.respuestas_4[0],
    preg4_2: HIC110.respuestas_4[1],
    preg4_3: HIC110.respuestas_4[2],
    preg4_4: HIC110.respuestas_4[3],
    preg4_5: HIC110.respuestas_4[4],

    preg5_1: HIC110.respuestas_5[0],
    preg5_2: HIC110.respuestas_5[1],
    preg5_3: HIC110.respuestas_5[2],

    preg6_1: HIC110.respuestas_6[0],
    preg6_2: HIC110.respuestas_6[1],

    preg7_1: HIC110.respuestas_7[0],

    preg8_1: HIC110.respuestas_8[0],
    preg8_2: HIC110.respuestas_8[1],
    preg8_3: HIC110.respuestas_8[2],

    preg9_1: HIC110.respuestas_9[0],

    preg10_1: HIC110.respuestas_10[0],

    preg11_1: HIC110.respuestas_11[0],

    preg_3_nro_ensay: HIC110.preg_3_nro_ensay,
  };

  getDll$({ modulo: `save_consen.dll`, data: { ...datos } })
    .then((data) => {
      if (data?.llave_consen) {
        const fecha = data?.llave_consen.slice(23, 31);
        HIC110.fecha_act = dayjs(fecha).format("YYYY-MM-DD");
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
    const datos_hic110 = {
      autorizo: opcion_hc110.value == "AUTORIZAR" ? true : false,
      empresa: getEmpresa,
      paciente: getPaci,
      prof: getProf,
      acomp: getAcomp,
      paren_acomp: getSesion.paren_acomp,
      llave: getHc.llave.slice(15),
      firmas: {
        firma_paci: firma_recibida.value ? true : false,
        huella_paci: huella_paci.value ? true : false,
        firma_acomp: firma_recibida_acomp.value ? true : false,
        firma_prof: firma_prof.value ? true : false,
      },
      preg1_1: HIC110.respuestas_1[0],
      preg1_2: HIC110.respuestas_1[1],
      preg1_3: HIC110.respuestas_1[2],
      preg1_4: HIC110.respuestas_1[3],
      preg1_5: HIC110.respuestas_1[4],

      preg2_1: HIC110.respuestas_2[0],
      preg2_2: HIC110.respuestas_2[1],
      preg2_3: HIC110.respuestas_2[2],
      preg2_4: HIC110.respuestas_2[3],
      preg2_5: HIC110.respuestas_2[4],

      preg3_1: HIC110.respuestas_3[0],
      preg3_2: HIC110.respuestas_3[1],
      preg3_3: HIC110.respuestas_3[2],

      preg4_1: HIC110.respuestas_4[0],
      preg4_2: HIC110.respuestas_4[1],
      preg4_3: HIC110.respuestas_4[2],
      preg4_4: HIC110.respuestas_4[3],
      preg4_5: HIC110.respuestas_4[4],

      preg5_1: HIC110.respuestas_5[0],
      preg5_2: HIC110.respuestas_5[1],
      preg5_3: HIC110.respuestas_5[2],

      preg6_1: HIC110.respuestas_6[0],
      preg6_2: HIC110.respuestas_6[1],

      preg7_1: HIC110.respuestas_7[0],

      preg8_1: HIC110.respuestas_8[0],
      preg8_2: HIC110.respuestas_8[1],
      preg8_3: HIC110.respuestas_8[2],

      preg9_1: HIC110.respuestas_9[0],

      preg10_1: HIC110.respuestas_10[0],

      preg11_1: HIC110.respuestas_11[0],

      preg_3_nro_ensay: HIC110.preg_3_nro_ensay,
    };

    const firmas = {
      img_firma_consen: firma_recibida.value,
      img_firma_paci: firma_recibida.value,
      img_huella_paci: huella_paci.value,
      img_firma_acomp: firma_recibida_acomp.value,
      firma_prof: firma_prof.value,
    };

    const docDefinitionPrint = await utilsFormat({
      datos: { ...firmas, cod_consen: "HIC110" },
      content: impresionHIC110({
        datos: datos_hic110,
      }),
    });
    const docDefinitionFile = await utilsFormat({
      datos: { ...firmas, cod_consen: "HIC110" },
      content: impresionHIC110({
        datos: datos_hic110,
      }),
    });

    await impresion({ docDefinition: docDefinitionPrint });
    const response_impresion = await generarArchivo({ docDefinition: docDefinitionFile, nomb_archivo: `${llave}-HIC-110` });
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

<style scoped>
.q-radio {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
