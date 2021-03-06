import {Component } from '@angular/core';
import { Http } from '@angular/http';
import { PagerService } from '../pager.service'
import { Router } from '@angular/router';
import * as moment from 'moment';
import * as globals from './../../globals'; 


@Component({
	moduleId: module.id,
	selector: 'coupon-package-cmp',
	templateUrl: 'coupon-package.component.html',

	providers: [PagerService]

})

export class CouponPackageComponent {
	couponPackage: Array<Object>[];
	pager: any = {};
	terms:string = '';
    pagedItems: any[];
    message: any= {};
	mess = false;
	succ = false;
	public ids:any[]=[];
	
	token = localStorage.getItem('access_token');
	
	constructor(private http : Http, private pagerService : PagerService,private router: Router) { }

	ngOnInit() {
		this.http.get(globals.apiSecureUrl+'/coupon-package?access_token=' + this.token)
  				.map(res => res.json())
  				.subscribe(
  					data => {if(data.content.length) {
                  				this.couponPackage= data.content;
                  				this.setPage(1);
                  			} else {
                      			this.mess=true;
                      			this.message= "There is no records found.";
                      			setTimeout(() => {
                					this.mess = false;
            					}, 5000);
                  			}},
  					error => { console.log(error);
  						if(error.json().error) {
									this.message = error.json().message;
									this.mess = true;
								}},
  					() => console.log("complete")
  				);
	}

	add() {
		this.router.navigate(['/dashboard/add-couponPackage/'])
	}

	update(id: number) {

		this.router.navigate(['/dashboard/add-couponPackage/'],{ queryParams: { Id:id }})
	}

	view(id : number) {
		
		this.router.navigate(['/dashboard/coupon-package-view/'],{ queryParams: { Id:id}})
	}

	delete(id : number) {
		if (confirm("Are You Sure! You want to delete this record?") == true) {
			this.http.delete(globals.apiSecureUrl+'/coupon-package/' + id +'?access_token=' + this.token)
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
			this.pagedItems = this.couponPackage.filter((item) => item.couponNumber.toString().startsWith(terms));
		} else {
			this.ngOnInit();
		}
	}
   
    setPage(page: number) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        this.pager = this.pagerService.getPager(this.couponPackage.length, page);
        this.pagedItems = this.couponPackage.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }
}
