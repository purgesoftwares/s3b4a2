import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { ViewRateComponent } from './viewRate.component';

@NgModule({
    imports: [RouterModule,BrowserModule, FormsModule],
    declarations: [ViewRateComponent ],
    exports: [ViewRateComponent]
})

export class ViewRateModule { }
