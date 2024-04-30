import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CaissierDashboardComponent } from './caissier-dashboard/caissier-dashboard.component';
import { GerantDashboardComponent } from './gerant-dashboard/gerant-dashboard.component';
import { PageStatistiquesComponent } from './pages/page-statistiques/page-statistiques.component';
import { MenuComponent } from './composants/menu/menu.component';
import { HeaderComponent } from './composants/header/header.component';
import { PageArticleComponent } from './pages/articles/page-article/page-article.component';
import { DetailArticleComponent } from './composants/detail-article/detail-article.component';
import { ButtonActionComponent } from './composants/button-action/button-action.component';
import { AjouterArticleComponent } from './pages/articles/ajouter-article/ajouter-article.component';
import { PageCategorieComponent } from './pages/catégories/page-categorie/page-categorie.component';
import { NouvelleCategorieComponent } from './pages/catégories/nouvelle-categorie/nouvelle-categorie.component';
import { DetailCategorieComponent } from './composants/detail-categorie/detail-categorie.component';


@NgModule({
  declarations: [
    AppComponent,
    CaissierDashboardComponent,
    GerantDashboardComponent,
    PageStatistiquesComponent,
    MenuComponent,
    HeaderComponent,
    PageArticleComponent,
    DetailArticleComponent,
    ButtonActionComponent,
    AjouterArticleComponent,
    PageCategorieComponent,
    NouvelleCategorieComponent,
    DetailCategorieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
