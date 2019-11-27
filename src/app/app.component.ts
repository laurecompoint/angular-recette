import { Component , HostBinding} from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { RecipeService } from './recipe.service';
import { slideInAnimation } from './annimation';

import {
  trigger,
  state,
  style,
  animate,
  transition,

} from '@angular/animations';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    slideInAnimation
    // animation triggers go here
  ]
})
export class AppComponent {
  
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
 



  title = 'Recipe app';

  constructor(private cookie: CookieService, private recipeService: RecipeService) {}
  ngOnInit() {
   
  }
  onSignOut() {
    
  }
}
