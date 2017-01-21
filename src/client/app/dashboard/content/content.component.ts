import {Component } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Component({
	moduleId: module.id,
	selector: 'content',
	templateUrl: 'content.component.html',
})

export class ContentComponent {
	contents: Array<Object>[];
	showData: false;

	constructor(private http : Http, private router : Router) { }

	ngOnInit() {
		this.http.get('http://54.161.216.233:8090/api/secured/cms-pages?access_token=c1417477-6f4b-485e-a518-f3de5cbca17e')
  				.map(res => res.json())
  				.subscribe(
  					data => this.contents =data.content,
  					error => console.log("error"),
  					() => console.log(this.contents);
  				);
	}
	
	add() {
		
		this.router.navigate(['/dashboard/add-content/']);
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
    	this.router.navigate(['/dashboard/add-content/'], { queryParams: { id: id, title: title}});
    }
}
