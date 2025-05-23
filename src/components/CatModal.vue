<template>
  <div class="overlay" @click.self="$emit('close')">
    <div class="modal">
      <img :src="url" alt="Cat image" />
      <button class="close" @click="$emit('close')">×</button>
    </div>
  </div>
</template>

<script setup>
// eslint-disable-next-line
defineProps(['url']);
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0; left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  position: relative;
  background: white;
  padding: 20px;
  max-width: 90%;
  max-height: 90%;
}

.modal img {
  max-width: 100%;
  max-height: 80vh;
}

.close {
  position: absolute;
  top: 10px; right: 10px;
  padding: 0 0 3px 10px;
  border: none;
  font-size: 30px;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.6);
  color: #333;
}
</style>
