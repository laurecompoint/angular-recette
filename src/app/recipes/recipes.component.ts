import { Component, OnInit, HostBinding } from '@angular/core';
import { Recipe } from '../recipe';
import { RecipeService } from '../recipe.service';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
@Component({
  selector: 'app-recipes',
 
  animations: [
    
  ],
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {
  public recipes = [];
  
  constructor(private recipeService: RecipeService) { }
  
  ngOnInit() {
    this.getRecipes();
  }
  getRecipes(): void {
    this.recipeService.getRecipes().subscribe(data => (this.recipes = data));
  }
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.recipeService.addRecipe({ name } as Recipe)
      .subscribe(data => {
        this.recipes.push(data);
      });
      
  }

  delete(recipe: Recipe): void {
    this.recipes = this.recipes.filter(h => h !== recipe);
    this.recipeService.deleteRecipe(recipe).subscribe();
  }
}
