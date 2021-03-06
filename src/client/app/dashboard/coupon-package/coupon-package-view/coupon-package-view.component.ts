import {Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import * as globals from './../../../globals'; 

 
@Component({
	moduleId: module.id,
    selector: 'coupon-ackage-view',
	templateUrl: 'coupon-package-view.component.html'
})

export class CouponPackageViewComponent {
	model: any={};
	providers: Array<Object>[];

	token = localStorage.getItem('access_token');
	constructor(private route: ActivatedRoute, private http: Http) {}

	ngOnInit() {
	   this.route.queryParams.subscribe(data => {this.model.id =  data['Id']});

	   	this.http.get(globals.apiSecureUrl+'/coupon-package/'+ this.model.id +'?access_token=' + this.token)
  				.map(res => res.json())
  				.subscribe(
  					data => this.model= data,
  					error => console.log("error"),
  					() => console.log("complete")
  				);
  	}
}
