import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://get.pxhere.com/photo/omelet-dish-food-cuisine-ingredient-produce-meal-vegetarian-food-frittata-comfort-food-recipe-quiche-vegetable-vegan-nutrition-cookware-and-bakeware-brunch-garnish-curry-Bobotie-1620847.jpg'),
    new Recipe('A Test Recipe 2', 'This is simply a test', 'https://get.pxhere.com/photo/omelet-dish-food-cuisine-ingredient-produce-meal-vegetarian-food-frittata-comfort-food-recipe-quiche-vegetable-vegan-nutrition-cookware-and-bakeware-brunch-garnish-curry-Bobotie-1620847.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}
