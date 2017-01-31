import {Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
 
@Component({
	moduleId: module.id,
    selector: 'inquiry-view',
	templateUrl: 'inquiry-view.component.html'
})

export class InquiryViewComponent {
	model: any={};

	constructor(private route: ActivatedRoute, private http: Http) {}

	ngOnInit() {
	   this.route.queryParams.subscribe(data => {this.model.id=data['Id'],this.model.userEmail=data['userEmail'],this.model.contactName=data['contactName'],this.model.message=data['message'],this.model.status=data['status'],this.model.subject=data['subject']});
	}
}
