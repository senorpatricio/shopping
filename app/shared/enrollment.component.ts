import {Component, OnInit,Output, EventEmitter} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {EnrollPerson} from './enrollment';
import {EnrollProductComponent} from './enroll-product.component';
import {MenuService} from '../shared/menu.service';
import {LinkBuildService} from '../shared/linkBuild.service';
import {LinkTypeComponent} from './link.type.component';

@Component({
    selector: 'enrollment',
    templateUrl : `app/shared/enrollment.component.html`, 
        styles : [`
        enrollment {
            width: 100%;
        }
        .enrollment-form {
            width: 100%;
        }
        .enrollment-section h4 {
            margin: 15px 0 10px;
            font-weight: 600;
            color: #828784;
            text-align: left;
        }
        .link-name {
            margin: 5px 9px;
        }
        .link-name input {
            height: 39px;
        }
        hr {
            border-top: 2px solid #ccc;
            margin: 0 auto 20px;
            max-width: 91%;
        }
        .link-type-input {
            border: none;
            box-shadow: none;
            border-radius: 0;
            background-color: #f1f1f1;
            margin: 0 auto 10px;       
        }
        .enrollment-section {
            position: relative;
            margin: 0 auto;
            text-align: center;
            width: 92%;
        }
        .enrollment-section select {
            background: #f1f1f1 url("./app/assets/img/arrow-down.png") no-repeat 96% 50%;
        }
        .enrollment-section-text {
            font-size: 1em;
            font-weight: 500;
            text-align: left;
            margin: 15px 0 5px;
        }
        .radio {
            text-align: left;
        }
        input[type=radio]:checked:after {
            background-color: #d1d3d1;
        }
        .enrollment-section hr {
            border-top: 2px solid #ccc;
            margin: 0 auto 20px;
            max-width: 100%;
        }
        .personal-note-text {
            color: #AC955B;
            text-align: left;
            margin-left: 15px;
        }
        .unchecked {
            position: relative;
            float: left;
            background: url('/app/assets/img/checkbox.png') no-repeat 0 -21px;
            width: 16px;
            height: 16px;
            margin-right: 5px;
        }
        .way-checked {
            position: relative;
            float: left;
            background: url('/app/assets/img/checkbox.png') no-repeat 0 0;
            width: 16px;
            height: 16px;
            margin-right: 5px;
        } 
        .consent {
            width: 92%;
            margin: 0 auto;
        }
        input[type=checkbox] + label {
            margin: 0;
            background: #fff;
            border: 1px solid black;
            height: 16px;
            width: 16px;
            display:inline-block;
            padding: 0 0 0 0px;
        }
        input[type=checkbox]:checked + label {
            // background-image: url(app/assets/img/checkbox@2x.png); 
            // background-position: 48px 110px;
            // height: 16px;
            // width: 16px;
            // display:inline-block;
            // padding: 0 0 0 0px;
            background: url('/app/assets/img/checkbox.png') no-repeat 0 0;
            width: 16px;
            height: 16px;
            margin-right: 5px;
        }

        `],
        providers: [EnrollPerson],
        directives: [ROUTER_DIRECTIVES] 

})

export class EnrollmentComponent {
    linkType = ['Smart Link Type', 'Retail Customer', 'Preferred Customer'];
    incomePositionNums = ['Income Position #','1','2','3'];
    lineNums = ['Line #','1','2','3'];
    showCoApplicant: boolean = false;
    hideLink: boolean = true;
    checked: boolean;
    radioIndividual: boolean = false;
    radioCompany: boolean = true;
    submitted: boolean = false;
    enrollProducts: boolean = false;
    
    states = ["Select State","AK","AL","AR","AZ","CA","CO","CT","DC","DE","FL","GA","GU","HI","IA","ID", "IL","IN","KS","KY","LA","MA","MD","ME","MH","MI","MN","MO","MS","MT","NC","ND","NE","NH","NJ","NM","NV","NY", "OH","OK","OR","PA","PR","PW","RI","SC","SD","TN","TX","UT","VA","VI","VT","WA","WI","WV","WY"];
    countries = ["Select Home Country","Australia","Austria","Belgium","Canada","China","Germany","Denmark","Spain","Estonia","Finland","France","United Kingdom","Hong Kong","Croatia","Hungary","Ireland","Italy","Japan","Kazakhstan","Korea","Mexico","The Netherlands","Poland","Portugal","Russian Federation","Singapore","Sweden","Taiwan","Ukraine","United States of America"];
    enrollModel = new EnrollPerson(1,'','','',this.incomePositionNums[0],this.lineNums[0],'','','','','','','','',this.states[0],'',this.countries[0],'','','','','','','','','')
    
    constructor(private _menuService:MenuService, public builder: LinkBuildService) {

    }
    onChecked(checked, flag) {
        if(flag === true) {
            this.checked = checked;
        }
        else {
            this.checked = checked;
        }
    }
    onClick() {
        this.showCoApplicant = true;
        this.hideLink = false;
    }
    
    onSelect(countryItem) {
        if(countryItem === this.linkType[3]) {
            console.log(countryItem);
        }
    }
    onSubmit() { this.submitted = true; }
    // checkMarking() {
    //     this.checkmark = true;
    // }

    companySelect(radioCompany, radioIndividual) {
        this.radioCompany = true;
        this.radioIndividual = false;
        console.log("Company");
    }
    individualSelect(radioCompany, radioIndividual) {
        this.radioCompany = false;
        this.radioIndividual = true;
        console.log("Individual");
    }
    ngOnInit() {
        this._menuService.checkMenu(2, "two");
        // this.smartName = this.builder.smartlinkname.name;
    }

    showEnrollProducts() {
        this._menuService.checkMenu(3, "three");
        this.enrollProducts = true;
    }

    
}