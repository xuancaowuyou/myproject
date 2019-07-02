<template>
     <div class="demo">
    <div>
      <input type="text" v-model="people">
      <button @click="addList">添加</button>
    </div>
    <ul>
      <li v-for="(item, index) in list" :key="index">
        <input type="checkbox" v-model="checkList" :value="item.name">{{item.name}}
      </li>
    </ul>
    <div>checkList:{{checkList}}</div>
  </div>
</template>
<script>
import { mapState,mapMutations } from 'vuex'
export default {
      computed:{
        ...mapState({
          people:state=>state.demo.people,
          list:state => state.demo.list
        }),
        checkList:{
          get(){
            return this.$store.state.demo.checkList;
          },
          set(zzz){
            this.$store.commit('setCheckList',zzz)
          }          
        },
        people:{
          get(){
            return this.$store.state.demo.people;
          },
          set(people){
            this.$store.commit('setPeople',people)
          }
        }
      },
      mounted(){
        console.log(this)
      },
      methods:{
        ...mapMutations(['addList']),
        // add(){
        //   this.$store.commit('addList')
        // }
      }
}
</script>
<style scoped>
.demo{
    padding:20px;
}
</style>
