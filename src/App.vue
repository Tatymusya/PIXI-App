<script setup lang="ts">
  import { defineAsyncComponent } from 'vue';

  const PixiApplication = defineAsyncComponent(() =>
    import('vue3-pixi').then(({ Application }) => Application)
  );
</script>

<template>
  <PixiApplication
    :width="640"
    :height="480"
  />
</template>
