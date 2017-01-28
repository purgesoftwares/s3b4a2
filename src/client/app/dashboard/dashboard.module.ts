import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DropdownModule } from 'ng2-bootstrap/ng2-bootstrap';
import { ModalModule } from 'ng2-bootstrap/ng2-bootstrap';

import { HomeModule } from './home/home.module';
import { ProviderModule } from './providers/provider.module';
import { InquiryModule } from './inquiry/inquiry.module';
import { ContentModule } from './content/content.module';
import { CategoryModule } from './category/category.module';
import { ProviderQuestionModule } from './provider-question/providerQuestion.module';
import { AddCategoryModule } from './category/add-category/addCategory.module';
import { AddContentModule } from './content/add-content/addContent.module';
import { ProductQuestionModule } from './product-question/productQuestion.module';
import { AddProductQuestionModule } from './product-question/add-productQuestion/addProductQuestion.module';
import { CouponModule } from './coupons/coupon.module';
import { AddCouponModule } from './coupons/add-coupon/addCoupon.module';
import { ResetPasswordModule } from './providers/reset-password/resetPassword.module';
import { BankDetailModule } from './providers/bank-details/bank.module';

import { DashboardComponent } from './dashboard.component';

import {TopNavComponent} from '../shared/index';
import {SidebarComponent} from '../shared/index';


@NgModule({
    imports: [
        CommonModule,
    	RouterModule,
    	DropdownModule,
        ModalModule,
    	HomeModule,
        ProviderModule,
        InquiryModule,
        ContentModule,
        ResetPasswordModule,
        BankDetailModule,
        AddContentModule,
        ProductQuestionModule,
        AddProductQuestionModule,
        ProviderQuestionModule,
        CategoryModule,
        CouponModule,
        AddCouponModule,
        AddCategoryModule
    ],
    declarations: [DashboardComponent, TopNavComponent, SidebarComponent],
    exports: [DashboardComponent, TopNavComponent, SidebarComponent]
})

export class DashboardModule { }
