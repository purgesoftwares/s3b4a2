import { Route } from '@angular/router';

import { HomeRoutes } from './home/index';
import { UserRoutes } from './users/index';
import { CustomerRoutes } from './customers/index';
import { ProviderRoutes } from './providers/index';
import { ResetPasswordRoutes } from './providers/reset-password/index';
import { BankDetailRoutes } from './providers/bank-details/bank.route';
import { InquiryRoutes } from './inquiry/index';
import { ContentRoutes } from './content/index';
import { AddContentRoutes } from './content/add-content/index';


import { DashboardComponent } from './index';

export const DashboardRoutes: Route[] = [
  	{
    	path: 'dashboard',
    	component: DashboardComponent,
    	children: [
	    	...HomeRoutes,
            ...UserRoutes,
            ...ProviderRoutes,
            ...ResetPasswordRoutes,
            ...BankDetailRoutes,
            ...CustomerRoutes,
            ...InquiryRoutes,
            ...ContentRoutes,
            ...AddContentRoutes
        ]
  	}
];
