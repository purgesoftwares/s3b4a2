import {Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import * as globals from './../../globals'; 


@Component({
  moduleId: module.id,
  selector: 'product-list',
  templateUrl: 'product-list.component.html',

})

export class ProductListComponent {
  model:any={};
  products: Array<Object>[];
  pager: any = {};
  pagedItems: any[];
  message: any= {};
  mess = false;
  token = localStorage.getItem('access_token');

  constructor(private http : Http, private route: ActivatedRoute) { }

    ngOnInit() {
      this.route.queryParams.subscribe(data => {this.model.id =  data['id'], this.model.name =  data['name']});
      this.getProducts(this.model.id);
    }

   getProducts(id: string) {
     this.http.get(globals.apiSecureUrl+'/product/provider-products/'+ id +'?access_token=' + this.token)
          .map(res => res.json())
          .subscribe(
            data => {
              if(data.content.length) {
                  this.products= data.content;
                  } else {
                      this.mess=true;
                      this.message= "There is no records found."
                  }
            },
            error => console.log("error"),
            () => console.log("complete")
          );
    }
}