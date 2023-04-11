
let tarifLightBefore,
    tarifLightAfter,
    tarifGas;

let card = document.querySelector('#card');

let inputLightBefore = document.querySelector('#item-input-before');
let inputLightAfter = document.querySelector('#item-input-after');

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



card.addEventListener('click', function (event) {
    event.preventDefault();
    
    let tarifLightBefore = inputLightBefore.value;    
    let tarifLightAfter = inputLightAfter.value;    
    let tarifGas = inputGas.value;
    let tarifWater = inputWater.value;
    


    let gasBegin = inputGasBegin.value;
    let gasEnd = inputGasEnd.value;
    let gasAbonent = +inputGasAbonent.value;

    let waterBegin = inputWaterBegin.value;
    let waterEnd = inputWaterEnd.value;
    let waterAbonent = +inputWaterAbonent.value;
    

    let gas = (gasEnd - gasBegin) ;
    let water =   waterEnd - waterBegin;

    console.log(tarifLightBefore);
    console.log(tarifLightAfter);
    console.log(tarifGas);
/*    console.log(gasAbonent);
    console.log(gasBegin);*/
    console.log(water); 


    
    console.log(sumGas);
    sumGas.innerHTML =  ((gasEnd - gasBegin) * tarifGas).toFixed(2);
    sumWater.innerHTML = (water * tarifWater).toFixed(2);

   if (gasAbonent > 0) {
    sumGasAbonent.innerHTML = ((gas * tarifGas) +gasAbonent).toFixed(2);
   }

   if (waterAbonent > 0) {
    sumWaterAbonent.innerHTML = ((water * tarifWater) +waterAbonent).toFixed(2);
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