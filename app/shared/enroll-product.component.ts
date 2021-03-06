import {Component, OnInit} from 'angular2/core';
import {NgClass} from 'angular2/common';
import {MenuService} from '../shared/menu.service';
import {MenuComponent} from '../shared/menu.component';
import {IProduct} from '../products/products';
import {ProductFilterPipe} from '../products/product-filter.pipe';
import {ProductService} from '../products/product.service';
import {LinkBuildService} from '../shared/linkBuild.service';
import {SmartLink} from '../shared/smart.link.component';
import {LinkTypeComponent} from '../shared/link.type.component';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {Accordion, AccordionGroup} from './accordion';
import {Observable} from 'rxjs/Rx';
import {QuantityCounter} from '../products/quantity.component';
import {EnrollmentComponent} from './enrollment.component';
import {EnrollPerson} from './enrollment';

@Component({
    selector: 'enroll-product',
    templateUrl : 'app/shared/enroll-product.component.html', 
    styles: [`
        hr {
            border-top: 2px solid #ccc;
            margin: 0 auto 20px;
            max-width: 100%;
        }
        .accord-wrap h4 {
            margin: 15px 0 10px;
            font-weight: 600;
            color: #828784;
            text-align: left;
        }
        .accord-wrap p {
            margin-left: 0;
            font-weight: 500;
            margin-top: 20px;
        }
        .enroll-link-confirm p {
            margin-top: 30px;
            font-weight: 600;
            margin-right: 15px;
            line-height: 1.3;
        }

        .enroll-link-confirm hr {
            border-top: 2px solid #ccc;
            margin: 0 auto 20px;
            max-width: 92%;
        }
        .consent {
            width: 92%;
            margin: 0 auto;
            font-size: 14px;
            color: #828784;
        }
    `],   
    pipes: [ProductFilterPipe],
    directives: [MenuComponent, ROUTER_DIRECTIVES, NgClass, QuantityCounter, Accordion, AccordionGroup, EnrollmentComponent, LinkTypeComponent],
    outputs: ['checkboxChanged','showProducts', 'item', 'quantityValue'],
    providers: [QuantityCounter, MenuComponent, MenuService, LinkBuildService, LinkTypeComponent],
    
}) 

export class EnrollProductComponent implements OnInit {
    linkType = ['Smart Link Type', 'Retail Customer', 'Preferred Customer', 'Enrollment'];
    productSelected:Array<any> = [];
    model = new SmartLink(1, "", "","",this.linkType[0], "", "", "", "", this.productSelected[""]);
    
    selectedPrice = [];
    pageTitle: string = "Link type";
    step:number;
    item: string;
    checked: boolean;
    productName: string;
    hideInstruction: boolean = true;
    showProducts: boolean =  false;
    showEnrollment: boolean = false;
    showEnrollConfirm: boolean = false;
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
    //checkboxChanged = new EventEmitter();

    

    constructor(private _productService: ProductService,
      public quantity: QuantityCounter, private _menuService: MenuService,
      public builder: LinkBuildService) {


     }

    isOpen = false;

    myValueChange($event) {
        console.log($event);
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
            console.log("Total price for yiour order: " + priceSum);
        }
        this.totalPrice = Math.round(priceSum * 100) / 100;
        this.totalPrice = this.totalPrice * this.quantity.quantityValue;


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

  enrollConfirm() {
      this.showEnrollConfirm = true;
      
  }
  hideEnrollConfirm() {
      this.showEnrollConfirm = true;
      this.orderReview = false;
  }

  totalOrderPrice(price) {
    let unitPrice = +this.productPrice;
    console.log("$"+unitPrice);
  }

    ngOnInit():void {
        console.log("init has been called...");
        this._menuService.checkMenu(3, "three");
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