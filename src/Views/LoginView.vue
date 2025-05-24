<script>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { watch } from "vue";
  import { ElMessage } from 'element-plus';
  export default {
    setup() {
      const router = useRouter();
      const loginForm = ref(null);
      const showLogin = ref(false);
      const clickButton = ref(false);
      const isRegister = ref(false);
      // 存储用户输入的数据
      const loginData = ref({
        userid: '',
        userpass: '',
        comfirmedpass: '',
      });
      // 账号 & 密码规则
      const rules = {
        userid: [
          { required: true, message: '请输入账号', trigger: 'blur' },
          { max: 20, message: '账号长度不能超过20位', trigger: 'blur' }
        ],
        userpass: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 8, message: '密码长度不能小于8位', trigger: 'blur' },
          {
            validator: (rule, value, callback) => {
              const hasLetter = /[a-zA-Z]/.test(value);
              const hasNumber = /[0-9]/.test(value);
              const hasSpecial = /[^a-zA-Z0-9]/.test(value);
              if (!hasLetter || !hasNumber || !hasSpecial) {
                callback(new Error('密码必须包含字母、数字和特殊字符'));
              } else {
                callback();
              }
            },
            trigger: 'blur'
          }
        ],
        comfirmedpass: [
          { required: true, message: "请确认密码", trigger: "blur" },
          {
            validator: (rule, value, callback) => {
              if (value !== loginData.value.userpass) {
                callback(new Error("两次输入的密码不一致"));
              } else {
                callback();
              }
            },
            trigger: "blur",
          },
        ],
      };
      const switchMode = (mode) => {
        isRegister.value = mode;
      };
      // 提交表单
      const submitForm = () => {
        if (!loginForm.value) {
          return;
        }

        loginForm.value.validate((valid) => {
          if (valid) {
            if (isRegister.value) {
              ElMessage.success('注册成功！');
            } else {
              ElMessage.success('登录成功！');
            }
            showLogin.value = false;
            router.push('/index');
          } else {
            ElMessage.error('请检查输入信息');
          }
        });
      };

      const handleClick = (index) => {
        if (index === 4 ||clickButton) {
          showLogin.value = true;
          console.log("登录");
        }
        console.log(showLogin.value);
      };
      watch(showLogin, (newVal) => {
        console.log("showLogin 变化:", newVal);
      });

      const menuItems = [
        { text: '应用落地'},
        { text: '开放平台'},
        { text: '联系我们'},
        { text: '关于我们'},
        { text: '登录' }
      ];

      return { handleClick,
        router,
        loginForm,
        menuItems,
        showLogin,
        clickButton,
        loginData,
        rules,
        isRegister,
        submitForm,
        switchMode,
      };
    }
  };
</script>

<template>
  <div class="background">
    <!-- 导航栏 -->
    <div class="header">
      <div class="logo">
        <img src="../assets/static/PlotSketch_white.png" alt="logo" class="logo-word">
      </div>
      <div class="menu">
        <ul class="menu-list">
          <li
              v-for="(item, index) in menuItems"
              :key="index"
              @click="showLogin = index === 4"
          >
            <span>{{ item.text }}</span>
          </li>
        </ul>
      </div>
    </div>

    <div class="main-content">
      <!-- 页面主要内容 -->
      <img src="../assets/static/灵感.png" alt="pic" class="big-word">
      <div class="tiny-word">
        <p>写下你的故事大纲，AI将其扩展为完整剧情并生成黑白漫画，支持细节调整与多线续写；或由关键词与角色设定出发，智能推荐三种创意方向，引你走入属于自己的漫画世界。</p>
      </div>
      <el-button class="custom-button" @click="showLogin=true">
        <p>
          立即体验
        </p>
        <img src="../assets/static/长箭头.png" alt="pic" >
      </el-button>
    </div>

    <!-- 登录弹窗 -->
    <el-dialog
        width="360"
        v-model="showLogin"
        center
        :show-close="false"
        top="22vh"
        custom-class="vDialog"
    >
      <el-form ref="loginForm" :model="loginData" :rules="rules" status-icon>
        <div class="btn">
          <button :class="isRegister ? 'btn1' : 'btn2'" @click.prevent="isRegister = true">注册</button>
          <button :class="isRegister ? 'btn2' : 'btn1'" @click.prevent="isRegister = false">登录</button>
        </div>

        <div class="input-group">
          <el-form-item prop="userid">
            <el-input v-model="loginData.userid" placeholder="账号"></el-input>
          </el-form-item>

          <el-form-item prop="userpass">
            <el-input type="password" v-model="loginData.userpass" placeholder="密码"></el-input>
          </el-form-item>

          <el-form-item v-if="isRegister" prop="comfirmedpass">
            <el-input type="password" v-model="loginData.comfirmedpass" placeholder="确认密码"></el-input>
          </el-form-item>
        </div>

        <div class="footer">
          <div class="dialog-footer">
            <button class="btn3" @click.prevent="submitForm">{{ isRegister ? "注册" : "登录" }}</button>
            <button class="btn4" @click="showLogin = false">取消</button>
          </div>
        </div>
      </el-form>
    </el-dialog>
  </div>
</template>

<style scoped>
/* 整个背景容器 */
.background {
  margin:0px;
  width: 100vw;
  height: 100vh;
  background-image: url("../assets/static/首页.png");
  background-size: cover; /* 优先填满 */
  background-position: center; /* 居中显示 */
  background-repeat: no-repeat;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

/* 导航栏样式 */
.header {
  display: flex;
  align-items: center;/*垂直居中*/
  justify-content: space-between;
  margin:0;
  padding:10px 20px;
  .logo{
    margin-left:40px;
    .logo-word{
      height:50px;
    }
  }
  .menu{
    margin-right:20px;
    align-items: center;/*垂直居中*/
    .menu-list{
      gap:50px;
      list-style:none;/*去圆点*/
      display:flex;
      color:white;
      font-size:18px;
      cursor:pointer;
    }
  }
}

/* 主体内容可根据需要添加样式 */
.main-content {
  .big-word{
    margin-top:100px;
    margin-left:150px;
    height:180px;
  }
  .tiny-word{
    color:white;
    font-size:16px;
    margin-left:155px;
    width:600px;
  }
  .custom-button {
    margin-left:150px;
    margin-top:20px;
    border-radius: 50px; /* 圆角为50% */
    padding: 30px 30px;
    background: linear-gradient(to right, rgb(167, 60, 60), rgb(237, 135, 135)); /* 横向渐变 */
    color: white;
    border: none;
    display: flex;
    align-items: center;
    transition: all 0.3s ease;
    p{
      font-size:18px;
    }
    img{
      height:48px;
      width:60px;
      margin-left:10px;
      margin-top:-3px;
    }
  }

  .custom-button:hover {
    filter: brightness(1.8);
    cursor: pointer;
  }
}

/* 页面全屏：去除边距 */
html,body,#app {
  margin: 0px;
  padding: 0;
  height:100vh;
}

/*登录窗*/
:deep(.el-form-item){
  margin:0;
  padding:0;
  width:90%;
}

:deep(.el-dialog__header) {
  display: none; /* 隐藏头部 */
}
.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top:0px;
  gap: 80px;
  border:none;
  width:100%;
  .btn1{
    width:80px;
    padding:5px 8px;
    border:none;
    background-color: rgb(237, 135, 135);
    color: white;
    font-size: 16px;
    box-shadow: 8px 8px 17px -10px rgba(0, 0, 0, 1);
    border-radius: 30px;
  }
  .btn2{
    width:80px;
    padding:5px 8px;
    border:1px solid black;
    background-color: white;
    color: black;
    font-size: 16px;
    box-shadow: none;
    border-radius: 30px;
  }
}
.input-group {
  margin-top: 20px;
  margin-bottom: 25px;
  margin-left:30px;
  margin-right:30px;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap:20px;
  label {
    position: absolute;
    top: 0;
    left: 0;
    padding: 10px 0;
    font-size: 16px;
    color: #fff;
    pointer-events: none;
    transition: all 0.3s ease;
  }
}
.footer{
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top:20px;
  margin-bottom:20px;
}
.dialog-footer{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 15px;
  border:none;
  width:90%;
  .btn3{
    width:100%;
    height:50%;
    padding:5px;
    margin:0;
    background: linear-gradient(to right, #A33131, rgb(237, 135, 135)); /* 备用渐变样式 */
    border-right: 0.5px solid rgba(255,255,255,0.3);
    border-bottom: 0.5px solid rgba(255,255,255,0.3);
    border-top:none;
    border-left:none;
    color: white;
    font-size: 16px;
    box-shadow:none;
    border-radius: 10px;
  }
  .btn4{
    margin:0;
    width:100%;
    height:50%;
    padding:5px;
    background: white;
    border: 1px solid black;
    color: black;
    font-size: 16px;
    box-shadow:none;
    border-radius: 10px;
  }
}

/* 确保输入框内部有适当的填充和颜色 */
.input-group .el-input__inner {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  color: #000; /* 设置一个对比度高的字体颜色 */
  background-color: rgba(255, 255, 255, 0.9); /* 背景稍微透明一些 */
  border: 1px solid #ddd;
  outline: none;
  transition: all 0.3s ease;
}

.input-group input:focus ~ label,
.input-group input:valid ~ label {
  top: -20px;
  font-size: 13px;
  color: #25AEBF;
}

</style>
