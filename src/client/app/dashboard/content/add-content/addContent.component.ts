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
	token:any[];

	token = localStorage.getItem('access_token');

	constructor(private http : Http, private router: Router, private route: ActivatedRoute) {}

	ngOnInit() {
	   this.route.queryParams.subscribe(data => {this.model.id = data['id'], this.model.title = data['title']});
  	}
	
	reset() {
		let headers = new Headers();
  		headers.append('Content-Type', 'application/json');
    	this.http.post('http://54.161.216.233:8090/api/secured/cms-pages?access_token=' + this.token, this.model, {headers: headers})
			.map(res => res.json())
			.subscribe(
				data =>  {this.router.navigate(['/dashboard/content'])},
				error => console.log("error"),
  				() => this.ngOnInit()
			);
	}

}