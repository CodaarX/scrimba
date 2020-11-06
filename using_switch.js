// search for names with switch

let name = 'michael';

switch(name){
    case 'john':
        console.log('sorry, wrong name');
        break
    case 'sarah':
        console.log('sorry, wrong name');
        break
    case 'mike':
        console.log('sorry, wrong name');
        break
    case 'el':
        console.log('sorry, wrong name');
        break
    case 'ichael':
        console.log('sorry, wrong name');
        break
    case 'efjdl':
        console.log('sorry, wrong name');
        break
    case 'mi':
        console.log('sorry, wrong name');
        break
    case 'michael':
        console.log('welcome');
        break
default:        
    console.log();

}


// ______________________________________________________________________________________________________________________

var firstArray = [2, 5, 435, 4, 3];  "The light is on"
var secondArray = [1, 1, 1, 1, 3];   "The light is on"
var thirdArray = [9, 3, 4, 3];       "The light is off"

var firstTotal = 0;
var secondTotal = 0;
var thirdTotal = 0;

for ( var i in firstArray){
    firstTotal = (firstTotal += firstArray[i])
    }

for ( var i in secondArray){
    secondTotal = (secondTotal += secondArray[i])
    }

for ( var i in thirdArray){
    thirdTotal = (thirdTotal += thirdArray[i])
    }
   
   total = firstTotal + secondTotal + thirdTotal
  
   console.log(total);


   
   if (total % 2 === 0){
    console.log('switch is off')
} else {
    console.log('switch is on')
}

if (firstTotal % 2 === 0){
    console.log('First Array switch is off')
} else {
    console.log(' first Array switch is on')
}
if (secondTotal % 2 === 0){
    console.log('Second Array switch is off')
} else {
    console.log('Second Array switch is on')
}
if (thirdTotal % 2 === 0){
    console.log('Third array switch is off')
} else {
    console.log('Third array switch is on')
}


