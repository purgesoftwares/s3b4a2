import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2DatetimePickerModule } from 'ng2-datetime-picker';
import { FormsModule }   from '@angular/forms';
import {MomentModule} from 'angular2-moment'
import { PurchasedCouponComponent } from './purchased-coupon.component';

@NgModule({
    imports: [RouterModule,BrowserModule, FormsModule, MomentModule, Ng2DatetimePickerModule],
    declarations: [PurchasedCouponComponent ],
    exports: [PurchasedCouponComponent]
})

export class PurchasedCouponModule { }
