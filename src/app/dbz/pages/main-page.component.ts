import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'main-page.component.html'
})

export class MainPageComponent {
  constructor( private dbzService: DbzService ){ }

  get characters(): Character[] {
    return [...this.dbzService.characters];
  }

  onDeleteCharacter( id: string | number ): void {
    this.dbzService.deleteCharacter(id);
  }

  onNewCharacter( newCharacter: Character ): void {
    this.dbzService.onNewCharacter(newCharacter);
  }

}
