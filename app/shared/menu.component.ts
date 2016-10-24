import {Component, EventEmitter} from 'angular2/core';
import {Router} from 'angular2/router';

@Component({
    selector: 'menu-app',
    templateUrl : 'app/shared/menu.component.html' 
})

export class MenuComponent {
    menuItems: Array<any> = [];
    selected: string = null;
    step: number;
    public active:boolean;
    unlocked = new EventEmitter<boolean>();
    constructor(private _router: Router) {
        this.menuItems = ["Step 1", "Step 2", "Step 3", "Step 4"];
    }
    
    checkMenu(event, step): void {
        
       // this.selected = mi;
        let activeMenu = document.querySelector('li.active');
        let unlocked = document.querySelector('li.unlocked');
        let accordion = document.getElementsByTagName('accordion');
          activeMenu.classList.remove('active');
          activeMenu.classList.add('active');   
          if(event.target.classList.contains('unlocked') ) {
              this._router.navigate(['Start']);
              activeMenu.classList.remove('active');
              event.target.classList.add('active');
              
              //activeMenu.nextElementSibling.classList.add('active');
              console.log("Son of a mother...!");
          }
        
        console.log("Event being logged: " +event);  
    }
    // next step
    nextStep(step) {
         console.log(step + " Son of a mother...! 3 EF");
        if(step == 3) {
             let activeMenu = document.querySelector('li.active');
          activeMenu.classList.remove('active');
          activeMenu.classList.add('unlocked');
          activeMenu.nextElementSibling.classList.add('active');
          activeMenu.nextElementSibling.classList.add('unlocked');
            console.log("Son of a mother...! 3"); 

        }

    }
}