import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GithubServiceProvider } from '../../providers/github-service/github-service';
import { User } from '../../models/user.interface';

@IonicPage()
@Component({
  selector: 'page-profile-search-results',
  templateUrl: 'profile-search-results.html',
})
export class ProfileSearchResultsPage {
  username: string;
  user: User;

  constructor(
    public github: GithubServiceProvider,
    public navCtrl: NavController,
    public navParams: NavParams,
  ) {}

  ionViewWillLoad() {
    this.username = this.navParams.get('username');
    if (this.username) {
      this.getUserInformation();
    }
  }

  getUserInformation(): void {
    this.github
      .getUserInformation(this.username)
      .subscribe((data: User) => (this.user = data));
    // this.github
    //   .mockGetUserInformation(this.username)
    //   .subscribe((data: User) => (this.user = data));
  }
}
