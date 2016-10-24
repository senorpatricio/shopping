export class EnrollPerson {
    constructor(
        public id: number,
        public sponsorId: string,

        public placementId: string,
        public placementName: string,
        public incomePositionNum: string,
        public lineNum: string,
        public ssn: string,
        public firstName: string,
        public middleInitial: string,
        public lastName: string,
        public birthDate: string,                
        public address1: string,
        public address2: string,
        public city: string,
        public state: string,
        public zipCode: string,
        public country: string,
        public dayPhone: string,
        public eveningPhone: string,
        public mobilePhone: string,
        public fax: string,
        public email: string,
        public coFirstName: string,
        public coLastName: string,
        public coSsn: string,
        public join: string
    ) {}
}