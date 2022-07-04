let motors = Array.from(document.getElementsByClassName('motor'));
const fill_motor = async()=>{
    let dataset = await fetch('../data/price.json');
    dataset = await dataset.json();
    console.table(dataset)

}

export {fill_motor}