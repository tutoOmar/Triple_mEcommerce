import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './COMPONENT/aboutus/aboutus.component';
import { CartComponent } from './COMPONENT/cart/cart.component';
import { ConditionstermsComponent } from './COMPONENT/conditionsterms/conditionsterms.component';
import { ContactoComponent } from './COMPONENT/contacto/contacto.component';
import { InicioComponent } from './COMPONENT/inicio/inicio.component';
import { LoginComponent } from './COMPONENT/login/login.component';
import { ProductosComponent } from './COMPONENT/productos/productos.component';
import { PromosComponent } from './COMPONENT/promos/promos.component';
import { RegisteRComponent } from './COMPONENT/registe-r/registe-r.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
{path:'inicio',component: InicioComponent},
{path:'login',component:LoginComponent },
{path:'cart',component: CartComponent,canActivate:[AuthGuard]},
{path:'product',component: ProductosComponent },
{path:'aboutus',component:AboutusComponent },
{path:'promos',component: PromosComponent},
{path:'contact',component: ContactoComponent},
{path:'conditions',component:ConditionstermsComponent },
{path:'register',component:RegisteRComponent},
{path:'**',redirectTo:'/inicio',pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
