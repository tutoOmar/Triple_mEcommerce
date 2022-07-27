import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { InicioComponent } from './COMPONENT/inicio/inicio.component';
import { ProductosComponent } from './COMPONENT/productos/productos.component';
import { AboutusComponent } from './COMPONENT/aboutus/aboutus.component';
import { PromosComponent } from './COMPONENT/promos/promos.component';
import { ContactoComponent } from './COMPONENT/contacto/contacto.component';
import { CartComponent } from './COMPONENT/cart/cart.component';
import { LoginComponent } from './COMPONENT/login/login.component';
import { ConditionstermsComponent } from './COMPONENT/conditionsterms/conditionsterms.component';
import { HeaderComponent } from './COMPONENT/header/header.component';
import { FooterComponent } from './COMPONENT/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { RegisteRComponent } from './COMPONENT/registe-r/registe-r.component';
import { ProductoComponent } from './COMPONENT/producto/producto.component';

import { CargarScriptsService } from './cargar-scripts.service';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ProductosComponent,
    AboutusComponent,
    PromosComponent,
    ContactoComponent,
    CartComponent,
    LoginComponent,
    ConditionstermsComponent,
    HeaderComponent,
    FooterComponent,
    RegisteRComponent,
    ProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    MdbCarouselModule
  ],
  providers: [CargarScriptsService,
            JwtHelperService,
            {provide:JWT_OPTIONS,useValue:JWT_OPTIONS}],
  bootstrap: [AppComponent]
})
export class AppModule { }
