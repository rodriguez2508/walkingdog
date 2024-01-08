import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

// Definir la interfaz personInterface
interface personInterface {
  ID: number;
  namePerson: string;
}
@Component({
  selector: 'app-showlist',
  standalone: true,
  imports: [],
  templateUrl: './showlist.component.html',
  styleUrl: './showlist.component.scss'
})
export class ShowlistComponent {

  // Obtener la lista de personas
  listPersons: personInterface[] = [
    { ID: 1, namePerson: "Osmain Rodriguez" },
    { ID: 2, namePerson: "Jean Carlos Rodriguez" },
    { ID: 3, namePerson: "Joan Rodriguez" }
  ];

  // Obtener todos los días del mes actual
  today: Date = new Date();
  year: number = this.today.getFullYear();
  month: number = this.today.getMonth();
  daysInMonth: Date[] = [];
  personXMonth: string[] = [];
  afortunadoXtoday: string = "";
  afortunadoXtomorrow: string = "";

  constructor() {
    console.log(this.month)
    this.getDaysInMonth(this.month, this.year);
  }
  // Función para obtener todos los días del mes
  getDaysInMonth(month: number = this.month, year: number = this.year) {

    for (let day = 1; day <= new Date(year, month + 1, 0).getDate(); day++) {
      this.daysInMonth.push(new Date(year, month, day));
    }

    // Mostrar el día de la semana junto con el nombre de la persona correspondiente
    let i = 0;
    this.daysInMonth.forEach(day => {

      let personIndex = this.daysInMonth.indexOf(day) % this.listPersons.length;
      let person = this.listPersons[personIndex];
      // console.log();

      if ((i+1) == new Date().getDate()) this.afortunadoXtoday = person.namePerson;
      if ((i+1) == (new Date().getDate() + 1)) this.afortunadoXtomorrow = person.namePerson;
      this.personXMonth[i] = day.toLocaleDateString('es-ES', { weekday: 'long' }) + ' ' + ( i + 1 ) +": " + person.namePerson;
      // console.log(day.toLocaleDateString('es-ES', { weekday: 'long' }) + ": " + person.namePerson);
      i++;
    });

    return this.personXMonth;
  }

}
