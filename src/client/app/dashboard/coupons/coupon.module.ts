import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2DatetimePickerModule } from 'ng2-datetime-picker';
import { FormsModule }   from '@angular/forms';
import {MomentModule} from 'angular2-moment'
import { CouponComponent } from './coupon.component';

@NgModule({
    imports: [RouterModule,BrowserModule, FormsModule, MomentModule, Ng2DatetimePickerModule],
    declarations: [CouponComponent ],
    exports: [CouponComponent]
})

export class CouponModule { }
