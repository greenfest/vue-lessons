<script setup>

</script>

<template>
  <header class="header">
    <div class="container header__wrapper">
      <div class="logo__wrapper">
        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
          <path d="M0 34.0003H13.4588V24.499C13.4588 22.4853 15.0898 20.8543 17.1035 20.8543C19.1172 20.8543 20.7482 22.4853 20.7482 24.499V34.0003H33.9975V0C15.2211 0 0 15.2211 0 34.0003Z" fill="#CDA274"/>
        </svg>
        <p class="logo__text">Interno</p>
      </div>
      <nav class="nav">
        <a href="/" class="nav__link">Home</a>
        <a href="#" class="nav__link">Project</a>
        <a href="#" class="nav__link">Blog</a>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import '../scss/_fonts.scss';

$colorPrimary2: #292F36;
$dmSerif: 'DM Serif Display', serif;
$Jost: 'Jost', sans-serif;

.header {
  margin-top: 53px;
  &__wrapper {
    display: flex;
    justify-content: space-between;
  }
}
.logo {
  &__wrapper {
    display: flex;
  }
  &__text {
    color: $colorPrimary2;
    font-family: $dmSerif;
    font-size: 40px;
    margin-left: 10px;
  }
}

.nav {
  display: flex;
  gap: 40px;
  &__link {
    color: $colorPrimary2;
    font-family: $Jost;
    line-height: 125%;
    font-size: 20px;
    text-decoration: none;
  }
}
</style>