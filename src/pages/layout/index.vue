<template>
  <a-layout>
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <div class="logo"/>
      <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <a-menu-item key="1">
          <span>nav 1</span>
        </a-menu-item>
        <a-menu-item key="2">
          <span>nav 2</span>
        </a-menu-item>
        <a-menu-item key="3">
          <span>nav 3</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-content
          :style="{ margin: 0, padding: 0, background: '#fff', minHeight: '100vh' }"
      >
        Content
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script setup>
import {ref} from 'vue';

const selectedKeys = ref(['1']);
const collapsed = ref(false);
</script>
<style>
</style>