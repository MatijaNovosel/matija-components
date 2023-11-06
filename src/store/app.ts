import { COMPONENTS } from "@/constants";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useAppStore = defineStore("app", () => {
  const tab = ref<string>(COMPONENTS["degree-picker"]);

  const changeTab = (newVal: string) => {
    tab.value = newVal;
  };

  return {
    tab,
    changeTab,
  };
});
