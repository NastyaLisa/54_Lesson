import { Component } from '@angular/core';
import { GroupNameService } from '../service/group-name.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public newGroupName: string = '';

  constructor(public groupName: GroupNameService) {}

  public updateGroupName(): void {
    this.groupName.groupName = this.newGroupName;
    this.newGroupName = '';
  }
}
