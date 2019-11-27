import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Recipe} from './recipe';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipesUrl: string = 'api/recipes';

  private Url: string = 'http://jsonplaceholder.typicode.com/users';
  
  constructor( private http: HttpClient) { }

  getRecipes (): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.recipesUrl);

  }
  getRecipe(id: number): Observable<Recipe> {
    const url = `${this.recipesUrl}/${id}`;
    return this.http.get<Recipe>(url);
  }
  searchRecipes(term: string): Observable<Recipe[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Recipe[]>(`${this.recipesUrl}/?name=${term}`);
  }
  addRecipe(recipe: Recipe): Observable<Recipe> {
    return this.http.post<Recipe>(this.recipesUrl, recipe);
  }
  adduser (recipe: Recipe): Observable<Recipe> {
    return this.http.post<Recipe>(this.Url, recipe)
     
  }
  deleteRecipe(recipe: Recipe | number): Observable<Recipe> {
    const id = typeof recipe === 'number' ? recipe : recipe.id;
    const url = `${this.recipesUrl}/${id}`;

    return this.http.delete<Recipe>(url);
  }

  updateRecipe(recipe: Recipe): Observable<any> {
    return this.http.put(this.recipesUrl, recipe);
  }

  isAuth = false;
  allCookie = false;
  signIn(){
      return new Promise(
          (resolve, reject) =>{
              
          setTimeout(() => {
              this.isAuth = true;
              resolve(true);
              }, 4000);
          }

      )
  }
  signOut(){
      this.isAuth = false;
  }
  Allcookie(){
    this.allCookie = true;
  }

}
