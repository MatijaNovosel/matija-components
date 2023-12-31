<template>
  <v-row class="justify-center align-center items-center text-center">
    <v-col cols="12" md="6">
      <avatar-editor
        :width="400"
        :height="400"
        :border-radius="borderRadiusScaleVal"
        ref="avatarEditorRef"
        @image-ready="onImageReady"
        v-model:scale="scaleVal"
      />
    </v-col>
    <v-col cols="12" md="6">
      <code-snippet
        content="yarn add avatar-editor"
        link="https://github.com/MatijaNovosel/avatar-editor"
      />
      <v-slider
        class="mt-5"
        :min="scaleMin"
        :max="scaleMax"
        :step="scaleStep"
        v-model="scaleVal"
        hide-details
        color="orange"
        label="Scale"
      />
      <v-slider
        class="mt-5"
        :min="borderRadiusScaleMin"
        :max="borderRadiusScaleMax"
        :step="borderRadiusScaleStep"
        v-model="borderRadiusScaleVal"
        hide-details
        color="orange"
        label="Border radius"
      />
      <v-btn class="mt-5" @click="save">Save</v-btn>
    </v-col>
  </v-row>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from "vue";
import { base64ToFile, download } from "../../helpers";
import codeSnippet from "../app/codeSnippet.vue";

const scaleVal = ref<number>(1);
const scaleStep = 0.02;
const scaleMin = 1;
const scaleMax = 3;

const borderRadiusScaleMin = 0;
const borderRadiusScaleMax = 1000;
const borderRadiusScaleStep = 25;
const borderRadiusScaleVal = ref<number>(0);

const avatarEditorRef = ref<any>(null);

const onImageReady = (scale: number) => {
  scaleVal.value = scale;
};

const handleWheelEvent = (e: WheelEvent) => {
  if (e.deltaY > 0 && scaleVal.value - scaleStep >= scaleMin) {
    // Down
    scaleVal.value -= scaleStep;
  } else {
    // Up
    if (scaleVal.value + scaleStep <= scaleMax) {
      scaleVal.value += scaleStep;
    }
  }
};

const save = async () => {
  if (avatarEditorRef.value) {
    const canvasData = avatarEditorRef.value.getImageScaled();
    const img = canvasData.toDataURL("image/png");
    const file = await base64ToFile(img, "image.png");
    if (file) {
      download(file);
    }
  }
};

onMounted(() => {
  document.addEventListener("wheel", handleWheelEvent);
});

onUnmounted(() => {
  document.removeEventListener("wheel", handleWheelEvent);
});
</script>
