System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var PersonalLink;
    return {
        setters:[],
        execute: function() {
            PersonalLink = (function () {
                function PersonalLink(id, linkName, firstName, lastName, address1, address2, city, state, zipCode, country, mobilePhoneNumber, email) {
                    this.id = id;
                    this.linkName = linkName;
                    this.firstName = firstName;
                    this.lastName = lastName;
                    this.address1 = address1;
                    this.address2 = address2;
                    this.city = city;
                    this.state = state;
                    this.zipCode = zipCode;
                    this.country = country;
                    this.mobilePhoneNumber = mobilePhoneNumber;
                    this.email = email;
                }
                return PersonalLink;
            }());
            exports_1("PersonalLink", PersonalLink);
        }
    }
});
//# sourceMappingURL=personal-link-form.js.map