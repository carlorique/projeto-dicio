import { Component } from '@angular/core';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  // Defindo os caminhos das imagens como propriedades
  Caio: string = '/assets/img/caio.jpg';
  Carlos: string = '/assets/img/carlos.jpeg';
  Luihza: string = '/assets/img/lulu.jpeg';
  Nickolas: string = '/assets/img/nickolas.jpg';
  Thiago: string = '/assets/img/thiago.jpg';
}
