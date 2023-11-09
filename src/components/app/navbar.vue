<template>
  <v-app-bar>
    <v-list-item>
      <template #prepend>
        <v-btn
          variant="text"
          icon
          class="mr-5"
          href="https://github.com/MatijaNovosel"
        >
          <v-icon size="40"> mdi-github </v-icon>
        </v-btn>
      </template>
      <v-list-item-title> Matija components </v-list-item-title>
      <v-list-item-subtitle> Try 'em out! </v-list-item-subtitle>
    </v-list-item>
    <template #extension>
      <v-tabs color="orange" align-tabs="title">
        <v-tab
          exact
          v-for="[key, value] in Object.entries(COMPONENTS)"
          :key="key"
          :to="key"
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
</script>
