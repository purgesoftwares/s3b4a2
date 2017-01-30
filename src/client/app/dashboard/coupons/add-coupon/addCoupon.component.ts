import {Component } from '@angular/core';
import { Http } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import * as moment from 'moment';

@Component({
	moduleId: module.id,
	selector: 'addCoupon-cmp',
	templateUrl: 'addCoupon.component.html'
})

export class AddCouponComponent {
	model: any= {};
	message: any= {};
	loading = false;
	mess = false;
	token:any[];
	providers: Array<Object>[];

	token = localStorage.getItem('access_token');
	constructor(private http : Http, private router: Router, private route: ActivatedRoute) {}

	add() {
		this.loading = true;
		console.log(this.model)
		this.http.post('http://54.161.216.233:8090/api/secured/coupon?access_token=' + this.token, this.model)
				.map(res => res.json())
				.subscribe(
						data => {this.router.navigate(['/dashboard/coupon'])},
						error => { if(error.json().error) {
									this.message = error.json().message
									this.mess = true;
								}
  								this.loading = false;}
				);
	}
	
	ngOnInit() {
	   this.route.queryParams.subscribe(data => {this.model.id = data['Id'],
	   											this.model.couponCode = 	data['CouponCode'],this.model.couponNumber = data['CouponNumber'],this.model.price = data['Price'],this.model.providerId = data['ProviderId'],this.model.used = data['Used'], this.model.availability = data['availability'], this.model.endTime = data['endTime'], this.model.startTime = data['startTime']});

	   this.http.get('http://54.161.216.233:8090/api/secured/provider?access_token=' + this.token)
  				.map(res => res.json())
  				.subscribe(
  					data => this.providers= data.content,
  					error => console.log("error"),
  					() => console.log("complete")
  				);
  	}

  	onChange(deviceValue) {
    	this.model.providerId = deviceValue.id;
	}
	
}