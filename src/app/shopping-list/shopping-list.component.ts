import { Component, OnInit, Input } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
 // providers: [ShoppingListService]
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];
 // ingredient: Ingredient;
  @Input() ingredient: Ingredient;


 // @Input() ingredient: Ingredient;
  /*

  = [
     new Ingredient('Salt',5),
     new Ingredient('Pepper',10)

  ];
  */

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
      this.ingredients =this.shoppingListService.getShoppingList()
      this.shoppingListService.ingredientAdded.subscribe(
          (ingredients: Ingredient[] ) =>
           {
            alert("new");
            this.ingredients = ingredients;
           }
        );
        /*
       this.shoppingListService.ingredientAdded.subscribe(
        ( ingredientIn: Ingredient) => {
          this.ingredient = ingredientIn;
            alert("here :" + this.ingredient.name);
           //this.ingredients.push(this.ingredient);
           this.ingredients = this.shoppingListService.getShoppingList()
           alert("lenght: "+ this.ingredients.length);
        }
      );

      */



  }

  onIngredientAdded(ingredient: Ingredient)
  {
     // this.ingredients.push(ingredient);
  }

}
