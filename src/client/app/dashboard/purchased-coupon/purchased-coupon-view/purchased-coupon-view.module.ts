import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { PurchasedCouponViewComponent } from './purchased-coupon-view.component';

@NgModule({
    imports: [RouterModule,BrowserModule, FormsModule],
    declarations: [PurchasedCouponViewComponent ],
    exports: [PurchasedCouponViewComponent]
})

export class PurchasedCouponViewModule { }
