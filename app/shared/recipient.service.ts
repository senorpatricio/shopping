import {Injectable, EventEmitter} from 'angular2/core';
import {IRecipient} from './recipient';
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class RecipientService {
   
    private _recipientUrl = 'api/recipient-products.json';
    constructor(private _http: Http) {
        
    }
     getRecipientProducts():Observable<IRecipient[]> {
        return this._http.get(this._recipientUrl)
        .map((response: Response)=> <IRecipient[]>response.json())
        .do(data => console.log("A: " + JSON.stringify(data)))
        .catch(this.handleError);
    }
    
    manageRecipientProducts():Observable<IRecipient[]> {
        return this._http.get(this._recipientUrl)
        .map((response: Response)=> <IRecipient[]>response.json())
        .do(data => console.log("A: " + JSON.stringify(data)))
        .catch(this.handleError);
    }
    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}