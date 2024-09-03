<template>
  <a-layout>
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <div class="logo"/>
      <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline" @click="handleMenuClick">
        <a-menu-item key="/">
          <span>快速上手</span>
        </a-menu-item>
        <a-menu-item key="/graph_width">
          <span>画布大小</span>
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
        <RouterView/>
      </a-layout-content>
    </a-layout>
    ≤
  </a-layout>
</template>
<script setup>
import {ref} from 'vue';
import {useRouter} from "vue-router";

const selectedKeys = ref(['1']);
const collapsed = ref(false);
const router = useRouter() // 路由对象
// 菜单点击事件
const handleMenuClick = ({item, key, keyPath}) => {
  router.push(key)
}
</script>
<style>
</style>