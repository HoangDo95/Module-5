import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CustomerListComponent} from './customer-management/customer-list/customer-list.component';
import {CustomerCreateComponent} from './customer-management/customer-create/customer-create.component';
import {CustomerEditComponent} from './customer-management/customer-edit/customer-edit.component';
import {ContractListComponent} from './contract/contract-list/contract-list.component';
import {ContractCreateComponent} from './contract/contract-create/contract-create.component';
import {CustomerManagementComponent} from './customer-management/customer-management.component';
import {HomeComponent} from './home/home.component';
import {RouterModule, Routes} from '@angular/router';
import {FacilityListComponent} from './facility-namagement/facility-list/facility-list.component';
import {FacilityCreateComponent} from './facility-namagement/facility-create/facility-create.component';
import {FacilityEditComponent} from './facility-namagement/facility-edit/facility-edit.component';


const router: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {path: 'customer-list', component: CustomerListComponent},
  {path: 'customer-create', component: CustomerCreateComponent},
  {path: 'customer-edit', component: CustomerEditComponent},
  {path: 'facility-list', component: FacilityListComponent},
  {path: 'facility-create', component: FacilityCreateComponent},
  {path: 'facility-edit', component: FacilityEditComponent},
  {path: 'contract-list', component: ContractListComponent},
  {path: 'contract-create', component: ContractCreateComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    CustomerCreateComponent,
    CustomerEditComponent,
    ContractListComponent,
    ContractCreateComponent,
    CustomerManagementComponent,
    HomeComponent,
    FacilityListComponent,
    FacilityCreateComponent,
    FacilityEditComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(router)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
