import { Component, OnInit } from '@angular/core';

import { UserService } from '../users.service';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  users: string[];
  things: string[];
  counting: number;

  constructor(private userService: UserService, private countService: CounterService) {}

  ngOnInit() {
    this.users = this.userService.activeUsers;
    
    this.counting = this.countService.counter;
    this.things = this.userService.allThingsList;
  }

  onSetToInactive(id: number) {
    this.userService.setToInactive(id);
  }

  setToDoList(id: number) {
    console.log(id);
    this.userService.sendDisplay(id);
  }

}
