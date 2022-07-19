<template>
  <i :class="['base-icon', className]"><slot></slot></i>
</template>
<script lang="ts" setup>
import { defineProps } from "vue";

interface Props {
  className?: string;
}

defineProps<Props>();
</script>
<style>
.base-icon {
  --color: #43555a;
  --width: 30px;
  --height: 30px;

  display: flex;
  place-items: center;
  place-content: center;
  width: var(--width);
  height: var(--height);
  fill: var(--color);
}
</style>
