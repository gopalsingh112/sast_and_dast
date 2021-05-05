import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AddDeviceComponent } from './components/add-device/add-device.component';
import { DeviceDetailsComponent } from './components/device-details/device-details.component';
import { DevicesListComponent } from './components/devices-list/devices-list.component';

import { AuthModule } from '@auth0/auth0-angular';
import { LoginButtonComponent } from './components/login-button/login-button.component';
import { LogoutButtonComponent } from './components/logout-button/logout-button.component';
import { SignupButtonComponent } from './components/signup-button/signup-button.component';
import { AuthenticationButtonComponent } from './components/authentication-button/authentication-button.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthHttpInterceptor } from '@auth0/auth0-angular';

@NgModule({
  declarations: [
    AppComponent,
    AddDeviceComponent,
    DeviceDetailsComponent,
    DevicesListComponent,
    LoginButtonComponent,
    LogoutButtonComponent,
    SignupButtonComponent,
    AuthenticationButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,


    AuthModule.forRoot({
      domain: 'csci.us.auth0.com',
      clientId: 'aA4K8hu1FoytbF5T7KTbnGCx5W0gyGPZ',
      audience: 'https://localhost:3000/api/devices',
      httpInterceptor: {
        allowedList: [`http://localhost:3000/api/*`],
      },
    }),

  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthHttpInterceptor,
    multi: true,
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
