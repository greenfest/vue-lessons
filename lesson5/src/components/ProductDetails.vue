<template>
  <div class="container">
    <div class="card is-wide">
      <div class="card-image is-flex is-justify-content-center">
        <figure class="image is-128x128">
          <img src="https://prd.place/300/300" alt="Placeholder image" />
        </figure>
      </div>
      <div class="card-content">
        <div
          class="content is-flex is-flex-direction-column is-justify-content-center is-align-items-center"
        >
          <h1 class="title">{{ product.name }}</h1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
          iaculis mauris.
          <br />
          <h2 class="subtitle">{{ formattedPrice }}</h2>
          <time datetime="2016-01-01">11:09 PM - 1 Jan 2016</time>
          <div v-if="product.available" class="mt-4">
            <b-notification
              type="is-success"
              aria-close-label="Close notification"
            >
              Available
            </b-notification>
          </div>
          <div v-else class="mt-4">
            <b-notification
              type="is-danger"
              aria-close-label="Close notification"
            >
              Out of stock
            </b-notification>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductDetails",
  data() {
    return {
      product: {
        name: "Product Name",
        price: 99.99,
        available: true,
      },
    };
  },
  computed: {
    formattedPrice() {
      return "$" + this.product.price.toFixed(2);
    },
  },
};
</script>

<style scoped lang="scss"></style>
