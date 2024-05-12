import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductosComponent } from './components/productos/productos.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { PromosComponent } from './components/promos/promos.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './components/login/login.component';
import { ConditionstermsComponent } from './components/conditionsterms/conditionsterms.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { RegisteRComponent } from './components/registe-r/registe-r.component';
import { ProductoComponent } from './components/producto/producto.component';

import { CargarScriptsService } from './cargar-scripts.service';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { SharedModule } from './shared/shared.module';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    AboutusComponent,
    PromosComponent,
    ContactoComponent,
    CartComponent,
    HeaderComponent,
    LoginComponent,
    ConditionstermsComponent,
    HeaderComponent,
    FooterComponent,
    RegisteRComponent,
    ProductoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    MdbCarouselModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
  ],
  providers: [
    CargarScriptsService,
    JwtHelperService,
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
