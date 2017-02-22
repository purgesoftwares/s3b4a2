import {Component } from '@angular/core';
import { Http } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import * as moment from 'moment';
import { Select2OptionData } from 'ng2-select2';

@Component({
	moduleId: module.id,
	selector: 'addCouponPackage-cmp',
	templateUrl: 'addCouponPackage.component.html'
})

export class AddCouponPackageComponent {
	model: any= {};
	message: any= {};
	loading = false;
	mess = false;
	succ = false;
	token:any[];
	public providers: Array<Object>;
	public provide: Array<Object>;
	 public selected:any[]=[];
	token = localStorage.getItem('access_token');
	constructor(private http : Http, private router: Router, private route: ActivatedRoute) {}

	add() {
		this.loading = true;
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

	   	this.route.queryParams.subscribe(data => {this.model.id = data['Id'],
	   											this.model.couponNumber = data['CouponNumber'],
	   											this.model.price = data['Price'],
	   											this.model.providers = data['Providers'],
	   											this.model.radius = data['Radius'],
	   											this.model.endTime = data['endTime'],
	   											this.model.startTime = data['startTime']});
	   	console.log(this.model);

	   	if(!this.model.id) {
	   		var num = Math.floor(Math.random() * 90000) + 10000;
			this.model.couponNumber = num;
	  	} else {
	  		this.selected = this.model.providers;
	  	}

	   this.http.get('http://54.161.216.233:8090/api/secured/provider?access_token=' + this.token)
  				.map(res => res.json())
  				.subscribe(
  					data =>{ this.providers= data.content;
  						this.providers.map((prov) {
  							if(this.model.providers.includes(prov.id)) {
  								//console.log($("#" + prov.id).toggleClass("fa fa-check"););
      							$("#" + prov.id).addClass("fa fa-check");
      						}

  						});
  					},
  					error => console.log("error"),
  					() => console.log("complete")
  				);

  		

  	}
	changed(data: {value: string[]}) {
    	this.current = data.value.join(' | ');
  	}

  	 toggleMultiSelect(event, val){
    		event.preventDefault();
    		if(this.selected.indexOf(val) == -1){
      			this.selected = [...this.selected, val];
      			$("#" + val.id).toggleClass("fa fa-check");
   			}else{
     			 $("#" + val.id).toggleClass("fa fa-check");
     			 this.selected = this.selected.filter(function(elem){
       			 return elem != val;
     		 })
    		}
  	}
}