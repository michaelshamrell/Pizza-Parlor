
//Business Logic For Pizza
function Pizza(topping1, topping2, size, total,) {
  this.topping1 = topping1Input;
  this.topping2 = topping2Input;
  this.size = size;
  this.total = 0;
}

function pizzaPrice() {

  
  
  return this.total; " "
 
}
 
//Business Logic for Pizza Pricing
//Topping1 pricing

if (this.topping1 = 'mozzarella') {
  this.total += 2
} else if (this.topping1 = 'chedder') {
  this.total += 1
} else  {
  this.total += 3
}

//Topping2 pricing
if (this.topping2 = 'sausage') {
  this.total += 4
} else if (this.topping2 = 'pepperoni') {
  this.total += 2
} else  {
  this.total += 0
}

//Size Pricing
if (this.size = 'medium') {
  this.total += 10
} else if (this.size = 'large') {
  this.total += 15
} else {
  this.total += 7
}

//Adding topping price together


//User Logic

$(document).ready(function() {
  $("form#pizzaParlor").click(function(event) {
    const topping1Input = $("input#topping1").val();
    const topping2Input = $("input#topping2").val();
    const sizeInput = $("input#size").val();
    event.preventDefault();
    console.log(pizzaPrice.total);
  });
});