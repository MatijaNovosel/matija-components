<template>
  <v-row class="justify-center align-center items-center text-center">
    <v-col cols="12" md="6">
      <tri-state-checkbox
        class="mx-auto"
        v-model="value"
        :label="label"
        :disabled="disabled"
        :color="color"
      />
    </v-col>
    <v-col cols="12" md="6">
      <code-snippet
        content="yarn add vue-tri-state-checkbox"
        link="https://github.com/MatijaNovosel/tri-state-checkbox"
      />
      <v-text-field
        class="mt-3"
        density="compact"
        hide-details
        label="Value"
        :model-value="JSON.stringify(value)"
        readonly
      />
      <v-checkbox
        class="mt-3"
        hide-details
        density="compact"
        label="Disabled"
        v-model="disabled"
      />
      <v-row class="mt-2">
        <v-color-picker hide-inputs v-model="color" />
      </v-row>
    </v-col>
  </v-row>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import codeSnippet from "../app/codeSnippet.vue";

const value = ref(true);
const disabled = ref(false);
const color = ref("#FF891D");
const label = ref("Label");
</script>
