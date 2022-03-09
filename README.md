#  Object Oriented JavaScript

Created by: *Michael Shamrell*

This project showcases my ability to create and use objects. In this project I created a Pizza object that holds all of its properties. I was able to change the values of the properties inside the Pizza object by using Pizza.prototypes. This allowed me to price out each size, and toppings on the pizza. It uses JQuery and a form submit to relay the result back to the user.
Link to website: https://michaelshamrell.github.io/Pizza-Parlor/

# Technologies Used:
Git, Github, HTML, CSS, markdown, javasScript, jQuery, and bootstrap. 
# Application setup:
clone to git by clicking the green "Code" button on https://github.com/michaelshamrell/Pizza-Parlor
copy the link inside, then go into gitbash and do the command: $git clone (instert url here that you copied). Make sure you create a css and js file,  with bootstrap in css and jQuery in js. After this you are able to access the code by cding into the correct repository and typing code .
# License
MIT
copyright (c) Michael Shamrell



Desrcribe: Pizza(topping1, topping2, topping3, size)
Test: "It should return a pizza object with 3 properties for toppings and 1 for size."
Code: const pizza = new pizza( ["cheese"],["meat"], ["veggies] "medium");
Expected Output {topping1 : ["cheese"],topping2 : ["meat"], topping3 : ["veggies"],  size: "medium" }


Describe: Pizza.prototype.pizzaToppingsPricer = function() 
Test: "It should add the corresponding topping total to the pizza price"
code: const pizza = new pizza ("mozzarella", "pepperoni" "mushrooms", "medium")
  total;
Expected Output {toppings : ["cheese", "pepperoni"] total = 8}

Describe : Pizza.prototype.pizzaSizePricer = function()
Test: "It should add the size price to the total price"
code: const pizza = new pizza ("mozzarella", "pepperoni" "mushrooms", "medium")
Expected Output: Pizza.size = 10
