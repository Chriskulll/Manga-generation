<script setup>

import PlotForm from "@/components/PlotForm.vue";
import PlotPanel from "@/components/PlotPanel.vue";
</script>

<template>
  <div class="content">
    <div class="left-content">
      <PlotForm></PlotForm>
    </div>
    <div class="right-content">
      <PlotPanel></PlotPanel>
    </div>
  </div>
</template>

<style>
.content{
  display:flex;
  width: calc(100vw - 241px); /* 撑满剩余部分 */
  height: calc(100vh - 60px); /* 撑满剩余部分 */
}
.left-content{
  width:60%;
  display:flex;
  align-items: center;
  justify-content: center;
  .red-switch.is-checked .el-switch__core {
    background-color: #A33131 !important;
    border-color: #A33131 !important;
  }
}
.right-content{
  background-color:#E8F3FC;
  width: 40%;
  padding:0;
  display:flex;
  justify-content: center;
  flex-direction: column;
}
</style>