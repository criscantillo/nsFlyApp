import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
  
@Injectable({
  providedIn: 'root'
})
export class FlySearchService {
  private url = 'https://localhost:7099/flight';
   
  constructor(private httpClient: HttpClient) { }
  
  searchFly(searchData: any){
    let url = `${this.url}?origin=${searchData.departure}&destination=${searchData.arrive}`;
    return this.httpClient.get(url);
  }
}