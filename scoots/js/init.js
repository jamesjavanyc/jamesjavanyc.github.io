import {page_nav_id} from './init_dom.js'
import {nav_switch} from './header.js'
import {setLastUpdate} from './footer.js'
import {setWeatherData} from './set_weather_data.js'

let initdata = new Array();
initdata.push(nav_switch);
if(page_nav_id == 1 ){
    initdata.push(setLastUpdate);
    initdata.push(setWeatherData);
}else if(page_nav_id == 5){

}else if(page_nav_id == 6){

}else if(page_nav_id == 1){

}


initdata.forEach(function (callback){
    callback();
    // console.log(callback);
});

