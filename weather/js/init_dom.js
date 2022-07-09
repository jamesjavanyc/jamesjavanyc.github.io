let body = document.getElementsByTagName('body')[0];
let banner = body.children[0];
let header = body.children[1];
let main = body.children[2];
// console.log(main)


let page_nav_id;
console.log(Object.is(page_nav_id, NaN))
while(!(typeof(page_nav_id) == 'number')){
    page_nav_id = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--page-id').trim());
    console.log('get ID');
}
console.log(page_nav_id)

export {body,header, banner, main, page_nav_id};

