import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({providedIn: 'root'})
export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000
  },
  {
    id: uuid(),
    name: 'Goku',
    power: 9500
  },
  {
    id: uuid(),
    name: "Vegeta",
    power: 7500
  }];

  onNewCharacter( character: Character ): void {
    const newCharacter: Character = { ...character, id: uuid() };
    this.characters.push(newCharacter);
  }

  deleteCharacter(id: string | number): void {
    switch (typeof id){
      // Borra por ID
      case 'string':
        this.characters = this.characters.filter( character => character.id !== id );
        break;
      // Borra por indice
      case 'number':
        this.characters.splice(id,1);
        break;
    }
  }
}
