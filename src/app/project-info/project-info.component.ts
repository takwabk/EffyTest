import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { PersonalInfoService } from '../personal-info.service';
import { Router } from '@angular/router';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.css'],
})
export class ProjectInfoComponent {
  projectInfoForm!: FormGroup;

  private service = inject(PersonalInfoService);
  private router = inject(Router);

  constructor(private fb: FormBuilder) {
    this.projectInfoForm = this.fb.group({
      isOwner: [false, Validators.required],
      householdSize: ['', Validators.required],
      householdIncome: [
        '',
        [Validators.required, Validators.min(3), Validators.max(10000)],
      ],
      propertyArea: ['', Validators.required],
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
