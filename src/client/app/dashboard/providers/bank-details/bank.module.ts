import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { BankDetailComponent } from './bank.component';

@NgModule({
    imports: [RouterModule,BrowserModule, FormsModule],
    declarations: [BankDetailComponent ],
    exports: [BankDetailComponent]
})

export class BankDetailModule { }
