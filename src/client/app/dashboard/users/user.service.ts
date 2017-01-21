import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
  constructor(private http: Http) { }
  getData() {
  		return this.http.get('http://54.161.216.233:8090/api/secured/user?access_token=c1417477-6f4b-485e-a518-f3de5cbca17e')
  				.map(res => res.json());
	}
}
