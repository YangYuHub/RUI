import { App } from "vue";
import chooseIcon from "./chooseIcon";

const components = [chooseIcon];

export default {
  install(app: App) {
    components.map((item: any) => {
      app.use(item);
    });
  },
};
