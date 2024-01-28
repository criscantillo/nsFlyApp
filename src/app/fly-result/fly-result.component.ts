import { Component, Input,  OnInit, SimpleChanges } from '@angular/core';
import { CurrencyService } from '../services/currency.service';

@Component({
  selector: 'app-fly-result',
  standalone: true,
  imports: [],
  templateUrl: './fly-result.component.html',
  styleUrl: './fly-result.component.css'
})
export class FlyResultComponent implements OnInit {
  journeyData:any;
  flights:any = [];
  totalPrice:Number=0;
  noData:boolean=false;
  currencyData:any;
  currencies:any=[];
  currentCurrency='USD';
  currencySelected:any;

  constructor(
    private currencyService: CurrencyService
    ) {}
  
  ngOnInit(): void {
    this.getCurrencies();
  }

  @Input() searchFlight:any= {};

  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      if(propName === 'searchFlight'){
        this.journeyData = changes[propName].currentValue;
        if(this.journeyData){
          let journey = this.journeyData.journey;
          journey.flights.forEach((f:any) => {
            f.priceShow = this.convertCurrency(f.price, this.currencySelected.rate);
          });

          this.flights = journey.flights;
          this.totalPrice = this.convertCurrency(journey.price, this.currencySelected.rate);
          this.noData = this.flights.length == 0;
        }
      }
    }
  }

  changeFlightCurrency(currencySelected:any): void {
    this.currencies.forEach((c:any) => {
      c.selected = false;
    });
    currencySelected.selected = true;
    this.currentCurrency = currencySelected.currency;
    this.currencySelected = currencySelected;
    
    this.flights.forEach((f:any) => {
      f.priceShow = this.convertCurrency(f.price, currencySelected.rate);
    });
    this.totalPrice = this.convertCurrency(this.journeyData.journey.price, this.currencySelected.rate);
  }

  convertCurrency(price:number, rate:number): number{
    let priceConverted:number = price*rate;
    return Number(priceConverted.toFixed(2));
  }

  getCurrencies(){
    this.currencyService.getCurrencies()
    .subscribe(response => {
      this.currencyData = response;
      
      for(let c in this.currencyData.data){
        let rate = this.currencyData.data[c];
        let currency = {'currency':c, 'selected':false, 'rate': rate};

        if(c == this.currentCurrency){
          currency.selected = true;
          this.currencySelected = currency;
        }

        this.currencies.unshift(currency);
      }
    });
  }
}
