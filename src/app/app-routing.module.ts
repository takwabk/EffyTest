import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { ProjectInfoComponent } from './project-info/project-info.component';
import { SummaryComponent } from './summary/summary.component';
import { HeaderComponent } from './header/header.component';
import { formGuard } from './form.guard';

const routes: Routes = [
  {
    path: 'project',
    component: ProjectInfoComponent,
    canDeactivate: [formGuard],
  },
  {
    path: '',
    component: PersonalInfoComponent,
    pathMatch: 'full',
  },
  { path: 'summary', component: SummaryComponent },
  //PAGE NOT FOOUND
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
