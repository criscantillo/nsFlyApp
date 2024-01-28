import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
  
@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  private url = 'https://localhost:7099/currency';
   
  constructor(private httpClient: HttpClient) { }
  
  getCurrencies(){
    return this.httpClient.get(this.url);
  }
}