import {Component } from '@angular/core';
import { Http } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
	moduleId: module.id,
	selector: 'productQuestion-cmp',
	templateUrl: 'addProductQuestion.component.html'
})

export class AddProductQuestionComponent {
	model: any= {};
	token:any[];
    message: any= {};
	mess = false;

	token = localStorage.getItem('access_token');
	constructor(private http : Http, private router: Router, private route: ActivatedRoute) {}

	ngOnInit() {
	   this.route.queryParams.subscribe(data => {this.model.id = data['id'], this.model.title = data['title'],this.model.description = data['description']});
  	}
	
	save() {
		this.model.type = "product"
		let headers = new Headers();
  		headers.append('content-Type', 'application/json');
    	this.http.post('http://54.161.216.233:8090/api/secured/question?access_token=' + this.token, this.model, {headers: headers})
			.map(res => res.json())
			.subscribe(
				data =>  {this.router.navigate(['/dashboard/productQuestion'])},
				error => console.log("error"),
  				() => console.log("complete");
  			);
	}

}