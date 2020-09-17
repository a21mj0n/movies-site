<template>
  <div class="main-layout">
    <navbar-component />

    <header-component />

    <main class="grey lighten-1">
      <router-view />
    </main>

    <footer-component />
  </div>
</template>

<script>
import NavbarComponent from "../components/NavbarComponent";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";
export default {
  name: "MainLayout",
  data() {
    return {
      menuVisible: true
    };
  },
  components: {
    NavbarComponent,
    HeaderComponent,
    FooterComponent
  }
};
</script>
