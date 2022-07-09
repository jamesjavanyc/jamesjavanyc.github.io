let body = document.getElementsByTagName('body')[0];
let banner = body.children[0];
let header = body.children[1];
let main = body.children[2];
// console.log(main)


let page_nav_id;

// while(!(page_nav_id in [1,2,3,4,5,6])){
//     try{
//         page_nav_id = parseInt(getComputedStyle(header).getPropertyValue('--page-id').trim());
//         // console.log('get ID');
//     }catch(e){
//         console.error(e)
//     }
// }

page_nav_id = header.children[header.children.length-1].getAttribute('data-id');
export {body,header, banner, main, page_nav_id};

