<template>
  <el-header></el-header>
  <el-tabs :tab-position="'left'" style="height: 1000px" class="demo-tabs">
    <el-tab-pane label="服装" style="width: 100%;">
      <el-main>
        <div class="block">
          <div class="product-wrapper">
            <div class="product">
              <div class="product-img">
              <img src="//img13.360buyimg.com/n7/jfs/t1/153494/4/21511/196890/6253f2bfE043f9f84/752ca3f807bfa3f8.jpg" fit="fill"/>
              </div>
              <div class="product-price"><span>￥</span> 123123123</div>
                <div class="product-name">青岛海捕大虾4斤装16-20CM鲜冻青虾冷冻海虾2000g基围虾类国产生鲜海鲜水产白虾-</div>
              <div class="product-description">【52年老品牌丨质量保证丨值得信赖】升级大功率煮饭够快，加厚内胆不易夹生不易粘锅，多种容量可选，大部分地区当日达/次日达！【爆款电热锅，蒸煮炒炖涮一锅多能】</div>
            </div>
            <div class="product">
              <div class="product-img">
                <img src="//img13.360buyimg.com/n7/jfs/t1/153494/4/21511/196890/6253f2bfE043f9f84/752ca3f807bfa3f8.jpg" fit="fill"/>
              </div>
              <div class="product-price"><span>￥</span> 123123123</div>
              <div class="product-name">青岛海捕大虾4斤装16-20CM鲜冻青虾冷冻海虾2000g基围虾类国产生鲜海鲜水产白虾-</div>
              <div class="product-description">【52年老品牌丨质量保证丨值得信赖】升级大功率煮饭够快，加厚内胆不易夹生不易粘锅，多种容量可选，大部分地区当日达/次日达！【爆款电热锅，蒸煮炒炖涮一锅多能】</div>
            </div>
            <div class="product">
              <div class="product-img">
                <img src="//img13.360buyimg.com/n7/jfs/t1/153494/4/21511/196890/6253f2bfE043f9f84/752ca3f807bfa3f8.jpg" fit="fill"/>
              </div>
              <div class="product-price"><span>￥</span> 123123123</div>
              <div class="product-name">青岛海捕大虾4斤装16-20CM鲜冻青虾冷冻海虾2000g基围虾类国产生鲜海鲜水产白虾-</div>
              <div class="product-description">【52年老品牌丨质量保证丨值得信赖】升级大功率煮饭够快，加厚内胆不易夹生不易粘锅，多种容量可选，大部分地区当日达/次日达！【爆款电热锅，蒸煮炒炖涮一锅多能】</div>
            </div>
            <div class="product">
              <div class="product-img">
                <img src="//img13.360buyimg.com/n7/jfs/t1/153494/4/21511/196890/6253f2bfE043f9f84/752ca3f807bfa3f8.jpg" fit="fill"/>
              </div>
              <div class="product-price"><span>￥</span> 123123123</div>
              <div class="product-name">青岛海捕大虾4斤装16-20CM鲜冻青虾冷冻海虾2000g基围虾类国产生鲜海鲜水产白虾-</div>
              <div class="product-description">【52年老品牌丨质量保证丨值得信赖】升级大功率煮饭够快，加厚内胆不易夹生不易粘锅，多种容量可选，大部分地区当日达/次日达！【爆款电热锅，蒸煮炒炖涮一锅多能】</div>
            </div>
            <div class="product">
              <div class="product-img">
                <img src="//img13.360buyimg.com/n7/jfs/t1/153494/4/21511/196890/6253f2bfE043f9f84/752ca3f807bfa3f8.jpg" fit="fill"/>
              </div>
              <div class="product-price"><span>￥</span> 123123123</div>
              <div class="product-name">青岛海捕大虾4斤装16-20CM鲜冻青虾冷冻海虾2000g基围虾类国产生鲜海鲜水产白虾-</div>
              <div class="product-description">【52年老品牌丨质量保证丨值得信赖】升级大功率煮饭够快，加厚内胆不易夹生不易粘锅，多种容量可选，大部分地区当日达/次日达！【爆款电热锅，蒸煮炒炖涮一锅多能】</div>
            </div>
          </div>


        </div>
      </el-main>
      <el-footer>
        <el-pagination layout="prev, pager, next" :total="50"/>
      </el-footer>
    </el-tab-pane>
    <el-tab-pane label="食品">食品</el-tab-pane>
    <el-tab-pane label="百货">百货</el-tab-pane>
    <el-tab-pane label="数码">数码</el-tab-pane>
    <el-tab-pane label="电器">电器</el-tab-pane>
    <el-tab-pane label="生鲜">生鲜</el-tab-pane>
    <el-tab-pane label="医药">医药</el-tab-pane>
    <el-tab-pane label="美妆">美妆</el-tab-pane>
  </el-tabs>
</template>
<script lang="ts" setup>
import {ref} from 'vue'

</script>
<style>
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}

.el-tabs--right .el-tabs__content,
.el-tabs--left .el-tabs__content {
  height: 100%;
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
  line-height: 300px;
}
.product-price {
  font-size: large;
  color: #ff5a5f;
}
.product-price span {
  font-size: medium;
  color: #ff5a5f;
}
.product-name {
  font-size: small;
  color: #000000;
  text-overflow: ellipsis;
  width: 220px;
  /*white-space: nowrap;*/
  /*overflow: hidden;*/
}
.product-description {
  font-size: small;
  color: #000000;
  text-overflow: ellipsis;
  width: 220px;
  white-space: nowrap;
  overflow: hidden;
}
</style>
