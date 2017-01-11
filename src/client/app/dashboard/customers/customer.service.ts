
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Customer } from './customer';
import 'rxjs/add/operator/map';

@Injectable()
export class CustomerService {

  constructor(private http: Http) { }
  getData() {
  		let headers = new Headers();
        return this.http.get('http://localhost:8090/api/secured/customer')
			.map(res=> res.json())
	}

	postData(custom : Customer) {
  		let headers = new Headers();
  		headers.append('Content-Type', 'application/json');
      return this.http.post('http://localhost:8090/api/secured/customer', custom, {headers: headers})
			         .map(res=> res.json());
	}
}