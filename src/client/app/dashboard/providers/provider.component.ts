import {Component } from '@angular/core';
import { Http } from '@angular/http';
import { PagerService } from './pager.service'

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
	
	constructor(private http : Http, , private pagerService: PagerService) { }

	ngOnInit() {
		this.http.get('http://localhost:8090/api/provider')
  				.map(res => res.json())
  				.subscribe(
  					data => {this.providers= data.content;
  								this.setPage(1);}
  					error => console.log("error"),
  					() => console.log("complete")
  				);
	}

	search(terms: string) {
		if(terms) {
			this.pagedItems = this.providers.filter((item) => (item.mainEmail.startsWith(terms) | item.secondaryEmail.startsWith(terms) | item.contactName.startsWith(terms));
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
