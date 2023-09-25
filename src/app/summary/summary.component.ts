import { Component, computed, effect, inject } from '@angular/core';
import { PersonalInfoService } from '../personal-info.service';
import { CommonModule } from '@angular/common';
import { TitleComponent } from '../shared/title/title.component';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css'],
  standalone: true,
  imports: [CommonModule, TitleComponent],
})
export class SummaryComponent {
  private service = inject(PersonalInfoService);

  personalInfos = this.service.personalInfo;
  projectInfos = this.service.projectInfo;

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
}
