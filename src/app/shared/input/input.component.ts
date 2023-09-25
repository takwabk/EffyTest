import { CommonModule } from '@angular/common';
import { Component, Input, Self } from '@angular/core';
import {
  ControlValueAccessor,
  NgControl,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'shared-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
})
export class InputComponent implements ControlValueAccessor {
  @Input() label = '';
  @Input() placeholder = '';
  @Input() type = '';
  @Input() maxlength = '';
  @Input() min = '';
  constructor(@Self() public ngControl: NgControl) {
    this.ngControl.valueAccessor = this;

    console.log(this.ngControl.control);
  }

  writeValue(obj: any): void {
    return obj;
  }
  registerOnChange(fn: any): void {
    return fn;
  }
  registerOnTouched(fn: any): void {
    return fn;
  }

  get control() {
    return this.ngControl.control as FormControl;
  }
  clear() {
    this.control.setValue('');
  }
}
