<template>
  <div class="main-layout">
    <header-component />

    <div class="hero common-hero">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="hero-ct">
              <h1>Movie Listing - Grid Fullwidth</h1>
              <ul class="breadcumb">
                <li class="active">
                  <a href="#">Home</a>
                </li>
                <li>
                  <span class="ion-ios-arrow-right"></span> movie listing
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <main class="bg-dark">
      <router-view />
    </main>

    <footer-component />
  </div>
</template>

<script>
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";
export default {
  name: "MainLayout",
  components: {
    HeaderComponent,
    FooterComponent
  }
};
</script>

<style>
</style>