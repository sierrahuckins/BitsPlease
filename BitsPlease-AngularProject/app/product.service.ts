import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Product } from './product';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductService {
	private productsUrl = 'http://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2014-01-01&endtime=2014-01-02&minmagnitude=5';

	constructor (private http: Http) {}

	getProducts(): Observable<Product[]> {
		return this.http.get(this.productsUrl).map(this.extractData).catch(this.handleError);

	}

	private extractData(res: Response) {
		let body = res.json();
		return body.features || {};
	}

	private handleError (error: any) {
		let errMsg = (error.message) ? error.message : error.status ? '{$error.status}' : 'Server error';
		console.error(errMsg);
		return Observable.throw(errMsg);
	}
}