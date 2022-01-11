<template lang="pug">
b-container#home
  b-row
    b-col(cols='12' md='6' lg='3' v-for='product in products' :key='product._id')
      //-元件 將v-for的product綁進元件的product
      ProductCard(:product='product')
</template>

<script>
import ProductCard from '../components/productCard.vue'

export default {
  components: {
    ProductCard
  },
  data () {
    return {
      products: []
    }
  },
  async created () {
    try {
      const { data } = await this.api.get('/products')
      this.products = data.result
    } catch (error) {
      this.$swal({
        icon: 'error',
        title: '錯誤',
        text: '商品取得失敗'
      })
    }
  }
}
</script>
