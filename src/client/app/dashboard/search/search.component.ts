import {Component} from '@angular/core';

@Component({
    selector: 'serach-bar',
    template: `<form (submit)="search(term.value)">
      <div>
        <input #term (keyup)="search(term.value)" [value]="terms" class="form-control" placeholder="Search" autofocus>
        <div class="input-group-btn">
          <button type="submit" class="btn btn btn-default btn-flat"><i class="fa fa-search"></i></button>
        </div>
      </div>
    </form>`
})

export class SearchComponent {}
