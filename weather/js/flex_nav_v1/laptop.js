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
            var i = 1;
            Array.from(this.nav_list.children).forEach(function(item){
                item.setAttribute('style','background-color:green;');
                if(i.toString()===getComputedStyle(document.documentElement).getPropertyValue('--id').trim()){
                    console.log('mark on nav');
                    item.setAttribute('style','background-color:green;');
                    item.children[0].setAttribute('style','color:gray;');
                }
                item.setAttribute('style','margin: 0 auto ;');
                i++;
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

export {laptopNavSwitch};