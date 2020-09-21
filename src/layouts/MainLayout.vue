<template>
  <div class="main-layout">
    <navbar-component />

    <main>
      <router-view />
    </main>

    <footer-component />
  </div>
</template>

<script>
import NavbarComponent from "../components/NavbarComponent";
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
    FooterComponent
  }
};
</script>