import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { InquiryComponent } from './inquiry.component';

@NgModule({
    imports: [RouterModule,BrowserModule, FormsModule],
    declarations: [InquiryComponent],
    exports: [InquiryComponent]
})

export class InquiryModule { }
