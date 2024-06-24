import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { FormComponent } from '../../components/form/form.component';
import { Meal } from './meal.model';

import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [HeaderComponent,
      FooterComponent,
      FormComponent,
      CommonModule,
    ]
})
export class HomeComponent {
disabledButtons: { [key: string]: boolean } = {};
buttonClasses: { [key: string]: string } = {}
meals: Meal[] = [
  {
    id: "1",
    name: 'Hamburguesa',
    cal: "1000",
    date: "June 17, 2023"
  },
  {
    id: "2",
    name: 'Pizza',
    cal: "1000",
    date: "June 17, 2023",
  },
  {
    id: "3",
    name: 'Ensalada',
    cal: "1000",
    date: "June 17, 2023",
  },
];


addMeal(meal: any) {
  console.log(meal, "Funciona add");
  meal.id = this.generarUUID();
  meal.date = this.obtenerFechaActual();
  this.meals.push(meal);
  }
  deleteMeal(meal: any) {
  console.log("Funciona delete", meal,meal.id);
  for (let i = 0; i < this.meals.length; i++) {
    if (meal.id === this.meals[i].id) {
      this.meals.splice(i, 1);
      i = this.meals.length;
    }
  }
  }
  dislike(meal: Meal) {
  this.disabledButtons[meal.id] = true;
  this.buttonClasses[meal.id] = "btn btn-danger btn-sm";
  }
  like(meal: Meal) {
    this.disabledButtons[meal.id] = true;
    this.buttonClasses[meal.id] = "btn btn-success btn-sm";
  }

  obtenerFechaActual(): string {
    const opciones: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date().toLocaleDateString('en-US', opciones);
  }

  generarUUID(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
}
