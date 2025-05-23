<template>
  <div class="board-wrapper">
    <!-- Barra lateral izquierda -->
    <div class="sidebar">
      <div v-for="(fig, idx) in availableFigures" :key="fig.key" class="sidebar-image" @click="addFigure(fig)">
        <img :src="fig.src" :alt="fig.label" draggable="false" />
        <span>{{ fig.label }}</span>
      </div>
    </div>

    <!-- Tablero Konva -->
    <div class="konva-container" ref="konvaContainer">
      <v-stage :config="{ width: STAGE_WIDTH, height: STAGE_HEIGHT }" ref="stageRef">
        <v-layer>
          <v-image :image="background" :x="0" :y="0" :width="STAGE_WIDTH" :height="STAGE_HEIGHT" />
          <!-- Render de las figuras en el tablero -->
          <template v-for="(fig, idx) in figures">
            <v-image
              v-for="(fig, idx) in figures"
              :key="fig.id"
              :image="fig.image"
              :x="fig.x"
              :y="fig.y"
              :width="fig.width"
              :height="fig.height"
              :draggable="true"
              @dragmove="onDragMove(idx, $event)"
              @mousedown="selectFigure(idx)"
              @touchstart="selectFigure(idx)"
              :shadowEnabled="selectedIdx === idx"
              :shadowColor="'#00e0ff'"
              :shadowBlur="selectedIdx === idx ? 18 : 0"
              :shadowOpacity="selectedIdx === idx ? 0.7 : 0"
              :stroke="selectedIdx === idx ? '#00e0ff' : ''"
              :strokeWidth="selectedIdx === idx ? 4 : 0"
              :listening="true"
              style="cursor: move"
            />
          </template>
        </v-layer>
      </v-stage>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import backgroundImage from "@/assets/image/tabla_sedacion.png";
import figuraParaTablero from "@/assets/image/tas.png";

// Dimensiones fijas del tablero
const STAGE_WIDTH = 894;
const STAGE_HEIGHT = 803;

// Imagen de fondo
const background = ref(null);

// Barra de figuras disponibles (puedes agregar más si lo necesitas)
const availableFigures = [
  {
    key: "tas",
    label: "TAS",
    src: figuraParaTablero,
    width: 80,
    height: 80,
  },
];

// Pre-carga de imágenes
const loadedImages = reactive({});
function preloadImages() {
  // Fondo
  const bg = new window.Image();
  bg.src = backgroundImage;
  bg.onload = () => (background.value = bg);

  // Figuras
  for (const fig of availableFigures) {
    const img = new window.Image();
    img.src = fig.src;
    img.onload = () => {
      loadedImages[fig.key] = img;
    };
  }
}
onMounted(preloadImages);

const figures = reactive([]); // Estado de las figuras agregadas al tablero
const selectedIdx = ref(-1); // Índice de la figura seleccionada (última agregada)

function addFigure(fig) {
  // Posición centrada
  const x = (STAGE_WIDTH - fig.width) / 2;
  const y = (STAGE_HEIGHT - fig.height) / 2;
  figures.push({
    id: Date.now() + Math.random(),
    key: fig.key,
    image: loadedImages[fig.key],
    x,
    y,
    width: fig.width,
    height: fig.height,
  });
  selectedIdx.value = figures.length - 1;
}

function onDragMove(idx, evt) {
  const { x, y } = evt.target.position();
  figures[idx].x = x;
  figures[idx].y = y;
  selectedIdx.value = idx;
}

function selectFigure(idx) {
  selectedIdx.value = idx;
}
</script>

<style scoped>
.board-wrapper {
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 820px;
  background: #f7f7f7;
}

.sidebar {
  width: 100px;
  padding: 16px 8px;
  background: #e7eaf0;
  border-right: 1px solid #cfd4e7;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  min-height: 803px;
}

.sidebar-image {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: box-shadow 0.2s;
  border-radius: 8px;
  padding: 6px;
}

.sidebar-image:hover {
  box-shadow: 0 2px 8px #00e0ff66;
  background: #f0feff;
}

.sidebar-image img {
  width: 56px;
  height: 56px;
  object-fit: contain;
  margin-bottom: 4px;
  user-select: none;
}

.konva-container {
  flex: 1;
  overflow: auto;
  background: #f0f0f0;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  min-width: 894px;
  min-height: 803px;
  max-width: 100vw;
}
</style>
