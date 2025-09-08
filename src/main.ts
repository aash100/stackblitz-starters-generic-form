import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, RouterOutlet } from '@angular/router';
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <h1>Hello from {{ name }}!</h1>
    <router-outlet></router-outlet>
    <!-- <a target="_blank" href="https://angular.dev/overview">
      Learn more about Angular
    </a> -->
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App, { providers: [provideRouter(routes)] });
