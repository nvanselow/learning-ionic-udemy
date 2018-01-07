import { Component } from '@angular/core';
import Person, { PEOPLE } from './person/person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app';
  people: Person[] = PEOPLE;
}
