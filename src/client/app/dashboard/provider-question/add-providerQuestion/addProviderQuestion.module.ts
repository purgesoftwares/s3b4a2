import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AddProviderQuestionComponent } from './addProviderQuestion.component';

@NgModule({
    imports: [RouterModule,BrowserModule, FormsModule],
    declarations: [AddProviderQuestionComponent ],
    exports: [AddProviderQuestionComponent]
})

export class AddProviderQuestionModule { }
