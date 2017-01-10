import {Component } from '@angular/core';
import { UserService } from './user.service';


@Component({
	moduleId: module.id,
	selector: 'user-cmp',
	templateUrl: 'user.component.html',

	providers: [UserService]
})

export class UserComponent {
	model: any ={};
	getData: Array<Object>[];


	constructor(private _http :  UserService) {}
	ngOnInit() {
		this._http.getData()
			.subscribe(
				data => this.getData = data.content,
				error => console.log(error),
				() => console.log("complete")
			);
	}
}
