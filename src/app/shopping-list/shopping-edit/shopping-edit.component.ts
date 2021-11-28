import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  //ingredientAdded = new EventEmitter<Ingredient>();


//

  constructor(private shopplistService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddItem(){
    // alert("adding item "+ this.nameInputRef.nativeElement.value);

     const newIngredient = new Ingredient(this.nameInputRef.nativeElement.value,
                                         this.amountInputRef.nativeElement.value );
     this.shopplistService.onIngredientAdded(newIngredient);
     //this.shopplistService.onIngredientAdded(newIngredient);

  }

}
