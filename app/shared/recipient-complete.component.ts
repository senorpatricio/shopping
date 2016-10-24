import {Component, OnInit,Output, EventEmitter} from "angular2/core"
import {PersonalLink} from './personal-link-form';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {IRecipient} from '../shared/recipient';
import {MenuComponent} from '../shared/menu.component';
import {MenuService} from '../shared/menu.service';
import {LinkBuildService} from '../shared/linkBuild.service';
import {RecipientService} from '../shared/recipient.service';
import {LinkTypeComponent} from '../shared/link.type.component';
import {QuantityCounter} from '../products/quantity.component';
import {Observable} from 'rxjs/Rx';

@Component({
    selector: 'recipient-complete',
    templateUrl: 'app/shared/recipient-complete.component.html',
    directives: [ROUTER_DIRECTIVES,QuantityCounter, MenuComponent, LinkTypeComponent],
    providers: [QuantityCounter, MenuService, LinkBuildService, RecipientService]
})

export class RecipientCompleteOrderComponent implements OnInit {
    recipientProds: Observable<IRecipient[]>;
    logo:boolean = true;
    subtotal: number = 363.42;
    shippoing: number = 12.42;
    tax: number = 20.50;
    totalPrice: number = 405.84


    constructor(private _recipientService: RecipientService) {

    }    

    ngOnInit():void {
        this.recipientProducts();
        document.querySelector('#headerimg').setAttribute('src', '/app/assets/img/ARIIX_Logo_Gold@2x.png');

    }

    recipientProducts() {
        this.recipientProds = this._recipientService.getRecipientProducts();
    }
}