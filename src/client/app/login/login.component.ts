import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
/**
*	This class represents the lazy loaded LoginComponent.
*/

@Component({
	moduleId: module.id,
	selector: 'login-cmp',
	templateUrl: 'login.component.html',
})

export class LoginComponent {
	model: any= {};
	message: any= {};
	mess = false;
	loading = false;

	constructor( private http : Http,
				private router: Router ) {}

	login() {

		localStorage.setItem('access_token', 'c1417477-6f4b-485e-a518-f3de5cbca17e');
		this.router.navigate(['/dashboard/home'])		
		/*this.loading = true;
		this.http.post('http://localhost:8090/api/oauth/token', this.model)
			.map((res:Response) => res.text())
			.subscribe(
			    data => { 
			    	if(data) {
			    		localStorage.setItem('access_token', data);
				    	this.router.navigate(['/dashboard/home']
			    	} else {this.mess= true;
				    	this.message.type= 'Username Password is incorrect';
				    	this.loading = false;}}
			    error => {console.log(error);
				    this.mess= true;
				    this.message.type= 'Error'; 
				    this.loading = false;
				}
			 );*/
	}
}