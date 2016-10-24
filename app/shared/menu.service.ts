import {Injectable, EventEmitter} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class MenuService {
    pageNames = ["Step 1", "Step 2", "Step 3", "step 4"];
    private _viewable;
    
    
    constructor(private _http:Http) {
        
    }
    
    checkMenu(page, id):EventEmitter<any> {
        let navMenu = document.querySelector('nav');
        
        switch(page) {
            
            
                case 1:
                console.log("Step 1!");
                
                let activeMenu = document.querySelector('li.active');
                let currentMenu = document.querySelector('li.one');
                activeMenu.classList.remove('active');
                activeMenu.classList.add('unlocked');
                currentMenu.classList.add('active');
                navMenu.classList.remove('hideMenu');
                navMenu.classList.add('showMenu');
                // activeMenu.nextElementSibling.classList.add('active');
                // activeMenu.nextElementSibling.classList.add('unlocked');
                return page;
                

                case 2:
                console.log("Step 2! " + id);

               currentMenu = document.querySelector('li.two');
                activeMenu = document.querySelector('li.active');
                activeMenu.classList.remove('active');
                activeMenu.classList.add('unlocked');
                currentMenu.classList.add('active');            
                // activeMenu.nextElementSibling.classList.add('active');
                // activeMenu.nextElementSibling.classList.add('unlocked');
                return page;
                
                case 3:
                console.log("Step 3! " + id);
                currentMenu = document.querySelector('li.three');
                activeMenu = document.querySelector('li.active');
                activeMenu.classList.remove('active');
                activeMenu.classList.add('unlocked');
                currentMenu.classList.add('active');                
                // activeMenu.nextElementSibling.classList.add('active');
                // activeMenu.nextElementSibling.classList.add('unlocked');
                return page;
              
                case 4:
                console.log("Step 4! " + id);
                //let navMenu = document.querySelector('nav');
                currentMenu = document.querySelector('li.four');
                activeMenu = document.querySelector('li.active');
                activeMenu.classList.remove('active');
                activeMenu.classList.add('unlocked');
                currentMenu.classList.add('active');
                navMenu.classList.remove('hideMenu');
                navMenu.classList.add('showMenu');             
                // activeMenu.nextElementSibling.classList.add('active');
                // activeMenu.nextElementSibling.classList.add('unlocked');
                return page;
                
                


            }
        // loop through pagNames to get what page ypu are on
        for(let i = 0; i < this.pageNames.length; i ++) {
            
        }
    }
}