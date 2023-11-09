<template>
  <v-row class="justify-center align-center items-center text-center">
    <v-col cols="12" md="6">
      <matija-tree-view
        class="mx-auto"
        v-model="value"
        :open-all="openAll"
        :items="items"
        :disabled="disabled"
        :selectable="selectable"
        :selection-mode="selectionMode"
        :color="color"
        :dense="dense"
      />
    </v-col>
    <v-col cols="12" md="6">
      <code-snippet
        content="yarn add vue-tree-view"
        link="https://github.com/MatijaNovosel/vue-tree-view"
      />
      <v-text-field
        class="mt-3"
        density="compact"
        hide-details
        label="Value"
        :model-value="JSON.stringify(value)"
        readonly
      />
      <v-select
        class="mt-3"
        :items="selectionModeItems"
        hide-details
        density="compact"
        label="Selection mode"
        v-model="selectionMode"
      />
      <v-checkbox
        class="mt-3"
        hide-details
        density="compact"
        label="Disabled"
        v-model="disabled"
      />
      <v-checkbox
        hide-details
        density="compact"
        label="Selectable"
        v-model="selectable"
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

const value = ref([]);
const disabled = ref(false);
const selectable = ref(true);
const openAll = ref(true);
const dense = ref(true);
const color = ref("#FF891D");
const selectionMode = ref<"leaf" | "independent">("leaf");

const selectionModeItems = ["leaf", "independent"];

const items = [
  {
    id: 1,
    name: "ID 1",
    children: [
      { id: 2, name: "ID 2" },
      { id: 3, name: "ID 3" },
      { id: 4, name: "ID 4" },
    ],
  },
  {
    id: 5,
    name: "ID 5",
    children: [
      {
        id: 6,
        name: "ID 6",
        children: [
          {
            id: 7,
            name: "ID 7",
            children: [
              { id: 8, name: "ID 8" },
              { id: 9, name: "ID 9" },
            ],
          },
        ],
      },
      {
        id: 10,
        name: "ID 10",
        children: [
          {
            id: 11,
            name: "ID 11",
            children: [
              { id: 12, name: "ID 12" },
              { id: 13, name: "ID 13" },
              { id: 14, name: "ID 14" },
            ],
          },
        ],
      },
    ],
  },
];
</script>
