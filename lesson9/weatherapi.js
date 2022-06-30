const apiURL = 'http://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=f79199b4c26b59deed0f6f9aa899412e';

const load = async()=>{
    let jsObject = await fetch(apiURL).then((response) => response.json());
    jsObject = jsObject.list[0];
    console.log(jsObject);
    document.getElementById('current-temp').textContent = jsObject.main.temp;
    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
    const desc = jsObject.weather[0].description;
    document.getElementById('imagesrc').textContent = imagesrc;
    document.getElementById('icon').setAttribute('src', imagesrc);
    document.getElementById('icon').setAttribute('alt', desc);
}

load();