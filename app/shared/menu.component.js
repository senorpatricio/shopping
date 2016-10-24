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
    var MenuComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            MenuComponent = (function () {
                function MenuComponent(_router) {
                    this._router = _router;
                    this.menuItems = [];
                    this.selected = null;
                    this.unlocked = new core_1.EventEmitter();
                    this.menuItems = ["Step 1", "Step 2", "Step 3", "Step 4"];
                }
                MenuComponent.prototype.checkMenu = function (event, step) {
                    // this.selected = mi;
                    var activeMenu = document.querySelector('li.active');
                    var unlocked = document.querySelector('li.unlocked');
                    var accordion = document.getElementsByTagName('accordion');
                    activeMenu.classList.remove('active');
                    activeMenu.classList.add('active');
                    if (event.target.classList.contains('unlocked')) {
                        this._router.navigate(['Start']);
                        activeMenu.classList.remove('active');
                        event.target.classList.add('active');
                        //activeMenu.nextElementSibling.classList.add('active');
                        console.log("Son of a mother...!");
                    }
                    console.log("Event being logged: " + event);
                };
                // next step
                MenuComponent.prototype.nextStep = function (step) {
                    console.log(step + " Son of a mother...! 3 EF");
                    if (step == 3) {
                        var activeMenu = document.querySelector('li.active');
                        activeMenu.classList.remove('active');
                        activeMenu.classList.add('unlocked');
                        activeMenu.nextElementSibling.classList.add('active');
                        activeMenu.nextElementSibling.classList.add('unlocked');
                        console.log("Son of a mother...! 3");
                    }
                };
                MenuComponent = __decorate([
                    core_1.Component({
                        selector: 'menu-app',
                        templateUrl: 'app/shared/menu.component.html'
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], MenuComponent);
                return MenuComponent;
            }());
            exports_1("MenuComponent", MenuComponent);
        }
    }
});
//# sourceMappingURL=menu.component.js.map