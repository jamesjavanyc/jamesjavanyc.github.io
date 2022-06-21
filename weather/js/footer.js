import {page_nav_id} from './init_dom.js'

// run when init
const setCurrentDate =() =>{
    console.log()
    if(page_nav_id == 2){
        let cur_dt_div = document.getElementById('current-datetime');
        var cur_dt = formatDateTime(new Date());
        cur_dt_div.innerHTML = cur_dt;
        // console.log(cur_dt);
        // console.log('Date init success');
    }

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
    var weekday = '';
    switch(date.getDay()){
        case 0 :  
        weekday += "Sunday";  
        break;  
    case 1 :  
        weekday += "Monday";  
        break;  
    case 2 :  
        weekday += "Tuesday";  
        break;  
    case 3 :  
        weekday += "Wednesday";  
        break;  
    case 4 :  
        weekday += "Thursday";  
        break;  
    case 5 :  
        weekday += "Friday";  
        break;  
    case 6 :  
        weekday += "Saturday";  
        break;  
    }
    return weekday + '\t' + m+'/'+d+"/"+y;   
}

export {setCurrentDate};
