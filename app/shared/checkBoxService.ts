import {Injectable, EventEmitter} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CheckBoxService {
    public quantityChecked:string;
    
    constructor(private _http:Http) {
        
    }
    
    getIncrement() {
        return this._http.get(this.quantityChecked)
        
    }
}
