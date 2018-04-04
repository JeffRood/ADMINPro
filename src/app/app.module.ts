
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// RUTAS!!!
import { APP_ROUTES } from './app.routes';

// MODULOS!!!
import { PagesModule } from './pages/pages.module';
import { FormsModule } from '@angular/forms';
import {ServiceModule} from './services/service.module';
import { ReactiveFormsModule } from '@angular/forms';


// SERVICIOS!!!
// ESTAN IMPORTADOS EN MODULOS
// COMPONENTES!!
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';









@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule,
    FormsModule,
    ReactiveFormsModule,
    ServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
