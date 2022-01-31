
//Business Logic For Pizza
function Pizza(topping1, topping2, size) {
  this.topping1Input = topping1;
  this.topping2Input = topping2;
  this.sizeInput = size;
}

function pizzaPrice() {
  

  if (topping1Input = 'mozzarella') {
    total += 2
  } else if (topping1Input = 'chedder') {
    total += 1
  } else  {
    total += 3
  }
  
  //Topping2 pricing
  if (topping2Input = 'sausage') {
    total += 4
  } else if (topping2Input = 'pepperoni') {
    total += 2
  } else  {
    total += 0
  }
  
  //Size Pricing
  if (sizeInput = 'medium') {
    total += 10
  } else if (sizeInput = 'large') {
    total += 15
  } else {
    total += 7
  }
  
  var total = pizzaPrice()
  return total
};

total = pizzaPrice
 
//Business Logic for Pizza Pricing
//Topping1 pricing



//Adding topping price together


//User Logic

$(document).ready(function() {
  $("form#pizzaParlor").click(function(event) {
    const topping1Input = $("input#topping1").val();
    const topping2Input = $("input#topping2").val();
    const sizeInput = $("input#size").val();
    event.preventDefault();
    console.log (total);
  });
});