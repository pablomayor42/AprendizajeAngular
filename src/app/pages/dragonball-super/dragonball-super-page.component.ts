import { NgClass } from "@angular/common";
import { Component, computed, signal } from "@angular/core";
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list.component";
import { CharacterAddComponent } from "../../components/dragonball/character-add/character-add.component";


interface Character {
  id:number;
  name:string;
  power:number;
}


@Component({
    templateUrl: './dragonball-super-page.component.html',
    imports: [CharacterListComponent, CharacterAddComponent],
    //imports: [NgClass],
})

export class DragonballSuperPageComponent {

  name = signal<string>('');
  power = signal<number>(0);

  characters = signal<Character[]>([
    {id:1, name:'Goku', power:15000},
    {id:2, name:'Vegeta', power:8500},
  ]);



  addCharacter(newCharacter : Character){
    this.characters.update((list) => [...list, newCharacter]);
  }

  resetFields(){
    this.name.set('');
    this.power.set(0);
  }


}
