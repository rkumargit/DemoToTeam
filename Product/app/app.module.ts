import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductListingComponent } from './ProductListing.component';
import { ProductComponent } from './Product.component';

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule,
        RouterModule.forRoot([
            { path: 'products', component: ProductListingComponent },
            { path: 'product', component: ProductComponent }
        ])
    ],
    declarations: [AppComponent, ProductListingComponent, ProductComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }  