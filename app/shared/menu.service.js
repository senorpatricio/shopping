System.register(['angular2/core', 'angular2/http'], function(exports_1, context_1) {
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
    var core_1, http_1;
    var MenuService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            MenuService = (function () {
                function MenuService(_http) {
                    this._http = _http;
                    this.pageNames = ["Step 1", "Step 2", "Step 3", "step 4"];
                }
                MenuService.prototype.checkMenu = function (page, id) {
                    var navMenu = document.querySelector('nav');
                    switch (page) {
                        case 1:
                            console.log("Step 1!");
                            var activeMenu = document.querySelector('li.active');
                            var currentMenu = document.querySelector('li.one');
                            activeMenu.classList.remove('active');
                            activeMenu.classList.add('unlocked');
                            currentMenu.classList.add('active');
                            navMenu.classList.remove('hideMenu');
                            navMenu.classList.add('showMenu');
                            // activeMenu.nextElementSibling.classList.add('active');
                            // activeMenu.nextElementSibling.classList.add('unlocked');
                            return page;
                        case 2:
                            console.log("Step 2! " + id);
                            currentMenu = document.querySelector('li.two');
                            activeMenu = document.querySelector('li.active');
                            activeMenu.classList.remove('active');
                            activeMenu.classList.add('unlocked');
                            currentMenu.classList.add('active');
                            // activeMenu.nextElementSibling.classList.add('active');
                            // activeMenu.nextElementSibling.classList.add('unlocked');
                            return page;
                        case 3:
                            console.log("Step 3! " + id);
                            currentMenu = document.querySelector('li.three');
                            activeMenu = document.querySelector('li.active');
                            activeMenu.classList.remove('active');
                            activeMenu.classList.add('unlocked');
                            currentMenu.classList.add('active');
                            // activeMenu.nextElementSibling.classList.add('active');
                            // activeMenu.nextElementSibling.classList.add('unlocked');
                            return page;
                        case 4:
                            console.log("Step 4! " + id);
                            //let navMenu = document.querySelector('nav');
                            currentMenu = document.querySelector('li.four');
                            activeMenu = document.querySelector('li.active');
                            activeMenu.classList.remove('active');
                            activeMenu.classList.add('unlocked');
                            currentMenu.classList.add('active');
                            navMenu.classList.remove('hideMenu');
                            navMenu.classList.add('showMenu');
                            // activeMenu.nextElementSibling.classList.add('active');
                            // activeMenu.nextElementSibling.classList.add('unlocked');
                            return page;
                    }
                    // loop through pagNames to get what page ypu are on
                    for (var i = 0; i < this.pageNames.length; i++) {
                    }
                };
                MenuService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], MenuService);
                return MenuService;
            }());
            exports_1("MenuService", MenuService);
        }
    }
});
//# sourceMappingURL=menu.service.js.map