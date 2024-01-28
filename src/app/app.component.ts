import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FlySearchComponent } from './fly-search/fly-search.component';
import { FlyResultComponent } from './fly-result/fly-result.component';
import { CurrencyService } from './services/currency.service';
import { FlySearchService } from './services/fly-search.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, FlySearchComponent, FlyResultComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  currencies:any;
  flights:any;
  rotatePlaneClass='';
  title = 'nsFlyApp';

  constructor(
    private currencyService: CurrencyService,
    private flyService: FlySearchService
    ) {}

  ngOnInit(): void {
    this.getCurrencies();
  }

  getCurrencies(){
    this.currencyService.getCurrencies()
    .subscribe(response => {
      this.currencies = response;
    });
  }

  getFlights(searchData: any){
    this.rotatePlaneClass = 'rotate-plane';

    this.flyService.searchFly(searchData)
    .subscribe(response => {
      this.flights = response;
      this.rotatePlaneClass = '';
    });
  }

  convertCurrency(currency: string): void{
    console.log(this.currencies.data[currency]);
  }

  searchFlight(searchData: any){
    this.getFlights(searchData);
  }
}
