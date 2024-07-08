 Restaurant-Meal-Maker PROJECT:

This project involves creating a JavaScript function for a restaurant's website to manage "Today's Special," which includes setting a meal and its price each morning.

Features:

SET MEAL AND PRICE: Allows the restaurant to set a special meal and its price for the day.
VALIDATION: Ensures that the meal is a string and the price is a number, avoiding invalid or incorrect entries.
USER-FRIENDLY: Provides clear feedback if the input values are not acceptable, maintaining the integrity of the displayed special.
DYNAMIC UPDATES: Displays the current special dynamically using a getter method.

USAGE:

Setting Today's Special:
------------------------------------------------------------------
menu.meal = 'Tiramsu'; // Sets the meal to 'Tiramisu'

menu.price = 6;       // Sets the price to 6
------------------------------------------------------------------


Getting Today's Special
-----------------------------------------------------------------------------------------
console.log(menu.todaysSpecial); 

// Outputs: Today's Special is Tiramisu for $6!
-----------------------------------------------------------------------------------------

This project ensures that the restaurant can confidently update and display "Today's Special" each day, enhancing the website's functionality and reliability.
