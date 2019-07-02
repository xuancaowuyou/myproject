
const state={    
    newInfor:{
        consignee:'',
        phone:'',
        address:'',
        detailAdd:''
    },
    popupVisible:false,
    pickerObj:{
        prov:[],
        city:[],
        area:[]
    }
}
const getters={
    datalist(state){
        const slots = [
            {
            flex: 1,
            values: state.pickerObj.prov,
            className: 'slot1',
            textAlign: 'right'
            }, 
            {
            divider: true,
            content: '-',
            className: 'slot2'
            }, 
            {
            flex: 1,
            values:state.pickerObj.city,
            className: 'slot3',
            textAlign: 'center'
            },
            {
            divider: true,
            content: '-',
            className: 'slot4'
            }, 
            {
            flex: 1,
            values:state.pickerObj.area,
            className: 'slot5',
            textAlign: 'left'
            }
        ]
         return slots;
    }                     
}
const mutations = {    
    setConsignee(state,newconsignee){
        state.newInfor.consignee = newconsignee
    },
    setPhone(state,pp){
        state.newInfor.phone = pp
    },
    setAddress(state,pp){
        state.newInfor.address = pp
    },
    setDetailAdd(state,pp){
        state.newInfor.detailAdd = pp
    },
    setPopupVisible(state,pp){
        state.popupVisible =pp
    },    
    popupToggle(state){
        state.popupVisible = !state.popupVisible;
    },
    addrConfirm(state,curVal){
        state.popupVisible = false;
        state.newInfor.address = curVal.join('');
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