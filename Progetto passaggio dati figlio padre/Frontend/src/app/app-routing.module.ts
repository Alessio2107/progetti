import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';

const routes: Routes = [{ path: '', component: HomeComponent },
{ path: 'catalog', component: CatalogComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
