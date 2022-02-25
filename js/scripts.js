
//Business Logic For Pizza
function Pizza(topping1, topping2, size) {
  this.topping1 = topping1;
  this.topping2 = topping2;
  this.size = size;
  topping1 = topping1Input;
  topping2 = topping2Input;
  size = sizeInput;
}
let pizzaPriceTotal = 0
let topping1 = 0
let topping2 = 0
let size = 0
function pizzaPrice() {
  const topping1Input = ["mozzarella", "cheddar", "veganCheese"]
  const topping2Input = ["sausage", "pepperoni", "noMeat"]
  const sizeInput = ["medium", "large", "small"]
  
  if (topping1Input = 'mozzarella') {
    pizzaPriceTotal += 2
  } else if (topping1Input = 'cheddar') {
    pizzaPriceTotal += 1
  } else  {
    pizzaPriceTotal += 3
  }
  
  //Topping2 pricing
  if (topping2Input = 'sausage') {
    pizzaPriceTotal += 4
  } else if (topping2Input = 'pepperoni') {
    pizzaPriceTotal += 2
  } else  {
    pizzaPriceTotal += 0
  }
  
  //Size Pricing
  if (sizeInput = 'medium') {
    pizzaPriceTotal += 10
  } else if (sizeInput = 'large') {
    pizzaPriceTotal += 15
  } else {
    pizzaPriceTotal += 7
  }
  
  
};


 
//Business Logic for Pizza Pricing
//Topping1 pricing



//Adding topping price together


//User Logic

$(document).ready(function() {
  $("form#pizzaParlor").submit(function(event) {
    topping1 = $("input#topping1").val();
    topping2 = $("input#topping2").val();
    size = $("input#size").val();
    event.preventDefault();
    console.log(pizzaPriceTotal);
  });
});