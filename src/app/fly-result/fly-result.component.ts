import { Component, EventEmitter, Input,  Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-fly-result',
  standalone: true,
  imports: [],
  templateUrl: './fly-result.component.html',
  styleUrl: './fly-result.component.css'
})
export class FlyResultComponent {
  journeyData:any;
  flights:any = [];
  totalPrice:Number=0;
  noData:boolean=false;

  @Input() searchFlight:any= {};
  @Output() changeCurrency = new EventEmitter<string>();

  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      if(propName === 'searchFlight'){
        this.journeyData = changes[propName].currentValue;
        if(this.journeyData){
          let journey = this.journeyData.journey;
          this.flights = journey.flights;
          this.totalPrice = journey.price;
          this.noData = this.flights.length == 0;
        }
      }
    }
  }

  changeFlightCurrency(currency:string): void {
    this.changeCurrency.emit(currency);
  }
}
