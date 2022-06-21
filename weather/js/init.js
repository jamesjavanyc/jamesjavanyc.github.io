import { setCurrentDate } from "./footer.js";
import {nav_exp, getNavOnChange} from "./flex_nav/flex_nav.js"
import {setBanner} from './header.js'
import {setWindChill} from './main.js'
import {page_nav_id} from './init_dom.js'
import {lazyloadImage} from './lazyload.js'


let initdata = new Array();
initdata.push(nav_exp);
if(page_nav_id == 2){
    initdata.push(setCurrentDate);
    initdata.push(setBanner);
    initdata.push(setWindChill);
}else if(page_nav_id == 6){
    initdata.push(lazyloadImage);
}


initdata.forEach(function (callback){
    callback();
});

// moniter on window size
window.onresize = function() { 
    var initer =  getNavOnChange();
    initer();
}

