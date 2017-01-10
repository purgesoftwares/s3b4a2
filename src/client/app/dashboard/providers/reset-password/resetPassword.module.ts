import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { ResetPasswordComponent } from './resetPassword.component';

@NgModule({
    imports: [RouterModule,BrowserModule, FormsModule],
    declarations: [ResetPasswordComponent ],
    exports: [ResetPasswordComponent]
})

export class ResetPasswordModule { }
