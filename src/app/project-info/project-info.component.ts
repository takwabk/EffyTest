import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { PersonalInfoService } from '../personal-info.service';
import { Router, RouterModule } from '@angular/router';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from '../shared/title/title.component';
import { ButtonComponent } from '../shared/button/button.component';
import { InputComponent } from '../shared/input/input.component';

@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    TitleComponent,
    ButtonComponent,
    InputComponent,
  ],
})
export class ProjectInfoComponent {
  projectInfoForm!: FormGroup;

  private service = inject(PersonalInfoService);
  private router = inject(Router);

  constructor(private fb: FormBuilder) {
    let initValue = this.service.projectInfo();
    this.projectInfoForm = this.fb.group({
      isOwner: [initValue?.isOwner],
      householdSize: [initValue?.householdSize, Validators.required],
      householdIncome: [
        initValue?.householdIncome,
        [Validators.required, Validators.min(3), Validators.max(10000)],
      ],
      propertyArea: [initValue?.propertyArea, Validators.required],
    });
  }

  get isOwner() {
    return this.projectInfoForm.get('isOwner');
  }

  get householdSize() {
    return this.projectInfoForm.get('householdSize');
  }

  get householdIncome() {
    return this.projectInfoForm.get('householdIncome');
  }

  get propertyArea() {
    return this.projectInfoForm.get('propertyArea');
  }
  onSubmit() {
    if (this.projectInfoForm.valid) {
      console.log('Project Info Form submitted:', this.projectInfoForm.value);
      this.service.setProjectInfo(this.projectInfoForm.value);
      this.router.navigate(['/summary']);
      this.projectInfoForm.reset();
    }
  }
}
