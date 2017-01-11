import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
  constructor(private http: Http) { }
  getData() {
  		return this.http.get('http://localhost:8090/api/secured/user')
  				.map(res => res.json());
	}
}
