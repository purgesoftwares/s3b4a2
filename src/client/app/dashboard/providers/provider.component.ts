import {Component } from '@angular/core';
import { Http } from '@angular/http';
import { PagerService } from '../pager.service'
import { Router } from '@angular/router';
import { PaginateService } from '../pagination.service';

@Component({
	moduleId: module.id,
	selector: 'provider-cmp',
	templateUrl: 'provider.component.html',

	providers: [PaginateService]

})

export class ProviderComponent {
	items= [];
	terms:string = '';
	message: any= {};
	mess = false;
    pagedItems: any[];
    succ = false;
    token = localStorage.getItem('access_token');
	
	constructor(private http: Http, private paginateService: PaginateService, private router: Router) {}

	reloadItems (params) {
		let url = "provider";
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
		let value =  "user/" + id;
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

	products(id: number, name: string) {
		this.router.navigate(['/dashboard/product-list/'],{ queryParams: { id: id, name: name}});
	}

	details(id: number) {
		this.router.navigate(['/dashboard/bank-detail/'],{ queryParams: { id: id}});
	}

	change(id: string) {
		this.router.navigate(['/dashboard/reset-password/'],{ queryParams: { id: id}})
	}


	search(terms: string) {
		if(terms) {
			this.items = this.items.filter((item) => item.mainEmail.startsWith(terms));
		} else {
			this.reloadItems();
		}
	}
}
