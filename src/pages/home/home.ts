import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherServiceProvider } from '../../providers/weather-service/weather-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [WeatherServiceProvider]
})
export class HomePage {
  public city: String = '';
  public weather: any;
  private visible: Boolean = false;
  constructor(public navCtrl: NavController, public weatherService: WeatherServiceProvider) {
  }

  search(){
    this.weatherService.load(this.city).then( data => {
      this.visible = true;
      this.weather = data;
    }).catch(error => {
      this.visible = false;
    });
  }

}
