import { AuthUserService } from './service/auth-user.service';
import { UserServiceService } from './service/user-service.service';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { HousingService } from './service/housing.service';
import { NgModule, Component } from '@angular/core';
import{ FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PropertyListComponent } from './property/property-list/property-list.component'
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { NavBarComponent } from './nav-bar/nav-bar/nav-bar.component';
import{ RouterModule, Routes } from '@angular/router';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';
import { PageNotFoundComponent } from './property/page-not-found/page-not-found.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import {BrowserAnimationsModule} from'@angular/platform-browser/animations';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
//import { PropertyDetailResolverService } from './property/property-detail/property-detail-resolver.service';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { FilterPipe } from './pipes/filter.pipe';
import { SortPipe } from './pipes/sort.pipe';

const routes: Routes =[
  {path:'', component:PropertyListComponent},
  {path:'rent', component:PropertyListComponent},
  {path:'detail/:id', component:PropertyDetailComponent},
  {path:'add',component: AddPropertyComponent },
  {path:'login',component:UserLoginComponent},
  {path:'Register',component:UserRegisterComponent},
  {path:'**',component:PageNotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    PropertyListComponent,
    PropertyCardComponent,
    NavBarComponent,
    AddPropertyComponent,
    PropertyDetailComponent,
    PageNotFoundComponent,
    UserLoginComponent,
    UserRegisterComponent,
    FilterPipe,
    SortPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    TabsModule,
    ButtonsModule.forRoot(),
    BsDatepickerModule.forRoot(),
    NgxGalleryModule

  ],
  providers: [
    HousingService,
    UserServiceService,
    AuthUserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
