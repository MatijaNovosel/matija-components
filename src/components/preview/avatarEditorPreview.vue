<template>
  <v-row class="justify-center align-center items-center text-center">
    <v-col cols="6">
      <avatar-editor
        :width="400"
        :height="400"
        border-radius="1000"
        ref="avatarEditorRef"
        @image-ready="onImageReady"
        v-model:scale="scaleVal"
      />
    </v-col>
    <v-col cols="6">
      <v-slider
        :min="scaleMin"
        :max="scaleMax"
        :step="scaleStep"
        v-model="scaleVal"
        color="orange"
      />
      <v-btn @click="save">Save</v-btn>
    </v-col>
  </v-row>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from "vue";

const scaleVal = ref<number>(1);
const scaleStep = 0.02;
const scaleMin = 1;
const scaleMax = 3;

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

const save = () => {
  if (avatarEditorRef.value) {
    const canvasData = avatarEditorRef.value.getImageScaled();
    const img = canvasData.toDataURL("image/png");
    console.log(img);
  }
};

onMounted(() => {
  document.addEventListener("wheel", handleWheelEvent);
});

onUnmounted(() => {
  document.removeEventListener("wheel", handleWheelEvent);
});
</script>
