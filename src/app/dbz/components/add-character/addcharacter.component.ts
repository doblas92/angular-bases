import { Character } from './../../interfaces/character.interface';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './addcharacter.component.html',
  styleUrls: ['./addcharacter.component.css']
})
export class AddcharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = <Character>{};


  emitCharacter():void {
    if( this.character.name.length === 0 ) return;
    this.onNewCharacter.emit({...this.character});
    this.character = <Character>{};
  }

}
