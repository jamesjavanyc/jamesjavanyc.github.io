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
        }
    }
    console.log('laptop nav init')
    laptop_nav_switch.init();
}


export {laptopNavSwitch};