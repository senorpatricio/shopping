System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var EnrollPerson;
    return {
        setters:[],
        execute: function() {
            EnrollPerson = (function () {
                function EnrollPerson(id, sponsorId, placementId, placementName, incomePositionNum, lineNum, ssn, firstName, middleInitial, lastName, birthDate, address1, address2, city, state, zipCode, country, dayPhone, eveningPhone, mobilePhone, fax, email, coFirstName, coLastName, coSsn, join) {
                    this.id = id;
                    this.sponsorId = sponsorId;
                    this.placementId = placementId;
                    this.placementName = placementName;
                    this.incomePositionNum = incomePositionNum;
                    this.lineNum = lineNum;
                    this.ssn = ssn;
                    this.firstName = firstName;
                    this.middleInitial = middleInitial;
                    this.lastName = lastName;
                    this.birthDate = birthDate;
                    this.address1 = address1;
                    this.address2 = address2;
                    this.city = city;
                    this.state = state;
                    this.zipCode = zipCode;
                    this.country = country;
                    this.dayPhone = dayPhone;
                    this.eveningPhone = eveningPhone;
                    this.mobilePhone = mobilePhone;
                    this.fax = fax;
                    this.email = email;
                    this.coFirstName = coFirstName;
                    this.coLastName = coLastName;
                    this.coSsn = coSsn;
                    this.join = join;
                }
                return EnrollPerson;
            }());
            exports_1("EnrollPerson", EnrollPerson);
        }
    }
});
//# sourceMappingURL=enrollment.js.map