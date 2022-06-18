// singleton of nav bar object
const nav_elements_initer = ()=>{
    // init the object
    const nav_elements = {
        init: function() {
            this.instance = null,
            this.nav = document.getElementsByTagName('nav')[0];
            // console.log(this.nav)
            this.mb_switch = this.nav.children[0];
            // console.log(this.mb_switch)
            this.nav_list = this.nav.children[1];
            // console.log(this.nav_list)
            this.lp_switch = this.nav_list.children[this.nav_list.children.length-1];
            // console.log(this.lp_switch)
            if (window.innerWidth>1160){
                nav_elements.lp_switch.setAttribute('style', 'display:none;');
            }
            this.nav_list.children[parseInt(getComputedStyle(document.documentElement).getPropertyValue('--page-id').trim())-1].children[0].setAttribute('style','color:gray;');
            this.mb_switch_icon= this.mb_switch.childNodes[1];
            this.mb_switch_title= this.mb_switch.childNodes[2];
            this.mb_switch_title = this.mb_switch.children[this.mb_switch.children.length-1];
            this.mb_isOpen= true;
            this.lp_isOpen= true;
            return this;
        }, 
        getInstance:function(){
            if(!this.instance) {
                this.instance = nav_elements.init();
            }
            return this.instance;
        }
    }
    return nav_elements;
};
const nav_elements = nav_elements_initer();

export {nav_elements,nav_elements_initer};