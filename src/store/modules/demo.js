const state = {
    people: '',
    list: [
    { id: 1, name: '李斯' },
    { id: 2, name: '吕不韦' },
    { id: 3, name: '嬴政' }
    ],    
    newId: 3,
    checkList:[]
}
const getters = {

}
const mutations = {
    setPeople(state,people){
        state.people = people
    },
    setCheckList(state,people){
        state.checkList = people;
    },
    addList(state,people){
        //注意这里是unshift
        
        state.list.unshift({ id: ++state.newId, name: state.people })
        state.people = ''
    }
}
const actions = {

}
export default{
    state,
    getters,
    mutations,
    actions
}