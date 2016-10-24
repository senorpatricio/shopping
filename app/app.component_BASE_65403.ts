
import {Component} from 'angular2/core';
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


@Component({
    selector: "smart-link-app",
    template: `
    <div>
      <header>
            <div class="xlogo">
               <a [routerLink]="['Start']"> <img src="/app/assets/img/logo_xOff_header@2x.png" alt="">
                </a>
            </div>
           
        </header>
            <div class=container>
              <router-outlet></router-outlet>
            </div>  
        </div>
    `,
    
     directives: [StartLinkComponent, ROUTER_DIRECTIVES],
    providers: [ProductService, StartLinkComponent, HTTP_PROVIDERS, ROUTER_PROVIDERS]    
})
@RouteConfig([
    {path: '/startLink', name: 'Start', component: StartLinkComponent, useAsDefault: true},
    {path: '/linkType', name: 'Link', component: LinkTypeComponent},
    {path: '/recipientType', name: 'RecipientType', component: RecipientTypeComponent},
    {path: '/publicLinkForm', name: 'PublicForm', component: PublicLinkFormComponent}
    
])

export class AppComponent {
     
     
}