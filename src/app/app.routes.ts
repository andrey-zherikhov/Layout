import { Routes } from '@angular/router';
import { MainLayoutComponent } from './core/layouts/main-layout/main-layout.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { MachinesPageComponent } from './pages/machines-page/machines-page.component';
import { UnknownPageComponent } from './pages/unknown-page/unknown-page.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'machines', component: MachinesPageComponent },
      { path: '', pathMatch: 'full', redirectTo: 'machines' },
    ],
  },
  { path: 'login', component: LoginPageComponent },
  { path: '**', component: UnknownPageComponent },
];
