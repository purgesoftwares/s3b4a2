import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { DataTableModule } from 'angular-2-data-table';

import { CategoryComponent } from './category.component';

@NgModule({
    imports: [RouterModule,BrowserModule, FormsModule, DataTableModule],
    declarations: [CategoryComponent],
    exports: [CategoryComponent]
})

export class CategoryModule { }