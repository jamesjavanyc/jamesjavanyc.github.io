import { laptopNavSwitch } from "./laptop.js";
import { mobileNavSwitch } from "./mobile.js"

function getNavOnChange(){
    let nav_exp;
    console.log(window.innerWidth)
    if (window.innerWidth <= 536){
        console.log(1)
        nav_exp = mobileNavSwitch.getInstance();
    }else{
        console.log(2)
        nav_exp = laptopNavSwitch.getInstance();
    }
    return nav_exp;
}

const nav_exp = ()=>{
    let initer =  getNavOnChange();
    initer();
};

export {nav_exp, getNavOnChange};