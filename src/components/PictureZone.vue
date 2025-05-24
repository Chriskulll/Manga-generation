<script setup>
import { computed } from 'vue'
import { activeMode, hasGenerated } from '@/composables/useActiveMode'

import EditPanel from '@/components/EditPanel.vue'
import PlotPreviewPanel from '@/components/PlotPreviewPanel.vue'
import PicturePreviewPanel from '@/components/PicturePreviewPanel.vue'
import GeneratePicturePanel from '@/components/GeneratePicturePanel.vue'
import EmptyPanel from '@/components/EmptyPanel.vue'

import EditFoot from '@/components/EditFoot.vue'
import DefaultFoot from '@/components/DefaultFoot.vue'

// 修改 toggleMode：未生成前，点击任何按钮都强制显示空白；生成后才能切换
function toggleMode(mode) {
  if (!hasGenerated.value) {
    activeMode.value = null // 强制空
  } else {
    activeMode.value = activeMode.value === mode ? 'generate-picture' : mode
  }
}

// 当前中间组件
const CurrentMiddleComponent = computed(() => {
  if (!hasGenerated.value) {
    return EmptyPanel
  }
  switch (activeMode.value) {
    case 'edit': return EditPanel
    case 'plot-preview': return PlotPreviewPanel
    case 'picture-preview': return PicturePreviewPanel
    case 'generate-picture': return GeneratePicturePanel
    default: return GeneratePicturePanel
  }
})

// 当前底部按钮组件
const CurrentFootComponent = computed(() => {
  switch (activeMode.value) {
    case 'edit': return EditFoot
    case 'plot-preview': return DefaultFoot
    case 'picture-preview': return DefaultFoot
    default: return DefaultFoot
  }
})
</script>

<template>
  <div class="functions">
    <div class="function">
      <img src="../assets/static/美化.png" alt="pic">
      <p>智能编辑</p>
    </div>
    <!-- 区域重绘 -->
    <div class="function" @click="toggleMode('edit')">
      <img
          :src="activeMode === 'edit' ? require('@/assets/static/重绘_红.png') : require('@/assets/static/重绘.png')"
          alt="pic"
      />
      <p :class="{ active: activeMode === 'edit' }">区域重绘</p>
    </div>

    <!-- 剧情总览 -->
    <div class="function" @click="toggleMode('plot-preview')">
      <img
          :src="activeMode === 'plot-preview' ? require('@/assets/static/系统总览_红.png') : require('@/assets/static/系统总览.png')"
          alt="pic"
      />
      <p :class="{ active: activeMode === 'plot-preview' }">剧情总览</p>
    </div>
  </div>
  <div class="picture-zone">
    <div class="white-canvas">
      <component :is="CurrentMiddleComponent" />
      <img
          :src="activeMode === 'picture-preview' ? require('@/assets/static/功能总览_红.png') : require('@/assets/static/功能总览.png')"
          @click="toggleMode('picture-preview')"
          alt="pic"
          class="funcimg"
      />
    </div>
  </div>
  <div class="foot-zone">
      <component :is="CurrentFootComponent" />
  </div>
</template>

<style scoped>
.functions{
  height:8%;
  display:flex;
  margin-left:30%;
  .function{
    cursor: pointer;
    display:flex;
    align-items: center;
    margin-right:20px;
    gap:10px;
    img{
      width:20px;
      height:20px;
    }
    p{
      color:#666666;
      font-size:14px;
      &.active {
        color: #A33131; /* 激活红色 */
      }
    }
  }
}
.picture-zone{
  height:75%;
  width:100%;
  justify-items: center;
  padding:0;
  .white-canvas{
    height:100%;
    width:80%;
    background-color: white;
    border-radius:10px;
    position:relative;
    display:flex;
    align-items: center;
    justify-content: center;
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
  height:17%;

}
</style>