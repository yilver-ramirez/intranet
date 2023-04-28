import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//componentes
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { canActivate, redirectUnauthorizedTo } from "@angular/fire/auth-guard";


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'not_found', component: NotFoundComponent },
  { 
    path: 'dashboard', 
    loadChildren: () => import ('./components/dashboard/dashboard.module').then(x => x.DashboardModule), 
    ...canActivate(() => redirectUnauthorizedTo(['/login'])) 
  },
  {path: '**', redirectTo: 'not_found', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
