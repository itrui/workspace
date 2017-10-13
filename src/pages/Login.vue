<template>
    <div class="login login_bg">
      <div class="clearfix cl_sign_wtext">
        <div class="cl_trademak_img">
          <span class="cl_xiand"></span>
          <span class="cl_xiand1"></span>
        </div>
        <span class="cl_xd">现代首选二手车经营有限公司</span>
      </div>
      <div class="cl_sign">
        <div class="cl_sign_content"></div>
        <div class="cl_sign_login">
          <h3 class="ft28">登录</h3>
          <div class="cl_mark">
            <span class="cl_mark_img"></span>
            <span class="cl_mark_img1"></span>
          </div>

            <div class="cl_logoin">
              <dl class="clearfix mt15">
                <dt class="cl_user"></dt>
                <dd><input type="text" placeholder="请输入用户名" v-model='loginName'/></dd>
              </dl>
              <dl class="clearfix mt15">
                <dt class="cl_lock"></dt>
                <dd><input type="text" placeholder="请输入密码" v-model='passWord'/></dd>
              </dl>
              <dl class="clearfix mt15">
                <dd class="cl_code"><input type="text" placeholder="请输入验证码" /></dd>
                <dd class="cl_Verification "><img src="../../static/images/cl_img1.png"/></dd>
              </dl>
              <div class="mt15" style="height: 30px; line-height: 30px; color: red;" v-show="showTooltip">{{tooltip}}</div>
              <a href="javascript:void(0)" class="ft18 mt15" @click='login'>登   录</a>
              <a href="javascript:void(0)" class="ft18 mt15" style="background: greenyellow" @click="register()">注   册</a>
            </div>
        </div>
        <div class="cl_sin_right">
          <div class="cl_sin_right_ew">
            <span class="cl_img"><img src="../../static/images/Bitmap.png"/></span>
            <span class="ft12">经销商APP扫描下载</span>
            <span class="ft24 cl_trademak">北京现代首选系统 v5.0.0</span>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import {setCookie,getCookie} from '../../static/js/cookie.js'
  export default {
    data() {
      return {
        loginName:'',
        passWord:'',
        error:'',
        tooltip:'',
        showTooltip:false,
        userName: sessionStorage.userName
      }
    },
    computed: {
    },
    methods:{
      login() {
        if(this.loginName==''&&this.passWord==''){
          this.tooltip='请输入用户名或密码';
          this.showTooltip=true;
        }else if(this.loginName==''){
          this.tooltip='请输入用户名';
          this.showTooltip=true;
        }else if(this.passWord==''){
          this.tooltip='请输入密码';
          this.showTooltip=true;
        }else{
          let data = {'username':this.loginName,'password':this.passWord};
          this.$http.post('/api/login',data).then((res) => {
/*
            if(res.data.code !=200){
              if( res.data.code == 4000){
                console.log("该用户不存在")
              }else if( res.data.code== 5000){
                console.log("密码输入错误")
              }
            }else{
              console.log("登录成功");
              this.$router.push({path: '/regular'})
            }
*/
            if(res.data.code===200){
              this.$store.state.user=this.loginName;
              sessionStorage.setItem("username", this.loginName);
              this.$router.push({path: '/regular'})
            }else {
              this.tooltip='用户或密码错误';
              this.showTooltip=true;
            }
          }).then((error)=> this.error = error)
        }
      },
      register(){

        if(this.loginName==''&&this.passWord==''){
          this.tooltip='请输入用户名或密码';
          this.showTooltip=true;
        }else if(this.loginName==''){
          this.tooltip='请输入用户名';
          this.showTooltip=true;
        }else if(this.passWord==''){
          this.tooltip='请输入密码';
          this.showTooltip=true;
        }else {

          let data = {'username': this.loginName, 'password': this.passWord};
          this.$http.post('/api/register', data).then((res) => {
            //console.log(res)
            if (res.data.code === 200) {
              this.tooltip='注册成功';
              this.showTooltip=true;
            }

          }).then((error) => this.error = error)


        }


      }
    }
  }
</script>

<style scoped>

</style>
