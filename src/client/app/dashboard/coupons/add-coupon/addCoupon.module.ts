import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { Ng2DatetimePickerModule } from 'ng2-datetime-picker';

import { AddCouponComponent } from './addCoupon.component';

@NgModule({
    imports: [RouterModule,BrowserModule, FormsModule, Ng2DatetimePickerModule],
    declarations: [AddCouponComponent ],
    exports: [AddCouponComponent]
})

export class AddCouponModule { }
