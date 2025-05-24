<script setup>
import { ref } from 'vue'

const comics = [
  { label: 'comic1', value: 'comic1', image: require('@/assets/static/American(1).png') },
  { label: 'comic2', value: 'comic2', image: require('@/assets/static/American(3).png') },
  { label: 'comic3', value: 'comic3', image: require('@/assets/static/American(2).png') },
  { label: 'comic4', value: 'comic4', image: require('@/assets/static/American(4).png') }
]
const selectedIndex = ref(null)

function selectItem(index) {
  selectedIndex.value = index
}

</script>

<template>
  <div class="edit-zone">
    <div
        v-for="(item, index) in comics"
        :key="index"
        class="item-wrapper"
        @click="selectItem(index)"
    >
      <img :src="item.image" :alt="item.label" class="item-image" />
      <div v-if="selectedIndex === index" class="overlay"></div>
    </div>
  </div>
</template>


<style scoped>
.edit-zone {
  width: 90%;
  height: auto;
  column-count: 2;
  gap: 3px;
}

.item-wrapper {
  position: relative;
  margin-bottom: 3px;
  break-inside: avoid;
}

.item-image {
  width: 100%;
  display: block;
}

/* 仅当被选中时显示的覆盖层 */
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

</style>