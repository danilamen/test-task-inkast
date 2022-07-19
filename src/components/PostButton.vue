<template>
  <button :class="['post-btn', className]" @click="$emit('click')">
    {{ text }}
  </button>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from "vue";

interface Props {
  className?: string;
  text: string;
}

defineProps<Props>();
defineEmits(["click"]);
</script>

<style lang="scss">
.post-btn {
  --background-color: #0077ff;
  --font-size: 20px;

  font-size: var(--font-size);
  line-height: inherit;
  padding: em(8) em(24);
  background-color: var(--background-color);
  border-radius: 100px;
  color: white;
  border: none;
  cursor: pointer;
}
</style>
