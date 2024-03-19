import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  palavra: string = '';
  result: any;
  Caipora: string = 'assets/img/logo_caipora.jpg';

  constructor(private http: HttpClient) { }

  async searchWord() {
    if (!this.palavra) {
      alert('Por favor, digite uma palavra.');
      return;
    }

    try {
      const encodedWord = encodeURIComponent(this.palavra);
      const response = await this.http.get(`http://localhost:3000/search/${encodedWord}`).toPromise();
      this.result = response;
      console.log(this.result); // Verifica se os resultados foram obtidos corretamente
    } catch (error) {
      console.error(error);
      alert('Erro ao buscar informações da palavra.');
    }
  }

  speakWord() {
    if (!this.palavra) {
      alert('Por favor, digite uma palavra.');
      return;
    }

    const speechSynthesis = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(this.palavra);

    speechSynthesis.speak(utterance);
  }
}
