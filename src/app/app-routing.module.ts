import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { CartComponent } from './components/cart/cart.component';
import { ConditionstermsComponent } from './components/conditionsterms/conditionsterms.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { LoginComponent } from './components/login/login.component';
import { ProductosComponent } from './components/productos/productos.component';
import { PromosComponent } from './components/promos/promos.component';
import { RegisteRComponent } from './components/registe-r/registe-r.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  // { path: 'inicio', component: InicioComponent },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  { path: 'login', component: LoginComponent },
  { path: 'cart', component: CartComponent, canActivate: [AuthGuard] },
  { path: 'product', component: ProductosComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'promos', component: PromosComponent },
  { path: 'contact', component: ContactoComponent },
  { path: 'conditions', component: ConditionstermsComponent },
  { path: 'register', component: RegisteRComponent },
  {
    path: 'uploadProduct',
    loadChildren: () =>
      import('./pages/upload-product/upload-product.module').then(
        (m) => m.UploadProductModule
      ),
  },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
