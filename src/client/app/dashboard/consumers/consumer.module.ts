import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { ConsumerComponent } from './consumer.component';

@NgModule({
    imports: [RouterModule,BrowserModule, FormsModule],
    declarations: [ConsumerComponent],
    exports: [ConsumerComponent]
})

export class ConsumerModule { }