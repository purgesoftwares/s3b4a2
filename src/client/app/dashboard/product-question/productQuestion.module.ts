import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { ProductQuestionComponent } from './productQuestion.component';

@NgModule({
    imports: [RouterModule,BrowserModule, FormsModule],
    declarations: [ProductQuestionComponent],
    exports: [ProductQuestionComponent]
})

export class ProductQuestionModule { }
