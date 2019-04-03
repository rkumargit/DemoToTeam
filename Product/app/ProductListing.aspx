<%@ Page Language="C#" AutoEventWireup="true" %>

<h2>Products Listing</h2>
<div class="row">
    <div class="col-md-3 header">Product Title</div>
    <div class="col-md-2 header">Price</div>
    <div class="col-md-3 header">Category</div>
    <div class="col-md-4 header">Actions</div>
</div>

<div class="row" *ngFor="let p of products">
    <div class="col-md-3 cell">{{p.Title}}</div>
    <div class="col-md-2 cell">{{p.Price}}</div>
    <div class="col-md-3 cell">{{p.Category}}</div>
    <div class="col-md-4 cell">
        <input type="button" value="Edit" class="sbutton" (click)="EditClicked(p.ID)"  />
        <input type="button" value="Delete" class="sbutton" (click)="DeleteClicked(p.ID)" />
    </div>
</div>
<%--  --%>
<br />
<input type="button" class="button" value="Add a new Product" (click)="AddNewClicked()" />

<input type="button" class="button" value="Refresh Cache" (click)="RefreshCacheClicked()" />