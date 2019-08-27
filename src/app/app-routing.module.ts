import { MainRoutingModule } from './modules/main/main-routing.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccessControlRoutingModule } from './modules/access-control/access-control-routing.module';

const routes: Routes = [
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AccessControlRoutingModule,
    MainRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
