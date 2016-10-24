System.register(['angular2/core', 'angular2/http', 'rxjs/Rx', 'angular2/router', './products/product.service', './home/startLink.component', './shared/link.type.component', './shared/recipient-type.component', './shared/public-share.component', './shared/personal-share.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, router_1, core_2, product_service_1, startLink_component_1, link_type_component_1, recipient_type_component_1, public_share_component_1, personal_share_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (product_service_1_1) {
                product_service_1 = product_service_1_1;
            },
            function (startLink_component_1_1) {
                startLink_component_1 = startLink_component_1_1;
            },
            function (link_type_component_1_1) {
                link_type_component_1 = link_type_component_1_1;
            },
            function (recipient_type_component_1_1) {
                recipient_type_component_1 = recipient_type_component_1_1;
            },
            function (public_share_component_1_1) {
                public_share_component_1 = public_share_component_1_1;
            },
            function (personal_share_component_1_1) {
                personal_share_component_1 = personal_share_component_1_1;
            }],
        execute: function() {
            core_2.enableProdMode();
            AppComponent = (function () {
                //@Input()
                //showMenu: boolean = false;
                function AppComponent(_menuService) {
                    this._menuService = _menuService;
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: "smart-link-app",
                        template: "\n    <div>\n      <header>\n            <div class=\"xlogo\">\n               <a [routerLink]=\"['Start']\"> <img src=\"/app/assets/img/logo_xOff_header@2x.png\" alt=\"\">\n                </a>\n            </div>\n           <nav id=\"main-nav\" class=\"hideMenu view\">\n                <ul>\n                    <!--<li  *ngFor=\"let menuItem of menuItems;  let isFirst = first\" [class.active]=\"isFirst\"  (click)=\"checkMenu($event,menuItem)\" #unlock class=\"notactive\">{{menuItem}}</li>-->\n                    <li id=\"one\"  class=\"active one\">Step 1</li>\n                    <li id=\"two\"   class=\"inactive two unlock\">Step 2</li>\n                    <li id=\"three\"  class=\"inactive three\">Step 3</li>\n                    <li id=\"four\"  class=\"inactive four\">Step 4</li>\n                </ul>\n            </nav>\n        </header>\n            <div class=container>\n              <router-outlet></router-outlet>\n            </div>  \n        </div>\n    ",
                        directives: [startLink_component_1.StartLinkComponent, router_1.ROUTER_DIRECTIVES],
                        providers: [MenuService, product_service_1.ProductService, startLink_component_1.StartLinkComponent, http_1.HTTP_PROVIDERS, router_1.ROUTER_PROVIDERS]
                    }),
                    router_1.RouteConfig([
                        { path: '/startLink', name: 'Start', component: startLink_component_1.StartLinkComponent, useAsDefault: true },
                        { path: '/linkType', name: 'Link', component: link_type_component_1.LinkTypeComponent },
                        { path: '/recipientType', name: 'RecipientType', component: recipient_type_component_1.RecipientTypeComponent },
                        { path: '/publicShare', name: 'PublicShare', component: public_share_component_1.PublicShareComponent },
                        { path: '/personalShare', name: 'PersonalShare', component: personal_share_component_1.PersonalShareComponent },
                    ]), 
                    __metadata('design:paramtypes', [Object])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component_BACKUP_65403.js.map