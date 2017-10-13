<template>
    <div class="city">
      <div class="item_span">
        <a class="item_a" href="javascript:;" id="city_a">请选择城市</a>
        <div class="item_sj_box">
          <label class="item_sj_lab">
            <em class="sj1"></em>
          </label>
        </div>
      </div>
      <!--城市下拉开始-->
      <div class="item_city_xl" style="display: none;">
        <div class="city_xl clearfix">
          <div class="left mr5">
            <h5>请选择城市</h5>
            <div class="mt5" id="selectProv">
              <dl class="item_xl_dl heg220 wid80">
                <dd>
                  <a v-for="(prov,index) in provList" href="javascript:void(0);" :data="prov.prov_id" @click="getCityByProvId(prov.prov_id,index)" :class="{'active': index == current}">{{prov.prov_name}}</a>
                </dd>
              </dl>
            </div>
          </div>
          <div class="left">
            <h5>请选择地区</h5>
            <div class="mt5" id="selectCity" style="display: block;">
              <dl class="item_xl_dl heg220 wid80" >
                <dd>
                  <a v-for="(city,index) in cityList" href="javascript:;" :data="city.city_id" @click="getCityActive(index)" :class="{'active': index == cityCurrent}">{{city.city_name}}</a>
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
      <!--城市下拉结束-->
    </div>
</template>

<script>
  export default {
    data(){
      return{
        provList:'',
        cityList:'',
        current:-1,
        cityCurrent:-1,
        provId:-1,
        cityId:-1
      }
    },
    mounted() {
      this.getProv();
      this.citySelect();
    },
    methods:{
      getProv(){
        this.$http.get('/api/prov/list').then((res)=>{
          if(res.status === 200){
            this.provList=res.data.data.provList;
          }
        },(error)=>{
          console.log(error)
        })
      },
      getCityByProvId(prov_id,index){
        this.$http.get('/api/city/list',{params: { prov_id:prov_id }}).then((res)=>{
          if(res.status === 200){
            this.cityList=res.data.data.cityList;
          }
        },(error)=>{
          console.log(error)
        });
        this.current=index;
        this.cityCurrent=-1;
        this.provId=prov_id;
      },
      getCityActive(index){
        this.cityCurrent=index;
        var $proTxt=$('#selectProv').find('.active').text();
        var $cityTxt=this.cityList[index].city_name;
        var item_a=$('#city_a');
        item_a.text($proTxt+' '+$cityTxt);
        item_a.addClass('on');
        $('.item_city_xl').slideUp();
        this.cityId=this.cityList[index].city_id;
      },
      citySelect(){
        spanDown('.item_span','.item_city_xl');
      }
    }
  }
</script>

<style scoped>

</style>
