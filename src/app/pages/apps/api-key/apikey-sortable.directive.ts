import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { ApikeyModel } from './apikey.model';

export type SortColumn = keyof ApikeyModel | '';
export type SortDirection = 'asc' | 'desc' | '';
const rotate: { [key: string]: SortDirection } = { 'asc': 'desc', 'desc': '', '': 'asc' };

export interface ApiSortEvent {
  column: SortColumn;
  direction: SortDirection;
}

@Directive({
  selector: 'th[apisortable]',
  host: {
    '[class.asc]': 'direction === "asc"',
    '[class.desc]': 'direction === "desc"',
    '(click)': 'rotate()'
  }
})
export class NgbdApikeySortableHeader {

  @Input() apisortable: SortColumn = '';
  @Input() direction: SortDirection = '';
  @Output() apisort = new EventEmitter<ApiSortEvent>();

  rotate() {
    this.direction = rotate[this.direction];
    this.apisort.emit({ column: this.apisortable, direction: this.direction });
  }
}
