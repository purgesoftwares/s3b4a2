import { Route } from '@angular/router';

import { HomeRoutes } from './home/index';
import { ProviderRoutes } from './providers/index';
import { ResetPasswordRoutes } from './providers/reset-password/index';
import { BankDetailRoutes } from './providers/bank-details/bank.route';
import { InquiryRoutes } from './inquiry/index';
import { ContentRoutes } from './content/index';
import { ConsumerRoutes } from './consumers/index';
import { ChangePasswordRoutes } from './consumers/change-password/index';
import { CategoryRoutes } from './category/index';
import { AddContentRoutes } from './content/add-content/index';
import { ProductQuestionRoutes } from './product-question/index';
import { ProviderQuestionRoutes } from './provider-question/index';
import { CouponRoutes } from './coupons/index';
import { PurchasedCouponRoutes } from './purchased-coupon/index';
import { ProductListRoutes } from './product-list/index';
import { CouponPackageRoutes } from './coupon-package/index';
import { AddCouponPackageRoutes } from './coupon-package/add-couponPackage/index';
import { AddCouponRoutes } from './coupons/add-coupon/index';
import { CouponViewRoutes } from './coupons/coupon-view/index';
import { CouponPackageViewRoutes } from './coupon-package/coupon-package-view/index';
import { InquiryViewRoutes } from './inquiry/inquiry-view/index';
import { AddCategoryRoutes } from './category/add-category/index'
import { AddProductQuestionRoutes } from './product-question/add-productQuestion/index';
import { AddProviderQuestionRoutes } from './provider-question/add-providerQuestion/index';
import { AuthGuard } from './oauth/auth.guard';
import { DashboardComponent } from './index';

export const DashboardRoutes: Route[] = [
  	{
    	path: 'dashboard',
    	component: DashboardComponent,
        canActivate: [AuthGuard],
    	children: [
	    	...HomeRoutes,
            ...ProviderRoutes,
            ...ResetPasswordRoutes,
            ...BankDetailRoutes,
            ...InquiryRoutes,
            ...ContentRoutes,
            ...AddContentRoutes,
            ...ProductQuestionRoutes,
            ...AddProductQuestionRoutes,
            ...CouponPackageRoutes,
            ...CategoryRoutes,
            ...CouponRoutes,
            ...AddCouponRoutes,
            ...ProviderQuestionRoutes,
            ...AddCategoryRoutes,
            ...CouponViewRoutes,
            ...InquiryViewRoutes,
            ...CouponPackageViewRoutes,
            ...AddProviderQuestionRoutes,
            ...AddCouponPackageRoutes,
            ...PurchasedCouponRoutes
            ...ConsumerRoutes,
            ...ChangePasswordRoutes,
            ...ProductListRoutes
        ]
  	}
];
