import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { User } from '../interface/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private configUrl = ' ';
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: 'my-auth-token'
    })
  };

  constructor(private httpClient: HttpClient) { }

  getConfig() {
   return this.httpClient.get<Config>(this.configUrl);
  }

  loginApi(user: User): Observable<Hero> {
    
    httpOptions.headers =
  httpOptions.headers.set('Authorization', 'my-new-auth-token');

    return this.http.post<Hero>(this.configUrl, user, httpOptions)
      .pipe(
        catchError(this.handleError('user', user))
      );
  }
}
