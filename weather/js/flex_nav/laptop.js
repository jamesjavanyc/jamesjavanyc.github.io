const laptopNavSwitch = ()=>{
    var laptop_nav_switch = {
        init:function(){
            this.body_init= ()=>{
                let body = document.getElementById("mobile_nav_switch");
                let nav = document.getElementById("nav_list");
                return [body, nav];
            };
            [this.body, this.nav_list] = this.body_init();
            this.nav_list.style.display= 'flex';
            this.nav_list.setAttribute('style','flex-direction:row;');
            this.body.style.display = 'none';
            Array.from(this.nav_list.children).forEach(function(item){
                item.setAttribute('style','margin: 0 auto ;');
            });
            this.lp_switch = document.getElementById('laptop_switch');
            this.isOpen = false;
            if (window.innerWidth<1160){
                this.lp_switch.setAttribute('style', 'display:inline-block;');
                this.lp_switch.setAttribute('style', 'float:right;');
                this.lp_switch.children[0].src='./images/right-open-menu.png';
            }else{
                this.lp_switch.setAttribute('style', 'display:none;');
            }
            this.add_event();
        },
        add_event:function(){
            const open_menu = ()=>{
                if(this.isOpen){
                    this.lp_switch.children[0].src='./images/right-open-menu.png';
                    this.nav_list.style.display= 'flex';
                    this.nav_list.setAttribute('style','flex-direction:row;');
                    this.isOpen = !this.isOpen;
                }else{
                    this.lp_switch.children[0].src='./images/right-close-menu.png';
                    this.nav_list.style.display= 'flex';
                    this.nav_list.setAttribute('style','flex-direction:column;');
                    this.isOpen = !this.isOpen;
                }

            };
            this.lp_switch.addEventListener('click',open_menu);
        }
    }
    console.log('laptop nav init')
    laptop_nav_switch.init();
}
// import { nav_elements} from "./nav_elements.js";

// var nav = nav_elements.getInstance();

// const open_menu = ()=>{
//     if(nav.lp_isOpen){
//         nav.lp_switch.children[0].src='./images/right-open-menu.png';
//         nav.nav_list.style.display= 'flex';
//         nav.nav_list.setAttribute('style','flex-direction:row;');
//         nav.lp_isOpen = !nav.lp_isOpen;
//     }else{
//         nav.lp_switch.children[0].src='./images/right-close-menu.png';
//         nav.nav_list.style.display= 'flex';
//         nav.nav_list.setAttribute('style','flex-direction:column;');
//         nav.lp_isOpen = !nav.lp_isOpen;
//     }

// };
// const add_listener = ()=>{
//     nav.lp_switch.addEventListener('click',open_menu);
//     console.log('lp listener added');
// }

// const laptopNavSwitch = ()=>{
//     if (window.innerWidth<1160){
//         nav.lp_switch.setAttribute('style', 'display:inline-block;');
//         nav.lp_switch.setAttribute('style', 'float:right;');
//         nav.lp_switch.children[0].src='./images/right-open-menu.png';
//     }else{
//         nav.lp_switch.setAttribute('style', 'display:none;');
//     }
//     nav.nav_list.setAttribute('style', "height:1.5rem;")
//     nav_elements.lp_isOpen = true;
//     open_menu();
// }
// const init = () =>{
//     // init basic function
//     laptopNavSwitch();
//     add_listener();
//     laptopNavSwitch.instance = laptopNavSwitch;
// }

// laptopNavSwitch.getInstance = function(){
//     return this.instance || (this.instance = laptopNavSwitch);

// }

// init();


export {laptopNavSwitch};