import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { NgForm } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  authStatus: boolean;
  cookieValueEmail: string;
  cookieValueName: string;
  constructor(private cookie: CookieService, private recipeService: RecipeService,  private router: Router) {}
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
  register(form: NgForm){
    
    console.log(form.value['email']);
    //save info in cookie

    this.cookie.set("userEmail", form.value.email, 500)
    this.cookie.set("userName", form.value.name, 500)
    this.cookie.set("userFirstname", form.value.name, 500)
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
}
