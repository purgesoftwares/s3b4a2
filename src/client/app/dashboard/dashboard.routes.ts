import { Route } from '@angular/router';

import { HomeRoutes } from './home/index';
import { ProviderRoutes } from './providers/index';
import { ResetPasswordRoutes } from './providers/reset-password/index';
import { BankDetailRoutes } from './providers/bank-details/bank.route';
import { InquiryRoutes } from './inquiry/index';
import { ContentRoutes } from './content/index';
import { ConsumerRoutes } from './consumers/index';
import { CategoryRoutes } from './category/index';
import { AddContentRoutes } from './content/add-content/index';
import { ProductQuestionRoutes } from './product-question/index';
import { ProviderQuestionRoutes } from './provider-question/index';
import { CouponRoutes } from './coupons/index';
import { AddCouponRoutes } from './coupons/add-coupon/index';
import { CouponViewRoutes } from './coupons/coupon-view/index';
import { InquiryViewRoutes } from './inquiry/inquiry-view/index';
import { AddCategoryRoutes } from './category/add-category/index'
import { AddProductQuestionRoutes } from './product-question/add-productQuestion/index';
import { AddProviderQuestionRoutes } from './provider-question/add-providerQuestion/index';

import { DashboardComponent } from './index';

export const DashboardRoutes: Route[] = [
  	{
    	path: 'dashboard',
    	component: DashboardComponent,
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
            ...CategoryRoutes,
            ...CouponRoutes,
            ...AddCouponRoutes,
            ...ProviderQuestionRoutes,
            ...AddCategoryRoutes,
            ...CouponViewRoutes,
            ...InquiryViewRoutes,
            ...AddProviderQuestionRoutes,
            ...ConsumerRoutes
        ]
  	}
];
