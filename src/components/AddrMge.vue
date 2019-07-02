<template>
<div class="mge">
    <mt-header fixed title="收货地址管理">
        <router-link to="/" slot="left">
            <mt-button icon="back">返回</mt-button>
        </router-link>
        <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <mt-cell class="address_list" :title="ititle" :label="ilabel" is-link>
        <!-- <span>{{this.$route.params.consignee}}</span> -->
        <!-- <p class="user_infor"><span>{{newInfor.consignee}}</span><span>{{newInfor.phone}}</span></p>     
        <p class="address_infor"><span>{{newInfor.address}}{{newInfor.detailAdd}}</span></p> -->
        <p class="user_infor"><span>{{this.$route.query.consignee}}</span><span>{{this.$route.query.phone}}</span></p>     
        <p class="address_infor"><span>{{this.$route.query.address}}{{this.$route.query.detailAdd}}</span></p>
    </mt-cell>
    <mt-cell title="标题文字" is-link> 
        <span>这里是元素</span>
    </mt-cell>
    <mt-button type="primary" @click.native="handlerClick">点击</mt-button>
</div>
</template>
<script>
import {mapState,mapGetters,mapMutations} from 'vuex'
export default {
    name:'addrmge',
    data(){
        return{
            ititle:'',
            ilabel:''
        }
    },
    created(){        
        let addrArr = [];
        addrArr.push(this.$route.params.address);
        addrArr.push(this.$route.params.detailAdd);
        this.ititle = this.$route.params.consignee;
        this.ilabel = addrArr.join("");
    },
    computed:{
        ...mapState({
            newInfor:state => state.addrStatus.newInfor
        })
    },
    methods:{
    }
}
</script>
<style scoped>
.mge{
    padding-top:40px;
}
.address_list{
    min-height:70px;
}
.user_infor{
    color:#333;    
    line-height:30px;
}
.user_infor span{
    margin-right:20px;
}
.address_infor{
    color:#666;
    font-size:12px;
    line-height:20px;
}
</style>

