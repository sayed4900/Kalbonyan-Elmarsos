'use strict';

const measureKelvin = function(){
  const measurement = {
    type:'temp',
    unit :'celsuis',

    value:Number(prompt('Degree celsius:'))
    // prompt gave string always so we myst convert it to number 
  }
  console.table(measurement);

  const kelvin = measurement.value+273;
  return kelvin;
}

console.log(measureKelvin());