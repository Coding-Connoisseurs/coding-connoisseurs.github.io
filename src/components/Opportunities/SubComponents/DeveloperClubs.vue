<template>
  <div>
    <div v-for="ele in devclubs" :key="ele.name" class="card text-white bg-dark mb-3">
      <div class="card-body">
        <h5 class="card-title">{{ ele.name }}</h5>
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
import devclubs from '../data/devclubs.json';
export default {
  name: 'DeveloperClubs',
  data() {
    return {
      devclubs,
    };
  },
};
</script>

<style scoped></style>
