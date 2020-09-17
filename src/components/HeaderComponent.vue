<template>
  <div class="hero common-hero">
    <div class="container">
      <div class="row">
        <div class="col l6 m6 s12">
          <div class="hero-ct">
            <h1>Block Buster - this site is for those who enjoy watching movies</h1>
          </div>
        </div>
        <div class="col l6 m6 s12">
          <ul type="none">
            <li class="white-text center-align">
              <h5>Movies</h5>
            </li>
            <li class="white-text center-align">
              <h5>TV</h5>
            </li>
            <li class="white-text center-align">
              <h5>Serials</h5>
            </li>
            <li class="white-text center-align">
              <h5>Actors</h5>
            </li>
            <li class="white-text center-align">
              <h5>Trailers</h5>
            </li>
          </ul>
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
    padding-top: 30px;
    padding-bottom: 20px;
  }
  h1 {
    font-family: "Dosis", sans-serif;
    font-size: 36px;
    color: #ffffff;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 20px;
    z-index: 10;
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