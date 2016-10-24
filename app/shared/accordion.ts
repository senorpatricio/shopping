import {Component, Input, OnDestroy} from 'angular2/core';


@Component({
    selector: 'accordion',
    templateUrl : 'app/shared/accordion.html', 
    host: {
        'class': 'panel-group'
    },
    directives:[QuantityCounter]
})

export class Accordion {
    groups: Array<AccordionGroup> = [];
    
    addGroup(group: AccordionGroup): void {
        this.groups.push(group);
    }
    closeOthers(openGroup: AccordionGroup): void {
    this.groups.forEach((group: AccordionGroup) => {
      if (group !== openGroup) {
        group.isOpen = false;
      }
    });
  }
  
  removeGroup(group: AccordionGroup): void {
    const index = this.groups.indexOf(group);
    if (index !== -1) {
      this.groups.splice(index, 1);
    }
  }
}

import {QuantityCounter} from '../products/quantity.component';

@Component({
  selector: 'accordion-group',
  templateUrl: 'app/shared/accordion-group.html'
})
export class AccordionGroup implements OnDestroy {
  private _isOpen:boolean = false;
  
  @Input() heading: string;
  
  @Input()
  set isOpen(value: boolean) {
    this._isOpen = value;
    if (value) {
      this.accordion.closeOthers(this);
    }
  }
  
  get isOpen() {
    return this._isOpen;
  }
  
  constructor(private accordion: Accordion) {
    this.accordion.addGroup(this);
    
  }
  ngOnInit() {
    this._isOpen = false;
  }
  
  ngOnDestroy() {
    this.accordion.removeGroup(this);
  }
  
  toggleOpen(event: MouseEvent): void {
    event.preventDefault();
    this.isOpen = !this.isOpen;
  }
  
}