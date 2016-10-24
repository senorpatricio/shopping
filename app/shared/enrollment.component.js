System.register(['angular2/core', 'angular2/router', './enrollment', '../shared/menu.service', '../shared/linkBuild.service'], function(exports_1, context_1) {
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
    var core_1, router_1, enrollment_1, menu_service_1, linkBuild_service_1;
    var EnrollmentComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (enrollment_1_1) {
                enrollment_1 = enrollment_1_1;
            },
            function (menu_service_1_1) {
                menu_service_1 = menu_service_1_1;
            },
            function (linkBuild_service_1_1) {
                linkBuild_service_1 = linkBuild_service_1_1;
            }],
        execute: function() {
            EnrollmentComponent = (function () {
                function EnrollmentComponent(_menuService, builder) {
                    this._menuService = _menuService;
                    this.builder = builder;
                    this.linkType = ['Smart Link Type', 'Retail Customer', 'Preferred Customer'];
                    this.incomePositionNums = ['Income Position #', '1', '2', '3'];
                    this.lineNums = ['Line #', '1', '2', '3'];
                    this.showCoApplicant = false;
                    this.hideLink = true;
                    this.radioIndividual = false;
                    this.radioCompany = true;
                    this.submitted = false;
                    this.enrollProducts = false;
                    this.states = ["Select State", "AK", "AL", "AR", "AZ", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "GU", "HI", "IA", "ID", "IL", "IN", "KS", "KY", "LA", "MA", "MD", "ME", "MH", "MI", "MN", "MO", "MS", "MT", "NC", "ND", "NE", "NH", "NJ", "NM", "NV", "NY", "OH", "OK", "OR", "PA", "PR", "PW", "RI", "SC", "SD", "TN", "TX", "UT", "VA", "VI", "VT", "WA", "WI", "WV", "WY"];
                    this.countries = ["Select Home Country", "Australia", "Austria", "Belgium", "Canada", "China", "Germany", "Denmark", "Spain", "Estonia", "Finland", "France", "United Kingdom", "Hong Kong", "Croatia", "Hungary", "Ireland", "Italy", "Japan", "Kazakhstan", "Korea", "Mexico", "The Netherlands", "Poland", "Portugal", "Russian Federation", "Singapore", "Sweden", "Taiwan", "Ukraine", "United States of America"];
                    this.enrollModel = new enrollment_1.EnrollPerson(1, '', '', '', this.incomePositionNums[0], this.lineNums[0], '', '', '', '', '', '', '', '', this.states[0], '', this.countries[0], '', '', '', '', '', '', '', '', '');
                }
                EnrollmentComponent.prototype.onChecked = function (checked, flag) {
                    if (flag === true) {
                        this.checked = checked;
                    }
                    else {
                        this.checked = checked;
                    }
                };
                EnrollmentComponent.prototype.onClick = function () {
                    this.showCoApplicant = true;
                    this.hideLink = false;
                };
                EnrollmentComponent.prototype.onSelect = function (countryItem) {
                    if (countryItem === this.linkType[3]) {
                        console.log(countryItem);
                    }
                };
                EnrollmentComponent.prototype.onSubmit = function () { this.submitted = true; };
                // checkMarking() {
                //     this.checkmark = true;
                // }
                EnrollmentComponent.prototype.companySelect = function (radioCompany, radioIndividual) {
                    this.radioCompany = true;
                    this.radioIndividual = false;
                    console.log("Company");
                };
                EnrollmentComponent.prototype.individualSelect = function (radioCompany, radioIndividual) {
                    this.radioCompany = false;
                    this.radioIndividual = true;
                    console.log("Individual");
                };
                EnrollmentComponent.prototype.ngOnInit = function () {
                    this._menuService.checkMenu(2, "two");
                    // this.smartName = this.builder.smartlinkname.name;
                };
                EnrollmentComponent.prototype.showEnrollProducts = function () {
                    this._menuService.checkMenu(3, "three");
                    this.enrollProducts = true;
                };
                EnrollmentComponent = __decorate([
                    core_1.Component({
                        selector: 'enrollment',
                        templateUrl: "app/shared/enrollment.component.html",
                        styles: ["\n        enrollment {\n            width: 100%;\n        }\n        .enrollment-form {\n            width: 100%;\n        }\n        .enrollment-section h4 {\n            margin: 15px 0 10px;\n            font-weight: 600;\n            color: #828784;\n            text-align: left;\n        }\n        .link-name {\n            margin: 5px 9px;\n        }\n        .link-name input {\n            height: 39px;\n        }\n        hr {\n            border-top: 2px solid #ccc;\n            margin: 0 auto 20px;\n            max-width: 91%;\n        }\n        .link-type-input {\n            border: none;\n            box-shadow: none;\n            border-radius: 0;\n            background-color: #f1f1f1;\n            margin: 0 auto 10px;       \n        }\n        .enrollment-section {\n            position: relative;\n            margin: 0 auto;\n            text-align: center;\n            width: 92%;\n        }\n        .enrollment-section select {\n            background: #f1f1f1 url(\"./app/assets/img/arrow-down.png\") no-repeat 96% 50%;\n        }\n        .enrollment-section-text {\n            font-size: 1em;\n            font-weight: 500;\n            text-align: left;\n            margin: 15px 0 5px;\n        }\n        .radio {\n            text-align: left;\n        }\n        input[type=radio]:checked:after {\n            background-color: #d1d3d1;\n        }\n        .enrollment-section hr {\n            border-top: 2px solid #ccc;\n            margin: 0 auto 20px;\n            max-width: 100%;\n        }\n        .personal-note-text {\n            color: #AC955B;\n            text-align: left;\n            margin-left: 15px;\n        }\n        .unchecked {\n            position: relative;\n            float: left;\n            background: url('/app/assets/img/checkbox.png') no-repeat 0 -21px;\n            width: 16px;\n            height: 16px;\n            margin-right: 5px;\n        }\n        .way-checked {\n            position: relative;\n            float: left;\n            background: url('/app/assets/img/checkbox.png') no-repeat 0 0;\n            width: 16px;\n            height: 16px;\n            margin-right: 5px;\n        } \n        .consent {\n            width: 92%;\n            margin: 0 auto;\n        }\n        input[type=checkbox] + label {\n            margin: 0;\n            background: #fff;\n            border: 1px solid black;\n            height: 16px;\n            width: 16px;\n            display:inline-block;\n            padding: 0 0 0 0px;\n        }\n        input[type=checkbox]:checked + label {\n            // background-image: url(app/assets/img/checkbox@2x.png); \n            // background-position: 48px 110px;\n            // height: 16px;\n            // width: 16px;\n            // display:inline-block;\n            // padding: 0 0 0 0px;\n            background: url('/app/assets/img/checkbox.png') no-repeat 0 0;\n            width: 16px;\n            height: 16px;\n            margin-right: 5px;\n        }\n\n        "],
                        providers: [enrollment_1.EnrollPerson],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [menu_service_1.MenuService, linkBuild_service_1.LinkBuildService])
                ], EnrollmentComponent);
                return EnrollmentComponent;
            }());
            exports_1("EnrollmentComponent", EnrollmentComponent);
        }
    }
});
//# sourceMappingURL=enrollment.component.js.map