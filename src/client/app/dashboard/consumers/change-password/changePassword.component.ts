import {Component } from '@angular/core';
import { Http } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
	moduleId: module.id,
	selector: 'change-cmp',
	templateUrl: 'changePassword.component.html'
})

export class ChangePasswordComponent {
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
	
		if(this.model.newPassword != this.model.confirmPassword){
			this.mess = true;
			this.message = "New password and Confirm Password Not match."
			this.loading = false;
		}	else {

		this.http.post('http://54.161.216.233:8090/api/public/customer/reset-password', this.model)
				.map(res => res.json())
				.subscribe(
						data =>  {	this.succ = true;
							this.message = "Successfully Change Password.";
							setTimeout(() => {
                				this.router.navigate(['/dashboard/consumer'])
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
}