import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { NgForm } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-cookie-recipe',
  templateUrl: './cookie-recipe.component.html',
  styleUrls: ['./cookie-recipe.component.css']
})  
export class CookieRecipeComponent implements OnInit {
  cookieValueIngredient: string;
  cookieValueName: {};
  cookieValueIngredient2: string;
  cookieValueName2: string;
  cookieValueIngredientNew: string;
  cookieValueNameNew: string;

  constructor(private cookie: CookieService, private recipeService: RecipeService,  private router: Router) {}
  recipeStatus: boolean;
  
  ngOnInit() {
   this.recipeStatus = false
   this.cookie.set("recipeName", 'Cookie chocolat' , 300)
   this.cookie.set("recipeIngredient", "Chocolat, sucre, farine, oeufs...", 500)
   this.cookie.set("recipeName2", 'Cookie pepite de chocolat' , 500)
   this.cookie.set("recipeIngredient2", "Chocolat, sucre, farine, oeufs...", 500)
  
   const allCookies = this.cookie.getAll();
   this.cookieValueName = this.cookie.getAll();
   this.cookieValueIngredient = this.cookie.get("recipeIngredient");
   this.cookieValueName2 = this.cookie.get("recipeName2");
   this.cookieValueIngredient2 = this.cookie.get("recipeIngredient2");
   this.cookieValueNameNew = this.cookie.get("recipeNameNew");
   this.cookieValueIngredientNew = this.cookie.get("recipeIngredientNew");

    return console.log( allCookies);
  }
  getCookie(key: string){
    return this.cookie.get('rec');
    console.log('tets');
  }
  newcookierecipe(form: NgForm){
    this.recipeStatus = true
    this.cookie.set("recipeNameNew",  form.value.name, 500)
    this.cookie.set("recipeIngredientNew", form.value.ingredient, 500)

  }
  delete(): void {
    console.log('test')

    this.cookie.delete("recipeNameNew");
    this.cookie.delete("recipeIngredientNew");
    this.router.navigate(['dashboard']);
  }
  getAll(){
   
  }

}
