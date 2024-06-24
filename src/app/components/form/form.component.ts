import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Meal } from '../../pages/home/meal.model';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  @Output() formEvent = new EventEmitter();
  mealForm: FormGroup;
  meal: Meal [] = [];
  constructor(private fb : FormBuilder) {
    this.mealForm = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      cal: ['', Validators.required],
      date: [''],
    });
  }

sendForm() {
  if(this.mealForm.valid){
    console.log("funciona formulario", this.mealForm.value)
    const newMeal: Meal ={
      id: this.mealForm.value.id,
      name: this.mealForm.value.name,
      cal: this.mealForm.value.cal,
      date: this.mealForm.value.date,
    }
    this.formEvent.emit(newMeal);
    this.mealForm.reset();
  } else{
    console.log("no funciona formulario")
  }
}

}
