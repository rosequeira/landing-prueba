import { Component, Input } from '@angular/core';
export type Tipo = 'red' | 'green' | 'blue';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() tipo: Tipo = 'red';
  @Input() label: string = '';
}
