System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var SmartLink;
    return {
        setters:[],
        execute: function() {
            SmartLink = (function () {
                function SmartLink(id, linkName, firstName, lastName, linkType, address, country, state, link, products) {
                    this.id = id;
                    this.linkName = linkName;
                    this.firstName = firstName;
                    this.lastName = lastName;
                    this.linkType = linkType;
                    this.address = address;
                    this.country = country;
                    this.state = state;
                    this.link = link;
                    this.products = products;
                }
                return SmartLink;
            }());
            exports_1("SmartLink", SmartLink);
        }
    }
});
//# sourceMappingURL=smart.link.component.js.map