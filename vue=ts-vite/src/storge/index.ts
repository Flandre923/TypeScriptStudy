import {createStore,Store} from 'vuex'
import {ComponentCustomProperties} from 'vue'
declare module '@vue/runtime-core'{
    interface State{
        count:number;
        list:string[];
        msg:string;
    }

    interface ComponentCustomProperties {
        $store:Store<State>
    }
}
const store = createStore({
    state(){
        return {
            count:1,
            list:["asda"],
            msg:"nihoa"
        }
    },
    mutations:{
        incCount(state:any){
            state.count++;
        },
        setCount(state:any,num:number){
            state.count = num;
        },
        setMsg(state:any,msg:string){
            state.msg = msg;
        }
    },
    getters:{
        reverseMsg(state:any):string{
                return state.msg.split("").reverse().join("");
        }
    },
    actions:{
        inCount(content):void{
            content.commit("incCount");
        },
        setMsg(content,msg:string):void{
            setTimeout(()=>{
                content.commit("setMsg",msg);
            },1000)
        }
    }
})

export default store