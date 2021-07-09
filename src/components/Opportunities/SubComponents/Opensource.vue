<template>
  <div>
    <div v-for="ele in opensource" :key="ele.id" class="card text-white bg-dark mb-3">
      <div class="card-body">
        <h5 class="card-title">{{ ele.name }}</h5>
        <p class="card-text">
          {{ ele.description }}
        </p>
        <p>
          <strong>Eligibility:</strong>
          {{ ele.eligibility }}
        </p>
        <p>
          <strong>Application Period:</strong>
          {{ ele.applicationPeriod }}
        </p>
        <p>
          <strong>Stipend: </strong>
          <template v-if="ele.stipend.includes('http') === false">
            {{ ele.stipend }}
          </template>
          <template v-else>
            <a :href="`${ele.stipend}`" :style="{ color: 'white' }">Check Here </a>
          </template>
        </p>
        <a :href="`${ele.link}`" target="_blank">
          <button type="button" class="btn btn-light">Get Started</button>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import ops from '../data/ops.json';
export default {
  name: 'Opensource',
  data() {
    return {
      opensource: ops,
    };
  },
};
</script>

<style scoped></style>
