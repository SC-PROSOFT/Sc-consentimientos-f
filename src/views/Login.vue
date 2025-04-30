<template>
  <div class="login-container">
    <div class="login-card">
      <div class="form-container">
        <h5 class="login-title text-center">Consentimientos</h5>
        <Input_ class="q-mt-xs" v-model="reg_login.usuario" :field="form_login.usuario" />
        <Input_ class="q-mt-xs" v-model="reg_login.clave" :field="form_login.clave" />

        <div class="q-my-sm text-center">
          <q-btn flat dense color="accent" icon="settings" label="Configura conexión" @click="abrirConfigUsunet" />
        </div>

        <q-card-actions align="center" class="q-mt-lg text-primary text-center">
          <q-btn
            id="boton2"
            label="Iniciar sesión"
            class="botone q-mx-sm"
            icon-right="login"
            @click="validarFormulario"
            style="background-color: #123d7d; color: white"
          />
        </q-card-actions>
      </div>
      <div class="image-container column items-center">
        <img src="@/assets/image/pensador.ico" alt="Prosoft Logo" class="background-image" />
      </div>
    </div>
  </div>
  <q-dialog v-model="show_conex_serv" persistent no-shake>
    <q-card class="my-card">
      <ToolBarTable_ titulo="Configura conexión al servidor" @cerrar="cerrarConfigUsunet" />
      <div class="row q-pa-sm">
        <Input_ class="col-xs-5" v-model="reg_login.ip" :field="form_login.ip" />
        <Select_ class="col-xs-3" v-model="reg_login.anio_contab" :field="form_login.anio_contab" :items="lista_contab" />

        <Select_ class="col-xs-4" v-model="reg_login.mes_contab" :field="form_login.mes_contab" :items="meses" />
      </div>
      <q-card-actions align="center" class="text-primary text-center">
        <q-btn color="green" label="Guardar" class="botone q-mx-sm" icon-right="check_circle" @click="setContabServidor" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
<script setup>
import { useModuleCon851, useApiContabilidad, useModuleFormatos } from "@/store";
import ToolBarTable_ from "@/components/global/ToolBarTable.vue";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { foco_ } from "@/setup";
import dayjs from "dayjs";
const formatosStore = useModuleFormatos();
const router = useRouter();
const { getDll$ } = useApiContabilidad();
const { CON851 } = useModuleCon851();
const show_conex_serv = ref(false);
const reg_login = ref({
  usuario: null,
  clave: null,
  ip: "",
  mes_contab: null,
  anio_contab: "",
});
const lista_contab = ref([]);
const meses = ref([
  { value: 1, label: "Ene" },
  { value: 2, label: "Feb" },
  { value: 3, label: "Mar" },
  { value: 4, label: "Abr" },
  { value: 5, label: "May" },
  { value: 6, label: "Jun" },
  { value: 7, label: "Jul" },
  { value: 8, label: "Agt" },
  { value: 9, label: "Sep" },
  { value: 10, label: "Oct" },
  { value: 11, label: "Nov" },
  { value: 12, label: "Dic" },
  { value: 13, label: "Control" },
  { value: 14, label: "Cie" },
]);
const form_login = ref({
  usuario: {
    id: "usuario",
    label: "Usuario:",
    placeholder: "Ingresa tu usuario",
    maxlength: "5",
    required: true,
    campo_abierto: true,
  },
  clave: {
    id: "clave",
    label: "Contraseña:",
    placeholder: "Ingresa tu contraseña",
    maxlength: "15",
    type: "password",
    required: true,
    campo_abierto: true,
  },
  ip: {
    id: "ip",
    label: "IP Servidor",
    placeholder: "Ingresa IP",
    maxlength: "15",
    required: true,
    campo_abierto: true,
  },
  mes_contab: {
    id: "mes_contab",
    label: "Mes",
    maxlength: "15",
    required: true,
    disable: true,
    campo_abierto: true,
  },
  anio_contab: {
    id: "anio_contab",
    label: "Año",
    maxlength: "15",
    required: true,
    disable: false,
    campo_abierto: true,
  },
});
onMounted(() => {
  reg_login.value.mes_contab = dayjs().month() + 1;
  if (window.location.hostname != "localhost") {
    reg_login.value.ip = window.location.hostname;
    localStorage.setItem("ip", reg_login.value.ip);
    consultarContabilidad();
  }
});
const consultarContabilidad = async () => {
  await getDll$({
    directorio_dll: "MAIN-ELECT/APP/INDEX/SC-USUNET.dll",
    data: {
      datosh: "GEBC|",
      crear_nuevo_anio: "N",
    },
  })
    .then((data) => {
      const contab_orden = data.Usunet[0].CONTAB.sort((a, b) => extraerNumero(b.DIR) - extraerNumero(a.DIR));
      contab_orden.forEach((item) => {
        lista_contab.value.push({ value: item.DIR, label: item.DIR });
      });
    })

    .catch((error) => {
      console.error(error);
      CON851("?", "error", "Error al consultar contabilidad");
    });
};

const validarFormulario = () => {
  if (!reg_login.value.usuario || reg_login.value.clave == null)
    return CON851("?", "info", "El usuario y/o contraseña no es valido", () => foco_(form_login, "usuario"));
  if (!localStorage.getItem("ip")) {
    return CON851("?", "warning", "No se ha configurado la conexión al servidor", () => abrirConfigUsunet());
  }
  ingresar();
};
const ingresar = async () => {
  let datosh = reg_login.value.usuario.toUpperCase() + "|" + reg_login.value.clave + "|" + "SAL" + "|";
  await getDll$({
    directorio_dll: "MAIN-ELECT/APP/INDEX/INDEX.dll",
    data: {
      datosh,
    },
  })
    .then((data) => {
      sessionStorage.setItem("usunet", JSON.stringify(data.Usunet[0]));
      sessionStorage.setItem(
        "datosh",
        "|" + reg_login.value.anio_contab + "|" + meses.value.find((mes) => mes.value == reg_login.value.mes_contab).label + "|"
      );
      // router.push({ name: "elaborarconsent" });
      router.push({ name: "elaborarconsent" }).then(() => {
        window.location.reload();
      });
    })
    .catch((error) => {
      console.error(error);
      CON851("?", "error", "Error al iniciar sesión");
    });
};
const setContabServidor = () => {
  if (!reg_login.value.ip) {
    return CON851("?", "info", "El campo IP Servidor es obligatorio", null);
  }
  if (!reg_login.value.anio_contab && window.location.hostname != "localhost") {
    return CON851("?", "info", "El campo año es obligatorio", null);
  }

  if (window.location.hostname == "localhost") {
    consultarContabilidad();
  }

  localStorage.setItem("ip", reg_login.value.ip);
  show_conex_serv.value = false;
  CON851("?", "success", "La configuración se guardo correctamente");
};
const extraerNumero = (dato) => {
  const match = dato.match(/\d+/);
  return match ? parseInt(match[0], 10) : 0;
};
const abrirConfigUsunet = () => {
  show_conex_serv.value = true;
};
const cerrarConfigUsunet = () => {
  show_conex_serv.value = false;
};
</script>

<style scoped>
/* Contenedor principal */
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
}
/* Tarjeta del formulario e imagen */
.login-card {
  display: flex;
  flex-direction: row;
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 800px;
  text-align: left;
  align-items: center;
}
/* Contenedor del formulario */
.form-container {
  flex: 1; /* Ocupa el 50% del espacio horizontal */
}
/* Título del login */
.login-title {
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
  color: #333;
}
/* Información adicional */
.info-container {
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
  color: #555;
}
.info-container p {
  margin: 0.2rem 0;
}
label {
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #555;
}
input {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
}
/* Estilo del botón */
.login-button {
  width: 100%;
  padding: 0.8rem;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;
}
.login-button:hover {
  background-color: #0056b3;
}
/* Contenedor de la imagen */
.image-container {
  flex: 1; /* Ocupa el 50% del espacio horizontal */
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
