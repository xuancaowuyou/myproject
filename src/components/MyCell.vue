<template>
    <div class="mycell">
         <mt-header fixed title="mint-ui案例">
            <router-link to="" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <mt-cell title="时间格式化">{{date|formatDate}}</mt-cell>
        <mt-cell @click.native='_Toast()'>Toast实例</mt-cell>
        <mt-cell @click.native='_Indicator()'>Indicator实例</mt-cell>
        <mt-cell @click.native='_MessageBox()'>MessageBox实例</mt-cell>
        <mt-cell @click.native='_Actionsheet()'>Actionsheet实例</mt-cell>
        <mt-cell title="新增地址" is-link  to="/address"></mt-cell>
        <!-- Actionsheet实例start -->
        <mt-actionsheet  
            :actions= "thisdata" 
            closeOnClickModal="true" 
            v-model="sheetVisible">  
        </mt-actionsheet>  
        <!-- Actionsheet实例end --> 
        <!-- 轮播图start -->
        <div id="lunbo">
            <mt-swipe :auto="3000" :show-indicators="true" @change="handleChange">
                <mt-swipe-item id="lb1">1</mt-swipe-item>
                <mt-swipe-item id="lb2">2</mt-swipe-item>
                <mt-swipe-item id="lb3">3</mt-swipe-item>
            </mt-swipe>
        </div>
        <!-- 轮播图end-->    
    </div>
</template>
<script>
import { Toast,Indicator,MessageBox,Actionsheet,Swipe,SwipeItem  } from 'mint-ui';
import { formatTimeToStr } from '@/assets/js/date.js';
export default { 
  data(){
    return{
      date:1557282259379,
      // 上拉Actionsheet实例start
      thisdata:[{
        name: '拍照',  
        method : this.getCamera// 调用methods中的函数
      },
      {
        name: '手机相册',  
        method : this.getLibrary// 调用methods中的函数
      }],
      sheetVisible: false,
      // 上拉Actionsheet实例end
    }
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
    _Toast:function(){
      Toast({
        message: '提示',
        position: 'middle',
        duration: 2000
      });
    }, 
    _Indicator:function(){
      Indicator.open({
      text: '加载中...',
      spinnerType: 'fading-circle'
    });
    setTimeout(function(){
      Indicator.close();
    },1500)
    },
 
    _MessageBox:function(){
      MessageBox.confirm('确定执行此操作?',{
        message: 'xxx,你确定？',
        title: '提示',
        confirmButtonText: '确定(可改)',
        cancelButtonText: '取消(可改)'
      }).then(action => {
            console.log('点击了确定');
      }).catch(err =>{
            console.log('点击了取消');
      });
    },
    _Actionsheet:function(){
      this.sheetVisible = true;  
    },
    getCamera:function(){
      console.log("点击的相机")
    },
    getLibrary:function(){
      console.log("点击的相机")
    },
    getout:function(){
      console.log("点击的取消")
    },
    handleChange:function(index){
      //console.log(index);
    }
  }
}
</script>
<style >
.mycell{
    padding-top:40px;
}
.mint-cell-title{
    text-align:left;
}
#lunbo{
  width: 100%;
  height: 200px;
  background:pink;
}
</style>