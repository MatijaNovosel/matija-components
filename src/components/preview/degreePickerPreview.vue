<template>
  <v-row class="justify-center align-center">
    <v-col cols="6">
      <degree-picker
        :readonly="state.readonly"
        :disabled="state.disabled"
        class="mx-auto"
        v-model="state.degrees"
        :active-color="state.activeColor"
        :body-color="state.bodyColor"
      />
    </v-col>
    <v-col cols="6">
      <v-text-field
        density="compact"
        hide-details
        label="Value"
        v-model="state.degrees"
        readonly
      />
      <v-checkbox
        class="mt-2"
        label="Disabled"
        hide-details
        density="compact"
        v-model="state.disabled"
      />
      <v-checkbox
        label="Readonly"
        hide-details
        density="compact"
        v-model="state.readonly"
      />
      <v-row class="mt-2">
        <v-color-picker
          :modes="['hex']"
          class="mr-4"
          v-model="state.activeColor"
        />
        <v-color-picker :modes="['hex']" v-model="state.bodyColor" />
      </v-row>
    </v-col>
  </v-row>
</template>

<script lang="ts" setup>
import { reactive } from "vue";

const state = reactive({
  degrees: 0,
  disabled: false,
  readonly: false,
  activeColor: "#FF891D",
  bodyColor: "#F3F1F0",
});
</script>
