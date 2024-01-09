 import { Component, OnInit } from '@angular/core';
 

// Definir la interfaz personInterface
interface personInterface {
  ID: number;
  namePerson: string;
}

@Component({
  selector: 'app-showuser',
  standalone: true,
  imports: [],
  providers:[],
  templateUrl: './showuser.component.html',
  styleUrl: './showuser.component.scss'
})
export class ShowuserComponent  {

  // Obtener la lista de personas
  listPersons: personInterface[] = [
    { ID: 1, namePerson: "Osmain Rodriguez" },
    { ID: 2, namePerson: "Jean Carlos Rodriguez" },
    { ID: 3, namePerson: "Joan Rodriguez" }
  ];


  currentDate: Date = new Date();
  daysInMonth: number[] = [];
  currentPersonIndex: number = 0;

  constructor() {
     
   }

  
 


}
