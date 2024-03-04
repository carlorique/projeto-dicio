import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-palavra',
  templateUrl: './palavra.component.html',
  styleUrls: ['./palavra.component.css']
})
export class PalavraComponent {

  palavra: string = '';
  result: any;

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
      this.displayResult();
    } catch (error) {
      console.error(error);
      alert('Erro ao buscar informações da palavra.');
    }
  }

  displayResult() {
    const resultContainer = document.getElementById('resultContainer');

    if (!resultContainer) {
      alert('Elemento resultContainer não encontrado.');
      return;
    }

    resultContainer.innerHTML = '';

    if (!this.result) {
      alert('Nenhum resultado encontrado.');
      return;
    }

    const heading = document.createElement('h2');
    heading.textContent = `Palavra: ${this.result.word}`;
    resultContainer.appendChild(heading);

    const meaningContainer = this.createPropertyContainer('Significado', this.result.meaning);
    const additionalInfoContainer = this.createPropertyContainer('Informações Adicionais', this.result.additionalInfo);
    const phrasesContainer = this.createPropertyContainer('Frases', this.result.phrases);

    resultContainer.appendChild(meaningContainer);
    resultContainer.appendChild(additionalInfoContainer);
    resultContainer.appendChild(phrasesContainer);
  }

  private createPropertyContainer(label: string, value: string) {
    const container = document.createElement('div');
    container.classList.add('property');

    const labelElement = document.createElement('strong');
    labelElement.textContent = `${label}: `;
    container.appendChild(labelElement);

    const valueElement = document.createElement('span');
    valueElement.textContent = value;
    container.appendChild(valueElement);

    return container;
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
