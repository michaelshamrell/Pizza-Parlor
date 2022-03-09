$(document).ready(function() {
  $("form#pizzaParlor").submit(function(event) {
    const topping1Input = $("select#topping1").val();
    const topping2Input = $("select#topping2").val();
    const topping3Input = $("select#topping3").val();
    const sizeInput = $("select#size").val();
    const userOrder = new Pizza(topping1Input, topping2Input, topping3Input, sizeInput)
    userOrder.pizzaToppingsPricer()
    // userOrder.pizzaTopping2()
    userOrder.pizzaSizePricer()
    console.log(userOrder) 
    console.log(userOrder.price)
    $("#result").text("Your Total Comes Out to " + userOrder.price + "$")
    event.preventDefault();
  });
});

//instead of having dropdowns for toppings try using checkboxes.all values from checkboxing can be pushed into an array. this.price += 

//Try consolidating logic for setting price into one function. Pizza.prototype.sizeCalculator

//Business Logic For Pizza
function Pizza(topping1, topping2, topping3, size) {
  this.topping1 = topping1;
  this.topping2 = topping2;
  this.topping3 = topping3
  this.size = size;
  this.price = 0;
 
}
 Pizza.prototype.pizzaToppingsPricer = function() { 
  if (this.topping1 === "mozzarella") {
    this.price += 2
  } else if (this.topping1 === "cheddar") {
    this.price += 1
  } else  {
    this.price += 3
  }
  if (this.topping2 === "sausage") {
    this.price += 4
  } else if (this.topping2 === "pepperoni") {
    this.price += 2
  } else  {
    this.price += 0
  }
  if (this.topping3 === "mushroom") {
    this.price += 4
  } else if (this.topping3 === "onion") {
    this.price += 2
  } else  {
    this.price += 0
  }
}
  Pizza.prototype.pizzaSizePricer = function() {
  if (this.size === "medium") {
    this.price += 10
  } else if (this.size === "large") {
    this.price += 15
  } else {
    this.price += 7
  }
 }