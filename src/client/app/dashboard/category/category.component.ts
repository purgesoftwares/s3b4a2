import {Component } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Component({
	moduleId: module.id,
	selector: 'category',
	templateUrl: 'category.component.html',
})

export class CategoryComponent {
	category: Array<Object>[];

	constructor(private http : Http, private router : Router) { }

	ngOnInit() {
		this.http.get('http://54.161.216.233:8090/api/secured/product-category?access_token=c1417477-6f4b-485e-a518-f3de5cbca17e')
  				.map(res => res.json())
  				.subscribe(
  					data => this.category =data.content,
  					error => console.log("error"),
  					() => console.log(this.category);
  				);
	}
}
