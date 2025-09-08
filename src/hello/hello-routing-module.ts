import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Hello } from './hello/hello';

const routes: Routes = [
  {
    path: '',
    component: Hello,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HelloRoutingModule {}
