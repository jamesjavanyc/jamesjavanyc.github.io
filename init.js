import { setLastUpdate } from "./footer.js";

let initdata = new Array();
initdata.push(setLastUpdate);

initdata.forEach(function (callback){
    callback();
});