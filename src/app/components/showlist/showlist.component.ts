import { Component, OnInit } from '@angular/core';
 
// Definir la interfaz personInterface
interface personInterface {
  ID: number;
  namePerson: string;
}
@Component({
  selector: 'app-showlist',
  standalone: true,
  imports: [],
  providers: [],
  templateUrl: './showlist.component.html',
  styleUrl: './showlist.component.scss'
})
export class ShowlistComponent implements OnInit {

  // -- Obtener la lista de personas
  // --
  listPersons: personInterface[] = [
    { ID: 1, namePerson: "Osmain Rodriguez" },
    { ID: 2, namePerson: "Jean Carlos Rodriguez" },
    { ID: 3, namePerson: "Joan Rodriguez" }
  ];
 
  // -- Obtener fechas actuales
  // --
  currentYear = new Date().getFullYear();
  currentMonth = new Date().getMonth();
  currentDay = new Date().getDate();
  nextDay:number = this.getNextDay();
   
  // -- crear la lista para mostrar de las personas X dias 
  // --
  personXMonth: string[] = [];
  dayXMonth: string[] = [];

  currentDate: Date = new Date();
  daysInMonth: number[] = []; 

  // -- Crear la persona que le toca sacar al perro el dia actual y siguiente
  // --
  afortunadoXtoday: string = "";
  afortunadoXtomorrow: string = "";

  constructor() {
  }



  ngOnInit(): void {
    // this.generateDaysInMonth();
    // this.setCurrentPerson();

    this.getDaysWithPersons();
    this.getNextDay();
  }


  generateDaysInMonth(): void {
    const daysInMonth = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 0).getDate();
    for (let i = 1; i <= daysInMonth; i++) {
      this.daysInMonth.push(i);
    }
  }

  // --------
  // --------
  // --------

  getDaysWithPersons(): void {
    for (let month = 0; month < 12; month++) {


      if (month == this.currentMonth) {

        const daysInMonth = new Date(this.currentYear, month + 1, 0).getDate();

        for (let day = 1; day <= daysInMonth; day++) {
          const totalDays = this.getDaysFromStart(month, day);
          const personIndex = totalDays % this.listPersons.length;
          const person = this.listPersons[personIndex];
          // console.log(`El día ${day} de ${this.getMonthName(month)} le toca a ${person.namePerson} sacar al perro.`);

          if (this.currentDate.getDate() - 1 == (day - 1)) this.afortunadoXtoday = `${this.listPersons[personIndex].namePerson}`

          if (this.currentDate.getDate() == (day - 1)) this.afortunadoXtomorrow = `${this.listPersons[personIndex].namePerson}`

          // -- Establece el dia y persona que le tocara sacar al perro para mostrarlo en la vista
          // --
          this.dayXMonth[day - 1] = `${day} de ${this.getMonthName(month)}`;
          this.personXMonth[day - 1] = `${person.namePerson}`;

        }
        break;

      }


    }
  }

  private getDaysFromStart(month: number, day: number): number {
    let totalDays = 0;
    for (let m = 0; m < month; m++) {
      const daysInMonth = new Date(this.currentYear, m + 1, 0).getDate();
      totalDays += daysInMonth;
    }
    totalDays += day - 1;
    return totalDays;
  }


  private getMonthName(month: number): string {
    const monthNames = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
    return monthNames[month];
  }


  getNextDay(): number {
    const currentDate = new Date(this.currentYear, this.currentMonth, this.currentDay);
    const nextDayTimestamp = currentDate.getTime() + 24 * 60 * 60 * 1000; // Agrega un día en milisegundos
    const nextDate = new Date(nextDayTimestamp);
  
    // Comprueba si cambió el mes y ajusta el día si es necesario
    if (nextDate.getMonth() !== this.currentMonth) {
      return new Date(this.currentYear, this.currentMonth + 1, 1).getDate(); // Primer día del mes siguiente
    } 
    return nextDate.getDate();
  }

  // --------
  // --------
  // --------



 


}
