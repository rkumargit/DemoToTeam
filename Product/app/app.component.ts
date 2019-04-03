import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'my-app',
    template: `

<div class="navbar navbar-inverse navbar-fixed-top">
    <div class="container">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
        </div>
        <div class="navbar-collapse collapse">
            <ul class="nav navbar-nav">
                <li><a routerLink="products">Product Listing</a></li>
                <li><a routerLink="product">Product Form</a></li>
            </ul>
        </div>
    </div>
</div>

<router-outlet></router-outlet>

`
})
export class AppComponent { name = 'First Angular 2 Application'; }