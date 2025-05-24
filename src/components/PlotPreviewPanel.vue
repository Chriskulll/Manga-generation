<script setup lang="ts">

</script>

<template>
  <div style="padding:0;margin:0;width:80%;display: flex;flex-direction: column;align-items: center;margin-bottom:10px;">
    <div class="p2">
      <p>p1:</p>
      <p>在惬意的一天，一位男士牵着自家的狗 Max 和 Bruno 在街头悠然散步，阳光正好，他心里想着：“我们日子过得不错，麦克斯。这就是美好生活，我们正享受着呢。天气好的时候就得出来遛遛。” 此刻，新冒险也悄然拉开序幕。</p>
      <p>画面一转，蜘蛛侠在城市上空潇洒飞跃，“家，甜蜜的家”，他回到了熟悉的地方，仿佛在守护着这座城市的日常。</p>
      <p>男士继续遛弯，偶然间发现了一只流浪狗，心生怜悯的他决定把这只流浪狗带回家。 当他们到家时，家中温馨依旧，黄色沙发上趴着一只狗，地上还有两只狗在活动。男士看着新成员，笑着说：“欢迎回家，布鲁诺！”</p>
      <p>新加入的狗狗站在门口，好奇又机灵地打量着屋内，心里暗自嘀咕：“原来这里是这么回事？让我看看谁有麻烦了。” 它的到来，给这个家带来了新的活力与爱，正如那句 “新的爱来到了麦克斯家！” 从此，这个家有了更多温暖与故事。</p>
    </div>
    <el-pagination class="pagination" background layout="prev, pager, next" :total="1" />
  </div>

</template>

<style scoped>
p{
  color:#383838;
  font-size:14px;
}
.p2{
  display:block;
}
</style>