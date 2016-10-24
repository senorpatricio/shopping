import {Component,  OnInit,Output, EventEmitter} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';
import {RouteParams} from 'angular2/router';
import {MenuComponent} from '../shared/menu.component';
import {ILinks} from '../shared/manageLinks';
import {ManageLinkService} from '../shared/link.service';
import {MenuService} from '../shared/menu.service';

import {Observable} from 'rxjs/Rx';

@Component({
    selector: 'manage-links',
    templateUrl: 'app/products/manage.links.component.html',
   
     directives: [ROUTER_DIRECTIVES, MenuComponent],
    providers: [MenuService, ManageLinkService] 
})


export class ManageLinksComponent implements OnInit {
    pageHeader:string = "Your Smart Links";
    dropMenu = ["Link Status", "Active Links", "Inactive Links"];
    tableNames = ["NAME", "PRICE", "PRICE", "SALES"];
    links: Observable<ILinks[]>;
    plinks: Observable<ILinks[]>;
    item: string;
    btn: string;
    activeLinks: boolean = false;
    inactiveLinks: boolean = false;
    deleteInactLink: boolean = false;
    showReactivate: boolean = false;
    reactivateDate: string;
    

    constructor(private _manageLinkService: ManageLinkService,
                private _managePersonalLinks: ManageLinkService) {

    }

    onChange(item) {
        console.log(item);
        if(item === "Active Links") {
            this.activeLinks = true;
            this.inactiveLinks = false;
        }
        if(item === "Inactive Links") {
            this.inactiveLinks = true;
            this.activeLinks = false;
        }

    }
    ngOnInit():void {
        console.log("Managed.. " + this._manageLinkService.manageLinks());
        

       this.manageProducts();
       this.managePersonalLinks();
    }

    manageProducts() {
        this.links = this._manageLinkService.manageLinks();
       
    }
    managePersonalLinks() {
        this.plinks = this._managePersonalLinks.personalLinks();
    }

    publicLinks(event) {
        let btn1 = document.querySelector("#personLink");
        let btn2 = document.querySelector("#pubLink");

        //console.log(event.target.id);
        if(event.target.id === "personLink") {
            //console.log("F an A!");
            btn1.classList.add("btn");
            btn1.classList.remove("dbtn");
            btn2.classList.add("dbtn");
            btn2.classList.remove("btn");
        }
         if(event.target.id === "pubLink") {
            //console.log("F an B!");
            btn2.classList.add("btn");
            btn2.classList.remove("dbtn");
            btn1.classList.add("dbtn");
            btn1.classList.remove("btn");
        }
       
    }
    deleteLink() {
        this.hideDelete();
    }
    showDelete() {
        this.deleteInactLink = true;
    }
    hideDelete() {
        this.deleteInactLink = false;
    }
    showReactivateLink() {
        this.showReactivate = true;
        
        let thedate = new Date();
        thedate.setDate(thedate.getDate() + 60); //number  of days to add, e.x. 15 days
        let dateFormated = thedate.toLocaleDateString().substr(0,10);
        this.reactivateDate = dateFormated;
    }
     hideReactivateLink() {
        this.showReactivate = false;
        
    }
    
}