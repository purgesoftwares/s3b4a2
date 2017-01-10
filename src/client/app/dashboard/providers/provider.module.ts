import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { ProviderComponent } from './provider.component';

@NgModule({
    imports: [RouterModule,BrowserModule, FormsModule],
    declarations: [ProviderComponent ],
    exports: [ProviderComponent]
})

export class ProviderModule { }
