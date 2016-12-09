import { Component } from '@angular/core';
import { Product } from './product-list/product';
import './product-list/rxjs-operators';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [ AuthService ]
})
export class AppComponent {
  title = 'Bits Please';
  subtitle = 'Buy Our Stuff';

  constructor(private authService: AuthService) {}
}
