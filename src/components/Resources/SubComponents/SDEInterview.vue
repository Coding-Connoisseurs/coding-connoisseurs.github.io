<template>
  <div>
    <div v-for="ele in dataArray" :key="ele.title">
      <h1 :style="{ textDecoration: 'underline' }">{{ ele.title }}</h1>
      <!-- loop through each element of data attribute -->
      <div v-for="el in ele.data" :key="el.title" class="card text-white bg-dark mb-3">
        <div class="card-body">
          <h5 class="card-title">{{ el.title }}</h5>
          <p class="card-text">
            {{ el.description }}
          </p>
          <a :href="`${el.link}`" target="_blank">
            <button type="button" class="btn btn-light">Get Started</button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sderesources from '../data/sdeinterview.json';
export default {
  name: 'SDEInterview',
  data() {
    return {
      dataArray: [
        { title: 'DSA', data: sderesources.dsa },
        { title: 'CP', data: sderesources.cp },
        { title: 'OS and DBMS', data: sderesources.osdbms },
      ],
      dsa: sderesources.dsa,
    };
  },
};
</script>

<style scoped></style>
