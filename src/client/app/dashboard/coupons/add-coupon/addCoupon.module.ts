import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import {MomentModule} from 'angular2-moment'
import { Ng2DatetimePickerModule, DateTime } from 'ng2-datetime-picker';

import { AddCouponComponent } from './addCoupon.component';

export {
  DateTime
}


@NgModule({
    imports: [RouterModule,BrowserModule, FormsModule, ReactiveFormsModule, MomentModule, Ng2DatetimePickerModule],
    declarations: [AddCouponComponent ],
    exports: [AddCouponComponent]
})

export class AddCouponModule { }
