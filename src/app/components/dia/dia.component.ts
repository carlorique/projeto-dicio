import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dia',
  templateUrl: './dia.component.html',
  styleUrls: ['./dia.component.css']
})
export class DiaComponent implements OnInit {
  wordOfTheDay: string = '';
  firstWord: string = '';

  constructor() { }

  ngOnInit(): void {
    this.fetchWordOfTheDay();
  }

  fetchWordOfTheDay(): void {
    fetch('http://localhost:3000/dia')
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro ao buscar a palavra do dia.');
        }
        return response.text();
      })
      .then(data => {
        const startIndex = data.indexOf('Palavra do Dia') + 'Palavra do Dia'.length;

        // Captura a palavra do dia completa, removendo espaços em branco extras
        this.wordOfTheDay = data.substring(startIndex).trim();

        // Se o conteúdo não estiver vazio, captura a primeira palavra
        if (this.wordOfTheDay) {
          this.firstWord = this.wordOfTheDay.split(' ')[0];

          // Verifica se a primeira palavra foi capturada corretamente
          console.log('Primeira palavra capturada:', this.firstWord);
        }
      })
      .catch(error => {
        console.error('Erro:', error);
      });
  }

  speakFirstWord(): void {
    if (!this.firstWord) {
      alert('A primeira palavra está vazia.');
      return;
    }

    const utterance = new SpeechSynthesisUtterance(this.firstWord);

    speechSynthesis.speak(utterance);
  }
}
