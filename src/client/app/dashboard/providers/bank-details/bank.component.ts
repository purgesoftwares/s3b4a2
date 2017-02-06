import {Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
 
@Component({
	moduleId: module.id,
    selector: 'bank-detail',
	templateUrl: 'bank.component.html'
})

export class BankDetailComponent {
	model: any={};
	provider: any={};
	address: any={};
	constructor(private route: ActivatedRoute, private http : Http) {}

	token:any={};

    token = localStorage.getItem('access_token');
	ngOnInit() {
	   this.route.queryParams.subscribe(data => {this.model.id =  data['id'],this.model.beneficiaryName =
	   														data['beneficiaryName'],this.model.providerId =
	   														data['providerId'],this.model.beneficiaryAddress =  
	   														data['beneficiaryAddress'],this.model.bankName =  
	   														data['bankName'],this.model.branchNumber =  
	   														data['branchNumber'],this.model.accountNumber =  
	   														data['accountNumber']});

	   this.http.get('http://54.161.216.233:8090/api/secured/provider/'+ this.model.providerId +'?access_token=' + this.token)
  				.map(res => res.json())
  				.subscribe(
  					data => this.provider = data,
  					error => { if(error.json().error) {
									this.message = error.json().message
									this.mess = true;
								}},
  					() => this.getAddress()
  				);

    }

    getAddress() {
  		this.http.get('http://54.161.216.233:8090/api/secured/address/'+ this.provider.addressId +'?access_token=' + this.token)
  				.map(res => res.json())
          .subscribe(
            data => this.address= data,
            error => { console.log(error);},
            () => console.log("hii")
          ); 
    }
}
