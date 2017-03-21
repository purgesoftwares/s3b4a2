import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { DataTableModule } from 'angular-2-data-table';

import { ConsumerComponent } from './consumer.component';

@NgModule({
    imports: [RouterModule,BrowserModule, FormsModule, DataTableModule],
    declarations: [ConsumerComponent],
    exports: [ConsumerComponent]
})

export class ConsumerModule { }