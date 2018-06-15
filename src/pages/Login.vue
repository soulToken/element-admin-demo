<template>
  <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-position="left" label-width="0px" class="demo-ruleForm card-box loginform">
    <h3 class="title">智能艾灸国外版后台管理系统</h3>
    <el-form-item prop="account">
      <el-input type="text" v-model="ruleForm2.account" auto-complete="off" placeholder="账号"></el-input>
    </el-form-item>
    <el-form-item prop="checkPass">
      <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>
    <el-checkbox v-model="checked" checked style="margin:0px 0px 35px 0px;">记住密码</el-checkbox>
<el-form-item style="width:100%;">
<el-button type="primary" style="width:100%;" @click.native.prevent="handleSubmit2" :loading="logining">登录</el-button>
<!--<el-button @click.native.prevent="handleReset2">重置</el-button>-->
</el-form-item>
</el-form>
</template>

<script>
import { requestLogin } from "../api/api";
import { gettest } from "../api/api";
import NProgress from "nprogress";
export default {
  data() {
    return {
      logining: false,
      ruleForm2: {
        account: "admin",
        checkPass: "1111"
      },
      rules2: {
        account: [
          { required: true, message: "请输入账号", trigger: "blur" }
          //{ validator: validaePass }
        ],
        checkPass: [
          { required: true, message: "请输入密码", trigger: "blur" }
          //{ validator: validaePass2 }
        ]
      },
      checked: true
    };
  },
  mounted() {},
  methods: {
    handleReset2() {
      this.$refs.ruleForm2.resetFields();
    },
    handleSubmit2(ev) {
       
      var _this = this;
       _this.$router.push({ path: "/table" });
      this.$refs.ruleForm2.validate(valid => {
        if (valid) {
          //_this.$router.replace('/table');
          this.logining = true;
          NProgress.start();
          var params = {
            account: this.ruleForm2.account,
            password: md5(this.ruleForm2.checkPass)
          };
          gettest(params)
            .then(function(res) {
              _this.logining = false;
              NProgress.done();
              let result = res.data;
              let resultCode = result.resultCode;
              let msg = result.message;
              let loginInfo = result.result;
              if (resultCode !== "1000") {
                _this.$notify({
                  title: "错误",
                  message: msg,
                  type: "error"
                });
                //loading动画消失
                _this.logining = false;
              } else {
                sessionStorage.setItem("loginInfo", JSON.stringify(loginInfo));
                if (_this.$route.query.redirect) {
                  _this.$router.push({ path: _this.$route.query.redirect });
                } else {
                  _this.$router.push({ path: "/table" });
                }
              }
            })
            .catch(function(error) {
              _this.$notify({
                title: "错误",
                message: "网络错误",
                type: "error"
              });
                  //loading动画消失
                _this.logining = false;
            });

          //             gettest(loginParams).then(function(data){
          // debugger;
          //             }).catch(
          //               function(data){
          // debugger;
          //               }
          //             )

          //             debugger;

          // requestLogin(loginParams).then(data => {

          //   this.logining = false;
          //   NProgress.done();
          //   let { msg, code, user } = data;
          //   if (code !== 200) {
          //     this.$notify({
          //       title: '错误',
          //       message: msg,
          //       type: 'error'
          //     });
          //   } else {
          //     localStorage.setItem('user', JSON.stringify(user));
          //     console.log(this.$route.query.redirect)
          //     if (this.$route.query.redirect) {
          //       this.$router.push({ path: this.$route.query.redirect });
          //     } else {
          //       this.$router.push({ path: '/table' });
          //     }
          //   }
          // });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>
<style scoped>
.card-box {
  padding: 20px;
  /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
  -webkit-border-radius: 5px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  background-clip: padding-box;
  margin-bottom: 20px;
  background-color: #f9fafc;
  margin: 180px auto;
  width: 400px;
  border: 2px solid #8492a6;
}
.title {
  margin: 0px auto 40px auto;
  text-align: center;
  color: #505458;
}
.loginform {
  width: 350px;
  padding: 35px 35px 15px 35px;
}
</style>