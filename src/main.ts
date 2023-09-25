import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterOutlet, provideRouter } from '@angular/router';
import { PersonalInfoComponent } from './app/personal-info/personal-info.component';
import { ProjectInfoComponent } from './app/project-info/project-info.component';
import { SummaryComponent } from './app/summary/summary.component';
import { routes } from './app/routes';
import { HeaderComponent } from './app/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    PersonalInfoComponent,
    SummaryComponent,
    ProjectInfoComponent,
    HeaderComponent,
  ],

  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
  `,
})
export class App {}

bootstrapApplication(App, {
  providers: [provideRouter(routes)],
});
