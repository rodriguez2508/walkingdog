import { Component } from '@angular/core';

// Definir la interfaz personInterface
interface personInterface {
  ID: number;
  namePerson: string;
}

@Component({
  selector: 'app-showuser',
  standalone: true,
  imports: [],
  templateUrl: './showuser.component.html',
  styleUrl: './showuser.component.scss'
})
export class ShowuserComponent {

  // Crear una lista de personas en formato JSON
listPersons: personInterface[] = [
  { ID: 1, namePerson: "Osmain Rodriguez" },
  { ID: 2, namePerson: "Joan Rodriguez" },
  { ID: 3, namePerson: "Jean Carlos Rodriguez" }
];

  constructor(){

  }

}
