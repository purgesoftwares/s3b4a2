import {Component } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import * as globals from './../../globals'; 


@Component({
	moduleId: module.id,
	selector: 'purchased-coupon-cmp',
	templateUrl: 'purchased-coupon.component.html',

})

export class PurchasedCouponComponent {
	purchased: Array<Object>[];
    message: any= {};
	mess = false;
	succ = false;
	token = localStorage.getItem('access_token');

	constructor(private http: Http, private router: Router) {}

	ngOnInit() {
		this.http.get(globals.apiSecureUrl+'/purchased-package?access_token=' + this.token)
			.map(res=> res.json())
			.subscribe(
				data => { console.log(data); 
				if(data.content.length) {
                  				this.purchased= data.content;
                  			} else {
                      			this.mess=true;
                      			this.message= "There is no records found."
                  			}},
  					error => { if(error.json().error) {
									this.message = error.json().message
									this.mess = true;
								}},
  					() => console.log("complete")
			);
	}

	view(id : string) {
		this.router.navigate(['/dashboard/purchased-coupon-view/'],{ queryParams: { Id:id}})
	}
}
