import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { AuthComponent } from './auth/auth.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { CookieRecipeComponent } from './cookie-recipe/cookie-recipe.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent , data: {animation: 'HomePage'}},
  { path: 'detail/:id', component: RecipeDetailComponent ,  data: {animation: 'SecondPage'}},
  { path: 'recipes', component: RecipesComponent , data: {animation: 'HomePage'}},
  { path: 'auth', component: AuthComponent , data: {animation: 'SecondPage'}},
  { path: 'user', component: UserComponent ,  data: {animation: 'HomePage'}},
  { path: 'register', component: RegisterComponent ,  data: {animation: 'SecondPage'}},
  { path: 'cookie-recipe', component: CookieRecipeComponent ,  data: {animation: 'HomePage'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),   BrowserModule,
    BrowserAnimationsModule , HttpClientModule,],
  exports: [RouterModule]
})
export class AppRoutingModule { }
