import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Recipe } from './recipe';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const recipes = [
      { id: 1, name: 'Gateaux chocolat',  preparation: 'Melanger tout les ingredients', ingredient: 'Chocolat, farine, beurre, sucre, oeuf, levure...' },
      { id: 3, name: 'Cookies' ,  preparation: 'Melanger tout les ingredients', ingredient: 'Chocolat, farine, beurre, sucre, oeuf, levure...'  },
      { id: 8, name: 'Chouquette', preparation: 'Melanger tout les ingredientst', ingredient: 'Lait, beurre, farine, sucre, oeuf, levure...'  },
      { id: 4, name: 'Meringue' , preparation: 'Melanger tout les ingredients', ingredient: 'Lait, farine, oeuf, levure...'  },
      { id: 5, name: 'Crepes'   , preparation: 'Melanger tout les ingredients', ingredient: 'Chocolat, farine, sucre, oeuf, levure...' },
      { id: 6, name: 'Gauffre'  , preparation: 'Melanger tout les ingredients', ingredient: 'farine, lait, oeuf, levure...' },
      { id: 7, name: 'Gateaux vanille'  , preparation: 'Melanger tout les ingredients', ingredient: 'Chocolat, farine, vanille, sucre, oeuf, levure...' },
      { id: 2, name: 'Marbré', preparation: 'Melanger tout les ingredients', ingredient: 'Chocolat, farine, sucre, oeuf, vanille, levure...'  },
    ];
    return {recipes};
  }

}
