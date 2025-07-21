import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './shared/modules/material.module';
import { BankCardComponent } from './bank-card/bank-card.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { CompareMainComponent } from './components/compare-main/compare-main.component';
import { CompareListComponent } from './components/compare-list/compare-list.component';
import { ConnectedUserComponent } from './components/connected-user/connected-user.component';
import { LeftMenuComponent } from './shared/components/left-menu/left-menu.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { DevisComponent } from './components/devis/devis.component';
import { BanqueComponent } from './components/banque/banque.component';

@NgModule({
  declarations: [
    AppComponent,
    BankCardComponent,
    HeaderComponent,
    FooterComponent,
    CompareMainComponent,
    CompareListComponent,
    ConnectedUserComponent,
    LeftMenuComponent,
    DashboardComponent,
    NotFoundComponent,
    DevisComponent,
    BanqueComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule,
    FormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
