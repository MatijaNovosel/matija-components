import { AvatarEditor } from "avatar-editor";
import { DegreePicker } from "degree-picker";
import { DatePicker } from "vue-3-material-date-picker";

declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    DegreePicker: typeof DegreePicker;
    AvatarEditor: typeof AvatarEditor;
    MatijaDatePicker: typeof DatePicker;
  }
}
