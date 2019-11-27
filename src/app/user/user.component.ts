import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private http: HttpClient,private recipeService: RecipeService) { }
 httpdata;
 public data = [];
 ngOnInit() {
  this.http.get("http://jsonplaceholder.typicode.com/users")
    .subscribe((data) => this.displaydata(data));     
 }
 displaydata(data) {this.httpdata = data;}
 /*
  searchparam = 2;
   ngOnInit() {
      this.http.get("http://jsonplaceholder.typicode.com/users?id="+this.searchparam)
      .subscribe((data) => this.displaydata(data));     
   }
   */
  
s = 3;

search(form: NgForm){
  console.log(form.value);
 
  this.http.get("http://jsonplaceholder.typicode.com/users?name="+form.value.name)
  .subscribe((data) => this.displaydata(data));  
}

add(name: string): void {
  name = name.trim();
  if (!name) { return; }
  this.recipeService.adduser({ name } as Recipe)
    .subscribe(data => {
      this.data.push(data);
    });
    
}
}
