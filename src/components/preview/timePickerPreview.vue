<template>
  <v-row class="justify-center align-center items-center text-center">
    <v-col cols="12" md="6">
      <matija-time-picker
        :readonly="readonly"
        :disabled="disabled"
        :use-seconds="useSeconds"
        :color="color"
        class="mx-auto"
        v-model="time"
      />
    </v-col>
    <v-col cols="12" md="6">
      <code-snippet
        content="yarn add vue-material-time-picker"
        link="https://github.com/MatijaNovosel/vue-material-time-picker"
      />
      <v-text-field
        class="mt-3"
        density="compact"
        hide-details
        label="Value"
        :model-value="JSON.stringify(time)"
        readonly
      />
      <v-checkbox
        class="mt-3"
        hide-details
        density="compact"
        label="Automatic"
        v-model="automatic"
      />
      <v-checkbox
        hide-details
        density="compact"
        label="Use seconds"
        v-model="useSeconds"
      />
      <v-checkbox
        hide-details
        density="compact"
        label="Disabled"
        v-model="disabled"
      />
      <v-checkbox
        hide-details
        density="compact"
        label="Readonly"
        v-model="readonly"
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

const time = ref<string | null>(null);
const automatic = ref(true);
const disabled = ref(false);
const readonly = ref(false);
const useSeconds = ref(false);
const color = ref("#FF891D");
</script>
