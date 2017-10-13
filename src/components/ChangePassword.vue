<template>
    <div class="change">
      <!--弹出层开始-->
      <!--修改密码开始-->
      <div class="tan-wrap tan_w600">
        <div class="zw_tan">
          <div class="zw_tan_title"></div>
          <div class="tan_count">
            <div class="tan_tit">
              <span>修改密码</span>
            </div>
            <div class="zw_change_pwd">
              <ul class="item_ul clearfix tan_item_ul">
                <li class="z-30">
                  <div class="item_li">
                    <span class="item_name">原密码</span>
                    <div class="item_span">
                      <input class="item_inp" type="text" value="" placeholder="请输入原密码" />
                    </div>
                    <div class="zw_tan_cha_txt">输入错误</div>
                  </div>
                </li>
                <li class="z-29">
                  <div class="item_li">
                    <span class="item_name">新密码</span>
                    <div class="item_span">
                      <input class="item_inp" type="text" value="" placeholder="请输入新密码" />
                    </div>
                  </div>
                </li>
                <li class="z-28">
                  <div class="item_li">
                    <span class="item_name">确认新密码</span>
                    <div class="item_span">
                      <input class="item_inp" type="text" value="" placeholder="请确认新密码"/>
                    </div>
                    <div class="zw_tan_cha_txt">两次输入不一致</div>
                  </div>
                </li>
              </ul>
              <!--按钮开始-->
              <div class="mt40">
                <div class="zw_tan_btn clearfix">
                  <div class="btn btn_lv left">
                    <a href="javascript:;">保存</a>
                  </div>
                  <div class="btn btn_gray left ml20" @click="pwdIsShow()">
                    <a href="javascript:;">取消</a>
                  </div>
                </div>
              </div>
              <!--按钮结束-->
            </div>
          </div>
        </div>
      </div>
      <!--拒绝退回结束-->
      <div class="zblack" id="zblack"></div>
      <!--修改密码结束-->
    </div>
</template>

<script>
    export default {
      data(){
        return{
          password:'',
          newPwd:'',
          newPwdS:'',

//          pwdShow:false
        }
      },
      methods: {
        pwdIsShow(){
         /* this.pwdShow=!this.pwdShow;
          console.log('child:'+this.pwdShow)*/

          if(!this.pwdShow){

            this.pwdShow=!this.pwdShow;
            console.log(this.pwdShow)
          }
        }
      }
    }
</script>

<style scoped>

</style>
