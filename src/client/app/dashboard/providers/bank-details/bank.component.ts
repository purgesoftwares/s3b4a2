import {Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
 
@Component({
	moduleId: module.id,
    selector: 'bank-detail',
	templateUrl: 'bank.component.html'
})

export class BankDetailComponent {
	model: any={};
	constructor(private route: ActivatedRoute) {}

	ngOnInit() {
	   this.route.queryParams.subscribe(data => {this.model.id =  data['id'],this.model.beneficiaryName =
	   														data['beneficiaryName'],this.model.providerId =
	   														data['providerId'],this.model.beneficiaryAddress =  
	   														data['beneficiaryAddress'],this.model.bankName =  
	   														data['bankName'],this.model.branchNumber =  
	   														data['branchNumber'],this.model.accountNumber =  
	   														data['accountNumber']});
  	}
}
