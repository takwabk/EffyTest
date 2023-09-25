import { CanActivateFn } from '@angular/router';

export const formGuard: CanActivateFn = (route, state) => {
  if (route) {
    const confirmation = confirm(
      'You have some unsaved detaials. Are you sure to go back ?'
    );
    if (confirmation) {
      return true;
    } else {
      return false;
    }
  }
  return true;
};
