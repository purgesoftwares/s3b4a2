import {Component } from '@angular/core';
import { Http } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import * as globals from './../../../globals'; 


@Component({
	moduleId: module.id,
	selector: 'viewRate-cmp',
	templateUrl: 'viewRate.component.html'
})

export class ViewRateComponent {
	model: any= {};
	couponPackage: any= {};
	provider: any= {};
	customer: any= {};
	message: any= {};
	loading = false;
	mess = false;
	succ = false;
	token = localStorage.getItem('access_token');

	constructor(private http : Http, private router: Router, private route: ActivatedRoute) {}

	ngOnInit() {
	   this.route.queryParams.subscribe(data => {this.model.id = data['Id']});
	   this.http.get(globals.apiSecureUrl+'/rate-review/'+this.model.id+'?access_token='+ this.token)
  				.map(res => res.json())
  				.subscribe(
  					data => { this.model = data;
                  			  this.provider = this.model.provider;
                  			  this.customer = this.model.customer
                  			  this.getCouponPackage(this.model.couponPackageId);
                  			},
  					error => { if(error.json().error) {
									this.message = error.json().message
									this.mess = true;
								}},
  					() => console.log("complete")
  				);
  	}

  	getCouponPackage(id) {
  		this.http.get(globals.apiSecureUrl+'/coupon-package/' + id +'?access_token=' + this.token)
			.map(res => res.json())
			.subscribe(
  					data => { this.couponPackage = data;},
					error => { if(error.json().error) {
						this.message = error.json().message
						this.mess = true;
					}},
  					() => console.log("complete")
  				);
  	}
}