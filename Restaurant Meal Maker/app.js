const menu = {
  _meal: 'Tiramisu',
  _price: 6,

  set meal(mealToCheck) {
    if (typeof mealToCheck === 'string') {
      this._meal = mealToCheck;
    } else {
      console.log('Please provide a valid meal name.');
    }
  },

  set price(priceToCheck) {
    if (typeof priceToCheck === 'number') {
      this._price = priceToCheck;
    } else {
      console.log('Please provide a valid price.');
    }
  },

  get todaysSpecial() {
    if (this._meal && this._price) {
      return `Today's Special is ${this._meal} for $${this._price}!`;
    } else {
      return 'Meal or price was not set correctly!';
    }
  }
};

console.log(menu);
console.log(menu.todaysSpecial);
