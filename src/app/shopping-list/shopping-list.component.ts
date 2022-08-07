import { Component, OnInit } from '@angular/core';
import { Ingreadient } from '../shared/ingreadient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingreadient[] = [
    new Ingreadient('Apples', 5),
    new Ingreadient("Tomatoes", 10)
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onIngredientAdded(ingredient: Ingreadient){
    console.log(ingredient)
    this.ingredients.push(ingredient);
  }
}
