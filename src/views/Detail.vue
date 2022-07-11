<template>
  <el-container>
    <el-header></el-header>
    <el-main class="detail" style="width: 1500px;margin: 0 auto;">
      <div class="detail-content">
        <div class="goods-image">
          <div class="large" v-show="isShow"
               :style="[{backgroundImage:`url(${imgUrl})`}, bgPosition]"></div>
          <div class="middle" ref="target">
            <el-image :src="imgUrl" fit="fill" style="height: 100%; width: 100%"></el-image>
            <div class="layer" v-show="isShow" :style="[position]"></div>
          </div>
        </div>
        <el-divider direction="vertical" style="height: 400px"></el-divider>
        <div class="goods-info">
          <div class="goods-name" style="font-size: large; font-weight: bold">
            {{ name }}
          </div>
          <div class="goods-detail" style="font-size: medium; color: red">
            {{ detail }}
          </div>
          <br>
          <div class="goods-price" style="font-size: x-large; font-weight: bold; color: red">
            ¥{{ price }}
          </div>
          <br>
          <div class="goods-inventory" style="font-size: large; color: blue">
            库存：{{ inventory }}
          </div>
          <br>
          <div class="goods-sales" style="font-size: larger; color: gray">
            销量：{{ sales }}
          </div>
          <br>
          <div>
            <el-input-number v-model="quantity" :min="1" :max="10" @change="quantityChange"/>

            <el-divider direction="vertical" style="height: 30px"></el-divider>
            <el-button type="primary" @click="addToCart" style="width: 150px">加入购物车</el-button>
          </div>
        </div>
      </div>
    </el-main>
  </el-container>
</template>

<script>
import {reactive, ref, watch} from 'vue'
import {useMouseInElement} from '@vueuse/core'
import axios from 'axios'

const quantity = ref(1)
export default {
  name: 'GoodsImage',
  props: {
    images: {
      type: Array,
      default: () => []
    },
  },
  data() {
    return {
      name: "",
      detail: "",
      price: 0,
      imgUrl: "",
      inventory: 0,
      sales: 0,
      quantity
    }
  },
  mounted() {
    this.getData();
  },
  methods: {
    quantityChange: function (value) {
      console.log(value)
    },
    addToCart: function () {
      if (localStorage.getItem('token')) {
        axios.put("http://1.116.147.57:8080/cart/items",
            [{
              "productId": this.$route.params.productId,
              "quantity": this.quantity
            }],
            {
              headers: {Authorization: localStorage.getItem('token')}
            }).then(function (response) {
              console.log(response)
            },
            function (err) {
              console.log(err)
            })
      } else {
        console.log(1)
      }
    },
    getData: function () {
      let _this = this;
      let productId = this.$route.params.productId;
      if (localStorage.getItem('token')) {
        axios.get(`http://1.116.147.57:8080/product/${productId}`, {
          headers: {Authorization: localStorage.getItem('token')}
        }).then(function (response) {
              console.log(response.data)
              _this.name = response.data.data.name;
              _this.detail = response.data.data.detail;
              _this.price = response.data.data.price;
              _this.imgUrl = response.data.data.imgUrl;
              _this.inventory = response.data.data.inventory;
              _this.sales = response.data.data.sales;
            },
            function (err) {
              console.log(err)
            })
      } else {
        axios.get(`http://1.116.147.57:8080/product/${productId}`).then(function (response) {
              console.log(response.data);
              _this.name = response.data.data.name;
              _this.detail = response.data.data.detail;
              _this.price = response.data.data.price;
              _this.imgUrl = response.data.data.imgUrl;
              _this.inventory = response.data.data.inventory;
              _this.sales = response.data.data.sales;
            },
            function (err) {
              console.log(err)
            })
      }

    }
  },
  setup() {
    const currIndex = ref(0)
    // 被监听的区域
    const target = ref(null)
    // 控制遮罩层和预览图的显示和隐藏
    const isShow = ref(false)
    // 遮罩层位置坐标
    const position = reactive({
      left: 0,
      top: 0
    })
    // 右侧预览大图的坐标
    const bgPosition = reactive({
      backgroundPositionX: 0,
      backgroundPositionY: 0
    })
    const {elementX, elementY, isOutside} = useMouseInElement(target)

    watch([elementX, elementY, isOutside], () => {
      // console.log(elementX.value, elementY.value, isOutside.value)
      // 通过标志位控制显示和隐藏
      isShow.value = !isOutside.value
      // 如果鼠标在图片外面就不在计算
      if (isOutside.value) return
      // X方向坐标范围控制
      if (elementX.value < 100) {
        // 左侧
        position.left = 0
      } else if (elementX.value > 300) {
        // 右侧
        position.left = 200
      } else {
        // 中间
        position.left = elementX.value - 100
      }
      // Y方向坐标范围控制
      if (elementY.value < 100) {
        // 左侧
        position.top = 0
      } else if (elementY.value > 300) {
        // 右侧
        position.top = 200
      } else {
        // 中间
        position.top = elementY.value - 100
      }
      // 计算预览大图的移动的距离
      bgPosition.backgroundPositionX = -position.left * 2 + 'px'
      bgPosition.backgroundPositionY = -position.top * 2 + 'px'
      // 计算遮罩层的位置
      position.left = position.left + 'px'
      position.top = position.top + 'px'
    })
    return {currIndex, target, isShow, position, bgPosition}
  }
}
</script>
<style scoped lang="less">
.goods-image {
  width: 400px;
  height: 400px;
  position: relative;
  display: block;
  z-index: 500;

  .large {
    position: absolute;
    top: 0;
    left: 412px;
    width: 400px;
    height: 400px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-repeat: no-repeat;
    background-size: 800px 800px;
    background-color: #f8f8f8;
  }

  .middle {
    width: 100%;
    height: 100%;
    position: relative;
    display: block;
    cursor: move;

    .layer {
      width: 200px;
      height: 200px;
      background: rgba(0, 0, 0, .2);
      left: 0;
      top: 0;
      position: absolute;
    }
  }
}

.detail-content {
  margin: 0 20px;
  //width: 100%;
  display: flex;
  justify-content: center;

}

.goods-info {
  width: 750px;
  margin: 0px 20px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
</style>
