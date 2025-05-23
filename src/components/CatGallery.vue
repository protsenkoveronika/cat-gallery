<template>
  <h1>Mini Cat Gallery</h1>
  <div>
    <button @click="loadCats" class="refresh">Refresh cats</button>
    <div v-if="loading" class="loader">
      <div class="spinner"></div>
      <p>Cats are loading...</p>
    </div>
    <div v-else class="grid">
      <img
          v-for="cat in cats"
          :key="cat.id"
          :src="cat.url"
          @click="openModal(cat.url)"
          class="cat-img"
          alt="Cat image"/>
    </div>
    <CatModal v-if="selectedCat" :url="selectedCat" @close="selectedCat = null" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { fetchCats } from '@/services/CatService';
import CatModal from './CatModal.vue';

const cats = ref([]);
const loading = ref(false);
const selectedCat = ref(null);

const loadCats = async () => {
  loading.value = true;
  try {
    cats.value = (await fetchCats()).slice(0, 6);
  } catch (err) {
    alert(err.message);
  } finally {
    loading.value = false;
  }
};

const openModal = (url) => {
  selectedCat.value = url;
};

onMounted(loadCats);
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-top: 20px;
}

.cat-img {
  width: 100%;
  aspect-ratio: 4/3;
  object-fit: cover;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.cat-img:hover {
  transform: scale(1.03);
}

.refresh {
  padding: 10px 20px;
  background-color: #aaaaaa;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: medium;
  font-weight: bold;
}

.loader {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px 0;
}

.spinner {
  width: 48px;
  height: 48px;
  border: 5px solid #ccc;
  border-top-color: #ff9900;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 12px;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@media (max-width: 768px), (min-height: 768px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>