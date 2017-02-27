import {Component } from '@angular/core';
import { Http } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import * as moment from 'moment';

@Component({
	moduleId: module.id,
	selector: 'addCouponPackage-cmp',
	templateUrl: 'addCouponPackage.component.html'
})

export class AddCouponPackageComponent {
	model:any= {};
	message: any= {};
	loading = false;
	mess = false;
	succ = false;
	public providers: Array<Object>;
	public provide: Array<Object>;
	public selected:any[]=[];
	token = localStorage.getItem('access_token');
	constructor(private http : Http, private router: Router, private route: ActivatedRoute) {}

	add() {
		this.loading = true;
		this.model.providers = [];
		this.model.providers = this.selected;
		console.log(this.model)
		this.http.post('http://54.161.216.233:8090/api/secured/coupon-package?access_token=' + this.token, this.model)
				.map(res => res.json())
				.subscribe(
					data => {this.succ = true;
							this.message = "Successfully Saved";
							setTimeout(() => {
                				this.router.navigate(['/dashboard/coupon-package'])
            				}, 1000);},
					error => { if(error.json().error) {
							this.message = error.json().message
							this.mess = true;
						}
  						this.loading = false;},
  					() => console.log("complete")
				);
	}

	ngOnInit() {

	   	this.route.queryParams.subscribe(data => {this.model.id = data['Id']});
	   	console.log(this.model.id);
	   	this.http.get('http://54.161.216.233:8090/api/secured/coupon-package/'+ this.model.id +'?access_token=' + this.token)
  				.map(res => res.json())
  				.subscribe(
  					data =>{this.model= data;
  						this.selected = this.model.providers;
  					},
  					error => console.log("error"),
  					() => console.log("complete")
  				);

	   	if(!this.model.id) {
	   		var num = Math.floor(Math.random() * 90000) + 10000;
			this.model.couponNumber = num;
	  	}

	   this.http.get('http://54.161.216.233:8090/api/secured/provider?access_token=' + this.token)
  				.map(res => res.json())
  				.subscribe(
  					data => this.providers= data.content,
  					error => console.log("error"),
  					() => console.log("complete")
  				);
	}


  	checking(id: number) {
  		var check = false;
  		if(this.model.id) {
	  		this.model.providers.forEach(function(jv: Object) {
				if(id === jv.id) {
	  				check = true;
				} 
			});
		}
		return check;
  	}

  	checkbox(event: boolean, provider: Object) {
  		if(event) {
	  		if(this.selected.indexOf(provider) == -1){
	  			this.selected = [...this.selected, provider];
			}
		} else {
			this.selected = this.selected.filter(function(elem){
				return elem != provider;
	 		})
		}
  	}
}