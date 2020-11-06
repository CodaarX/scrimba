if(5 > 3){
     console.log('is greater than')
 };


 var catLenght = cat

 if (catLenght.lenght = 3){
     console.log('is the lenght')
 };


 if('cat' === 'dog'){
     console.log('the same')
 } else{
     console.log('not the same')
 };


//  -------------------------------------------------------------------------------------------------------------------

//  will B and > 18 go to the movie

 var varName = Bobby

 var person = {
     name: varName,
     age: 12
   }


   if(person.age >= 18){
       console.log('person.name is allowed to go to the movie')
   } else {
       console.log('you are too young')
   };

   if(person.name.startsWith(B)){
     console.log('person.name is allowed to go to the movie')
 } else {
     console.log('your name does not start with B')
   };

   if(person.name.startsWith(B) && person.age >= 18){
     console.log('person.name is allowed to go to the movie')
 } else {
     console.log('your name does not start with B and you are not up to 18')
   };
  


//  -------------------------------------------------------------------------------------------------------------------

//  strict checker
 if(1 === "1"){
     console.log('strict')
 } else if(1 == '1'){
     console.log('loose or abstract')
 } else{
     console.log('not equal at all')
 }


 if(1 <= 2 && 2 == 4){
     console.log('yes')
 }


//  -------------------------------------------------------------------------------------------------------------------

//  office items counter

 var counter = 0
 var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer", "computer"];

 for(var i = 0; i < officeItems.length; i++){
    
     if (officeItems[i] === 'computer'){
         var result = (counter += 1);  
     }
 }

//  console.log(result);

//  -------------------------------------------------------------------------------------------------------------------


//  which is the largest?

 function largest(a, b, c){
     if (a > b && a > c){
     return a + " is the largest"
     } else if (b > a && b > c){
         return b + " is the largest"
     } else{
         return (c + " is the largest")
     }
 }
 
//   console.log(largest(32, 44, 15))

//  -------------------------------------------------------------------------------------------------------------------


//  evem or odd checker?

 function eveodd(a){
     if (a % 2 === 0){
     return a + " is even"
     } else {
         return a + " is odd"
     } 
 
  console.log(eveodd(4))


    }


//  -------------------------------------------------------------------------------------------------------------------

    // print out only even

    for(i = 0; i < 100; i++){
        if (i % 2 === 0){
        console.log(i)        
        }
    }