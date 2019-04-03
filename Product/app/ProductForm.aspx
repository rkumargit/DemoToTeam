<%@ Page Language="C#" AutoEventWireup="true" %>

<h2>Add a new Product</h2>
<div class="row">
    <div class="col-md-3">Title</div>
    <div class="col-md-9">
        <input type="text" [(ngModel)]="product.Title" />
    </div>
</div>
<div class="row">
    <div class="col-md-3">Category</div>
    <div class="col-md-9">
        <input type="text" [(ngModel)]="product.Category" />
    </div>
</div>
<div class="row">
    <div class="col-md-3">Price</div>
    <div class="col-md-9">
        <input type="number" [(ngModel)]="product.Price" />
    </div>
</div>

<br />
<input type="button" class="button" value="Submit" (click)="SubmitClicked()" />
<input type="button" class="button" value="Cancel" (click)="CancelClicked()" />