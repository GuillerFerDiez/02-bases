import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzModule } from '../dbz.module';
import { DbzService } from '../services/dbz.services';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {
  constructor(private dbzService: DbzService) { }
  get personajes(){
    return this.dbzService.personajes;
  }
  //@Input() personajes: Personaje[] = [];
}