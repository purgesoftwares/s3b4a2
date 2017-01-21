import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AddContentComponent } from './addContent.component';

@NgModule({
    imports: [RouterModule,BrowserModule, FormsModule],
    declarations: [AddContentComponent ],
    exports: [AddContentComponent]
})

export class AddContentModule { }
