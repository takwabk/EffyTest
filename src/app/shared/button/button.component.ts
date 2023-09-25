import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  standalone: true,
})
export class ButtonComponent {
  @Input() label = '';
  @Input() type = '';
  @Input() disabled = false;
  @Output() submitForm = new EventEmitter<any>();

  onSubmitForm(event: any) {
    this.submitForm.emit(event);
  }
}
