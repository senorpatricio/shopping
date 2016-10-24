import {Component, OnInit,Input, Output, EventEmitter} from 'angular2/core';

import {NgClass} from 'angular2/common';
import {MenuComponent} from '../shared/menu.component';
import {IProduct} from '../products/products';
import {ProductFilterPipe} from '../products/product-filter.pipe';
import {ProductService} from '../products/product.service';
import {SmartLink} from '../shared/smart.link.component';
import {ROUTER_DIRECTIVES, Router, RouteParams} from 'angular2/router';
import {Accordion, AccordionGroup} from './accordion';
import {Observable} from 'rxjs/Rx';
import {QuantityCounter} from '../products/quantity.component';
import {MenuService} from '../shared/menu.service';
import {LinkBuildService} from '../shared/linkBuild.service';
import {EnrollmentComponent} from './enrollment.component';
import {EnrollPerson} from './enrollment';

@Component({
    templateUrl : 'app/shared/link.type.component.html',
    pipes: [ProductFilterPipe],
    directives: [MenuComponent, ROUTER_DIRECTIVES, NgClass, QuantityCounter, Accordion, AccordionGroup, EnrollmentComponent],
    inputs: ['isDisabled'],
    outputs: ['checkboxChanged','showProducts', 'item', 'quantityValue'],
    providers: [QuantityCounter, MenuComponent, MenuService, LinkBuildService],
    styles : [` 
      enrollment {
        width: 100%
      }
      .link-name {
          margin: 0 auto;
          width: 92%;
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
    `]


})
export class LinkTypeComponent implements OnInit {
    linkType = ['Smart Link Type', 'Retail Customer', 'Preferred Customer', 'Enrollment'];
   
    productSelected:Array<any> = [];
    @Input() model = new SmartLink(1, "", "","",this.linkType[0], "", "", "", "", this.productSelected[""]);
    // @Input() linkname;
    selectedPrice = [];
    pageTitle: string = "Link type";
    showNav: boolean = true;
    step:number;
    item: string;
    checked: boolean;
    productName: string;
    hideInstruction: boolean = true;
    showProducts: boolean =  false;
    showEnrollment: boolean = false;
    showReviewBtn: boolean = false;
    orderReview: boolean = false;
    errorMessage: string;
    products: Observable<IProduct[]>;
    subProducts: Observable<IProduct[]>;
    public myValue: number;
    public value: number;
    yada: string = "";
    mi: string;
    name: string;
    catName: string;
    productPrice: string;
    selectedValue: string;
    quantityValue: number;
    totalPrice: number;
    linkname;
    //checkboxChanged = new EventEmitter();

    constructor(private _productService: ProductService,
                    public quantity: QuantityCounter, private _menuService: MenuService,
                    public builder: LinkBuildService, private _router: Router,
                    private _routeParams: RouteParams) {
      let id = +this._routeParams.get('id');

     }

      isOpen = false;

      myValueChange($event) {
          console.log($event);
      }

 
  onChange(item) {
      //this.step++;
      
      if(item === this.linkType[1] || item === this.linkType[2]) {
        this._menuService.checkMenu(2, "two");
          //change menu
          console.log(item);
          
      }

      if(item === this.linkType[3]) {
        // this._menuService.checkMenu(2, "two");
        // console.log(item);
        this.hideInstruction = true;
        this.showEnrollment = true;
      }

      if(this.showProducts ) {
          this.showProducts = true;
          this.hideInstruction = true;
      }
      else {
          this.showProducts = !this.showProducts;
          this.hideInstruction = !this.hideInstruction;
      }
       this.builder.trackMenu(item);

    //console.log(this.builder.trackMenu(item));
  }
  getLinkName() {
    //this.linkname =  this.builder.setLinkName(this.model.linkName);
  }
  onChecked(checked, prodName, name, price, flag) {
    this.builder.smartlinkname.name = this.model.linkName;
    //this.link.linkedName = this.model.linkName;
    console.log( this.builder.smartlinkname.name);
    //linkbuildservice
    this.builder.buildProducts([prodName, name, price]);
  //this.linkname =  this.builder.linkedName(this.model.linkName);
    console.log("Selected products are: " +this.builder.addProducts);
    let combinePrice = prodName + " " +name + " " + price;
    let catTitle = combinePrice.split(" ", 1);
    let priceSum = 0;
    
    if(flag === true) {
     this.catName = prodName;
      this.quantity.quantityValue++;
      this.checked = checked;
      this.showReviewBtn = true;
      this.name = name;
      this.productPrice = price;
    

      //build productArr and display it in orderReview
      this.productSelected.push(combinePrice);
      this.selectedPrice.push(this.productPrice);
       console.log("Item price: " + this.selectedPrice);
      //this.totalOrderPrice(price);
      // Add up the prices of crap ordered.
      for(let i=0; i < this.selectedPrice.length; i++ ) {
        priceSum += +this.selectedPrice[i];
        +this.productPrice; +this.productPrice * this.quantityValue;
        console.log("Total price for yiour order: " + priceSum);
      }
       this.totalPrice = Math.round(priceSum * 100) / 100;
       this.totalPrice = this.totalPrice ;


    }
    else {
      this.quantity.quantityValue = 0;
      this.checked = checked;
     
      this.name = " ";
      this.productPrice = " ";
      //this.orderReview = false;
      this.productSelected.splice(this.productSelected.indexOf(combinePrice), 1);
      this.selectedPrice.splice(this.productPrice.indexOf(String(priceSum)), 1);
      for(let i=0; i < this.selectedPrice.length; i++ ) {
        priceSum += +this.selectedPrice[i];
        console.log("Total price for your order after subtracting: " + priceSum);
      }
      this.totalPrice = Math.round(priceSum * 100) / 100;
      this.totalPrice = this.totalPrice * this.quantity.quantityValue;
      if(this.totalPrice > 0) {
        this.showReviewBtn = true;
      }
      else {
         this.showReviewBtn = false; // gotta handle this later... handled...
      }
    }
//console.log("Total price for yiour order after subtracting: " + priceSum);
      //this.selectedValue = siValue;

      //this.checkboxChanged.emit({
        //value: this.myValue});
        console.log("Category title: " + catTitle);
        //console.log("item prce: " + itemPrice);

      console.log(this.name +" @ " + this.productPrice + " checked: " + flag );
  }

  showReview() {
    console.log("show!");
      this.orderReview = true;
  }

  hideReview() {
    console.log("hide!");
      this.orderReview = false;
  }

  totalOrderPrice(price) {
    let unitPrice = +this.productPrice;
    console.log("$"+unitPrice);
  }
  beginLink(): void {

  }

  ngOnInit():void {
     
      console.log("show nav " + this.showNav);
      this._menuService.checkMenu(1, "one");
     

     console.log("Managed.. " + this.getAllProducts());
      // this._productService.getProducts()
      //   .subscribe(products => this.products = products,
      //   error => this.errorMessage = <any>error)
      //   this._productService.getProducts()
      //   .subscribe(subProducts => this.subProducts = subProducts,
      //   error => this.errorMessage = <any>error)
  }
  getAllProducts() {
    this.products = this._productService.getProducts();
    this.subProducts = this._productService.getProducts();
  }

}
