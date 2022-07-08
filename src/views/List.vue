<template>
  <el-header></el-header>
  <el-tabs :tab-position="'left'" style="height: 1000px" class="demo-tabs">
    <el-tab-pane label="服装">
      <el-main>
        <div class="block">
          <span class="demonstration">Default</span>
          <el-image :src="src" />
        </div>
      </el-main>
      <el-footer>
        <el-pagination layout="prev, pager, next" :total="50" />
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
import { ref } from 'vue'

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
</style>
