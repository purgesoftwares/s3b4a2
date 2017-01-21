import {Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
	moduleId: module.id,
	selector: 'inquiry',
	templateUrl: 'inquiry.component.html',
})

export class InquiryComponent {
	inquiry: Array<Object>[];

	constructor(private http : Http) { }

	ngOnInit() {
		this.http.get('http://54.161.216.233:8090/api/secured/contact-us?access_token=c1417477-6f4b-485e-a518-f3de5cbca17e')
  				.map(res => res.json())
  				.subscribe(
  					data => this.inquiry =data.content,
  					error => console.log("error"),
  					() => console.log(this.inquiry);
  				);
	}
}
