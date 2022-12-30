<template>
  <el-button @click="handClick">
    <slot>选择图标</slot>
  </el-button>
  <el-dialog v-model="dialogVisible" :title="title" width="40%">
    <div class="container">
      <div
        class="item-icon"
        v-for="(item, index) in Object.keys(ElIcons)"
        :key="index"
        @click="clickItem(item)"
      >
        <div>
          <component :is="item"></component>
        </div>
        <div class="text">{{ item }}</div>
      </div>
    </div>
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
import * as ElIcons from "@element-plus/icons-vue";
import { useCopy } from "../../../hooks/userCopy";

let props = defineProps<{
  title: string;
  visible: boolean;
}>();

let dialogVisible = ref<boolean>(props.visible);

let emits = defineEmits(["update:visible"]);

const handClick = () => {
  emits("update:visible", !props.visible);
};

const clickItem = (text: string) => {
  const el = `<el-icon><${text} /></el-icon>`;
  useCopy(el);
  dialogVisible.value = false;
};

watch(
  () => props.visible,
  (val) => {
    dialogVisible.value = val;
  }
);
watch(
  () => dialogVisible.value,
  (val) => {
    emits("update:visible", val);
  }
);
</script>

<style lang="scss">
.container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  height: 400px;
  overflow-y: auto;
  .item-icon {
    padding: 20px 0;
    min-width: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin-bottom: 20px;
  }
  svg {
    width: 2em;
    height: 2em;
  }
  .text {
    font-size: 12px;
  }
  .item-icon:hover {
    background-color: #eee;
  }
}
</style>
