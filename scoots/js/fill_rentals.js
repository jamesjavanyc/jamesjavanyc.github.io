let motors = Array.from(document.getElementsByClassName('motor'));
const fill_motor = async()=>{
    let dataset = await fetch('https://jamesjavanyc.github.io/scoots/data/price.json');
    dataset = await dataset.json();
    console.table(dataset);
    let i = 0;
    motors.forEach(()=>{
        
    })
}

export {fill_motor}