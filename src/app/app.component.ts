import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'landing-bci';
  listIcon = [
    { label: 'Saldo', classIcon: 'im1' },
    { label: 'Transferencía', classIcon: 'im2' },
    { label: 'Pagos', classIcon: 'im3' },
    { label: 'Crédito', classIcon: 'im4' },
    { label: 'Tarjetas', classIcon: 'im5' },
    { label: 'Seguros', classIcon: 'im6' },
    { label: 'Cajeros y Sucursales', classIcon: 'im7' },
    { label: 'Más servicios', classIcon: 'im8' },
  ];
}
