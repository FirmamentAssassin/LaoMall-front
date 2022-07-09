<template>
  <el-header></el-header>
  <el-tabs :tab-position="'left'" style="height: 100%" class="demo-tabs">
    <el-tab-pane label="服装" @click="getCategoryData(7)">
      <div class="block">
        <el-scrollbar height="100%">
          <div class="product-wrapper">
            <li v-for="product in data" :key="product">
              <div class="product">
                  <div class="product-img">
                    <img :src="product.imgUrl" alt="" @click="$router.push({name: 'detail', params: {productId: product.productId}})"/>
                  </div>
                  <div class="product-name" @click="$router.push({name: 'detail', params: {productId: product.productId}})">
                    <span>{{ product.name }}</span>
                  </div>
                <div class="product-price">
                  <span>￥{{ product.price }}</span>
                </div>
                <div class="product-sales">
                  <span>近期销量：{{ product.sales }}</span>
                </div>
              </div>
            </li>
          </div>
          <el-footer>
            <div class="block" style="align-content: center">
              <el-pagination layout="prev, pager, next" :total="100" :page-size="20"/>
            </div>
          </el-footer>
        </el-scrollbar>
      </div>

    </el-tab-pane>
    <el-tab-pane label="食品" @click="getCategoryData(8)">
      <div class="block">
        <el-scrollbar height="100%">
          <div class="product-wrapper">
            <li v-for="product in data" :key="product">
              <div class="product">
                <div class="product-img">
                  <img :src="product.imgUrl" alt="" @click="$router.push({name: 'detail', params: {productId: product.productId}})"/>
                </div>
                <div class="product-name" @click="$router.push({name: 'detail', params: {productId: product.productId}})">
                  <span>{{ product.name }}</span>
                </div>
                <div class="product-price">
                  <span>￥{{ product.price }}</span>
                </div>
                <div class="product-sales">
                  <span>近期销量：{{ product.sales }}</span>
                </div>
              </div>
            </li>
          </div>
          <el-footer>
            <div class="block" style="align-content: center">
              <el-pagination layout="prev, pager, next" :total="100" :page-size="20"/>
            </div>
          </el-footer>
        </el-scrollbar>
      </div>
    </el-tab-pane>
    <el-tab-pane label="百货" @click="getCategoryData(9)">
      <div class="block">
        <el-scrollbar height="100%">
          <div class="product-wrapper">
            <li v-for="product in data" :key="product">
              <div class="product">
                <div class="product-img">
                  <img :src="product.imgUrl" alt="" @click="$router.push({name: 'detail', params: {productId: product.productId}})"/>
                </div>
                <div class="product-name" @click="$router.push({name: 'detail', params: {productId: product.productId}})">
                  <span>{{ product.name }}</span>
                </div>
                <div class="product-price">
                  <span>￥{{ product.price }}</span>
                </div>
                <div class="product-sales">
                  <span>近期销量：{{ product.sales }}</span>
                </div>
              </div>
            </li>
          </div>
          <el-footer>
            <div class="block" style="align-content: center">
              <el-pagination layout="prev, pager, next" :total="100" :page-size="20"/>
            </div>
          </el-footer>
        </el-scrollbar>
      </div>
    </el-tab-pane>
    <el-tab-pane label="数码" @click="getCategoryData(10)">
      <div class="block">
        <el-scrollbar height="100%">
          <div class="product-wrapper">
            <li v-for="product in data" :key="product">
              <div class="product">
                <div class="product-img">
                  <img :src="product.imgUrl" alt="" @click="$router.push({name: 'detail', params: {productId: product.productId}})"/>
                </div>
                <div class="product-name" @click="$router.push({name: 'detail', params: {productId: product.productId}})">
                  <span>{{ product.name }}</span>
                </div>
                <div class="product-price">
                  <span>￥{{ product.price }}</span>
                </div>
                <div class="product-sales">
                  <span>近期销量：{{ product.sales }}</span>
                </div>
              </div>
            </li>
          </div>
          <el-footer>
            <div class="block" style="align-content: center">
              <el-pagination layout="prev, pager, next" :total="100" :page-size="20"/>
            </div>
          </el-footer>
        </el-scrollbar>
      </div>
    </el-tab-pane>
    <el-tab-pane label="电器" @click="getCategoryData(11)">
      <div class="block">
        <el-scrollbar height="100%">
          <div class="product-wrapper">
            <li v-for="product in data" :key="product">
              <div class="product">
                <div class="product-img">
                  <img :src="product.imgUrl" alt="" @click="$router.push({name: 'detail', params: {productId: product.productId}})"/>
                </div>
                <div class="product-name" @click="$router.push({name: 'detail', params: {productId: product.productId}})">
                  <span>{{ product.name }}</span>
                </div>
                <div class="product-price">
                  <span>￥{{ product.price }}</span>
                </div>
                <div class="product-sales">
                  <span>近期销量：{{ product.sales }}</span>
                </div>
              </div>
            </li>
          </div>
          <el-footer>
            <div class="block" style="align-content: center">
              <el-pagination layout="prev, pager, next" :total="100" :page-size="20"/>
            </div>
          </el-footer>
        </el-scrollbar>
      </div>
    </el-tab-pane>
    <el-tab-pane label="生鲜" @click="getCategoryData(12)">
      <div class="block">
        <el-scrollbar height="100%">
          <div class="product-wrapper">
            <li v-for="product in data" :key="product">
              <div class="product">
                <div class="product-img">
                  <img :src="product.imgUrl" alt="" @click="$router.push({name: 'detail', params: {productId: product.productId}})"/>
                </div>
                <div class="product-name" @click="$router.push({name: 'detail', params: {productId: product.productId}})">
                  <span>{{ product.name }}</span>
                </div>
                <div class="product-price">
                  <span>￥{{ product.price }}</span>
                </div>
                <div class="product-sales">
                  <span>近期销量：{{ product.sales }}</span>
                </div>
              </div>
            </li>
          </div>
          <el-footer>
            <div class="block" style="align-content: center">
              <el-pagination layout="prev, pager, next" :total="100" :page-size="20"/>
            </div>
          </el-footer>
        </el-scrollbar>
      </div>
    </el-tab-pane>
    <el-tab-pane label="医药" @click="getCategoryData(13)">
      <div class="block">
        <el-scrollbar height="100%">
          <div class="product-wrapper">
            <li v-for="product in data" :key="product">
              <div class="product">
                <div class="product-img">
                  <img :src="product.imgUrl" alt="" @click="$router.push({name: 'detail', params: {productId: product.productId}})"/>
                </div>
                <div class="product-name" @click="$router.push({name: 'detail', params: {productId: product.productId}})">
                  <span>{{ product.name }}</span>
                </div>
                <div class="product-price">
                  <span>￥{{ product.price }}</span>
                </div>
                <div class="product-sales">
                  <span>近期销量：{{ product.sales }}</span>
                </div>
              </div>
            </li>
          </div>
          <el-footer>
            <div class="block" style="align-content: center">
              <el-pagination layout="prev, pager, next" :total="100" :page-size="20"/>
            </div>
          </el-footer>
        </el-scrollbar>
      </div>
    </el-tab-pane>
    <el-tab-pane label="美妆" @click="getCategoryData(14)">
      <div class="block">
        <el-scrollbar height="100%">
          <div class="product-wrapper">
            <li v-for="product in data" :key="product">
              <div class="product">
                <div class="product-img">
                  <img :src="product.imgUrl" alt="" @click="$router.push({name: 'detail', params: {productId: product.productId}})"/>
                </div>
                <div class="product-name" @click="$router.push({name: 'detail', params: {productId: product.productId}})">
                  <span>{{ product.name }}</span>
                </div>
                <div class="product-price">
                  <span>￥{{ product.price }}</span>
                </div>
                <div class="product-sales">
                  <span>近期销量：{{ product.sales }}</span>
                </div>
              </div>
            </li>
          </div>
          <el-footer>
            <div class="block" style="align-content: center">
              <el-pagination layout="prev, pager, next" :total="100" :page-size="20"/>
            </div>
          </el-footer>
        </el-scrollbar>
      </div>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
import {inject, reactive, ref} from 'vue'
import axios from 'axios'

const pagination = reactive({
  page: 1,
  size: 20
})

export default {
  name: 'ProductList',
  setup() {
    const data = ref({
      data: ""
    })
    return {
      data
    }
  },
  mounted() {
    this.getCategoryData(7);
  },
  methods: {
    getCategoryData: function (categoryId) {
      let _this = this;
      let index = 0;
      axios.get(`http://1.116.147.57:8080/products/categoryId/${categoryId}`).then(function (response) {
            console.log(response.data)
            _this.data = response.data.data
          },
          function (err) {
            console.log(err)
          })

    }
  }
}
</script>
<style>
.el-pagination {
  justify-content: center;
}

.block {
  margin: auto;
  width: 100%;
  align-content: center;
  min-width: 900px;
  max-width: 1200px;
}

.product-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

  margin: 0 auto;
}

.product {
  margin: 0 40px;
  width: 220px;
  height: 500px;
}

.product-img {
  width: 100%;
  height: 300px;
  background-color: #ffffff;
  line-height: 50px;
}

.product-price {
  font-size: large;
  color: #ff5a5f;
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
}

.product-sales {
  font-size: small;
  color: gray;
}
</style>
