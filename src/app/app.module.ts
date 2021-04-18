import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {ProfileComponent} from './profile/profile.component';
import {LoginComponent} from './auth/login/login.component';
import {AdminSubjectsComponent} from './admin/admin-table/admin-table.component';
import {NavbarComponent} from './user/navbar/navbar.component';
import {HomeComponent} from './user/home/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {DemoMaterialModule} from './material-module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatNativeDateModule} from '@angular/material/core';
import {FormComponent} from './admin/form/form.component';
import {ErrorComponent} from './not-found/error.component';
import {TableComponent} from './user/table/table.component';
import { RegisterComponent } from './auth/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    LoginComponent,
    AdminSubjectsComponent,
    NavbarComponent,
    HomeComponent,
    FormComponent,
    ErrorComponent,
    TableComponent,
    RegisterComponent
  ],
  imports: [
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'login', component: LoginComponent},
      {path: 'profile', component: ProfileComponent},
      {path: 'navbar', component: NavbarComponent},
      {path: 'admin-table', component: AdminSubjectsComponent},
      {path: 'form', component: FormComponent},
      {path: 'table', component: TableComponent},
      {path: '**', component: ErrorComponent}
    ]),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule
  ],
  providers: [{provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'fill'}}],
  bootstrap: [AppComponent]
})
export class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
