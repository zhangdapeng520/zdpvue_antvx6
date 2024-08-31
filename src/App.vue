<script setup>
import {legacyLogicalPropertiesTransformer} from "ant-design-vue";
</script>

<template>
  <a-style-provider hash-priority="high" :transformers="[legacyLogicalPropertiesTransformer]">
    <RouterView/>
  </a-style-provider>
</template>

<style scoped>

</style>
