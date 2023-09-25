import { Component, computed, effect, inject } from '@angular/core';
import { PersonalInfoService } from '../personal-info.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css'],
})
export class SummaryComponent {
  private service = inject(PersonalInfoService);

  personalInfos = this.service.personalInfo;
  projectInfos = this.service.projectInfo;
  constructor() {
    effect(() => {});
  }

  message = computed(
    () =>
      `Merci ${this.personalInfos()?.civility} ${
        this.personalInfos()?.lastName
      } ${this.personalInfos()?.firstName}  `
  );

  nonEligible = !this.projectInfos()?.isOwner
    ? computed(() => 'Merci Vous netes pas eligible')
    : computed(() => `${this.projectInfos()!.propertyArea * 80}$`);
  projectCost = this.projectInfos()!.propertyArea * 80;
  calculateEffyAid(): number {
    if (this.projectInfos()!.isOwner) {
      const householdSize = this.projectInfos()!.householdSize;
      return Math.max(
        0,
        this.projectCost * 0.75 -
          (this.projectInfos()!.householdIncome / householdSize) * 0.15
      );
    }
    return 0;
  }
  // montant======
  // montant()
}
