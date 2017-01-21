import {Component } from '@angular/core';
import { Http } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
	moduleId: module.id,
	selector: 'provider-cmp',
	templateUrl: 'addProductQuestion.component.html'
})

export class AddProductQuestionComponent {
	model: any= {};

	constructor(private http : Http, private router: Router, private route: ActivatedRoute) {}

	ngOnInit() {
	   this.route.queryParams.subscribe(data => {this.model.id = data['id'], this.model.title = data['title']});
  	}
	
	reset() {
		let headers = new Headers();
  		headers.append('content-Type', 'application/json');
    	this.http.post('http://54.161.216.233:8090/api/secured/cms-pages?access_token=c1417477-6f4b-485e-a518-f3de5cbca17e', this.model, {headers: headers})
			.map(res => res.json())
			.subscribe(
				data =>  {this.router.navigate(['/dashboard/ProductQuestion'])},
				error => console.log("error"),
  				() => this.ngOnInit()
			);
	}

}