import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';


export class RecipeService{
  private recipes: Recipe[] = [
    new Recipe('A steak recipe',
    'Simply a best steak',
    'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
    [ new Ingredient('Meat',1),
      new Ingredient('French fries',10)
    ]),
    new Recipe('A soup recipe',
    'Simply a best soup',
    'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    [ new Ingredient('oninion',1),
    new Ingredient('potateo',10)
    ]),
    new Recipe('A steak2 recipe',
    'Simply a best steak2',
    'https://image.shutterstock.com/image-photo/succulent-thick-juicy-portions-grilled-600w-138421859.jpg',
    [ new Ingredient('Meat Lean',1),
      new Ingredient('French fries',10)
    ]),
    new Recipe('A bangars recipe',
    'Simply a best bangers',
    'https://image.shutterstock.com/image-photo/fried-sausages-spices-sauce-tomatoes-600w-1838761069.jpg',
    [ new Ingredient('Saugages',12),
     new Ingredient('French fries',10)
    ]),

 ];

 recipeSelected = new EventEmitter<Recipe>();

 getRecipes(){
    return this.recipes.slice();
 }


}




