import { Product } from '../product-list/product';

export class Search  {

	constructor(
		public searchTerm:string,
		public records:Product[]

	) {}
}