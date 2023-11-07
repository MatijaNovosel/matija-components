import { AvatarEditor } from "avatar-editor";
import { DegreePicker } from "degree-picker";
import { DatePicker } from "vue-3-material-date-picker";
import { TimePicker } from "vue-material-time-picke";

declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    DegreePicker: typeof DegreePicker;
    AvatarEditor: typeof AvatarEditor;
    MatijaDatePicker: typeof DatePicker;
    MatijaTimePicker: typeof TimePicker;
  }
}
