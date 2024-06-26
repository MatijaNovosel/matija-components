import { AvatarEditor } from "avatar-editor";
import { DegreePicker } from "degree-picker";
import { DatePicker } from "vue-3-material-date-picker";
import { TimePicker } from "vue-material-time-picker";
import { TreeView } from "vue-tree-view";
import { TriStateCheckbox } from "vue-tri-state-checkbox";

declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<
    Record<string, unknown>,
    Record<string, unknown>,
    any
  >;
  export default component;
}

declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    DegreePicker: typeof DegreePicker;
    AvatarEditor: typeof AvatarEditor;
    MatijaDatePicker: typeof DatePicker;
    MatijaTimePicker: typeof TimePicker;
    MatijaTreeView: typeof TreeView;
    TriStateCheckbox: typeof TriStateCheckbox;
  }
}
