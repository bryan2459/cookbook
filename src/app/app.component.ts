import { Component } from '@angular/core';
import { Ingredient } from './shared/ingredient.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cooker';
  loadedFeature = "recipe";
  ingredientAdded: Ingredient;
  ingredient: Ingredient;


  onNavigate(feature: string){
    this.loadedFeature = feature;
  }
}
