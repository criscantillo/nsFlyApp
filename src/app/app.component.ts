import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FlySearchComponent } from './fly-search/fly-search.component';
import { FlyResultComponent } from './fly-result/fly-result.component';
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
export class AppComponent {
  currencies:any;
  flights:any;
  rotatePlaneClass='';

  constructor(private flyService: FlySearchService) {}

  getFlights(searchData: any){
    this.rotatePlaneClass = 'rotate-plane';

    this.flyService.searchFly(searchData)
    .subscribe(response => {
      this.flights = response;
      this.rotatePlaneClass = '';

      console.log(this.flights);
    });
  }

  convertCurrency(currency: string): void{
    console.log(this.currencies.data[currency]);
  }

  searchFlight(searchData: any){
    this.getFlights(searchData);
  }
}
