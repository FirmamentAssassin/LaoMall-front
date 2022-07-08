import { createApp } from "vue"
import App from "./App.vue"
import router from "./router/index.js"
import store from "./store/index.js"
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import axios from 'axios'
// import Antd from "ant-design-vue"
// import "ant-design-vue/dist/antd.css"

let app = createApp(App);
// app.use(Antd);
// 使用路由
app.use(router);
app.use(store);
app.use(ElementPlus);
app.mount("#app");
app.config.globalProperties.$axios=axios;
