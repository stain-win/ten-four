import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
    {
        path: '', component: HomeComponent,
    },
    {
        path: 'login', loadComponent: () => import('./login/login.component').then(m => m.LoginComponent),
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {

}
