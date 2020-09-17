<template>
  <footer class="ht-footer">
    <div class="container">
      <div class="flex-parent-ft">
        <div class="flex-child-ft item1">
          <a href="index-2.html">
            <img class="logo" src="/images/logo1.png" alt />
          </a>
          <p>
            5th Avenue st, manhattan
            <br />New York, NY 10001
          </p>
          <p>
            Call us:
            <a href="#">(+01) 202 342 6789</a>
          </p>
        </div>
        <div class="flex-child-ft item2">
          <h4>Resources</h4>
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Blockbuster</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Forums</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Help Center</a>
            </li>
          </ul>
        </div>
        <div class="flex-child-ft item3">
          <h4>Legal</h4>
          <ul>
            <li>
              <a href="#">Terms of Use</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Security</a>
            </li>
          </ul>
        </div>
        <div class="flex-child-ft item4">
          <h4>Account</h4>
          <ul>
            <li>
              <a href="#">My Account</a>
            </li>
            <li>
              <a href="#">Watchlist</a>
            </li>
            <li>
              <a href="#">Collections</a>
            </li>
            <li>
              <a href="#">User Guide</a>
            </li>
          </ul>
        </div>
        <div class="flex-child-ft item5">
          <h4>Newsletter</h4>
          <p>
            Subscribe to our newsletter system now
            <br />to get latest news from us.
          </p>
          <form action="#">
            <input type="text" placeholder="Enter your email..." />
          </form>
          <button class="btn black">
            Subscribe now
            <i class="material-icons right">check</i>
          </button>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
footer {
  background: url("/images/ft-bg.jpg") no-repeat;
  background-position: center;
  background-size: cover;
  color: #ffffff;
}
footer .flex-parent-ft {
  padding: 80px 0 60px 0;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-items: flex-start;
}
@media (max-width: 991px) {
  footer .flex-parent-ft {
    display: flex;
    flex-direction: column;
    max-width: 550px;
    margin: 0 auto;
  }
}
@media (max-width: 991px) {
  footer .flex-parent-ft .flex-child-ft {
    width: 100%;
  }
}
footer .flex-parent-ft .flex-child-ft img {
  margin-bottom: 60px;
}
footer .flex-parent-ft .flex-child-ft p {
  margin-bottom: 15px;
}
footer .flex-parent-ft .flex-child-ft p a {
  color: #ffffff;
  font-size: 18px;
}
footer .flex-parent-ft .flex-child-ft h4 {
  font-family: "Dosis", sans-serif;
  font-size: 18px;
  color: #ffffff;
  font-weight: bold;
  text-transform: capitalize;
  margin-bottom: 30px;
}
footer .flex-parent-ft .flex-child-ft ul {
  list-style: none;
  margin-left: 0;
}
footer .flex-parent-ft .flex-child-ft ul li {
  margin-bottom: 5px;
}
footer .flex-parent-ft .flex-child-ft ul li a {
  font-family: "Nunito", sans-serif;
  font-size: 14px;
  color: #abb7c4;
  font-weight: regular;
  text-transform: none;
}
footer .flex-parent-ft .flex-child-ft ul li a:hover {
  color: #dcf836;
}
footer .flex-parent-ft .flex-child-ft a.btn {
  font-family: "Dosis", sans-serif;
  font-size: 14px;
  color: #dd003f;
  font-weight: bold;
  text-transform: uppercase;
}
footer .flex-parent-ft .flex-child-ft form {
  margin-bottom: 20px;
}
footer .flex-parent-ft .flex-child-ft form input {
  font-family: "Nunito", sans-serif;
  font-size: 12px;
  color: #abb7c4;
  font-weight: 300;
  text-transform: none;
  background-color: #020d18;
  border-color: #405266;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
  background: url("/images/search-bg.png") no-repeat right 20px center;
}
footer .ft-copyright {
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #405266;
  padding-top: 20px;
  padding-bottom: 10px;
  background-color: #020d18;
  -moz-opacity: 0.7;
  -khtml-opacity: 0.7;
  -webkit-opacity: 0.7;
  opacity: 0.7;
  -ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=70);
  filter: alpha(opacity=70);
  padding-left: 380px;
  padding-right: 380px;
}
@media (max-width: 1200px) {
  footer .ft-copyright {
    padding-left: 125px;
    padding-right: 125px;
  }
}
@media (max-width: 767px) {
  footer .ft-copyright {
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: inherit;
  }
}
footer .ft-copyright .backtotop a:hover {
  color: #dcf836;
}
footer.full-width-ft .ft-copyright {
  border-top: none;
  padding: 0;
  padding-bottom: 15px;
  padding-top: 15px;
}
@media (max-width: 767px) {
  footer.full-width-ft .ft-copyright {
    background: none;
  }
}
</style>