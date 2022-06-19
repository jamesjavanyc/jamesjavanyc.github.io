import {banner} from './init_dom.js'
const setBanner = ()=>{
    var cur = new Date();
    if(cur.getDay() == 5){
        console.log(cur)
        banner.style.display="block";
    }
}

export {setBanner};