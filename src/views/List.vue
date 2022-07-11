<template>
  <el-header></el-header>
  <el-tabs :tab-position="'left'" style="height: 100%" class="demo-tabs" @tab-change="handleChange"
           v-model="editableTabName">
    <el-tab-pane label="服装" :name="7" @click="">
      <!--      sub tab-->
      <el-tabs type="card" :tab-position="'top'" id="123" class="sub7-tabs" @tab-change="handleSubChange"
               v-model="editableSubTabName" stretch>
        <!--        sub tab list-->
        <el-tab-pane label="上衣" :name="'上衣'">
          <div class="block">
            <el-scrollbar height="100%">
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
              <el-footer>
                <!--                <div class="block" style="align-content: center">-->
                <!--                  <el-pagination layout="prev, pager, next" :total="250" :page-size="20" @current-change="handlePageChange"/>-->
                <!--                </div>-->
              </el-footer>
            </el-scrollbar>
          </div>
        </el-tab-pane>
        <el-tab-pane label="长裤" :name="'长裤'">
          <div class="block">
            <el-scrollbar height="100%">
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
              <el-footer>
                <!--                <div class="block" style="align-content: center">-->
                <!--                  <el-pagination layout="prev, pager, next" :total="250" :page-size="20" @current-change="handlePageChange"/>-->
                <!--                </div>-->
              </el-footer>
            </el-scrollbar>
          </div>
        </el-tab-pane>
        <el-tab-pane label="外套" :name="'外套'">
          <div class="block">
            <el-scrollbar height="100%">
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
              <el-footer>
                <!--                <div class="block" style="align-content: center">-->
                <!--                  <el-pagination layout="prev, pager, next" :total="250" :page-size="20" @current-change="handlePageChange"/>-->
                <!--                </div>-->
              </el-footer>
            </el-scrollbar>
          </div>
        </el-tab-pane>
        <el-tab-pane label="短裤" :name="'短裤'">
          <div class="block">
            <el-scrollbar height="100%">
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
              <el-footer>
                <!--                <div class="block" style="align-content: center">-->
                <!--                  <el-pagination layout="prev, pager, next" :total="250" :page-size="20" @current-change="handlePageChange"/>-->
                <!--                </div>-->
              </el-footer>
            </el-scrollbar>
          </div>
        </el-tab-pane>
      </el-tabs>
    </el-tab-pane>
    <el-tab-pane label="食品" :name="8" @click="">
      <el-tabs type="card" :tab-position="'top'" class="sub8-tabs" @tab-change="handleSubChange"
               v-model="editableSubTabName" stretch>
        <!--        sub tab list-->
        <el-tab-pane label="饼干" :name="'饼干'">
          <div class="block">
            <el-scrollbar height="100%">
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
              <el-footer>
                <!--                <div class="block" style="align-content: center">-->
                <!--                  <el-pagination layout="prev, pager, next" :total="250" :page-size="20" @current-change="handlePageChange"/>-->
                <!--                </div>-->
              </el-footer>
            </el-scrollbar>
          </div>
        </el-tab-pane>
        <el-tab-pane label="面包" :name="'面包'">
          <div class="block">
            <el-scrollbar height="100%">
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
              <el-footer>
                <!--                <div class="block" style="align-content: center">-->
                <!--                  <el-pagination layout="prev, pager, next" :total="250" :page-size="20" @current-change="handlePageChange"/>-->
                <!--                </div>-->
              </el-footer>
            </el-scrollbar>
          </div>
        </el-tab-pane>
        <el-tab-pane label="卤味" :name="'卤'">
          <div class="block">
            <el-scrollbar height="100%">
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
              <el-footer>
                <!--                <div class="block" style="align-content: center">-->
                <!--                  <el-pagination layout="prev, pager, next" :total="250" :page-size="20" @current-change="handlePageChange"/>-->
                <!--                </div>-->
              </el-footer>
            </el-scrollbar>
          </div>
        </el-tab-pane>
        <el-tab-pane label="蛋糕" :name="'蛋糕'">
          <div class="block">
            <el-scrollbar height="100%">
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
              <el-footer>
                <!--                <div class="block" style="align-content: center">-->
                <!--                  <el-pagination layout="prev, pager, next" :total="250" :page-size="20" @current-change="handlePageChange"/>-->
                <!--                </div>-->
              </el-footer>
            </el-scrollbar>
          </div>
        </el-tab-pane>
      </el-tabs>
    </el-tab-pane>
    <el-tab-pane label="百货" :name="9" @click="">
      <el-tabs type="card" :tab-position="'top'" class="sub9-tabs" @tab-change=""
               v-model="editableSubTabName" stretch>
        <!--        sub tab list-->
        <el-tab-pane label="收纳" :name="'收纳'">
          <div class="block">
            <el-scrollbar height="100%">
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
              <el-footer>
                <!--                <div class="block" style="align-content: center">-->
                <!--                  <el-pagination layout="prev, pager, next" :total="250" :page-size="20" @current-change="handlePageChange"/>-->
                <!--                </div>-->
              </el-footer>
            </el-scrollbar>
          </div>
        </el-tab-pane>
        <el-tab-pane label="挂钩" :name="'挂钩'">
          <div class="block">
            <el-scrollbar height="100%">
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
              <el-footer>
                <!--                <div class="block" style="align-content: center">-->
                <!--                  <el-pagination layout="prev, pager, next" :total="250" :page-size="20" @current-change="handlePageChange"/>-->
                <!--                </div>-->
              </el-footer>
            </el-scrollbar>
          </div>
        </el-tab-pane>
        <el-tab-pane label="刷子" :name="'刷子'">
          <div class="block">
            <el-scrollbar height="100%">
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
              <el-footer>
                <!--                <div class="block" style="align-content: center">-->
                <!--                  <el-pagination layout="prev, pager, next" :total="250" :page-size="20" @current-change="handlePageChange"/>-->
                <!--                </div>-->
              </el-footer>
            </el-scrollbar>
          </div>
        </el-tab-pane>
      </el-tabs>
    </el-tab-pane>
    <el-tab-pane label="数码" :name="10" @click="">
      <el-tabs type="card" :tab-position="'top'" class="sub-tabs" @tab-change="handleSubChange"
               v-model="editableSubTabName" stretch>
        <!--        sub tab list-->
        <el-tab-pane label="相机" :name="'相机'">
          <div class="block">
            <el-scrollbar height="100%">
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
              <el-footer>
                <!--                <div class="block" style="align-content: center">-->
                <!--                  <el-pagination layout="prev, pager, next" :total="250" :page-size="20" @current-change="handlePageChange"/>-->
                <!--                </div>-->
              </el-footer>
            </el-scrollbar>
          </div>
        </el-tab-pane>
        <el-tab-pane label="硬盘" :name="'硬盘'">
          <div class="block">
            <el-scrollbar height="100%">
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
              <el-footer>
                <!--                <div class="block" style="align-content: center">-->
                <!--                  <el-pagination layout="prev, pager, next" :total="250" :page-size="20" @current-change="handlePageChange"/>-->
                <!--                </div>-->
              </el-footer>
            </el-scrollbar>
          </div>
        </el-tab-pane>
        <el-tab-pane label="U盘" :name="'U盘'">
          <div class="block">
            <el-scrollbar height="100%">
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
              <el-footer>
                <!--                <div class="block" style="align-content: center">-->
                <!--                  <el-pagination layout="prev, pager, next" :total="250" :page-size="20" @current-change="handlePageChange"/>-->
                <!--                </div>-->
              </el-footer>
            </el-scrollbar>
          </div>
        </el-tab-pane>
        <el-tab-pane label="耳机" :name="'耳机'">
          <div class="block">
            <el-scrollbar height="100%">
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
              <el-footer>
                <!--                <div class="block" style="align-content: center">-->
                <!--                  <el-pagination layout="prev, pager, next" :total="250" :page-size="20" @current-change="handlePageChange"/>-->
                <!--                </div>-->
              </el-footer>
            </el-scrollbar>
          </div>
        </el-tab-pane>
        <el-tab-pane label="键鼠" :name="'键鼠'">
          <div class="block">
            <el-scrollbar height="100%">
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
              <el-footer>
                <!--                <div class="block" style="align-content: center">-->
                <!--                  <el-pagination layout="prev, pager, next" :total="250" :page-size="20" @current-change="handlePageChange"/>-->
                <!--                </div>-->
              </el-footer>
            </el-scrollbar>
          </div>
        </el-tab-pane>
      </el-tabs>
    </el-tab-pane>
    <el-tab-pane label="电器" :name="11" @click="">
      <el-tabs type="card" :tab-position="'top'" class="sub-tabs" @tab-change="handleSubChange"
               v-model="editableSubTabName" stretch>
        <!--        sub tab list-->
        <el-tab-pane label="冰箱" :name="'冰箱'">
          <div class="block">
            <el-scrollbar height="100%">
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
              <el-footer>
                <!--                <div class="block" style="align-content: center">-->
                <!--                  <el-pagination layout="prev, pager, next" :total="250" :page-size="20" @current-change="handlePageChange"/>-->
                <!--                </div>-->
              </el-footer>
            </el-scrollbar>
          </div>
        </el-tab-pane>
        <el-tab-pane label="空调" :name="'空调'">
          <div class="block">
            <el-scrollbar height="100%">
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
              <el-footer>
                <!--                <div class="block" style="align-content: center">-->
                <!--                  <el-pagination layout="prev, pager, next" :total="250" :page-size="20" @current-change="handlePageChange"/>-->
                <!--                </div>-->
              </el-footer>
            </el-scrollbar>
          </div>
        </el-tab-pane>
        <el-tab-pane label="洗衣机" :name="'洗衣机'">
          <div class="block">
            <el-scrollbar height="100%">
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
              <el-footer>
                <!--                <div class="block" style="align-content: center">-->
                <!--                  <el-pagination layout="prev, pager, next" :total="250" :page-size="20" @current-change="handlePageChange"/>-->
                <!--                </div>-->
              </el-footer>
            </el-scrollbar>
          </div>
        </el-tab-pane>
        <el-tab-pane label="风扇" :name="'风扇'">
          <div class="block">
            <el-scrollbar height="100%">
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
              <el-footer>
                <!--                <div class="block" style="align-content: center">-->
                <!--                  <el-pagination layout="prev, pager, next" :total="250" :page-size="20" @current-change="handlePageChange"/>-->
                <!--                </div>-->
              </el-footer>
            </el-scrollbar>
          </div>
        </el-tab-pane>
      </el-tabs>
    </el-tab-pane>
    <el-tab-pane label="生鲜" :name="12" @click="">
      <el-tabs type="card" :tab-position="'top'" class="sub-tabs" @tab-change="handleSubChange"
               v-model="editableSubTabName" stretch>
        <!--        sub tab list-->
        <el-tab-pane label="水果" :name="'水果'">
          <div class="block">
            <el-scrollbar height="100%">
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
              <el-footer>
                <!--                <div class="block" style="align-content: center">-->
                <!--                  <el-pagination layout="prev, pager, next" :total="250" :page-size="20" @current-change="handlePageChange"/>-->
                <!--                </div>-->
              </el-footer>
            </el-scrollbar>
          </div>
        </el-tab-pane>
        <el-tab-pane label="鱼类" :name="'鱼'">
          <div class="block">
            <el-scrollbar height="100%">
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
              <el-footer>
                <!--                <div class="block" style="align-content: center">-->
                <!--                  <el-pagination layout="prev, pager, next" :total="250" :page-size="20" @current-change="handlePageChange"/>-->
                <!--                </div>-->
              </el-footer>
            </el-scrollbar>
          </div>
        </el-tab-pane>
        <el-tab-pane label="虾类" :name="'虾类'">
          <div class="block">
            <el-scrollbar height="100%">
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
              <el-footer>
                <!--                <div class="block" style="align-content: center">-->
                <!--                  <el-pagination layout="prev, pager, next" :total="250" :page-size="20" @current-change="handlePageChange"/>-->
                <!--                </div>-->
              </el-footer>
            </el-scrollbar>
          </div>
        </el-tab-pane>
        <el-tab-pane label="面点" :name="'面点'">
          <div class="block">
            <el-scrollbar height="100%">
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
              <el-footer>
                <!--                <div class="block" style="align-content: center">-->
                <!--                  <el-pagination layout="prev, pager, next" :total="250" :page-size="20" @current-change="handlePageChange"/>-->
                <!--                </div>-->
              </el-footer>
            </el-scrollbar>
          </div>
        </el-tab-pane>
      </el-tabs>
    </el-tab-pane>
    <el-tab-pane label="医药" :name="13" @click="">
      <el-tabs type="card" :tab-position="'top'" class="sub-tabs" @tab-change="handleSubChange"
               v-model="editableSubTabName" stretch>
        <!--        sub tab list-->
        <el-tab-pane label="急救箱" :name="'急救箱'">
          <div class="block">
            <el-scrollbar height="100%">
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
              <el-footer>
                <!--                <div class="block" style="align-content: center">-->
                <!--                  <el-pagination layout="prev, pager, next" :total="250" :page-size="20" @current-change="handlePageChange"/>-->
                <!--                </div>-->
              </el-footer>
            </el-scrollbar>
          </div>
        </el-tab-pane>
        <el-tab-pane label="注射器" :name="'注射器'">
          <div class="block">
            <el-scrollbar height="100%">
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
              <el-footer>
                <!--                <div class="block" style="align-content: center">-->
                <!--                  <el-pagination layout="prev, pager, next" :total="250" :page-size="20" @current-change="handlePageChange"/>-->
                <!--                </div>-->
              </el-footer>
            </el-scrollbar>
          </div>
        </el-tab-pane>
        <el-tab-pane label="碘伏" :name="'碘伏'">
          <div class="block">
            <el-scrollbar height="100%">
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
              <el-footer>
                <!--                <div class="block" style="align-content: center">-->
                <!--                  <el-pagination layout="prev, pager, next" :total="250" :page-size="20" @current-change="handlePageChange"/>-->
                <!--                </div>-->
              </el-footer>
            </el-scrollbar>
          </div>
        </el-tab-pane>
      </el-tabs>
    </el-tab-pane>
    <el-tab-pane label="美妆" :name="14" @click="">
      <el-tabs type="card" :tab-position="'top'" class="sub-tabs" @tab-change="handleSubChange"
               v-model="editableSubTabName" stretch>
        <!--        sub tab list-->
        <el-tab-pane label="口红" :name="'口红'">
          <div class="block">
            <el-scrollbar height="100%">
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
              <el-footer>
                <!--                <div class="block" style="align-content: center">-->
                <!--                  <el-pagination layout="prev, pager, next" :total="250" :page-size="20" @current-change="handlePageChange"/>-->
                <!--                </div>-->
              </el-footer>
            </el-scrollbar>
          </div>
        </el-tab-pane>
        <el-tab-pane label="洗面奶" :name="'洗面奶'">
          <div class="block">
            <el-scrollbar height="100%">
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
              <el-footer>
                <!--                <div class="block" style="align-content: center">-->
                <!--                  <el-pagination layout="prev, pager, next" :total="250" :page-size="20" @current-change="handlePageChange"/>-->
                <!--                </div>-->
              </el-footer>
            </el-scrollbar>
          </div>
        </el-tab-pane>
        <el-tab-pane label="水乳" :name="'水乳'">
          <div class="block">
            <el-scrollbar height="100%">
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
              <el-footer>
                <!--                <div class="block" style="align-content: center">-->
                <!--                  <el-pagination layout="prev, pager, next" :total="250" :page-size="20" @current-change="handlePageChange"/>-->
                <!--                </div>-->
              </el-footer>
            </el-scrollbar>
          </div>
        </el-tab-pane>
        <el-tab-pane label="香水" :name="'香水'">
          <div class="block">
            <el-scrollbar height="100%">
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
              <el-footer>
                <!--                <div class="block" style="align-content: center">-->
                <!--                  <el-pagination layout="prev, pager, next" :total="250" :page-size="20" @current-change="handlePageChange"/>-->
                <!--                </div>-->
              </el-footer>
            </el-scrollbar>
          </div>
        </el-tab-pane>
      </el-tabs>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
import {inject, reactive, ref} from 'vue'
import axios from 'axios'

const editableTabName = ref(7)
const editableSubTabName = ref('上衣')
let previewSearch = ''
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
      editableSubTabName,
    }
  },
  mounted() {
    this.getCategoryData(7);
  }
  ,
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

    }
    ,
    searchWithinCategoryId: function (categoryId, keywords, page, size) {
      page = (page === undefined ? 1 : page);
      size = (size === undefined ? 20 : size);
      let _this = this;
      let index = 0;
      axios.get(`http://1.116.147.57:8080/category/${categoryId}/search/${keywords}?page=${page}&szie=${size}`).then(function (response) {
            console.log(response.data)
            _this.data = response.data.data
          },
          function (err) {
            console.log(err)
          })
    }
    ,
    handleChange: function (tabName) {
      switch (tabName) {
        case 7:
          this.editableSubTabName = '上衣';
          break;
        case 8:
          this.editableSubTabName = '饼干';
          break;
        case 9:
          this.editableSubTabName = '收纳';
          break;
        case 10:
          this.editableSubTabName = '相机';
          break;
        case 11:
          this.editableSubTabName = '冰箱';
          break;
        case 12:
          this.editableSubTabName = '水果';
          break;
        case 13:
          this.editableSubTabName = '急救箱';
          break;
        case 14:
          this.editableSubTabName = '口红';
          break;
        default :
          console.log(tabName)
      }
    }
    ,
    handleSubChange: function (val) {
      if (previewSearch === val) {
        return;
      } else {
        previewSearch = val;
      }
      this.searchWithinCategoryId(editableTabName.value, val)
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

::v-deep .el-tabs__nav-scroll {
  width: 50% !important;
  margin: 0 auto !important;
}
</style>
