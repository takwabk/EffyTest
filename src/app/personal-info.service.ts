import { BehaviorSubject, Observable, Subject } from 'rxjs';
import {
  PersonalInfo,
  ProjectInfo,
} from './interfaces/personal-info.interface';
import { Injectable, computed, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PersonalInfoService {
  personalInfo = signal<PersonalInfo | null>(null);

  setPersonalInfo(info: PersonalInfo) {
    this.personalInfo.set(info);
  }

  projectInfo = signal<ProjectInfo | null>(null);

  setProjectInfo(info: ProjectInfo) {
    this.projectInfo.set(info);
  }
  isFormsValide = false;
}
