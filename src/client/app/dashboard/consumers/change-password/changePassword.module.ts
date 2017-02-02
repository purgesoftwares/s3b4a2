import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { ChangePasswordComponent } from './changePassword.component';

@NgModule({
    imports: [RouterModule,BrowserModule, FormsModule],
    declarations: [ChangePasswordComponent ],
    exports: [ChangePasswordComponent]
})

export class ChangePasswordModule { }
