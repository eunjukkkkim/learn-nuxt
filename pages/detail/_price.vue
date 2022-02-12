<template>
  <div>
    <h1>페이지</h1>
    <div>{{ product }}</div>
    <img :src="product.imageUrl" :alt="product.name" />
    <p>name: {{ product.name }}</p>
    <p>price: {{ product.price }}</p>
  </div>
</template>

<script>
// import axios from 'axios'
import { fetchProductById } from '@/api/index'

export default {
  async asyncData({ params }) {
    const response = await fetchProductById(params.price)
    const product = response.data

    return { product }
  },
  // created() {
  //   console.log(this.$route)
  //   const id = this.$route.params.id
  //   fetchProductById(id);
  // },
}
</script>

<style></style>
