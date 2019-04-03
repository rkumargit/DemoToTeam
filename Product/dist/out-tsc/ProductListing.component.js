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
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var ProductListingComponent = /** @class */ (function () {
    function ProductListingComponent(http, router) {
        this.http = http;
        this.router = router;
    }
    ProductListingComponent.prototype.initData = function () {
        var _this = this;
        this.http.get("http://localhost:55345/API/Product").subscribe(function (r) { _this.products = null; _this.products = r.json(); });
    };
    ProductListingComponent.prototype.ngOnInit = function () {
        this.initData();
    };
    ProductListingComponent.prototype.AddNewClicked = function () {
        this.router.navigate(['/product']);
    };
    ProductListingComponent.prototype.EditClicked = function (ID) {
        //alert("Edit Product: " + ID);
        this.router.navigate(['/product'], {
            queryParams: {
                cmd: 'Edit',
                id: ID
            }
        });
    };
    ProductListingComponent.prototype.DeleteClicked = function (ID) {
        var _this = this;
        this.http.delete("http://localhost:55345/API/Product/" + ID).subscribe(function (r) { _this.initData(); });
    };
    ProductListingComponent.prototype.RefreshCacheClicked = function () {
        var _this = this;
        this.http.get("http://localhost:55345/API/Product/-1").subscribe(function (r) { _this.initData(); });
    };
    ProductListingComponent = __decorate([
        core_1.Component({
            selector: 'ProductListing',
            templateUrl: './app/ProductListing.aspx'
        }),
        __metadata("design:paramtypes", [http_1.Http, router_1.Router])
    ], ProductListingComponent);
    return ProductListingComponent;
}());
exports.ProductListingComponent = ProductListingComponent;
//# sourceMappingURL=ProductListing.component.js.map