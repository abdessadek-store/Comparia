import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { CompareMainComponent } from './components/compare-main/compare-main.component';
import { DevisComponent } from './components/devis/devis.component';
import { BanqueComponent } from './components/banque/banque.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'compare-main', component: CompareMainComponent },
  { path: 'devis', component: DevisComponent },
  { path: 'bank', component: BanqueComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }, // Optional: 404 handling
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
