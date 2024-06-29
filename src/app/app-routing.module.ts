import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [{ path: 'users', loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule) },
  {path:"", component:LoginComponent},
  {path:"dashboard", component:DashboardComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
