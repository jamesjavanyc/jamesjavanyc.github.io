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
            // console.log('switch body:');
            // console.log(this.body);
            // console.log('switch nav:');
            // console.log(this.nav_list);
            this.image= this.body.childNodes[1];
            this.title= this.body.childNodes[2];
            this.title = document.getElementById("mobile_nav_title");
            // console.log(this.image);
            // console.log(this.title);
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
export { mobileNavSwitch};