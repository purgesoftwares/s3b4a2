import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AddProductQuestionComponent } from './addProductQuestion.component';

@NgModule({
    imports: [RouterModule,BrowserModule, FormsModule],
    declarations: [AddProductQuestionComponent ],
    exports: [AddProductQuestionComponent]
})

export class AddProductQuestionModule { }
