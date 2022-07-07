import {weather_id_dict} from './open_weather_id.js'
import {page_nav_id, main} from './init_dom.js'
import {setWindChill} from './windchill.js'

let area_id = weather_id_dict[page_nav_id];
let src_url = 'http://api.openweathermap.org/data/2.5/forecast?id='+ area_id+'&appid=f79199b4c26b59deed0f6f9aa899412e';

const getWeatherData = async()=>{
    let dataSet =await (await fetch(src_url)).json();
    // console.log("get data from api done!")
    // console.table(dataSet.list)
    dataSet = dataSet.list;
    // console.table(dataSet)
    return dataSet;
}

const setForecast = (dataSet)=>{
    let forecast_sum = main.children[2].children[1];
    let date = new Date();
    let cur = date.getDay() + 1;
    // two pointer
    let day = 0;
    let pre_date = dataSet[0].dt_txt.substring(0,10);
    // console.log(pre_date)
    for (let i = 1; i < dataSet.length; i++ ){
        if(dataSet[i].dt_txt.substring(0,10) != pre_date || (date.getDate()!= dataSet[0].dt_txt.substr(8,2) && day == 0)){
            //match date
            forecast_sum.children[day].children[0].children[0].innerText
                = getStrDay((cur + day)%7);
            forecast_sum.children[day].children[1].children[0].src
                = 'http://openweathermap.org/img/wn/'+ dataSet[i].weather[0].icon +'@2x.png';
            forecast_sum.children[day].children[1].children[1].innerText
                = (1.8 * (parseFloat(dataSet[i].main.temp) - 273) + 32).toFixed(2) + ' ℉';
            //update recorder
            pre_date = dataSet[i].dt_txt.substring(0,10);
            day++;
        }
    }
}
const setCurrentData = (dataSet)=>{
    // console.log('setting current data');
    let weather = main.children[1].children[1];
    //set temperature
    weather.children[1].children[2].innerText = (1.8 * (parseFloat(dataSet[0].main.temp) - 273) + 32).toFixed(2) + ' ℉';
    //set weather
    weather.children[2].children[2].innerText = dataSet[0].weather[0].description ;
    //set weather
    weather.children[4].children[2].innerText = dataSet[0].main.humidity + '%';
    //set windspeed
    weather.children[5].children[2].innerText = dataSet[0].wind.speed + ' mph';
    // console.log('setting current  data finish');
}

const setWeatherData = async()=>{
    let dataSet = await getWeatherData();
    setCurrentData(dataSet);
    setForecast(dataSet)
    setWindChill();
}

const getStrDay = (num)=>{
    switch(num){
        case 0 :  
        return "Sun";  
    case 1 :  
        return "Mon";  
    case 2 :  
        return "Tue";  
    case 3 :  
        return "Wed";    
    case 4 :  
        return "Thu";   
    case 5 :  
        return "Fri";   
    case 6 :  
        return "Sat";    
    }

}

setWeatherData()

export {setWeatherData}