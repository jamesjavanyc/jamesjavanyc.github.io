import { setCurrentDate } from "./footer.js";
import {nav_exp, getNavOnChange} from "./flex_nav_test/flex_nav.js"

let initdata = new Array();
initdata.push(setCurrentDate);
initdata.push(nav_exp);


initdata.forEach(function (callback){
    callback();
});

// moniter on window size
window.onresize = function() { 
    var initer =  getNavOnChange();
    initer();
}
