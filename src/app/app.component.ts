import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ComponentCounterValue;
  title = 'Counter App';

  constructor() {
    this.ComponentCounterValue = 10;
  }

  updateCounter(newValue: number) {
    this.ComponentCounterValue = newValue;
  }

}
