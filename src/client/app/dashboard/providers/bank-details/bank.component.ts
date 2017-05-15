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
	bank: Array<Object>[];
  message: any= {};
  mess= false;
  flag = false;
  providerInfo: any={}

  token = localStorage.getItem('access_token');

	constructor(private route: ActivatedRoute, private http : Http) {}

	ngOnInit() {
	   	this.route.queryParams.subscribe(data => {this.model.id =  data['id']});

  		this.getBankDetail();

	   	this.getProvider();

      this.getProviderInformation();
    }

    getProvider() {
	   	this.http.get('http://54.161.216.233:8090/api/secured/provider/'+ this.model.id +'?access_token=' + this.token)
  				.map(res => res.json())
  				.subscribe(
  					data => {this.provider = data;
  							console.log(this.provider);},
  					error => { if(error.json().error) {
									this.message = error.json().message
									this.mess = true;
								}},
  					() => this.getAddress()
  				);
    }

    getBankDetail() {
    	this.http.get('http://54.161.216.233:8090/api/secured/bank-detail/get-bankdetail/' + this.model.id + '?access_token='+ this.token)
			.map(res => res.json())
			.subscribe(
				data => this.model = data,
				error => console.log(error),
				() => console.log("complete")
			);
    }

    getAddress() {
  		this.http.get('http://54.161.216.233:8090/api/secured/address/'+ this.provider.addressId +'?access_token=' + this.token)
  				.map(res => res.json())
          .subscribe(
            data => this.address= data,
            error => { console.log(error);},
            () => {console.log("complete");}
          ); 
    }

    getProviderInformation() {
      
      this.http.get('http://54.161.216.233:8090/api/secured/provider-information/get-information/'+this.model.id +'?access_token=' + this.token)
          .map(res => res.json())
          .subscribe(
            data => {this.flag = true;
              this.providerInfo= data;},
            error => { console.log(error);},
            () =>{ console.log("complete")}
          );
    }
}
