import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { ProviderQuestionComponent } from './providerQuestion.component';

@NgModule({
    imports: [RouterModule,BrowserModule, FormsModule],
    declarations: [ProviderQuestionComponent],
    exports: [ProviderQuestionComponent]
})

export class ProviderQuestionModule { }
