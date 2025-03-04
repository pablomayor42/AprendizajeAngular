import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter/counter-page.component';
import { HeroPageComponent } from './pages/hero/hero-page.component';
import { DragonballPageComponent } from './pages/dragonball/dragonball-page.component';
import { DragonballSuperPageComponent } from './pages/dragonball-super/dragonball-super-page.component';

export const routes: Routes = [
  //SI estamos en la ruta hola mundo => HolaMundoComponent

  // /admin => AdminComponent


  {
    path: '',
    component:CounterPageComponent,

  },
  {
    path: 'hero',
    component: HeroPageComponent,
  },
  { // Si no encuentra ninguna ruta va a redirigir a la ruta principal
    path: 'dragonball',
    component: DragonballPageComponent,
  },
  { // Si no encuentra ninguna ruta va a redirigir a la ruta principal
    path: 'dragonballSuper',
    component: DragonballSuperPageComponent,
  },
  { // Si no encuentra ninguna ruta va a redirigir a la ruta principal
    path: '**',
    redirectTo: '',
  },
];
