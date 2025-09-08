import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { SharedModule } from '../../shared/shared-module';

@Component({
  selector: 'app-product-list',
  imports: [SharedModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProductList {
  myForm: FormGroup = new FormGroup({
    name: new FormControl('Ak', Validators.required),
    lastName: new FormControl('', Validators.required),
    address: new FormControl('', Validators.maxLength(50)),
  });
}
