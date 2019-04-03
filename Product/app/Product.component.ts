import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { stringify } from 'querystring';

@Component({
    selector: 'Product',
    templateUrl: './app/ProductForm.aspx'
})
export class ProductComponent
{
    product = {"ID":0, "Title": '', "Category" : '', "Price" : 0};

    constructor(public http: Http, private router: Router, private arouter: ActivatedRoute) { }

    ID: number;
    cmd: string;

    ngOnInit() {
        this.arouter.queryParams.subscribe(params => { this.cmd = params.cmd; this.ID = params.id; });
        if (this.cmd == "Edit") {
            this.http.get("http://localhost:55345/API/Product/" + this.ID).subscribe(r => { this.product = r.json(); })
        }
    }

    SubmitClicked() {
        if (this.cmd == "Edit") {
            this.http.put("http://localhost:55345/API/Product/" + this.ID, this.product).subscribe(r => { this.router.navigate(['/products']); })
        }
        else {
            this.http.post("http://localhost:55345/API/Product", this.product).subscribe(r => { this.router.navigate(['/products']); })
        }
    }
    CancelClicked() {
        this.router.navigate(['/products']);
    }
}