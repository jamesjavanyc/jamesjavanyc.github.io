let motors = Array.from(document.getElementsByClassName('motor'));
const fill_motor = async()=>{
    try{
        let datasetPromise = fetch('https://jamesjavanyc.github.io/scoots/data/price.json');
        let dataset = await datasetPromise;
        dataset = await dataset.json();
        let i = 0;
        motors.forEach((motor)=>{
            motor.children[0].innerText = dataset[i].name;
            motor.children[1].children[0].src ='./source/mt'+ (i+1)+'.jpg';
            let ul = motor.children[1].children[1];
            ul.children[0].children[1].children[0].innerHTML = dataset[i].max;
            ul.children[2].children[1].children[0].innerHTML = dataset[i].rhalf;
            ul.children[3].children[1].children[0].innerHTML = dataset[i].rfull;
            ul.children[5].children[1].children[0].innerHTML = dataset[i].whalf;
            ul.children[6].children[1].children[0].innerHTML = dataset[i].wfull;
            i++;
            console.log(i +" src dynamic band done")
        })
    }catch(error){
        console.err(error);
    }
}

export {fill_motor}