<template>
    <div class="address">
        <mt-header fixed title="新建收货地址">
            <router-link to="/mycell" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <mt-field label="收货人" placeholder="请填写收货人姓名" v-model="consignee"></mt-field>
        <mt-field label="手机号码" placeholder="请填写收货人手机号" type="tel" v-model="phone" ></mt-field>
        <mt-field label="所在地址" placeholder="省市区县、乡镇等" v-model="address" @click.native="popupToggle"></mt-field>
        <mt-field label="详细地址" placeholder="街道、楼牌号等" type="textarea" rows="2"  v-model="detailAdd"></mt-field>
        <mt-button type="danger" size="small" @click.native="saveAddrInfo({consignee,phone,detailAdd})">保存</mt-button>
        <!-- popup和picker结合使用     -->
        <mt-popup   v-model="popupVisible" popup-transition="popup-fade" position="bottom" closeOnClickModal="true" >
            <div class="picker-toolbar-title">
                  <div class="usi-btn-cancel" @click="popupToggle">取消</div>
                  <div class="">onValuesChange请选择地址</div>
                  <div class="usi-btn-sure" @click="addrConfirm(pickerValues)">确定</div>
             </div>
            <mt-picker  :slots="datalist"  @change="onValuesChange"></mt-picker>
        </mt-popup>           
    </div>
</template>
<script>
import allCity from '@/assets/js/city' //省市区联动数据
import {mapState,mapGetters,mapMutations} from 'vuex'

    export default {
        data(){
            return {
            }
        },
        computed:{
            ...mapState({
                // consignee:state => state.addrStatus.consignee,
                // phone:state => state.addrStatus.phone,
                // address:state => state.addrStatus.address,
                // detailAdd:state => state.addrStatus.detailAdd,
                popupVisible:state => state.addrStatus.popupVisible,
                pickerObj:state => state.addrStatus.pickerObj,
                newInfor:state => state.addrStatus.newInfor      
            }),
            ...mapGetters(['datalist']),
            consignee:{
                get(){
                    return this.$store.state.addrStatus.newInfor.consignee
                },
                set(ppp){
                    this.$store.commit('setConsignee',ppp)
                }
            },
            phone:{
                get(){
                    return this.$store.state.addrStatus.newInfor.phone
                },
                set(ppp){
                    this.$store.commit('setPhone',ppp)
                }
            },
            address:{
                get(){
                    return this.$store.state.addrStatus.newInfor.address
                },
                set(ppp){
                    this.$store.commit('setAddress',ppp)
                }
            },
            detailAdd:{
                get(){
                    return this.$store.state.addrStatus.newInfor.detailAdd
                },
                set(ppp){
                    this.$store.commit('setDetailAdd',ppp)
                }
            },
            popupVisible:{
                get(){
                    return this.$store.state.addrStatus.popupVisible
                },
                set(ppp){
                    this.$store.commit('setPopupVisible',ppp)
                }
            }           
         },
        created(){
            let _this = this;           
            allCity.forEach(function(val,index){    
               _this.pickerObj.prov.push( val.label );
            });
            allCity[0].children.forEach(function(item,id){
                _this.pickerObj.city.push( item.label );                
            })
            allCity[0].children[0].children.forEach(function(item,id){
                _this.pickerObj.area.push( item.label )
            });
        },
        methods: {
            ...mapMutations(['popupToggle','addrConfirm']),
            onValuesChange(picker, values) {               
                let _this = this;
                allCity.forEach(function(val,index){
                    //values[0]是第一个省当前选择的值
                    if(val.label == values[0]){ 
                        //当前省对应的城市
                        let icity = val.children.map(function(item,index){
                            return item.label
                        })
                        picker.setSlotValues(1,icity);  //设定给定slot备选数组的值                        
                        //当前城市对应的区
                        allCity[index].children.forEach(function(item,id){    
                            if(item.label == values[1]){
                                let iregion = item.children.map(function(ele,index){
                                    return ele.label
                                });
                                picker.setSlotValues(2,iregion); //设定给定slot备选数组的值
                            } 
                        });
                    }
                });
                this.pickerValues = values;
            },            
            saveAddrInfo(obj){
                this.$router.push({
                    path:'/addrmge',
                    query:{
                        consignee:this.consignee,
                        phone:this.phone,
                        address:this.address,
                        detailAdd:this.detailAdd
                    }
                });  //  
            //    this.$store.commit('setConsignee', obj.consignee);
            //    this.$store.commit('setPhone', obj.phone);
            //    this.$store.commit('setDetailAdd', obj.detailAdd);               
            }
        }
  };
</script>
<style scoped>
.address{
    padding-top:40px;
}
.mint-popup{
    width:100%;
}
.picker-toolbar-title{
    display:flex;
    flex-direction:row;
    justify-content: space-around;
    height:40px;
    line-height:40px;
    font-size:16px;
    background:#f5f5f5;
}
.usi-btn-cancel,.usi-btn-sure{
    color:#ff6600;
}
.mint-button--small{
    display:block;
    margin:0 auto;
}
</style>