import {Component } from '@angular/core';
import { Http } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import * as globals from './../../../globals'; 


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
	succ = false;
	token = localStorage.getItem('access_token');

	constructor(private http : Http, private router: Router, private route: ActivatedRoute) {}

	ngOnInit() {
	   this.route.queryParams.subscribe(data => {this.model.id = data['Id'], this.model.title = data['title'], this.model.content = data['Content'], this.model.status = data['status']});
  	}
	
	save() {
		this.loading = true;
    	this.http.post(globals.apiSecureUrl+'/cms-pages?access_token=' +this.token, this.model)
			.map(res => res.json())
			.subscribe(
					data => {this.succ = true;
							this.message = "Successfully Saved";
							setTimeout(() => {
                				this.router.navigate(['/dashboard/content'])
            				}, 1000);},
					error => { if(error.json().error) {
							this.message = error.json().message
							this.mess = true;
						}
  						this.loading = false;},
  					() => console.log("complete")
				);
	}

	onChange(values: string) {
		console.log(values);
    	this.model.status = values;
	}
}