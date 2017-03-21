import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { DataTableParams } from 'angular-2-data-table';
import 'rxjs/add/operator/toPromise';


const BASE_URL = 'http://54.161.216.233:8090/api/secured/';
const token = localStorage.getItem('access_token');
const access_token = ("?access_token=" + token);

function paramsToQueryString(params: DataTableParams) {
    let result = [];

    if (params.offset != null) {
        result.push(['_start', params.offset]);
    }
    if (params.limit != null) {
        result.push(['_limit', params.limit]);
    }
    if (params.sortBy != null) {
        result.push(['_sort', params.sortBy]);
    }
    if (params.sortAsc != null) {
        result.push(['_order', params.sortAsc ? 'ASC' : 'DESC']);
    }

    return result.map(param => param.join('=')).join('&');
}


@Injectable()
export class PaginateService {

    constructor (private http: Http) {}

    query(params: DataTableParams, url: string) {
        return this.http.get(BASE_URL + url + access_token).toPromise()
            .then((resp: Response) => ({
                items: resp.json(),
                count: Number(resp.headers.get('X-Total-Count'))
            }));
    }

    delete(url) {
        return this.http.delete(BASE_URL + url + access_token).toPromise()
            .then((resp: Response) => ( resp.json()))

    }
}
