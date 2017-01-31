import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { InquiryViewComponent } from './inquiry-view.component';

@NgModule({
    imports: [RouterModule,BrowserModule, FormsModule],
    declarations: [InquiryViewComponent ],
    exports: [InquiryViewComponent]
})

export class InquiryViewModule { }
