// run when init
const setLastUpdate =() =>{
    let lastUpdate = document.getElementById('footer-last-update');
    let modifyDate= formatDateTime(new Date(document.lastModified));
    lastUpdate.innerText = 'Last Update : ' + modifyDate;
    console.log('last update modified!')
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
    return h+':'+minute+':'+second;   
}

export {setLastUpdate};
