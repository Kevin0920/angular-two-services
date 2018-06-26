export class CounterService {
  activeToInactiveCounter = 0;
  inactiveToActiveCounter = 0;
  counter = 0;

  incrementListNumber() {
    this.counter++;
    console.log('Counter: ' + this.counter);
  }

  incrementActiveToInactive() {
    this.activeToInactiveCounter++;
    console.log('Active to Inactive: ' + this.activeToInactiveCounter);
  }

  incrementInActiveToActive() {
    this.inactiveToActiveCounter++;
    console.log('Inactive to Active: ' + this.inactiveToActiveCounter);
  }
}
