
//Business Logic For Pizza
function Pizza(topping1, topping2, size, total) {
  this.topping1 = topping1;
  this.topping2 = topping2;
  this.size = size;
  this.total = total;
}

Pizza.prototype.pizzaPrice = function() {
  return topping1.total  + topping2.total + size.total;
};

//Business Logic for Pizza Pricing

const pizza = new Pizza(0,0,0,0)

//Topping1 pricing
if (topping1 = 'mozzarella') {
  Pizza.total + 2
} else if (topping1 = 'chedder') {
  Pizza.total + 1
} else  {
  Pizza.total + 3
}

//Topping2 pricing
if (topping2 = 'sausage') {
  Pizza.total + 4
} else if (topping2 = 'pepperoni') {
  Pizza.total + 2
} else  {
  total + 0
}

//Size Pricing
if (size = 'medium') {
  Pizza.total + 10
} else if (size = 'large') {
  Pizza.total + 15
} else {
  Pizza.total + 7
}

//Adding topping price together


//User Logic

$(document).ready(function() {
  $("form#pizzaParlor").click(function(event) {
    const topping1Input = ("input#topping1").val();
    const topping2Input = ("input#topping2").val();
    const sizeInput = ("input#size").val();
    event.preventDefault();
    console.log(pizzaPrice.total);
  });
});