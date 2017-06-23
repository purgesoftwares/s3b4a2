import {Component } from '@angular/core';
import { Http } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import * as globals from './../../../globals'; 


@Component({
	moduleId: module.id,
	selector: 'provider-cmp',
	templateUrl: 'resetPassword.component.html'
})

export class ResetPasswordComponent {
	model: any= {};
	reset: any= {};
	message: any= {};
	loading = false;
	mess = false;
	succ = false;

    token = localStorage.getItem('access_token');

	constructor(private http : Http, private router: Router, private route: ActivatedRoute) {}

	ngOnInit() {
	   this.route.queryParams.subscribe(data => this.reset.id = data['id']);

	   this.http.get(globals.apiSecureUrl+'/provider/' + this.reset.id +'?access_token=' + this.token)
				.map(res => res.json())
				.subscribe(
					data => {this.reset = data;},
					error => {if(error.json().error) {
									this.message = error.json().message
									this.mess = true;
								}},
	  				() => {	this.model.email= this.reset.mainEmail;}
				);

  	}
	save() {
		this.loading = true;
		
		if(this.model.newPassword != this.model.confirmPassword) {
			this.mess = true;
			this.message = 'New password and Confirm Password Not match.';
			this.loading = false;
		}	else {

			this.http.post(globals.apiSecureUrl+'/provider/reset-password?access_token=' + this.token, this.model)
				.map(res => res.json())
				.subscribe(
						data =>  {	this.succ = true;
							this.message = 'Successfully Reset Password.';
							setTimeout(() => {
								this.succ = false;
                				this.router.navigate(['/dashboard/provider']);
            				}, 1000);},
				error => { if(error.json().error) {
							this.message = error.json().message;
							this.mess = true;
						}
  						this.loading = false;},
  				() => console.log('complete')
				);
			}
		}
	}
}
