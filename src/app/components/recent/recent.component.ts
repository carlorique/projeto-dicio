import { Component, OnDestroy } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recent',
  templateUrl: './recent.component.html',
  styleUrls: ['./recent.component.css']
})
export class RecentComponent implements OnDestroy {
  recentSearches: any;
  private subscription: Subscription;

  constructor(private dataService: DataService) {
    this.subscription = this.dataService.getRecentSearches().subscribe(
      (data: any) => {
        this.recentSearches = data.recentSearches;
      },
      (error: any) => {
        console.error(error);
        // Trate o erro conforme necessário, como exibir uma mensagem para o usuário.
      }
    );
  }

  ngOnDestroy(): void {
    // Certifique-se de cancelar a assinatura quando o componente for destruído
    this.subscription.unsubscribe();
  }
}
