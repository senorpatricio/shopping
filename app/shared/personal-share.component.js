System.register(["angular2/core", 'angular2/router', '../shared/menu.component', '../shared/menu.service', './link.type.component', '../shared/linkBuild.service'], function(exports_1, context_1) {
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
    var core_1, router_1, menu_component_1, menu_service_1, link_type_component_1, linkBuild_service_1;
    var PersonalShareComponent;
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
            function (link_type_component_1_1) {
                link_type_component_1 = link_type_component_1_1;
            },
            function (linkBuild_service_1_1) {
                linkBuild_service_1 = linkBuild_service_1_1;
            }],
        execute: function() {
            PersonalShareComponent = (function () {
                // copyConfirm: boolean = false;
                function PersonalShareComponent(_menuService, builder, _router, _routeParams) {
                    this._menuService = _menuService;
                    this.builder = builder;
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this.showNote = false;
                    this.hideLink = true;
                    this.sendSuccess = false;
                    this.sendFail = false;
                    this.smsSuccess = false;
                    this.smsFail = false;
                }
                PersonalShareComponent.prototype.ngOnInit = function () {
                    this._menuService.checkMenu(4, "four");
                    //this.linkname = this.builder.getLinkName();
                };
                PersonalShareComponent.prototype.onBack = function () {
                    this._router.navigate(['RecipientType']);
                };
                PersonalShareComponent.prototype.onClick = function () {
                    this.showNote = true;
                    this.hideLink = false;
                };
                PersonalShareComponent.prototype.showReview = function () {
                    console.log("SHOW!");
                    this.sendSuccess = true;
                };
                PersonalShareComponent.prototype.hideReview = function () {
                    console.log("hide!");
                    this.sendSuccess = false;
                };
                PersonalShareComponent.prototype.failReview = function () {
                    console.log("Failed!");
                    this.sendFail = true;
                };
                PersonalShareComponent.prototype.hideFailReview = function () {
                    console.log("Hidden!");
                    this.sendFail = false;
                };
                PersonalShareComponent.prototype.smsConfirm = function () {
                    this.smsSuccess = true;
                };
                PersonalShareComponent.prototype.hideSmsConfirm = function () {
                    this.smsSuccess = false;
                };
                PersonalShareComponent.prototype.sendSmsFail = function () {
                    this.smsFail = true;
                };
                PersonalShareComponent.prototype.hideSendSmsFail = function () {
                    this.smsFail = false;
                };
                // showCopy() {
                //     this.copyConfirm = true;
                //     setTimeout(() => this.copyConfirm = false, 1000);
                //     console.log("Copied!");
                // }
                PersonalShareComponent.prototype.ngAfterViewInit = function () {
                    this.linkname = this.builder.smartlinkname.name;
                    console.log(this.linkname);
                };
                PersonalShareComponent = __decorate([
                    core_1.Component({
                        selector: 'personal-share',
                        templateUrl: "app/shared/personal-share.component.html",
                        styles: ["\n        #name-head-text {\n            font-weight: 600;\n            margin-left: 15px;\n            margin-top: 10px;\n            color: #AAAAAA;\n            margin-bottom: 0;\n        }\n        #link-name {\n            font-size: 36px;\n            margin-top: 20px;   \n        }\n        hr {\n            border-top: 2px solid #ccc;\n            width: 91%;\n            margin: 0 auto;\n            \n        }\n        .personal-link-input {\n            border: none;\n            box-shadow: none;\n            border-radius: 0;\n            background-color: #f1f1f1;\n            width: 91%;      \n        }\n        #share-text {\n            font-weight: 600;\n            margin-left: 15px;\n            margin-top: 10px;\n            color: #AAAAAA;\n        }\n        .copy-section {\n            width: 91%;\n            margin: 0 auto;\n            display: -webkit-flex;\n            display: flex;\n            -webkit-flex-direction: row;\n            flex-direction: row;\n        }\n        .copy-text {\n            margin-left: 15px;\n            line-height: 1.1;\n            width: 91%;\n        }\n        #copy-button {\n            text-align: center;\n            background-color: #B19B65;\n            width: 80px;\n            height: 39px;\n            padding-top: 9px;\n            color: #fff;\n            font-size: small;\n        }\n         .copy-overlay {\n            height: 39px;\n            left: 15px;\n            width: 91%;\n            padding-top: 7px;\n            padding-left: 10px;\n            background-color: #417505;\n            position: absolute;\n            top: 182px;\n            \n            z-index: 50;\n            display: block;\n            box-shadow: 1px 1px 5px #333333;\n        }\n        .copy-overlay p {\n            color: #fff;\n        }\n        .social-media-section {\n            width: 91%;\n            margin-bottom: 10px;\n        }\n        #left-icon {\n            margin-left: 15px;\n        }\n        .social-icon {\n            margin: 8px 8px 8px 0;\n        }\n        #send-button {\n            text-align: center;\n            background-color: #B19B65;\n            width: 80px;\n            height: 39px;\n            border-radius: 0;\n        }\n        #send-button a {\n            color: #fff;\n            font-size: small;\n        }\n        #send-note {\n            background-color: transparent;\n            text-align: right;\n        }\n        .personal-note-text {\n            color: #AC955B;\n            margin-left: 15px;\n        }\n        .personal-notearea {\n            margin: 0 auto 10px;\n        }\n        #send-button-with-note {\n            text-align: center;\n            background-color: #B19B65;\n            width: 80px;\n            height: 38px;\n            padding-top: 12px;\n            color: #fff;\n            font-size: small;\n            float: right;\n            margin-right: 15px;\n            margin-bottom: 20px;\n        }\n        .btn {\n            margin-bottom: 18px;\n            border-radius: 0px;\n            width: 91%;\n            margin-left: 15px;\n            font-size: 1.3rem;\n        }\n        .dbtn {\n            margin-bottom: 18px;\n            border-radius: 0px;\n            width: 91%;\n            margin-left: 15px;\n            font-size: 1.3rem;\n        }\n        .review-order {\n            top: 100px;\n        }\n        .review-order h1 {\n            font-size: xx-large;\n            margin-top: 20px;\n        }\n        .review-order h4 {\n            color: #417505;\n            margin-left: 15px;\n            margin-top: 10px;\n        }\n        .review-order #fail-text {\n            color: #D0021B;\n            margin-left: 15px;\n            margin-top: 10px;\n        }\n        .showFailReview {\n            position: fixed;\n            bottom: 0;\n            left: 0;\n            width: 100%;\n            z-index: 55;\n            border-top: 1px solid #D8D8D8;\n            background: #fff;\n            \n        }\n    "],
                        directives: [router_1.ROUTER_DIRECTIVES, menu_component_1.MenuComponent, link_type_component_1.LinkTypeComponent],
                        providers: [menu_component_1.MenuComponent, menu_service_1.MenuService]
                    }), 
                    __metadata('design:paramtypes', [menu_service_1.MenuService, linkBuild_service_1.LinkBuildService, router_1.Router, router_1.RouteParams])
                ], PersonalShareComponent);
                return PersonalShareComponent;
            }());
            exports_1("PersonalShareComponent", PersonalShareComponent);
        }
    }
});
//# sourceMappingURL=personal-share.component.js.map