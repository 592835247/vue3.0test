<template>
  <div class="home_wrap" v-if="userDetail">
    <div class="home_header">
      <div
          v-if="userDetail.customer_source || userDetail.is_valid_bank"
          class="header_title">
        <p>总资产 (元)</p>
        <p>
          <span style="font-size: 16px; font-weight: normal">￥</span>
          {{total_assets}}
        </p>
      </div>

      <div v-if="!userDetail.customer_source && !userDetail.is_valid_bank"
           class="home_header_content">
        <div style="height: .74rem; text-align: center">
          <span style="display:inline-block;padding-bottom:.2rem">若您已是礼仁的签约客户，请点击下方的客户验证，</span><br/>完成验证后即可查询您的资产情况
        </div>
        <div class="home_header_btn">
          <span @click="goVerification">代销客户验证</span>
        </div>
      </div>

    </div>
    <div v-if="userDetail.customer_source || userDetail.is_valid_bank" style="height: 1.2rem;background: #f4f4f4;"> <!-- ******* --></div>
    <div v-if="!userDetail.customer_source && !userDetail.is_valid_risk" class="tip_bar" @click="goQuestionnaire">
      您还未进行风险等级评估，立即前往评估
      <i class="cubeic-arrow tip_arrow"></i>
    </div>

    <div v-if="userDetail.customer_source || userDetail.is_valid_bank" class="home_bar">
      <ul>
        <li @click="goHistorical" >
          <img style="width: .6rem;height: .6rem" src="/static/img/histor_icon.png">
          <span>历史记录</span>
        </li>
        <li @click="goMyapplication" v-if="userDetail.customer_source == 1 && userDetail.customer_type == 1">
          <img style="width: .6rem;height: .6rem" src="/static/img/application_icon.png">
          <span>我的申请</span>
        </li>
        <li @click="addFlollow">
          <img style="width: .6rem;height: .6rem" src="/static/img/follow_icon.png">
          <span>我的关注</span>
        </li>
      </ul>

    </div>

    <div class="home_title" v-if="userDetail.customer_source || userDetail.is_valid_bank">
      <span class="title_span">资产列表</span>
      <div style="display: flex; align-items: center; font-size: 14px; color: #999999;margin-right: 10px" v-if="userinfo.bank_card_new.length > 1">
        <cube-select
            v-model="bankId"
            :options="register_cert_type"
            placeholder="选择账户"
            @change="bankChange"
        >
        </cube-select>
        <van-icon name="arrow-down" style="margin-left: 4px;"></van-icon>
      </div>
      <!--        <div style=" font-size: 14px; color: #999999;margin-right: 10px" v-else>{{register_cert_type.length===1?register_cert_type[0].text:''}}</div>-->
      <div @click.stop="listTime()" style="display: flex; align-items: center; font-size: 14px; color: #999999">
        <span>{{list_date?list_date:'选择日期'}}</span>
        <van-icon name="arrow-down" style="margin-left: 4px;"></van-icon>
      </div>
    </div>

    <div v-if="!assetsList.length" style="height:1px;background:#e5e5e5"></div>

    <div class="home_assets_list" v-if="userDetail.customer_source || userDetail.is_valid_bank">
      <ul v-if="assetsList.length">
        <van-collapse
            v-model="productId"
            accordion @change="evaluationsChange">

          <van-collapse-item
              v-for="(item,index) in assetsList"
              :key="index + 'assets'"
              :name="item.product_id"
              :is-link="false">

            <li slot="title">
              <div class="product_title" @click.stop="goProductDetails(item)">
                <p style="color: #333333;">
                    <span style="display: inline-block; height: 100%;font-weight:500;">
                      {{item.product_name}}
                    </span>
                </p>
              </div>

              <div class="product_list" @click.stop="redemptionAdd(item)">
                <div class="product_item">
                  <p>
                    <span class="span_value">{{item.total_assets}}</span>
                    <span class="span_unit"> 资产总值 (元)</span>
                  </p>
                  <p>
                    <span class="span_value">{{item.latest_net_worth}}</span>
                    <span class="span_unit"> 最新净值 (元)</span>
                  </p>
                </div>

                <div class="product_item product_item2">
                  <p>
                    <span class="span_value">{{item.holding_share}}</span>
                    <span class="span_unit">持有份额 (份) </span>
                  </p>
                  <p>
                    <span class="span_value">{{item.latest_net_worth_date}}</span>
                    <span class="span_unit">净值日期</span>
                  </p>
                </div>

                <div style="position: absolute; top: 2.1rem; right: .3rem; height: 100%; display: flex;">
                  <i class="cubeic-arrow" style="color: #999999"></i>
                </div>
              </div>
            </li>
            <div slot="right-icon" name="add">
              <div class="bottom_icon">
                <div style="width:.52rem;height:.27rem">
                  <!-- <van-icon v-if="productId !== item.product_id" name="arrow-down"></van-icon>
                  <van-icon v-else name="arrow-up"></van-icon> -->
                  <img style="display: flex;width:100%" src="static/img/down.png" v-if="productId !== item.product_id" alt="">
                  <img style="display: flex;width:100%" src="static/img/up.png" v-else  alt="">

                </div>
              </div>
            </div>

            <ul v-if="evaluationsList.length" class="downProduct">
              <li
                  v-for="(self,sindex) in evaluationsList" :key="sindex + 'eval'">

                <div class="downName">
                  <p><span style="display: inline-block; height: 100%;">{{self.trade_date}}</span></p>
                </div>
                <div style="position: relative" class="downList">
                  <div class="product_down">
                    <p>
                      <span class="span_unit">市值 (元)</span>
                      <span class="span_value">{{self.amount}}</span>
                    </p>
                    <p>
                      <span class="span_unit" style="margin-right: 4px">当前净值 (元)</span>
                      <span class="span_value">{{self.trade_nav}}</span>
                    </p>
                    <p>
                      <span class="span_unit">份额 (份)</span>
                      <span class="span_value">{{self.shares}}</span>
                    </p>
                    <p>
                      <span class="span_unit" style="margin-right: 4px">净值日期</span>
                      <span class="span_value">{{self.valuation_date}}</span>
                    </p>
                  </div>
                  <div class="downBtn"  v-if="userDetail.customer_source == 1 && userDetail.customer_type == 1 && sindex == (evaluationsList.length-1) && evaluationsIsShow == 1">
                    <van-button size="mini" plain type="primary" @click="redpupSave('redeem',self)">赎回</van-button>
                    <van-button size="mini" plain type="primary" @click="redpupSave('append',self)">追加</van-button>
                  </div>
                </div>

              </li>
            </ul>

            <van-loading
                v-if="!hasRequestList && !evaluationsList.length"
                style="line-height: 80px; text-align: center" size="24px">加载中...
            </van-loading>

            <div
                v-if="hasRequestList && !evaluationsList.length"
                style="height: 100%; line-height: 80px; text-align: center;color: #999999;background:#fff;">暂无数据
            </div>

          </van-collapse-item>
        </van-collapse>

      </ul>

      <div
          v-else
          style="text-align: center;margin-top: 1rem;color: #999999;background:#fff;">暂无数据
      </div>

    </div>


    <!--<div class="home_recommend_list" v-if="!userDetail.customer_source || !userDetail.is_valid_bank">-->
    <!--  <ul>-->
    <!--    <li style="position: relative" v-for="(item,index) in recommendList" :key="index + 'recommend'" @click="goProductDetails(item)">-->
    <!--      <p>{{item.product_name}}</p>-->
    <!--      <p>{{item.product_type}}</p>-->
    <!--      <p class="righticon"> ></p>-->
    <!--    </li>-->
    <!--  </ul>-->
    <!--</div>-->
  </div>

</template>

<script>
import moment from 'moment'
import {mapState} from 'vuex'

export default {
  name: "HomePage",
  data() {
    return {
      assetsList: [],
      evaluationsList: [],
      total_assets: '',
      register_cert_type: [],
      bankId:'',

      productId: '',
      oldId: '',
      activeName: '1',
      list_date: '',
      startpicker: null,
      recommendList: [],
      userDetail: null,
      hasRequestList: false
    }
  },
  mounted() {

    if(window.main_list_date){
      this.list_date = window.main_list_date
    }
    this.getUserDetail()
    this.getAssetsList()
    this.getAssetsTotal()
    this.getBankCard()
    // this.getRecommendList()

    if(window.collapseSelected){
      this.productId = window.collapseSelected
    }
  },
  methods: {
    getBankCard(){
      let arr =  this.userinfo.bank_card_new.map(v=>{
        return  {text:v.bank_card_num,value:v.transaction_account_id}
      })
      this.register_cert_type = arr
      console.log(arr,'arrarr')

    },
    goVerification() {
      this.$router.push('/m_verification')
    },
    goQuestionnaire() {
      this.$router.push('/m_questionnaire')
    },
    goHistorical() {
      this.$router.push('/m_historicalrecord')
    },
    goMyapplication() {
      this.$router.push('/m_myapplication')

    },
    redpupSave(textType,self) {
      this.$router.push({path:'/m_updatetransaction',query:{textType,product_id:self.product_id}})
    },
    addFlollow() {
      this.$router.push('/m_myfollow')
    },
    gomUserinformation() {
      this.$router.push('/m_userinformation')
    },
    goProductDetails(item) {
      this.$router.push({path: '/m_productdetails', query: {product_id: item.product_id}})
    },
    getAssetsList(params) {
      this.$api.get_assets_list(params).then(data => {
        if (data.length) {
          this.assetsList = data
        } else {
          this.assetsList = []
        }
      })
    },
    evaluationsChange(value) {
      this.productId = value
      window.collapseSelected = value
    },
    getEvaluations() {
      this.hasRequestList = false
      let params = {
        product_id: this.productId,
        date: this.list_date,
        transaction_account_id:this.bankId != ''?this.bankId:''
      }
      this.$api.get_trade_evaluations(params, {global: false}).then(data => {
        if (data) {
          this.evaluationsList = data.list
          this.evaluationsIsShow = data.online_trans

        } else {
          this.evaluationsList = []
        }
        this.hasRequestList = true
      })


    },
    getRecommendList() {
      this.$api.get_recommend_list().then(data => {
        if (data.length) {
          this.recommendList = data
        }
      })
    },
    getAssetsTotal() {
      this.$api.get_total_assets().then(data => {
        this.total_assets = data.total_assets
      })

    },
    getUserDetail() {
      this.$api.user_detail().then(data => {
        this.$store.dispatch('get_user_info', {userinfo: data})
        this.userDetail = data
      })
    },
    listTime() {
      let that = this
      if(!that.startpicker){


        this.startpicker = this.$createDatePicker({
          title: '截止日期',
          columnCount: 3,
          min: new Date(1970, 1),
          max: new Date(),
          value: this.list_date ? new Date(this.list_date) : new Date(),
          format: {
            year: 'YYYY',
            month: 'MM',
          },
          onSelect: (v, c, d) => {
            this.list_date = moment(v).format('YYYY-MM-DD')
            window.main_list_date = this.list_date
          },
          onCancel: (v) => {

          }
        })
      }
      this.startpicker.show()
    },
    bankChange(){
      console.log(2222)
      let params = {
        date: this.list_date,
        transaction_account_id:this.bankId

      }
      this.getAssetsList(params)
    },

    clearDate(){
      this.list_date = ''
      window.main_list_date = ''
    },

    redemptionAdd(product_item) {
      this.$router.push({path: '/m_redemptionplus', query: {product_item: JSON.stringify(product_item),evaluationsIsShow:product_item.online_trans}})
    }
  },
  computed: {
    ...mapState(['userinfo'])
  },
  watch: {
    list_date() {
      let params = {
        date: this.list_date,
        transaction_account_id:this.bankId != ''?this.bankId:''
      }
      this.getAssetsList(params)
      if (this.productId != '') {
        this.getEvaluations()

      }
    },
    productId() {
      if (this.productId != '' && this.oldId != this.productId) {
        this.evaluationsList = []
        this.oldId = this.productId
        this.getEvaluations()

      }

    }
  }
}
</script>

<style lang="less" rel="stylesheet/less">
.home_wrap {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  position: relative;
  .home_header {
    background-size: 100%;
    width: 100%;
    height:3.6rem;
    background:linear-gradient(180deg,rgba(35,108,174,1) 0%,rgba(116,171,211,1) 100%);
    display: flex;
    justify-content: center;
    //align-items: center;
    color: #fff;
    font-size: 14px;
    .header_title{
      display: flex;width: 100%;flex-direction: column;
      text-align: center;
      height:3.6rem;
      p{
        &:nth-child(1){
          font-size: .3rem;
          opacity: .6;
          margin-top: .8rem;
          margin-bottom: .3rem;

        };
        &:nth-child(2){
          font-size: .6rem;
        };
      }
    }
    .home_header_content {
      margin-top: 1rem;;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;

      .home_header_btn {
        margin-bottom: .7rem;;
        span {
          border: 1px solid rgb(255, 255, 255);
          display: inline-block;
          height: .4rem;
          padding: 0 2px;
          border-radius: 3px;
          text-align: center;
          line-height: .4rem;
          margin: 0 8px;
        }
      }
    }

    .isrisk {
      width: 100%;
      padding-right: 2rem;
    }
  }

  .tip_bar {
    width: 100%;
    height: 60px;
    line-height: 60px;
    text-align: center;
    padding: 0 10px;
    box-sizing: border-box;
    font-size: 14px;
    position: relative;
    color: #0079FE;
    text-decoration-line: underline;

    .tip_arrow {
      color: #0079FE;
      // position: absolute;
      // height: 60px;
      // line-height: 60px;
      // right: 6px;
      // top: 0;
      // color: #409EFF;
    }
  }

  .home_bar {
    box-shadow:0rem 0.04rem 0.08rem 0rem rgba(51,51,51,0.2);

    height: 1.68rem;
    background: #fff;
    width: 6.9rem;
    border-radius: .08rem;
    position: absolute;
    top: 2.8rem;
    left: .29rem;
    ul {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 6.9rem;
      height: 100%;

      li {
        list-style: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        height: 1.4rem;

        span {
          font-size: 14px;
        }
      }
    }
  }

  .home_title {
    height: .94rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    padding:.3rem;
    box-sizing: border-box;
    margin: 0 auto;
    position: relative;
    .title_span{
      position: absolute;
      left: 10px;
      top: .32rem;
      color: #333333;
      font-size: .34rem;
    }
  }

  .home_assets_list {
    box-sizing: border-box;
    background: #f4f4f4;
    .van-collapse-item {
      padding-bottom: .2rem;
      &:last-child{
        padding-bottom: 0;
      }
    }
    .van-collapse-item__wrapper{
      background: #F8F8F8;
    }
    .bottom_icon {
      width: 100%;
      height: 36px;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      position: absolute !important;
      bottom: 0 !important;
      left: 50% !important;
      transform: translate(-50%, 0) !important;
      color: #999;
    }
    .van-cell {
      padding: 0 !important;
    }
    .van-hairline--top::after{
      z-index: 100;
    }
    .van-collapse-item__content {
      padding: 0;
      li:last-child {
        border-bottom: none !important;
      }
    }
    ul {
      li {
        width: 100%;
        box-sizing: border-box;
        font-size: 12px;
        padding:0 .3rem;
        .product_title {
          font-size: .32rem;
          padding: .4rem 0 .3rem 0;
        }
        .product_list{
          margin-bottom: .3rem;
          margin-right: .3rem;
          .product_item2{
            padding-bottom: .35rem;
          };
          .product_item {
            display: flex;
            justify-content: space-between;
            margin-bottom: .3rem;

            p{
              display: flex;
              flex-direction: column;
              width: 50%;
              .span_value{
                color:#333333;
                font-size:  0.3rem;
                font-weight: 500;
              }
              .span_unit{
                color: #999999;
                font-size: .28rem;
              }
              &:nth-child(2){
                width: 40%;
              };
            }
            .span_value {
              color: #555;
            }
          }
        }

      }
    }
  }


  .downProduct{
    background: #f8f8f8;
    li{
      border-bottom: 1px dashed #eee;
    }
    .downName{
      font-size: .32rem;
      padding: .3rem 0 .06rem 0;
      color: #333333;
    }
    .downList{
      //  padding-right: .3rem;
      .product_down{
        margin-bottom: .3rem;
        p{
          display: flex;
          justify-content: space-between;
          font-size: .3rem;
          //  padding-top: .24rem;
          padding-bottom: .14rem;
          //margin-bottom: .24rem;
          span{
            &:nth-child(1){
              color: #999;
            };
            &:nth-child(2){
              color: #333;
            };
          }
        }
      }
      .downBtn{
        display: flex;
        justify-content: space-between;
        margin: .3rem 0;
        .van-button{
          width:3.35rem;
          height:0.66rem;
          background:rgba(255,255,255,1);
          border-radius:0.04rem;
          border:0.01rem solid rgba(221,221,221,1);
          font-size: .28rem;
          &:nth-child(1){
            color: #F0A52D;
          };
          &:nth-child(2){
            color: #E80F37;
          };
        }
      }
    }
  }

  .home_recommend_list {
    overflow: auto;
    height: calc(100% - 5rem);

    ul {
      li {
        height: 90%;
        padding: 10px;
        background: #fff;
        .righticon {
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translate(0, -50%);
        }

        p {
          padding: 10px 0;
        }

        p:first-child {
          font-size: 18px;
        }
      }

      li:last-child {
        border-bottom: none;
      }


    }
  }
  .cube-select {
    padding: 10px 0;

    .cube-select-icon {
      display: none !important;
    }
  }
  .cube-select-placeholder{
    color: #999999!important;
  }
  .cube-select{
    padding-left: 0!important;
  }

  .cube-select::after {
    border: none !important;
  }
}

</style>
