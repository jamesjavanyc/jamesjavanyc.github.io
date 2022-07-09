let body = document.getElementsByTagName('body')[0];
let banner = body.children[0];
let header = body.children[1];
let main = body.children[2];
// console.log(main)


let page_nav_id;
while(!(typeof(page_nav_id) == 'number')){
    try{
        page_nav_id = parseInt(getComputedStyle(header).getPropertyValue('--page-id').trim());
        // console.log('get ID');
    }catch(e){
        console.err(e)
    }
}

export {body,header, banner, main, page_nav_id};

