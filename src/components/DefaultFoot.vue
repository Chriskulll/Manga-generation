<script setup>
import { InitorREgenerate } from '@/composables/useActiveMode'

function regenerateComic() {
  InitorREgenerate.value =true
}
</script>

<template>
  <el-button class="button1" @click="handleDownload('png')">导出漫画</el-button>
  <el-button class="button2" @click="regenerateComic">继续生成</el-button>
</template>

<style scoped>
.button1{
  width:90%;
  height:40px;
  margin-left:5%;
  margin-top:10px;
  background-color: #A33131;
  color:white;
  font-size:16px;
}
.button1:hover{
  filter: brightness(1.2);
  cursor: pointer;
}
.button2{
  width:90%;
  height:40px;
  margin-left:5%;
  margin-top:5px;
  border:1px solid #A33131;
  background-color: white;
  color:#808080;
  font-size:16px;
}
.button2:hover{
  filter: brightness(1.2);
  color:black;
}

</style>