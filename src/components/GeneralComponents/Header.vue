<template>
  <nav class="navbar navbar-light bg-light" :style="{ backgroundColor: 'white!important' }">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/" replace>
        <img
          :style="{
            height: '50px',
          }"
          src="../../assets/logo_codingclub-removebg-preview.png"
          alt="Coding Club Logo"
        />
      </router-link>
      <button
        :style="{
          border: 'none',
          outline: '0',
          boxShadow: 'none',
        }"
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarColor03"
        aria-controls="navbarColor03"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click="modal.show()"
      >
        Menu
        <span class="navbar-toggler-icon"></span>
      </button>
      <!-- Fullscreen menu -->
      <div class="modal fade" ref="exampleModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-fullscreen">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="btn-close" @click="modal.hide()" aria-label="Close">
                x
              </button>
            </div>
            <div class="modal-body">
              <div class="h-100 row align-items-center justify-content-center">
                <div class="col-md-6 col-12">
                  <ul class="menu-links" @click="modal.hide()">
                    <li><router-link to="/" replace>Home</router-link></li>
                    <li><router-link to="/opportunities" replace>Opportunities</router-link></li>
                    <li><router-link to="/resources" replace>Resources</router-link></li>
                    <li><router-link to="/events" replace>Events</router-link></li>
                    <li><router-link to="/team" replace>Team</router-link></li>
                    <li><a href="http://discord.gg/QGZc57Y9yq">Join Us</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="collapse navbar-collapse" id="navbarColor03">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <a class="nav-link active" href="#"
              >Home
              <span class="visually-hidden">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
              >Dropdown</a
            >
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Separated link</a>
            </div>
          </li>
        </ul>
        <form class="d-flex">
          <input class="form-control me-sm-2" type="text" placeholder="Search" />
          <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div> -->
    </div>
  </nav>
</template>

<script>
import { Modal } from 'bootstrap';
export default {
  name: 'Header',
  data: () => ({
    modal: null,
  }),
  mounted() {
    this.modal = new Modal(this.$refs.exampleModal);
  },
};
</script>

<style scoped>
.modal-content {
  background-color: rgba(55, 54, 52, 0.65) !important;
  backdrop-filter: blur(5px);
}
.btn-close {
  color: white;
  background: none;
  font-weight: bold;
  font-size: 36px;
  opacity: 1;
  outline: 0;
}
.btn-close:hover {
  color: gray;
}
.btn-close:focus,
.btn-close:active {
  outline: none !important;
  box-shadow: none;
}
.modal-body {
  color: #fff;
}
.menu-links {
  list-style-type: none;
  margin: 0;
  padding: 0;
  margin-top: 10px;
  margin-bottom: 10px;
}
.menu-links li {
  text-align: center;
  font-size: 1.5rem;
  padding: 1rem;
  border-bottom: 1px solid gray;
}
.menu-links li a {
  color: inherit;
  text-decoration: none;
}
@media screen and (max-width: 760px) {
  .menu-links li {
    font-size: 1rem;
    padding: 0.75rem;
  }
}
</style>
