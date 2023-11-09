<template>
  <v-row class="justify-center align-center items-center text-center">
    <v-col cols="6">
      <matija-date-picker
        class="mx-auto"
        :multiple="multiple"
        :selected-items-text-formatter="(n) => `${n} dates selected`"
        :first-day-of-week="1"
        :show-adjacent-months="showAdjacentMonths"
        :locale="locale"
        :color="color"
        :no-title="noTitle"
        v-model="date"
        :disabled="disabled"
        :readonly="readonly"
        :min="minimum"
        :max="maximum"
      />
    </v-col>
    <v-col cols="6">
      <code-snippet
        content="yarn add vue-3-material-date-picker"
        link="https://github.com/MatijaNovosel/vue-3-material-date-picker"
      />
      <v-text-field
        class="mt-3"
        density="compact"
        hide-details
        label="Value"
        :model-value="JSON.stringify(date)"
        readonly
      />
      <v-text-field
        class="mt-3"
        density="compact"
        hide-details
        label="Minimum"
        v-model="minimum"
        readonly
      />
      <v-text-field
        class="mt-3"
        density="compact"
        hide-details
        label="Maximum"
        v-model="maximum"
        readonly
      />
      <v-select
        class="mt-3"
        :items="localeItems"
        hide-details
        density="compact"
        label="Locale"
        v-model="locale"
      />
      <v-checkbox
        class="mt-3"
        hide-details
        density="compact"
        label="Multiple"
        v-model="multiple"
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
        label="Show adjacent months"
        v-model="showAdjacentMonths"
      />
      <v-checkbox
        hide-details
        density="compact"
        label="No title"
        v-model="noTitle"
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

const date = ref(new Date().toISOString().substring(0, 10));
const locale = ref("en-US");
const minimum = ref("2020-08-05");
const maximum = ref("2023-12-25");
const multiple = ref(false);
const disabled = ref(false);
const readonly = ref(false);
const showAdjacentMonths = ref(false);
const noTitle = ref(false);
const color = ref("#FF891D");

const localeItems = ["hr-HR", "en-US", "de-DE"];

const changeDate = () => {
  date.value = "2023-09-23";
};

const changeLocale = () => {
  locale.value = "hr-HR";
};
</script>
