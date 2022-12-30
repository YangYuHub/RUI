<template>
  <div class="header">
    <span @click="toggle">
      <el-icon v-if="collapse"> <Expand /> </el-icon>
      <el-icon v-else><Fold /></el-icon>
    </span>
  </div>
</template>

<script lang="ts" setup>
let props = defineProps<{ collapse: boolean }>();

let emits = defineEmits(["update:collapse"]);
const toggle = () => {
  emits("update:collapse", !props.collapse);
};
</script>

<style lang="scss">
.header {
  height: 60px;
  padding: 0 20px;
  display: flex;
  align-items: center;
}
</style>
