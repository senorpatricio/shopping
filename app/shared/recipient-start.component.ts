import {Component, Output} from "angular2/core";
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {IProduct} from '../products/products';
import {ProductFilterPipe} from '../products/product-filter.pipe';
import {ProductService} from '../products/product.service';
import {QuantityCounter} from '../products/quantity.component';
import {Observable} from 'rxjs/Rx';


@Component({
    templateUrl : 'app/shared/recipient-start.component.html',
    styles : [`
        .grey-section {
            background: #f1f1f1;
            border-top: 2px solid #AC955B;
            border-bottom: 2px solid #AC955B;
        }
        .grey-section h4 {
            font-size: 20px;
            margin: 10px;
            font-weight: 600;
            color: #9ca09e;
        }
        .grey-section h1 {
            margin: 20px 10px;
            font-size: 36px;
        }
        .review-text {
            margin-left: 10px;
            font-size: 1em;
            line-height: 1;
            margin-top: 20px;
            margin-bottom: 20px;
            font-weight: 500;
        }
        hr {
            border-top: 1px solid #828784;
            margin-left: 10px;
            margin-right: 10px;
        }
        .product-detail {
            width: 100%;
            margin: 0 auto;
        }
        .product-image {
            position: relative;
            width: 30%;
            float: left;
            // background-color: #9CA09E;
            background: url('app/assets/img/products/jouve-tightener.jpg');
            padding: 0 10px;
            height: 108px;
            margin-left: 10px;
            margin-right: 5px;
        }
        .product-description {
            position: relative;
            width: 64%;
            height: 130px;
            float: left;
        }
        .product-title {
            margin-left: 0;
            font-size: 1em;
            line-height: 1;
            // margin-top: 20px;
            margin-bottom: 0;
            font-weight: 500;
        }
        .clear {
            clear: both;
        }
        quantity {
            float: left;
        }
        quantity .quantity-count .quantity__container span.qty {
            font-size: .8rem;
            height: 36px;
            padding: 0.5rem;
        }
        
        .quantity__input {
            height: 30px;
        }
        .quantity__button {
            height: 17px;
        }
        .delete-button {
            float: left;
            margin: 10px 25px;
            height: 30px;
            width: 64px;
            background: #D8D8D8;
            border-radius: 0;
            font-size: 14px;
        }
        .item-price {
            display: inline;
            color: #9CA09E;
            margin: 0 7px 0 0;
        }
       .item-details {
           display: inline;
           color: #B19B65;
           margin: 0;
       }
    `], 
    directives: [ROUTER_DIRECTIVES, QuantityCounter],
    outputs: ['checkboxChanged','showProducts', 'item', 'quantityValue'],
    providers: [QuantityCounter] 
})

export class RecipientStartComponent {

    products: Observable<IProduct[]>;
    subProducts: Observable<IProduct[]>;
    description: boolean = false;

    constructor (private _productService: ProductService,
      public quantity: QuantityCounter) {}

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

        showDescription() {
            this.description = true; 
        }
}