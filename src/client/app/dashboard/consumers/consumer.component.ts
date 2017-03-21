import {Component } from '@angular/core';
import { Http } from '@angular/http';
import { PagerService } from '../pager.service'
import { Router } from '@angular/router';
import { PaginateService } from '../pagination.service';

@Component({
	moduleId: module.id,
	selector: 'consumer-cmp',
	templateUrl: 'consumer.component.html',

	providers: [PaginateService]
})

export class ConsumerComponent {
	items= [];
	terms:string = '';
    message: any= {};
	mess = false;
	itemCount = 0;
	succ = false;

	constructor(private http: Http, private paginateService: PaginateService, private router: Router) {}

	reloadItems (params) {
		let url = "customer";
        this.paginateService.query(params, url).then(result => { 
        					if(result.items.content.length) {
				            	this.items = result.items.content;
            					this.itemCount = result.count;
                  			} else {
                      			this.mess=true;
                      			this.message= "There is no records found."
                  			}});
    }

	delete (id : string) {
		let value =  "customer/" + id;
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

	change (email: string) {
		this.router.navigate(['/dashboard/change-password/'],{ queryParams: { Email:email}})
	}

	search (terms: string) {
		if(terms) {
			this.items = this.items.filter((item) => item.mainEmail.startsWith(terms) || item.fullName.startsWith(terms));
		} else {
			this.reloadItems();
		}
	}
}