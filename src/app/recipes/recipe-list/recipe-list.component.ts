import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    // new keyword is used to call constructor
    new Recipe(
      'A Test recipe',
      'This is simply test',
      'https://realfood.tesco.com/media/images/472x310-Tesco-DinnerFor2-FridgeRaidFeasts-16024-BaconMushroomBreakfastHash-0e5cf25f-f42c-45a2-b4a3-f4f9f06ee002-0-472x310.jpg'
    ),
  ];
}
