<template>
  <div class="about">
    <h1>Movies Page</h1>
    <card-component />
  </div>
</template>

<script>
import CardComponent from "../components/CardComponent";
export default {
  name: "Movies",
  components: {
    CardComponent
  }
};
</script>
