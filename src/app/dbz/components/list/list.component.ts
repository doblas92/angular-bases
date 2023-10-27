import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input('List')
  public characterList: Character[] = [];

  @Output()
  public onDelete: EventEmitter<number|string> = new EventEmitter();

  removeItem(id: number | string): void {
    this.onDelete.emit(id);
  }

}
