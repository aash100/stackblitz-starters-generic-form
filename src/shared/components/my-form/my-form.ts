import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'my-form',
  templateUrl: './my-form.html',
  styleUrl: './my-form.css',
})
export class MyForm {
  myForm: FormGroup = new FormGroup({
    name: new FormControl('Ak', Validators.required),
    age: new FormControl('', Validators.required),
    address: new FormControl('', Validators.maxLength(2)),
  });

  submit(): void {
    console.log('Submit');
    if (this.myForm.valid) {
      alert('Success');
    }
  }
}
