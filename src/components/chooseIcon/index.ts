import { App } from "vue";
import chooseIcon from "./src/index.vue";

// 通过组件可以通过use的形式使用
export default {
  install(app: App) {
    app.component("r-choose-icon", chooseIcon);
  },
};