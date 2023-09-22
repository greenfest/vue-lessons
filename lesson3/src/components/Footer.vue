<script setup>

</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__inner">
        <div class="footer__left-column">
          <div class="footer__logo">
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="34" viewBox="0 0 35 34" fill="none">
              <path
                  d="M0.5 34.0003H13.9588V24.499C13.9588 22.4853 15.5898 20.8543 17.6035 20.8543C19.6172 20.8543 21.2482 22.4853 21.2482 24.499V34.0003H34.4975V0C15.7211 0 0.5 15.2211 0.5 34.0003Z"
                  fill="#CDA274"/>
            </svg>
            <p class="footer__logo-text">Interno</p>
          </div>
          <p class="footer__text">
            It is a long established fact that a reader will be distracted lookings.
          </p>
          <div class="footer__icons">
            <i class="fa-brands fa-twitter"></i> <i class="fa-brands fa-linkedin-in"></i>
          </div>
        </div>
        <div class="footer__center-column">
          <h4 class="footer__nav-title">Pages</h4>
          <nav class="footer__nav">
            <a href="/" class="footer__nav-link">Home</a>
            <a href="#" class="footer__nav">Project</a>
            <a href="#" class="footer__nav">Blog</a>
          </nav>
        </div>
        <div class="footer__right-column">
          <p class="footer__contact">Contact</p>
          <p class="footer__address">55 East Birchwood Ave. Brooklyn, New York 11201</p>
          <p class="footer__email">contact@interno.com</p>
          <p class="footer__phone">(123) 456 - 7890</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
@import '../scss/fonts';
@import '../scss/variables';

.footer {
  margin-top: 96px;
  padding-bottom: 134px;
  &__inner {
    display: flex;
    justify-content: space-between;
  }
  &__left-column {
    width: calc(100% / 3);
  }
  &__logo {
    display: flex;
    align-items: center;
    &-text {
      color: $colorPrimary2;
      font-family: $dmSerif;
      font-size: 40px;
      line-height: 125%;
      margin-left: 10px;
    }
  }
  &__text {
    color: #4D5053;
    font-family: $Jost;
    font-size: 22px;
    line-height: 150%;
    letter-spacing: 0.22px;
    margin-top: 10px;
  }
  &__icons {
    margin-top: 31px;
  }
  &__icons .fa-linkedin-in {
    margin-left: 54px;
  }
  &__center-column {
    padding-left: 200px;
    width: calc(100% / 3);
  }
  &__nav-title {
    font-family: $dmSerif;
    color: $colorPrimary2;
    font-size: 25px;
    line-height: 125%;
  }
  &__nav {
    display: flex;
    flex-direction: column;
    & a {
      text-decoration: none;
      color: #4D5053;
      font-family: $Jost;
      font-size: 22px;
      line-height: 300%;
      letter-spacing: 0.22px;
    }
  }
  &__right-column {
    padding-left: 200px;
    width: calc(100% / 3);
  }
  &__contact {
    font-family: $dmSerif;
    color: $colorPrimary2;
    font-size: 25px;
    line-height: 125%;
  }
  &__address {
    color: #4D5053;
    font-family: $Jost;
    font-size: 22px;
    letter-spacing: 0.22px;
    margin-top: 20px;
  }
  &__email {
    color: #4D5053;
    font-family: $Jost;
    font-size: 22px;
    line-height: 300%;
    letter-spacing: 0.22px;
  }
  &__phone {
    color: #4D5053;
    font-family: $Jost;
    font-size: 22px;
    line-height: 300%;
    letter-spacing: 0.22px;
  }

}
</style>