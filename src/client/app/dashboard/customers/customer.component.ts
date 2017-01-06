import {Component } from '@angular/core';
import { Customer } from './customer'
import { CustomerService } from './customer.service'


@Component({
	moduleId: module.id,
	selector: 'customer-cmp',
	templateUrl: 'customer.component.html',

	providers: [CustomerService]
})

export class CustomerComponent {
	customers: Array<Object>[];
	model: any= {};
	constructor(private http: CustomerService) {}

	ngOnInit() {
		this.http.getData()
			.subscribe(
				data => this.customers = data.content,
				error => console.log(error),
				() => console.log("complete")
			);
	}

	submit() {
		this.http.postData(this.model)
		  .subscribe(
		    data => console.log(data),
		    err => console.log(err),
		    () => console.log('Call Complete')
		  );
	}
}
