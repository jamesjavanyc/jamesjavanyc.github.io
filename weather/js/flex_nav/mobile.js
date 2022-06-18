const mobileNavSwitch = ()=>{
    var mobile_nav_switch = {
        // init the object
        init:function(){
            this.body_init= ()=>{
                let body = document.getElementById("mobile_nav_switch");
                let nav = document.getElementById("nav_list");
                return [body, nav];
            };
            [this.body, this.nav_list] = this.body_init();
            this.body.style.display = 'grid';
            this.body.setAttribute('style','grid-template-columns:repeat(auto-fill,minmax(2rem, auto)');
            this.nav_list.style.display= 'none';
            Array.from(this.nav_list.children).forEach(function(item){
                item.setAttribute('style','margin: 1rem auto 0;');
            });
            document.getElementById('laptop_switch').setAttribute('style', 'display:none;');
            this.image= this.body.childNodes[1];
            this.title= this.body.childNodes[2];
            this.title = document.getElementById("mobile_nav_title");
            this.isOpen= false;
            this.add_event();
        },
        // add event on switch onclick
        add_event:function(){
            const open_menu = ()=>{
                if(this.isOpen){
                    this.title.innerText = 'Menu';
                    this.image.src='./images/menu-icon.png';
                    this.nav_list.style.display= 'none';
                    this.isOpen = !this.isOpen;
                }else{
                    this.title.innerText = 'Close';
                    this.image.src='./images/menu-close.png';
                    this.nav_list.style.display= 'flex';
                    this.nav_list.setAttribute('style','flex-direction:column;');
                    this.isOpen = !this.isOpen;
                }

            };
            this.body.addEventListener('click',open_menu);
        }
    }
    console.log('init mobile nav');
    mobile_nav_switch.init();
}

// import { nav_elements } from "./nav_elements.js";
// var nav = nav_elements.getInstance();

// const open_menu = ()=>{
//     if(!nav.mb_isOpen){
//         nav.mb_switch_title.innerText = 'Menu';
//         nav.mb_switch_icon.src='./images/menu-icon.png';
//         nav.mb_switch_title.style.display= 'inline-block';
//         nav.nav_list.style.display= 'none';
//         nav.mb_isOpen = !nav.mb_isOpen;
//     }else{
//         nav.mb_switch_title.innerText = 'Close';
//         nav.mb_switch_icon.src='./images/menu-close.png';
//         nav.nav_list.style.display= 'flex';
//         nav.nav_list.setAttribute('style','flex-direction:column;');
//         nav.mb_isOpen = !nav.mb_isOpen;
//     }
// }
// const add_listener = ()=>{
//     nav_elements.mb_switch.addEventListener('click',open_menu);
//     console.log('mb listener added');
// }

// const mobileNavSwitch =()=> {
//     nav.mb_isOpen = false;
//     open_menu();
// }

// const init = ()=>{
//     // init basic function
//     mobileNavSwitch();
//     add_listener();
//     mobileNavSwitch.instance = mobileNavSwitch;
// }

// mobileNavSwitch.getInstance = function(){
//     // console.log('get mobile nav switch');
//     return this.instance || (this.instance = mobileNavSwitch);

// }

// init();


export { mobileNavSwitch};