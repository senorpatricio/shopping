System.register(['angular2/core', 'angular2/router', '../shared/menu.component', '../shared/link.service', '../shared/menu.service'], function(exports_1, context_1) {
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
    var core_1, router_1, menu_component_1, link_service_1, menu_service_1;
    var ManageLinksComponent;
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
            function (link_service_1_1) {
                link_service_1 = link_service_1_1;
            },
            function (menu_service_1_1) {
                menu_service_1 = menu_service_1_1;
            }],
        execute: function() {
            ManageLinksComponent = (function () {
                function ManageLinksComponent(_manageLinkService, _managePersonalLinks) {
                    this._manageLinkService = _manageLinkService;
                    this._managePersonalLinks = _managePersonalLinks;
                    this.pageHeader = "Your Smart Links";
                    this.dropMenu = ["Link Status", "Active Links", "Inactive Links"];
                    this.tableNames = ["NAME", "PRICE", "PRICE", "SALES"];
                    this.activeLinks = false;
                    this.inactiveLinks = false;
                    this.deleteInactLink = false;
                    this.showReactivate = false;
                }
                ManageLinksComponent.prototype.onChange = function (item) {
                    console.log(item);
                    if (item === "Active Links") {
                        this.activeLinks = true;
                        this.inactiveLinks = false;
                    }
                    if (item === "Inactive Links") {
                        this.inactiveLinks = true;
                        this.activeLinks = false;
                    }
                };
                ManageLinksComponent.prototype.ngOnInit = function () {
                    console.log("Managed.. " + this._manageLinkService.manageLinks());
                    this.manageProducts();
                    this.managePersonalLinks();
                };
                ManageLinksComponent.prototype.manageProducts = function () {
                    this.links = this._manageLinkService.manageLinks();
                };
                ManageLinksComponent.prototype.managePersonalLinks = function () {
                    this.plinks = this._managePersonalLinks.personalLinks();
                };
                ManageLinksComponent.prototype.publicLinks = function (event) {
                    var btn1 = document.querySelector("#personLink");
                    var btn2 = document.querySelector("#pubLink");
                    //console.log(event.target.id);
                    if (event.target.id === "personLink") {
                        //console.log("F an A!");
                        btn1.classList.add("btn");
                        btn1.classList.remove("dbtn");
                        btn2.classList.add("dbtn");
                        btn2.classList.remove("btn");
                    }
                    if (event.target.id === "pubLink") {
                        //console.log("F an B!");
                        btn2.classList.add("btn");
                        btn2.classList.remove("dbtn");
                        btn1.classList.add("dbtn");
                        btn1.classList.remove("btn");
                    }
                };
                ManageLinksComponent.prototype.deleteLink = function () {
                    this.hideDelete();
                };
                ManageLinksComponent.prototype.showDelete = function () {
                    this.deleteInactLink = true;
                };
                ManageLinksComponent.prototype.hideDelete = function () {
                    this.deleteInactLink = false;
                };
                ManageLinksComponent.prototype.showReactivateLink = function () {
                    this.showReactivate = true;
                    var thedate = new Date();
                    thedate.setDate(thedate.getDate() + 60); //number  of days to add, e.x. 15 days
                    var dateFormated = thedate.toLocaleDateString().substr(0, 10);
                    this.reactivateDate = dateFormated;
                };
                ManageLinksComponent.prototype.hideReactivateLink = function () {
                    this.showReactivate = false;
                };
                ManageLinksComponent = __decorate([
                    core_1.Component({
                        selector: 'manage-links',
                        templateUrl: 'app/products/manage.links.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES, menu_component_1.MenuComponent],
                        providers: [menu_service_1.MenuService, link_service_1.ManageLinkService]
                    }), 
                    __metadata('design:paramtypes', [link_service_1.ManageLinkService, link_service_1.ManageLinkService])
                ], ManageLinksComponent);
                return ManageLinksComponent;
            }());
            exports_1("ManageLinksComponent", ManageLinksComponent);
        }
    }
});
//# sourceMappingURL=manage.links.component.js.map