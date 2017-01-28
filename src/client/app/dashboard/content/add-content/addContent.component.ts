import {Component } from '@angular/core';
import { Http } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
	moduleId: module.id,
	selector: 'content-cmp',
	templateUrl: 'addContent.component.html'
})

export class AddContentComponent {
	model: any= {};
	message: any= {};
	loading = false;
	mess = false;
	token:any[];

	token = localStorage.getItem('access_token');

	constructor(private http : Http, private router: Router, private route: ActivatedRoute) {}

	ngOnInit() {
	   this.route.queryParams.subscribe(data => {this.model.id = data['Id'], this.model.title = data['title'], this.model.content = data['Content'], this.model.status = data['status']});
  	}
	
	save() {
		this.loading = true;
		let headers = new Headers();
  		headers.append('Content-Type', 'application/json');
    	this.http.post('http://54.161.216.233:8090/api/secured/cms-pages?access_token=' +this.token, this.model, {headers: headers})
			.map(res => res.json())
			.subscribe(
					data => {this.router.navigate(['/dashboard/content'])},
					error => { if(error.json().error) {
								this.message = error.json().message
								this.mess = true;
							}
  							this.loading = false;}
				);
	}

	onChange(values) {
		console.log(values);
    	this.model.status = values;
	}
}