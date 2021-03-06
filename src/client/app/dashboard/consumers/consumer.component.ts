import {Component } from '@angular/core';
import { Http } from '@angular/http';
import { PagerService } from '../pager.service'
import { Router } from '@angular/router';
import * as globals from './../../globals'; 


@Component({
	moduleId: module.id,
	selector: 'consumer-cmp',
	templateUrl: 'consumer.component.html',

	providers: [PagerService]
})

export class ConsumerComponent {
	consumers: Array<Object>[];
	pager: any = {};
	terms:string = '';
    pagedItems: any[];
    message: any= {};
	mess = false;
	succ = false;
	token = localStorage.getItem('access_token');

	constructor(private http: Http, private pagerService: PagerService, private router: Router) {}

	ngOnInit() {
		this.http.get(globals.apiSecureUrl+'/customer?access_token=' + this.token)
			.map(res=> res.json())
			.subscribe(
				data => { if(data.content.length) {
                  				this.consumers= data.content;
                  				this.setPage(1);
                  			} else {
                      			this.mess=true;
                      			this.message= "There is no records found."
                  			}},
  					error => { if(error.json().error) {
									this.message = error.json().message
									this.mess = true;
								}},
  					() => console.log("complete")
			);
	}

	delete(id : Number) {
		if (confirm("Are You Sure! You want to delete this record?") == true) {
	    	this.http.delete(globals.apiSecureUrl+'/customer/' + id + '?access_token='+ this.token)
				.map(res => res.json())
				.subscribe(
					data => {this.ngOnInit();
								this.succ = true;
								this.message = "Record successfully deleted";
								setTimeout(() => {
                					this.succ = false;
            					}, 1000);
							},
					error => console.log("error"),
	  				() => console.log("complete")
				);
		}
	}

	change(email: string) {
		this.router.navigate(['/dashboard/change-password/'],{ queryParams: { Email:email}})
	}

	search(terms: string) {
		if(terms) {
			this.pagedItems = this.consumers.filter((item) => item.mainEmail.startsWith(terms));
		} else {
			this.ngOnInit();
		}
	}
   
    setPage(page: number) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        this.pager = this.pagerService.getPager(this.consumers.length, page);
        this.pagedItems = this.consumers.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }
}