import { Component } from '@angular/core';
import { Product } from './product-list/product';
import './product-list/rxjs-operators';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'Bits Please';
  subtitle = 'Buy Our Stuff';
}
