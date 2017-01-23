import {Component } from '@angular/core';
import { Http } from '@angular/http';
import { PagerService } from '../pager.service'
import { Router } from '@angular/router';

@Component({
	moduleId: module.id,
	selector: 'category',
	templateUrl: 'category.component.html',

	providers: [PagerService]

})

export class CategoryComponent {
	category: Array<Object>[];
	pager: any = {};
	terms:string = '';
    pagedItems: any[];
	
	constructor(private http : Http, private pagerService : PagerService,private router: Router) { }

	ngOnInit() {
		this.http.get('http://54.161.216.233:8090/api/secured/product-category?access_token=c1417477-6f4b-485e-a518-f3de5cbca17e')
  				.map(res => res.json())
  				.subscribe(
  					data => {this.category= data.content;
  								this.setPage(1);},
  					error => console.log("error"),
  					() => console.log("complete")
  				);
	}

	search(terms: string) {
		if(terms) {
			this.pagedItems = this.category.filter((item) => item.name.startsWith(terms);
		} else {
			this.ngOnInit();
		}
	}
   
    setPage(page: number) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        this.pager = this.pagerService.getPager(this.category.length, page);
        this.pagedItems = this.category.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }   
}

