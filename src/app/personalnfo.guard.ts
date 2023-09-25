import { CanActivateFn, Router } from '@angular/router';
import { PersonalInfoService } from './personal-info.service';
import { inject } from '@angular/core';

export const personalnfoGuard: CanActivateFn = (route, state) => {
  console.log('route', route);
  console.log('state', state);
  let service = inject(PersonalInfoService);
  const personalInfo = route.component;
  if (personalInfo && service.isFormsValide) {
    return true;
  }
  //else {
  //   state.navigate(['/personal']); // Rediriger vers la page 'personal' s'il n'a pas saisi les informations nécessaires
  //   return false; // Empêcher l'accès à la page
  // }
  return false;
};
