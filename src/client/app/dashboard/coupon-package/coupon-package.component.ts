import {Component } from '@angular/core';
import { Http } from '@angular/http';
import { PagerService } from '../pager.service'
import { Router } from '@angular/router';
import * as moment from 'moment';

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

	token:any[];

	token = localStorage.getItem('access_token');
	
	constructor(private http : Http, private pagerService : PagerService,private router: Router) { }

	ngOnInit() {
		this.http.get('http://54.161.216.233:8090/api/secured/coupon-package?access_token=' + this.token)
  				.map(res => res.json())
  				.subscribe(
  					data => { console.log(data.content);
  					 if(data.content.length) {
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

	/*update(id,couponCode,couponNumber,price,providerId,used,availability, startTime, endTime) {
		var date = moment(endTime).format('YYYY-MM-DD hh:mm');
		var stdate = moment(startTime).format('YYYY-MM-DD hh:mm');
		
		this.router.navigate(['/dashboard/add-coupon/'],{ queryParams: { Id:id,CouponCode:couponCode,CouponNumber:couponNumber,Price:price,ProviderId:providerId,Used:used,availability: availability,startTime:stdate, endTime:date}})
	}

	view(id,couponCode,couponNumber,price,providerId,used,availability, startTime, endTime) {
		var date = moment(endTime).format('YYYY-MM-DD hh:mm');
		var stdate = moment(startTime).format('YYYY-MM-DD hh:mm');
		
		this.router.navigate(['/dashboard/coupon-view/'],{ queryParams: { Id:id,CouponCode:couponCode,CouponNumber:couponNumber,Price:price,ProviderId:providerId,Used:used,availability: availability,startTime:stdate, endTime:date}})
	}*/

	delete(id : number) {
		if (confirm("Are You Sure! You want to delete this record?") == true) {
			this.http.delete('http://54.161.216.233:8090/api/secured/coupon-package/' + id +'?access_token=' + this.token)
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
			this.pagedItems = this.couponPackage.filter((item) => item.couponCode.startsWith(terms));
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
