import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthService } from './services/auth.service';

@NgModule({
  imports: [CommonModule,HttpClientModule,FormsModule],
	providers:[AuthService],
  declarations: [LoginComponent,RegisterComponent],
	exports: [LoginComponent,RegisterComponent]
})
export class AuthModule { }
