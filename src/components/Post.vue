<template>
  <form class="post" @submit="$emit('submit')">
    <label for="textarea-id"></label>
    <textarea
      id="textarea-id"
      ref="textareaRef"
      type="text"
      class="post__textarea"
      @input="onChange"
      :placeholder="placeholder"
    />
    <slot name="footer" class="post__footer"></slot>
  </form>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits } from "vue";

interface Props {
  placeholder: string;
}

defineProps<Props>();
defineEmits(["submit"]);

const textareaRef = ref<HTMLElement | null>(null);

const onChange = () => {
  if (!textareaRef.value) {
    return;
  }

  textareaRef.value.style.height = "auto";
  textareaRef.value.style.height = textareaRef.value.scrollHeight + "px";
};
</script>

<style lang="scss" scoped>
.post {
  font-family: inherit;
  background-color: #ffffff;
  padding: em(24) em(28);
  border-radius: 32px;
  font-size: max(16px, 1rem);
  line-height: 150%;
  border: 1px solid var(--border-color);
  display: flex;
  flex-direction: column;
  min-width: em(300);
  min-height: em(27);
  width: 100%;
}
.post__textarea {
  overflow: hidden;
  color: inherit;
  // height: auto;
  line-height: inherit;
  resize: none;
  padding: 0 em(8);
  border: none;
  margin-bottom: em(16);
}
.post__textarea::placeholder {
  opacity: 0.2;
  color: inherit;
}
</style>
