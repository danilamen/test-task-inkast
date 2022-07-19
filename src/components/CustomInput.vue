<template>
  <label :class="className">
    <slot></slot>
    <input :type="type" class="custom-input" />
  </label>
</template>
<script setup lang="ts">
import { defineProps } from "vue";

interface Props {
  type: string;
  className?: string;
}

defineProps<Props>();
</script>
<style scoped>
label {
  cursor: pointer;
}
.custom-input {
  display: none;
}
</style>
