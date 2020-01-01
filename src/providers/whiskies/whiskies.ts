import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the WhiskiesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WhiskiesProvider {
  private API_URL = 'http://localhost:8080/api';

  constructor(public http: HttpClient) {
    console.log('Hello WhiskiesProvider Provider');
  }
  getWhiskiesFromApi(){
    const URL = `${this.API_URL}/whiskies`;
    return this.http.get(URL);
  }
  setNewWhiskies(data){
    const URL =  `${this.API_URL}/whiskies`;
    const body = JSON.stringify(data);
    const options = {
      headers : new HttpHeaders({
        'Content-Type':  'application/json'
      })
    }
    return this.http.post(URL, body, options)
  }
  getWhiskiesFromApiByDate(data){
    const URL = `${this.API_URL}/getwhiskiesByDate`;
    const body = JSON.stringify(data);
    const options = {
      headers : new HttpHeaders({
        'Content-Type':  'application/json'
      })
    }
    return this.http.post(URL, body, options)
  }
}
