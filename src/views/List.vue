<template>
  <el-header></el-header>
  <el-tabs :tab-position="'left'" style="height: 100%" class="demo-tabs" @tab-change="handleChange" v-model="editableTabName">
    <el-tab-pane label="服装" :name="7" @click="">
      <div class="block">
        <el-scrollbar height="100%">
          <div class="product-wrapper">
            <el-card v-for="product in data" :key="product" :body-style="{ padding: '0px', margin: '0 40px',cursor: 'pointer' }" shadow="hover">
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
          <el-footer>
            <div class="block" style="align-content: center">
              <el-pagination layout="prev, pager, next" :total="250" :page-size="20" @current-change="handlePageChange"/>
            </div>
          </el-footer>
        </el-scrollbar>
      </div>

    </el-tab-pane>
    <el-tab-pane label="食品" :name="8" @click="">
      <div class="block">
        <el-scrollbar height="100%">
          <div class="product-wrapper">
            <el-card v-for="product in data" :key="product" :body-style="{ padding: '0px', margin: '0 40px',cursor: 'pointer' }" shadow="hover">
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
          <el-footer>
            <div class="block" style="align-content: center">
              <el-pagination layout="prev, pager, next" :total="250" :page-size="20" @current-change="handlePageChange"/>
            </div>
          </el-footer>
        </el-scrollbar>
      </div>
    </el-tab-pane >
    <el-tab-pane label="百货" :name="9" @click="">
      <div class="block">
        <el-scrollbar height="100%">
          <div class="product-wrapper">
            <el-card v-for="product in data" :key="product" :body-style="{ padding: '0px', margin: '0 40px',cursor: 'pointer' }" shadow="hover">
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
          <el-footer>
            <div class="block" style="align-content: center">
              <el-pagination layout="prev, pager, next" :total="250" :page-size="20" @current-change="handlePageChange"/>
            </div>
          </el-footer>
        </el-scrollbar>
      </div>
    </el-tab-pane>
    <el-tab-pane label="数码" :name="10" @click="">
      <div class="block">
        <el-scrollbar height="100%">
          <div class="product-wrapper">
            <el-card v-for="product in data" :key="product" :body-style="{ padding: '0px', margin: '0 40px',cursor: 'pointer' }" shadow="hover">
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
          <el-footer>
            <div class="block" style="align-content: center">
              <el-pagination layout="prev, pager, next" :total="250" :page-size="20" @current-change="handlePageChange"/>
            </div>
          </el-footer>
        </el-scrollbar>
      </div>
    </el-tab-pane>
    <el-tab-pane label="电器" :name="11" @click="">
      <div class="block">
        <el-scrollbar height="100%">
          <div class="product-wrapper">
            <el-card v-for="product in data" :key="product" :body-style="{ padding: '0px', margin: '0 40px',cursor: 'pointer' }" shadow="hover">
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
          <el-footer>
            <div class="block" style="align-content: center">
              <el-pagination layout="prev, pager, next" :total="250" :page-size="20" @current-change="handlePageChange"/>
            </div>
          </el-footer>
        </el-scrollbar>
      </div>
    </el-tab-pane>
    <el-tab-pane label="生鲜" :name="12" @click="">
      <div class="block">
        <el-scrollbar height="100%">
          <div class="product-wrapper">
            <el-card v-for="product in data" :key="product" :body-style="{ padding: '0px', margin: '0 40px',cursor: 'pointer' }" shadow="hover">
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
          <el-footer>
            <div class="block" style="align-content: center">
              <el-pagination layout="prev, pager, next" :total="250" :page-size="20" @current-change="handlePageChange"/>
            </div>
          </el-footer>
        </el-scrollbar>
      </div>
    </el-tab-pane>
    <el-tab-pane label="医药" :name="13" @click="">
      <div class="block">
        <el-scrollbar height="100%">
          <div class="product-wrapper">
            <el-card v-for="product in data" :key="product" :body-style="{ padding: '0px', margin: '0 40px',cursor: 'pointer' }" shadow="hover">
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
          <el-footer>
            <div class="block" style="align-content: center">
              <el-pagination layout="prev, pager, next" :total="250" :page-size="20" @current-change="handlePageChange"/>
            </div>
          </el-footer>
        </el-scrollbar>
      </div>
    </el-tab-pane>
    <el-tab-pane label="美妆" :name="14" @click="">
      <div class="block">
        <el-scrollbar height="100%">
          <div class="product-wrapper">
            <el-card v-for="product in data" :key="product" :body-style="{ padding: '0px', margin: '0 40px',cursor: 'pointer' }" shadow="hover">
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
          <el-footer>
            <div class="block" style="align-content: center">
              <el-pagination layout="prev, pager, next" :total="250" :page-size="20" @current-change="handlePageChange"/>
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
const editableTabName = ref(7)
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
      data,
      editableTabName,
    }
  },
  mounted() {
    this.getCategoryData(7);
  },
  methods: {
    getCategoryData: function (categoryId, page, size) {
      page = (page === undefined ? 1 : page);
      size = (size === undefined ? 20 : size);
      let _this = this;
      let index = 0;
      axios.get(`http://1.116.147.57:8080/products/categoryId/${categoryId}?page=${page}&szie=${size}`).then(function (response) {
            console.log(response.data)
            _this.data = response.data.data
          },
          function (err) {
            console.log(err)
          })

    },
    handleChange: function (tabName) {
      this.getCategoryData(tabName)
    },
    handlePageChange: function (val) {
      this.getCategoryData(editableTabName.value, val)
      // to top
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    },
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
  max-width: 1500px;
}

.product-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 40px;
  margin: 0 auto;
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
  overflow:hidden;
  display:-webkit-box;
  -webkit-box-orient:vertical;
  -webkit-line-clamp:2;
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
