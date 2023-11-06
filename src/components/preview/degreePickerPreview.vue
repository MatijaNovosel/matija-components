<template>
  <v-row>
    <v-col cols="6">
      <degree-picker
        :readonly="state.readonly"
        :disabled="state.disabled"
        class="mx-auto"
        v-model="state.degrees"
        :active-color="state.color"
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
      <v-color-picker class="mt-2" v-model="state.color" />
    </v-col>
  </v-row>
</template>

<script lang="ts" setup>
import { reactive } from "vue";

const state = reactive({
  degrees: 0,
  disabled: false,
  readonly: false,
  color: "#FF891D",
});
</script>
