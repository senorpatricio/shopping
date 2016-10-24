import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';



@Component({
    selector: 'start-link',
    templateUrl: 'app/home/start.component.html',
     directives: [ROUTER_DIRECTIVES]   
})


export class StartLinkComponent {
     memberName: string = "John Winger";
     gameName: string = "Global Thermonuclear War";
     //manageLinks: boolean = false;
     isValid: boolean = true;   
     //showMenu:boolean = true; 
     ngOnInit() {
        let navMenu = document.querySelector('nav');
        navMenu.classList.remove('showMenu');
        navMenu.classList.add('hideMenu');
        
        
        // if(this.manageLinks) {
        //     this.isValid = true;
        // }

     }
    
}