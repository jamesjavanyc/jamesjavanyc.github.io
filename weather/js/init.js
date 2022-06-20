import { setCurrentDate } from "./footer.js";
import {nav_exp, getNavOnChange} from "./flex_nav/flex_nav.js"
import {setBanner} from './header.js'
import {setWindChill} from './main.js'

let initdata = new Array();
initdata.push(setCurrentDate);
initdata.push(nav_exp);
initdata.push(setBanner);
initdata.push(setWindChill);


initdata.forEach(function (callback){
    callback();
});

// moniter on window size
window.onresize = function() { 
    var initer =  getNavOnChange();
    initer();
}
