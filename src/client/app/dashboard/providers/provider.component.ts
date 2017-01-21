import {Component } from '@angular/core';
import { Http } from '@angular/http';
import { PagerService } from './pager.service'
import { Router } from '@angular/router';

@Component({
	moduleId: module.id,
	selector: 'provider-cmp',
	templateUrl: 'provider.component.html',

	providers: [PagerService]

})

export class ProviderComponent {
	providers: Array<Object>[];
	pager: any = {};
	terms:string = '';
	showPasswordForm: boolean = false;

    pagedItems: any[];
	
	constructor(private http : Http, private pagerService : PagerService,private router: Router) { }

	ngOnInit() {
		this.http.get('http://54.161.216.233:8090/api/provider')
  				.map(res => res.json())
  				.subscribe(
  					data => {this.providers= data.content;
  								this.setPage(1);},
  					error => console.log("error"),
  					() => console.log("complete")
  				);
	}

	details(id) {
		console.log(id)
		this.http.get('http://54.161.216.233:8090/api/secured/bank-detail/get-bankdetail/' + id + '?access_token=c1417477-6f4b-485e-a518-f3de5cbca17e')
			.map(res => res.json())
			.subscribe(
				data => {this.router.navigate(['/dashboard/bank-detail/'],{ queryParams: { details: data}})}
			);
	}

	change(email) {
		this.router.navigate(['/dashboard/reset-password/'],{ queryParams: { Email:email}})
	}

	delete(id: number) {
    	this.http.delete('http://54.161.216.233:8090/api/secured/user/' + id)
			.map(res => res.json())
			.subscribe(
				data => console.log(data)
			);
    }

	search(terms: string) {
		if(terms) {
			this.pagedItems = this.providers.filter((item) => item.mainEmail.startsWith(terms);
		} else {
			this.ngOnInit();
		}
	}
   
    setPage(page: number) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        this.pager = this.pagerService.getPager(this.providers.length, page);
        this.pagedItems = this.providers.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }

    
}
