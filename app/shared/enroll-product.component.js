System.register(['angular2/core', 'angular2/common', '../shared/menu.service', '../shared/menu.component', '../products/product-filter.pipe', '../products/product.service', '../shared/linkBuild.service', '../shared/smart.link.component', '../shared/link.type.component', 'angular2/router', './accordion', '../products/quantity.component', './enrollment.component'], function(exports_1, context_1) {
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
    var core_1, common_1, menu_service_1, menu_component_1, product_filter_pipe_1, product_service_1, linkBuild_service_1, smart_link_component_1, link_type_component_1, router_1, accordion_1, quantity_component_1, enrollment_component_1;
    var EnrollProductComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (menu_service_1_1) {
                menu_service_1 = menu_service_1_1;
            },
            function (menu_component_1_1) {
                menu_component_1 = menu_component_1_1;
            },
            function (product_filter_pipe_1_1) {
                product_filter_pipe_1 = product_filter_pipe_1_1;
            },
            function (product_service_1_1) {
                product_service_1 = product_service_1_1;
            },
            function (linkBuild_service_1_1) {
                linkBuild_service_1 = linkBuild_service_1_1;
            },
            function (smart_link_component_1_1) {
                smart_link_component_1 = smart_link_component_1_1;
            },
            function (link_type_component_1_1) {
                link_type_component_1 = link_type_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (accordion_1_1) {
                accordion_1 = accordion_1_1;
            },
            function (quantity_component_1_1) {
                quantity_component_1 = quantity_component_1_1;
            },
            function (enrollment_component_1_1) {
                enrollment_component_1 = enrollment_component_1_1;
            }],
        execute: function() {
            EnrollProductComponent = (function () {
                //checkboxChanged = new EventEmitter();
                function EnrollProductComponent(_productService, quantity, _menuService, builder) {
                    this._productService = _productService;
                    this.quantity = quantity;
                    this._menuService = _menuService;
                    this.builder = builder;
                    this.linkType = ['Smart Link Type', 'Retail Customer', 'Preferred Customer', 'Enrollment'];
                    this.productSelected = [];
                    this.model = new smart_link_component_1.SmartLink(1, "", "", "", this.linkType[0], "", "", "", "", this.productSelected[""]);
                    this.selectedPrice = [];
                    this.pageTitle = "Link type";
                    this.hideInstruction = true;
                    this.showProducts = false;
                    this.showEnrollment = false;
                    this.showEnrollConfirm = false;
                    this.showReviewBtn = false;
                    this.orderReview = false;
                    this.yada = "";
                    this.isOpen = false;
                }
                EnrollProductComponent.prototype.myValueChange = function ($event) {
                    console.log($event);
                };
                EnrollProductComponent.prototype.onChecked = function (checked, prodName, name, price, flag) {
                    this.builder.smartlinkname.name = this.model.linkName;
                    //this.link.linkedName = this.model.linkName;
                    console.log(this.builder.smartlinkname.name);
                    //linkbuildservice
                    this.builder.buildProducts([prodName, name, price]);
                    //this.linkname =  this.builder.linkedName(this.model.linkName);
                    console.log("Selected products are: " + this.builder.addProducts);
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
                };
                EnrollProductComponent.prototype.showReview = function () {
                    console.log("show!");
                    this.orderReview = true;
                };
                EnrollProductComponent.prototype.hideReview = function () {
                    console.log("hide!");
                    this.orderReview = false;
                };
                EnrollProductComponent.prototype.enrollConfirm = function () {
                    this.showEnrollConfirm = true;
                };
                EnrollProductComponent.prototype.hideEnrollConfirm = function () {
                    this.showEnrollConfirm = true;
                    this.orderReview = false;
                };
                EnrollProductComponent.prototype.totalOrderPrice = function (price) {
                    var unitPrice = +this.productPrice;
                    console.log("$" + unitPrice);
                };
                EnrollProductComponent.prototype.ngOnInit = function () {
                    console.log("init has been called...");
                    this._menuService.checkMenu(3, "three");
                    console.log("Managed.. " + this.getAllProducts());
                    // this._productService.getProducts()
                    //   .subscribe(products => this.products = products,
                    //   error => this.errorMessage = <any>error)
                    //   this._productService.getProducts()
                    //   .subscribe(subProducts => this.subProducts = subProducts,
                    //   error => this.errorMessage = <any>error)
                };
                EnrollProductComponent.prototype.getAllProducts = function () {
                    this.products = this._productService.getProducts();
                    this.subProducts = this._productService.getProducts();
                };
                EnrollProductComponent = __decorate([
                    core_1.Component({
                        selector: 'enroll-product',
                        templateUrl: 'app/shared/enroll-product.component.html',
                        styles: ["\n        hr {\n            border-top: 2px solid #ccc;\n            margin: 0 auto 20px;\n            max-width: 100%;\n        }\n        .accord-wrap h4 {\n            margin: 15px 0 10px;\n            font-weight: 600;\n            color: #828784;\n            text-align: left;\n        }\n        .accord-wrap p {\n            margin-left: 0;\n            font-weight: 500;\n            margin-top: 20px;\n        }\n        .enroll-link-confirm p {\n            margin-top: 30px;\n            font-weight: 600;\n            margin-right: 15px;\n            line-height: 1.3;\n        }\n\n        .enroll-link-confirm hr {\n            border-top: 2px solid #ccc;\n            margin: 0 auto 20px;\n            max-width: 92%;\n        }\n        .consent {\n            width: 92%;\n            margin: 0 auto;\n            font-size: 14px;\n            color: #828784;\n        }\n    "],
                        pipes: [product_filter_pipe_1.ProductFilterPipe],
                        directives: [menu_component_1.MenuComponent, router_1.ROUTER_DIRECTIVES, common_1.NgClass, quantity_component_1.QuantityCounter, accordion_1.Accordion, accordion_1.AccordionGroup, enrollment_component_1.EnrollmentComponent, link_type_component_1.LinkTypeComponent],
                        outputs: ['checkboxChanged', 'showProducts', 'item', 'quantityValue'],
                        providers: [quantity_component_1.QuantityCounter, menu_component_1.MenuComponent, menu_service_1.MenuService, linkBuild_service_1.LinkBuildService, link_type_component_1.LinkTypeComponent],
                    }), 
                    __metadata('design:paramtypes', [product_service_1.ProductService, quantity_component_1.QuantityCounter, menu_service_1.MenuService, linkBuild_service_1.LinkBuildService])
                ], EnrollProductComponent);
                return EnrollProductComponent;
            }());
            exports_1("EnrollProductComponent", EnrollProductComponent);
        }
    }
});
//# sourceMappingURL=enroll-product.component.js.map