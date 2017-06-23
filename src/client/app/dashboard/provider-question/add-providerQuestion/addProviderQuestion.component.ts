import {Component } from '@angular/core';
import { Http } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import * as globals from './../../../globals'; 


@Component({
	moduleId: module.id,
	selector: 'productQuestion-cmp',
	templateUrl: 'addProviderQuestion.component.html'
})

export class AddProviderQuestionComponent {
	model: any= {};
    message: any= {};
    succ = false;
	mess = false;
	loading = false;
	token = localStorage.getItem('access_token');
	constructor(private http : Http, private router: Router, private route: ActivatedRoute) {}

	ngOnInit() {
	   this.route.queryParams.subscribe(data => {this.model.id = data['id'], this.model.title = data['title'],this.model.description = data['description']});
  	}
	
	save() {
		this.model.type = "provider"
    	this.http.post(globals.apiSecureUrl+'/question?access_token=' + this.token, this.model)
			.map(res => res.json())
			.subscribe(
				data =>  {	this.succ = true;
							this.message = "Successfully Saved";
							setTimeout(() => {
                				this.router.navigate(['/dashboard/providerQuestion'])
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