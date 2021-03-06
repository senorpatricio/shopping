import {Component, Output} from "angular2/core"
import {PersonalLink} from './personal-link-form';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {MenuComponent} from '../shared/menu.component';
import {MenuService} from '../shared/menu.service';
import {LinkBuildService} from '../shared/linkBuild.service';
import {LinkTypeComponent} from '../shared/link.type.component';


@Component({
    selector: 'recipient-type',
    // template: `
    //   <menu-app></menu-app>
    //     <p id="link-question">Is this a personal or a public link?</p>
    //     <div class="form-group select-box chooser">
    //         <select (change)="onChange($event.target.value)" name="RecipientType" id="recipient-type" class="personal-link-input">
    //           <option *ngFor="let recipientType of recipientTypes" [value]="recipientType" >
    //             {{recipientType}}   
    //           </option>
    //           <div> selection= {{selectedRecipientType}}</div>
    //         </select>
    //     </div> 
    // `,
    templateUrl : `app/shared/recipient-type.component.html`, 
    styles: [`
        nav.hideMenu {
            display: block;
        }
        #link-question {
            font-size: 0.875em;
            width: 95%;
            margin: 20px auto 10px;
        }
        #recipient-type {
            margin-top: 10px;
        }
        .intro-text {
            margin-left: 12px;
            font-size: 0.875em;
            width: 93%;
            line-height: initial;    
        }
        .personal-link-input {
            border: none;
            box-shadow: none;
            border-radius: 0;
            background-color: #f1f1f1;
            width: 95%;
            margin: 10px auto;       
        }
        .consent {
            margin: 20px auto 0;
            width: 95%;
            color: #999;
            line-height: initial;
            letter-spacing: .2px;
            font-size: .875rem;
        }
        .chooser {
            padding: 0;
        }
        .chooser select {
            color: #ccc;
        }
        hr {
            border-top: 2px solid #ccc;
            width: 95%;
            margin: 0 auto;
            
        }
        #link-question {
            font-size: 0.875em;
            width: 95%;
            margin: 20px auto 10px;
        }
        #recipient-type {
            margin-top: 10px;
        }      
        .personal-link-input {
            border: none;
            box-shadow: none;
            border-radius: 0;
            background-color: #f1f1f1;
            width: 95%;
            margin: 10px auto;   
        }
        .chooser {
            padding: 0;
        }
        .chooser select {
            color: #999;
        }
        #share-text {
            font-weight: 600;
            margin-left: 10px;
            margin-top: 10px;
            color: #AAAAAA;
        }
        .copy-text {
            margin-left: 10px;
            margin-bottom: 0;
            line-height: 1.1;
        }
        #copy-button {
            position: absolute;
            text-align: center;
            right: 8px;
            top: 72px;
            background-color: #B19B65;
            width: 80px;
            height: 38px;
            padding-top: 9px;
            color: #fff;
            font-size: small;
        }
        .social-media-section {
            width: 95%;
            margin-bottom: 10px;
        }
        #left-icon {
            margin-left: 10px;
        }
        .social-icon {
            margin: 8px 8px 8px 0;
        }
        #send-button {
            position: absolute;
            text-align: center;
            right: 8px;
            top: 238px;
            background-color: #B19B65;
            width: 80px;
            height: 38px;
            padding-top: 9px;
            color: #fff;
            font-size: small;
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
            background-image: url(app/assets/img/checkbox.png); 
            background-position: 48px 110px;
            height: 16px;
            width: 16px;
            display:inline-block;
            padding: 0 0 0 0px;
        }
    `],
    outputs: ['publicForm', 'personalForm'],
    directives: [ROUTER_DIRECTIVES, MenuComponent, LinkTypeComponent],
    providers: [MenuService, LinkBuildService] 
     
})
export class RecipientTypeComponent{
    recipientTypes = ["Select Recipient Type", "Personal Link", "Public Link"];
    smartName: string;
    checked: boolean;
    personalForm:boolean = false; 
    publicForm:boolean = false; 
    step:number = 3;
    states = ["AA","AK","AL","AR","AZ","CA","CO","CT","DC","DE","FL","GA","GU","HI","IA","ID", "IL","IN","KS","KY","LA","MA","MD","ME","MH","MI","MN","MO","MS","MT","NC","ND","NE","NH","NJ","NM","NV","NY", "OH","OK","OR","PA","PR","PW","RI","SC","SD","TN","TX","UT","VA","VI","VT","WA","WI","WV","WY"]
    model = new PersonalLink(1, "", "", "", "", "", "", this.states[0], "", "", "", "");
    submitted = false;
    active = true;
    
    onSubmit() { this.submitted = true; }
    // get diagnostic() { return JSON.stringify(this.model); }
    
    
    constructor(private _menuService:MenuService, public builder: LinkBuildService) {
            
    }
    newPersonalLink() {
        this.active = false;
        setTimeout(()=> this.active=true, 0);
    }
    newPublicLink() {
        this.active = false;
        setTimeout(()=> this.active=true, 0);
    }

    onChecked(checked, flag) {
        if(flag === true) {
            this.checked = checked;
        }
        else {
            this.checked = checked;
        }
    }

    onChange(selectedRecipientType) {

        if(selectedRecipientType === this.recipientTypes[1]) {
            //change menu
            this.personalForm = true;
            this.publicForm = false;
            console.log(selectedRecipientType);
        }
        else if(selectedRecipientType === this.recipientTypes[2]) {
            this.publicForm = true;
            this.personalForm = false;
            console.log(selectedRecipientType);
        }
        else {
            this.publicForm = false;
            this.personalForm = false;
        }
    }
    ngOnInit() {
        this._menuService.checkMenu(3, "three");
        this.smartName = this.builder.smartlinkname.name;
    }

}