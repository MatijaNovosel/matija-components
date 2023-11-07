<template>
  <v-row class="pa-10">
    <v-col cols="12" v-if="tab === 'degree-picker'">
      <degree-picker-preview />
    </v-col>
    <v-col v-else-if="tab === 'avatar-editor'">
      <avatar-editor-preview />
    </v-col>
    <v-col v-else-if="tab === 'date-picker'">
      <date-picker-preview />
    </v-col>
    <v-col v-else-if="tab === 'time-picker'">
      <time-picker-preview />
    </v-col>
  </v-row>
</template>

<script lang="ts" setup>
import avatarEditorPreview from "@/components/preview/avatarEditorPreview.vue";
import datePickerPreview from "@/components/preview/datePickerPreview.vue";
import degreePickerPreview from "@/components/preview/degreePickerPreview.vue";
import timePickerPreview from "@/components/preview/timePickerPreview.vue";
import { useAppStore } from "@/store/app";
import { storeToRefs } from "pinia";

const appStore = useAppStore();
const { tab } = storeToRefs(appStore);
</script>
