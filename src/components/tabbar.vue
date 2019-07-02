<template>
    <div class="loadmore_wrap">
        <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" 
        :max-distance="100"  @top-status-change="handleTopChange" @bottom-status-change='handleBottomChange' ref="loadmore">

                <div slot="top" class="mint-loadmore-top">
                    <!-- <span v-show="topStatus ==='pull'">下拉刷新</span> -->
                    <span v-show="topStatus != 'loading'" :class="{ 'rotate': topStatus !='loading' }">↓</span>
                    <span v-show="topStatus === 'loading'">
                        <mt-spinner type="fading-circle"></mt-spinner>
                    </span>
                </div>
                <div slot="bottom" class="mint-loadmore-bottom">
                    <!-- <span v-show="bottomStatus==='pull'">释放更多</span> -->
                    <span v-show="bottomStatus !='loading'" :class="{ 'rotate': bottomStatus !='loading' }">↑</span>
                    <span v-show="bottomStatus === 'loading'">
                        <mt-spinner type="fading-circle"></mt-spinner>
                    </span>
                </div>
                <ul class="scroll-wrapper">
                    <li v-for="(item,index) in list" :key="index" @click="itemClick(item)">{{ item }}</li>
                </ul>
            </mt-loadmore>
    </div>
</template>
<script>
export default{
    data(){
        return{
            list: [],
            allLoaded: false,
            topStatus: '',
            bottomStatus:''
        }            
    },
    created() {
        for (let i=1; i<= 20; i++){
            this.list.push( i);
        }
    },
    methods: {
        loadTop() {  // 刷新数据的操作
            var self = this;
            let firstValue = this.list[0];
            setTimeout(function () {   //self.list.splice(0, self.list.length);                
                for (let i=1; i<= 10; i++){
                    self.list.unshift(firstValue - i);
                }
                self.$refs.loadmore.onTopLoaded();
            }, 2000);
        },
        loadBottom() { // 加载更多数据的操作
            //load data
            //this.allLoaded = true;// 若数据已全部获取完毕
            var self = this;
            let lastValue = this.list[this.list.length-1];
            setTimeout(function () {
                for (let i=1; i<= 10; i++){
                    self.list.push( lastValue+ i);
                }
                self.$refs.loadmore.onBottomLoaded();
            }, 2000);

        },
        handleTopChange(status) {
            this.topStatus = status;
            console.log(status)
        },
        handleBottomChange(status){
            this.bottomStatus = status
            console.log(status)
        },
        itemClick: function (data) {
            console.log('item click, msg : ' + data);
        }
    }

}
</script>
<style>
*{
    margin: 0;
    padding: 0;
}
html, body{
    height: 100%;
    touch-action: none;
}
#app{
    height: 100%;
    overflow: scroll;
}
.scroll-wrapper{
    margin: 0;
    padding: 0;
    list-style: none;

}
.loadmore_wrap{
    text-align:center;
}
.scroll-wrapper li{
    line-height: 50px;
    font-size: 20px;
    text-align: center;
    border-bottom:1px solid #eee;
}
.scroll-wrapper li:first-child{
    border-top:1px solid #eee;
}
.mint-loadmore-top span,.mint-loadmore-bottom span{
    display:inline-block;
    -webkit-transition: 2s ease-in-out;
    transition: 2s ease-in-out;
    vertical-align: middle;
}
.mint-loadmore-top span.rotate {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg); 
}
.mint-loadmore-bottom span.rotate{
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg); 
}
</style>
