import {page_nav_id, main} from './init_dom.js'

const src_url = 'https://byui-cit230.github.io/weather/data/towndata.json';

const setEvent = async()=>{
    // console.log('start fetch event')
    let dataSet = await fetch(src_url);
    dataSet = await dataSet.json();
    console.log('fetched event')
    let towns = dataSet['towns'];
    // console.log(towns)
    let events = main.children[3].children[1];
    let town;
    switch (parseInt(page_nav_id)){
        case 2:
            town = 'Preston';
            break;
        case 3:
            town = 'Soda Springs';
            break;
        case 4:
            town = 'Fish Haven';
    }
    for(let i = 0; i < towns.length;i++){
        if(towns[i].name == town){
            towns[i].events.forEach((event)=>{
                let li = document.createElement('li');
                let p = document.createElement('p');
                li.appendChild(p);
                p.innerHTML = event;
                events.appendChild(li);
            })
        }
        
    }
}

export {setEvent}