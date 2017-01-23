import {Component } from '@angular/core';
import { Http } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
	moduleId: module.id,
	selector: 'category-cmp',
	templateUrl: 'addCategory.component.html'
})

export class AddCategoryComponent {
	model: any= {};
	token:any[];

	token = localStorage.getItem('access_token');

	constructor(private http : Http, private router: Router, private route: ActivatedRoute) {}

	reset() {
		let headers = new Headers();
  		headers.append('Content-Type', 'application/json');
    	this.http.post('http://54.161.216.233:8090/api/secured/product-category?access_token=' +this.token, this.model, {headers: headers})
			.map(res => res.json())
			.subscribe(
				data =>  {this.router.navigate(['/dashboard/category'])},
				error => console.log("error"),
  				() => console.log("complete")
			);
	}

}