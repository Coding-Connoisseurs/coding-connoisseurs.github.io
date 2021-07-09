<template>
  <div>
    <div v-for="ele in data" :key="ele.name" class="card text-white bg-dark mb-3">
      <div class="card-body">
        <h5 class="card-title">{{ ele.title }}</h5>
        <p class="card-text">
          {{ ele.description }}
        </p>
        <a :href="`${ele.link}`" target="_blank">
          <button type="button" class="btn btn-light">Get Started</button>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import uiux from '../data/uiux.json';
export default {
  name: 'UIUXResources',
  data() {
    return {
      data: uiux,
    };
  },
};
</script>

<style scoped></style>
