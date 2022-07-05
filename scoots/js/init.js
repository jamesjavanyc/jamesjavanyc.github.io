import {page_nav_id} from './init_dom.js'
import {nav_switch} from './header.js'
import {setLastUpdate} from './footer.js'
import {setWeatherData} from './set_weather_data.js'
import { fill_motor } from './fill_rentals.js';

let initdata = new Array();
initdata.push(nav_switch);
initdata.push(setLastUpdate);
if(page_nav_id == 1 ){
    initdata.push(setWeatherData);
}else if(page_nav_id == 2){
    initdata.push(fill_motor);
}else if(page_nav_id == 3){

}else if(page_nav_id == 4){

}


initdata.forEach(function async(callback){
    callback();
    // console.log(callback);
});

