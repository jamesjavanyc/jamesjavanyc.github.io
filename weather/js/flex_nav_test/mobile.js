import { nav_elements } from "./nav_elements.js";
var nav = nav_elements.getInstance();

const open_menu = ()=>{
    if(!nav.mb_isOpen){
        nav.mb_switch_title.innerText = 'Menu';
        nav.mb_switch_icon.src='./images/menu-icon.png';
        nav.mb_switch_title.style.display= 'inline-block';
        nav.nav_list.style.display= 'none';
        nav.mb_isOpen = !nav.mb_isOpen;
    }else{
        nav.mb_switch_title.innerText = 'Close';
        nav.mb_switch_icon.src='./images/menu-close.png';
        nav.nav_list.style.display= 'flex';
        nav.nav_list.setAttribute('style','flex-direction:column;');
        nav.mb_isOpen = !nav.mb_isOpen;
    }
}
const add_listener = ()=>{
    nav_elements.mb_switch.addEventListener('click',open_menu);
    console.log('mb listener added');
}

const mobileNavSwitch =()=> {
    nav.mb_isOpen = false;
    open_menu();
}

const init = ()=>{
    // init basic function
    mobileNavSwitch();
    add_listener();
    mobileNavSwitch.instance = mobileNavSwitch;
}

mobileNavSwitch.getInstance = function(){
    // console.log('get mobile nav switch');
    return this.instance || (this.instance = mobileNavSwitch);

}

init();


export { mobileNavSwitch};