import {main} from './init_dom.js'

let src_url = 'http://api.openweathermap.org/data/2.5/forecast?id=3530103&appid=f79199b4c26b59deed0f6f9aa899412e';
let weathers = main.children[3];

const getWeatherData = async()=>{
    try{
        let dataSet =await (await fetch(src_url)).json();
    }catch(error){
        throw error;
    }
    dataSet = dataSet.list;
    return dataSet;
}

const setForecast = (dataSet)=>{
    let forecast_sum = weathers.children[2].children[1];
    // console.log(forecast_sum)
    let cur = new Date().getDay() + 1;
    let day = 0;
    let pre_date = dataSet[0].dt_txt.substring(0,10);
    for (let i = 1; i < dataSet.length; i++ ){
        if(dataSet[i].dt_txt.substring(0,10) != pre_date){
            forecast_sum.children[day].children[0].children[0].innerText
                = getStrDay((cur + day)%7);
            forecast_sum.children[day].children[1].children[0].src
                = 'http://openweathermap.org/img/wn/'+ dataSet[i].weather[0].icon +'@2x.png';
            forecast_sum.children[day].children[1].children[1].innerText
                = (1.8 * (parseFloat(dataSet[i].main.temp) - 273) + 32).toFixed(2) + ' ℉';
            pre_date = dataSet[i].dt_txt.substring(0,10);
            day++;
        }
    }
}
const setCurrentData = (dataSet)=>{
    // console.log('setting current data');
    let weather =weathers.children[1].children[0];
    // console.log(weather)
    //set temperature
    weather.children[0].children[2].innerText = (1.8 * (parseFloat(dataSet[0].main.temp) - 273) + 32).toFixed(2) + ' ℉';
    //set weather
    weather.children[1].children[2].innerText = dataSet[0].weather[0].description ;
    //set weather
    weather.children[3].children[2].innerText = dataSet[0].main.humidity + '%';
    //set windspeed
    weather.children[4].children[2].innerText = dataSet[0].wind.speed + ' mph';
    // console.log('setting current  data finish');
    let temp = (1.8 * (parseFloat(dataSet[0].main.temp) - 273) + 32).toFixed(2);
    let speed = dataSet[0].wind.speed;
    let windchill;
    if(temp<50 && speed > 3){
        windchill = 35.74 + 0.6215*temp - 35.75 * speed**0.16 + 0.4275*temp*speed**0.16;
    }else{
        windchill = '0';
    }
    weather.children[2].children[2].innerText = windchill != '0'? weather.children[2].children[2].innerText = Math.round(windchill) + ' ℉':weather.children[2].children[2].innerText = 'N/A';
}

const setWeatherData = async()=>{
    try{
        let dataSet = await getWeatherData();
    }catch(error){
        console.error(error);
    }
    setCurrentData(dataSet);
    setForecast(dataSet);
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

export {setWeatherData}