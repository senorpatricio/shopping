System.register(["angular2/core", 'angular2/router', '../products/product.service', '../products/quantity.component'], function(exports_1, context_1) {
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
    var core_1, router_1, product_service_1, quantity_component_1;
    var RecipientStartComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (product_service_1_1) {
                product_service_1 = product_service_1_1;
            },
            function (quantity_component_1_1) {
                quantity_component_1 = quantity_component_1_1;
            }],
        execute: function() {
            RecipientStartComponent = (function () {
                function RecipientStartComponent(_productService, quantity) {
                    this._productService = _productService;
                    this.quantity = quantity;
                    this.description = false;
                }
                RecipientStartComponent.prototype.ngOnInit = function () {
                    console.log("init has been called...");
                    this.getAllProducts();
                    // this._productService.getProducts()
                    //   .subscribe(products => this.products = products,
                    //   error => this.errorMessage = <any>error)
                    //   this._productService.getProducts()
                    //   .subscribe(subProducts => this.subProducts = subProducts,
                    //   error => this.errorMessage = <any>error)
                };
                RecipientStartComponent.prototype.getAllProducts = function () {
                    this.products = this._productService.getProducts();
                    this.subProducts = this._productService.getProducts();
                };
                RecipientStartComponent.prototype.showDescription = function () {
                    this.description = true;
                };
                RecipientStartComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/shared/recipient-start.component.html',
                        styles: ["\n        .grey-section {\n            background: #f1f1f1;\n            border-top: 2px solid #AC955B;\n            border-bottom: 2px solid #AC955B;\n        }\n        .grey-section h4 {\n            font-size: 20px;\n            margin: 10px;\n            font-weight: 600;\n            color: #9ca09e;\n        }\n        .grey-section h1 {\n            margin: 20px 10px;\n            font-size: 36px;\n        }\n        .review-text {\n            margin-left: 10px;\n            font-size: 1em;\n            line-height: 1;\n            margin-top: 20px;\n            margin-bottom: 20px;\n            font-weight: 500;\n        }\n        hr {\n            border-top: 1px solid #828784;\n            margin-left: 10px;\n            margin-right: 10px;\n        }\n        .product-detail {\n            width: 100%;\n            margin: 0 auto;\n        }\n        .product-image {\n            position: relative;\n            width: 30%;\n            float: left;\n            // background-color: #9CA09E;\n            background: url('app/assets/img/products/jouve-tightener.jpg');\n            padding: 0 10px;\n            height: 108px;\n            margin-left: 10px;\n            margin-right: 5px;\n        }\n        .product-description {\n            position: relative;\n            width: 64%;\n            height: 130px;\n            float: left;\n        }\n        .product-title {\n            margin-left: 0;\n            font-size: 1em;\n            line-height: 1;\n            // margin-top: 20px;\n            margin-bottom: 0;\n            font-weight: 500;\n        }\n        .clear {\n            clear: both;\n        }\n        quantity {\n            float: left;\n        }\n        quantity .quantity-count .quantity__container span.qty {\n            font-size: .8rem;\n            height: 36px;\n            padding: 0.5rem;\n        }\n        \n        .quantity__input {\n            height: 30px;\n        }\n        .quantity__button {\n            height: 17px;\n        }\n        .delete-button {\n            float: left;\n            margin: 10px 25px;\n            height: 30px;\n            width: 64px;\n            background: #D8D8D8;\n            border-radius: 0;\n            font-size: 14px;\n        }\n        .item-price {\n            display: inline;\n            color: #9CA09E;\n            margin: 0 7px 0 0;\n        }\n       .item-details {\n           display: inline;\n           color: #B19B65;\n           margin: 0;\n       }\n    "],
                        directives: [router_1.ROUTER_DIRECTIVES, quantity_component_1.QuantityCounter],
                        outputs: ['checkboxChanged', 'showProducts', 'item', 'quantityValue'],
                        providers: [quantity_component_1.QuantityCounter]
                    }), 
                    __metadata('design:paramtypes', [product_service_1.ProductService, quantity_component_1.QuantityCounter])
                ], RecipientStartComponent);
                return RecipientStartComponent;
            }());
            exports_1("RecipientStartComponent", RecipientStartComponent);
        }
    }
});
//# sourceMappingURL=recipient-start.component.js.map