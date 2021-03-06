import {Component } from '@angular/core';
import { Http } from '@angular/http';
import { PagerService } from '../pager.service'
import { Router } from '@angular/router';
import * as globals from './../../globals'; 

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
  message: any= {};
  mess = false;
  token = localStorage.getItem('access_token');

  constructor(private http : Http, private pagerService : PagerService,private router: Router) { }

  ngOnInit() {
    this.http.get(globals.apiSecureUrl+'/contact-us?access_token='+ this.token)
          .map(res => res.json())
          .subscribe(
            data => { if(data.content.length) {
                  this.inquiry= data.content;
                  this.setPage(1);
                  } else {
                      this.mess=true;
                      this.message= "There is no records found."
                  }
            },
            error => console.log("error"),
            () => console.log("complete")
          );
  }

  view(id : string, userEmail : string, contactName : string, message : string, status : string, subject : string) {

      this.router.navigate(['/dashboard/inquiry-view/'],{ queryParams: { Id:id,userEmail:userEmail,contactName:contactName,message:message,status:status,subject:subject}})
  }
  
  search(terms: string) {
    if(terms) {
      this.pagedItems = this.inquiry.filter((item) => item.contactName.startsWith(terms));
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


