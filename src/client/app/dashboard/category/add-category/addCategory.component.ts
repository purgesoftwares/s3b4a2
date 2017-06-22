import {Component } from '@angular/core';
import { Http } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import * as globals from './../../../globals'; 


@Component({
	moduleId: module.id,
	selector: 'category-cmp',
	templateUrl: 'addCategory.component.html'
})

export class AddCategoryComponent {
	model: any= {};
	message: any= {};
	loading = false;
	mess = false;
	succ = false;
	token = localStorage.getItem('access_token');

	constructor(private http : Http, private router: Router, private route: ActivatedRoute) {}

	ngOnInit() {
	   this.route.queryParams.subscribe(data => {this.model.id = data['Id'], this.model.name = data['name'], this.model.description = data['description']});
  	}

	save() {
		this.loading = true;
    	this.http.post(globals.apiSecureUrl+'/product-category?access_token=' +this.token, this.model)
			.map(res => res.json())
			.subscribe(
					data =>  {	this.succ = true;
							this.message = "Successfully Saved";
							setTimeout(() => {
                				this.router.navigate(['/dashboard/category'])
            				}, 1000);},
					error => { if(error.json().error) {
							this.message = error.json().message
							this.mess = true;
						}
  						this.loading = false;}
				);
	}

}