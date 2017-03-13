/**
 * Created by XD on 2017/3/13.
 */
export default {
    time: 0,
    set(key,val,exp){
        this.time=new Date().getTime()+exp;
        localStorage.setItem(key,JSON.stringify(val));
    },
    get(key){
        if(new Date().getTime()<this.time){
            return JSON.parse(localStorage.getItem(key));
        }
    }
};
