<script setup >
import {reactive, ref} from 'vue'
import { hasGenerated,activeMode } from '@/composables/useActiveMode'
const activeName = ref()

function generateComic() {
  activeMode.value = 'generate-picture' // 👈 切换成你想显示的模式
  hasGenerated.value = true
}
const form = reactive({
  plotoutline: '',
  plotdetail: '',
  color: false,
  bili: '',
  language: '',
  style:'',
  template:'',
})
const styleOptions = [
  { label: 'neutral(no style)', value: '无风格', image:require('@/assets/static/nostyle.png') },
  { label: 'Japanese', value: '日式漫画', image: require('@/assets/static/Japanese.png') },
  { label: 'Nihonga', value: '浮世绘', image: require('@/assets/static/Nihonga.png') },
  { label: 'Franco-Belgian', value: '法国比利时', image:require('@/assets/static/Franco.png') },
  { label: 'American(modern)', value: '美国现代风', image:require('@/assets/static/Americn.png')},
  { label: 'American(1950)', value: '美国1950', image: require('@/assets/static/American1950.png')},
  { label: 'Flying Saucer', value: '飞碟科幻风', image: require('@/assets/static/Flying.png') },
  { label: 'Humanoid', value: '类人型', image: require('@/assets/static/Humanoid.png') },
  { label: 'Haddock', value: '阿道克风格', image: require('@/assets/static/Haddock.png') },
  { label: 'Armorican', value: '阿莫里卡风', image: require('@/assets/static/Armorican.png')},
  { label: '3D render', value: '三维渲染', image:require('@/assets/static/3D.png')},
  { label: 'Klimt', value: '克林姆克风', image: require('@/assets/static/Klimt.png')},
  { label: 'Medieval', value: '中世纪风', image:require('@/assets/static/Medieval.png') },
  { label: 'Egyptian', value: '古埃及风', image: require('@/assets/static/Egyptian.png') },
  { label: 'Vintage Photonovel', value: '复古照片', image: require('@/assets/static/Vintage.png') },
  { label: 'Stock Photo', value: '图库风格', image: require('@/assets/static/stock.png') }
]

const templateOptions = [
  { label: 'grid0', value: '模板0', image: require('@/assets/static/grid0.png')  },
  { label: 'grid1', value: '模板1', image: require('@/assets/static/grid1.png')  },
  { label: 'grid2', value: '模板2', image: require('@/assets/static/grid2.png') },
  { label: 'grid3', value: '模板3', image: require('@/assets/static/grid3.png')  }
]
</script>

<template>
  <el-form class="form" :model="form" label-width="auto" >
    <!--        单张剧情-->
    <div class="text-wrapper">
      <p class="title1">单张剧情</p>
      <p class="tip">*请输入您的漫画单页剧情</p>
      <el-form-item style="margin:0;padding:0;display:flex;flex-direction:column;">
        <div class="demo-collapse">
          <el-collapse v-model="activeName" accordion style="width:400px;padding:0;margin:0;">
            <el-collapse-item title="后续剧情1" name="1" style="padding:0;margin:0;">
              <p>后续剧情1后续剧情1后续剧情1后续剧情1后续剧情1后续剧情1后续剧情1后续剧情1</p>
            </el-collapse-item>
            <el-collapse-item title="后续剧情2" name="2" style="padding:0;margin:0;">
              <div>
                后续剧情2后续剧情2后续剧情2后续剧情2后续剧情2后续剧情2后续剧情2后续剧情2
              </div>
            </el-collapse-item>
            <el-collapse-item title="后续剧情3" name="3" style="padding:0;margin:0;">
              <div>
                后续剧情3后续剧情3后续剧情3后续剧情3后续剧情3后续剧情3后续剧情3后续剧情3
              </div>
            </el-collapse-item>
          </el-collapse>
          <el-input
              type="textarea" :rows="1"
              style="width:400px;"
              v-model="form.plotoutline"
              placeholder="都不满意？我要自己写"/>
        </div>
      </el-form-item>
      <el-button class="button3">剧情扩写</el-button>
    </div>
    <!--        详细脚本-->
    <div class="text-wrapper">
      <p class="title1">详细脚本</p>
      <p class="tip">*生成剧情详细分镜，用户可修改</p>
      <el-form-item style="height:20px;">
        <el-input class="input1" v-model="form.plotdetail" type="textarea" :rows="2"/>
      </el-form-item>
      <el-button class="button1">重新生成</el-button>
    </div>
    <div class="text-wrapper">
      <p class="title1">风格定制</p>
      <div class="style-wrapper">
        <!--            画面色彩-->
        <div class="style-item">
          <p class="style-item-title">画面色彩：</p>
          <p>彩色</p>
          <el-form-item class="style-switch">
            <el-switch  v-model="form.color" class="red-switch" />
          </el-form-item>
          <p>黑白</p>
        </div>
        <!--            画面比例-->
        <div class="style-item">
          <p class="style-item-title">画面比例：</p>
          <el-form-item class="style-switch">
            <el-select v-model="form.bili" placeholder="请选择…" style="width: 350px;">
              <el-option label="16:9" value="16:9" />
              <el-option label="9:16" value="9:16" />
              <el-option label="3:4" value="3:4" />
              <el-option label="4:3" value="4:3" />
              <el-option label="1:1" value="1:1" />
            </el-select>
          </el-form-item>
        </div>
        <!--            对话语言-->
        <div class="style-item">
          <p class="style-item-title">对话语言：</p>
          <el-form-item class="style-switch">
            <el-select v-model="form.language" placeholder="请选择…" style="width: 350px;">
              <el-option label="简体中文" value="Simplified-Chinese" />
              <el-option label="繁体中文" value="Chinese" />
              <el-option label="英语" value="English" />
              <el-option label="日语" value="Japanese" />
              <el-option label="韩语" value="Korean" />
            </el-select>
          </el-form-item>
        </div>
        <!--            漫画风格-->
        <div class="style-item">
          <p class="style-item-title">漫画风格：</p>
          <el-form-item class="style-switch">
            <el-select v-model="form.style" placeholder="请选择…" style="width: 350px;">
              <el-option
                  v-for="item in styleOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
              >
                <div class="template-option">
                  <span>{{ item.label }}</span>
                  <el-popover
                      placement="right"
                      trigger="hover"
                      popper-class="preview-popover"
                      style="padding: 0;"
                      width="auto"
                  >
                    <template #reference>
                      <span class="preview-dot"></span>
                    </template>
                    <img :src="item.image" alt="预览图" class="preview-image2" />
                  </el-popover>
                </div>
              </el-option>
            </el-select>
          </el-form-item>
        </div>
        <!--            漫画模板-->
        <div class="style-item">
          <p class="style-item-title">漫画模版：</p>
          <el-form-item class="style-switch">
            <el-select v-model="form.template" placeholder="请选择…" style="width: 350px;" class="image-select">
              <el-option
                  v-for="item in templateOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
              >
                <div class="template-option">
                  <span>{{ item.label }}</span>
                  <el-popover
                      placement="right"
                      trigger="hover"
                      popper-class="preview-popover"
                      style="padding: 0;"
                      width="auto"
                  >
                    <template #reference>
                      <span class="preview-dot"></span>
                    </template>
                    <img :src="item.image" alt="预览图" class="preview-image" />
                  </el-popover>
                </div>
              </el-option>
            </el-select>
          </el-form-item>
        </div>
      </div>
    </div>
    <!--按钮-->
    <el-form-item>
      <el-button class="button2" @click="generateComic">生成漫画</el-button>
    </el-form-item>
  </el-form>
</template>

<style scoped>
.demo-collapse{
  color:#808080;
  padding:0;
  margin:0;
}
:deep(.el-collapse-item__content){
  padding:0;
  margin:0;
}
.preview-dot {
  position: absolute;
  right: 30px;
  top: 50%;
  transform: translateY(-50%);
  width: 15px;
  height: 15px;
  background-color: #E5E5E5;
  border-radius: 50%;
  cursor: pointer;
}
.preview-dot:hover {
  background-color: #A33131;
}
.preview-image{
  width:150px;
}
.preview-image2{
  height:300px;
}
.form{
  padding:30px 40px 10px 40px;
  gap:20px;
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
  }
  .text-wrapper{
    display: flex;
    position:relative;
    gap:20px;
    margin-top:10px;
    .tip{
      font-size:14px;
      color:#A6A6A6;
      position:absolute;
      right:110px;
      top:-35px;
      z-index:999;
    }
    .input1{
      width:400px;
    }
    .button1{
      background-color:#A33131;
      color:white;
      border:none;
      transition: all 0.3s ease;
      position:relative;
      bottom:-20px;
      right:0px;
    }
    .button1:hover{
      filter: brightness(1.2);
      cursor: pointer;
    }
    .button3{
      background-color:#A33131;
      color:white;
      border:none;
      transition: all 0.3s ease;
      position:relative;
      bottom:-145px;
      right:0px;
    }
    .button3:hover{
      filter: brightness(1.2);
      cursor: pointer;
    }
  }
  .style-wrapper{
    margin-top:-12px;
    display: flex;
    gap:8px;
    flex-direction:column;
    color:#808080;
    .style-item{
      display: flex;
      align-items: center;
      gap:10px;
      height:40px;
      .style-switch {
        margin:0;
        .red-switch.is-checked .el-switch__core {
          background-color: #A33131 !important;
          border-color: #A33131 !important;
        }
      }
    }
  }
  .button2{
    background-color:#A33131;
    color:white;
    border:none;
    transition: all 0.3s ease;
    margin-top:0;
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