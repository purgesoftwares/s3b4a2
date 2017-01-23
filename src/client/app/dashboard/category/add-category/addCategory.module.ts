import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AddCategoryComponent } from './addCategory.component';

@NgModule({
    imports: [RouterModule,BrowserModule, FormsModule],
    declarations: [AddCategoryComponent ],
    exports: [AddCategoryComponent]
})

export class AddCategoryModule { }
