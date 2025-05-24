<script setup>
import { ref } from 'vue'

const commentText = ref('')
</script>

<template>
  <div style="position:relative">
    <el-input
        v-model="commentText"
        class="input1"
        type="textarea"
        :rows="3"
        placeholder="说出你的修改意见…"
    />
    <img src="../assets/static/上传.png" alt="pic"/>
  </div>

</template>

<style scoped>
.input1{
  width:90%;
  margin-left:5%;
  margin-top:20px;
}
img{
  position:absolute;
  width:30px;
  height:30px;
  right:40px;
  bottom:10px;
}
</style>