import {Component } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Component({
	moduleId: module.id,
	selector: 'product-question',
	templateUrl: 'productQuestion.component.html',
})

export class ProductQuestionComponent {
	productQuestions: Array<Object>[];
	showData: false;

	constructor(private http : Http, private router : Router) { }

	/*ngOnInit() {
		this.http.get('http://54.161.216.233:8090/api/secured/cms-pages?access_token=c1417477-6f4b-485e-a518-f3de5cbca17e')
  				.map(res => res.json())
  				.subscribe(
  					data => this.productQuestions =data.content,
  					error => console.log("error"),
  					() => console.log(this.productQuestions);
  				);
	}*/
	
	add() {
		
		this.router.navigate(['/dashboard/add-productQuestion/']);
	}

	delete(id: number) {
    	this.http.delete('http://54.161.216.233:8090/api/secured/cms-pages/' + id + '?access_token=c1417477-6f4b-485e-a518-f3de5cbca17e')
			.map(res => res.json())
			.subscribe(
				data => console.log(data),
				error => console.log("error"),
  				() => this.ngOnInit()
			);
    }

    update(id: number, title: string) {
    	this.router.navigate(['/dashboard/add-ProductQuestion/'], { queryParams: { id: id, title: title}});
    }
}
