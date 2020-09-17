<template>
  <div class="movie-item">
    <div class="mv-img">
      <a href="#">
        <img src="/images/slider2.jpg" alt width="285" height="437" />
      </a>
    </div>
    <div class="title-in">
      <div class="cate">
        <span class="yell">
          <a href="#">action</a>
        </span>
      </div>
      <h6>
        <a href="#">The revenant</a>
      </h6>
      <p>
        <i class="ion-android-star"></i>
        <span>7.4</span> /10
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieCard"
};
</script>

<style>
.movie-item .title-in {
  margin-bottom: 45px;
}
.movie-item .title-in h6 a {
  font-size: 18px;
}
.movie-item:hover .title-in,
.movie-item:hover img {
  -webkit-transition: all 0.5s ease-out;
  -moz-transition: all 0.5s ease-out;
  -o-transition: all 0.5s ease-out;
  transition: all 0.5s ease-out;
  -moz-opacity: 1;
  -khtml-opacity: 1;
  -webkit-opacity: 1;
  opacity: 1;
  -ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=100);
  filter: alpha(opacity=100);
}
.movie-item:hover h6 a {
  color: #dcf836;
}
</style>