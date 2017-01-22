import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { CategoryComponent } from './category.component';

@NgModule({
    imports: [RouterModule,BrowserModule, FormsModule],
    declarations: [CategoryComponent],
    exports: [CategoryComponent]
})

export class CategoryModule { }