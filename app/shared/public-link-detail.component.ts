import {Component} from "angular2/core";
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {RouteParams} from 'angular2/router';
import {PublicShareComponent} from './public-share.component';
import {IProduct} from '../products/products';
import {ProductFilterPipe} from '../products/product-filter.pipe';
import {ProductService} from '../products/product.service';
import {MenuService} from '../shared/menu.service';
import {MenuComponent} from '../shared/menu.component';
import {Accordion, AccordionGroup} from './accordion';
import {Observable} from 'rxjs/Rx';
import {RecipientTypeComponent} from './recipient-type.component';
import {QuantityCounter} from '../products/quantity.component';
import {LinkBuildService} from '../shared/linkBuild.service';


@Component ({
    selector: 'personal-detail',
    templateUrl : `app/shared/public-link-detail.component.html`, 
    styles: [`
        .container {
            width: 100% !important;
        }
        #name-head-text {
            font-weight: 600;
            margin-left: 15px;
            margin-top: 15px;
            color: #828784;
            margin-bottom: 0;
        }
        #link-name {
            font-size: 36px;   
        }
        .grey-section {
            background-color: #F1F1F1;
            width: 100%;
            padding: 10px 0;
        }
        .grey-section h4 {
            font-weight: 600;
            color: #828784;
            margin-left: 15px;
            font-size: 1rem;
            margin-left: 15px;
            margin-bottom: 0;
            margin-top: 0;
            width: 60%;
        }
        .grey-section hr {
            border-top: 1px solid #ccc;
            width: 91%;
            margin: 10px auto 0;   
        }
        hr {
            border-top: 2px solid #ccc;
            width: 91%;
            margin: 0 auto;   
        }
        .controls-section {
            width: 75%;
            margin: 0 auto;
        }
        .icon-spot {
            width: 20%;
            float: left;
            padding: 10px;
            margin: 8px auto 8px;
        }
        .clear {
            clear: both;
        }
        .product-details:last-child {
            min-height: 80px;
            margin-bottom: 100px;
        }
        .product-name {
            margin-top: 10px;
            margin-bottom: 0;
        }
        .item-name {
            margin-bottom: 0;
            font-weight: 500;
        }
        .item-price {
            color: #9CA09E;
            font-weight: 500;
            margin-top: -5px;
            margin-bottom: 10px;
        }
        .footer {
            position: fixed;
            height: 100px;
            width: 100%;
            background: white;
            border-top: 1px solid #ccc; 
            bottom: 0;
            box-shadow: 10px 10px 10px 10px #ccc;
            z-index: 55;
        }
        .btn {
            border-radius: 0;
            margin-top: 20px;
            font-size: 1.3rem;
        }
        .btn a {
            color: white;
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
            margin-top: 20px;
            font-size: 1.2rem;
        }
        .review-order #success-text {
            color: #828784;
            margin-left: 15px;
            margin-top: 10px;
        }
         .dbtn {
            margin-bottom: 18px;
            border-radius: 0px;
            width: 91%;
            margin-left: 15px;
            font-size: 1.3rem !important;
        }
        .overlay-btn {
            width: 91%;
            margin-left: 15px;
            margin-bottom: 20px;
            font-size: 1.3rem;
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
    `],
    directives: [ROUTER_DIRECTIVES, RecipientTypeComponent, QuantityCounter, Accordion, AccordionGroup],
    outputs: ['checkboxChanged','showProducts', 'item', 'quantityValue'],
    providers: [QuantityCounter, MenuComponent, MenuService, LinkBuildService]
})

export class PublicDetailComponent  {

    linkType = ['Smart Link Type', 'Retail Customer', 'Preferred Customer', 'Enrollment'];
    products: Observable<IProduct[]>;
    subProducts: Observable<IProduct[]>;
    hideInstruction: boolean = true;
    showProducts: boolean =  false;
    editing: boolean = false;
    duplicating: boolean = false;
    reactivating: boolean = false;
    deleting: boolean = false;

    constructor(private _productService: ProductService,
                private _routeParams:RouteParams) {

    // link duplicate edit form
    states = ["AA","AK","AL","AR","AZ","CA","CO","CT","DC","DE","FL","GA","GU","HI","IA","ID", "IL","IN","KS","KY","LA","MA","MD","ME","MH","MI","MN","MO","MS","MT","NC","ND","NE","NH","NJ","NM","NV","NY", "OH","OK","OR","PA","PR","PW","RI","SC","SD","TN","TX","UT","VA","VI","VT","WA","WI","WV","WY"];
    model = new PersonalLink(1, "", "", "", "", "", "", this.states[0], "", "", "", "");
    checkmark:  boolean = false;
    submitted: boolean = false;


    constructor(public quantity: QuantityCounter, private _productService: ProductService, private _menuService: MenuService) {

    }

    onSubmit() { this.submitted = true; }
    ngOnInit():void {
      console.log("init has been called...");
      this.getAllProducts();
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


    linkReactivate() {
        this.reactivating = true;
    }
    hideReactivate() {
        this.reactivating = false;
    }
    linkDelete() {
        this.deleting = true;
    }
    hideDelete() {
        this.deleting = false;
    }
    showEditing() {
        this.editing = true;
    }
    hideEditing() {
        this.editing = false;
    }

    linkDuplicate() {
        this.duplicating = true;
    }
    hideDuplicate() {
        this.duplicating = false;
    }

    onChange(item) {
      //this.step++;
      
      if(item === this.linkType[1] || item === this.linkType[2]) {
        this._menuService.checkMenu(2, "two");
          //change menu
          console.log(item);
          
      }

      if(this.showProducts ) {
          this.showProducts = true;
          this.hideInstruction = true;
      }
      else {
          this.showProducts = !this.showProducts;
          this.hideInstruction = !this.hideInstruction;
      }

    console.log(item);
  }
  onChecked(checked, prodName, name, price, flag) {
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
    checkMarking() {
        this.checkmark = true;
    }
}