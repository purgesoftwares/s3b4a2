import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { DataTableModule } from 'angular-2-data-table';

import { ContentComponent } from './content.component';

@NgModule({
    imports: [RouterModule,BrowserModule, FormsModule, DataTableModule],
    declarations: [ContentComponent],
    exports: [ContentComponent]
})

export class ContentModule { }
