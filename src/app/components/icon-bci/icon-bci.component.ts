import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-bci',
  templateUrl: './icon-bci.component.html',
  styleUrls: ['./icon-bci.component.scss'],
})
export class IconBciComponent {
  @Input() label: string = '';
  @Input() classIcon: string = '';
}
