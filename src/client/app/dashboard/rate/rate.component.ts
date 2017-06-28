import {Component } from '@angular/core';
import { Http } from '@angular/http';
import { PagerService } from '../pager.service'
import { Router } from '@angular/router';
import * as globals from './../../globals'; 

@Component({
	moduleId: module.id,
	selector: 'rate',
	templateUrl: 'rate.component.html',

	providers: [PagerService]

})

export class RateComponent {
	rate: Array<Object>[];
	pager: any = {};
	terms:string = '';
    pagedItems: any[];
    message: any= {};
	mess = false;
	succ = false;

	token = localStorage.getItem('access_token');

	constructor(private http : Http, private pagerService : PagerService,private router: Router) { }

	ngOnInit() {
		var token = localStorage.getItem('access_token');
		console.log(globals.apiSecureUrl);
		this.http.get(globals.apiSecureUrl+'/rate-review?access_token='+ this.token)
  				.map(res => res.json())
  				.subscribe(
  					data => { if(data.content.length) {
                  				this.rate= data.content;
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

	view(id: number) {
		this.router.navigate(['/dashboard/view-rate/'], { queryParams: { Id: id}});
	}

	delete(id: number) {
		if (confirm("Are You Sure! You want to delete this record?") == true) {
	    	this.http.delete(globals.apiSecureUrl+'/rate-review/' + id + '?access_token='+ this.token)
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

	search(terms: string) {
		if(terms) {
			this.pagedItems = this.rate.filter((item) => item.feedback.startsWith(terms));
		} else {
			this.ngOnInit();
		}
	}
   
    setPage(page: number) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        this.pager = this.pagerService.getPager(this.rate.length, page);
        this.pagedItems = this.rate.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }   
}

