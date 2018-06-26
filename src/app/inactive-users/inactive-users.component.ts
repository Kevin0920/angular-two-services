import { Component, OnInit } from '@angular/core';

import { UserService } from '../users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  users: string[];
  lists: string[];


  constructor(private userService: UserService) {}

  ngOnInit() {
    this.users = this.userService.inactiveUsers;

    this.lists = this.userService.nonePlan;
  }

  onSetToActive(id: number) {
    this.userService.setToActive(id);
  }

  setBackToList(id: number) {
    this.userService.sendToList(id);
  }

}
