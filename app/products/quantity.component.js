System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var QuantityCounter;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            QuantityCounter = (function () {
                function QuantityCounter() {
                    this.quantityValue = 0;
                    this.value = 1;
                    this.quantityChange = new core_1.EventEmitter();
                }
                QuantityCounter.prototype.increment = function () {
                    this.quantityValue++;
                    if (this.quantityValue > 0) {
                        // change checkbox image...
                        this.isOn = true;
                    }
                    this.quantityChange.emit({
                        value: this.quantityValue
                    });
                };
                QuantityCounter.prototype.decrement = function () {
                    if (this.quantityValue === 0) {
                        this.quantityValue = 0;
                        this.isOn = false;
                    }
                    else {
                        this.quantityValue--;
                    }
                    this.quantityChange.emit({
                        value: this.quantityValue
                    });
                };
                QuantityCounter.prototype.addFromCheckbox = function (flag) {
                    if (flag === true) {
                        this.quantityValue++;
                    }
                    else {
                        this.quantityValue = 0;
                    }
                    // if(this.quantityValue === 1) {
                    //   this.decrement();
                    // }
                    // else {
                    //   this.increment();
                    // }
                };
                QuantityCounter = __decorate([
                    core_1.Component({
                        selector: 'quantity',
                        templateUrl: 'app/products/quantity.component.html',
                        outputs: ['quantityChange'],
                        inputs: ['value']
                    }), 
                    __metadata('design:paramtypes', [])
                ], QuantityCounter);
                return QuantityCounter;
            }());
            exports_1("QuantityCounter", QuantityCounter);
        }
    }
});
//# sourceMappingURL=quantity.component.js.map