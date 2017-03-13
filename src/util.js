/**
 * Created by XD on 2017/3/13.
 */
export default {
    set(key,val,exp){
        let times = new Date().getTime()+exp;
        let data = {
            data:val,
            time:times
        }
        localStorage.setItem(key,JSON.stringify(data));
    },
    get(key){
        let dataString = JSON.parse(localStorage.getItem(key));
        if(dataString){
            let dataTime = dataString.time;
            if (dataTime > new Date().getTime()) {
                return dataString.data;
            }
        }

    }
};
