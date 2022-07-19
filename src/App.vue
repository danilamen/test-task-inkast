<template>
  <div class="container">
    <Post placeholder="Type something about yours..." class="app__post">
      <template #footer>
        <div class="post__footer footer-post">
          <div class="footer-post__right">
            <CustomInput type="file" class="footer-post__action"
              ><ImageIcon
            /></CustomInput>
            <CustomInput type="hidden" class="footer-post__action"
              ><EmojisIcon
            /></CustomInput>
          </div>
          <PostButton
            className="footer-post__btn"
            @click="onSubmit"
            text="Post"
          />
        </div>
      </template>
    </Post>
  </div>
</template>

<script lang="ts" setup>
import Post from "./components/Post.vue";
import ImageIcon from "./components/icons/ImageIcon.vue";
import EmojisIcon from "./components/icons/EmojisIcon.vue";
import PostButton from "./components/PostButton.vue";
import CustomInput from "./components/CustomInput.vue";

const onSubmit = () => {
  console.log("submit");
};
</script>

<style lang="scss">
.container {
  max-width: 768px;
  margin: 0 auto;
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow-y: scroll;
}

.app__post:not(:last-child) {
  margin-bottom: 30px;
}

.post__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.footer-post__right {
  display: flex;
  justify-content: center;
  align-items: center;
}

.footer-post__action:not(:last-child) {
  margin-right: em(15);
}

.footer-post__btn {
  --font-size: 20px;
}
</style>
