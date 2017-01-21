import {Component } from '@angular/core';
import { Http } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
	moduleId: module.id,
	selector: 'provider-cmp',
	templateUrl: 'resetPassword.component.html'
})

export class ResetPasswordComponent {
	model: any= {};
	email: any={};
	

	constructor(private http : Http, private router: Router, private route: ActivatedRoute) {}

	ngOnInit() {
	   this.route.queryParams.subscribe(data => this.model.email = data['Email']);
  	}
	
	reset() {
		this.http.post('http://54.161.216.233:8090/api/public/user/reset-password', this.model)
				.map(res => res.json())
				.subscribe(
						data => {this.router.navigate(['/dashboard/provider'])}
				);
	}

}