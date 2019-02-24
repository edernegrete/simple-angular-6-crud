import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  @Input() headers: string[] = []
  @Input() data: Array<object> = []
  @Output() delete: EventEmitter<any> = new EventEmitter();
  @Output() edit: EventEmitter<any> = new EventEmitter();
  dispatchDelete(id) {
    this.delete.emit(id)
  }
  dispatchEdit(id) {
    this.edit.emit(id)
  }
}
