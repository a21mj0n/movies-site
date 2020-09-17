<template>
  <div class="hero common-hero">
    <div class="container">
      <div class="row">
        <div class="col s12">
          <div class="hero-ct">
            <h1>Block Buster - Movies for you</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.hero {
  background-position: center;
  text-align: center;
  background-size: cover;
  position: relative;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 445px;
  .hero-ct {
    padding-top: 80px;
    padding-bottom: 20px;
  }
  h1 {
    font-family: "Dosis", sans-serif;
    font-size: 36px;
    color: #ffffff;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 20px;
  }
  &:before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
  }
}
.common-hero {
  height: 385px;
  background: url("/images/celeb-hero-single.jpg") no-repeat;
  &:before {
    background-color: rgba(0, 0, 0, 0.4);
  }
}
</style>