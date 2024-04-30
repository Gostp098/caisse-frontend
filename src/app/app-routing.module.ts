import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaissierDashboardComponent } from './caissier-dashboard/caissier-dashboard.component';
import { GerantDashboardComponent } from './gerant-dashboard/gerant-dashboard.component';
import { PageStatistiquesComponent } from './pages/page-statistiques/page-statistiques.component';
import { PageArticleComponent } from './pages/articles/page-article/page-article.component';
import { AjouterArticleComponent } from './pages/articles/ajouter-article/ajouter-article.component';
import { NouvelleCategorieComponent } from './pages/catégories/nouvelle-categorie/nouvelle-categorie.component';
import { PageCategorieComponent } from './pages/catégories/page-categorie/page-categorie.component';


const routes: Routes = [
  { 
    path: 'caissier-dashboard',
     component: CaissierDashboardComponent
     },

  {
     path: '', 
     component: GerantDashboardComponent ,
children:[
  {
  path:'statistiques',
   component:PageStatistiquesComponent
  },
  {
    path:'articles',
     component:PageArticleComponent
    },
    {
      path:'ajouterArticle',
      component:AjouterArticleComponent
    },
    {
      path:'categories',
      component:PageCategorieComponent
    },
    {
      path:'nouvelleCategorie',
      component:NouvelleCategorieComponent
    }
  ]

  },
  { path: '', redirectTo: '/dashboard-gerant', pathMatch: 'full' } // Rediriger vers le tableau de bord du gerant par défaut
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
