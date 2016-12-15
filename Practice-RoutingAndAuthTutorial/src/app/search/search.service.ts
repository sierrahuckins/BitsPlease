import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Search } from './search';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SearchService {
	private searchUrl = 'https://ccstore-z5ia.oracleoutsourcing.com/ccstoreui/v1/search?Ntt=cat';
	constructor (private http: Http) {}

	getSearch(): Observable<Object[]> {
		return this.http.get(this.searchUrl).map(this.extractData).catch(this.handleError);
	}

	private extractData(res: Response) {
		let body = res.json();
		return body.resultsList.records || {};
	}

	private handleError (error: any) {
		let errMsg = (error.message) ? error.message : error.status ? '{$error.status}' : 'Server error';
		console.error(errMsg);
		return Observable.throw(errMsg);
	}
}