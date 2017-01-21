
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Customer } from './customer';
import 'rxjs/add/operator/map';

@Injectable()
export class CustomerService {

  constructor(private http: Http) { }
  getData() {
  		let headers = new Headers();
        return this.http.get('http://54.161.216.233:8090/api/secured/customer?access_token=c1417477-6f4b-485e-a518-f3de5cbca17e')
			.map(res=> res.json())
	}

	postData(custom : Customer) {
  		let headers = new Headers();
  		headers.append('Content-Type', 'application/json');
      return this.http.post('http://54.161.216.233:8090/api/secured/customer?access_token=c1417477-6f4b-485e-a518-f3de5cbca17e', custom, {headers: headers})
			         .map(res=> res.json());
	}
}