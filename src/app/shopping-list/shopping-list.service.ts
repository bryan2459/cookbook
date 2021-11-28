import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export  class ShoppingListService{
  private ingredients: Ingredient[] = [
    new Ingredient('Salt',5),
    new Ingredient('Pepper',10)

 ];

 ingredientAdded = new EventEmitter<Ingredient[]>();

 onIngredientAdded(ingredient: Ingredient)
  {
      alert('onIngredientAdded');
      this.ingredients.push(ingredient);
      this.ingredientAdded.emit(this.ingredients.slice());
  }

 getShoppingList(){
    return this.ingredients.slice();
 }

}
