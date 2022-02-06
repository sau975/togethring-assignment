import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AuthGuard } from '../login/guards/auth.guard';
import { ProfileComponent } from './components/profile/profile.component';

const routes : Routes = [
  {
    path:'home', component:HomeComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'profile', component:ProfileComponent,
    canActivate:[AuthGuard]
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    HomeComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot(routes)
  ]
})
export class HomeModule { }
