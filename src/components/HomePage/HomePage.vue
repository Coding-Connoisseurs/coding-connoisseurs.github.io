<template>
  <div>
    <div class="container">
      <h1 class="display-2 fw-bolder">Coding Connoisseurs, FoET</h1>
      <div class="divider" />
      <h5 class="mb-5">
        We aim to build a close knit community of coding enthusiasts to a better network,
        opportunities, discussions and mentorship. the aim of the club is to improve the overall
        programming culture at FoET-LU.
      </h5>
    </div>

    <!-- card like structures for different sections -->
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-6 col-md-5 col-12" :style="{ padding: '0' }">
          <Cards
            heading="Opportunities"
            content="Open Source, Competitive Programming, Developer Clubs, Internships and Job"
            routerLink="/opportunities"
            color="#8896AB"
          />
        </div>
        <div class="col-sm-6 col-md-7 col-12" :style="{ padding: '0' }">
          <Cards
            heading="Resources"
            content="Learning New Skills, Interview Preparation and much more"
            routerLink="/resources"
            color="#938581"
          />
        </div>
      </div>
      <!-- second Row -->
      <div class="row">
        <div class="col-sm-6 col-md-7 col-12" :style="{ padding: '0' }">
          <Cards
            heading="Events"
            content="View upcoming and past events from Coding Connoisseurs"
            routerLink="/events"
            color="#466362"
          />
        </div>
        <div class="col-sm-6 col-md-5 col-12" :style="{ padding: '0' }">
          <Cards
            heading="Team"
            content="Meet the Coding Club Team at FoET, University of Lucknow"
            routerLink="/team"
            color="#7E6551"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Cards from '../GeneralComponents/Cards.vue';
export default {
  name: 'HomePage',
  components: {
    Cards,
  },
};
</script>

<style scoped>
.divider {
  border: 1px solid #e5e5e5;
  margin: 1rem 0;
}
</style>
