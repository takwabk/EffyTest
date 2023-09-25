import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css'],
  standalone: true,
})
export class TitleComponent {
  @Input() title = '';
}
