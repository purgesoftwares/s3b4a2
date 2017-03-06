import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { ProductListComponent } from './product-list.component';

@NgModule({
    imports: [RouterModule,BrowserModule, FormsModule],
    declarations: [ProductListComponent],
    exports: [ProductListComponent]
})

export class ProductListModule { }
