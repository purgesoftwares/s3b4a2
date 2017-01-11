import {Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
 
@Component({
	moduleId: module.id,
    selector: 'bank-detail',
	templateUrl: 'bank.component.html'
})

export class BankDetailComponent {
	model: Array<Object>[];
	constructor(private route: ActivatedRoute) {}

	ngOnInit() {
	   this.route.queryParams.subscribe(data => this.model = data['details']);
	   console.log(this.model);
  	}
}
