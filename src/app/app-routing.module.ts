import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaissierDashboardComponent } from './caissier-dashboard/caissier-dashboard.component';
import { GerantDashboardComponent } from './gerant-dashboard/gerant-dashboard.component';

const routes: Routes = [
  { path: 'dashboard-caissier', component: CaissierDashboardComponent },
  { path: 'dashboard-gerant', component: GerantDashboardComponent },
  { path: '', redirectTo: '/dashboard-caissier', pathMatch: 'full' } // Rediriger vers le tableau de bord du caissier par défaut
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
