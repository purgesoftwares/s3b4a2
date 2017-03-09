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
import { PurchasedCouponModule } from './purchased-coupon/purchased-coupon.module';
import { ProviderQuestionModule } from './provider-question/providerQuestion.module';
import { AddCategoryModule } from './category/add-category/addCategory.module';
import { AddContentModule } from './content/add-content/addContent.module';
import { ProductQuestionModule } from './product-question/productQuestion.module';
import { AddProductQuestionModule } from './product-question/add-productQuestion/addProductQuestion.module';
import { AddProviderQuestionModule } from './provider-question/add-providerQuestion/addProviderQuestion.module';
import { CouponModule } from './coupons/coupon.module';
import { ProductListModule } from './product-list/product-list.module';
import { CouponPackageModule } from './coupon-package/coupon-package.module';
import { AddCouponPackageModule } from './coupon-package/add-couponPackage/addCouponPackage.module';
import { ConsumerModule } from './consumers/consumer.module';
import { AddCouponModule } from './coupons/add-coupon/addCoupon.module';
import { ResetPasswordModule } from './providers/reset-password/resetPassword.module';
import { BankDetailModule } from './providers/bank-details/bank.module';
import { CouponViewModule } from './coupons/coupon-view/coupon-view.module';
import { CouponPackageViewModule } from './coupon-package/coupon-package-view/coupon-package-view.module';
import { InquiryViewModule } from './inquiry/inquiry-view/inquiry-view.module';
import { AuthGuard } from './oauth/index';
import { ChangePasswordModule } from './consumers/change-password/changePassword.module';

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
        ProductListModule,
        CategoryModule,
        ConsumerModule,
        CouponModule,
        AddCouponModule,
        AddCategoryModule,
        CouponPackageModule,
        PurchasedCouponModule,
        CouponPackageViewModule,
        CouponViewModule,
        AddCouponPackageModule,
        InquiryViewModule,
        AddProviderQuestionModule,
        ChangePasswordModule
    ],
    declarations: [DashboardComponent, TopNavComponent, SidebarComponent],
    exports: [DashboardComponent, TopNavComponent, SidebarComponent],
    providers: [AuthGuard]
})

export class DashboardModule { }
