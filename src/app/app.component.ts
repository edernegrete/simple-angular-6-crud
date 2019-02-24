import { Component } from '@angular/core';
import { Headers } from './tabledata'
import { CombineLatestOperator } from 'rxjs/internal/observable/combineLatest';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  displaymodal = false
  tableheaders = Headers
  tabledata = []
  editId = null
  toggleModal() {
    this.editId = null
    this.displaymodal = !this.displaymodal
  }
  editData(data) {
    this.tabledata = this.tabledata.map((item) => item.id == data.id ? data : item);
  }
  handleSubmit(data) {
    if(data.id) {
      this.editData(data)
      return
    }
    data.id = Math.random()
    const newData = [
      ...this.tabledata,
      {
        ...data
      }
    ]
    this.tabledata = newData
  }
  handleDelete(id) {
    this.tabledata = this.tabledata.filter(item => item.id !== id)
  }
  handleEdit(id) {
    this.editId = id
    this.displaymodal = true
  }
}
