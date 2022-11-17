import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth-components/login/login.component';
import { AuthGuard } from './Auth_Guard/auth.guard';
import { ContainerComponent } from './pos-components/container/container.component';
import { ContentContainerComponent } from './pos-components/container/main-page/content-container/content-container.component';
import { PaymentComponent } from './pos-components/container/main-page/sidebar/payment/payment.component';

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
},
{
  path:'payment',
  component: PaymentComponent,
  canActivate: [AuthGuard]
},
{
  path:'pos',
  component: ContentContainerComponent,
  canActivate: [AuthGuard]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
