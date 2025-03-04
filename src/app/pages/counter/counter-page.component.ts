import { ChangeDetectionStrategy, Component, signal } from "@angular/core";

@Component({
    templateUrl: './counter-page.component.html',
    styles:`button{
      padding: 10px ;
      margin: 5px 10px;
      width: 100px;
      background-color: #f1f1f1;
      border: 1px solid #ccc;
    }`,
  changeDetection: ChangeDetectionStrategy.OnPush, //Sirve para que no se mantenga en sincronía con el ciclo de detección de cambios de Angular

})

export class CounterPageComponent {

  counter=0;

  counterSignal = signal(10);

  // constructor() {
  //   setInterval(() => {
  //     // this.counter++;
  //     this.counterSignal.update((currentValue)=>currentValue+1);
  //     console.log('Tick');
  //   },2000);
  // }



  increaseBy(value:number){
    this.counter+=value;
    // this.counterSignal.set(this.counterSignal() +value);
    this.counterSignal.update((currentValue)=>currentValue+value);
  }

  resetCounter(){
    this.counter=0;
    this.counterSignal.set(0);
  }
}
