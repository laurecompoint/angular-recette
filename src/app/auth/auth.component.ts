import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { NgForm } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router'
import { getAllLifecycleHooks } from '@angular/compiler/src/lifecycle_reflector';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html' ,
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  authStatus: boolean;
  cookieStatus: boolean;
  
  private _sessionId: string;
  constructor(private cookie: CookieService, private recipeService: RecipeService,  private router: Router) {}
  public set sessionId(value: string) {
    this._sessionId = value;
    this.cookie.set("sessionId", value);
  }
  cookieValueEmail: string;
  cookieValueName: string;
  ngOnInit() {
    this.authStatus = this.recipeService.isAuth;
    this.cookieValueEmail = this.cookie.get("userEmail");
    this.cookieValueName = this.cookie.get("userName");
   
    
    // this.cookie.set("test", "test");
    
     //this.cookie.set( 'Test', 'Hello World' );
       // this.cookieValue = this.cookie.get('cookie 2');
      //  const allCookies: {} = this.cookie.getAll();
     // console.log(this.cookie);
    
  }


signIn(form: NgForm){
    console.log('login methode is call')
    console.log(form.value['email']);
    //save info in cookie

    this.cookie.set("userEmail", form.value.email, 500)
    this.cookie.set("userName", form.value.name, 500)
    this.cookie.set("userPassword", form.value.password, 500)
    
    //return this.cookie.get(key);
    //getting cookie

    alert("user with email (" + this.cookie.get("userEmail") +") successfully logged in.") ;
    this.recipeService.signIn().then(
      () => {
        console.log('Sign in successful!');
        this.authStatus = this.recipeService.isAuth;
        this.router.navigate(['dashboard']);
      }
    );
  }
  onSignOut() {
    this.recipeService.signOut();
    this.authStatus = this.recipeService.isAuth;
    this.cookie.deleteAll();
  }
  allcookie() {
    this.recipeService.Allcookie();
  
    this.cookieStatus = this.recipeService.allCookie;
  }
    
}
 

