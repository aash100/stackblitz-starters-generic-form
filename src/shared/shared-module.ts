import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyForm } from './components/my-form/my-form';

@NgModule({
  declarations: [MyForm],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [MyForm],
})
export class SharedModule {}
