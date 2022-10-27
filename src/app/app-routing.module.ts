import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth-components/login/login.component';
import { AuthGuard } from './Auth_Guard/auth.guard';
import { ContainerComponent } from './pos-components/container/container.component';

const routes: Routes = [
  {path:'', redirectTo:'signin', pathMatch:'full'},
  {
    path:'signin',
    component: LoginComponent,
  },
  {
    path:'dashboard',
   component:ContainerComponent,
   canActivate: [AuthGuard]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
