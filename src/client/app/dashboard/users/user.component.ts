import {Component } from '@angular/core';
import { UserService } from './user.service';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
	moduleId: module.id,
	selector: 'user-cmp',
	templateUrl: 'user.component.html',

	providers: [UserService]
})

export class UserComponent {
	model: any ={};
	getData: Array<Object>[];


	constructor(private _http :  UserService, private http : Http) {}
	ngOnInit() {
		this._http.getData()
			.subscribe(
				data => this.getData = data.content,
				error => console.log(error),
				() => console.log("complete")
			);
	}
}
