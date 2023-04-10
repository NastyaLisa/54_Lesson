import {
  Component,
  ViewChild,
  ViewContainerRef,
  ComponentRef,
} from '@angular/core';
import { UsersService } from './service/users.service';
import { PopUpComponent } from './pop-up/pop-up.component';
import { GroupNameService } from './service/group-name.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  users: { name: string; status: string; url: string; id: number }[] = [];
  constructor(
    private usersService: UsersService,
    public groupNameService: GroupNameService
  ) {
    this.users = this.usersService.getUsers();
  }
  @ViewChild('popUp', { read: ViewContainerRef })
  private viewRef!: ViewContainerRef;
  private componentRef!: ComponentRef<PopUpComponent>;

  showPopUp() {
    this.componentRef = this.viewRef.createComponent(PopUpComponent);

    this.componentRef.instance.members = this.users.length;
    this.componentRef.instance.groupName = this.groupNameService.groupName;

    this.componentRef.instance.close.subscribe(() => {
      this.viewRef.clear();
    });
  }
}
