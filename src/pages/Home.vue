<template>
	<el-row class="panel">
		<el-col :span="24" class="panel-top">
			<el-col :span="20" style="font-size:26px;">


        <icon name="生活" scale="20" width="50" height="50"></icon>
<img src="../assets/logo4.png" class="logo"> <span>AD<i style="color:#20a0ff">MIN</i>
</span>
</el-col>
<el-col :span="4" class="rightbar">
	<el-dropdown trigger="click">
		<span class="el-dropdown-link" style="color:#c0ccda;cursor: pointer;"><img src="../assets/user.png" class="head"> {{userName}}
</span>
<el-dropdown-menu slot="dropdown">
	<el-dropdown-item  @click.native="logout">退出登录</el-dropdown-item>
</el-dropdown-menu>
</el-dropdown>
</el-col>
</el-col>
<el-col :span="24" class="panel-center">
	<!--<el-col :span="4">-->
	<aside style="width:230px;">

<el-menu :default-active="currentPath" class="el-menu-vertical-demo"  :collapse="isCollapse"  text-color="#fff"    active-text-color="#ffd04b"    background-color="#324057"   @open="handleopen" @close="handleclose" @select="handleselect"
	theme="dark" unique-opened router>
	<template v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
		<el-submenu :index="index+''" v-if="!item.leaf"  v-bind:key="index">
			<template slot="title"><i :class="item.iconCls"></i>
                <span v-if="!isCollapse">
                    {{item.name}}
                </span></template>
			<el-menu-item v-for="child in item.children" :index="child.path" v-bind:key="child.path">{{child.name}}</el-menu-item>
		</el-submenu>
		<el-menu-item v-if="item.leaf&&item.children.length>0" :index="item.children[0].path" v-bind:key="item.children[0].path"><i :class="item.iconCls"></i>{{item.children[0].name}}</el-menu-item>
	</template>
</el-menu>
</aside>
<!--</el-col>-->
<!--<el-col :span="20" class="panel-c-c">-->
<section class="panel-c-c" :style="{left:width+'px'}">
	<div class="grid-content bg-purple-light">
		<el-col :span="24" style="margin-bottom:15px;">
                <i style="float:left;" class="el-icon-d-arrow-left"  v-if="!isCollapse"  @click="isCollapse=!isCollapse">收缩</i>
                <i style="float:left;" class="el-icon-d-arrow-right" @click="isCollapse=!isCollapse" v-else>展开</i>
                <strong style="width:200px;float:left;color: #475669;margin-left:20px;">{{currentPathName}}</strong>
                <el-breadcrumb separator="/" style="float:right;">
                <el-breadcrumb-item :to="{ path: '/table' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item v-if="currentPathNameParent!=''">{{currentPathNameParent}}</el-breadcrumb-item>
                <el-breadcrumb-item v-if="currentPathName!=''">{{currentPathName}}</el-breadcrumb-item>
                </el-breadcrumb>
        </el-col>
<el-col :span="24" style="background-color:#fff;box-sizing: border-box;">
<!--<transition name="fade">-->
<router-view></router-view>
<!--</transition>-->
</el-col>
</div>
</section>
<!--</el-col>-->
</el-col>
</el-row>
</template>

<script>
export default {
  data() {
    return {
      currentPath: "/table",
      currentPathName: "用户列表",
      currentPathNameParent: "国外艾灸",
      userName: "",
      width:62,
      isCollapse: true,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      }
    };
  },
  created() {
    this.currentPath = this.$route.path;
    let user = sessionStorage.getItem("loginInfo");
    if (user) {
      this.userName = JSON.parse(user).userName;
    }
  },
  watch: {
    $route(to, from) {
      //监听路由改变
      this.currentPath = to.path;
      this.currentPathName = to.name;
      this.currentPathNameParent = to.matched[0].name;
    },
    isCollapse(old,news){
            if(old){
                this.width=62
            }else{
                this.width=230
            }
    }
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    handleopen() {
      //console.log('handleopen');
    },
    handleclose() {
      //console.log('handleclose');
    },
    handleselect: function(a, b) {},
    //退出登录
    logout: function() {
      var _this = this;
      this.$confirm("确认退出吗?", "提示", {
        //type: 'warning'
      })
        .then(() => {
          _this.$router.replace("/login");
        })
        .catch(() => {});
    }
  }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

.panel {
  position: absolute;
  top: 0px;
  bottom: 0px;
  width: 100%;
}

.panel-top {
  height: 60px;
  line-height: 60px;
  background: #1f2d3d;
  color: #c0ccda;
}

.panel-top .rightbar {
  text-align: right;
  padding-right: 35px;
}

.panel-top .rightbar .head {
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin: 10px 0px 10px 10px;
  float: right;
}

.panel-center {
  background: #324057;
  position: absolute;
  top: 60px;
  bottom: 0px;
  overflow: hidden;
}

.panel-c-c {
  background: #f1f2f7;
  position: absolute;
  right: 0px;
  top: 0px;
  bottom: 0px;
  left: 230px;
  overflow-y: scroll;
  padding: 20px;
}

.logout {
  background: url(../assets/logout_36.png);
  background-size: contain;
  width: 20px;
  height: 20px;
  float: left;
}

.logo {
  width: 40px;
  float: left;
  margin: 10px 10px 10px 18px;
}

.tip-logout {
  float: right;
  margin-right: 20px;
  padding-top: 5px;
}

.tip-logout i {
  cursor: pointer;
}

.admin {
  color: #c0ccda;
  text-align: center;
}
</style>