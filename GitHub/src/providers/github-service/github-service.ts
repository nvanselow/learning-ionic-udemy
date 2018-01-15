import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { User } from '../../models/user.interface';
import { USER_LIST } from '../../mocks/user.mocks';

@Injectable()
export class GithubServiceProvider {
  private baseUrl: string = 'https://api.github.com/users';

  constructor(private http: Http) {
    console.log('Hello GithubServiceProvider Provider');
  }

  mockGetUserInformation(username: string): Observable<User> {
    return Observable.of(USER_LIST.find(user => user.name === username));
  }

  getUserInformation(username: string): Observable<User> {
    return this.http
      .get(`${this.baseUrl}/${username}`)
      .do((data: Response) => console.log(data.json()))
      .map((data: Response) => data.json())
      .catch((error: Response) =>
        Observable.throw(error.json().error || 'Server error.'),
      );
  }
}
