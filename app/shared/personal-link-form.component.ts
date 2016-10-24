import {Component} from 'angular2/core';
import {NgForm} from 'angular2/common';
import{MenuComponent} from '../shared/menu.component';
import {PersonalLink} from './personal-link-form';
// import {linkType} from './link.type.component'
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {RecipientTypeComponent} from './recipient-type.component';
import {MenuService} from '../shared/menu.service'

@Component({
    selector: 'personal-link-form',
    templateUrl : `app/shared/personal-link-form.component.html`,
    styles: [`
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
    `], 
    directives: [ROUTER_DIRECTIVES, MenuComponent, RecipientTypeComponent],
    providers: [MenuService]
})

export class PersonalLinkFormComponent {
    personalForm: boolean = false;
    publicForm: boolean = false;
    step:number = 3;
    states = ["AA","AK","AL","AR","AZ","CA","CO","CT","DC","DE","FL","GA","GU","HI","IA","ID", "IL","IN","KS","KY","LA","MA","MD","ME","MH","MI","MN","MO","MS","MT","NC","ND","NE","NH","NJ","NM","NV","NY", "OH","OK","OR","PA","PR","PW","RI","SC","SD","TN","TX","UT","VA","VI","VT","WA","WI","WV","WY"]
    
    model = new PersonalLink(1, "", "", "", "", "", "", this.states[0], "", "", "", "");
    
    submitted = false;

    constructor(private _menuService: MenuService) {

    }

    onSubmit() { this.submitted = true; }
    ngAfterViewInit() {
        
         if(this.step === 3) {
         let activeMenu = document.querySelector('li.active');
          activeMenu.classList.remove('active');
          activeMenu.classList.add('unlocked');
          activeMenu.nextElementSibling.classList.add('active'); 
          activeMenu.nextElementSibling.classList.add('unlocked');   
          console.log("Step 3!");
    }

    }
    
    // get diagnostic() { return JSON.stringify(this.model); }
    
    active = true;
    onChange(item) {
        //this._menuService.checkMenu(3);
    //this.step++;
    // if(this.step === 3) {
    //      let activeMenu = document.querySelector('li.active');
    //       activeMenu.classList.remove('active');
    //       activeMenu.classList.add('unlocked');
    //       activeMenu.nextElementSibling.classList.add('active'); 
    //       activeMenu.nextElementSibling.classList.add('unlocked');   
    //       console.log("Step 3!");
    // }
      
    //   if(item === this.linkType[2]) {
    //       //change menu
    //       console.log(item);
    //       let activeMenu = document.querySelector('li.active');
    //       activeMenu.classList.remove('active');
    //       activeMenu.classList.add('unlocked');
    //       activeMenu.nextElementSibling.classList.add('active'); 
    //       activeMenu.nextElementSibling.classList.add('unlocked');     
    //   }
      if(this.publicForm ) {
          this.publicForm = true;
      }
      else {
          this.publicForm = !this.publicForm;
          
      }

    console.log("WTF? " +item);
    }
    newPersonalLink() {
        this.active = false;
        setTimeout(()=> this.active=true, 0);
    }
    
}



