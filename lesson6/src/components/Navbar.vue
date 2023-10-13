<template>
  <header class="header">
    <div class="container header__wrapper">
      <router-link class="logo__link" :to="{ name: 'Home' }">
        <div class="logo__wrapper">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
          >
            <path
                d="M0 34.0003H13.4588V24.499C13.4588 22.4853 15.0898 20.8543 17.1035 20.8543C19.1172 20.8543 20.7482 22.4853 20.7482 24.499V34.0003H33.9975V0C15.2211 0 0 15.2211 0 34.0003Z"
                fill="#CDA274"
            />
          </svg>
          <p class="logo__text">Interno</p>
        </div>
      </router-link>
      <nav class="nav">
        <router-link to="/" class="nav__link">Home</router-link>
        <router-link to="/project" class="nav__link">Project</router-link>
        <router-link to="/blog" class="nav__link">Blog</router-link>
      </nav>
    </div>
  </header>
</template>

<script>
</script>

<style lang="scss" scoped>
//@import "../scss/fonts";
//@import "../scss/variables";

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
    align-items: center;
  }
  &__text {
    color: $colorPrimary2;
    font-family: $dmSerif;
    font-size: 40px;
    margin-left: 10px;
  }
  &__link {
    text-decoration: none;
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
