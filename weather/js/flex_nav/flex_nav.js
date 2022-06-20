import { laptopNavSwitch } from "./laptop.js";
import { mobileNavSwitch } from "./mobile.js"

function getNavOnChange(){
    let nav_exp;
    if (window.innerWidth <= 536){
        nav_exp = mobileNavSwitch.getInstance();
    }else{
        nav_exp = laptopNavSwitch.getInstance();
    }
    return nav_exp;
}

const nav_exp = ()=>{
    let initer =  getNavOnChange();
    initer();
};

export {nav_exp, getNavOnChange};