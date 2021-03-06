import {header, page_nav_id} from '../init_dom.js'
// singleton of nav bar object
const nav_elements_initer = ()=>{
    // init the object
    const nav_elements = {
        init: function() {
            this.instance = null,
            this.nav = header.children[1];
            // console.log(this.nav)
            this.mb_switch = header.children[0].children[2];
            // console.log(this.mb_switch)
            this.nav_list = this.nav.children[0];
            // console.log(this.nav_list)
            this.lp_switch = this.nav_list.children[this.nav_list.children.length-1];
            // console.log(this.lp_switch)
            // if (window.innerWidth>1160){
            //     nav_elements.lp_switch.children[0].setAttribute('style', 'display:none;');
            // }
            // console.log(page_nav_id)
            // console.log(this.nav_list.children[page_nav_id-1].children[0])
            try{
                if (typeof(page_nav_id)=='number' && !Object.is(page_nav_id,NaN)){
                    // console.log(Object.is(page_nav_id,NaN))
                    this.nav_list.children[page_nav_id-1].children[0].setAttribute('style','color:yellow;');
                }
            }catch(e){
                console.error("undefined child")
            }
            this.mb_switch_icon= this.mb_switch.childNodes[1];
            // console.log(this.mb_switch)
            this.mb_switch_title= this.mb_switch.childNodes[2];
            this.mb_switch_title = this.mb_switch.children[this.mb_switch.children.length-1];
            this.mb_isOpen= false;
            this.lp_isOpen= true;
            return this;
        }, 
        getInstance:function(){
            if(!this.instance) {
                this.instance = this.init();
            }
            return this.instance;
        }
    }
    return nav_elements;
};
const nav_elements = nav_elements_initer();

export {nav_elements,nav_elements_initer};