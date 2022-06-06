import { setLastUpdate } from "./footer.js";

let initdata = new Array();
initdata.push(setLastUpdate);

initdata.forEach(function (callback){
    callback();
});

console.log(document.body.clientWidth/16);