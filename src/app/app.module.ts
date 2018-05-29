import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

import { AuthModule } from './auth/auth.module';
import {RegisterComponent} from './auth/components/register/register.component'

import { AboutComponent } from './components/about/about.component';
import { SupportersComponent } from './components/supporters/supporters.component';
import { AdoptInfoComponent } from './components/adopt-info/adopt-info.component';
import { TempHouseComponent } from './components/temp-house/temp-house.component';
import { DonateComponent } from './components/donate/donate.component';
import { DogThumbnailComponent } from './components/dog-thumbnail/dog-thumbnail.component';
import { DogAdoptComponent } from './components/dog-adopt/dog-adopt.component'

import { GeneralService} from './services/general.service';
import { StartComponent } from './components/start/start.component'

const appRoutes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'supporters',      component: SupportersComponent },
  { path: 'adopt',      component: AdoptInfoComponent },
  { path: 'temp-house',      component: TempHouseComponent },
  { path: 'donate',      component: DonateComponent },
  { path: 'register',      component: RegisterComponent },
  { path: 'dog/:id',      component: DogAdoptComponent },
  { path: '',      component: StartComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    SupportersComponent,
    AdoptInfoComponent,
    TempHouseComponent,
    DonateComponent,
    DogThumbnailComponent,
    DogAdoptComponent,
    StartComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),BrowserModule, AuthModule,FormsModule
  ],
  providers: [GeneralService],
  bootstrap: [AppComponent]
})
export class AppModule { }
