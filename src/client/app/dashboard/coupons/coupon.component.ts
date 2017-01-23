import {Component } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Component({
	moduleId: module.id,
	selector: 'coupon-cmp',
	templateUrl: 'coupon.component.html',
})

export class CouponComponent {
	coupons: Array<Object>[];

	constructor(private http : Http, private router: Router) { }

	ngOnInit() {
		this.http.get('http://localhost:8090/api/secured/coupon')
  				.map(res => res.json())
  				.subscribe(
  					data => this.coupons= data.content,
  					error => console.log("error"),
  					() => console.log("complete")
  				);
	}

	add() {
		this.router.navigate(['/dashboard/add-coupon/'])
	}

	update(id,couponCode,couponNumber,price,providerId,used) {
		this.router.navigate(['/dashboard/add-coupon/'],{ queryParams: { Id:id,CouponCode:couponCode,CouponNumber:couponNumber,Price:price,ProviderId:providerId,Used:used }})
	}
}