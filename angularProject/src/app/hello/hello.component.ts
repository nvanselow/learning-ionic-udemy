import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
})
export class HelloComponent implements OnInit {
  greeting: string;

  constructor() {
    this.greeting = '';
  }

  ngOnInit() {}

  sayHello() {
    alert(this.greeting);
  }

  updateGreeting(event) {
    this.greeting = event.target.value;
  }
}
