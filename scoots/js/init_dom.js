let body = document.getElementsByTagName('body')[0];
let header = body.children[0];
let main = body.children[1];
let footer = body.children[2];


let page_nav_id = parseInt(getComputedStyle(header).getPropertyValue('--page-id').trim());
// console.log(footer);
// console.log(page_nav_id);

export {body,header,  main, footer, page_nav_id};

