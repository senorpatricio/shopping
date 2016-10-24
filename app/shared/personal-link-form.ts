export class PersonalLink {
    constructor(
        public id: number,
        public linkName: string,
        public firstName: string,
        public lastName: string,
        public address1: string,
        public address2: string,
        public city: string,
        public state: string,
        public zipCode: string,
        public country: string,
        public mobilePhoneNumber: string,
        public email: string
    ) {}
}
