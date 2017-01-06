import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { User } from './user'

@Injectable()
export class UserService {
  constructor(private http: Http) { }
  getData() {
  		let headers = new Headers();
  		return this.http.get('http://localhost:8090/api/user')
  				.map(res => res.json());
	}
}
