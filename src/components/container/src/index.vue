<template>
  <el-container>
    <el-aside width="auto">
      <nav-side v-model:collapse="isCollapse"></nav-side>
    </el-aside>
    <el-container>
      <el-header>
        <nav-header v-model:collapse="isCollapse"></nav-header>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import { ref } from "vue";

import NavHeader from "./navHeader/index.vue";
import NavSide from "./navSide/index.vue";

const isCollapse = ref(false);
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
.el-header {
  padding: 0;
  border: 1px solid #eee;
}
</style>
