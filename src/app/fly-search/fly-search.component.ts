import { Component, EventEmitter, Output, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-fly-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './fly-search.component.html',
  styleUrl: './fly-search.component.css'
})
export class FlySearchComponent {
  departure:string = '';
  arrive:string= '';
  validInput:boolean = false;
  messageError:string='';

  @Output() sendSearch = new EventEmitter<any>();

  validateInput(){
    if(this.departure === '' || this.arrive === ''){
      this.validInput = false;
      this.messageError = 'Debes indicar un origen y un destino';
    }else if(this.departure.length < 3 || this.arrive.length < 3){
      this.validInput = false;
      this.messageError = 'El origen y el destino debe tener 3 caracteres';
    }else if(this.departure.toUpperCase() === this.arrive.toUpperCase()){
      this.validInput = false;
      this.messageError = 'El origen y el destino no pueden ser iguales';
    }else{
      this.validInput = true;
    }
  }

  sendSearchFly(): void {
    this.validateInput();

    if(this.validInput){
      let searchData = {
        departure: this.departure.toUpperCase(),
        arrive: this.arrive.toUpperCase()
      };
  
      this.sendSearch.emit(searchData);
    }
  }
}
