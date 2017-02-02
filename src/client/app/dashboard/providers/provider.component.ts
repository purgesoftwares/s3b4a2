import {Component } from '@angular/core';
import { Http } from '@angular/http';
import { PagerService } from '../pager.service'
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
	message: any= {};
	mess = false;
	bank: Array<Object>[];
    pagedItems: any[];
    succ = false;
	token:any={};

    token = localStorage.getItem('access_token');
	
	constructor(private http : Http, private pagerService : PagerService, private router: Router) { }

	ngOnInit() {
		this.http.get('http://54.161.216.233:8090/api/secured/provider?access_token=' + this.token)
  				.map(res => res.json())
  				.subscribe(
  					data => { if(data.content.length) {
                  				this.providers= data.content;
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

	details(id) {
		
		this.http.get('http://54.161.216.233:8090/api/secured/bank-detail/get-bankdetail/' + id + '?access_token='+ this.token)
			.map(res => res.json())
			.subscribe(
				data => {this.bank= data;
				this.router.navigate(['/dashboard/bank-detail/'],{ queryParams: { id: this.bank.id,
																				beneficiaryName:this.bank.beneficiaryName,
																				providerId :this.bank.providerId,
																				beneficiaryAddress:this.bank.beneficiaryAddress,
																				bankName: this.bank.bankName,
																				branchNumber: this.bank.branchNumber,
																				accountNumber: this.bank.accountNumber}});}
				error => {console.log(error);
				if(error) {
							this.message = "For this Provider Bank Details not exist.";
							this.mess = true;
				};},
			);
	}

	change(email) {
		this.router.navigate(['/dashboard/reset-password/'],{ queryParams: { Email:email}})
	}

	delete(id: number) {
		if (confirm("Are You Sure! You want to delete this record?") == true) {
	    	this.http.delete('http://54.161.216.233:8090/api/secured/user/' + id +'?access_token=' + this.token)
				.map(res => res.json())
				.subscribe(
					data => {this.ngOnInit();
								this.succ = true;
								this.message = "Record successfully deleted";
								setTimeout(() => {
                					this.succ = false;
            					}, 1000);
							},
					error => {if(error.json().error) {
									this.message = error.json().message
									this.mess = true;
								}},
	  				() => console.log("complete")
				);
		}
    }

	search(terms: string) {
		if(terms) {
			this.pagedItems = this.providers.filter((item) => item.mainEmail.startsWith(terms));
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
