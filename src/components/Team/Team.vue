<template>
  <div class="container">
    <div class="display-3 fw-bold">Our Team</div>
    <div class="row">
      <div
        class="col-6 col-md-4 col-lg-3 mt-lg-3 mt-md-3"
        v-for="member in teamdata"
        :key="member.githubHandle"
      >
        <div class="card text-center text-white bg-dark">
          <img
            :src="`https://github.com/${member.githubHandle}.png`"
            class="card-img-top"
            :alt="`${member.githubHandle}'s Profile Picture`"
          />
          <div class="card-body">
            <h5 class="card-title">{{ member.name }}</h5>
            <p class="card-text">
              <a class="btn btn-light" :href="`https://github.com/${member.githubHandle}`" target="_blank"
                >View On Github</a
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from './data.json';
export default {
  name: 'Team',
  data() {
    return {
      teamdata: data,
    };
  },
};
</script>

<style scoped></style>
