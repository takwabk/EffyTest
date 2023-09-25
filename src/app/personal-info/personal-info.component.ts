import { Component, OnInit, inject } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { PersonalInfoService } from '../personal-info.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TitleComponent } from '../shared/title/title.component';
import { InputComponent } from '../shared/input/input.component';
import { ButtonComponent } from '../shared/button/button.component';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    TitleComponent,
    InputComponent,
    ButtonComponent,
  ],
})
export class PersonalInfoComponent implements OnInit {
  private service = inject(PersonalInfoService);
  private fb = inject(FormBuilder);
  private router = inject(Router);

  personalInfoForm!: FormGroup;
  ngOnInit() {
    let initValue = this.service.personalInfo();
    this.personalInfoForm = this.fb.group({
      civility: [initValue?.civility, Validators.required],
      lastName: [
        initValue?.lastName,
        [Validators.required, Validators.maxLength(50)],
      ],
      firstName: [
        initValue?.firstName,
        [Validators.required, Validators.maxLength(50)],
      ],
      email: [initValue?.email, [Validators.required, Validators.email]],
      phone: [
        initValue?.phone,
        [Validators.required, Validators.pattern(/^\d{10}$/)],
      ],
    });
  }

  get civility() {
    return this.personalInfoForm.get('civility');
  }

  get lastName() {
    return this.personalInfoForm.get('lastName');
  }

  get firstName() {
    return this.personalInfoForm.get('firstName');
  }

  get email() {
    return this.personalInfoForm.get('email');
  }

  get phone() {
    return this.personalInfoForm.get('phone');
  }

  onSubmit() {
    if (!this.personalInfoForm.valid) return;
    this.service.isFormsValide = true;
    console.log(this.personalInfoForm.value);
    this.service.setPersonalInfo(this.personalInfoForm.value);
    this.router.navigate(['/project']);
    //this.personalInfoForm.reset();
  }
}
