import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Component({
    selector: 'ProductListing',
    templateUrl: './app/ProductListing.aspx'
})

export class ProductListingComponent
{
    products: [];
    constructor(public http: Http, private router: Router) { }

    initData() {
        this.http.get("http://localhost:55345/API/Product").subscribe(r => { this.products = null; this.products = r.json(); });
    }

    ngOnInit() {
        this.initData();
    }

    AddNewClicked() {
        this.router.navigate(['/product']);
    }

    EditClicked(ID) {
        //alert("Edit Product: " + ID);
        
        this.router.navigate(['/product'], {
            queryParams: {
                cmd: 'Edit',
                id: ID
            }
        } );
    }

    DeleteClicked(ID) {
        this.http.delete("http://localhost:55345/API/Product/" + ID).subscribe(r => { this.initData();});
    }

    RefreshCacheClicked() {
        this.http.get("http://localhost:55345/API/Product/-1").subscribe(r => { this.initData(); });
    }
}