import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
  public forecasts: WeatherForecast[];


  // TODO: Must have his own service
  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {

    const fullApi = baseUrl + 'api/SampleData/WeatherForecasts'; // TODO: don t need baseUrls any more
    const apiWeatherForecasts = 'api/SampleData/WeatherForecasts';
    alert(fullApi);
    http.get<WeatherForecast[]>(apiWeatherForecasts).subscribe(result => {
      this.forecasts = result;
    }, error => console.error(error));
  }
}

interface WeatherForecast {
  dateFormatted: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}
