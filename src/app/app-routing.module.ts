import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RecentComponent } from './components/recent/recent.component'; // Importe o componente RecentComponent

const routes: Routes = [
  { path: '', component: HomeComponent }, // Rota padrão para o componente HomeComponent
  { path: 'recent', component: RecentComponent } // Rota para o componente RecentComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
