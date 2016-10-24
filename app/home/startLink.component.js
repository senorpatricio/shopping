System.register(['angular2/core', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, router_1;
    var StartLinkComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            StartLinkComponent = (function () {
                function StartLinkComponent() {
                    this.memberName = "John Winger";
                    this.gameName = "Global Thermonuclear War";
                    //manageLinks: boolean = false;
                    this.isValid = true;
                }
                //showMenu:boolean = true; 
                StartLinkComponent.prototype.ngOnInit = function () {
                    var navMenu = document.querySelector('nav');
                    navMenu.classList.remove('showMenu');
                    navMenu.classList.add('hideMenu');
                    // if(this.manageLinks) {
                    //     this.isValid = true;
                    // }
                };
                StartLinkComponent = __decorate([
                    core_1.Component({
                        selector: 'start-link',
                        templateUrl: 'app/home/start.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], StartLinkComponent);
                return StartLinkComponent;
            }());
            exports_1("StartLinkComponent", StartLinkComponent);
        }
    }
});
//# sourceMappingURL=startLink.component.js.map