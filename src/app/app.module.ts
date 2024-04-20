import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CaissierDashboardComponent } from './caissier-dashboard/caissier-dashboard.component';
import { GerantDashboardComponent } from './gerant-dashboard/gerant-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    CaissierDashboardComponent,
    GerantDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
