import { Injectable } from '@angular/core';
import { SettingsService } from './settings.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Today } from '../components/today-component/today.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private settings: SettingsService,
      private httpClient: HttpClient) { }

  getPriceMulti(): Observable<Today> {
    return this.httpClient.get<Today>(`${this.settings.apiUrl}/pricemulti?fsyms=BTC,ETH,LTC&tsyms=USD&api_key=${this.settings.apiKey}`);
  }

  getHistoryByFSymbol(fsym, date): Observable<any> {
    return this.httpClient.get(`${this.settings.apiUrl}/pricehistorical?fsym=${fsym}&tsyms=USD&ts=${date}&api_key=${this.settings.apiKey}`);
  }
}
