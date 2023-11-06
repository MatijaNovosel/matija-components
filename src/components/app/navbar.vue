<template>
  <v-app-bar>
    <v-list-item>
      <template #prepend>
        <v-avatar class="me-10 ms-4" color="grey-darken-1" size="32" />
      </template>
      <v-list-item-title> Matija components </v-list-item-title>
      <v-list-item-subtitle> Try 'em out! </v-list-item-subtitle>
    </v-list-item>
    <template #extension>
      <v-tabs
        color="orange"
        :model-value="tab"
        @update:model-value="(e) => appStore.changeTab(e as string)"
        align-tabs="title"
      >
        <v-tab
          v-for="[key, value] in Object.entries(COMPONENTS)"
          :key="key"
          :value="key"
        >
          {{ value }}
        </v-tab>
      </v-tabs>
    </template>
  </v-app-bar>
</template>

<script lang="ts" setup>
import { COMPONENTS } from "@/constants/index";
import { useAppStore } from "@/store/app";
import { storeToRefs } from "pinia";

const appStore = useAppStore();
const { tab } = storeToRefs(appStore);
</script>
