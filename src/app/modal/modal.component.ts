import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() showmodal: boolean = false;
  @Input() id: number;
  @Output() close: EventEmitter<any> = new EventEmitter();
  @Output() submit: EventEmitter<any> = new EventEmitter();

  title = ''
  description = ''
  startDate = ''
  endDate = ''
  status = false
  setValue(key: string, value: string | boolean) {
    if(value === 'active') {
      value = true
    } else if (value === 'inactive') {
      value = false
    }
    this[key] = value;
  }
  dispatchSubmit() {
    const {title, description, startDate, endDate, status, id} = this
    if(!title || !description || !startDate || !endDate) {
      alert('Todos los campos son requeridos')
      return
    }
    this.submit.emit({
        title,
        description,
        startDate,
        endDate,
        status,
        id
    })
    this.resetData()
    this.close.emit(null)
  }
  resetData() {
    this.title = null
    this.description = null
    this.startDate = null
    this.endDate = null
    this.status = null
  }
  dispatchCloseEvent() {
    this.close.emit(null)
  }

}
