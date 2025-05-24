<script setup>
const pictures = [
  { label: 'pic1', value: 'pic1', image: require('@/assets/static/Americn.png') },
]
</script>

<template>
  <div class="grid-container">
    <div
        class="grid-item"
        v-for="(picture, index) in pictures"
        :key="index"
    >
      <img :src="picture.image" alt="pic" />
    </div>
  </div>
</template>

<style scoped>
.grid-container {
  padding:10px;
  width:90%;
  height:90%;
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 每行3列 */
  gap: 8px; /* 图片之间横竖间距 */
  max-width: 800px;
  margin: 0 auto;
}

.grid-item img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 4px;
  object-fit: cover;
}
</style>