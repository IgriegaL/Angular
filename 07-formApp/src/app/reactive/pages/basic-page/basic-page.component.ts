import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

const RTX5090 = {
  name: "Tarjeta RTX 5090",
  price: 1990,
  inStorage: 2
}
@Component({
  templateUrl: './basic-page.component.html',
  styles: [
  ]
})
export class BasicPageComponent implements OnInit {

  public myForm: FormGroup = this.fb.group({
    name: ["", [Validators.required, Validators.minLength(3)]],
    price: [0, [Validators.required, Validators.minLength(0)]],
    inStorage: [0, [Validators.required, Validators.minLength(0)]]
  });

  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
    this.myForm.reset(RTX5090)
  }

  isValidField(field: string): Boolean | null {
    return this.myForm.controls[field].errors
      && this.myForm.controls[field].touched;
  }
  getFieldError(field: string): string | null {
    if (!this.myForm.controls[field]) return null;
    const errors = this.myForm.controls[field].errors || {};
    for (const key of Object.keys(errors)) {
      switch (key) {
        case "required":
          return "Este campo es requerido ";
        case "minlength":
          return `Mínimo ${errors['minlength']}`;
      }
    }
  }

  onSave(): void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    console.log(this.myForm.value);
    this.myForm.reset();
  }


}
