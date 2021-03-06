System.register(["angular2/core", 'angular2/router', '../products/product.service', '../shared/menu.service', '../shared/menu.component', './accordion', './recipient-type.component', '../products/quantity.component', '../shared/linkBuild.service'], function(exports_1, context_1) {
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
    var core_1, router_1, router_2, product_service_1, menu_service_1, menu_component_1, accordion_1, recipient_type_component_1, quantity_component_1, linkBuild_service_1;
    var PublicDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (product_service_1_1) {
                product_service_1 = product_service_1_1;
            },
            function (menu_service_1_1) {
                menu_service_1 = menu_service_1_1;
            },
            function (menu_component_1_1) {
                menu_component_1 = menu_component_1_1;
            },
            function (accordion_1_1) {
                accordion_1 = accordion_1_1;
            },
            function (recipient_type_component_1_1) {
                recipient_type_component_1 = recipient_type_component_1_1;
            },
            function (quantity_component_1_1) {
                quantity_component_1 = quantity_component_1_1;
            },
            function (linkBuild_service_1_1) {
                linkBuild_service_1 = linkBuild_service_1_1;
            }],
        execute: function() {
            PublicDetailComponent = (function () {
                function PublicDetailComponent(_productService, _routeParams) {
                    this._productService = _productService;
                    this._routeParams = _routeParams;
                    this.linkType = ['Smart Link Type', 'Retail Customer', 'Preferred Customer', 'Enrollment'];
                    this.hideInstruction = true;
                    this.showProducts = false;
                    this.editing = false;
                    this.duplicating = false;
                    this.reactivating = false;
                    this.deleting = false;
                    // link duplicate edit form
                    states = ["AA", "AK", "AL", "AR", "AZ", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "GU", "HI", "IA", "ID", "IL", "IN", "KS", "KY", "LA", "MA", "MD", "ME", "MH", "MI", "MN", "MO", "MS", "MT", "NC", "ND", "NE", "NH", "NJ", "NM", "NV", "NY", "OH", "OK", "OR", "PA", "PR", "PW", "RI", "SC", "SD", "TN", "TX", "UT", "VA", "VI", "VT", "WA", "WI", "WV", "WY"];
                    model = new PersonalLink(1, "", "", "", "", "", "", this.states[0], "", "", "", "");
                    checkmark: boolean = false;
                    submitted: boolean = false;
                    constructor(public, quantity, quantity_component_1.QuantityCounter, private, _productService, product_service_1.ProductService, private, _menuService, menu_service_1.MenuService);
                    {
                    }
                    onSubmit();
                    {
                        this.submitted = true;
                    }
                    ngOnInit();
                    void {
                        console: .log("init has been called..."),
                        this: .getAllProducts()
                    };
                    getAllProducts();
                    {
                        this.products = this._productService.getProducts();
                        this.subProducts = this._productService.getProducts();
                    }
                    linkReactivate();
                    {
                        this.reactivating = true;
                    }
                    hideReactivate();
                    {
                        this.reactivating = false;
                    }
                    linkDelete();
                    {
                        this.deleting = true;
                    }
                    hideDelete();
                    {
                        this.deleting = false;
                    }
                    showEditing();
                    {
                        this.editing = true;
                    }
                    hideEditing();
                    {
                        this.editing = false;
                    }
                    linkDuplicate();
                    {
                        this.duplicating = true;
                    }
                    hideDuplicate();
                    {
                        this.duplicating = false;
                    }
                    onChange(item);
                    {
                        //this.step++;
                        if (item === this.linkType[1] || item === this.linkType[2]) {
                            this._menuService.checkMenu(2, "two");
                            //change menu
                            console.log(item);
                        }
                        if (this.showProducts) {
                            this.showProducts = true;
                            this.hideInstruction = true;
                        }
                        else {
                            this.showProducts = !this.showProducts;
                            this.hideInstruction = !this.hideInstruction;
                        }
                        console.log(item);
                    }
                    onChecked(checked, prodName, name, price, flag);
                    {
                        var combinePrice = prodName + " " + name + " " + price;
                        var catTitle = combinePrice.split(" ", 1);
                        var priceSum = 0;
                        if (flag === true) {
                            this.catName = prodName;
                            this.quantity.quantityValue++;
                            this.checked = checked;
                            this.showReviewBtn = true;
                            this.name = name;
                            this.productPrice = price;
                            //build productArr and display it in orderReview
                            this.productSelected.push(combinePrice);
                            this.selectedPrice.push(this.productPrice);
                            console.log("Item price: " + this.selectedPrice);
                            //this.totalOrderPrice(price);
                            // Add up the prices of crap ordered.
                            for (var i = 0; i < this.selectedPrice.length; i++) {
                                priceSum += +this.selectedPrice[i];
                                console.log("Total price for yiour order: " + priceSum);
                            }
                            this.totalPrice = Math.round(priceSum * 100) / 100;
                            this.totalPrice = this.totalPrice * this.quantity.quantityValue;
                        }
                        else {
                            this.quantity.quantityValue = 0;
                            this.checked = checked;
                            this.name = " ";
                            this.productPrice = " ";
                            //this.orderReview = false;
                            this.productSelected.splice(this.productSelected.indexOf(combinePrice), 1);
                            this.selectedPrice.splice(this.productPrice.indexOf(String(priceSum)), 1);
                            for (var i = 0; i < this.selectedPrice.length; i++) {
                                priceSum += +this.selectedPrice[i];
                                console.log("Total price for your order after subtracting: " + priceSum);
                            }
                            this.totalPrice = Math.round(priceSum * 100) / 100;
                            this.totalPrice = this.totalPrice * this.quantity.quantityValue;
                            if (this.totalPrice > 0) {
                                this.showReviewBtn = true;
                            }
                            else {
                                this.showReviewBtn = false; // gotta handle this later... handled...
                            }
                        }
                        //console.log("Total price for yiour order after subtracting: " + priceSum);
                        //this.selectedValue = siValue;
                        //this.checkboxChanged.emit({
                        //value: this.myValue});
                        console.log("Category title: " + catTitle);
                        //console.log("item prce: " + itemPrice);
                        console.log(this.name + " @ " + this.productPrice + " checked: " + flag);
                    }
                    checkMarking();
                    {
                        this.checkmark = true;
                    }
                }
                PublicDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'personal-detail',
                        templateUrl: "app/shared/public-link-detail.component.html",
                        styles: ["\n        .container {\n            width: 100% !important;\n        }\n        #name-head-text {\n            font-weight: 600;\n            margin-left: 15px;\n            margin-top: 15px;\n            color: #828784;\n            margin-bottom: 0;\n        }\n        #link-name {\n            font-size: 36px;   \n        }\n        .grey-section {\n            background-color: #F1F1F1;\n            width: 100%;\n            padding: 10px 0;\n        }\n        .grey-section h4 {\n            font-weight: 600;\n            color: #828784;\n            margin-left: 15px;\n            font-size: 1rem;\n            margin-left: 15px;\n            margin-bottom: 0;\n            margin-top: 0;\n            width: 60%;\n        }\n        .grey-section hr {\n            border-top: 1px solid #ccc;\n            width: 91%;\n            margin: 10px auto 0;   \n        }\n        hr {\n            border-top: 2px solid #ccc;\n            width: 91%;\n            margin: 0 auto;   \n        }\n        .controls-section {\n            width: 75%;\n            margin: 0 auto;\n        }\n        .icon-spot {\n            width: 20%;\n            float: left;\n            padding: 10px;\n            margin: 8px auto 8px;\n        }\n        .clear {\n            clear: both;\n        }\n        .product-details:last-child {\n            min-height: 80px;\n            margin-bottom: 100px;\n        }\n        .product-name {\n            margin-top: 10px;\n            margin-bottom: 0;\n        }\n        .item-name {\n            margin-bottom: 0;\n            font-weight: 500;\n        }\n        .item-price {\n            color: #9CA09E;\n            font-weight: 500;\n            margin-top: -5px;\n            margin-bottom: 10px;\n        }\n        .footer {\n            position: fixed;\n            height: 100px;\n            width: 100%;\n            background: white;\n            border-top: 1px solid #ccc; \n            bottom: 0;\n            box-shadow: 10px 10px 10px 10px #ccc;\n            z-index: 55;\n        }\n        .btn {\n            border-radius: 0;\n            margin-top: 20px;\n            font-size: 1.3rem;\n        }\n        .btn a {\n            color: white;\n        }\n        .review-order {\n            top: 100px;\n        }\n        .review-order h1 {\n            font-size: xx-large;\n            margin-top: 20px;\n        }\n        .review-order h4 {\n            color: #417505;\n            margin-left: 15px;\n            margin-top: 20px;\n            font-size: 1.2rem;\n        }\n        .review-order #success-text {\n            color: #828784;\n            margin-left: 15px;\n            margin-top: 10px;\n        }\n         .dbtn {\n            margin-bottom: 18px;\n            border-radius: 0px;\n            width: 91%;\n            margin-left: 15px;\n            font-size: 1.3rem !important;\n        }\n        .overlay-btn {\n            width: 91%;\n            margin-left: 15px;\n            margin-bottom: 20px;\n            font-size: 1.3rem;\n        }\n        .unchecked {\n            position: relative;\n            float: left;\n            background: url('/app/assets/img/checkbox.png') no-repeat 0 -21px;\n            width: 16px;\n            height: 16px;\n            margin-right: 5px;\n        }\n        .way-checked {\n            position: relative;\n            float: left;\n            background: url('/app/assets/img/checkbox.png') no-repeat 0 0;\n            width: 16px;\n            height: 16px;\n            margin-right: 5px;\n        } \n        .consent {\n            width: 92%;\n            margin: 0 auto;\n        }\n    "],
                        directives: [router_1.ROUTER_DIRECTIVES, recipient_type_component_1.RecipientTypeComponent, quantity_component_1.QuantityCounter, accordion_1.Accordion, accordion_1.AccordionGroup],
                        outputs: ['checkboxChanged', 'showProducts', 'item', 'quantityValue'],
                        providers: [quantity_component_1.QuantityCounter, menu_component_1.MenuComponent, menu_service_1.MenuService, linkBuild_service_1.LinkBuildService]
                    }), 
                    __metadata('design:paramtypes', [product_service_1.ProductService, router_2.RouteParams])
                ], PublicDetailComponent);
                return PublicDetailComponent;
            }());
            exports_1("PublicDetailComponent", PublicDetailComponent);
        }
    }
});
//# sourceMappingURL=public-link-detail.component.js.map