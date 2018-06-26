import { Injectable } from '@angular/core';

import { CounterService } from './counter.service';

@Injectable()
export class UserService {
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];
  
  nonePlan = ['some'];
  allThingsList = ['basketball', 'football', 'swimming'];

  constructor(private counterService: CounterService) {}

  setToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.counterService.incrementInActiveToActive();

  }
  
  setToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.counterService.incrementActiveToInactive();
  }

  sendToList(id: number) {
    this.allThingsList.push(this.nonePlan[id]);
    this.nonePlan.splice(id, 1);
    this.counterService.incrementListNumber();
  }

  sendDisplay(id: number) {
    this.nonePlan.push(this.allThingsList[id]);
    this.allThingsList.splice(id, 1);
  }

}
