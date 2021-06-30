import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
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
import {RegisterComponent} from './auth/register/register.component';
import {MenuComponent} from './menu/menu.component';
import {AuthGuard} from './auth/auth.guard';
import {AppRoutingModule} from './app-routing.module';
import {enableProdMode} from '@angular/core';
import { SubjectFormComponent } from './subject-form/subject-form.component';
import { ConstrFuncRespComponent } from './constr-func-resp/constr-func-resp.component';
import { IStudentDataComponent } from './i-student-data/i-student-data.component';
import { TestingComponent } from './testing/testing.component';
import { ConstructorTestComponent } from './constructor-test/constructor-test.component';

enableProdMode();

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
    RegisterComponent,
    MenuComponent,
    SubjectFormComponent,
    ConstrFuncRespComponent,
    IStudentDataComponent,
    TestingComponent,
    ConstructorTestComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [{provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'fill'}}, AuthGuard],
  bootstrap: [AppComponent, ConstructorTestComponent]
})
export class AppModule {

}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
