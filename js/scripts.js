'use strict';

//Business Logic For Pizza
function Pizza(topping1, topping2, size) {
  this.topping1 = topping1;
  this.topping2 = topping2;
  this.size = size;

}
// Pizza.topping1 = $("select#topping1").val();
// Pizza.topping2 = $("select#topping2").val();
// Pizza.size = $("select#size").val();
let pizzaPriceTotal = 0
// let topping1 = 0
// let topping2 = 0
// let topping3 = 0
function pizzaPrice() {
  // const topping1Input = ["mozzarella", "cheddar", "veganCheese"]
  // const topping2Input = ["sausage", "pepperoni", "noMeat"]
  // const sizeInput = ["medium", "large", "small"]
 Pizza.prototype.pizzaTopping1 = function() { 
  if ( Pizza.topping1 = "mozzarella") {
    this.topping1 + 2
  } else if ( Pizza.topping1 = "cheddar") {
    this.topping1 + 1
  } else  {
    this.topping1 + 3
  }
}
  //Topping2 pricing
  Pizza.prototype.pizzaTopping2 = function() {
  if (Pizza.topping2 = "sausage") {
    this.topping2 + 4
  } else if (Pizza.topping2 = "pepperoni") {
    this.topping2 + 2
  } else  {
    this.topping2 + 0
  }
 }
  Pizza.prototype.pizzaSize = function() {
  if (Pizza.size = "medium") {
    this.size + 10
  } else if (Pizza.size = "large") {
    this.size + 15
  } else {
    this.size + 7
  }
} 
  
};
function pizzaPriceTotalMath() {
  pizzaPriceTotal = this.topping1 + this.topping2 + this.size
}

//Business Logic for Pizza Pricing
//Topping1 pricing



//Adding topping price together


//User Logic
$(document).ready(function() {
  $("form#pizzaParlor").submit(function(event) {
    event.preventDefault();
    pizzaPrice()
    pizzaPriceTotalMath()
    console.log(pizzaPriceTotal);
  });
});