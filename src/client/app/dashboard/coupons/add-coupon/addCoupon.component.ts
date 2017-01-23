import {Component } from '@angular/core';
import { Http } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
	moduleId: module.id,
	selector: 'addComponent-cmp',
	templateUrl: 'addComponent.component.html'
})

export class AddCouponComponent {
	model: any= {};

	constructor(private http : Http, private router: Router, private route: ActivatedRoute) {}

	ngOnInit() {
	   this.route.queryParams.subscribe(data => {this.model.id = data['Id'],
	   											this.model.couponCode = 	data['CouponCode'],this.model.couponNumber = data['CouponNumber'],this.model.price = data['Price'],this.model.providerId = data['ProviderId'],this.model.used = data['Used']);
  	}
	
	reset() {
		this.http.post('http://54.161.216.233:8090/api/secured/coupon?access_token=c1417477-6f4b-485e-a518-f3de5cbca17e', this.model)
				.map(res => res.json())
				.subscribe(
						data => {this.router.navigate(['/dashboard/coupon'])}
				);
	}

}