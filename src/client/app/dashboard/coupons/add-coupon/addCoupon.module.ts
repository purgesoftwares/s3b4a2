import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AddCouponComponent } from './addCoupon.component';

@NgModule({
    imports: [RouterModule,BrowserModule, FormsModule],
    declarations: [AddCouponComponent ],
    exports: [AddCouponComponent]
})

export class AddCouponModule { }
