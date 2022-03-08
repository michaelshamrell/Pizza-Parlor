'use strict';
$(document).ready(function() {
  $("form#pizzaParlor").submit(function(event) {
    const topping1Input = $("select#topping1").val();
    const topping2Input = $("select#topping2").val();
    const sizeInput = $("select#size").val();
    const userOrder = new Pizza(topping1Input, topping2Input, sizeInput)
    userOrder.pizzaTopping1()
    userOrder.pizzaTopping2()
    userOrder.pizzaSize()
    console.log(userOrder) 
    console.log(userOrder.price)
    $("#result").text(userOrder.price)
    event.preventDefault();
  });
});

//instead of having dropdowns for toppings try using checkboxes.all values from checkboxing can be pushed into an array. this.price += 

//Try consolidating logic for setting price into one function. Pizza.prototype.sizeCalculator

//Business Logic For Pizza
function Pizza(topping1, topping2, size) {
  this.topping1 = topping1;
  this.topping2 = topping2;
  this.size = size;
  this.price = 0;
 
}
 Pizza.prototype.pizzaTopping1 = function() { 
  if (this.topping1 === "mozzarella") {
    this.price += 2
  } else if (this.topping1 === "cheddar") {
    this.price += 1
  } else  {
    this.price += 3
  }
}
  //Topping2 pricing
  Pizza.prototype.pizzaTopping2 = function() {
  if (this.topping2 === "sausage") {
    this.price += 4
  } else if (this.topping2 === "pepperoni") {
    this.price += 2
  } else  {
    this.price += 0
  }
 }
  Pizza.prototype.pizzaSize = function() {
  if (this.size === "medium") {
    this.price += 10
  } else if (this.size === "large") {
    this.price += 15
  } else {
    this.price += 7
  }
} 
