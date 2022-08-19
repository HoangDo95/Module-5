import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CustomerListComponent} from './customer-management/customer-list/customer-list.component';
import {CustomerCreateComponent} from './customer-management/customer-create/customer-create.component';
import {CustomerEditComponent} from './customer-management/customer-edit/customer-edit.component';
import {ContractListComponent} from './contract-management/contract-list/contract-list.component';
import {ContractCreateComponent} from './contract-management/contract-create/contract-create.component';
import {HomeComponent} from './home/home.component';
import {RouterModule, Routes} from '@angular/router';
import {FacilityListComponent} from './facility-namagement/facility-list/facility-list.component';
import {FacilityCreateComponent} from './facility-namagement/facility-create/facility-create.component';
import {FacilityEditComponent} from './facility-namagement/facility-edit/facility-edit.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {ReactiveFormsModule} from '@angular/forms';

const router: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {path: 'customer-list', component: CustomerListComponent},
  {path: 'customer-create', component: CustomerCreateComponent},
  {path: 'customer-edit/:id', component: CustomerEditComponent},
  {path: 'facility-list', component: FacilityListComponent},
  {path: 'facility-create', component: FacilityCreateComponent},
  {path: 'facility-edit/:id', component: FacilityEditComponent},
  {path: 'contract-management-list', component: ContractListComponent},
  {path: 'contract-management-create', component: ContractCreateComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    CustomerCreateComponent,
    CustomerEditComponent,
    ContractListComponent,
    ContractCreateComponent,
    HomeComponent,
    FacilityListComponent,
    FacilityCreateComponent,
    FacilityEditComponent,
    HeaderComponent,
    FooterComponent,
  ],
    imports: [
        BrowserModule,
        RouterModule,
        RouterModule.forRoot(router),
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
