import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  constructor(private navCtrl: NavController) {}

  navigateToSecondPage(): void {
    // Using a string with lazy-load the page. Importing the component and passing it will load the page immediately.
    this.navCtrl.push('AboutPage', { message: 'Hello about page' });
  }
}
