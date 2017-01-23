import {Component } from '@angular/core';
import { Http } from '@angular/http';
import { PagerService } from '../pager.service'
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'inquiry',
  templateUrl: 'inquiry.component.html',

  providers: [PagerService]

})

export class InquiryComponent {
  inquiry: Array<Object>[];
  pager: any = {};
  terms:string = '';
  pagedItems: any[];
  token:any[];

  token = localStorage.getItem('access_token');

  constructor(private http : Http, private pagerService : PagerService,private router: Router) { }

  ngOnInit() {
    this.http.get('http://54.161.216.233:8090/api/secured/contact-us?access_token='+ this.token)
          .map(res => res.json())
          .subscribe(
            data => {this.inquiry= data.content;
                  this.setPage(1);},
            error => console.log("error"),
            () => console.log("complete")
          );
  }

  search(terms: string) {
    if(terms) {
      this.pagedItems = this.inquiry.filter((item) => item.mainEmail.startsWith(terms);
    } else {
      this.ngOnInit();
    }
  }
   
    setPage(page: number) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        this.pager = this.pagerService.getPager(this.inquiry.length, page);
        this.pagedItems = this.inquiry.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }   
}


