// singleton of nav bar object
const nav_elements_initer = ()=>{
    // init the object
    const nav_elements = {
        init: function() {
            this.instance = null,
            this.mb_switch = document.getElementById("mobile_nav_switch");
            this.nav_list = document.getElementById("nav_list");
            this.lp_switch = document.getElementById('laptop_switch');
            // console.log(this.mb_switch);
            // console.log(this.nav_list);
            // console.log(this.lp_switch);
            if (window.outerWidth <= 33.5 * 16){
                Array.from(this.nav_list.children).forEach((item)=>{
                    item.setAttribute('style','margin: 1rem auto 0;');
                });
                nav_elements.nav_list.style.display= 'none';
                nav_elements.mb_switch.style.display = 'grid';
                nav_elements.mb_switch.setAttribute('style','grid-template-columns:repeat(auto-fill,minmax(2rem, auto)');
            }else{
                Array.from(this.nav_list.children).forEach(function(item){
                    item.setAttribute('style','margin: 0 auto ;');
                });
                if (window.innerWidth<1160){
                    nav_elements.lp_switch.setAttribute('style', 'display:inline-block;');
                    nav_elements.lp_switch.setAttribute('style', 'float:right;');
                    nav_elements.lp_switch.children[0].src='./images/right-open-menu.png';
                }else{
                    nav_elements.lp_switch.setAttribute('style', 'display:none;');
                }
            };
            
            document.getElementById('laptop_switch').setAttribute('style', 'display:none;');
            this.mb_switch_icon= this.mb_switch.childNodes[1];
            this.mb_switch_title= this.mb_switch.childNodes[2];
            this.mb_switch_title = document.getElementById("mobile_nav_title");
            this.mb_isOpen= true;
            this.lp_isOpen= true;
            // console.log('nav_elements init');
            return this;
        }, 
        getInstance:function(){
            if(!this.instance) {
                this.instance = nav_elements.init();
                // console.log('init instance')
            }
            return this.instance;
        }
    }
    return nav_elements;
};
const nav_elements = nav_elements_initer();

export {nav_elements,nav_elements_initer};