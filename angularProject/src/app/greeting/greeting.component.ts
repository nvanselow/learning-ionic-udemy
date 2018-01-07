import { Component, OnInit, Input } from '@angular/core';
import Person from '../person/person';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css'],
})
export class GreetingComponent implements OnInit {
  // people: Person[] = PEOPLE;
  @Input() people: Person[];

  constructor() {}

  ngOnInit() {}
}
