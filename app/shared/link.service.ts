import {Injectable, EventEmitter} from 'angular2/core';
import {ILinks} from './manageLinks';
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ManageLinkService {
    public isChecked: EventEmitter<boolean> = new EventEmitter<boolean>();
    public quantityCheckBox
    private _manageUrl = 'api/manageLinks.json';
    private _personalUrl = 'api/managePersonalLinks.json';
    constructor(private _http: Http) {
        
    }
    
    // checkedProduct(): boolean {
    //     return this.isChecked;
    // }
    

    personalLinks():Observable<ILinks[]> {
        return this._http.get(this._personalUrl)
        .map((response: Response)=> <ILinks[]>response.json())
        .do(data => console.log("A: " + JSON.stringify(data)))
        .catch(this.handleError);
    }
    
    manageLinks():Observable<ILinks[]> {
        return this._http.get(this._manageUrl)
        .map((response: Response)=> <ILinks[]>response.json())
        .do(data => console.log("A: " + JSON.stringify(data)))
        .catch(this.handleError);
    }
    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}