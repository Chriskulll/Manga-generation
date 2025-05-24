<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const goToComicOut = () => {
  router.push('/index/comic_out')
}

const selectedPlotIndex = ref(null)

const selectPlot = (index) => {
  if (selectedPlotIndex.value === index) {
    selectedPlotIndex.value = null // 取消选择
  } else {
    selectedPlotIndex.value = index // 选择新的
  }
}
</script>

<template>
  <div class="picture-zone">
    <div class="white-canvas">
      <div class="plots">
        <div
            class="plot"
            v-for="(plot, index) in ['plot1', 'plot2', 'plot3']"
            :key="index"
            @click="selectPlot(index)"
        >
          <div v-if="selectedPlotIndex === index" class="overlay"></div>
          {{ plot }}
        </div>
      </div>
      <img
          src="../assets/static/重新生成.png"
          alt="pic"
          class="funcimg"
      />
    </div>
  </div>
  <div class="foot-zone">
    <el-button class="button1" @click="goToComicOut">导出漫画</el-button>
  </div>
</template>

<style scoped>
.picture-zone{
  padding-top:10px;
  padding-bottom:10px;
  height:80%;
  width:100%;
  justify-items: center;
  .white-canvas{
    height:100%;
    width:80%;
    background-color: white;
    border-radius:10px;
    position:relative;
    display:flex;
    align-items: center;
    justify-content: center;
    .plots{
      display:flex;
      flex-direction: column;
      width:90%;
      height:90%;
      gap:10px;
      .plot{
        background-color: #A33131;
        color:white;
        font-size:16px;
        border-radius:5px;
        padding:10px;
        min-height:100px;
        position: relative;
      }
      /* 选中状态的样式 */
      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(52, 152, 219, 0.4); /* 半透明蓝 */
        border: 3px solid rgb(52, 152, 219);
        box-sizing: border-box;
        pointer-events: none; /* 不挡点击 */
      }
    }
    .funcimg{
      width:20px;
      height:20px;
      position:absolute;
      right:10px;
      bottom:10px;
    }
  }
}
.foot-zone{
  height:10%;
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
}
</style>