import {main, footer} from './init_dom.js'
let [information, form,thankyou] = main.children;


const showcurise = ()=>{
    if(form.children[0].children[form.children[0].children.length-2].children[0].checked){
        form.children[0].children[form.children[0].children.length-1].setAttribute('style','display:block;');
    }else{
        form.children[0].children[form.children[0].children.length-1].setAttribute('style','display:none;');
    }
}
form.children[0].children[form.children[0].children.length-1].setAttribute('style','display:none;');
form.children[0].children[form.children[0].children.length-2].addEventListener('change',showcurise );


let cur = 0;
const open_next = ()=>{
    console.log(1)
    main.children[cur].setAttribute('style','display:none;');
    cur ++;
    main.children[cur].setAttribute('style','display:block; ');
}
const confirm_condition = ()=>{
    if(information.children[2].children[0].checked) {
        open_next();
    }else{
        alert('Please select the checkbox!');
    }
}
const submit_form = (event)=>{
    event.preventDefault();
    open_next();
    footer.setAttribute('style', 'position:fixed; bottom:0;')
}


// console.log(
information.children[3].addEventListener('click',confirm_condition);
form.addEventListener('submit',submit_form);


export {}