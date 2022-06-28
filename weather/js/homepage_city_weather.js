import {main} from "./init_dom.js"

let citys = main.children[0];
const data_url = 'https://byui-cit230.github.io/weather/data/towndata.json';

const setCityWeather = async()=>{
    const res_json = await fetch(data_url)
        .then(response=> response.json());
    const towns = res_json['towns'];
    let i = 0;
    towns.forEach(town => {
        let city = document.createElement('div');
        city.classList.add('city');
        let info = document.createElement('div');
        info.classList.add('info');

        let h2 = document.createElement('h2');
        h2.innerHTML = town.name;
        let motto_d = document.createElement('div');
        motto_d.classList.add('motto_d');
        let motto = document.createElement('p');
        motto.classList.add('motto');
        motto.innerHTML = town.motto;
        let year = document.createElement('p');
        year.innerHTML ='Year Founded : ' + town.yearFounded;
        let population = document.createElement('p');
        population.innerHTML ='Population : ' + town.currentPopulation;
        let rain = document.createElement('p');
        rain.innerHTML ='Annual Rain Fall : ' + town.averageRainfall;
        let image = document.createElement('img');
        image.src = 'images/townimage/' + town.photo;
        // image.setAttribute('src','images/townimage/' + town.photo);
        if(i % 2 == 1){
            city.classList.add('img-r');
        }
        motto_d.appendChild(motto);
        info.appendChild(h2);
        info.appendChild(motto_d);
        info.appendChild(year);
        info.appendChild(population);
        info.appendChild(rain);

        city.appendChild(info)
        city.appendChild(image);
        citys.appendChild(city);
        
        i = i + 1;
    });
    while (i % 3 != 0){
        let holder = document.createElement('div');
        holder.setAttribute('style', 'background-color:transparent;');
        holder.classList.add('city');
        citys.appendChild(holder);
        i++;
    }
    
}

export {setCityWeather}