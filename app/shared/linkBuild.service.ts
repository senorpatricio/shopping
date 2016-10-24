import {Injectable, Input, Output, EventEmitter} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import {IBuild} from './build';
import {SmartLink} from './smart.link.component';
export interface SmartName {
    name: string;
}

@Injectable()
export class LinkBuildService {
   smartlinkname: SmartName = {name : ""};
    personal:boolean;
    public linkName: string;
    firstName = this.firstName;
    lastName = this.lastName;
    linkType = this.linkType;
    address = this.address;
    country = this.country;
    state = this.state;
    link = this.link;
    addProducts = [];
    menuTrack = [];

    constructor() {

    }

    public buildProducts(products) {
        // called in linkType each time user adds product...
        this.addProducts.push(products);



    }
    public trackMenu(menuPos) {
        this.menuTrack.push(menuPos);
        console.log(this.menuTrack[0]);

    }
    get linkedName() {
        return this.linkName;
    }
    set linkedName(lName: string) {
        this.smartlinkname.name = lName;
        this.linkName = lName;
    
    }
    public setLinkName(lName) {
        this.smartlinkname.name = lName;
        console.log("Setting Smart Link name " + this.smartlinkname.name);
        
    }
}