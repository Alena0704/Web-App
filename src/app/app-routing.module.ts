import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './user/home/home.component';
import {LoginComponent} from './auth/login/login.component';
import {RegisterComponent} from './auth/register/register.component';
import {ProfileComponent} from './profile/profile.component';
import {NavbarComponent} from './user/navbar/navbar.component';
import {AdminSubjectsComponent} from './admin/admin-table/admin-table.component';
import {FormComponent} from './admin/form/form.component';
import {TableComponent} from './user/table/table.component';
import {ErrorComponent} from './not-found/error.component';
import {AuthGuard} from './auth/auth.guard';
import {config} from 'rxjs';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'navbar',
    component: NavbarComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin-table',
    component: AdminSubjectsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'form',
    component: FormComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'table',
    component: TableComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    component: ErrorComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {relativeLinkResolution: 'legacy'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
