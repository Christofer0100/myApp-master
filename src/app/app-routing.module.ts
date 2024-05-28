import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { GuardiaGuard } from './access.guard';
import { GuardGuard } from './guard/guard.guard';

const routes: Routes = [

 
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'rcontrasenna',
    loadChildren: () => import('./rcontrasenna/rcontrasenna.module').then( m => m.RcontrasennaPageModule)
  },  
  {
    path: 'manuales',
    loadChildren: () => import('./manuales/manuales.module').then( m => m.ManualesPageModule)
  },
  {
    path: 'seguridad',
    loadChildren: () => import('./seguridad/seguridad.module').then( m => m.SeguridadPageModule)
  },
  {
    path: 'fijaciones',
    loadChildren: () => import('./fijaciones/fijaciones.module').then( m => m.FijacionesPageModule)
  },
  {
    path: 'materiales',
    loadChildren: () => import('./materiales/materiales.module').then( m => m.MaterialesPageModule)
  },
  {
    path: 'tornillos',
    loadChildren: () => import('./tornillos/tornillos.module').then( m => m.TornillosPageModule)
  },
  {
    path: 'medicion',
    loadChildren: () => import('./medicion/medicion.module').then( m => m.MedicionPageModule)
  },
  {
    path: 'suscribete',
    loadChildren: () => import('./suscribete/suscribete.module').then( m => m.SuscribetePageModule)
  },
  {
    path: '**',
    loadChildren: () => import('./not-found/not-found.module').then( m => m.NotFoundPageModule)
  }

  


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
