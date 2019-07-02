<template>
    <div class="demo">
        <mt-header title="我的备忘">
            <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
            <mt-button slot="right">保存</mt-button>
        </mt-header>
        <mt-field label="标题"  v-model="iTitle"></mt-field>
        <mt-cell title="是否提醒" >
            <mt-switch v-model="iToggle"></mt-switch>
        </mt-cell>
        <mt-cell title="提醒时间"  v-show="iToggle"  @click.native="openTime">
            <span>{{dateTime|formatDate}}</span>
        </mt-cell>
        <mt-field placeholder="备忘记录" type="textarea" rows="4" v-model="introduction"></mt-field> 
        <demo></demo>      
        <mt-datetime-picker
            ref="picker"
            v-model="pickerVisible"
            type="datetime"
            year-format="{value} 年"
            month-format="{value} 月"
            date-format="{value} 日"
            hour-format='{value} 时'
            minute-format='{value} 分'
            @confirm="handleConfirm">
        </mt-datetime-picker>
    </div>
</template>
<script>
import demo from '@/components/demo.vue'
import { formatTimeToStr } from '@/assets/js/date.js'
export default {
    data(){
        return{
            iTitle:"",
            iToggle:false,
            introduction:'',
            pickerVisible:false,
            dateTime:''
        }
    },
    components:{
        demo
    },
    created(){
        this.dateTime = new Date();
    },
    filters:{
      formatDate: function(time) {
        if(time!=null&&time!="")
        {
          var date = new Date(time);
          return formatTimeToStr(date, "yyyy-MM-dd hh:mm:ss");
        }else{
          return "";
        }
      }
  },
    methods:{
        openTime(){
            this.$refs.picker.open();
            this.closeTouch()
        },
        handleConfirm(value){            
            this.dateTime = value;
            this.openTouch();
        },
        closeTouch:function(){
          document.getElementsByTagName("body")[0].addEventListener('touchmove',
            this.handler,{passive:false});//阻止默认事件
          console.log("closeTouch haved happened.");
        },
        openTouch:function(){
          document.getElementsByTagName("body")[0].removeEventListener('touchmove',
            this.handler,{passive:false});//打开默认事件
          console.log("openTouch haved happened.");
        }
    },
    watch:{
        signReasonVisible:function(newvs,oldvs){//picker关闭没有回调函数，所以侦听该属性替代
            if(newvs){
                this.closeTouch();
            }else{
                this.openTouch();
            }
        }
    }
}
</script>
