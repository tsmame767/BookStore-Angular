import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SigninComponent } from './components/signin/signin.component';
import { MatFormFieldModule, matFormFieldAnimations } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { SignupComponent } from './components/signup/signup.component';
import { MatSelectModule } from '@angular/material/select';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { DisplayBookComponent } from './components/display-book/display-book.component';
import { BookContainerComponent } from './components/book-container/book-container.component';
import { MatMenuModule } from '@angular/material/menu'; // Import MatMenuModule
import { MatTooltipModule } from '@angular/material/tooltip';
import { QuickViewComponent } from './components/quick-view/quick-view.component';
import { CartComponent } from './components/cart/cart.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
    DashboardComponent,
    HeaderComponent,
    DisplayBookComponent,
    BookContainerComponent,
    QuickViewComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatIconModule,
    MatMenuModule, // Add MatMenuModule here
    MatTooltipModule, // Add MatTooltipModule here
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
