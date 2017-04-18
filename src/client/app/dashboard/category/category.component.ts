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
    message: any= {};
	mess = false;
	succ = false;

	token = localStorage.getItem('access_token');

	constructor(private http : Http, private pagerService : PagerService,private router: Router) { }

	ngOnInit() {
		var token = localStorage.getItem('access_token');
		
		this.http.get('http://54.161.216.233:8090/api/secured/product-category?access_token='+ this.token)
  				.map(res => res.json())
  				.subscribe(
  					data => { if(data.content.length) {
                  				this.category= data.content;
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
		
		this.router.navigate(['/dashboard/add-category/']);
	}

	update(id: number, name: string, description: string) {
    	this.router.navigate(['/dashboard/add-category/'], { queryParams: { Id: id, name: name,description: description}});
    }

	delete(id: number) {
		if (confirm("Are You Sure! You want to delete this record?") == true) {
	    	this.http.delete('http://54.161.216.233:8090/api/secured/product-category/' + id + '?access_token='+ this.token)
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
			this.pagedItems = this.category.filter((item) => item.name.startsWith(terms));
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

