import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
     new Recipe('A steak recipe','Simply a best steak','https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'),
     new Recipe('A soup recipe','Simply a best soup','https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'),
     new Recipe('A pizza recipe','Simply a best pizza','https://image.shutterstock.com/image-photo/succulent-thick-juicy-portions-grilled-600w-138421859.jpg'),
     new Recipe('A bangars recipe','Simply a best bangers','https://image.shutterstock.com/image-photo/fried-sausages-spices-sauce-tomatoes-600w-1838761069.jpg'),

  ];
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
