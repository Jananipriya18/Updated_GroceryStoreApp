import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemCatalogComponent } from './components/item-catalog/item-catalog.component';
import { HeaderComponent } from './components/header/header.component';
import { AddNewItemComponent } from './components/add-new-item/add-new-item.component';

const routes: Routes = [
  { path: 'item-catalog', component: ItemCatalogComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'add-new-item', component: AddNewItemComponent }, 
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
