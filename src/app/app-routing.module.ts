import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DisplayBookComponent } from './components/display-book/display-book.component';
import { BookContainerComponent } from './components/book-container/book-container.component';
import { QuickViewComponent } from './components/quick-view/quick-view.component';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
  {
    path: '',component:DashboardComponent,
    children: [
      {
        path: '', component: BookContainerComponent
      },
      {
        path: 'ShowBooks', component: DisplayBookComponent
      },
      {
        path:'book/:id', component:QuickViewComponent
      },
      {
        path:'cart', component:CartComponent
      }
    ]
  }
  
//   {
//   path: '',component:SigninComponent
// },
// {
//   path: 'signup', component:SignupComponent
// },
// {
//   path: 'ForgetPassword',component:ForgetPasswordComponent
// },
// {
//   path: 'ResetPassword',component:ResetPasswordComponent
// }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
