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
  // private readonly personalInfoSubject = new Subject<PersonalInfo>();
  // getPersonalInfo$: Observable<PersonalInfo> =
  //   this.personalInfoSubject.asObservable();
  // setPersonalInfo(info: PersonalInfo) {
  //   this.personalInfoSubject.next(info);
  // }

  // private readonly projectInfoSubject = new Subject<PersonalInfo>();

  // setProjectInfo(info: PersonalInfo) {
  //   this.projectInfoSubject.next(info);
  // }

  // getProjectInfo() {
  //   return this.projectInfoSubject.asObservable();
  // }
  personalInfo = signal<PersonalInfo | null>(null);

  setPersonalInfo(info: PersonalInfo) {
    this.personalInfo.set(info);
  }

  projectInfo = signal<ProjectInfo | null>(null);

  setProjectInfo(info: ProjectInfo) {
    this.projectInfo.set(info);
  }
}
