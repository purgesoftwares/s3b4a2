import {Component } from '@angular/core';
import { Http } from '@angular/http';
import { PagerService } from '../pager.service'
import { Router } from '@angular/router';

@Component({
	moduleId: module.id,
	selector: 'product-question',
	templateUrl: 'productQuestion.component.html'

	providers: [PagerService]

})

export class ProductQuestionComponent {
	productQuestions: Array<Object>[];
	pager: any = {};
	terms:string = '';
    pagedItems: any[];
    token:any[];
    message: any= {};
	mess = false;

	token = localStorage.getItem('access_token');
	
	constructor(private http : Http, private pagerService : PagerService,private router: Router) { }

	ngOnInit() {
		var type = "product";
		this.http.get('http://54.161.216.233:8090/api/secured/question/type/'+ type +'?access_token=' + this.token)
  				.map(res => res.json())
  				.subscribe(
  					data => { if(data.length) {
                  				this.productQuestions= data;
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
		this.router.navigate(['/dashboard/add-ProductQuestion/']);
	}

	delete(id: number) {
    	this.http.delete('http://54.161.216.233:8090/api/secured/question/' + id + '?access_token=' + this.token)
			.map(res => res.json())
			.subscribe(
				data => console.log(data),
				error => console.log("error"),
  				() => this.ngOnInit()
			);
    }

    update(id: number, title: string, description:string, isDefault:boolean) {
    	if(isDefault) {
    		this.mess=true;
            this.message= "Can't Edit! These is default question."
    	} else {
    		this.router.navigate(['/dashboard/add-ProductQuestion/'], { queryParams: { id: id, title: title, description: description}});
    	}
    }

	search(terms: string) {
		console.log(terms)
		if(terms) {
			this.pagedItems = this.productQuestions.filter((item) => item.title.startsWith(terms));
		} else {
			this.ngOnInit();
		}
	}
   
    setPage(page: number) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        this.pager = this.pagerService.getPager(this.productQuestions.length, page);
        this.pagedItems = this.productQuestions.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }   
}

