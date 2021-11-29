import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
//import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

 // constructor(private shoppingListService: ShoppingListService) { }
  constructor(private recipeService: RecipeService){};

  ngOnInit(): void {
  }

  onAddShoppingList(){
    alert('Clicking shopping list!!');
    alert('recipe '+ JSON.stringify(this.recipe.ingredients));
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

}
