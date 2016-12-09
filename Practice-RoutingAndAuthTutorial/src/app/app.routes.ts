import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { AuthGuard } from './auth/auth-guard.service';


import { ProductListComponent } from './product-list/product-list.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

// Route Configuration
export const routes: Routes = [
	{
	    path: '',
	    component: HomeComponent 
  	},
 	{ path: 'product-list', 
 	  component: ProductListComponent,
 	  canActivate: [AuthGuard] 
 	},
 	{ path: 'login', component: LoginComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
