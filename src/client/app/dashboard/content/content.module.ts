import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { ContentComponent } from './content.component';

@NgModule({
    imports: [RouterModule,BrowserModule, FormsModule],
    declarations: [ContentComponent],
    exports: [ContentComponent]
})

export class ContentModule { }
