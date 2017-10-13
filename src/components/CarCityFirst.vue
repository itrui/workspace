<template>
    <div class="car_city_first">
      <div class="item_span">
        <a class="item_a" href="javascript:;" id="carCityA">请选择车牌字头</a>
        <div class="item_sj_box">
          <label class="item_sj_lab">
            <em class="sj1"></em>
          </label>
        </div>
      </div>
      <!--下拉开始-->
      <div class="item_xl" style="display:none;">
        <dl class="item_xl_dl clearfix">
          <dd>
            <a v-for="(city,index) in carCityFirstList" href="javascript:;" @click="getFirst(index)" :class="{'active':index==cur}">{{city.citycode}}</a>
          </dd>
        </dl>
      </div>
      <!--下拉结束-->
    </div>
</template>

<script>
    export default {
      data(){
        return{
          carCityFirstList:'',
          cur:-1
        }
      },
      mounted(){
        this.getFirst();
//        this.dropDown();
      },
      methods:{
        getFirst(index){
          this.$http.get('/api/carCityFirst/list').then((res)=>{
            if(res.status === 200){
              this.carCityFirstList=res.data.data.carCityFirstList;
            }
          },(error)=>{
            console.log(error)
          });
          this.cur=index;
          if(this.carCityFirstList[index]){
            $('#carCityA').text(this.carCityFirstList[index].citycode).addClass('on');
          }

          $('.item_xl').slideUp();
        }
      }

    }
</script>

<style scoped>

</style>
