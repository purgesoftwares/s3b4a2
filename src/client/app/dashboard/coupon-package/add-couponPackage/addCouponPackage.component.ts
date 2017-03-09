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
	public products: Array<Object>;
	public selected:any[]=[];
	public productSelected:any[]=[];
	public show:any[]=[];
	private providerName:any[]=[];
	private ids:any[]=[];

	token = localStorage.getItem('access_token');
	constructor(private http : Http, private router: Router, private route: ActivatedRoute) {}

	add() {
		this.loading = true;
		this.model.providers = [];
		this.model.products = [];
		this.model.providers = this.selected;
		this.model.products = this.productSelected;
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
  						if(this.model) {
  							if(this.model.providers) {
	  						this.selected = this.model.providers;
		  					this.editProducts(this.model);
		  				}
  						}
  					},
  					error => console.log("error"),

  					() => this.getProviders()

  				);



	   	if(!this.model.id) {
	   		var num = Math.floor(Math.random() * 90000) + 10000;
			this.model.couponNumber = num;
			this.getProviders();
	  	}

	  	this.http.get('http://54.161.216.233:8090/api/secured/provider?access_token=' + this.token)
		  				.map(res => res.json())
		  				.subscribe(
		  					data => this.providers= data.content,
		  					error => console.log("error"),
		  					() => console.log("complete")
		  				);

	}

	getProviders() {
		this.http.get('http://54.161.216.233:8090/api/secured/provider?access_token=' + this.token)
		  				.map(res => res.json())
		  				.subscribe(
		  					data => this.providers= data.content,
		  					error => console.log("error"),
		  					() => console.log("complete")
		  				);
	}

	editProducts(model) {
		var thisObj = this;
		model.providers.forEach(function(provider : Object) {
  			thisObj.getProducts(provider.id)
						.subscribe(
	  					data => {thisObj.products= data.content;
	  						thisObj.show = [...thisObj.show, thisObj.products];
	  					},
	  					error => console.log("error"),
	  					() => console.log("complete")
  					);
  		});
	}

  	checking(id: number) {
  		var check = false;
  		var thisObj = this;
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
	  			this.ids = [...this.ids, provider.id];
	  			this.getProducts(provider.id)
	  						.subscribe(
	  					data => {this.products= data.content;
	  						this.show = [...this.show, this.products];},
	  					error => console.log("error"),
	  					() => console.log("complete")
  					);
			}
		} else {
			
			var thisObj = this;
			this.selected = this.selected.filter(function(elem){
				return elem != provider;
	 		})
	 		this.ids = this.ids.filter(function(elem){
				return elem != provider.id;
	 		})
	 		thisObj.show = [];
	 		this.ids.map((id) => {thisObj.getProducts(id)
	  						.subscribe(
	  					data => {thisObj.products= data.content;
	  							thisObj.show = [...thisObj.show, thisObj.products]
	 						},
	  					error => console.log("error"),
	  					() => console.log("complete")
  					);
	  		});
		}
  	}

  	productChecking(id: number) {
  		var check = false;
  		var thisObj = this;
  		if(this.model.id) {

  			thisObj.model.products.forEach(function(product : Object) {
  				if(product.id == id) {
  					check = true;	
  				}	
  			})
		}
		return check;
  	}

  	productCheck(event: boolean, product: Object) {
  		if(event) {
	  		if(this.productSelected.indexOf(product) == -1){
	  			this.productSelected = [...this.productSelected, product];
			}
		} else {
			this.productSelected = this.productSelected.filter(function(elem){
				return elem != selected.value;
	 		})
		}
  	}

  	getProducts(id: string) {
  		return this.http.get('http://54.161.216.233:8090/api/secured/product/provider-products/'+ id+'?access_token=' + this.token)
  					.map(res => res.json());
  	}
}