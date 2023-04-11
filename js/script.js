
let tarifLightBefore,
    tarifLightAfter,
    tarifGas;

let card = document.querySelector('#card');

let inputLightBefore = document.querySelector('#item-input-before');
let inputLightAfter = document.querySelector('#item-input-after');
let inputLightDayBegin = document.querySelector('#day-light-begin');
let inputLightDayEnd = document.querySelector('#day-light-end');
let inputLightNightBegin = document.querySelector('#night-light-begin');
let inputLightNightEnd = document.querySelector('#night-light-end');


let inputGas = document.querySelector('#item-input-gas');
let inputGasBegin = document.querySelector('#input-gas-begin');
let inputGasEnd = document.querySelector('#input-gas-end');
let inputGasAbonent = document.querySelector('#input-gas-abonent');

let inputWater = document.querySelector('#item-input-water');
let inputWaterBegin = document.querySelector('#input-water-begin');
let inputWaterEnd = document.querySelector('#input-water-end');
let inputWaterAbonent = document.querySelector('#input-water-abonent');

let sumGasAbonent = document.querySelector('#sum-gas-abonent');
let sumWaterAbonent = document.querySelector('#sum-water-abonent');

let sumGas = document.querySelector('#sum-gas');
let sumWater = document.querySelector('#sum-water');
let sumLight = document.querySelector('#sum-light');

let total = document.querySelector('#sum');

card.addEventListener('click', function (event) {
    event.preventDefault();
    
    let tarifLightBefore = inputLightBefore.value;    
    let tarifLightAfter = inputLightAfter.value;    
    let tarifGas = inputGas.value;
    let tarifWater = inputWater.value;
    
    let lightDayBegin = inputLightDayBegin.value;
    let lightDayEnd = inputLightDayEnd.value;
    let lightDay = lightDayEnd - lightDayBegin;

    let lightNightBegin = inputLightNightBegin.value;
    let lightNightEnd = inputLightNightEnd.value;
    let lightNight = lightNightEnd - lightNightBegin;

    console.log(lightNight);

    let gasBegin = inputGasBegin.value;
    let gasEnd = inputGasEnd.value;
    let gasAbonent = +inputGasAbonent.value;

    let waterBegin = inputWaterBegin.value;
    let waterEnd = inputWaterEnd.value;
    let waterAbonent = +inputWaterAbonent.value;
    

    let gas = (gasEnd - gasBegin) ;
    let water =   waterEnd - waterBegin;
   


    sumGas.innerHTML =  ((gasEnd - gasBegin) * tarifGas).toFixed(2);
    sumWater.innerHTML = (water * tarifWater).toFixed(2);


   if (gasAbonent > 0) {
    sumGasAbonent.innerHTML = ((gas * tarifGas) +gasAbonent).toFixed(2);
   }

   if (waterAbonent > 0) {
    sumWaterAbonent.innerHTML = ((water * tarifWater) +waterAbonent).toFixed(2);
   }

   if ((lightDay+lightNight) < 250 ) {
    sumLight.innerHTML = ((lightDay * tarifLightBefore) + (lightNight * tarifLightBefore *0.5 )).toFixed(2);

    total.innerHTML = (((lightDay * tarifLightBefore) + (lightNight * tarifLightBefore *0.5 )) + ((water * tarifWater) +waterAbonent) + ((gas * tarifGas) +gasAbonent)).toFixed(2);
   } else {
    sumLight.innerHTML = ((lightDay * tarifLightAfter) + (lightNight * tarifLightAfter *0.5 )).toFixed(2);
    total.innerHTML = (((lightDay * tarifLightAfter) + (lightNight * tarifLightAfter *0.5 )) + ((water * tarifWater) +waterAbonent) + ((gas * tarifGas) +gasAbonent)).toFixed(2); 
   }

      
});


     



    



/*    let formData ={};
    const ls = localStorage;

    function updateSearch(event) {
        setSearch(event.target.value);  
        formData[event.target.name] = event.target.value;
        ls.setItem('formData', JSON.stringify(formData));
      }
    
      if(ls.getItem('formData')) {
        formData = JSON.parse(ls.getItem('formData'));
        console.log(formData.search);
        
     //   setSearch(formData.search);
      }

      */