import { Route, Routes } from '@angular/router';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { ProjectInfoComponent } from './project-info/project-info.component';
import { SummaryComponent } from './summary/summary.component';
import { personalnfoGuard } from './personalnfo.guard';

export const routes: Route[] = [
  {
    path: 'project',
    component: ProjectInfoComponent,
    canActivate: [personalnfoGuard],
  },
  {
    path: '',
    component: PersonalInfoComponent,
    pathMatch: 'full',
  },
  {
    path: 'summary',
    component: SummaryComponent,
    canActivate: [personalnfoGuard],
  },
  //PAGE NOT FOOUND
  {
    path: '**',
    redirectTo: '',
  },
];
