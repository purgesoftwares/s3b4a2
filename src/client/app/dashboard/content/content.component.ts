import {Component } from '@angular/core';
import { Http } from '@angular/http';
import { PaginateService } from '../pagination.service';
import { Router } from '@angular/router';

@Component({
	moduleId: module.id,
	selector: 'content',
	templateUrl: 'content.component.html',

	providers: [PaginateService]
})

export class ContentComponent {
	items= [];
	terms:string = '';
    message: any= {};
	mess = false;
	itemCount = 0;
	succ = false;

	constructor(private http: Http, private paginateService: PaginateService, private router: Router) {}

	reloadItems (params) {
		let url = "cms-pages";
        this.paginateService.query(params, url).then(result => {console.log(result.count); 
        					if(result.items.content.length) {
				            	this.items = result.items.content;
            					this.itemCount = result.count;
                  			} else {
                      			this.mess=true;
                      			this.message= "There is no records found."
                  			}});
    }

	delete (id : string) {
		let value =  "cms-pages/" + id;
		if (confirm("Are You Sure! You want to delete this record?") == true) {
			this.paginateService.delete(value).then(result => {this.reloadItems();
									this.succ = true;
									this.message = "Record successfully deleted";
									setTimeout(() => {
	                					this.succ = false;
	            					}, 1000);
								});
		}
	}

	add() {
		this.router.navigate(['/dashboard/add-content/']);
	}

    update(id: number, title: string, content: string, status: string) {
    	this.router.navigate(['/dashboard/add-content/'], { queryParams: { Id: id, title: title,Content: content, status: status}});
    }

	search(terms: string) {
		if(terms) {
			this.items = this.items.filter((item) => item.title.startsWith(terms));
		} else {
			this.reloadItems();
		}
	}
}

