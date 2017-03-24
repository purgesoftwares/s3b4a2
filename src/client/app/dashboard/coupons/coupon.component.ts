import {Component } from '@angular/core';
import { Http } from '@angular/http';
import { PagerService } from '../pager.service'
import { Router, ActivatedRoute } from '@angular/router';
import { PaginateService } from '../pagination.service';
import * as moment from 'moment';

@Component({
	moduleId: module.id,
	selector: 'coupon-cmp',
	templateUrl: 'coupon.component.html',

	providers: [PaginateService]

})

export class CouponComponent {

	items= [];
	terms:string = '';
    message: any= {};
	mess = false;
	itemCount = 0;
	succ = false;

	constructor(private http: Http, private paginateService: PaginateService, private router: Router, private route: ActivatedRoute) {}

	reloadItems (params) {
		let id;
		this.route.queryParams.subscribe(data => {id = data['Id']});
		let url = "coupon/by-coupon-package/" + id;
        this.paginateService.query(params, url).then(result => { 
        					if(result.items.content.length) {
				            	this.items = result.items.content;
            					this.itemCount = result.count;
                  			} else {
                      			this.mess=true;
                      			this.message= "There is no records found."
                  			}});
    }

	delete (id : string) {
		let value =  "product-category/" + id;
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

	view(id : number,couponCode: string,couponNumber: number,price : number , providerId : string,used: number,availability: number, startTime: Date, endTime: Date) {
		var date = moment(endTime).format('YYYY-MM-DD hh:mm');
		var stdate = moment(startTime).format('YYYY-MM-DD hh:mm');
		
		this.router.navigate(['/dashboard/coupon-view/'],{ queryParams: { Id:id,CouponCode:couponCode,CouponNumber:couponNumber,Price:price,ProviderId:providerId,Used:used,availability: availability,startTime:stdate, endTime:date}})
	}

	search(terms: string) {
		if(terms) {
			this.items = this.items.filter((item) => item.couponCode.startsWith(terms));
		} else {
			this.reloadItems();
		}
	}
}
