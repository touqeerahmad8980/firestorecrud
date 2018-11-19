import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebApiDataComponent } from './web-api-data/web-api-data.component';
import { EmployeesComponent } from './employees/employees.component';

const routes: Routes = [
  { path: '', redirectTo: '/employee-data', pathMatch: 'full' },
  { path: 'web-api-data', component: WebApiDataComponent},
  { path: 'employee-data', component: EmployeesComponent},
  // { path: 'index', component: IndexComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
