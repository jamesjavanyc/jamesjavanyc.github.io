import {footer} from './init_dom.js'
// run when init
const setLastUpdate = () =>{
    // console.log("setting footer")
    let lastUpdate = footer.children[0];
    let modifyDate= formatDateTime(new Date(document.lastModified));
    lastUpdate.innerText = 'Last Update : ' + modifyDate;
}
const formatDateTime = (date) => {
    var y = date.getFullYear(); 
    var m = date.getMonth() + 1;  
        m = m < 10 ? ('0' + m) : m;  
    var d = date.getDate();  
        d = d < 10 ? ('0' + d) : d;  
    var h = date.getHours();  
        h=h < 10 ? ('0' + h) : h;  
    var minute = date.getMinutes();  
        minute = minute < 10 ? ('0' + minute) : minute;  
    var second=date.getSeconds();  
        second=second < 10 ? ('0' + second) : second;  
    return m+'/'+d+"/"+y+ '\t'+h+':'+minute+':'+second;   
}

export {setLastUpdate};