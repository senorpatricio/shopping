
import {Component, Input, EventEmitter} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/Rx'; // Load all features
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';
import { enableProdMode } from 'angular2/core'; enableProdMode();
import {ProductService} from './products/product.service';
import {CheckBoxService} from './shared/checkBoxService';
import {StartLinkComponent} from './home/startLink.component';
import {LinkTypeComponent} from './shared/link.type.component';
import {RecipientTypeComponent} from './shared/recipient-type.component';
import {PublicLinkFormComponent} from './shared/public-link-form.component';
import {MenuService} from './shared/menu.service';


@Component({
    selector: "smart-link-app",
    template: `
    <div>
      <header>
            <div class="xlogo">
               <a [routerLink]="['Start']"> <img src="/app/assets/img/logo_xOff_header@2x.png" alt="">
                </a>
            </div>
           <nav id="main-nav" class="hideMenu view">
                <ul>
                    <!--<li  *ngFor="let menuItem of menuItems;  let isFirst = first" [class.active]="isFirst"  (click)="checkMenu($event,menuItem)" #unlock class="notactive">{{menuItem}}</li>-->
                    <li id="one"  class="active one">Step 1</li>
                    <li id="two"   class="inactive two unlock">Step 2</li>
                    <li id="three"  class="inactive three">Step 3</li>
                    <li id="four"  class="inactive four">Step 4</li>
                </ul>
            </nav>
        </header>
            <div class=container>
              <router-outlet></router-outlet>
            </div>  
        </div>
    `,
    
     directives: [StartLinkComponent, ROUTER_DIRECTIVES],
    providers: [MenuService, ProductService, StartLinkComponent, HTTP_PROVIDERS, ROUTER_PROVIDERS]    
})
@RouteConfig([
    {path: '/startLink', name: 'Start', component: StartLinkComponent, useAsDefault: true},
    {path: '/linkType', name: 'Link', component: LinkTypeComponent},
    {path: '/recipientType', name: 'RecipientType', component: RecipientTypeComponent},
    //{path: '/publicLinkForm', name: 'PublicForm', component: PublicLinkFormComponent}
    
])

export class AppComponent {
    //@Input()
    //showMenu: boolean = false;
    constructor(private _menuService: MenuService) {

    }
    
     
   
}