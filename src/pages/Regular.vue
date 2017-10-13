<template>
    <div class="regular">
      <LeftWrap></LeftWrap>
      <!--右边的头部，面包屑和内容开始-->
      <div class="rtWrap clearfix">
        <!-- 头部开始-->
        <div class="heard clearfix">
          <div class="hearh2">
            北京现代首选系统 v5.0.0
          </div>
          <ul class="zheard_ul2">
            <li class="zli2" @click="pwdIsShow()">
              <label></label>
              <span class="zli_sp2">修改密码</span>
            </li>
            <li class="zli3">
              <label></label>
            </li>
          </ul>
        </div>
        <!-- 头部结束-->
        <!--内容开始-->
        <div class="contWrap clearfix">
          <!-- 面包屑开始-->
          <div class="bread">
            <span>置换列表</span>
            <em class="active">&gt;</em>
            <a class="active" href="javascript:;"><span>常规置换</span></a>
          </div>
          <!-- 面包屑结束-->

          <!--主体内容开始-->
          <div class="contWr clearfix">
            <div class="zw_replace_header mt20">
              <ul class="clearfix zw_re_head">
                <li class="active">旧车信息</li>
                <li>新车信息</li>
              </ul>
            </div>
            <div class="mt20 zw_panel clearfix">
              <div class="zw_replace_box">
                <div class="zw_replace_wrap ">
                  <ul class="zw_replace_title clearfix" id="old_car_tit">
                    <li class="active"><span>基本信息</span></li>
                    <li><span>详细信息</span></li>
                    <li><span>价格信息</span></li>
                    <li><span>客户信息</span></li>
                    <li><span>图片资料</span></li>
                  </ul>
                  <div class="zw_replace_body" id="old_car_body">
                    <!--基本信息开始-->
                    <div class="zw_replace_count ">
                      <ul class="item_ul clearfix replace_item_ul">
                        <li class="z-30">
                          <div class="item_li">
                            <span class="item_name">VIN码</span>
                            <div class="item_span">
                              <input class="item_inp" type="text" value="请输入VIN码" />
                            </div>
                          </div>
                        </li>
                        <li class="z-29">
                          <div class="item_li">
                            <span class="item_name">发动机</span>
                            <div class="item_span">
                              <a class="item_a" href="javascript:;">请输入发动机型号</a>
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
                                  <a href="javascript:;">简体中文 </a>
                                  <a href="javascript:;">繁体中文</a>
                                  <a href="javascript:;">English</a>
                                </dd>
                              </dl>
                            </div>
                            <!--下拉结束-->
                          </div>
                        </li>
                        <li class="z-28">
                          <div class="item_li">
                            <span class="item_name">行驶里程</span>
                            <div class="item_span">
                              <input class="item_inp wid120" type="text" value="请输入里程" />
                              <div class="item_sj_box">万公里</div>
                            </div>
                          </div>
                        </li>
                        <li class="z-27">
                          <div class="item_li">
                            <span class="item_name">品牌车型</span>
                            <div class="item_span">
                              <a class="item_a" href="javascript:;">请选择品牌车型</a>
                              <div class="item_sj_box">
                                <label class="item_sj_lab">
                                  <em class="sj1"></em>
                                </label>
                              </div>
                            </div>
                            <!--三联下拉开始-->
                            <div class="item_thr_xl item_thr" style="width:284px;display: none;"><!--车型弹出开始-->
                              <div class="letter left"><!--字母开始-->
                                <label>
                                  <a href="javascript:;" data="A">A</a>
                                  <a href="javascript:;" data="B">B</a>
                                  <a href="javascript:;" data="C">C</a>
                                  <a href="javascript:;" data="D">D</a>
                                  <a href="javascript:;" data="F">F</a>
                                  <a href="javascript:;" data="G">G</a>
                                  <a href="javascript:;" data="H">H</a>
                                  <a href="javascript:;" data="J">J</a>
                                  <a href="javascript:;" data="K">K</a>
                                  <a href="javascript:;" data="L">L</a>
                                  <a href="javascript:;" data="M">M</a>
                                  <a href="javascript:;" data="N">N</a>
                                  <a href="javascript:;" data="O">O</a>
                                  <a href="javascript:;" data="P">P</a>
                                  <a href="javascript:;" data="Q">Q</a>
                                  <a href="javascript:;" data="R">R</a>
                                  <a href="javascript:;" data="S">S</a>
                                  <a href="javascript:;" data="T">T</a>
                                  <a href="javascript:;" data="W">W</a>
                                  <a href="javascript:;" data="X">X</a>
                                  <a href="javascript:;" data="Y">Y</a>
                                  <a href="javascript:;" data="Z">Z</a>
                                </label>
                              </div><!--字母结束-->
                              <div class="item_thr_div left Brand"><!--选择品牌开始-->
                                <h3>请选择品牌</h3>
                                <div class="item_xl_dl heg388">
                                  <dl>
                                    <dt data="A">A</dt>
                                    <dd>
                                      <a class="active" href="javascript:;">阿尔法·罗密欧阿尔法·罗密欧阿尔法·罗密欧阿尔法·罗密欧</a>
                                      <a href="javascript:;">奥迪</a>
                                      <a href="javascript:;" class="">奥克斯</a>
                                      <a href="javascript:;" class="">阿斯顿·马丁</a>
                                    </dd>
                                  </dl>
                                  <dl>
                                    <dt data="B">B</dt>
                                    <dd>
                                      <a class="" href="javascript:;">阿尔法·罗密欧</a>
                                      <a href="javascript:;">奥迪</a>
                                      <a href="javascript:;">奥克斯</a>
                                      <a href="javascript:;">阿斯顿·马丁</a>
                                    </dd>
                                  </dl>
                                  <dl>
                                    <dt data="C">C</dt>
                                    <dd>
                                      <a class="" href="javascript:;">阿尔法·罗密欧</a>
                                      <a href="javascript:;">奥迪</a>
                                      <a href="javascript:;">奥克斯</a>
                                      <a href="javascript:;">阿斯顿·马丁</a>
                                    </dd>
                                  </dl>
                                  <dl>
                                    <dt data="D">D</dt>
                                    <dd>
                                      <a class="" href="javascript:;">阿尔法·罗密欧</a>
                                      <a href="javascript:;">奥迪</a>
                                      <a href="javascript:;">奥克斯</a>
                                      <a href="javascript:;">阿斯顿·马丁</a>
                                    </dd>
                                  </dl>
                                  <dl>
                                    <dt data="E">E</dt>
                                    <dd>
                                      <a class="" href="javascript:;">阿尔法·罗密欧</a>
                                      <a href="javascript:;">奥迪</a>
                                      <a href="javascript:;">奥克斯</a>
                                      <a href="javascript:;">阿斯顿·马丁</a>
                                    </dd>
                                  </dl>
                                </div>
                              </div><!--选择品牌结束-->
                              <div class="item_thr_div left Cars" style="display: none;"><!--请选择车系开始-->
                                <h3>请选择车系</h3>
                                <div class="item_xl_dl heg388">
                                  <dl>
                                    <dt>一汽 - 大众奥迪</dt>
                                    <dd>
                                      <a class="" href="javascript:;">奥迪100</a>
                                      <a href="javascript:;" class="active">奥迪A3</a>
                                      <a href="javascript:;">奥迪A4</a>
                                      <a href="javascript:;" class="">奥迪A4L</a>
                                    </dd>
                                  </dl>
                                </div>
                              </div><!--请选择车系结束-->
                              <div class="item_thr_div left Models" style="display: none;"><!--请选择车型开始-->
                                <h3>请选择车型</h3>
                                <div class="item_xl_dl wid256 heg388" style="display:block;">
                                  <dl>
                                    <dt>2015款</dt>
                                    <dd>
                                      <a class="" href="javascript:;">2015款 奥迪A3 Sportback 40 TFSI 自动舒适型</a>
                                      <a href="javascript:;" class="">2015款 奥迪A3 Sportback 40 TFSI 自动豪华型</a>
                                      <a href="javascript:;">2015款 奥迪A3 Sportback 40 TFSI 自动豪华型</a>
                                      <a href="javascript:;">2015款 奥迪A3 Sportback 40 TFSI 自动豪华型</a>
                                    </dd>
                                  </dl>
                                  <dl>
                                    <dt>2014款</dt>
                                    <dd>
                                      <a class="" href="javascript:;">2015款 奥迪A3 Sportback 40 TFSI 自动舒适型</a>
                                      <a href="javascript:;" class="active">2015款 奥迪A3 Sportback 40 TFSI 自动豪华型</a>
                                      <a href="javascript:;">2015款 奥迪A3 Sportback 40 TFSI 自动豪华型</a>
                                      <a href="javascript:;">2015款 奥迪A3 Sportback 40 TFSI 自动豪华型</a>
                                    </dd>
                                  </dl>
                                  <dl>
                                    <dt>2013款</dt>
                                    <dd>
                                      <a class="" href="javascript:;">2015款 奥迪A3 Sportback 40 TFSI 自动舒适型</a>
                                      <a href="javascript:;">2015款 奥迪A3 Sportback 40 TFSI 自动豪华型</a>
                                      <a href="javascript:;">2015款 奥迪A3 Sportback 40 TFSI 自动豪华型</a>
                                      <a href="javascript:;">2015款 奥迪A3 Sportback 40 TFSI 自动豪华型</a>
                                    </dd>
                                  </dl>
                                </div>
                              </div><!--请选择车型结束-->
                            </div>
                            <!--三联下拉结束-->
                          </div>
                        </li>
                        <li class="z-26">
                          <div class="item_li">
                            <span class="item_name">排量</span>
                            <div class="item_span">
                              <input class="item_inp wid120" type="text" value="请输入排量" />
                              <div class="item_sj_box">CC</div>
                            </div>
                          </div>
                        </li>
                        <li class="z-25">
                          <div class="item_li">
                            <span class="item_name">车辆所在地</span>
                            <CitySelect></CitySelect>
                          </div>
                        </li>
                        <li class="z-24">
                          <div class="item_li">
                            <span class="item_name">车辆类型</span>
                            <div class="item_span">
                              <a class="item_a" href="javascript:;">运营、非运营</a>
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
                                  <a href="javascript:;">运营 </a>
                                  <a href="javascript:;">非运营</a>
                                </dd>
                              </dl>
                            </div>
                            <!--下拉结束-->
                          </div>
                        </li>
                        <li class="z-23">
                          <div class="item_li">
                            <span class="item_name">排放标准</span>
                            <div class="item_span">
                              <a class="item_a" href="javascript:;">请选择排放标准</a>
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
                                  <a href="javascript:;">简体中文 </a>
                                  <a href="javascript:;">繁体中文</a>
                                  <a href="javascript:;">English</a>
                                </dd>
                              </dl>
                            </div>
                            <!--下拉结束-->
                          </div>
                        </li>
                        <li class="z-22">
                          <div class="item_li">
                            <span class="item_name">蓝本参考价</span>
                            <div class="item_span">
                              <input class="item_inp wid120" type="text" value="请输入蓝本参考价" />
                              <div class="item_sj_box">元</div>
                            </div>
                          </div>
                        </li>
                        <li class="z-21">
                          <div class="item_li">
                            <span class="item_name">车辆型号</span>
                            <div class="item_span">
                              <input class="item_inp" type="text" value="请填写车辆型号" />
                            </div>
                          </div>
                        </li>
                        <li class="z-20">
                          <div class="item_li">
                            <span class="item_name">车牌字头</span>
                            <CarCityFirst></CarCityFirst>
                          </div>
                        </li>
                        <li class="z-19">
                          <div class="item_li">
                            <span class="item_name">车身形式</span>
                            <div class="item_span">
                              <a class="item_a" href="javascript:;">请选择车身形式</a>
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
                                  <a href="javascript:;">简体中文 </a>
                                  <a href="javascript:;">繁体中文</a>
                                  <a href="javascript:;">English</a>
                                </dd>
                              </dl>
                            </div>
                            <!--下拉结束-->
                          </div>
                        </li>
                        <li class="z-18">
                          <div class="item_li">
                            <span class="item_name">登记年份</span>
                            <div class="item_span">
                              <a class="item_time" onClick="WdatePicker({autoShowQS:false,qsEnabled:false})" href="javascript:;">请选择登记日期</a>
                              <div class="item_sj_box">
                                <label class="item_lab_time"></label>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li class="z-17">
                          <div class="item_li">
                            <span class="item_name">油漆级别</span>
                            <div class="item_span">
                              <a class="item_a" href="javascript:;">请选择油漆级别</a>
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
                                  <a href="javascript:;">简体中文 </a>
                                  <a href="javascript:;">繁体中文</a>
                                  <a href="javascript:;">English</a>
                                </dd>
                              </dl>
                            </div>
                            <!--下拉结束-->
                          </div>
                        </li>
                        <li class="z-16">
                          <div class="item_li">
                            <span class="item_name">燃料</span>
                            <div class="item_span">
                              <a class="item_a" href="javascript:;">请选择燃料类型</a>
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
                                  <a href="javascript:;">简体中文 </a>
                                  <a href="javascript:;">繁体中文</a>
                                  <a href="javascript:;">English</a>
                                </dd>
                              </dl>
                            </div>
                            <!--下拉结束-->
                          </div>
                        </li>
                        <li class="z-15">
                          <div class="item_li">
                            <span class="item_name">档位形式</span>
                            <div class="item_span">
                              <a class="item_a" href="javascript:;">请选择档位形式</a>
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
                                  <a href="javascript:;">简体中文 </a>
                                  <a href="javascript:;">繁体中文</a>
                                  <a href="javascript:;">English</a>
                                </dd>
                              </dl>
                            </div>
                            <!--下拉结束-->
                          </div>
                        </li>
                        <li class="z-14">
                          <div class="item_li">
                            <span class="item_name">车辆颜色</span>
                            <div class="item_span">
                              <a class="item_a" href="javascript:;">请选择车辆颜色</a>
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
                                  <a href="javascript:;">简体中文 </a>
                                  <a href="javascript:;">繁体中文</a>
                                  <a href="javascript:;">English</a>
                                </dd>
                              </dl>
                            </div>
                            <!--下拉结束-->
                          </div>
                        </li>
                        <li class="z-13">
                          <div class="item_li">
                            <span class="item_name">缸数</span>
                            <div class="item_span">
                              <input class="item_inp wid120" type="text" value="请输入缸数" />
                              <div class="item_sj_box">位</div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <!--基本信息结束-->
                    <!--详细信息开始-->
                    <div class="zw_replace_count hide">
                      <ul class="item_ul clearfix replace_item_ul">
                        <li class="z-30">
                          <div class="item_li">
                            <span class="item_name">购入渠道</span>
                            <div class="item_span">
                              <a class="item_a" href="javascript:;">请选择购入渠道</a>
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
                                  <a href="javascript:;">请选择品牌车型</a>
                                  <a href="javascript:;">简体中文 </a>
                                  <a href="javascript:;">繁体中文</a>
                                  <a href="javascript:;">English</a>
                                </dd>
                              </dl>
                            </div>
                            <!--下拉结束-->
                          </div>
                        </li>
                        <li class="z-29">
                          <div class="item_li">
                            <span class="item_name">商业险期限</span>
                            <div class="item_span">
                              <a class="item_time" onClick="WdatePicker({autoShowQS:false,qsEnabled:false})" href="javascript:;">请选择日期</a>
                              <div class="item_sj_box">
                                <label class="item_lab_time"></label>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li class="z-28">
                          <div class="item_li">
                            <span class="item_name">商业险</span>
                            <BusinessRisks></BusinessRisks>
                          </div>
                        </li>

                        <li class="z-27">
                          <div class="item_li">
                            <span class="item_name">发动机号码</span>
                            <div class="item_span">
                              <input class="item_inp" type="text" value="请输入发动机号码" />
                            </div>
                          </div>
                        </li>
                        <li class="z-26">
                          <div class="item_li">
                            <span class="item_name">是否带牌销售</span>
                            <div class="item_span">
                              <a class="item_a" href="javascript:;">选择（是、否）</a>
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
                                  <a href="javascript:;">是 </a>
                                  <a href="javascript:;">否</a>
                                </dd>
                              </dl>
                            </div>
                            <!--下拉结束-->
                          </div>
                        </li>
                        <li class="z-25">
                          <div class="item_li">
                            <span class="item_name">车船税截止日期</span>
                            <div class="item_span">
                              <a class="item_time" onClick="WdatePicker({autoShowQS:false,qsEnabled:false})" href="javascript:;">请选择车船税截止日期</a>
                              <div class="item_sj_box">
                                <label class="item_lab_time"></label>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li class="z-24">
                          <div class="item_li">
                            <span class="item_name">交易方式</span>
                            <div class="item_span">
                              <a class="item_a" href="javascript:;">请选择交易方式</a>
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
                                  <a href="javascript:;">请选择品牌车型</a>
                                  <a href="javascript:;">简体中文 </a>
                                  <a href="javascript:;">繁体中文</a>
                                  <a href="javascript:;">English</a>
                                </dd>
                              </dl>
                            </div>
                            <!--下拉结束-->
                          </div>
                        </li>
                        <li class="z-23">
                          <div class="item_li">
                            <span class="item_name">仓储地点</span>
                            <div class="item_span">
                              <input class="item_inp" type="text" value="请输入仓储地点" />
                            </div>
                          </div>
                        </li>
                        <li class="z-22">
                          <div class="item_li">
                            <span class="item_name">年检截止日期</span>
                            <div class="item_span">
                              <a class="item_time" onClick="WdatePicker({autoShowQS:false,qsEnabled:false})" href="javascript:;">请选择年检截止日期</a>
                              <div class="item_sj_box">
                                <label class="item_lab_time"></label>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li class="z-21">
                          <div class="item_li">
                            <span class="item_name">是否正常保养</span>
                            <div class="item_span">
                              <a class="item_a" href="javascript:;">选择（是、否）</a>
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
                                  <a href="javascript:;">是 </a>
                                  <a href="javascript:;">否</a>
                                </dd>
                              </dl>
                            </div>
                            <!--下拉结束-->
                          </div>
                        </li>
                        <li class="z-20">
                          <div class="item_li">
                            <span class="item_name">发票号码</span>
                            <div class="item_span">
                              <input class="item_inp" type="text" value="请输入发票号码" />
                            </div>
                          </div>
                        </li>
                        <li class="z-19">
                          <div class="item_li">
                            <span class="item_name">收购日期</span>
                            <div class="item_span">
                              <a class="item_time" onClick="WdatePicker({autoShowQS:false,qsEnabled:false})" href="javascript:;">请选择收购日期</a>
                              <div class="item_sj_box">
                                <label class="item_lab_time"></label>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li class="z-18">
                          <div class="item_li">
                            <span class="item_name">交强险</span>
                            <div class="item_span">
                              <a class="item_a" href="javascript:;">选择（有、无）</a>
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
                                  <a href="javascript:;">有</a>
                                  <a href="javascript:;">无</a>
                                </dd>
                              </dl>
                            </div>
                            <!--下拉结束-->
                          </div>
                        </li>
                        <li class="z-17">
                          <div class="item_li">
                            <span class="item_name">开票金额</span>
                            <div class="item_span">
                              <input class="item_inp wid120" type="text" value="请输入开票金额" />
                              <div class="item_sj_box">元</div>
                            </div>
                          </div>
                        </li>
                        <li class="z-16">
                          <div class="item_li">
                            <span class="item_name">旧车销售方式</span>
                            <div class="item_span">
                              <a class="item_a" href="javascript:;">请选择旧车销售方式</a>
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
                                  <a href="javascript:;">请选择品牌车型</a>
                                  <a href="javascript:;">简体中文 </a>
                                  <a href="javascript:;">繁体中文</a>
                                  <a href="javascript:;">English</a>
                                </dd>
                              </dl>
                            </div>
                            <!--下拉结束-->
                          </div>
                        </li>
                        <li class="z-15">
                          <div class="item_li">
                            <span class="item_name">过户后车牌号码</span>
                            <div class="item_span">
                              <input class="item_inp" type="text" value="请输入过户后车牌号码" />
                            </div>
                          </div>
                        </li>
                        <li class="z-14">
                          <div class="item_li">
                            <span class="item_name">消息来源</span>
                            <div class="item_span">
                              <input class="item_inp" type="text" value="请输入消息来源" />
                            </div>
                          </div>
                        </li>
                        <li class="z-13">
                          <div class="item_li">
                            <span class="item_name">旧车销售渠道</span>
                            <div class="item_span">
                              <a class="item_a" href="javascript:;">请选择旧车销售渠道</a>
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
                                  <a href="javascript:;">请选择品牌车型</a>
                                  <a href="javascript:;">简体中文 </a>
                                  <a href="javascript:;">繁体中文</a>
                                  <a href="javascript:;">English</a>
                                </dd>
                              </dl>
                            </div>
                            <!--下拉结束-->
                          </div>
                        </li>
                        <li class="z-12">
                          <div class="item_li">
                            <span class="item_name">交强险期限</span>
                            <div class="item_span">
                              <a class="item_time" onClick="WdatePicker({autoShowQS:false,qsEnabled:false})" href="javascript:;">请选择日期</a>
                              <div class="item_sj_box">
                                <label class="item_lab_time"></label>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li class="z-11">
                          <div class="item_li">
                            <span class="item_name">原车牌号码</span>
                            <div class="item_span">
                              <input class="item_inp" type="text" value="请输入车牌号" />
                            </div>
                          </div>
                        </li>
                        <li class="z-10">
                          <div class="item_li">
                            <span class="item_name">开票日期</span>
                            <div class="item_span">
                              <a class="item_time" onClick="WdatePicker({autoShowQS:false,qsEnabled:false})" href="javascript:;">请选择日期</a>
                              <div class="item_sj_box">
                                <label class="item_lab_time"></label>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <!--详细信息结束-->
                    <!--价格信息开始-->
                    <div class="zw_replace_count hide">
                      <ul class="item_ul clearfix replace_item_ul">
                        <li class="z-30">
                          <div class="item_li">
                            <span class="item_name">预售价</span>
                            <div class="item_span">
                              <input class="item_inp" type="text" value="请输入预售价格" />
                            </div>
                          </div>
                        </li>
                        <li class="z-29">
                          <div class="item_li">
                            <span class="item_name">评估价</span>
                            <div class="item_span">
                              <input class="item_inp" type="text" value="请输入评估价格" />
                            </div>
                          </div>
                        </li>
                        <li class="z-28">
                          <div class="item_li">
                            <span class="item_name">评估人</span>
                            <div class="item_span">
                              <input class="item_inp" type="text" value="请输入评估人" />
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <!--价格信息结束-->
                    <!--客户信息开始-->
                    <div class="zw_replace_count hide">
                      <ul class="item_ul clearfix replace_item_ul">
                        <li class="z-30">
                          <div class="item_li">
                            <span class="item_name">姓名</span>
                            <div class="item_span">
                              <input class="item_inp" type="text" value="请输入车主姓名" />
                            </div>
                          </div>
                        </li>
                        <li class="z-29">
                          <div class="item_li">
                            <span class="item_name">电话</span>
                            <div class="item_span">
                              <input class="item_inp" type="text" value="请输入电话号码" />
                            </div>
                          </div>
                        </li>
                        <li class="z-28">
                          <div class="item_li">
                            <span class="item_name">证件号</span>
                            <div class="item_span">
                              <input class="item_inp" type="text" value="请输入证件号码" />
                            </div>
                          </div>
                        </li>
                        <li class="zw_address z-27">
                          <div class="item_li">
                            <span class="item_name">证件地址</span>
                            <div class="item_span tre_wid_heg">
                              <textarea class="item_tar item_inp">请输入地址</textarea>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <!--客户信息结束-->
                    <!--图片资料开始-->
                    <div class="zw_replace_count hide">
                      <ul class="zw_replace_img_list clearfix" id="old_car_img">
                        <li>
                          <a href="javascript:;">
                            <div class="zw_re_img_box bor_dashed hide">
                              <i class="zw_re_img_add"></i>
                            </div>
                            <div class="zw_re_img_box ">
                              <i class="zw_re_img_del"></i>
                              <img src="/static/images/cl_bg.jpg" alt="">
                            </div>
                          </a>
                          <span class="zw_re_img_txt">旧车发票</span>
                        </li>
                        <li>
                          <a href="javascript:;">
                            <div class="zw_re_img_box bor_dashed ">
                              <i class="zw_re_img_add"></i>
                            </div>
                            <div class="zw_re_img_box hide">
                              <i class="zw_re_img_del"></i>
                              <img src="/static/images/cl_bg.jpg" alt="">
                            </div>
                          </a>
                          <span class="zw_re_img_txt">旧车车主身份证明</span>
                        </li>

                        <li>
                          <a href="javascript:;">
                            <div class="zw_re_img_box bor_dashed ">
                              <i class="zw_re_img_add"></i>
                            </div>
                            <div class="zw_re_img_box hide">
                              <i class="zw_re_img_del"></i>
                              <img src="/static/images/cl_bg.jpg" alt="">
                            </div>
                          </a>
                          <span class="zw_re_img_txt">登记证第1页</span>
                        </li>
                        <li>
                          <a href="javascript:;">
                            <div class="zw_re_img_box bor_dashed ">
                              <i class="zw_re_img_add"></i>
                            </div>
                            <div class="zw_re_img_box hide">
                              <i class="zw_re_img_del"></i>
                              <img src="/static/images/cl_bg.jpg" alt="">
                            </div>
                          </a>
                          <span class="zw_re_img_txt">登记证第2页</span>
                        </li>
                        <li>
                          <a href="javascript:;">
                            <div class="zw_re_img_box bor_dashed ">
                              <i class="zw_re_img_add"></i>
                            </div>
                            <div class="zw_re_img_box hide">
                              <i class="zw_re_img_del"></i>
                              <img src="/static/images/cl_bg.jpg" alt="">
                            </div>
                          </a>
                          <span class="zw_re_img_txt">登记证第3页</span>
                        </li>
                        <li>
                          <a href="javascript:;">
                            <div class="zw_re_img_box bor_dashed ">
                              <i class="zw_re_img_add"></i>
                            </div>
                            <div class="zw_re_img_box hide">
                              <i class="zw_re_img_del"></i>
                              <img src="/static/images/cl_bg.jpg" alt="">
                            </div>
                          </a>
                          <span class="zw_re_img_txt">其他</span>
                        </li>
                      </ul>
                    </div>
                    <!--图片资料结束-->
                  </div>
                </div>
                <div class="zw_replace_wrap hide">
                  <ul class="zw_replace_title clearfix" id="new_car_tit">
                    <li class="active"><span>车辆信息</span></li>
                    <li><span>图片资料</span></li>
                  </ul>
                  <div class="zw_replace_body" id="new_car_body">
                    <!--车辆信息开始-->
                    <div class="zw_replace_count">
                      <ul class="item_ul clearfix replace_item_ul">
                        <li class="z-30">
                          <div class="item_li">
                            <span class="item_name">VIN码</span>
                            <div class="item_span">
                              <input class="item_inp" type="text" value="请输入VIN码" />
                            </div>
                          </div>
                        </li>
                        <li class="z-29">
                          <div class="item_li">
                            <span class="item_name">新车发票日期</span>
                            <div class="item_span">
                              <a class="item_time" onClick="WdatePicker({autoShowQS:false,qsEnabled:false})" href="javascript:;">选择日期</a>
                              <div class="item_sj_box">
                                <label class="item_lab_time"></label>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li class="z-28">
                          <div class="item_li">
                            <span class="item_name">机动车注册日期</span>
                            <div class="item_span">
                              <a class="item_time" onClick="WdatePicker({autoShowQS:false,qsEnabled:false})" href="javascript:;">选择日期</a>
                              <div class="item_sj_box">
                                <label class="item_lab_time"></label>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li class="z-27">
                          <div class="item_li">
                            <span class="item_name">车辆型号</span>
                            <div class="item_span">
                              <input class="item_inp" type="text" value="请输入车辆型号" />
                            </div>
                          </div>
                        </li>
                        <li class="z-26">
                          <div class="item_li">
                            <span class="item_name">新车发票号</span>
                            <div class="item_span">
                              <input class="item_inp" type="text" value="请输入新车发票号" />
                            </div>
                          </div>
                        </li>
                        <li class="z-25">
                          <div class="item_li">
                            <span class="item_name">机动车牌照号码</span>
                            <div class="item_span">
                              <input class="item_inp" type="text" value="输入7位机动车牌照号码" />
                            </div>
                          </div>
                        </li>
                        <li class="z-24">
                          <div class="item_li">
                            <span class="item_name">车辆品牌</span>
                            <div class="item_span">
                              <a class="item_a" href="javascript:;">请选择车辆品牌</a>
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
                                  <a href="javascript:;">简体中文 </a>
                                  <a href="javascript:;">繁体中文</a>
                                  <a href="javascript:;">English</a>
                                </dd>
                              </dl>
                            </div>
                            <!--下拉结束-->
                          </div>
                        </li>
                        <li class="z-23">
                          <div class="item_li">
                            <span class="item_name">车辆制造商</span>
                            <div class="item_span">
                              <input class="item_inp" type="text" value="北京现代" />
                            </div>
                          </div>
                        </li>
                        <li class="z-22">
                          <div class="item_li">
                            <span class="item_name">购车合同编号</span>
                            <div class="item_span">
                              <input class="item_inp" type="text" value="输入6-14购车合同编号" />
                            </div>
                          </div>
                        </li>
                        <li class="z-21">
                          <div class="item_li">
                            <span class="item_name">机动车登记编号</span>
                            <div class="item_span">
                              <input class="item_inp" type="text" value="请输入机动车登记编号" />
                            </div>
                          </div>
                        </li>
                        <li class="z-20">
                          <div class="item_li">
                            <span class="item_name">新车发票价</span>
                            <div class="item_span">
                              <input class="item_inp wid120" type="text" value="请输入新车发票价" />
                              <div class="item_sj_box">元</div>
                            </div>
                          </div>
                        </li>
                        <li class="z-19">
                          <div class="item_li">
                            <span class="item_name">新车发票代码</span>
                            <div class="item_span">
                              <input class="item_inp" type="text" value="输入6-14新车发票代码" />
                            </div>
                          </div>
                        </li>
                        <li class="z-18">
                          <div class="item_li">
                            <span class="item_name">行驶证注册日期</span>
                            <div class="item_span">
                              <a class="item_time" onClick="WdatePicker({autoShowQS:false,qsEnabled:false})" href="javascript:;">选择日期</a>
                              <div class="item_sj_box">
                                <label class="item_lab_time"></label>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li class="z-17">
                          <div class="item_li">
                            <span class="item_name">发动机编号</span>
                            <div class="item_span">
                              <input class="item_inp" type="text" value="请输入发动机编号码" />
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <!--车辆信息结束-->
                    <!--图片资料开始-->
                    <div class="zw_replace_count hide">
                      <ul class="zw_replace_img_list clearfix" id="new_car_img">
                        <li>
                          <a href="javascript:;">
                            <div class="zw_re_img_box bor_dashed hide">
                              <i class="zw_re_img_add"></i>
                            </div>
                            <div class="zw_re_img_box">
                              <i class="zw_re_img_del"></i>
                              <img src="/static/images/cl_bg.jpg" alt="">
                            </div>
                          </a>
                          <span class="zw_re_img_txt">新车发票</span>
                        </li>
                        <li>
                          <a href="javascript:;">
                            <div class="zw_re_img_box bor_dashed ">
                              <i class="zw_re_img_add"></i>
                            </div>
                            <div class="zw_re_img_box hide">
                              <i class="zw_re_img_del"></i>
                              <img src="/static/images/cl_bg.jpg" alt="">
                            </div>
                          </a>
                          <span class="zw_re_img_txt">新车车主身份证明</span>
                        </li>

                        <li>
                          <a href="javascript:;">
                            <div class="zw_re_img_box bor_dashed ">
                              <i class="zw_re_img_add"></i>
                            </div>
                            <div class="zw_re_img_box hide">
                              <i class="zw_re_img_del"></i>
                              <img src="/static/images/cl_bg.jpg" alt="">
                            </div>
                          </a>
                          <span class="zw_re_img_txt">新旧车车主关系证明1</span>
                        </li>
                        <li>
                          <a href="javascript:;">
                            <div class="zw_re_img_box bor_dashed ">
                              <i class="zw_re_img_add"></i>
                            </div>
                            <div class="zw_re_img_box hide">
                              <i class="zw_re_img_del"></i>
                              <img src="/static/images/cl_bg.jpg" alt="">
                            </div>
                          </a>
                          <span class="zw_re_img_txt">新旧车车主关系证明2</span>
                        </li>
                        <li>
                          <a href="javascript:;">
                            <div class="zw_re_img_box bor_dashed ">
                              <i class="zw_re_img_add"></i>
                            </div>
                            <div class="zw_re_img_box hide">
                              <i class="zw_re_img_del"></i>
                              <img src="/static/images/cl_bg.jpg" alt="">
                            </div>
                          </a>
                          <span class="zw_re_img_txt">新旧车车主关系证明3</span>
                        </li>
                      </ul>
                    </div>
                    <!--图片资料结束-->
                  </div>
                </div>
              </div>
            </div>

            <!--按钮开始-->
            <div class="mt30">
              <div class="zw_replace_btn clearfix">
                <div class="btn left">
                  <a href="javascript:;">保存</a>
                </div>
                <div class="btn btn_lv left ml20">
                  <a href="javascript:;">确认上报</a>
                </div>
                <div class="btn btn_gray left ml20">
                  <a href="javascript:;">取消</a>
                </div>
              </div>
            </div>
            <!--按钮结束-->
          </div>
          <!--主体内容结束-->

        </div>
        <!--内容结束-->
      </div>
      <!--右边的头部，面包屑和内容结束-->

      <ChangePwd v-show="pwdShow"></ChangePwd>
    </div>
</template>

<script>
  import LeftWrap from '../components/LeftWrap.vue'
  import CitySelect from '../components/CitySelect.vue'
  import CarCityFirst from '../components/CarCityFirst.vue'
  import ChangePwd from '../components/ChangePassword.vue'
  import BusinessRisks from '../components/BusinessRisks.vue'

  import {spanDown, dropDown} from '../until/until'
    export default {
      data(){
        return{
          pwdShow:false
        }
      },
      components:{
        LeftWrap,
        CitySelect,
        CarCityFirst,
        ChangePwd,
        BusinessRisks
      },
      mounted() {
        this.indexJs();
        this.xl();
      },
      methods: {
        indexJs() {
          tab('.zw_re_head','.zw_replace_box');
          tab('#old_car_tit','#old_car_body');
          tab('#new_car_tit','#new_car_body');
          $('#old_car_img').viewer();
          $('#new_car_img').viewer();
        },
        xl() {
          spanDown('.item_span','.item_xl');
          $('.item_xl_dl dd a').click(function (event) {
            event.stopPropagation();
            var item_a=$(this).parents('.item_xl').siblings('.item_span').children('.item_a');
            $(this).addClass('active').siblings().removeClass('active');
            item_a.text($(this).text());
            item_a.addClass('on');
            $(this).parents('.item_xl').slideUp();
          });
        },
        pwdIsShow(){
          if(!this.pwdShow){
            this.pwdShow=!this.pwdShow;
            console.log("re:"+this.pwdShow)
          }
        }

      }

    }
</script>

<style scoped>

</style>
