<template>
  <div class="mt-5">
    <div class="footer container-md">
      <div class="col pt-5">
        <a class="btn discord" target="_blank" href="http://discord.gg/QGZc57Y9yq"
          ><img src="../../assets/discord.svg" :style="{ width: '50px' }"
        /></a>
        <a class="btn github" target="_blank" href="https://github.com/Coding-Connoisseurs/"
          ><img src="../../assets/github.svg" :class="github" :style="{ width: '50px' }"
        /></a>
        <a class="btn youtube" target="_blank" href="http://www.youtube.com/channel/UCfaEKlZXHP1SRc-rSDSi1tg"
          ><img src="../../assets/youtube.svg" :style="{ width: '50px' }"
        /></a>
      </div>

      <div class="row pt-5 pb-3">
        <div class="col-md-6 col-sm-12">&copy; Coding Connoisseurs, FoET, University of Lucknow</div>
        <div class="col-md-6 col-sm-12">
          Made by <a href="http://github.com/arjundubey-cr">Arjun Dubey</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.col a {
  padding: 5px;
}
.btn {
  border-radius: 50%;
}
.youtube:hover {
  color: #fff;
  background-color: rgba(255, 0, 0, 0.5);
}
.discord:hover {
  background-color: rgba(64, 78, 237, 0.5);
}
.github:hover {
  background-color: rgba(33, 31, 31, 0.5);
}
</style>
