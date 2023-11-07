import "@/assets/index.css";
import { registerPlugins } from "@/plugins";
import { AvatarEditor } from "avatar-editor";
import { DegreePicker } from "degree-picker";
import { createApp } from "vue";
import { DatePicker } from "vue-3-material-date-picker";
import { TimePicker } from "vue-material-time-picker";
import App from "./app.vue";

// Component styles
import "avatar-editor/dist/style.css";
import "degree-picker/dist/style.css";
import "vue-3-material-date-picker/dist/style.css";
import "vue-material-time-picker/dist/style.css";

const app = createApp(App);

registerPlugins(app);

// Global components
app.component("degree-picker", DegreePicker);
app.component("avatar-editor", AvatarEditor);
app.component("matija-date-picker", DatePicker);
app.component("matija-time-picker", TimePicker);

app.mount("#app");
