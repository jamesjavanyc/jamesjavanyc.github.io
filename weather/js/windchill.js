import {main} from './init_dom.js'
import {page_nav_id} from './init_dom.js'

let weather;
if(page_nav_id == 2||page_nav_id == 3||page_nav_id == 4){
    // only preston need
    weather = main.children[1].children[1];
}
const setWindChill = ()=>{
    let windChill = calWindChill(getTemprature(), getSpeed());
    windChill != '0'? weather.children[3].children[2].innerText = Math.round(windChill) + ' ℉':weather.children[3].children[2].innerText = 'N/A';
}
const getTemprature = ()=>{
    let temp =  weather.children[1].children[2].innerText;
    temp = parseFloat(temp.substring(0, temp.length-1));
    // console.log(temp)
    return temp;
}
const getSpeed = ()=>{
    let speed =  weather.children[5].children[2].innerText;
    speed = parseFloat(speed.substring(0, speed.length-4));
    // console.log(speed)
    return speed;
}

function calWindChill(temp, speed){
    if(temp<50 && speed > 3){
        return 35.74 + 0.6215*temp - 35.75 * speed**0.16 + 0.4275*temp*speed**0.16;
    }else{
        return '0';
    }
}

export {setWindChill}