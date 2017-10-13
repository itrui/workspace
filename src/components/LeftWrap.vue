<template>
  <div class="LeftWrap">
    <!--左边的logo，导航开始-->
    <div class="ltWrap clearfix">
      <div class="logoW"><img src="/static/images/logo.png" alt=""></div>
      <div class="clearfix">
        <div class="use mt20">
          <img  class="use_head" src="/static/images/head_default.png" alt="">
          <label class="use_name">{{username}}</label>
        </div>
        <ul class="navul">
          <li class="active">
            <i class="icon_1"></i>
            <!--<router-link to=""></router-link>-->
            <a href="javascript:;">公告</a>
          </li>
          <li>
            <i class="icon_2"></i>
            <router-link to="/regular">置换列表</router-link>
            <!--<a href="javascript:;">置换列表</a>-->
          </li>
          <li>
            <i class="icon_3"></i>
            <a href="javascript:;">认证列表</a>
          </li>

          <li>
            <i class="icon_4"></i>
            <a href="javascript:;">认证补贴</a>
          </li>
          <li>
            <i class="icon_5"></i>
            <a href="javascript:;">返利列表</a>
          </li>
          <li>
            <i class="icon_6"></i>
            <a href="javascript:;">视频列表</a>
          </li>
          <li>
            <i class="icon_7"></i>
            <a href="javascript:;">经销商信息</a>
          </li>
        </ul>
      </div>
    </div>
    <!--左边的logo，导航结束-->
  </div>
</template>

<script>
    export default {
      data(){
        return{
          username:this.$store.state.user
        }
      },
      mounted() {
        this.getUser();
      },
      methods: {
        getUser() {
          this.username=sessionStorage.getItem("username");
//          sessionStorage.clear();
        }
      }
    }
</script>

<style scoped>

</style>
