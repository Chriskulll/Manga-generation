<script setup >
import { reactive } from 'vue'

const form = reactive({
  key1:'',key2:'',key3:'',key4:'',key5:'',key6:'',key7:'',key8:'',key9:'',key10:'',key11:'',key12:'',key13:'',key14:'',key15:'',
  worldview: '',
  emotion:'',
  narrative:'',
  identity:'',
  relation:'',
  reference:''
})
const WorldViewOptions = [
  { label: '随意', value: 'casual' },
  { label: '现代', value: 'modern' },
  { label: '未来', value: 'future' },
  { label: '古代', value: 'ancient' },
  { label: '架空玄幻', value: 'fantasy' },
  { label: '赛博朋克', value: 'cyberpunk' },
  { label: '末世废土', value: 'post_apocalyptic' },
  { label: '魔法世界', value: 'magic' },
  { label: '平行宇宙', value: 'parallel_universe' },
]

const EmotionOptions = [
  { label: '随意', value: 'casual' },
  { label: '幽默搞笑', value: 'funny' },
  { label: '温暖治愈', value: 'warm' },
  { label: '紧张悬疑', value: 'suspense' },
  { label: '悲伤催泪', value: 'sad' },
  { label: '黑暗故事', value: 'dark' },
  { label: '热血青春', value: 'passionate' },
  { label: '浪漫爱情', value: 'romantic' },
  { label: '轻松日常', value: 'slice_of_life' },
  { label: '哲学哲理', value: 'philosophical' },
]

const NarrativeOptions = [
  { label: '随意', value: 'casual' },
  { label: '第一人称', value: 'first_person' },
  { label: '第三人称', value: 'third_person' },
  { label: '多线叙事', value: 'multi_perspective' },
  { label: '上帝视角', value: 'omniscient' },
  { label: '日记体', value: 'diary' },
  { label: '回忆倒叙', value: 'flashback' },
]

const IdentityOptions = [
  { label: '随意', value: 'casual' },
  { label: '普通人', value: 'civilian' },
  { label: '学生', value: 'student' },
  { label: '老师', value: 'teacher' },
  { label: '侦探', value: 'detective' },
  { label: '偶像', value: 'idol' },
  { label: 'AI机器人', value: 'ai_robot' },
  { label: '外星人', value: 'alien' },
  { label: '魔法师', value: 'mage' },
  { label: '黑客', value: 'hacker' },
  { label: '军人', value: 'soldier' },
  { label: '贵族', value: 'noble' },
  { label: '王子/公主', value: 'royalty' },
  { label: '超能力者', value: 'superpower' },
]

const RelationOptions = [
  { label: '随意', value: 'casual' },
  { label: '师徒', value: 'mentor' },
  { label: '宿敌', value: 'rival' },
  { label: '亲情', value: 'family' },
  { label: '友情', value: 'friendship' },
  { label: '恋人', value: 'lovers' },
  { label: '群像', value: 'ensemble' },
  { label: 'AI与人类', value: 'ai_human' },
]


</script>

<template>
  <el-form class="form" :model="form" label-width="auto" >
    <div class="text-wrapper">
      <p class="title1">剧情元素</p>
      <p class="tip">*给出几个你感兴趣的关键词，如雨夜、破案等</p>
      <el-form-item style="width:80%;">
        <div class="grid-form">
          <el-input class="input2" v-model="form.key1" />
          <el-input class="input2" v-model="form.key2"  />
          <el-input class="input2" v-model="form.key3" />
          <el-input class="input2" v-model="form.key4" />
          <el-input class="input2" v-model="form.key5" />
          <el-input class="input2" v-model="form.key6" />
          <el-input class="input2" v-model="form.key7" />
          <el-input class="input2" v-model="form.key8" />
          <el-input class="input2" v-model="form.key9" />
          <el-input class="input2" v-model="form.key10" />
          <el-input class="input2" v-model="form.key11" />
          <el-input class="input2" v-model="form.key12" />
          <el-input class="input2" v-model="form.key13" />
          <el-input class="input2" v-model="form.key14" />
          <el-input class="input2" v-model="form.key15" />
        </div>
      </el-form-item>
    </div>
    <div class="text-wrapper">
      <p class="title1">世界观</p>
      <el-form-item class="style-switch">
        <el-select v-model="form.worldview" placeholder="请选择…" style="width: 350px;" class="image-select">
          <el-option
              v-for="item in WorldViewOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
          >
            <div class="template-option">
              <span>{{ item.label }}</span>
            </div>
          </el-option>
        </el-select>
      </el-form-item>
    </div>
    <div class="text-wrapper">
      <p class="title1">情感基调</p>
      <el-form-item class="style-switch">
        <el-select v-model="form.emotion" placeholder="请选择…" style="width: 350px;" class="image-select">
          <el-option
              v-for="item in EmotionOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
          >
            <div class="template-option">
              <span>{{ item.label }}</span>
            </div>
          </el-option>
        </el-select>
      </el-form-item>
    </div>
    <div class="text-wrapper">
      <p class="title1">叙事角度</p>
      <el-form-item class="style-switch">
        <el-select v-model="form.narrative" placeholder="请选择…" style="width: 350px;" class="image-select">
          <el-option
              v-for="item in NarrativeOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
          >
            <div class="template-option">
              <span>{{ item.label }}</span>
            </div>
          </el-option>
        </el-select>
      </el-form-item>
    </div>
    <div class="text-wrapper">
      <p class="title1">主角身份</p>
      <el-form-item class="style-switch">
        <el-select v-model="form.identity" placeholder="请选择…" style="width: 350px;" class="image-select">
          <el-option
              v-for="item in IdentityOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
          >
            <div class="template-option">
              <span>{{ item.label }}</span>
            </div>
          </el-option>
        </el-select>
      </el-form-item>
    </div>
    <div class="text-wrapper">
      <p class="title1">角色关系</p>
      <el-form-item class="style-switch">
        <el-select v-model="form.relation" placeholder="请选择…" style="width: 350px;" class="image-select">
          <el-option
              v-for="item in RelationOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
          >
            <div class="template-option">
              <span>{{ item.label }}</span>
            </div>
          </el-option>
        </el-select>
      </el-form-item>
    </div>
    <div class="text-wrapper">
      <p class="title1">参考作品</p>
      <p class="tip">*给出几个你认为的同类型作品</p>
      <el-form-item style="width:82%;">
        <el-input class="input1" v-model="form.reference" type="textarea" :row="4" />
      </el-form-item>
    </div>
    <!--按钮-->
    <el-form-item>
      <el-button class="button2" @click="generateComic">生成灵感</el-button>
    </el-form-item>
  </el-form>
</template>

<style scoped>
.form{
  padding:30px 40px 10px 40px;
  gap:10px;
  background-color:white;
  border:1px solid #E5E5E5;
  border-radius:10px;
  display:flex;
  justify-content: center;
  flex-direction: column;
  .title1{
    color:#A33131;
    top:0;
    margin-top:0px;
    font-size:18px;
    width:72px;
  }
  .text-wrapper{
    display: flex;
    position:relative;
    gap:20px;
    .tip{
      font-size:14px;
      color:#A6A6A6;
      position:absolute;
      right:0px;
      top:-35px;
      z-index:999;
    }
    .grid-form {
      width:100%;
      display: grid;
      grid-template-columns: repeat(5, 1fr); /* 每行 5 列 */
      gap: 10px; /* 每个 input 之间的间距 */
      align-items: center; /* 垂直居中 */
      .input2 {
        width: 80px; /* 让 input 填满单元格 */
      }
    }
  }
  .button2{
    background-color:#A33131;
    color:white;
    border:none;
    transition: all 0.3s ease;
    margin-top:10px;
    width:100%;
    height:40px;
    font-size:16px;
  }
  .button2:hover{
    filter: brightness(1.2);
    cursor: pointer;
  }
}

</style>