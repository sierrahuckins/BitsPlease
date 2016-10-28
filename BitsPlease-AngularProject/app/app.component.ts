import { Component } from '@angular/core';

import { Product } from './product';
import './rxjs-operators';

@Component({
	selector: 'my-app',
	template: `
		<h1>{{title}}</h1>
		<product-list></product-list>
	`
})
export class AppComponent {
	title = 'Angular is Ridiculous';

}

