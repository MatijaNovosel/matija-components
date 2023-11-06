<template>
  <v-row class="justify-center align-center items-center text-center">
    <v-col cols="6">
      <matija-date-picker
        class="mx-auto"
        multiple
        :selected-items-text-formatter="(n) => `${n} dates selected`"
        :first-day-of-week="1"
        :allowed-dates="(date) => parseInt(date.split('-')[2], 10) % 2 === 0"
        :locale="locale"
        v-model="date"
      />
    </v-col>
    <v-col cols="6">
      <v-text-field
        density="compact"
        hide-details
        label="Value"
        v-model="date"
        readonly
      />
      <v-btn @click="changeDate"> Change </v-btn>
      <v-btn @click="changeLocale"> Change locale </v-btn>
    </v-col>
  </v-row>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const date = ref(new Date().toISOString().substring(0, 10));
const locale = ref("en-US");

const changeDate = () => {
  date.value = "2023-09-23";
};

const changeLocale = () => {
  locale.value = "hr-HR";
};
</script>
