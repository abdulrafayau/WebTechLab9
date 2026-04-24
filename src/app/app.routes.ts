import { Routes } from '@angular/router';
import { AuthGuard } from './core/auth-guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { 
    path: 'login', 
    loadComponent: () => import('./login/login').then(m => m.LoginComponent) 
  },
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    loadComponent: () => import('./dashboard/dashboard').then(m => m.DashboardComponent)
  },
  {
    path: 'courses',
    canActivate: [AuthGuard],
    loadComponent: () => import('./courses/courses').then(m => m.CoursesComponent)
  },
  {
    path: 'profile',
    canActivate: [AuthGuard],
    loadComponent: () => import('./profile/profile').then(m => m.ProfileComponent)
  }
];