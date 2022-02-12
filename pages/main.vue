<template>
  <dir>
    <h2>메인 페이지 입니다.</h2>
    <div>
      <ul>
        <li v-for="product in products" :key="product.id">
          <img :src="product.imageUrl" :alt="product.name" />
          <p>{{ product.name }}</p>
          <p>{{ product.price }}</p>
        </li>
      </ul>
    </div>
    {{ products }}
  </dir>
</template>

<script>
import axios from 'axios'
import productList from '@/components/ProductList.vue'

export default {
  components: { productList },

  async asyncData() {
    const response = await axios.get('http://localhost:3000/products')
    console.log(response)
    const products = response.data.map((item) => ({
      ...item,
      imageUrl: `${item.imageUrl}?random=${Math.random()}`,
    }))
    return { products }
  },
}
</script>

<style></style>
