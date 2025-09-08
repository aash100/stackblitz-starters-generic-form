import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelloRoutingModule } from './hello-routing-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [CommonModule, HelloRoutingModule],
})
export class HelloModule {}
