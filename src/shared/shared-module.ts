import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyForm } from './components/my-form/my-form';

@NgModule({
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [MyForm],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [MyForm],
})
export class SharedModule {}
