<template>
  <div>
    <r-choose-icon title="选择图标" v-model:visible="visible"></r-choose-icon>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

let visible = ref<boolean>(false);
</script>

<style lang="scss" scoped></style>
