System.register(["angular2/core", 'angular2/router', '../shared/menu.component', '../shared/menu.service', '../shared/linkBuild.service', '../shared/recipient.service', '../shared/link.type.component', '../products/quantity.component'], function(exports_1, context_1) {
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
    var core_1, router_1, menu_component_1, menu_service_1, linkBuild_service_1, recipient_service_1, link_type_component_1, quantity_component_1;
    var RecipientOrderComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (menu_component_1_1) {
                menu_component_1 = menu_component_1_1;
            },
            function (menu_service_1_1) {
                menu_service_1 = menu_service_1_1;
            },
            function (linkBuild_service_1_1) {
                linkBuild_service_1 = linkBuild_service_1_1;
            },
            function (recipient_service_1_1) {
                recipient_service_1 = recipient_service_1_1;
            },
            function (link_type_component_1_1) {
                link_type_component_1 = link_type_component_1_1;
            },
            function (quantity_component_1_1) {
                quantity_component_1 = quantity_component_1_1;
            }],
        execute: function() {
            RecipientOrderComponent = (function () {
                function RecipientOrderComponent(_recipientService) {
                    this._recipientService = _recipientService;
                }
                RecipientOrderComponent.prototype.ngOnInit = function () {
                    this.recipientProducts();
                    var headerlogo = document.querySelector('#headerimg');
                    headerlogo.style.marginTop = '10px';
                    headerlogo.style.marginBottom = '10px';
                    headerlogo.setAttribute('src', '/app/assets/img/ARIIX_Logo_Gold@2x.png');
                };
                RecipientOrderComponent.prototype.recipientProducts = function () {
                    this.recipientProds = this._recipientService.getRecipientProducts();
                };
                RecipientOrderComponent = __decorate([
                    core_1.Component({
                        selector: 'recipient-products',
                        templateUrl: 'app/shared/recipient-order-view.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES, quantity_component_1.QuantityCounter, menu_component_1.MenuComponent, link_type_component_1.LinkTypeComponent],
                        providers: [quantity_component_1.QuantityCounter, menu_service_1.MenuService, linkBuild_service_1.LinkBuildService, recipient_service_1.RecipientService]
                    }), 
                    __metadata('design:paramtypes', [recipient_service_1.RecipientService])
                ], RecipientOrderComponent);
                return RecipientOrderComponent;
            }());
            exports_1("RecipientOrderComponent", RecipientOrderComponent);
        }
    }
});
//# sourceMappingURL=recipient-order-view.component.js.map