<template>
  <div class="celeb-item">
    <router-link :to="{ name: 'celebrity', params: { id: celebrity.id }, }">
      <img :src="celebrity.profile_path" alt width="70" height="70" />
    </router-link>
    <div class="celeb-author">
      <h6>
        <router-link :to="{ name: 'celebrity', params: { id: celebrity.id }, }">{{ celebrity.name }}</router-link>
      </h6>
      <span>Actor</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "CelebritiesComponent",
  props: {
    celebrity: Object
  }
};
</script>

<style>
</style>