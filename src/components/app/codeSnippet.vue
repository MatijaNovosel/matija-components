<template>
  <div class="d-flex align-center">
    <v-btn variant="text" icon class="mr-5" :href="props.link">
      <v-icon size="40"> mdi-github </v-icon>
    </v-btn>
    <div class="snippet">
      {{ props.content }}
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  content: string;
  link: string;
}>();
</script>

<style scoped>
.snippet {
  border-radius: 8px;
  padding: 15px;
  background-color: #f8f3f3;
  font-family: "CascadiaCode";
}
</style>
