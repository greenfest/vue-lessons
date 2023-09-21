<template>
  <div class="product-list-container">
    <div class="sort-options">
      <label for="sort">Sort by:</label>
      <select v-model="sortBy" id="sort">
        <option value="price_asc">Price (Low to High)</option>
        <option value="price_desc">Price (High to Low)</option>
      </select>
    </div>
    <div class="product-list">
      <ProductCard v-for="product in sortedProducts" :key="product.id" :product="product" />
    </div>
  </div>
</template>

<script>
import ProductCard from './ProductCard.vue';

export default {
  components: {
    ProductCard
  },
  data() {
    return {
      products: [],
      sortBy: 'price_asc'
    }
  },
  computed: {
    sortedProducts() {
      const sorted = [...this.products];
      if (this.sortBy === 'price_asc') {
        sorted.sort((a, b) => a.price - b.price);
      } else if (this.sortBy === 'price_desc') {
        sorted.sort((a, b) => b.price - a.price);
      }
      return sorted;
    }
  },
  mounted() {
    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => {
          this.products = data.map(item => ({
            id: item.id,
            name: item.title,
            description: item.description,
            price: item.price,
            imageUrl: item.image
          }));
        });
  }
}
</script>

<style scoped>
.product-list-container {
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
  padding: 0 15px;
}

.product-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 20px;
}
</style>

