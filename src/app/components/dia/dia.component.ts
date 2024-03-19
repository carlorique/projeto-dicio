import { Component, OnInit } from '@angular/core';
import { DayService } from 'src/app/services/day.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dia',
  templateUrl: './dia.component.html',
  styleUrls: ['./dia.component.css']
})
export class DiaComponent implements OnInit {
  wordOfTheDay!: string;
  wordOfTheDay$!: Observable<string>;

  constructor(private dayService: DayService) { }

  ngOnInit(): void {
    this.wordOfTheDay$ = this.dayService.getWordOfTheDay();
    this.wordOfTheDay$.subscribe(word => this.wordOfTheDay = word);
  }
}