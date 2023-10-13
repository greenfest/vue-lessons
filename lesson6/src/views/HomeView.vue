<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import News from "@/components/News.vue";

export default {
  name: "HomeView",
  components: {Footer, Navbar, News}
}
</script>

<template>
  <div>
    <Navbar />
    <section class="top-content">
      <div class="container">
        <div class="top-content__inner">
          <div class="top-content__info">
            <h1 class="top-content__title">
              Let Your Home
              Be Unique
            </h1>
            <p class="top-content__text">
              There are many variations of the passages of
              lorem Ipsum fromavailable, majority.
            </p>
            <router-link :to="{ name: 'Project' }" class="btn">Get Started <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
              <path d="M2 8.43542L15.7232 8.29857M10.6182 1.91138L17.1412 8.43436L10.4868 15.0887" stroke="#CDA274" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
            </svg></router-link>
          </div>
        </div>
      </div>
    </section>
    <section class="projects">
      <div class="container">
        <h2 class="projects__title">Follow Our Projects</h2>
        <p class="projects__text">It is a long-established fact that a reader will be distracted by the of readable content of page looking at its layouts points.</p>
        <div class="project-items">
          <div class="project-items__card">
            <img src="@/assets/projects-kitchen.jpg" alt="kitchen" class="project-items__img">
            <h3 class="project-items__title">Modern Kitchen</h3>
            <p class="project-items__category">Decor / Architecture</p>
            <router-link :to="{ name: 'Project' }" class="project-items__icon"><svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
              <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
              <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg></router-link>
          </div>
          <div class="project-items__card">
            <img src="@/assets/projects-kitchen2.jpg" alt="kitchen" class="project-items__img">
            <h3 class="project-items__title">Modern Kitchen</h3>
            <p class="project-items__category">Decor / Architecture</p>
            <router-link :to="{ name: 'Project' }" class="project-items__icon"><svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
              <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
              <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg></router-link>
          </div>
          <div class="project-items__card">
            <img src="@/assets/projects-kitchen3.jpg" alt="kitchen" class="project-items__img">
            <h3 class="project-items__title">Modern Kitchen</h3>
            <p class="project-items__category">Decor / Architecture</p>
            <router-link :to="{ name: 'Project' }" class="project-items__icon"><svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
              <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
              <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg></router-link>
          </div>
          <div class="project-items__card">
            <img src="@/assets/projects-kitchen4.jpg" alt="kitchen" class="project-items__img">
            <h3 class="project-items__title">Modern Kitchen</h3>
            <p class="project-items__category">Decor / Architecture</p>
            <router-link :to="{ name: 'Project' }" class="project-items__icon"><svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
              <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
              <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg></router-link>
          </div>
        </div>
      </div>
    </section>

    <div class="features">
      <div class="container">
        <div class="features__inner">
          <div class="features__item">
            <p class="features__number">12</p>
            <p class="features__description">Years Of Experience</p>
          </div>
          <div class="features__item">
            <p class="features__number">85</p>
            <p class="features__description">Success Project</p>
          </div>
          <div class="features__item">
            <p class="features__number">15</p>
            <p class="features__description">Active Project</p>
          </div>
          <div class="features__item">
            <p class="features__number">95</p>
            <p class="features__description">Happy Customers</p>
          </div>
        </div>
      </div>
    </div>
    <News description="It is a long-established fact that a reader will be distracted by the of readable content of a page when looking at its layouts the points of using." />
    <Footer />
  </div>
</template>

<style scoped lang="scss">
.btn {
  padding: 26px;
  color: #ffffff;
  font-family: $Jost;
  font-size: 18px;
  border-radius: 18px;
  background: #292F36;
  box-shadow: 0 10px 20px 0 rgba(192, 192, 192, 0.35);
  text-decoration: none;
  width: 220px;
  text-align: center;
  & svg {
    margin-left: 5px;
  }
}

.btn--large {
  width: 287px;
}

.btn--color {
  background: #CDA274;

}

.top-content {
  margin-top: 57px;
  & .container {

  }
  &__inner {
    padding: 208px 52px;
    border-radius: 70px;
    background-image: url("~@/assets/top-content.jpg");
    background-size: cover;
  }
  &__info {
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 434px;
  }
  &__title {
    font-size: 65px;
    font-family: $dmSerif;
    line-height: 125%;
    color: $colorPrimary2;
  }
  &__text {
    font-size: 22px;
    font-family: $Jost;
    line-height: 150%;
    color: $colorPrimary2;
  }
}

/* Projects */
.projects {
  margin-top: 96px;
  &__title {
    font-family: $dmSerif;
    font-size: 50px;
    line-height: 125%;
    color: $colorPrimary2;
    text-align: center;
  }
  &__text {
    font-family: $Jost;
    font-size: 22px;
    line-height: 150%;
    color: #4D5053;
    max-width: 737px;
    text-align: center;
    margin: 8px auto;
  }
}

/* Projects */
.project-items {
  margin-top: 93px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(547px, 1fr));
  gap: 56px 105px;
  &__card:first-child img{
    border-radius: 0 70px 0 0;
  }
  &__card:nth-child(2) img{
    border-radius: 70px 0 0 0;
  }
  &__card:nth-child(3) img{
    border-radius: 0 0 70px 0;
  }
  &__card:last-child img{
    border-radius: 0 0 0 70px;
  }
  &__title {
    color: $colorPrimary2;
    font-family: $dmSerif;
    font-size: 25px;
    line-height: 125%;
    letter-spacing: 0.5px;
    margin-top: 30px;
  }
  &__category {
    color: #4D5053;
    font-family: $Jost;
    font-size: 22px;
    line-height: 150%;
    letter-spacing: 0.22px;
  }
  &__card {
    position: relative;
  }
  &__icon {
    position: absolute;
    bottom: 0;
    right: 0;
  }
}

/* Features */
.features {
  background-color: #F4F0EC;
  margin-top: 96px;
  padding: 151px 0;
  &__inner {
    display: flex;
    justify-content: center;
    //gap: 76px;
  }
  &__item {
    padding: 0 65px;
    border-right: 1px solid #CDA274;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  &__item:last-child {
    border-right: 0;
  }
  &__number {
    color: $colorPrimary1;
    font-family: $dmSerif;
    line-height: 125%;
    letter-spacing: 1.7px;
    font-size: 85px;
  }
  &__description {
    color: #4d5053;
    font-family: $Jost;
    font-size: 22px;
    line-height: 150%;
    letter-spacing: 0.22px;
    margin-top: 16px;
  }
}
</style>