import { Component, signal } from "@angular/core";

@Component({
    templateUrl: './counter-page.component.html',
    styles:`button{
      padding: 10px ;
      margin: 5px 10px;
      width: 100px;
      background-color: #f1f1f1;
      border: 1px solid #ccc;
    }`,
})

export class CounterPageComponent {

  counter=0;

  counterSignal = signal(10);

  increaseBy(value:number){
    this.counter+=value;
    // this.counterSignal.set(this.counterSignal() +value);
    this.counterSignal.update((prev)=>prev+value);
  }

  resetCounter(){
    this.counter=0;
    this.counterSignal.set(0);
  }
}
