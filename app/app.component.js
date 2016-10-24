System.register(['angular2/core', 'angular2/http', 'rxjs/Rx', 'angular2/router', 'angular2/platform/common', './products/product.service', './home/startLink.component', './shared/link.type.component', './shared/recipient-type.component', './shared/menu.service', './shared/public-share.component', './shared/personal-share.component', './products/manage.links.component', './shared/personal-link-detail.component', './shared/public-link-detail.component', './shared/enroll-product.component', './shared/recipient-account-info.component', './shared/recipient-order-view.component', './shared/recipient-complete.component', './shared/thank-you.component'], function(exports_1, context_1) {
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
    var core_1, http_1, router_1, core_2, core_3, common_1, product_service_1, startLink_component_1, link_type_component_1, recipient_type_component_1, menu_service_1, public_share_component_1, personal_share_component_1, manage_links_component_1, personal_link_detail_component_1, public_link_detail_component_1, enroll_product_component_1, recipient_account_info_component_1, recipient_order_view_component_1, recipient_complete_component_1, thank_you_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
                core_3 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
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
            function (menu_service_1_1) {
                menu_service_1 = menu_service_1_1;
            },
            function (public_share_component_1_1) {
                public_share_component_1 = public_share_component_1_1;
            },
            function (personal_share_component_1_1) {
                personal_share_component_1 = personal_share_component_1_1;
            },
            function (manage_links_component_1_1) {
                manage_links_component_1 = manage_links_component_1_1;
            },
            function (personal_link_detail_component_1_1) {
                personal_link_detail_component_1 = personal_link_detail_component_1_1;
            },
            function (public_link_detail_component_1_1) {
                public_link_detail_component_1 = public_link_detail_component_1_1;
            },
            function (enroll_product_component_1_1) {
                enroll_product_component_1 = enroll_product_component_1_1;
            },
            function (recipient_account_info_component_1_1) {
                recipient_account_info_component_1 = recipient_account_info_component_1_1;
            },
            function (recipient_order_view_component_1_1) {
                recipient_order_view_component_1 = recipient_order_view_component_1_1;
            },
            function (recipient_complete_component_1_1) {
                recipient_complete_component_1 = recipient_complete_component_1_1;
            },
            function (thank_you_component_1_1) {
                thank_you_component_1 = thank_you_component_1_1;
            }],
        execute: function() {
            core_2.enableProdMode();
            AppComponent = (function () {
                //@Input()
                //showMenu: boolean = false;
                function AppComponent(_menuService, _router) {
                    this._menuService = _menuService;
                    this._router = _router;
                    this.logo = false;
                    this.setupUrl = '/app/assets/img/logo_xOff_header@2x.png';
                    this.recipientUrl = '/app/assets/img/ARIIX_Logo_Gold@2x.png';
                    //this.linkBuild = new LinkBuildService();
                }
                AppComponent.prototype.onBack = function (event) {
                    var step1 = document.querySelector("#one");
                    var step2 = document.querySelector("#two");
                    var step3 = document.querySelector("#three");
                    var step4 = document.querySelector("#four");
                    if (event.target.id === "one" && step1.classList.contains("unlocked")) {
                        this._menuService.checkMenu(1, "one");
                    }
                    // if(event.target.id === "two" && step2.classList.contains("unlocked")) {
                    //         this._router.navigate(['Link']);        
                    // }
                    // this._router.navigate(['Link']);   
                    //this._router.navigate(['RecipientType']);
                };
                AppComponent.prototype.headerImage = function (img) {
                    if (img === "setup") {
                        this.imgUrl = this.setupUrl;
                    }
                    if (img === "recipient") {
                        this.imgUrl = this.recipientUrl;
                    }
                };
                AppComponent.prototype.ngOnInit = function () {
                    this.headerImage('setup');
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Function), 
                    __metadata('design:paramtypes', [String]), 
                    __metadata('design:returntype', void 0)
                ], AppComponent.prototype, "headerImage", null);
                AppComponent = __decorate([
                    core_1.Component({
                        selector: "smart-link-app",
                        template: "\n    <div>\n      <header>\n            <div class=\"xlogo\">\n               <a [routerLink]=\"['Start']\"> <img src=\"{{imgUrl}}\" alt=\"\" styles=\"\" id=\"headerimg\">\n               <img *ngIf=\"logo\" src=\"\" alt=\"\">\n                </a>\n            </div>\n           <nav id=\"main-nav\" class=\"hideMenu view\">\n                <ul>\n                    <!--<li  *ngFor=\"let menuItem of menuItems;  let isFirst = first\" [class.active]=\"isFirst\"  (click)=\"checkMenu($event,menuItem)\" #unlock class=\"notactive\">{{menuItem}}</li>-->\n                    <li (click)=\"onBack($event)\" id=\"one\"  class=\"active one\">Step 1</li>\n                    <li (click)=\"onBack($event)\" id=\"two\"   class=\"inactive two unlock\">Step 2</li>\n                    <li (click)=\"onBack($event)\" id=\"three\"  class=\"inactive three\">Step 3</li>\n                    <li (click)=\"onBack($event)\" id=\"four\"  class=\"inactive four\">Step 4</li>\n                </ul>\n            </nav>\n        </header>\n            <div class=container>\n              <router-outlet></router-outlet>\n            </div>  \n        </div>\n    ",
                        directives: [startLink_component_1.StartLinkComponent, router_1.ROUTER_DIRECTIVES, public_share_component_1.PublicShareComponent, personal_share_component_1.PersonalShareComponent],
                        providers: [menu_service_1.MenuService, link_type_component_1.LinkTypeComponent, product_service_1.ProductService, startLink_component_1.StartLinkComponent, http_1.HTTP_PROVIDERS, router_1.ROUTER_PROVIDERS,
                            core_3.provide(common_1.LocationStrategy, { useClass: common_1.HashLocationStrategy })]
                    }),
                    router_1.RouteConfig([
                        { path: '/startLink', name: 'Start', component: startLink_component_1.StartLinkComponent, useAsDefault: true },
                        { path: '/linkType', name: 'Link', component: link_type_component_1.LinkTypeComponent },
                        { path: '/recipientType', name: 'RecipientType', component: recipient_type_component_1.RecipientTypeComponent },
                        { path: '/enrollProduct', name: 'EnrollProduct', component: enroll_product_component_1.EnrollProductComponent },
                        { path: '/publicShare', name: 'PublicShare', component: public_share_component_1.PublicShareComponent },
                        { path: '/personalShare', name: 'PersonalShare', component: personal_share_component_1.PersonalShareComponent },
                        { path: '/manageLinks', name: 'ManageLinks', component: manage_links_component_1.ManageLinksComponent },
                        { path: '/personalDetail/:id', name: 'PersonalDetail', component: personal_link_detail_component_1.PersonalDetailComponent },
                        { path: '/publicDetail/:id', name: 'PublicDetail', component: public_link_detail_component_1.PublicDetailComponent },
                        { path: '/recipientAccountCreate', name: 'RecipientAccountCreate', component: recipient_account_info_component_1.RecipientAccountComponent },
                        { path: '/recipientOrder', name: 'RecipientOrderComponent', component: recipient_order_view_component_1.RecipientOrderComponent },
                        { path: '/recipientCompleteOrder', name: 'RecipientCompleteOrderComponent', component: recipient_complete_component_1.RecipientCompleteOrderComponent },
                        { path: '/thankyou', name: 'ThankYouComponent', component: thank_you_component_1.ThankYouComponent }
                    ]), 
                    __metadata('design:paramtypes', [menu_service_1.MenuService, router_1.Router])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map