import { Component, Input } from '@angular/core';
import { GroupNameService } from '../service/group-name.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  @Input() name = '';
  @Input() status = '';
  @Input() img = '';

  newName = '';
  newStatus = '';

  onNameChange(value: string) {
    this.newName = value;
  }

  onUpdateName() {
    this.name = this.newName;
    this.newName = '';
  }

  onStatusChange(value: string) {
    this.newStatus = value;
  }

  onUpdateStatus() {
    this.status = this.newStatus;
    this.newStatus = '';
  }
  constructor(public groupNameService: GroupNameService) {}
}
