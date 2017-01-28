import {Component } from '@angular/core';
import { Http } from '@angular/http';
import { PagerService } from '../pager.service'
import { Router } from '@angular/router';

@Component({
	moduleId: module.id,
	selector: 'coupon-cmp',
	templateUrl: 'coupon.component.html',

	providers: [PagerService]

})

export class CouponComponent {
	coupons: Array<Object>[];
	pager: any = {};
	terms:string = '';
    pagedItems: any[];
    message: any= {};
	mess = false;

	token:any[];

	token = localStorage.getItem('access_token');
	
	constructor(private http : Http, private pagerService : PagerService,private router: Router) { }

	ngOnInit() {
		this.http.get('http://54.161.216.233:8090/api/secured/coupon?access_token=' + this.token)
  				.map(res => res.json())
  				.subscribe(
  					data => {this.coupons= data.content;
  								this.setPage(1);},
  					error => { if(error.json().error) {
									this.message = error.json().message
									this.mess = true;
								}},
  					() => console.log("complete")
  				);
	}

	add() {
		this.router.navigate(['/dashboard/add-coupon/'])
	}

	update(id,couponCode,couponNumber,price,providerId,used) {
		this.router.navigate(['/dashboard/add-coupon/'],{ queryParams: { Id:id,CouponCode:couponCode,CouponNumber:couponNumber,Price:price,ProviderId:providerId,Used:used }})
	}

	search(terms: string) {
		if(terms) {
			this.pagedItems = this.coupons.filter((item) => item.couponCode.startsWith(terms));
		} else {
			this.ngOnInit();
		}
	}
   
    setPage(page: number) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        this.pager = this.pagerService.getPager(this.coupons.length, page);
        this.pagedItems = this.coupons.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }   
}
