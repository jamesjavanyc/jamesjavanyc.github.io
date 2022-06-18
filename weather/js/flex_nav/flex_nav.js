import { laptopNavSwitch } from "./laptop.js";
import { mobileNavSwitch } from "./mobile.js"

function getNavOnChange(){
    let nav_exp;
    if (window.outerWidth <= 33.5 * 16){
        nav_exp = mobileNavSwitch;
    }else{
        nav_exp = laptopNavSwitch;
    }
    return nav_exp;
}

const nav_exp = ()=>{
    let initer =  getNavOnChange();
    initer();
};

export {nav_exp, getNavOnChange};