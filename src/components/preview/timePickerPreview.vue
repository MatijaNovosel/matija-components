<template>
  <div style="display: flex">
    <matija-time-picker @change="onChange" v-model="time" use-seconds />
    {{ time }}
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const time = ref(null);

const onChange = () => {
  console.log("fuck you");
};
</script>
