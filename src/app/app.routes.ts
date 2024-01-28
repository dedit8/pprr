import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { FormComponent } from './components/home/form/form.component';

const APP_ROUTES: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'home/form', component: FormComponent},
  { path: 'login', component: LoginComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
  ];

  export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES,{ useHash:true });
