<template>
  <q-card class="q-mx-auto format">
    <div>
      <q-card-section>
        <div class="text-center">
          <q-toggle
            v-model="opcion_hc111"
            color="primary"
            keep-color
            false-value="REVOCAR"
            true-value="AUTORIZAR"
            unchecked-icon="block"
            checked-icon="check_circle"
            label="¿Autorizar o revocar este consentimiento?"
          />
          <p :class="opcion_hc111 == 'AUTORIZAR' ? 'text-green' : 'text-red'">
            <q-chip :color="opcion_hc111 == 'AUTORIZAR' ? 'green' : 'red'" class="text-white" v-if="opcion_hc111">
              {{ opcion_hc111 }}
            </q-chip>
          </p>
        </div>
      </q-card-section>

      <q-card-section>
        <p class="text-center q-mt-xs">
          <span class="text-bold">ASSIST - TEST SMOKING AND SUBSTANCE INVOLVEMENT SCREENING TEST </span>
        </p>

        <p class="text-justify q-mt-xs">
          <span class="text-bold">APLICACIÓN DEL INSTRUMENTO </span>
        </p>
        <p class="text-justify q-mt-xs">
          <span class="text-bold">INTRODUCCIÓN </span>
          (Léalo por favor al participante)
        </p>
        <p class="text-justify q-mt-xs">
          Entrevista sobre el alcohol, tabaco y otras drogas. Le voy hacer algunas preguntas sobre su experiencia de consumo de sustancias a lo largo
          de su vida, así como en los últimos tres meses. Estas sustancias pueden ser fumadas, ingeridas, inhaladas, inyectadas o consumidas en forma
          de pastillas (muestre la tarjeta de drogas).
        </p>
        <p class="text-justify q-mt-xs">
          Algunas de las sustancias incluidas pueden haber sido recetadas por un médico (p.ej. pastillas adelgazantes, tranquilizantes, o determinados
          medicamentos para el dolor). Para esta entrevista, no vamos a anotar fármacos que hayan sido consumidos tal como han sido prescritos por su
          médico. Sin embargo, si ha tomado alguno de estos medicamentos por motivos distintos a los que fueron prescritos o los toma más
          frecuentemente o a dosis más altas a las prescritas, entonces díganoslo. Si bien estamos interesados en conocer su consumo de diversas
          drogas, por favor tenga por seguro que esta información será tratada con absoluta confidencialidad.
        </p>
        <p class="text-justify q-mt-xs">
          <span class="text-bold">NOTA: ANTES DE FORMULAR LAS PREGUNTAS, ENTREGUE LAS TARJETAS DE RESPUESTA A LOS PARTICIPANTES </span>
        </p>
        <p class="text-justify q-mt-xs">
          <span class="text-bold">Pregunta 1</span>
        </p>
        <p class="text-justify">
          (Al completar el seguimiento compare por favor las respuestas del participante con las que dio a la P1 del cuestionario basal. Cualquier
          diferencia en estas preguntas debe ser explorada).
        </p>
        <!-- Pregunta 1 -->
        <q-table flat :rows="questions_1" :columns="columns_1" row-key="id" hide-bottom bordered denseflat :pagination="{ rowsPerPage: 0 }">
          <template v-slot:header="props">
            <q-tr :props="props">
              <q-th v-for="col in props.cols" :key="col.name" class="bg-primary text-white">
                <span style="font-size: 14px">{{ col.label }}</span>
              </q-th>
            </q-tr>
          </template>

          <template v-slot:body-cell="props">
            <q-td :props="props" class="q-td" style="max-width: 200px; white-space: normal; text-align: justify">
              <template v-if="props.col.field === 'question'">
                <span style="font-size: 14px">{{ props.row.question }}</span>
              </template>
              <template v-else>
                <q-radio v-model="respuestas_1[props.row.id - 1].respuesta" :val="props.col.value" color="primary" size="sm" />
                <!-- <q-radio v-model="respuestas_1[props.row.id]" :val="props.col.value" color="primary" size="sm" /> -->
              </template>
            </q-td>
          </template>
        </q-table>
        <div class="row text-center q-pr-md" style="border: 1px solid #ccc; width: 100%">
          <p style="font-weight: bold; margin-top: 10px; margin-left: 10px">especifique</p>
          <Input_ class="col-10 q-mt-xs" v-model="HIC111.otros_1" :field="form.otros_1" />
        </div>
        <div class="row">
          <div class="col">
            <p class="text-justify q-mt-lg">
              <span class="text-bold">Compruebe si todas las respuestas son negativas: </span>
            </p>
            <p class="text-justify q-mt-lg">
              <span class="text-bold">“¿Tampoco incluso cuando iba al colegio?” </span>
            </p>
          </div>
          <div class="col">
            <p class="text-justify q-mt-lg">
              <span class="text-bold">Si contestó "No" a todos los ítems, pare la entrevista. </span>
            </p>
            <p class="text-justify q-mt-lg">
              <span class="text-bold"
                >Si contestó "Si" a alguno de estos ítems, siga a la Pregunta 2 para cada sustancia que ha consumido alguna vez.
              </span>
            </p>
          </div>
        </div>
        <p class="text-justify q-mt-xl">
          <span class="text-bold">Pregunta 2</span>
        </p>
        <!--Pregunta 2  -->
        <q-table flat :rows="questions_2" :columns="columns_2" row-key="id" hide-bottom bordered denseflat :pagination="{ rowsPerPage: 0 }">
          <template v-slot:header="props">
            <q-tr :props="props">
              <q-th
                v-for="col in props.cols"
                :key="col.name"
                class="bg-primary text-white"
                :class="col.field === 'question' ? 'col-pregunta-tabla' : ''"
              >
                <span style="font-size: 14px">{{ col.label }}</span>
              </q-th>
            </q-tr>
          </template>

          <template v-slot:body-cell="props">
            <q-td :props="props" :class="props.col.field === 'question' ? 'col-pregunta-tabla' : ''">
              <template v-if="props.col.field === 'question'">
                <span style="font-size: 14px">{{ props.row.question }}</span>
              </template>
              <template v-else>
                <q-radio v-model="respuestas_2[props.row.id - 1].respuesta" :val="props.col.value" color="primary" size="sm" />
              </template>
            </q-td>
          </template>
        </q-table>
        <div class="row text-center q-pr-md" style="border: 1px solid #ccc; width: 100%">
          <p style="font-weight: bold; margin-top: 10px; margin-left: 10px">especifique</p>
          <Input_ class="col-10 q-mt-xs" v-model="HIC111.otros_2" :field="form.otros_2" />
        </div>
        <p class="text-justify q-mt-lg">
          <span class="text-bold">Si ha respondido "Nunca" a todos los ítems en la Pregunta 2, salte a la Pregunta 6. </span>
        </p>
        <p class="text-justify q-mt-lg">
          <span class="text-bold"
            >Si ha consumido alguna de las sustancias de la Pregunta 2 en los últimos tres meses, continúe con las preguntas 3, 4 & 5 para cada una de
            las sustancias que ha consumido.
          </span>
        </p>
        <p class="text-justify q-mt-xl">
          <span class="text-bold">Pregunta 3</span>
        </p>
        <!--Pregunta 3  -->
        <q-table flat :rows="questions_3" :columns="columns_3" row-key="id" hide-bottom bordered denseflat :pagination="{ rowsPerPage: 0 }">
          <template v-slot:header="props">
            <q-tr :props="props">
              <q-th
                v-for="col in props.cols"
                :key="col.name"
                class="bg-primary text-white"
                :class="col.field === 'question' ? 'col-pregunta-tabla' : ''"
              >
                <span style="font-size: 14px">{{ col.label }}</span>
              </q-th>
            </q-tr>
          </template>

          <template v-slot:body-cell="props">
            <q-td :props="props" :class="props.col.field === 'question' ? 'col-pregunta-tabla' : ''">
              <template v-if="props.col.field === 'question'">
                <span style="font-size: 14px">{{ props.row.question }}</span>
              </template>
              <template v-else>
                <q-radio v-model="respuestas_3[props.row.id - 1].respuesta" :val="props.col.value" color="primary" size="sm" />
              </template>
            </q-td>
          </template>
        </q-table>
        <div class="row text-center q-pr-md" style="border: 1px solid #ccc; width: 100%">
          <p style="font-weight: bold; margin-top: 10px; margin-left: 10px">especifique</p>
          <Input_ class="col-10 q-mt-xs" v-model="HIC111.otros_3" :field="form.otros_3" />
        </div>

        <p class="text-justify q-mt-xl">
          <span class="text-bold">Pregunta 4</span>
        </p>
        <!--Pregunta 4  -->
        <q-table flat :rows="questions_4" :columns="columns_4" row-key="id" hide-bottom bordered denseflat :pagination="{ rowsPerPage: 0 }">
          <template v-slot:header="props">
            <q-tr :props="props">
              <q-th
                v-for="col in props.cols"
                :key="col.name"
                class="bg-primary text-white"
                :class="col.field === 'question' ? 'col-pregunta-tabla' : ''"
              >
                <span style="font-size: 14px">{{ col.label }}</span>
              </q-th>
            </q-tr>
          </template>

          <template v-slot:body-cell="props">
            <q-td :props="props" :class="props.col.field === 'question' ? 'col-pregunta-tabla' : ''">
              <template v-if="props.col.field === 'question'">
                <span style="font-size: 14px">{{ props.row.question }}</span>
              </template>
              <template v-else>
                <q-radio v-model="respuestas_4[props.row.id - 1].respuesta" :val="props.col.value" color="primary" size="sm" />
              </template>
            </q-td>
          </template>
        </q-table>
        <div class="row text-center q-pr-md" style="border: 1px solid #ccc; width: 100%">
          <p style="font-weight: bold; margin-top: 10px; margin-left: 10px">especifique</p>
          <Input_ class="col-10 q-mt-xs" v-model="HIC111.otros_4" :field="form.otros_4" />
        </div>

        <p class="text-justify q-mt-xl">
          <span class="text-bold">Pregunta 5</span>
        </p>
        <!--Pregunta 5  -->
        <q-table flat :rows="questions_5" :columns="columns_5" row-key="id" hide-bottom bordered denseflat :pagination="{ rowsPerPage: 0 }">
          <template v-slot:header="props">
            <q-tr :props="props">
              <q-th
                v-for="col in props.cols"
                :key="col.name"
                class="bg-primary text-white"
                :class="col.field === 'question' ? 'col-pregunta-tabla' : ''"
              >
                <span style="font-size: 14px">{{ col.label }}</span>
              </q-th>
            </q-tr>
          </template>

          <template v-slot:body-cell="props">
            <q-td :props="props" :class="props.col.field === 'question' ? 'col-pregunta-tabla' : ''">
              <template v-if="props.col.field === 'question'">
                <span style="font-size: 14px">{{ props.row.question }}</span>
              </template>
              <template v-else>
                <q-radio
                  v-if="props.rowIndex !== 0"
                  v-model="respuestas_5[props.row.id - 1].respuesta"
                  :val="props.col.value"
                  color="primary"
                  size="sm"
                />
              </template>
            </q-td>
          </template>
        </q-table>
        <div class="row text-center q-pr-md" style="border: 1px solid #ccc; width: 100%">
          <p style="font-weight: bold; margin-top: 10px; margin-left: 10px">especifique</p>
          <Input_ class="col-10 q-mt-xs" v-model="HIC111.otros_5" :field="form.otros_5" />
        </div>
        <p class="text-justify q-mt-lg">
          <span class="text-bold"
            >Haga las preguntas 6 y 7 para todas las sustancias que ha consumido alguna vez (es decir, aquellas abordadas en la Pregunta 1).
          </span>
        </p>
        <p class="text-justify q-mt-xl">
          <span class="text-bold">Pregunta 6</span>
        </p>
        <!--Pregunta 6  -->
        <q-table flat :rows="questions_6" :columns="columns_6" row-key="id" hide-bottom bordered denseflat :pagination="{ rowsPerPage: 0 }">
          <template v-slot:header="props">
            <q-tr :props="props">
              <q-th
                v-for="col in props.cols"
                :key="col.name"
                class="bg-primary text-white"
                :class="col.field === 'question' ? 'col-pregunta-tabla' : ''"
              >
                <span style="font-size: 14px">{{ col.label }}</span>
              </q-th>
            </q-tr>
          </template>

          <template v-slot:body-cell="props">
            <q-td :props="props" :class="props.col.field === 'question' ? 'col-pregunta-tabla' : ''">
              <template v-if="props.col.field === 'question'">
                <span style="font-size: 14px">{{ props.row.question }}</span>
              </template>
              <template v-else>
                <q-radio v-model="respuestas_6[props.row.id - 1].respuesta" :val="props.col.value" color="primary" size="sm" />
              </template>
            </q-td>
          </template>
        </q-table>
        <div class="row text-center q-pr-md" style="border: 1px solid #ccc; width: 100%">
          <p style="font-weight: bold; margin-top: 10px; margin-left: 10px">especifique</p>
          <Input_ class="col-10 q-mt-xs" v-model="HIC111.otros_6" :field="form.otros_6" />
        </div>
        <p class="text-justify q-mt-xl">
          <span class="text-bold">Pregunta 7</span>
        </p>
        <!--Pregunta 7  -->
        <q-table flat :rows="questions_7" :columns="columns_7" row-key="id" hide-bottom bordered denseflat :pagination="{ rowsPerPage: 0 }">
          <template v-slot:header="props">
            <q-tr :props="props">
              <q-th
                v-for="col in props.cols"
                :key="col.name"
                class="bg-primary text-white"
                :class="col.field === 'question' ? 'col-pregunta-tabla' : ''"
              >
                <span style="font-size: 14px">{{ col.label }}</span>
              </q-th>
            </q-tr>
          </template>

          <template v-slot:body-cell="props">
            <q-td :props="props" :class="props.col.field === 'question' ? 'col-pregunta-tabla' : ''">
              <template v-if="props.col.field === 'question'">
                <span style="font-size: 14px">{{ props.row.question }}</span>
              </template>
              <template v-else>
                <q-radio v-model="respuestas_7[props.row.id - 1].respuesta" :val="props.col.value" color="primary" size="sm" />
              </template>
            </q-td>
          </template>
        </q-table>
        <div class="row text-center q-pr-md" style="border: 1px solid #ccc; width: 100%">
          <p style="font-weight: bold; margin-top: 10px; margin-left: 10px">especifique</p>
          <Input_ class="col-10 q-mt-xs" v-model="HIC111.otros_7" :field="form.otros_7" />
        </div>
        <p class="text-justify q-mt-xl">
          <span class="text-bold">Pregunta 8</span>
        </p>
        <!--Pregunta 8  -->
        <q-table flat :rows="questions_8" :columns="columns_8" row-key="id" hide-bottom bordered denseflat :pagination="{ rowsPerPage: 0 }">
          <template v-slot:header="props">
            <q-tr :props="props">
              <q-th
                v-for="col in props.cols"
                :key="col.name"
                class="bg-primary text-white"
                :class="col.field === 'question' ? 'col-pregunta-tabla' : ''"
              >
                <span style="font-size: 14px">{{ col.label }}</span>
              </q-th>
            </q-tr>
          </template>

          <template v-slot:body-cell="props">
            <q-td :props="props" :class="props.col.field === 'question' ? 'col-pregunta-tabla' : ''">
              <template v-if="props.col.field === 'question'">
                <span style="font-size: 14px">{{ props.row.question }}</span>
              </template>
              <template v-else>
                <q-radio v-model="preg_8[props.row.id]" :val="props.col.value" color="primary" size="sm" />
              </template>
            </q-td>
          </template>
        </q-table>
        <div class="q-mt-lg">
          <p class="text-center">
            <span class="text-bold">NOTA IMPORTANTE</span>
          </p>
          <p class="text-justify">
            A los pacientes que se han inyectado drogas en los últimos 3 meses se les debe preguntar sobre su patrón de inyección en este período,
            para determinar los niveles de riesgo y el mejor tipo de intervención.
          </p>
        </div>
        <div class="q-mt-lg">
          <p class="text-justify text-bold">Requiere mayor evaluación y tratamiento más intensivo *</p>
        </div>

        <div class="q-mt-lg">
          <p class="text-justify text-bold">INTERPRETACIÓN DE LOS RESULTADOS</p>
        </div>
        <p class="text-justify">
          Para cada sustancia (etiquetadas de la a. la j.) sume las puntuaciones de las preguntas 2 a la 7, ambas inclusive. No incluya los resultados
          ni de la pregunta 1 ni de la 8 en esta puntuación. Por ejemplo, la puntuación para el cannabis se calcula como: P2c + P3c + P4c + P5c + P6c
          + P7c Note que la P5 para el tabaco no está codificada, y se calcula como: P2a + P3a + P4a + P6a + P7a
        </p>
        <div class="q-mt-lg">
          <p class="text-justify text-bold">EL TIPO DE INTERVENCIÓN SE DETERMINA POR LA PUNTUACIÓN ESPECÍFICA DEL PACIENTE PARA CADA SUSTANCIA</p>
        </div>
        <!-- tabla puntuacion -->
        <div class="row" style="width: 100%">
          <div class="text-center q-pr-md" style="border: 1px solid #ccc; background-color: #123d7d; width: 15%">
            <p style="font-weight: bold; margin-top: 10px; color: white">Sustancia</p>
          </div>
          <div class="text-center q-pr-md" style="border: 1px solid #ccc; background-color: #123d7d; width: 35%">
            <p style="font-weight: bold; margin-top: 10px; color: white">Registre la puntuación para sustancia específica</p>
          </div>
          <div class="text-center q-pr-md" style="border: 1px solid #ccc; background-color: #123d7d; width: 15%">
            <p style="font-weight: bold; margin-top: 10px; color: white">Sin intervención</p>
          </div>
          <div class="text-center q-pr-md" style="border: 1px solid #ccc; background-color: #123d7d; width: 15%">
            <p style="font-weight: bold; margin-top: 10px; color: white">Intervención breve</p>
          </div>
          <div class="text-center q-pr-md" style="border: 1px solid #ccc; background-color: #123d7d; width: 20%">
            <p style="font-weight: bold; margin-top: 10px; color: white">Tratamiento más intensivo*</p>
          </div>

          <div class="q-pr-md" style="border: 1px solid #ccc; width: 15%">
            <p style="font-weight: bold; margin-top: 10px; padding-left: 10px">a. Tabaco</p>
          </div>
          <div class="q-pr-md" style="border: 1px solid #ccc; width: 35%">
            <p style="font-weight: bold; margin-top: 10px; padding-left: 10px">{{ totalTabaco }}</p>
          </div>
          <div class="q-pr-md" style="border: 1px solid #ccc; width: 15%">
            <p style="font-weight: bold; margin-top: 10px; padding-left: 10px">0 - 3</p>
          </div>
          <div class="q-pr-md" style="border: 1px solid #ccc; width: 15%">
            <p style="font-weight: bold; margin-top: 10px; padding-left: 10px">4 - 26</p>
          </div>
          <div class="q-pr-md" style="border: 1px solid #ccc; width: 20%">
            <p style="font-weight: bold; margin-top: 10px; padding-left: 10px">27+</p>
          </div>

          <div class="q-pr-md" style="border: 1px solid #ccc; width: 15%">
            <p style="font-weight: bold; margin-top: 10px; padding-left: 10px">b. Alcohol</p>
          </div>
          <div class="q-pr-md" style="border: 1px solid #ccc; width: 35%">
            <p style="font-weight: bold; margin-top: 10px; padding-left: 10px">{{ totalAlcohol }}</p>
          </div>
          <div class="q-pr-md" style="border: 1px solid #ccc; width: 15%">
            <p style="font-weight: bold; margin-top: 10px; padding-left: 10px">0 - 3</p>
          </div>
          <div class="q-pr-md" style="border: 1px solid #ccc; width: 15%">
            <p style="font-weight: bold; margin-top: 10px; padding-left: 10px">11 - 26</p>
          </div>
          <div class="q-pr-md" style="border: 1px solid #ccc; width: 20%">
            <p style="font-weight: bold; margin-top: 10px; padding-left: 10px">27+</p>
          </div>

          <div class="q-pr-md" style="border: 1px solid #ccc; width: 15%">
            <p style="font-weight: bold; margin-top: 10px; padding-left: 10px">c. Cannabis</p>
          </div>
          <div class="q-pr-md" style="border: 1px solid #ccc; width: 35%">
            <p style="font-weight: bold; margin-top: 10px; padding-left: 10px">{{ totalCannabis }}</p>
          </div>
          <div class="q-pr-md" style="border: 1px solid #ccc; width: 15%">
            <p style="font-weight: bold; margin-top: 10px; padding-left: 10px">0 - 3</p>
          </div>
          <div class="q-pr-md" style="border: 1px solid #ccc; width: 15%">
            <p style="font-weight: bold; margin-top: 10px; padding-left: 10px">4 - 26</p>
          </div>
          <div class="q-pr-md" style="border: 1px solid #ccc; width: 20%">
            <p style="font-weight: bold; margin-top: 10px; padding-left: 10px">27+</p>
          </div>

          <div class="q-pr-md" style="border: 1px solid #ccc; width: 15%">
            <p style="font-weight: bold; margin-top: 10px; padding-left: 10px">d. Cocaína</p>
          </div>
          <div class="q-pr-md" style="border: 1px solid #ccc; width: 35%">
            <p style="font-weight: bold; margin-top: 10px; padding-left: 10px">{{ totalCocaina }}</p>
          </div>
          <div class="q-pr-md" style="border: 1px solid #ccc; width: 15%">
            <p style="font-weight: bold; margin-top: 10px; padding-left: 10px">0 - 3</p>
          </div>
          <div class="q-pr-md" style="border: 1px solid #ccc; width: 15%">
            <p style="font-weight: bold; margin-top: 10px; padding-left: 10px">4 - 26</p>
          </div>
          <div class="q-pr-md" style="border: 1px solid #ccc; width: 20%">
            <p style="font-weight: bold; margin-top: 10px; padding-left: 10px">27+</p>
          </div>
          <!--  -->
          <div class="q-pr-md" style="border: 1px solid #ccc; width: 15%">
            <p style="font-weight: bold; margin-top: 10px; padding-left: 10px">e. Anfetaminas</p>
          </div>
          <div class="q-pr-md" style="border: 1px solid #ccc; width: 35%">
            <p style="font-weight: bold; margin-top: 10px; padding-left: 10px">{{ totalAnfetaminas }}</p>
          </div>
          <div class="q-pr-md" style="border: 1px solid #ccc; width: 15%">
            <p style="font-weight: bold; margin-top: 10px; padding-left: 10px">0 - 3</p>
          </div>
          <div class="q-pr-md" style="border: 1px solid #ccc; width: 15%">
            <p style="font-weight: bold; margin-top: 10px; padding-left: 10px">4 - 26</p>
          </div>
          <div class="q-pr-md" style="border: 1px solid #ccc; width: 20%">
            <p style="font-weight: bold; margin-top: 10px; padding-left: 10px">27+</p>
          </div>
          <!--  -->
          <div class="q-pr-md" style="border: 1px solid #ccc; width: 15%">
            <p style="font-weight: bold; margin-top: 10px; padding-left: 10px">f. Inhalantes</p>
          </div>
          <div class="q-pr-md" style="border: 1px solid #ccc; width: 35%">
            <p style="font-weight: bold; margin-top: 10px; padding-left: 10px">{{ totalInhalantes }}</p>
          </div>
          <div class="q-pr-md" style="border: 1px solid #ccc; width: 15%">
            <p style="font-weight: bold; margin-top: 10px; padding-left: 10px">0 - 3</p>
          </div>
          <div class="q-pr-md" style="border: 1px solid #ccc; width: 15%">
            <p style="font-weight: bold; margin-top: 10px; padding-left: 10px">4 - 26</p>
          </div>
          <div class="q-pr-md" style="border: 1px solid #ccc; width: 20%">
            <p style="font-weight: bold; margin-top: 10px; padding-left: 10px">27+</p>
          </div>
          <!--  -->
          <div class="q-pr-md" style="border: 1px solid #ccc; width: 15%">
            <p style="font-weight: bold; margin-top: 10px; padding-left: 10px">g. Sedantes</p>
          </div>
          <div class="q-pr-md" style="border: 1px solid #ccc; width: 35%">
            <p style="font-weight: bold; margin-top: 10px; padding-left: 10px">{{ totalSedantes }}</p>
          </div>
          <div class="q-pr-md" style="border: 1px solid #ccc; width: 15%">
            <p style="font-weight: bold; margin-top: 10px; padding-left: 10px">0 - 3</p>
          </div>
          <div class="q-pr-md" style="border: 1px solid #ccc; width: 15%">
            <p style="font-weight: bold; margin-top: 10px; padding-left: 10px">4 - 26</p>
          </div>
          <div class="q-pr-md" style="border: 1px solid #ccc; width: 20%">
            <p style="font-weight: bold; margin-top: 10px; padding-left: 10px">27+</p>
          </div>
          <!--  -->
          <div class="q-pr-md" style="border: 1px solid #ccc; width: 15%">
            <p style="font-weight: bold; margin-top: 10px; padding-left: 10px">h. Alucinógenos</p>
          </div>
          <div class="q-pr-md" style="border: 1px solid #ccc; width: 35%">
            <p style="font-weight: bold; margin-top: 10px; padding-left: 10px">{{ totalAlucinogenos }}</p>
          </div>
          <div class="q-pr-md" style="border: 1px solid #ccc; width: 15%">
            <p style="font-weight: bold; margin-top: 10px; padding-left: 10px">0 - 3</p>
          </div>
          <div class="q-pr-md" style="border: 1px solid #ccc; width: 15%">
            <p style="font-weight: bold; margin-top: 10px; padding-left: 10px">4 - 26</p>
          </div>
          <div class="q-pr-md" style="border: 1px solid #ccc; width: 20%">
            <p style="font-weight: bold; margin-top: 10px; padding-left: 10px">27+</p>
          </div>
          <!--  -->
          <div class="q-pr-md" style="border: 1px solid #ccc; width: 15%">
            <p style="font-weight: bold; margin-top: 10px; padding-left: 10px">i. Opiáceos</p>
          </div>
          <div class="q-pr-md" style="border: 1px solid #ccc; width: 35%">
            <p style="font-weight: bold; margin-top: 10px; padding-left: 10px">{{ totalOpiaceos }}</p>
          </div>
          <div class="q-pr-md" style="border: 1px solid #ccc; width: 15%">
            <p style="font-weight: bold; margin-top: 10px; padding-left: 10px">0 - 3</p>
          </div>
          <div class="q-pr-md" style="border: 1px solid #ccc; width: 15%">
            <p style="font-weight: bold; margin-top: 10px; padding-left: 10px">4 - 26</p>
          </div>
          <div class="q-pr-md" style="border: 1px solid #ccc; width: 20%">
            <p style="font-weight: bold; margin-top: 10px; padding-left: 10px">27+</p>
          </div>
          <!--  -->
          <div class="q-pr-md" style="border: 1px solid #ccc; width: 15%">
            <p style="font-weight: bold; margin-top: 10px; padding-left: 10px">j. Otras drogas</p>
          </div>
          <div class="q-pr-md" style="border: 1px solid #ccc; width: 35%">
            <p style="font-weight: bold; margin-top: 10px; padding-left: 10px">{{ totalOtrasDrogas }}</p>
          </div>
          <div class="q-pr-md" style="border: 1px solid #ccc; width: 15%">
            <p style="font-weight: bold; margin-top: 10px; padding-left: 10px">0 - 3</p>
          </div>
          <div class="q-pr-md" style="border: 1px solid #ccc; width: 15%">
            <p style="font-weight: bold; margin-top: 10px; padding-left: 10px">4 - 26</p>
          </div>
          <div class="q-pr-md" style="border: 1px solid #ccc; width: 20%">
            <p style="font-weight: bold; margin-top: 10px; padding-left: 10px">27+</p>
          </div>
          <!--  -->
        </div>
        <div class="text-justify q-mt-lg">
          <p class="text-justify">
            Alcohol, Smoking and Substance Involvement Screening Test (OMS ASSIST V3.0) TARJETAS DE RESPUESTA para los Pacientes
          </p>
        </div>
        <div class="q-mt-lg">
          <p class="text-center text-bold">
            Alcohol, Smoking and Substance Involvement Screening Test (OMS ASSIST V3.0) TARJETAS DE RESPUESTA para los Pacientes
          </p>
        </div>
        <div class="row" style="width: 100%">
          <div class="text-center q-pr-md" style="border: 1px solid #ccc; background-color: #123d7d; width: 40%">
            <p style="font-weight: bold; margin-top: 10px; color: white">Sustancia</p>
          </div>
          <div class="text-center q-pr-md" style="border: 1px solid #ccc; background-color: #123d7d; width: 30%">
            <p style="font-weight: bold; margin-top: 10px; color: white">Puntuación</p>
          </div>
          <div class="text-center q-pr-md" style="border: 1px solid #ccc; background-color: #123d7d; width: 30%">
            <p style="font-weight: bold; margin-top: 10px; color: white">Nivel de riesgo</p>
          </div>
          <div class="q-pr-md" style="border: 1px solid #ccc; width: 40%">
            <p style="font-weight: bold; margin-top: 10px; padding-left: 10px">a. Productos derivados del tabaco</p>
          </div>
          <div class="q-pr-md" style="border: 1px solid #ccc; width: 30%">
            <p style="font-weight: bold; margin-top: 10px; padding-left: 10px">{{ totalTabaco }}</p>
          </div>
          <div class="q-pr-md" style="border: 1px solid #ccc; width: 30%">
            <div class="row q-mt-md">
              <p style="font-weight: bold; padding-left: 10px">0 - 3 = Bajo,</p>
              <p style="font-weight: bold; padding-left: 10px">4 - 26 = Moderado,</p>
              <p style="font-weight: bold; padding-left: 10px">27+ = Alto</p>
            </div>
          </div>
          <div class="q-pr-md" style="border: 1px solid #ccc; width: 40%">
            <p style="font-weight: bold; margin-top: 10px; padding-left: 10px">b. Bebidas alcohólicas</p>
          </div>
          <div class="q-pr-md" style="border: 1px solid #ccc; width: 30%">
            <p style="font-weight: bold; margin-top: 10px; padding-left: 10px">{{ totalAlcohol }}</p>
          </div>
          <div class="q-pr-md" style="border: 1px solid #ccc; width: 30%">
            <div class="row q-mt-md">
              <p style="font-weight: bold; padding-left: 10px">0 - 10 = Bajo,</p>
              <p style="font-weight: bold; padding-left: 10px">11 - 26 = Moderado,</p>
              <p style="font-weight: bold; padding-left: 10px">27+ = Alto</p>
            </div>
          </div>
          <div class="q-pr-md" style="border: 1px solid #ccc; width: 40%">
            <p style="font-weight: bold; margin-top: 10px; padding-left: 10px">c. Cannabis</p>
          </div>
          <div class="q-pr-md" style="border: 1px solid #ccc; width: 30%">
            <p style="font-weight: bold; margin-top: 10px; padding-left: 10px">{{ totalCannabis }}</p>
          </div>
          <div class="q-pr-md" style="border: 1px solid #ccc; width: 30%">
            <div class="row q-mt-md">
              <p style="font-weight: bold; padding-left: 10px">0 - 3 = Bajo,</p>
              <p style="font-weight: bold; padding-left: 10px">4 - 26 = Moderado,</p>
              <p style="font-weight: bold; padding-left: 10px">27+ = Alto</p>
            </div>
          </div>
          <div class="q-pr-md" style="border: 1px solid #ccc; width: 40%">
            <p style="font-weight: bold; margin-top: 10px; padding-left: 10px">d. Cocaína</p>
          </div>
          <div class="q-pr-md" style="border: 1px solid #ccc; width: 30%">
            <p style="font-weight: bold; margin-top: 10px; padding-left: 10px">{{ totalCocaina }}</p>
          </div>
          <div class="q-pr-md" style="border: 1px solid #ccc; width: 30%">
            <div class="row q-mt-md">
              <p style="font-weight: bold; padding-left: 10px">0 - 3 = Bajo,</p>
              <p style="font-weight: bold; padding-left: 10px">4 - 26 = Moderado,</p>
              <p style="font-weight: bold; padding-left: 10px">27+ = Alto</p>
            </div>
          </div>
          <div class="q-pr-md" style="border: 1px solid #ccc; width: 40%">
            <p style="font-weight: bold; margin-top: 10px; padding-left: 10px">e. Estimulantes de tipo anfetamínico</p>
          </div>
          <div class="q-pr-md" style="border: 1px solid #ccc; width: 30%">
            <p style="font-weight: bold; margin-top: 10px; padding-left: 10px">{{ totalAnfetaminas }}</p>
          </div>
          <div class="q-pr-md" style="border: 1px solid #ccc; width: 30%">
            <div class="row q-mt-md">
              <p style="font-weight: bold; padding-left: 10px">0 - 3 = Bajo,</p>
              <p style="font-weight: bold; padding-left: 10px">4 - 26 = Moderado,</p>
              <p style="font-weight: bold; padding-left: 10px">27+ = Alto</p>
            </div>
          </div>
          <div class="q-pr-md" style="border: 1px solid #ccc; width: 40%">
            <p style="font-weight: bold; margin-top: 10px; padding-left: 10px">f. Inhalantes</p>
          </div>
          <div class="q-pr-md" style="border: 1px solid #ccc; width: 30%">
            <p style="font-weight: bold; margin-top: 10px; padding-left: 10px">{{ totalInhalantes }}</p>
          </div>
          <div class="q-pr-md" style="border: 1px solid #ccc; width: 30%">
            <div class="row q-mt-md">
              <p style="font-weight: bold; padding-left: 10px">0 - 3 = Bajo,</p>
              <p style="font-weight: bold; padding-left: 10px">4 - 26 = Moderado,</p>
              <p style="font-weight: bold; padding-left: 10px">27+ = Alto</p>
            </div>
          </div>
          <div class="q-pr-md" style="border: 1px solid #ccc; width: 40%">
            <p style="font-weight: bold; margin-top: 10px; padding-left: 10px">g. Sedantes o pastillas para dormir</p>
          </div>
          <div class="q-pr-md" style="border: 1px solid #ccc; width: 30%">
            <p style="font-weight: bold; margin-top: 10px; padding-left: 10px">{{ totalSedantes }}</p>
          </div>
          <div class="q-pr-md" style="border: 1px solid #ccc; width: 30%">
            <div class="row q-mt-md">
              <p style="font-weight: bold; padding-left: 10px">0 - 3 = Bajo,</p>
              <p style="font-weight: bold; padding-left: 10px">4 - 26 = Moderado,</p>
              <p style="font-weight: bold; padding-left: 10px">27+ = Alto</p>
            </div>
          </div>
          <div class="q-pr-md" style="border: 1px solid #ccc; width: 40%">
            <p style="font-weight: bold; margin-top: 10px; padding-left: 10px">h. Alucinógenos</p>
          </div>
          <div class="q-pr-md" style="border: 1px solid #ccc; width: 30%">
            <p style="font-weight: bold; margin-top: 10px; padding-left: 10px">{{ totalAlucinogenos }}</p>
          </div>
          <div class="q-pr-md" style="border: 1px solid #ccc; width: 30%">
            <div class="row q-mt-md">
              <p style="font-weight: bold; padding-left: 10px">0 - 3 = Bajo,</p>
              <p style="font-weight: bold; padding-left: 10px">4 - 26 = Moderado,</p>
              <p style="font-weight: bold; padding-left: 10px">27+ = Alto</p>
            </div>
          </div>
          <div class="q-pr-md" style="border: 1px solid #ccc; width: 40%">
            <p style="font-weight: bold; margin-top: 10px; padding-left: 10px">i. Opiáceos</p>
          </div>
          <div class="q-pr-md" style="border: 1px solid #ccc; width: 30%">
            <p style="font-weight: bold; margin-top: 10px; padding-left: 10px">{{ totalOpiaceos }}</p>
          </div>
          <div class="q-pr-md" style="border: 1px solid #ccc; width: 30%">
            <div class="row q-mt-md">
              <p style="font-weight: bold; padding-left: 10px">0 - 3 = Bajo,</p>
              <p style="font-weight: bold; padding-left: 10px">4 - 26 = Moderado,</p>
              <p style="font-weight: bold; padding-left: 10px">27+ = Alto</p>
            </div>
          </div>
        </div>
        <div class="q-mt-lg">
          <p class="text-center">
            <span class="text-bold">¿Qué significan sus puntuaciones?</span>
          </p>
          <p>
            <span class="text-bold">BAJO</span>
          </p>
          <p class="text-justify">Su actual patrón de consumo representa un riesgo bajo sobre su salud y de otros problemas.</p>
          <p>
            <span class="text-bold">MODERADO</span>
          </p>
          <p class="text-justify">
            Usted presenta riesgo para su salud y de otros tipos de problemas derivados de su actual patrón de consumo de sustancias.
          </p>
          <p>
            <span class="text-bold">ALTO</span>
          </p>
          <p class="text-justify">
            Usted presenta un riesgo elevado de experimentar problemas graves (de salud, sociales, económicos, legales, de pareja u otros) derivado de
            su patrón.
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
        :disable="opcion_hc111 ? false : true"
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
import { impresionHIC111, impresion, generarArchivo } from "@/impresiones";
import { ref, defineAsyncComponent, reactive, computed, onMounted } from "vue";
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
const HIC111 = reactive({
  fecha: "",
  otros_1: "",
  otros_2: "",
  otros_3: "",
  otros_4: "",
  otros_5: "",
  otros_6: "",
  otros_7: "",
});
const preg_8 = reactive({
  1: "",
});
const form = ref({
  otros_1: {
    id: "otros_1",
    maxlength: "200",
    label: "",
    campo_abierto: true,
    placeholder: "Escribe",
  },
  otros_2: {
    id: "otros_2",
    maxlength: "200",
    label: "",
    campo_abierto: true,
    placeholder: "Escribe",
  },
  otros_3: {
    id: "otros_3",
    maxlength: "200",
    label: "",
    campo_abierto: true,
    placeholder: "Escribe",
  },
  otros_4: {
    id: "otros_4",
    maxlength: "200",
    label: "",
    campo_abierto: true,
    placeholder: "Escribe",
  },
  otros_5: {
    id: "otros_5",
    maxlength: "200",
    label: "",
    campo_abierto: true,
    placeholder: "Escribe",
  },
  otros_6: {
    id: "otros_6",
    maxlength: "200",
    label: "",
    campo_abierto: true,
    placeholder: "Escribe",
  },
  otros_7: {
    id: "otros_7",
    maxlength: "200",
    label: "",
    campo_abierto: true,
    placeholder: "Escribe",
  },
});
const questions_1 = [
  { id: 1, question: "a. Tabaco (cigarrillos, cigarros habanos, tabaco de mascar, pipa, etc.)." },
  { id: 2, question: "b. Bebidas alcohólicas (cerveza, vino, licores, destilados, etc.)." },
  { id: 3, question: "c. Cannabis (marihuana, costo, hierba, hashish, etc.)." },
  { id: 4, question: "d. Cocaína (coca, farlopa, crack, base, etc.)." },
  { id: 5, question: "e. Anfetaminas u otro tipo de estimulantes (speed, éxtasis, píldoras adelgazantes, etc.)." },
  { id: 6, question: "f. Inhalantes (colas, gasolina/nafta, pegamento, etc.)." },
  {
    id: 7,
    question: "g. Tranquilizantes o pastillas para dormir (valium/diazepam, Trankimazin/Alprazolam/Xanax, Orfidal/Lorazepam, Rohipnol, etc.).",
  },
  { id: 8, question: "h. Alucinógenos (LSD, ácidos, ketamina, PCP, etc.)." },
  { id: 9, question: "i. Opiáceos (heroína, metadona, codeína, morfina, dolantina/petidina, etc.)." },
  { id: 10, question: "j. Otros " },
];

const columns_1 = [
  {
    name: "question",
    label: "A lo largo de su vida, ¿Cuál de las siguientes sustancias ha consumido alguna vez? (SOLO PARA USOS NO-MÉDICOS)",
    align: "left",
    field: "question",
  },
  { name: "0", label: "(0) No", align: "center", field: "0", value: 0 },
  { name: "3", label: "(3) Si", align: "center", field: "3", value: 3 },
];
const questions_2 = [
  { id: 1, question: "a. Tabaco (cigarrillos, cigarros habanos, tabaco de mascar, pipa, etc.)." },
  { id: 2, question: "b. Bebidas alcohólicas (cerveza, vino, licores, destilados, etc.)." },
  { id: 3, question: "c. Cannabis (marihuana, costo, hierba, hashish, etc.)." },
  { id: 4, question: "d. Cocaína (coca, farlopa, crack, base, etc.)." },
  { id: 5, question: "e. Anfetaminas u otro tipo de estimulantes (speed, éxtasis, píldoras adelgazantes, etc.)." },
  { id: 6, question: "f. Inhalantes (colas, gasolina/nafta, pegamento, etc.)." },
  {
    id: 7,
    question: "g. Tranquilizantes o pastillas para dormir (valium/diazepam, Trankimazin/Alprazolam/Xanax, Orfidal/Lorazepam, Rohipnol, etc.).",
  },
  { id: 8, question: "h. Alucinógenos (LSD, ácidos, ketamina, PCP, etc.)." },
  { id: 9, question: "i. Opiáceos (heroína, metadona, codeína, morfina, dolantina/petidina, etc.)." },
  { id: 10, question: "j. Otros " },
];

const columns_2 = [
  {
    name: "question",
    label: "¿Con qué frecuencia ha consumido las sustancias que ha mencionado en los últimos tres meses, (PRIMERA DROGA, SEGUNDA DROGA, ETC)?",
    align: "left",
    field: "question",
  },
  { name: "0", label: "(0) Nunca", align: "center", field: "0", value: 0 },
  { name: "2", label: "(2) 1 ó 2 veces", align: "center", field: "2", value: 2 },
  { name: "3", label: "(3) Cada mes", align: "center", field: "3", value: 3 },
  { name: "4", label: "(4) Cada semana", align: "center", field: "4", value: 4 },
  { name: "6", label: "(6) A diario o casi a diario", align: "center", field: "6", value: 6 },
];
const questions_3 = [
  { id: 1, question: "a. Tabaco (cigarrillos, cigarros habanos, tabaco de mascar, pipa, etc.)." },
  { id: 2, question: "b. Bebidas alcohólicas (cerveza, vino, licores, destilados, etc.)." },
  { id: 3, question: "c. Cannabis (marihuana, costo, hierba, hashish, etc.)." },
  { id: 4, question: "d. Cocaína (coca, farlopa, crack, base, etc.)." },
  { id: 5, question: "e. Anfetaminas u otro tipo de estimulantes (speed, éxtasis, píldoras adelgazantes, etc.)." },
  { id: 6, question: "f. Inhalantes (colas, gasolina/nafta, pegamento, etc.)." },
  {
    id: 7,
    question: "g. Tranquilizantes o pastillas para dormir (valium/diazepam, Trankimazin/Alprazolam/Xanax, Orfidal/Lorazepam, Rohipnol, etc.).",
  },
  { id: 8, question: "h. Alucinógenos (LSD, ácidos, ketamina, PCP, etc.)." },
  { id: 9, question: "i. Opiáceos (heroína, metadona, codeína, morfina, dolantina/petidina, etc.)." },
  { id: 10, question: "j. Otros " },
];

const columns_3 = [
  {
    name: "question",
    label: "En los últimos tres meses, ¿con qué frecuencia ha tenido deseos fuertes o ansias de consumir (PRIMERA DROGA, SEGUNDA DROGA, ETC)?",
    align: "left",
    field: "question",
  },
  { name: "0", label: "(0) Nunca", align: "center", field: "0", value: 0 },
  { name: "3", label: "(3) 1 ó 2 veces", align: "center", field: "3", value: 3 },
  { name: "4", label: "(4) Cada mes", align: "center", field: "4", value: 4 },
  { name: "5", label: "(5) Cada semana", align: "center", field: "5", value: 5 },
  { name: "6", label: "(6) A diario o casi a diario", align: "center", field: "6", value: 6 },
];

const questions_4 = [
  { id: 1, question: "a. Tabaco (cigarrillos, cigarros habanos, tabaco de mascar, pipa, etc.)." },
  { id: 2, question: "b. Bebidas alcohólicas (cerveza, vino, licores, destilados, etc.)." },
  { id: 3, question: "c. Cannabis (marihuana, costo, hierba, hashish, etc.)." },
  { id: 4, question: "d. Cocaína (coca, farlopa, crack, base, etc.)." },
  { id: 5, question: "e. Anfetaminas u otro tipo de estimulantes (speed, éxtasis, píldoras adelgazantes, etc.)." },
  { id: 6, question: "f. Inhalantes (colas, gasolina/nafta, pegamento, etc.)." },
  {
    id: 7,
    question: "g. Tranquilizantes o pastillas para dormir (valium/diazepam, Trankimazin/Alprazolam/Xanax, Orfidal/Lorazepam, Rohipnol, etc.).",
  },
  { id: 8, question: "h. Alucinógenos (LSD, ácidos, ketamina, PCP, etc.)." },
  { id: 9, question: "i. Opiáceos (heroína, metadona, codeína, morfina, dolantina/petidina, etc.)." },
  { id: 10, question: "j. Otros " },
];

const columns_4 = [
  {
    name: "question",
    label:
      "En los últimos tres meses, ¿con qué frecuencia le ha llevado su consumo de (PRIMERA DROGA, SEGUNDA DROGA, ETC) a problemas de salud, sociales, legales o económicos?",
    align: "left",
    field: "question",
  },
  { name: "0", label: "(0) Nunca", align: "center", field: "0", value: 0 },
  { name: "4", label: "(4) 1 ó 2 veces", align: "center", field: "4", value: 4 },
  { name: "5", label: "(5) Cada mes", align: "center", field: "5", value: 5 },
  { name: "6", label: "(6) Cada semana", align: "center", field: "6", value: 6 },
  { name: "7", label: "(7) A diario o casi a diario", align: "center", field: "7", value: 7 },
];

const questions_5 = [
  { id: 1, question: "a. Tabaco." },
  { id: 2, question: "b. Bebidas alcohólicas (cerveza, vino, licores, destilados, etc.)." },
  { id: 3, question: "c. Cannabis (marihuana, costo, hierba, hashish, etc.)." },
  { id: 4, question: "d. Cocaína (coca, farlopa, crack, base, etc.)." },
  { id: 5, question: "e. Anfetaminas u otro tipo de estimulantes (speed, éxtasis, píldoras adelgazantes, etc.)." },
  { id: 6, question: "f. Inhalantes (colas, gasolina/nafta, pegamento, etc.)." },
  {
    id: 7,
    question: "g. Tranquilizantes o pastillas para dormir (valium/diazepam, Trankimazin/Alprazolam/Xanax, Orfidal/Lorazepam, Rohipnol, etc.).",
  },
  { id: 8, question: "h. Alucinógenos (LSD, ácidos, ketamina, PCP, etc.)." },
  { id: 9, question: "i. Opiáceos (heroína, metadona, codeína, morfina, dolantina/petidina, etc.)." },
  { id: 10, question: "j. Otros " },
];

const columns_5 = [
  {
    name: "question",
    label: "En los últimos tres meses, ¿con qué frecuencia no pudo atender sus obligaciones por el consumo de (PRIMERA DROGA, SEGUNDA DROGA, ETC)?",
    align: "left",
    field: "question",
  },
  { name: "0", label: "(0) Nunca", align: "center", field: "0", value: 0 },
  { name: "5", label: "(5) 1 ó 2 veces", align: "center", field: "5", value: 5 },
  { name: "6", label: "(6) Cada mes", align: "center", field: "6", value: 6 },
  { name: "7", label: "(7) Cada semana", align: "center", field: "7", value: 7 },
  { name: "8", label: "(8) A diario o casi a diario", align: "center", field: "8", value: 8 },
];

const questions_6 = [
  { id: 1, question: "a. Tabaco (cigarrillos, cigarros habanos, tabaco de mascar, pipa, etc.)." },
  { id: 2, question: "b. Bebidas alcohólicas (cerveza, vino, licores, destilados, etc.)." },
  { id: 3, question: "c. Cannabis (marihuana, costo, hierba, hashish, etc.)." },
  { id: 4, question: "d. Cocaína (coca, farlopa, crack, base, etc.)." },
  { id: 5, question: "e. Anfetaminas u otro tipo de estimulantes (speed, éxtasis, píldoras adelgazantes, etc.)." },
  { id: 6, question: "f. Inhalantes (colas, gasolina/nafta, pegamento, etc.)." },
  {
    id: 7,
    question: "g. Tranquilizantes o pastillas para dormir (valium/diazepam, Trankimazin/Alprazolam/Xanax, Orfidal/Lorazepam, Rohipnol, etc.).",
  },
  { id: 8, question: "h. Alucinógenos (LSD, ácidos, ketamina, PCP, etc.)." },
  { id: 9, question: "i. Opiáceos (heroína, metadona, codeína, morfina, dolantina/petidina, etc.)." },
  { id: 10, question: "j. Otros " },
];

const columns_6 = [
  {
    name: "question",
    label: "Un amigo, un familiar o alguien más, ¿alguna vez ha mostrado preocupación por su consumo de (PRIMERA DROGA, SEGUNDA DROGA, ETC)?",
    align: "left",
    field: "question",
  },
  { name: "0", label: "(0) Nunca", align: "center", field: "0", value: 0 },
  { name: "6", label: "(6) Si, en los últimos 3 meses", align: "center", field: "6", value: 6 },
  { name: "3", label: "(3) Sí, pero no en los últimos 3 meses", align: "center", field: "3", value: 3 },
];

const questions_7 = [
  { id: 1, question: "a. Tabaco (cigarrillos, cigarros habanos, tabaco de mascar, pipa, etc.)." },
  { id: 2, question: "b. Bebidas alcohólicas (cerveza, vino, licores, destilados, etc.)." },
  { id: 3, question: "c. Cannabis (marihuana, costo, hierba, hashish, etc.)." },
  { id: 4, question: "d. Cocaína (coca, farlopa, crack, base, etc.)." },
  { id: 5, question: "e. Anfetaminas u otro tipo de estimulantes (speed, éxtasis, píldoras adelgazantes, etc.)." },
  { id: 6, question: "f. Inhalantes (colas, gasolina/nafta, pegamento, etc.)." },
  {
    id: 7,
    question: "g. Tranquilizantes o pastillas para dormir (valium/diazepam, Trankimazin/Alprazolam/Xanax, Orfidal/Lorazepam, Rohipnol, etc.).",
  },
  { id: 8, question: "h. Alucinógenos (LSD, ácidos, ketamina, PCP, etc.)." },
  { id: 9, question: "i. Opiáceos (heroína, metadona, codeína, morfina, dolantina/petidina, etc.)." },
  { id: 10, question: "j. Otros " },
];

const columns_7 = [
  {
    name: "question",
    label: "¿Ha intentado alguna vez controlar, reducir o dejar de consumir (PRIMERA DROGA, SEGUNDA DROGA, ETC) y no lo ha logrado?",
    align: "left",
    field: "question",
  },
  { name: "0", label: "(0) No, nunca", align: "center", field: "0", value: 0 },
  { name: "6", label: "(6) Si, en los últimos 3 meses", align: "center", field: "6", value: 6 },
  { name: "3", label: "(3) Sí, pero no en los últimos 3 meses", align: "center", field: "3", value: 3 },
];

const questions_8 = [{ id: 1, question: "a. ¿Ha consumido alguna vez alguna droga por vía inyectada? (ÚNICAMENTE PARA USOS NO MÉDICOS)" }];

const columns_8 = [
  {
    name: "question",
    label: "¿Ha consumido alguna vez alguna droga por vía inyectada? (ÚNICAMENTE PARA USOS NO MÉDICOS)",
    align: "left",
    field: "question",
  },
  { name: "0", label: "(0) No, nunca", align: "center", field: "0", value: 0 },
  { name: "2", label: "(2) Si, en los últimos 3 meses", align: "center", field: "2", value: 2 },
  { name: "1", label: "(1) Sí, pero no en los últimos 3 meses", align: "center", field: "1", value: 1 },
];
const respuestas_1 = reactive(
  JSON.parse(
    JSON.stringify(
      Array(10).fill({
        respuesta: "",
      })
    )
  )
);
const respuestas_2 = reactive(
  JSON.parse(
    JSON.stringify(
      Array(10).fill({
        respuesta: "",
      })
    )
  )
);
const respuestas_3 = reactive(
  JSON.parse(
    JSON.stringify(
      Array(10).fill({
        respuesta: "",
      })
    )
  )
);
const respuestas_4 = reactive(
  JSON.parse(
    JSON.stringify(
      Array(10).fill({
        respuesta: "",
      })
    )
  )
);
const respuestas_5 = reactive(
  JSON.parse(
    JSON.stringify(
      Array(10).fill({
        respuesta: "",
      })
    )
  )
);
const respuestas_6 = reactive(
  JSON.parse(
    JSON.stringify(
      Array(10).fill({
        respuesta: "",
      })
    )
  )
);
const respuestas_7 = reactive(
  JSON.parse(
    JSON.stringify(
      Array(10).fill({
        respuesta: "",
      })
    )
  )
);
// const respuestas_1 = reactive([]);
// const respuestas_2 = reactive([]);
// const respuestas_3 = reactive([]);
// const respuestas_4 = reactive([]);
// const respuestas_5 = reactive([]);
// const respuestas_6 = reactive([]);
// const respuestas_7 = reactive([]);

const totalTabaco = computed(() => {
  return (
    (Number(respuestas_2[0].respuesta) || 0) +
    (Number(respuestas_3[0].respuesta) || 0) +
    (Number(respuestas_4[0].respuesta) || 0) +
    (Number(respuestas_5[0].respuesta) || 0) +
    (Number(respuestas_6[0].respuesta) || 0) +
    (Number(respuestas_7[0].respuesta) || 0)
  );
});

const totalAlcohol = computed(() => {
  return (
    (Number(respuestas_2[1].respuesta) || 0) +
    (Number(respuestas_3[1].respuesta) || 0) +
    (Number(respuestas_4[1].respuesta) || 0) +
    (Number(respuestas_5[1].respuesta) || 0) +
    (Number(respuestas_6[1].respuesta) || 0) +
    (Number(respuestas_7[1].respuesta) || 0)
  );
});

const totalCannabis = computed(() => {
  return (
    (Number(respuestas_2[2].respuesta) || 0) +
    (Number(respuestas_3[2].respuesta) || 0) +
    (Number(respuestas_4[2].respuesta) || 0) +
    (Number(respuestas_5[2].respuesta) || 0) +
    (Number(respuestas_6[2].respuesta) || 0) +
    (Number(respuestas_7[2].respuesta) || 0)
  );
});

const totalCocaina = computed(() => {
  return (
    (Number(respuestas_2[3].respuesta) || 0) +
    (Number(respuestas_3[3].respuesta) || 0) +
    (Number(respuestas_4[3].respuesta) || 0) +
    (Number(respuestas_5[3].respuesta) || 0) +
    (Number(respuestas_6[3].respuesta) || 0) +
    (Number(respuestas_7[3].respuesta) || 0)
  );
});

const totalAnfetaminas = computed(() => {
  return (
    (Number(respuestas_2[4].respuesta) || 0) +
    (Number(respuestas_3[4].respuesta) || 0) +
    (Number(respuestas_4[4].respuesta) || 0) +
    (Number(respuestas_5[4].respuesta) || 0) +
    (Number(respuestas_6[4].respuesta) || 0) +
    (Number(respuestas_7[4].respuesta) || 0)
  );
});

const totalInhalantes = computed(() => {
  return (
    (Number(respuestas_2[5].respuesta) || 0) +
    (Number(respuestas_3[5].respuesta) || 0) +
    (Number(respuestas_4[5].respuesta) || 0) +
    (Number(respuestas_5[5].respuesta) || 0) +
    (Number(respuestas_6[5].respuesta) || 0) +
    (Number(respuestas_7[5].respuesta) || 0)
  );
});

const totalSedantes = computed(() => {
  return (
    (Number(respuestas_2[6].respuesta) || 0) +
    (Number(respuestas_3[6].respuesta) || 0) +
    (Number(respuestas_4[6].respuesta) || 0) +
    (Number(respuestas_5[6].respuesta) || 0) +
    (Number(respuestas_6[6].respuesta) || 0) +
    (Number(respuestas_7[6].respuesta) || 0)
  );
});

const totalAlucinogenos = computed(() => {
  return (
    (Number(respuestas_2[7].respuesta) || 0) +
    (Number(respuestas_3[7].respuesta) || 0) +
    (Number(respuestas_4[7].respuesta) || 0) +
    (Number(respuestas_5[7].respuesta) || 0) +
    (Number(respuestas_6[7].respuesta) || 0) +
    (Number(respuestas_7[7].respuesta) || 0)
  );
});

const totalOpiaceos = computed(() => {
  return (
    (Number(respuestas_2[8].respuesta) || 0) +
    (Number(respuestas_3[8].respuesta) || 0) +
    (Number(respuestas_4[8].respuesta) || 0) +
    (Number(respuestas_5[8].respuesta) || 0) +
    (Number(respuestas_6[8].respuesta) || 0) +
    (Number(respuestas_7[8].respuesta) || 0)
  );
});

const totalOtrasDrogas = computed(() => {
  return (
    (Number(respuestas_2[9].respuesta) || 0) +
    (Number(respuestas_3[9].respuesta) || 0) +
    (Number(respuestas_4[9].respuesta) || 0) +
    (Number(respuestas_5[9].respuesta) || 0) +
    (Number(respuestas_6[9].respuesta) || 0) +
    (Number(respuestas_7[9].respuesta) || 0)
  );
});
const opcion_hc111 = ref(null);

onMounted(() => {
  HIC111.fecha = dayjs(getEmpresa.fecha_act).format("YYYY-MM-DD");
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
  const datos_format = JSON.parse(JSON.stringify(HIC111));
  const respues_1 = JSON.parse(JSON.stringify(respuestas_1));
  const respues_2 = JSON.parse(JSON.stringify(respuestas_2));
  const respues_3 = JSON.parse(JSON.stringify(respuestas_3));
  const respues_4 = JSON.parse(JSON.stringify(respuestas_4));
  const respues_5 = JSON.parse(JSON.stringify(respuestas_5));
  const respues_6 = JSON.parse(JSON.stringify(respuestas_6));
  const respues_7 = JSON.parse(JSON.stringify(respuestas_7));
  let datos = {
    nit_entid: nit_usu.value,
    estado: opcion_hc111.value == "AUTORIZAR" ? "1" : "2",
    id_acomp: getAcomp.cod.padStart(15, "0"),
    paren_acomp: getSesion.paren_acomp,
    oper_consen: getSesion.oper,
    llave_consen: getHc.llave,
    cod_med: getProf.cod,
    cod_consen: "HIC111",
    disentimiento: "N",
    ...datos_format,
    preg_8: preg_8[1],
    tabla_respuesta1: respues_1,
    tabla_respuesta2: respues_2,
    tabla_respuesta3: respues_3,
    tabla_respuesta4: respues_4,
    tabla_respuesta5: respues_5,
    tabla_respuesta6: respues_6,
    tabla_respuesta7: respues_7,
  };

  datos.tabla_respuesta1.forEach((item, index) => {
    const new_obj = {
      ...item,
    };
    datos[`tabla_respuesta1${(index + 1).toString().padStart(3, "0")}`] = Object.values(new_obj).join("|") + "|";
  });

  datos.tabla_respuesta2.forEach((item, index) => {
    const new_obj = {
      ...item,
    };
    datos[`tabla_respuesta2${(index + 1).toString().padStart(3, "0")}`] = Object.values(new_obj).join("|") + "|";
  });

  datos.tabla_respuesta3.forEach((item, index) => {
    const new_obj = {
      ...item,
    };
    datos[`tabla_respuesta3${(index + 1).toString().padStart(3, "0")}`] = Object.values(new_obj).join("|") + "|";
  });

  datos.tabla_respuesta4.forEach((item, index) => {
    const new_obj = {
      ...item,
    };
    datos[`tabla_respuesta4${(index + 1).toString().padStart(3, "0")}`] = Object.values(new_obj).join("|") + "|";
  });

  datos.tabla_respuesta5.forEach((item, index) => {
    const new_obj = {
      ...item,
    };
    datos[`tabla_respuesta5${(index + 1).toString().padStart(3, "0")}`] = Object.values(new_obj).join("|") + "|";
  });

  datos.tabla_respuesta6.forEach((item, index) => {
    const new_obj = {
      ...item,
    };
    datos[`tabla_respuesta6${(index + 1).toString().padStart(3, "0")}`] = Object.values(new_obj).join("|") + "|";
  });

  datos.tabla_respuesta7.forEach((item, index) => {
    const new_obj = {
      ...item,
    };
    datos[`tabla_respuesta7${(index + 1).toString().padStart(3, "0")}`] = Object.values(new_obj).join("|") + "|";
  });

  for (let i in datos) {
    if (typeof datos[i] == "object") delete datos[i];
  }
  console.log("datos -> ", datos);

  getDll$({ modulo: `save_consen.dll`, data: { ...datos } })
    .then((data) => {
      if (data?.llave_consen) {
        const fecha = data?.llave_consen.slice(23, 31);
        HIC111.fecha_act = dayjs(fecha).format("YYYY-MM-DD");
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
  const datos_format = JSON.parse(JSON.stringify(HIC111));
  const respues_1 = JSON.parse(JSON.stringify(respuestas_1));
  const respues_2 = JSON.parse(JSON.stringify(respuestas_2));
  const respues_3 = JSON.parse(JSON.stringify(respuestas_3));
  const respues_4 = JSON.parse(JSON.stringify(respuestas_4));
  const respues_5 = JSON.parse(JSON.stringify(respuestas_5));
  const respues_6 = JSON.parse(JSON.stringify(respuestas_6));
  const respues_7 = JSON.parse(JSON.stringify(respuestas_7));

  try {
    const datos_hic111 = {
      autorizo: opcion_hc111.value == "AUTORIZAR" ? true : false,
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
      preg_8: preg_8[1],
      ...datos_format,
      tabla_respuesta1: respues_1,
      tabla_respuesta2: respues_2,
      tabla_respuesta3: respues_3,
      tabla_respuesta4: respues_4,
      tabla_respuesta5: respues_5,
      tabla_respuesta6: respues_6,
      tabla_respuesta7: respues_7,
    };

    const firmas = {
      img_firma_consen: firma_recibida.value,
      img_firma_paci: firma_recibida.value,
      img_huella_paci: huella_paci.value,
      img_firma_acomp: firma_recibida_acomp.value,
      firma_prof: firma_prof.value,
    };

    const docDefinitionPrint = await utilsFormat({
      datos: { ...firmas, cod_consen: "HIC111" },
      content: impresionHIC111({
        datos: datos_hic111,
      }),
    });
    const docDefinitionFile = await utilsFormat({
      datos: { ...firmas, cod_consen: "HIC111" },
      content: impresionHIC111({
        datos: datos_hic111,
      }),
    });

    await impresion({ docDefinition: docDefinitionPrint });
    const response_impresion = await generarArchivo({ docDefinition: docDefinitionFile, nomb_archivo: `${llave}-HIC-111` });
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
}
.col-pregunta-tabla {
  max-width: 700px;
  width: 600px;
  white-space: normal !important;
}
.big-row-text {
  font-size: 14px;
}
</style>
