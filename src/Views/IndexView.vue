<script>
export default {
  data() {
    return {
      dropdownVisible: false, // 控制下拉菜单的显示和隐藏
      menuItems: [
        {
          route: '/index/comic_out',
          text: '漫画生成',
          icon: require('../assets/static/新建.png'), // 根据实际图标类名调整
          children: null
        },
        {
          route: '/index/plot_out',
          text: '剧情灵感',
          icon: require('../assets/static/写作.png'),
          children: null
        },
      ],
      recordItems: [
        {
          route: '/index/plot_out',
          text: '美女与野兽剧情',
          icon: require('../assets/static/气泡.png'), // 根据实际图标类名调整
          children: null
        },
        {
          route: '/index/comic_out',
          text: '盗梦空间漫画',
          icon: require('../assets/static/漫画.png'),
          children: null
        },
        {
          route: '/index/comic_out',
          text: '名侦探柯南漫画',
          icon: require('../assets/static/漫画.png'),
          children: null
        },
      ]
    }
  },
  methods: {
    isActive(route) {
      return this.$route.path === route;  // 判断当前路由是否与 menuItem 的 route 相匹配
    },
    // 切换下拉菜单显示
    toggleDropdown(event) {
      this.dropdownVisible = !this.dropdownVisible;
      event.stopPropagation(); // 阻止点击事件冒泡
    },

    // 跳转到 LoginView
    goToLogin() {
      this.$router.push({ name: '登录' });  // 使用路由跳转到 LoginView
      this.dropdownVisible = false; // 关闭下拉菜单
    },

    // 监听点击事件，点击外部区域关闭下拉菜单
    handleClickOutside(event) {
      const dropdown = this.$refs.dropdown;  // 获取 dropdown 组件
      if (dropdown && !dropdown.contains(event.target)) {
        this.dropdownVisible = false; // 点击外部区域时关闭下拉菜单
      }
    }
  },
  mounted() {
    if (this.$route.path === '/') {
      this.$router.replace(this.menuItems[0].route); // 重定向到第一个页面
    }
    document.addEventListener('click', this.handleClickOutside);  // 监听全局点击事件
  },

  beforeUnmount() {
    document.removeEventListener('click', this.handleClickOutside);  // 组件销毁时移除事件监听
  },
}
</script>

<template>
  <div class="container">
<!--    左侧导航栏-->
    <div class="left-menu">
      <div class="logos">
        <img src="../assets/static/logo_image.png" alt="pic" class="logo1">
        <img src="../assets/static/PlotSketch_red.png" alt="pic" class="logo2">
      </div>
      <ul class="menu-list">
        <li v-for="(item, index) in menuItems"
            :key="index"
            :class="['menu-item', { active: isActive(item.route) }]">
          <router-link :to="item.route" class="menu-link">
            <img :src="item.icon" alt="icon" class="menu-icon" />
            <span>{{ item.text }}</span>
          </router-link>
        </li>
      </ul>
      <div class="red-line-horizontal"></div>
<!--      用户历史记录-->
      <div class="records">
        <p>历史记录</p>
        <ul class="menu-list">
          <li v-for="(item, index) in recordItems"
              :key="index"
              :class="['menu-item1', { active: isActive(item.route) }]">
            <router-link :to="item.route" class="menu-link1">
              <div class="icon-wrapper">
                <img :src="item.icon" alt="icon" class="menu-icon1" />
                <div class="gray-circle"></div>
              </div>
              <span>{{ item.text }}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
<!--    上方导航栏-->
    <div class="head-menu">
      <div class="userinfo">
        <img src="../assets/static/tx1.png" alt="pic" class="tx">
        <p @click="toggleDropdown">username</p>
        <ul class="dropdown-menu" ref="dropdown" v-show="dropdownVisible">
          <li @click="goToLogin">退出登录</li>
        </ul>
      </div>
    </div>
<!--    主要内容-->
    <div class="main-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
html,body,#app {
  margin: -10px;
  height:100vh;
}
.container{
  background-color:#F4F5F7;
  width: 100vw;
  height: 100vh;
  margin-top:0px;
}

.left-menu{
  z-index:99;
  width:240px;
  height:100vh;
  border-right:1px solid #E5E5E5;
  background-color:white;
  display: flex;
  flex-direction: column;
  align-items: center;
  .logos{
    display:flex;
    padding:10px 20px;
    gap:10px;
    .logo1{
      height:35px;
    }
    .logo2{
      height:40px;
      margin-top:-3px;
    }
  }
  .menu-list{
    list-style:none;/*去圆点*/
    justify-content:center;
    align-items: center;
    margin-top:10px;
    margin-bottom:0px;
    padding:0px;
    width:90%;
    .menu-item{
      width: 100%;
      display: flex;
      align-items: center;
      justify-content:center !important;
      margin-bottom:10px;
    }
    .menu-item:hover .menu-link,
    .menu-item.active .menu-link {
      display: flex;
      justify-content: center !important;
      background-color: rgb(222,222,222);
      transition: background-color 0.2s ease;
      width: 100%;
      border-radius: 10px;
    }
    .menu-link{
      display: flex;
      text-decoration: none; /* 去掉下划线 */
      justify-content:center !important;
      padding:15px 10px;
      font-size:17px;
      color:#383838;
    }
    .menu-icon{
      width:25px;
      height:25px;
      margin-right:10px;
    }
  }
  .red-line-horizontal{
    height:0.5px;
    background-color:#A33131;
    width:90%;
    list-style:none;/*去圆点*/
    align-items: center;
  }
  .icon-wrapper {
    position: relative;
    width: 30px; /* 和灰色圆圈一样 */
    height: 30px;
    display: flex;
    align-items: center !important;
    justify-content: center !important;
    margin-right:10px;
    .gray-circle{
      background-color: #D9D9D9;
      border-radius:50%;
      width:30px;
      height:30px;
      position: absolute;
      top: 0;
      left: 0;
    }
    .menu-icon1{
      width:25px;
      height:25px;
      z-index:9;
    }
  }

  .records{
    margin-left:-20px;
    p{
      color:#808080;
    }
    .menu-link1{
      font-size:17px;
      display: flex;
      text-decoration: none; /* 去掉下划线 */
      padding:15px 10px;
      color:#383838;
      width:100%;
    }
  }
}
.head-menu{
  background-color:white;
  top:0;
  position: absolute;
  z-index:100;
  left: 241px; /* 错开 left-menu */
  height: 60px;
  width: calc(100vw - 241px); /* 撑满剩余部分 */
  display:flex;
  align-items: center;
  .userinfo{
    position:absolute;
    right:50px;
    display:flex;
    align-items: center;
    justify-content: center;
    gap:20px;
    .tx{
      border-radius:50%;
      width:40px;
      height:40px;
    }
    p{
      right:10px;
      font-size:18px;
      color:#383838;
      cursor:pointer;
    }
  }
  /* 下拉菜单默认隐藏 */
  .dropdown-menu {
    position:absolute;
    right: -10px;
    top:50px;
    background-color:white;
    color:white;
    border-radius: 8px;
    padding: 8px 5px;
    width: 100px;
    height:25px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 999 !important;
    li {
      list-style: none;
      text-align: center;
      cursor: pointer;
      color: #383838;
      transition: background-color 0.3s ease;
    }
    li:hover{
      background-color: #f0f0f0; /* 浅灰色背景 */
    }
  }
}
.main-content{
  position:absolute;
  top:60px;
  left:240px;
  width: calc(100vw - 241px); /* 撑满剩余部分 */
  height: calc(100vh - 60px); /* 撑满剩余部分 */

}
</style>