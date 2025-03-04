import { NgClass } from "@angular/common";
import { Component, computed, signal } from "@angular/core";
import { Character } from "../../interfaces/character.interface";

@Component({
    templateUrl: './dragonball-page.component.html',
    //imports: [NgClass],
})

export class DragonballPageComponent {

  name = signal<string>('Code-18');
  power = signal<number>(30000);

  characters = signal<Character[]>([
    {id:1, name:'Goku', power:15000},
  ]);



  addCharacter(){

    if(!this.name() || !this.power() || this.power()<=0) return;

    const newCharacter:Character = {
      id: this.characters().length + 1,
      name:this.name(),
      power:this.power()};

    this.characters.update((list) => [...list, newCharacter]);
    this.resetFields();
  }

  resetFields(){
    this.name.set('');
    this.power.set(0);
  }


}
