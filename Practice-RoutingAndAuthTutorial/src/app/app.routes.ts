import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

// Route Configuration
export const routes: Routes = [
	{
	    path: '',
	    component: HomeComponent 
  	},
 	{ path: 'product-list', component: ProductListComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);