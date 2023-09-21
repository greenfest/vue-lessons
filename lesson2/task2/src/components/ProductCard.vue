<template>
  <div class="product-card">
    <div class="product-image-container">
      <img v-if="product.imageUrl" :src="product.imageUrl" class="product-image" alt="Product Image">
    </div>
    <div class="product-info">
      <h3 class="product-title">{{ product.name }}</h3>
      <p class="product-description">{{ product.description }}</p>
      <p class="product-price"><strong>Price: ${{ product.price.toFixed(2) }}</strong></p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  product: {
      type: Object,
      required: true
    },
})
</script>

<style scoped>
.product-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: calc(33.33% - 20px);
  margin-right: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.product-image-container {
  text-align: center;
}

.product-image {
  max-width: 100%;
  height: auto;
  max-height: 250px;
  border-radius: 4px;
  margin-bottom: 10px;
}

.product-info {
  text-align: center;
}

.product-title {
  font-size: 1.25em;
  margin: 10px 0;
}

.product-description {
  font-size: 1em;
  margin-bottom: 10px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.product-price {
  font-size: 1.1em;
}
</style>
