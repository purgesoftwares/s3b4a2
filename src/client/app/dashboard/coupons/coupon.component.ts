import {Component } from '@angular/core';
import { Http } from '@angular/http';
import { PagerService } from '../pager.service'
import { Router, ActivatedRoute } from '@angular/router';
import * as moment from 'moment';

@Component({
	moduleId: module.id,
	selector: 'coupon-cmp',
	templateUrl: 'coupon.component.html',

	providers: [PagerService]

})

export class CouponComponent {
	coupons: Array<Object>[];
	pager: any = {};
	terms:string = '';
    pagedItems: any[];
    message: any= {};
	mess = false;
	succ = false;

	token = localStorage.getItem('access_token');
	
	constructor(private http : Http, private pagerService : PagerService,private router: Router, private route: ActivatedRoute) { }

	ngOnInit() {
		var id;
		this.route.queryParams.subscribe(data => {id = data['Id']});
		this.http.get('http://54.161.216.233:8090/api/secured/coupon/by-coupon-package/'+ id +'?access_token=' + this.token)
  				.map(res => res.json())
  				.subscribe(
  					data => { if(data.content.length) {
                  				this.coupons= data.content;
                  				this.setPage(1);
                  			} else {
                      			this.mess=true;
                      			this.message= "There is no records found.";
                  			}},
  					error => { if(error.json().error) {
									this.message = error.json().message;
									this.mess = true;
								}},
  					() => console.log("complete")
  				);
	}

	view(id : number,couponCode: string,couponNumber: number,price : number , providerId : string,used: number,availability: number, startTime: Date, endTime: Date) {
		var date = moment(endTime).format('YYYY-MM-DD hh:mm');
		var stdate = moment(startTime).format('YYYY-MM-DD hh:mm');
		
		this.router.navigate(['/dashboard/coupon-view/'],{ queryParams: { Id:id,CouponCode:couponCode,CouponNumber:couponNumber,Price:price,ProviderId:providerId,Used:used,availability: availability,startTime:stdate, endTime:date}})
	}

	search(terms: string) {
		if(terms) {
			this.pagedItems = this.coupons.filter((item) => item.couponCode.startsWith(terms));
		} else {
			this.ngOnInit();
		}
	}
   
    setPage(page: number) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        this.pager = this.pagerService.getPager(this.coupons.length, page);
        this.pagedItems = this.coupons.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }   
}
