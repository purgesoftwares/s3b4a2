import {Component } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Component({
	moduleId: module.id,
	selector: 'provider-cmp',
	templateUrl: 'resetPassword.component.html'
})

export class ResetPasswordComponent {
	model: any= {};

	constructor(private http : Http, private router: Router) {}
	
	reset() {
		this.http.post('http://localhost:8090/api/public/user/reset-password', this.model)
				.map(res => res.json())
				.subscribe(
						data => {this.router.navigate(['/dashboard/provider'])}
				);
	}

}