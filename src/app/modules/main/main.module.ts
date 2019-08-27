import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './home/home.component';
import { CoreModule } from 'src/app/core/core.module';
import { RhComponent } from './rh/rh.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    HomeComponent,
    RhComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    CoreModule
  ]
})
export class MainModule { }
