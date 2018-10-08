import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the WeatherServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WeatherServiceProvider {
  private data: any;

  constructor(public http: HttpClient) {
  }

  load(city: String) {
    let url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=c3187c0553a174016faab0552047e7fb&lang=es&units=metric'
    return new Promise((resolve,reject) => {
      this.http.get(url)
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        }, err => {
          reject(err);
        });
    });
  }

}
