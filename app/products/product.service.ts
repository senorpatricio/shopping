import {Injectable, EventEmitter} from 'angular2/core';
import {IProduct} from './products';
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ProductService {
    public isChecked: EventEmitter<boolean> = new EventEmitter<boolean>();
    public quantityCheckBox
    private _productUrl = 'api/products.json';
    constructor(private _http: Http) {
        
    }
    
    // checkedProduct(): boolean {
    //     return this.isChecked;
    // }
    
    getProducts():Observable<IProduct[]> {
        return this._http.get(this._productUrl)
        .map((response: Response)=> <IProduct[]>response.json())
        .do(data => console.log("A: " + JSON.stringify(data)))
        .catch(this.handleError);
    }
    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}