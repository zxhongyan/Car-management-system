<template>
  <div id="app">

    <!-- 顶部导航栏 -->
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <img src="@/assets/logo.png" alt="" class="logo">
        <el-submenu index="1" class="menu1">
          <template slot="title">数据统计</template>
          <el-menu-item index="1-1">
            <i class="el-icon-s-grid"></i>
            数据统计
          </el-menu-item>
          
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">业务运营</template>
          <el-submenu index="2-1">
            <template slot="title">智能停车</template>
            <el-menu-item index="2-1-1">选项1</el-menu-item>
            <el-menu-item index="2-1-2">选项2</el-menu-item>
            <el-menu-item index="2-1-3">选项3</el-menu-item>
          </el-submenu>
          <el-submenu index="2-2">
            <template slot="title">图表展示</template>
            <el-menu-item index="2-2-1">选项1</el-menu-item>
          </el-submenu>
          <el-submenu index="2-3">
            <template slot="title">千人千面</template>
            <el-menu-item index="2-3-1">选项1</el-menu-item>
            <el-menu-item index="2-3-2">选项2</el-menu-item>
            <el-menu-item index="2-3-3">选项3</el-menu-item>
          </el-submenu>
          <el-menu-item index="2-4">平面图管理</el-menu-item>
          <el-menu-item index="2-5">画像任务</el-menu-item>
          <el-menu-item index="2-6">到店顾客</el-menu-item>
        </el-submenu>

        <el-submenu index="3">
          <template slot="title">设备管理</template>
          <el-menu-item index="3-1">
            <i class="el-icon-s-grid"></i>
            设备管理
          </el-menu-item>
        </el-submenu>

        <el-submenu index="4">
          <template slot="title">用户管理</template>
          <el-submenu index="4-1">
            <template slot="title">机构和用户</template>
            <el-menu-item index="4-1-1"><i class="el-icon-s-grid"></i>组织机构</el-menu-item>
            <el-menu-item index="4-1-2"><i class="el-icon-s-grid"></i>用户管理</el-menu-item>
            <el-menu-item index="4-1-3"><i class="el-icon-s-grid"></i>角色管理</el-menu-item>
          </el-submenu>
        </el-submenu>

        <el-submenu index="5">
          <template slot="title">系统帮助</template>
          <el-menu-item index="5-1"><i class="el-icon-s-grid"></i>帮助中心</el-menu-item>
          <el-menu-item index="5-2"><i class="el-icon-s-grid"></i>关于系统</el-menu-item>
        </el-submenu>
        <el-submenu index="6">
          <template slot="title">位置管理</template>
          <el-menu-item index="6-1">选项1</el-menu-item>
          <el-menu-item index="6-2">选项2</el-menu-item>
          <el-menu-item index="6-3">选项3</el-menu-item>
          <el-submenu index="6-4">
            <template slot="title">选项4</template>
            <el-menu-item index="6-4-1">选项1</el-menu-item>
            <el-menu-item index="6-4-2">选项2</el-menu-item>
            <el-menu-item index="6-4-3">选项3</el-menu-item>
          </el-submenu>
        </el-submenu>

        <!-- 右部用户登录区域 -->
        <div class="test">

        <el-row class="block-col-2">
          <el-col>
            <el-dropdown trigger="click">
              <span class="el-dropdown-link">
                <i class="el-icon-user-solid user_icon"></i>
                <i class="white">测试</i>
                <i class="el-icon-arrow-down el-icon--right white"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>APP下载</el-dropdown-item>
                <el-dropdown-item>修改资料</el-dropdown-item>
                <el-dropdown-item>退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
        </el-row>
        </div>
      </el-menu>

      <!-- 面包屑 -->
      <el-breadcrumb separator="/" class="breadcrumb">
        <el-breadcrumb-item :to="{ path: '/dailyPassengerFlow' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>数据统计</el-breadcrumb-item>
      </el-breadcrumb>

      <hr>

<!-- 内容区域 -->
  <div class="content">
    <!-- 左部侧边栏 -->
    <div class="left_bar">
    <el-row>
      <el-col>
        <el-menu
          :default-active="left_barActiveIndex"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-date"></i>
              <span>客流报告</span>
            </template>
            <el-menu-item-group>
              <router-link to="/dailyPassengerFlow">
                <el-menu-item index="1-1">店内日常客流</el-menu-item>
              </router-link>
              <router-link to="/history">
                <el-menu-item index="1-2">店内历史客流</el-menu-item>
              </router-link>
              <router-link to="/vidio">
                <el-menu-item index="1-3">店内视频客流</el-menu-item>
              </router-link>
              <router-link to="/showRoom">
                <el-menu-item index="1-4">展厅热区图</el-menu-item>
              </router-link>
              <router-link to="/keyModel">
                <el-menu-item index="1-5">展厅重点车型客流</el-menu-item>
              </router-link>
              <router-link to="/interactive">
                <el-menu-item index="1-6">品牌互动墙</el-menu-item>
              </router-link>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-s-tools"></i>
              <span>智能分析报告</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1">展厅客流分析</el-menu-item>
              <el-menu-item index="2-2">展厅接待能力分析</el-menu-item>
              <el-menu-item index="2-3">邀约能力分析</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>智能停车报告</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="3-1">当日分析数据</el-menu-item>
              <el-menu-item index="3-2">历史分析数据</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>系统运维</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="4-1">WIFI认证统计</el-menu-item>
              <el-menu-item index="4-2">当日投屏情况</el-menu-item>
              <el-menu-item index="4-3">投屏统计</el-menu-item>
              <el-menu-item index="4-4">人脸统计</el-menu-item>
              <el-menu-item index="4-5">OAB推送记录</el-menu-item>
              <el-menu-item index="4-6">OTR推送记录</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-s-tools"></i>
              <span>功能区客流报告</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="5-1">功能区客流</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="6">
            <template slot="title">
              <i class="el-icon-date"></i>
              <span>异常统计</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="6-1">WIFI异常统计</el-menu-item>
              <el-menu-item index="6-2">道闸异常统计</el-menu-item>
              <el-menu-item index="6-3">360图片异常统计</el-menu-item>
              <el-menu-item index="6-4">OAB推送异常统计</el-menu-item>
              <el-menu-item index="6-5">OTR推送异常统计</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          
        </el-menu>
      </el-col> 
    </el-row>
    </div>
    <!-- 右部内容 -->  
    <div class="right_content" :span="20">
      <router-view></router-view>
    </div>

    </div>      


  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
      return {
        activeIndex: '1-1',
        left_barActiveIndex: '1-1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
a{
  text-decoration: none;
  color: black;
}
.display_flex{
  display: flex;
  justify-content: center;
  align-items: center;
}
.el-menu-demo{
  min-width: 1000px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.logo{
  width: 50px;
  height: 50px;
  float: left;
  margin-top: 5px;
}
.menu1{
  margin-left: 100px;
}
.test{
  display: flex;
  justify-content: center;
  align-items: center;
  float: right;
  width: 150px;
  margin-top: 2px;
  height: 55px; 
}
.white{
  color: aliceblue;
}
.test .user_icon{
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: azure;
  line-height: 40px;
  font-size: 30px;
}

/* 面包屑 */
.breadcrumb{
  margin: 15px 0 15px 0;
  padding-left: 25px;
}

/* content内容区域 */
.content{
  display: flex;
}
/* 侧边栏 */
.left_bar{
  width: 15%;
  min-width: 200px;
  min-height: 800px;
}
.left_bar .el-menu{
  border-right: 0px;
  text-align: left;
}

/* 右部内容区域 */
.right_content{
  width: 85%;
  min-width: 1000px;
  border-left: 1px solid rgb(155, 151, 151);
}

</style>
