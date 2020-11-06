//  grocery items, implementing objects in JS

//   Javascript Arrays
 var shopper = {
     name: 'Michael',
     years: 20,
     operational: true,
     groceryCart: ['tomatoes', ' milk', ' eggs', ' cereals', ' detergents', ' toiletries.'],
     details: function details(){
         console.log(this.name + ' is ' + this.years + ' old. its ' + this.operational + ' he bought the following items: ' + this.groceryCart)
     } 
 }

 console.log(shopper.details());



 
