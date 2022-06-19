import { nav_elements} from "./nav_elements.js";

var nav = nav_elements.getInstance();
var init_id = 0;

const open_menu = ()=>{
    if(nav.lp_isOpen){
        nav.lp_switch.children[0].src='./images/right-open-menu.png';
        nav.nav_list.setAttribute('style','flex-direction:row;');
        nav.lp_isOpen = !nav.lp_isOpen;
    }else{
        nav.lp_switch.children[0].src='./images/right-close-menu.png';
        nav.nav_list.setAttribute('style','flex-direction:column;');
        nav.lp_isOpen = !nav.lp_isOpen;
    }

};
const add_listener = ()=>{
    nav.lp_switch.addEventListener('click',open_menu);
    // console.log('lp listener added');
}

const laptopNavSwitch = ()=>{
    if (window.innerWidth<1096){
        nav.lp_switch.setAttribute('style', 'display:inline-block;');
    }else{
        nav.lp_switch.setAttribute('style', 'display:none;');
    }
    nav_elements.lp_isOpen = true;
    // to init the ui of the nav bar in html file, must run the open_menu first
    open_menu();
}
laptopNavSwitch.getInstance = function(){
    //lazy load
    if (init_id == 0 ){
        init();
        init_id =1;
    }
    return this.instance || (this.instance = laptopNavSwitch);

}

const init = () =>{
    // init basic function
    laptopNavSwitch();
    add_listener();
    laptopNavSwitch.instance = laptopNavSwitch;
}


export {laptopNavSwitch};