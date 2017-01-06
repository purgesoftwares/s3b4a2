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

	constructor( private http : Http,
				private router: Router ) {}

	login() {
		
		this.http.post('http://localhost:8090/api/oauth/token')
			.map((res:Response) => res.text())
			.subscribe( 
			    data => { this.router.navigate(['/dashboard/home'])},
			    error => {this.router.navigate(['/'])}
			 );
	}
}