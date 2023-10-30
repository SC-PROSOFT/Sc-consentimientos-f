<template>
  <div class="background-container">
    <router-view />
  </div>
</template>
<script setup></script>
<style>
.background-container {
  background-size: cover;
  background-position: center center;
  height: 100vh;
  background-image: url("@/assets/image/cover-b.png");
}
</style>
