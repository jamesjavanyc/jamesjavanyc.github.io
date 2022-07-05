import {header} from './init_dom.js'

let mobile_switch = header.children[1];

const nav_switch = ()=>{
    mobile_switch.addEventListener('click', click_menu);
}

const click_menu = ()=>{
    let nav = header.children[2];
    if(mobile_switch.getAttribute('data-open') == '0'){
        // open menu
        Array.from(nav.children[0].children).forEach((li)=>{
            li.setAttribute('style','display:block;');
        })
        mobile_switch.children[0].src = './source/menu-close.png'
        mobile_switch.setAttribute('data-open', '1');
    }else{
        // close menu
        Array.from(nav.children[0].children).forEach((li)=>{
            li.setAttribute('style','display:none;');
        })
        mobile_switch.children[0].src = './source/menu-icon.png'
        mobile_switch.setAttribute('data-open', '0');
    }
    // console.log('finish');
}

export {nav_switch}