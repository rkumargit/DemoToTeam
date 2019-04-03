"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var ProductComponent = /** @class */ (function () {
    function ProductComponent(http, router, arouter) {
        this.http = http;
        this.router = router;
        this.arouter = arouter;
        this.product = { "ID": 0, "Title": '', "Category": '', "Price": 0 };
    }
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.arouter.queryParams.subscribe(function (params) { _this.cmd = params.cmd; _this.ID = params.id; });
        if (this.cmd == "Edit") {
            this.http.get("http://localhost:55345/API/Product/" + this.ID).subscribe(function (r) { _this.product = r.json(); });
        }
    };
    ProductComponent.prototype.SubmitClicked = function () {
        var _this = this;
        if (this.cmd == "Edit") {
            this.http.put("http://localhost:55345/API/Product/" + this.ID, this.product).subscribe(function (r) { _this.router.navigate(['/products']); });
        }
        else {
            this.http.post("http://localhost:55345/API/Product", this.product).subscribe(function (r) { _this.router.navigate(['/products']); });
        }
    };
    ProductComponent.prototype.CancelClicked = function () {
        this.router.navigate(['/products']);
    };
    ProductComponent = __decorate([
        core_1.Component({
            selector: 'Product',
            templateUrl: './app/ProductForm.aspx'
        }),
        __metadata("design:paramtypes", [http_1.Http, router_1.Router, router_1.ActivatedRoute])
    ], ProductComponent);
    return ProductComponent;
}());
exports.ProductComponent = ProductComponent;
//# sourceMappingURL=Product.component.js.map