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
    message: any= {};
	mess = false;
	loading= false;
	succ = false;
	token = localStorage.getItem('access_token');
	constructor(private http : Http, private router: Router, private route: ActivatedRoute) {}

	ngOnInit() {
	   this.route.queryParams.subscribe(data => {this.model.id = data['id'], this.model.title = data['title'],this.model.description = data['description']});
  	}
	
	save() {
		this.loading = true;
		this.model.type = "product";
    	this.http.post('http://54.161.216.233:8090/api/secured/question?access_token=' + this.token, this.model)
			.map(res => res.json())
			.subscribe(
				data =>  {	this.succ = true;
							this.message = "Successfully Saved";
							setTimeout(() => {
                				this.router.navigate(['/dashboard/productQuestion'])
            				}, 1000);},
				error => { if(error.json().error) {
							this.message = error.json().message
							this.mess = true;
						}
  						this.loading = false;},
  				() => console.log("complete")
  			);
	}

}