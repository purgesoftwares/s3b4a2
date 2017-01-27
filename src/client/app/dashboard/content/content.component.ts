import {Component } from '@angular/core';
import { Http } from '@angular/http';
import { PagerService } from '../pager.service'
import { Router } from '@angular/router';

@Component({
	moduleId: module.id,
	selector: 'content',
	templateUrl: 'content.component.html',

	providers: [PagerService]

})

export class ContentComponent {
	content: Array<Object>[];
	pager: any = {};
	terms:string = '';
    pagedItems: any[];
    token:any[];
    message: any= {};
	mess = false;

	token = localStorage.getItem('access_token');
	
	constructor(private http : Http, private pagerService : PagerService,private router: Router) { }

	ngOnInit() {
		this.http.get('http://54.161.216.233:8090/api/secured/cms-pages?access_token=' + this.token)
  				.map(res => res.json())
  				.subscribe(
  					data => {this.content= data.content;
  								this.setPage(1);},
  					error => console.log("error"),
  					() => console.log("complete")
  				);
  				.subscribe(
						data => {this.content= data.content;
  								this.setPage(1);},
						error => { if(error.json().error) {
									this.message = error.json().message
									this.mess = true;
								}}
				);
	}

	add() {
		
		this.router.navigate(['/dashboard/add-content/']);
	}

	delete(id: number) {
    	this.http.delete('http://54.161.216.233:8090/api/secured/cms-pages/' + id + '?access_token=' + this.token)
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

	search(terms: string) {
		if(terms) {
			this.pagedItems = this.content.filter((item) => item.title.startsWith(terms);
		} else {
			this.ngOnInit();
		}
	}
   
    setPage(page: number) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        this.pager = this.pagerService.getPager(this.content.length, page);
        this.pagedItems = this.content.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }   
}

