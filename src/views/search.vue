<template>
  <el-header></el-header>
  <el-row>
  <div class="search-content">
    <div class="product-wrapper">
      <el-card v-for="product in data" :key="product"
               :body-style="{ padding: '0px', margin: '0 40px',cursor: 'pointer' }" shadow="hover">
        <div class="product">
          <div class="product-img">
            <img :src="product.imgUrl" alt=""
                 @click="$router.push({name: 'detail', params: {productId: product.productId}})"/>
          </div>
          <div class="product-name"
               @click="$router.push({name: 'detail', params: {productId: product.productId}})">
            <span>{{ product.name }}</span>
          </div>
          <div class="product-price">
            <span>￥{{ product.price }}</span>
          </div>
          <div class="product-sales">
            <span>近期销量：{{ product.sales }}</span>
          </div>
        </div>
      </el-card>
    </div>
  </div>
  </el-row>
</template>

<script>
import {ref} from 'vue'
import axios from "axios";

export default {
  name: "search",
  setup() {
    const data = ref(
        {data: ""}
    )
    return {
      data
    }
  },
  mounted() {
    console.log(this.$route.params.productId)
    this.search(this.$route.params.keywords)
    // this.search("衣服")
  },
  methods: {
    search(keywords, page, size) {
      page = page || 1;
      size = size || 40;
      let _this = this;
      axios.get(`http://1.116.147.57:8080/product/search/${keywords}?page=${page}&size=${size}`)
          .then(function (response) {
            _this.data = response.data.data;
          })
          .catch(function (error) {
            console.log(error);
          });
    }
  }
}
</script>

<style scoped>
.search-content {
  margin: auto;
  width: 100%;
  align-content: center;
  min-width: 900px;
  max-width: 1500px;
}
.product-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 40px;
  margin: 0 auto;
  padding: 0 40px;
}

.product {
  width: 220px;
  height: 430px;
}

.product-img {
  width: 100%;
  height: 300px;
  background-color: #ffffff;
  line-height: 300px;
}

.product-price {
  font-size: large;
  color: #ff5a5f;
  display: inline;
}

.product-price span {
  font-size: larger;
  font-weight: bold;
  color: red;
}

.product-name {
  font-size: small;
  font-weight: bold;
  color: #000000;
  text-overflow: ellipsis;
  width: 220px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.product-sales {
  font-size: small;
  color: gray;
  display: inline;
  float: right;
  margin-top: 8px;
}

li {
  list-style: none;
}
</style>
