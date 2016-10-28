import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { HttpModule, JsonpModule }  from '@angular/http';
import { ProductListComponent } from './product-list.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule, JsonpModule ],
  declarations: [ AppComponent, ProductListComponent ],
  bootstrap:    [ AppComponent ]

})
export class AppModule { }
