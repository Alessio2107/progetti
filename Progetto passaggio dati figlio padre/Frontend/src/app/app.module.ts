import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CatalogComponent } from './catalog/catalog.component';
import { HomeComponent } from './home/home.component';
import { PipePipe } from './pipe.pipe';
import { HttpClientModule } from '@angular/common/http';
import { PassaggioDatiComponent } from './passaggio-dati/passaggio-dati.component';

@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    HomeComponent,
    PipePipe,
    PassaggioDatiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
