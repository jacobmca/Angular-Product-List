import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { ProductCardComponent } from './product-card-component/product-card-component.component';
import { ProductListComponent } from './product-list-component/product-list-component.component';

@NgModule({
    declarations: [
        AppComponent,
        ProductCardComponent,
        ProductListComponent
    ],
    imports: [
        BrowserModule,
        CommonModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }