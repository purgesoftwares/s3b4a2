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
	message: any= {};
	loading = false;
	mess = false;
	succ = false;

	constructor(private http : Http, private router: Router, private route: ActivatedRoute) {}

	ngOnInit() {
	   this.route.queryParams.subscribe(data => this.model.email = data['Email']);
  	}
	
	save() {
		this.loading = true;
		console.log(this.model);
		if(this.model.newPassword != this.model.confirmPassword){
			this.mess = true;
			this.message = "New password and Confirm Password Not match."
			this.loading = false;
		}	else {

		this.http.post('http://54.161.216.233:8090/api/public/user/reset-password', this.model)
				.map(res => res.json())
				.subscribe(
						data =>  {	this.succ = true;
							this.message = "Successfully Reset Password.";
							setTimeout(() => {
                				this.router.navigate(['/dashboard/provider'])
            				}, 1000);},
				error => { if(error.json().error) {
							this.message = error.json().message
							this.mess = true;
						}
  						this.loading = false;},
  				() => console.log("complete");
				);
		}
	}
}