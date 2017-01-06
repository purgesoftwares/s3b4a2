import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { CustomerComponent } from './customer.component';

@NgModule({
    imports: [RouterModule,BrowserModule, FormsModule],
    declarations: [CustomerComponent],
    exports: [CustomerComponent]
})

export class CustomerModule { }