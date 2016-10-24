import {Component, Output, OnInit} from "angular2/core";
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {MenuComponent} from '../shared/menu.component';
import {MenuService} from '../shared/menu.service';
import {LinkTypeComponent} from './link.type.component';
import {LinkBuildService} from '../shared/linkBuild.service';

@Component({
    selector: 'public-share',
    templateUrl : `app/shared/public-share.component.html`, 
    styles: [`
         #link-name {
            font-size: 36px;
            margin-top: 20px;   
        }
        hr {
            border-top: 2px solid #ccc;
            width: 91%;
            margin: 0 auto;
            
        }
        .personal-link-input {
            border: none;
            box-shadow: none;
            border-radius: 0;
            background-color: #f1f1f1;
            width: 91%;      
        }
        #share-text {
            font-weight: 600;
            margin-left: 15px;
            margin-top: 10px;
            color: #AAAAAA;
        }
        .copy-section {
            width: 91%;
            margin: 0 auto;
            display: -webkit-flex;
            display: flex;
            -webkit-flex-direction: row;
            flex-direction: row;
        }
        .copy-text {
            margin-left: 15px;
            line-height: 1.1;
            width: 91%;
        }
        #copy-button {
            text-align: center;
            background-color: #B19B65;
            width: 80px;
            height: 39px;
            padding-top: 9px;
            color: #fff;
            font-size: small;
        }
        .copy-overlay {
            height: 39px;
            left: 15px;
            width: 91%;
            padding-top: 7px;
            padding-left: 10px;
            background-color: #417505;
            position: absolute;
            top: 137px;
            
            z-index: 50;
            display: block;
            box-shadow: 1px 1px 5px #333333;
        }
        .copy-overlay p {
            color: #fff;
        }
        .social-media-section {
            width: 91%;
            margin-bottom: 10px;
        }
        #left-icon {
            margin-left: 15px;
        }
        .social-icon {
            margin: 8px 8px 8px 0;
        }
        #send-button {
            text-align: center;
            background-color: #B19B65;
            width: 80px;
            height: 39px;
            border-radius: 0;
        }
        #send-button a {
            color: #fff;
            font-size: small;
        }
        #send-note {
            background-color: transparent;
            text-align: right;
        }
        .personal-note-text {
            color: #AC955B;
            margin-left: 15px;
        }
        .personal-notearea {
            margin: 0 auto 10px;
        }
        #send-button-with-note {
            text-align: center;
            background-color: #B19B65;
            width: 80px;
            height: 38px;
            padding-top: 12px;
            color: #fff;
            font-size: small;
            float: right;
            margin-right: 15px;
            margin-bottom: 20px;
        }
        .btn {
            margin-bottom: 18px;
            border-radius: 0px;
            width: 91%;
            margin-left: 15px;
            font-size: 1.3em;
        }
        .dbtn {
            margin-bottom: 18px;
            border-radius: 0px;
            width: 91%;
            margin-left: 15px;
            font-size: 1.3em;
        }
        .review-order {
            top: 100px;
        }
        .review-order h1 {
            font-size: xx-large;
            margin-top: 20px;
        }
        .review-order h4 {
            color: #417505;
            margin-left: 15px;
            margin-top: 10px;
        }
        .review-order #fail-text {
            color: #D0021B;
            margin-left: 15px;
            margin-top: 10px;
        }
        .showFailReview {
            position: fixed;
            bottom: 0;
                left: 0;
                width: 100%;
            z-index: 55;
            border-top: 1px solid #D8D8D8;
            background: #fff;
            
        }
    }
    `],
    directives: [ROUTER_DIRECTIVES, MenuComponent, LinkTypeComponent],
    inputs: ['linkName'] 

})

export class PublicShareComponent {
    showNote: boolean = false;
    hideLink: boolean = true;
    sendSuccess: boolean = false;
    sendFail: boolean = false;
    copyConfirm: boolean = false;
    linkname;

    constructor(public builder: LinkBuildService, private _menuService: MenuService) {

    }

    onClick() {
        this.showNote = true;
        this.hideLink = false;
    }

    showReview() { // Show the success pop-up
        console.log("SHOW!")
        this.sendSuccess = true;
    }
    hideReview() {  // Hide the success pop-up
        console.log("hide!");
        this.sendSuccess = false;
    }
    failReview() {  // Show the failure pop-up
        console.log("Failed!");
        this.sendFail = true;
    }
    hideFailReview() { // Hide the failure pop-up
        console.log("Hidden!");
        this.sendFail = false;
    }
    showCopy() {  // show copy overlay, with a timer to hide it automagically
        this.copyConfirm = true;
        setTimeout(() => this.copyConfirm = false, 1000);
        console.log("Copied!");
    }

    ngAfterViewInit() {
        this.linkname = this.builder.smartlinkname.name;
        console.log(this.linkname);
    }
    ngOnInit() {
        this._menuService.checkMenu(4, "four"); 
    }
}