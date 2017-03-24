import {Component } from '@angular/core';
import { Http } from '@angular/http';
import { PaginateService } from '../pagination.service';
import { Router } from '@angular/router';
import * as moment from 'moment';

@Component({
	moduleId: module.id,
	selector: 'coupon-package-cmp',
	templateUrl: 'coupon-package.component.html',

	providers: [PaginateService]
})

export class CouponPackageComponent {
	items= [];
	terms:string = '';
    message: any= {};
	mess = false;
	itemCount = 0;
	succ = false;

	constructor(private http: Http, private paginateService: PaginateService, private router: Router) {}

	reloadItems (params) {
		let url = "coupon-package";
        this.paginateService.query(params, url).then(result => {console.log(result); 
        					if(result.items.content.length) {
				            	this.items = result.items.content;
            					this.itemCount = result.count;
                  			} else {
                      			this.mess=true;
                      			this.message= "There is no records found."
                  			}});
    }

	delete (id : string) {
		let value =  "coupon-package/" + id;
		if (confirm("Are You Sure! You want to delete this record?") == true) {
			this.paginateService.delete(value).then(result => {this.reloadItems();
									this.succ = true;
									this.message = "Record successfully deleted";
									setTimeout(() => {
	                					this.succ = false;
	            					}, 1000);
								});
		}
	}

	add() {
		this.router.navigate(['/dashboard/add-couponPackage/'])
	}

	update(id: string) {

		this.router.navigate(['/dashboard/add-couponPackage/'],{ queryParams: { Id:id }})
	}

	view(id : string) {
		
		this.router.navigate(['/dashboard/coupon-package-view/'],{ queryParams: { Id:id}})
	}

	coupons(id: string) {
		this.router.navigate(['/dashboard/coupon/'],{ queryParams: { Id: id}})
	}

	search(terms: string) {
		if(terms) {
			this.items = this.items.filter((item) => item.couponNumber.toString().startsWith(terms));
		} else {
			this.reloadItems();
		}
	}
}
