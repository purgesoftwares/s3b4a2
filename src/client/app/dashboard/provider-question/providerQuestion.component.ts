import {Component } from '@angular/core';
import { Http } from '@angular/http';
import { PagerService } from '../pager.service'
import { Router } from '@angular/router';
import * as globals from './../../globals'; 


@Component({
	moduleId: module.id,
	selector: 'provider-question',
	templateUrl: 'providerQuestion.component.html',

	providers: [PagerService]

})

export class ProviderQuestionComponent {
	providerQuestions: Array<Object>[];
	pager: any = {};
	terms:string = '';
    pagedItems: any[];
    message: any= {};
	mess = false;
	succ = false;

	token = localStorage.getItem('access_token');
	
	constructor(private http : Http, private pagerService : PagerService,private router: Router) { }

	ngOnInit() {
		var type = "provider";
		this.http.get(globals.apiSecureUrl+'/question/type/'+ type +'?access_token=' + this.token)
  				.map(res => res.json())
  				.subscribe(
  					data => { if(data.length) {
                  				this.pagedItems= data;
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

	add() {
		this.router.navigate(['/dashboard/add-ProviderQuestion/']);
	}

	delete(id: number) {
		if (confirm("Are You Sure! You want to delete this record?") == true) {
	    	this.http.delete(globals.apiSecureUrl+'/question/' + id + '?access_token=' + this.token)
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

    update(id: number, title: string, description:string) {
    	this.router.navigate(['/dashboard/add-ProviderQuestion/'], { queryParams: { id: id, title: title, description: description}});
    }

	search(terms: string) {
		if(terms) {
			this.pagedItems = this.pagedItems.filter((item) => item.title.startsWith(terms));
		} else {
			this.ngOnInit();
		}
	}
   
    setPage(page: number) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        this.pager = this.pagerService.getPager(this.pagedItems.length, page);
        this.pagedItems = this.pagedItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }   
}

