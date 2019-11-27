import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Recipe} from './recipe';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  isAuth = false;
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
      this.isAuth = true;
  }
}
