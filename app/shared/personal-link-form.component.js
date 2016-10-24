System.register(['angular2/core', '../shared/menu.component', './personal-link-form', 'angular2/router', './recipient-type.component', '../shared/menu.service'], function(exports_1, context_1) {
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
    var core_1, menu_component_1, personal_link_form_1, router_1, recipient_type_component_1, menu_service_1;
    var PersonalLinkFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (menu_component_1_1) {
                menu_component_1 = menu_component_1_1;
            },
            function (personal_link_form_1_1) {
                personal_link_form_1 = personal_link_form_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (recipient_type_component_1_1) {
                recipient_type_component_1 = recipient_type_component_1_1;
            },
            function (menu_service_1_1) {
                menu_service_1 = menu_service_1_1;
            }],
        execute: function() {
            PersonalLinkFormComponent = (function () {
                function PersonalLinkFormComponent(_menuService) {
                    this._menuService = _menuService;
                    this.personalForm = false;
                    this.publicForm = false;
                    this.step = 3;
                    this.states = ["AA", "AK", "AL", "AR", "AZ", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "GU", "HI", "IA", "ID", "IL", "IN", "KS", "KY", "LA", "MA", "MD", "ME", "MH", "MI", "MN", "MO", "MS", "MT", "NC", "ND", "NE", "NH", "NJ", "NM", "NV", "NY", "OH", "OK", "OR", "PA", "PR", "PW", "RI", "SC", "SD", "TN", "TX", "UT", "VA", "VI", "VT", "WA", "WI", "WV", "WY"];
                    this.model = new personal_link_form_1.PersonalLink(1, "", "", "", "", "", "", this.states[0], "", "", "", "");
                    this.submitted = false;
                    // get diagnostic() { return JSON.stringify(this.model); }
                    this.active = true;
                }
                PersonalLinkFormComponent.prototype.onSubmit = function () { this.submitted = true; };
                PersonalLinkFormComponent.prototype.ngAfterViewInit = function () {
                    if (this.step === 3) {
                        var activeMenu = document.querySelector('li.active');
                        activeMenu.classList.remove('active');
                        activeMenu.classList.add('unlocked');
                        activeMenu.nextElementSibling.classList.add('active');
                        activeMenu.nextElementSibling.classList.add('unlocked');
                        console.log("Step 3!");
                    }
                };
                PersonalLinkFormComponent.prototype.onChange = function (item) {
                    //this._menuService.checkMenu(3);
                    //this.step++;
                    // if(this.step === 3) {
                    //      let activeMenu = document.querySelector('li.active');
                    //       activeMenu.classList.remove('active');
                    //       activeMenu.classList.add('unlocked');
                    //       activeMenu.nextElementSibling.classList.add('active'); 
                    //       activeMenu.nextElementSibling.classList.add('unlocked');   
                    //       console.log("Step 3!");
                    // }
                    //   if(item === this.linkType[2]) {
                    //       //change menu
                    //       console.log(item);
                    //       let activeMenu = document.querySelector('li.active');
                    //       activeMenu.classList.remove('active');
                    //       activeMenu.classList.add('unlocked');
                    //       activeMenu.nextElementSibling.classList.add('active'); 
                    //       activeMenu.nextElementSibling.classList.add('unlocked');     
                    //   }
                    if (this.publicForm) {
                        this.publicForm = true;
                    }
                    else {
                        this.publicForm = !this.publicForm;
                    }
                    console.log("WTF? " + item);
                };
                PersonalLinkFormComponent.prototype.newPersonalLink = function () {
                    var _this = this;
                    this.active = false;
                    setTimeout(function () { return _this.active = true; }, 0);
                };
                PersonalLinkFormComponent = __decorate([
                    core_1.Component({
                        selector: 'personal-link-form',
                        templateUrl: "app/shared/personal-link-form.component.html",
                        styles: ["\n        #link-question {\n            font-size: 0.875em;\n            width: 95%;\n            margin: 20px auto 10px;\n        }\n        #recipient-type {\n            margin-top: 10px;\n        }\n        .intro-text {\n            margin-left: 12px;\n            font-size: 0.875em;\n            width: 93%;\n            line-height: initial;    \n        }\n        .personal-link-input {\n            border: none;\n            box-shadow: none;\n            border-radius: 0;\n            background-color: #f1f1f1;\n            width: 95%;\n            margin: 10px auto;   \n            \n        }\n        \n        .consent {\n            margin: 20px auto 0;\n            width: 95%;\n            color: #999;\n            line-height: initial;\n            letter-spacing: .2px;\n            font-size: .875rem;\n        }\n        .chooser {\n            padding: 0;\n        }\n        .chooser select {\n            color: #ccc;\n        }\n        hr {\n            border-top: 2px solid #ccc;\n            width: 95%;\n            margin: 0 auto;\n            \n        }\n    "],
                        directives: [router_1.ROUTER_DIRECTIVES, menu_component_1.MenuComponent, recipient_type_component_1.RecipientTypeComponent],
                        providers: [menu_service_1.MenuService]
                    }), 
                    __metadata('design:paramtypes', [menu_service_1.MenuService])
                ], PersonalLinkFormComponent);
                return PersonalLinkFormComponent;
            }());
            exports_1("PersonalLinkFormComponent", PersonalLinkFormComponent);
        }
    }
});
//# sourceMappingURL=personal-link-form.component.js.map