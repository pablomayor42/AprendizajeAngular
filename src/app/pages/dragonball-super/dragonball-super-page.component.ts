import { NgClass } from "@angular/common";
import { Component, computed, inject, signal } from "@angular/core";
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list.component";
import { CharacterAddComponent } from "../../components/dragonball/character-add/character-add.component";
import { DragonballService } from "../../services/drangonball.service";


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

  public dragonballService: DragonballService = inject(DragonballService)


}
