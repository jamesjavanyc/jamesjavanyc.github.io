import { setCurrentDate } from "./footer.js";
import {nav_exp, getNavOnChange} from "./flex_nav/flex_nav.js"
import {setBanner} from './header.js'
// import {setWindChill} from './windchill.js'
import {page_nav_id} from './init_dom.js'
import {lazyloadImage} from './lazyload.js'
import {setCityWeather} from './homepage_city_weather.js'
// import {setWeatherData} from './set_weather_data.js'
import {setEvent} from './set_event.js'


let initdata = new Array();
initdata.push(nav_exp);
if(page_nav_id == 2 ||page_nav_id == 3||page_nav_id == 4 ){
    // console.log(2)
    initdata.push(setCurrentDate);
    initdata.push(setBanner);
    // initdata.push(setWeatherData);
    initdata.push(setEvent);
}else if(page_nav_id == 5){
    // console.log(5)
    initdata.push(setCurrentDate);
}else if(page_nav_id == 6){
    // console.log(6)
    initdata.push(lazyloadImage);
}else if(page_nav_id == 1){
    initdata.push(setCityWeather);
    // console.log(1)
}


initdata.forEach(async function (callback){
    try{
        await callback();
    }catch(e){
        console.error(e);
    }
    // console.log(callback);
});

// moniter on window size
window.onresize = async function() { 
    var initer =  getNavOnChange();
    initer();
}

