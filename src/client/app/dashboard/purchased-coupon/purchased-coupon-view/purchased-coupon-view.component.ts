import {Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import * as globals from './../../../globals'; 

@Component({
	moduleId: module.id,
    selector: 'purchased-coupon-view',
	templateUrl: 'purchased-coupon-view.component.html'
})

export class PurchasedCouponViewComponent {
	model: any={};
  customer: any={};
  couponPackage: any={};
	providers: Array<Object>[];

	token = localStorage.getItem('access_token');
	constructor(private route: ActivatedRoute, private http: Http) {}

	ngOnInit() {
		var id;
	   this.route.queryParams.subscribe(data => {id =  data['Id']});

	   this.http.get(globals.apiSecureUrl+'/purchased-package/'+ id +'?access_token=' + this.token)
  				.map(res => res.json())
  				.subscribe(
  					data => {this.model= data;
                    if(this.model) {
                        this.customer = this.model.customer
                        this.couponPackage = this.model.couponPackage;
                    } 
  					},
  					error => console.log("error"),
  					() => console.log(this.model)
  				);

	   	this.http.get(globals.apiSecureUrl+'/provider?access_token=' + this.token)
  				.map(res => res.json())
  				.subscribe(
  					data => {this.providers= data.content;
  						for(var i=0; i<this.providers.length; i++ ) {
  							if(this.providers[i].id == this.model.providerId) {
  								this.model.provider = this.providers[i].provider_name;
  							}
  						}
  					},
  					error => console.log("error"),
  					() => console.log("complete")
  				);
  	}
}
