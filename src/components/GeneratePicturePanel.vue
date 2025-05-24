<script setup>
import { ref, defineExpose } from 'vue'

const imgContainer = ref(null)

// 暴露给父组件访问
defineExpose({
  imgContainer
})
</script>

<template>
  <div ref="imgContainer"  style="display:flex;flex-direction:column;padding:0;margin:0;justify-content: center;align-items:center;width:100%;">
    <img src="../assets/static/Americn.png" alt="pic"/>
    <el-pagination class="pagination" background layout="prev, pager, next" :total="1" />
  </div>

</template>

<style scoped>
img{
  width:90%;
}
.pagination{
  margin-top:10px;
}
</style>